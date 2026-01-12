import os
import re

FILE_PATH = "/Users/johnny/Documents/Sync/IOTO-Plugins/.obsidian/plugins/sync-script-generator/src/constants.ts"

def sort_options():
    with open(FILE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into parts: pre-array, array-content, post-array
    start_marker = 'export const SYNC_OPTIONS: SyncOption[] = [\n'
    end_marker = '];'
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Could not find start marker")
        return
    
    start_content_idx = start_idx + len(start_marker)
    end_idx = content.rfind(end_marker)
    
    if end_idx == -1:
        print("Could not find end marker")
        return

    pre_content = content[:start_content_idx]
    array_content = content[start_content_idx:end_idx]
    post_content = content[end_idx:]

    # Parse blocks
    blocks = []
    current_block_lines = []
    in_block = False
    
    lines = array_content.split('\n')
    for line in lines:
        stripped = line.strip()
        if stripped == '':
            continue
            
        if stripped.startswith('{'):
            in_block = True
            current_block_lines = [line]
        elif stripped.startswith('}') or stripped.startswith('},'):
            if in_block:
                current_block_lines.append(line)
                blocks.append('\n'.join(current_block_lines))
                in_block = False
                current_block_lines = []
        else:
            if in_block:
                current_block_lines.append(line)

    print(f"Found {len(blocks)} options.")

    # Sort blocks
    def get_sort_key(block):
        level_match = re.search(r'level:\s*"([^"]+)"', block)
        name_match = re.search(r'name:\s*"([^"]+)"', block)
        required_match = re.search(r'required:\s*(true|false)', block)
        
        level = level_match.group(1) if level_match else ""
        name = name_match.group(1) if name_match else ""
        required_str = required_match.group(1) if required_match else "false"
        
        level_order = {"Root": 0, "Vault": 1, "Folder": 2}
        required_order = {"true": 0, "false": 1} # true comes before false
        
        # Tuple comparison: Level, Required, Name
        return (level_order.get(level, 3), required_order.get(required_str, 1), name)

    blocks.sort(key=get_sort_key)
    
    # Ensure all blocks end with comma for consistency
    formatted_blocks = []
    for block in blocks:
        lines = block.split('\n')
        last_line = lines[-1]
        if last_line.strip() == '}':
            lines[-1] = last_line.replace('}', '},')
        formatted_blocks.append('\n'.join(lines))
        
    new_array_content = '\n'.join(formatted_blocks) + '\n'
    
    # Write back
    new_full_content = pre_content + new_array_content + post_content
    
    with open(FILE_PATH, 'w', encoding='utf-8') as f:
        f.write(new_full_content)
        
    print(f"Successfully sorted {len(blocks)} options in {FILE_PATH}")

if __name__ == "__main__":
    sort_options()
