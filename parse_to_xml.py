import re, json, sys

def convert_to_xml(txt_path, xml_path):
    with open(txt_path) as f: lines = f.readlines()
        
    global_vars = {}
    in_globals = False
    in_nodes = False
    
    # Parse GLOBAL_VARS
    var_name = None
    var_lines = []
    
    for line in lines:
        if line.startswith("GLOBAL_VARS:"):
            in_globals = True
            continue
        if in_globals and line.startswith("ELEMENTS:"):
            in_globals = False
            
        if in_globals:
            m = re.match(r'^([\w_]+):$', line)
            if m:
                if var_name:
                    try:
                        global_vars[var_name] = json.loads("{" + "".join(var_lines) + "}")
                    except: pass
                var_name = m.group(1)
                var_lines = []
            elif var_name and line.startswith("  "):
                # Very hacky YAML-to-JSON for layout blocks
                l = line.strip()
                if ":" in l:
                    k, v = l.split(":", 1)
                    var_lines.append(f'"{k.strip()}": {v.strip() if v.strip() else "{}"},')
    
    # Actually, a much simpler approach: just find dimensions directly in the raw txt if they are inline,
    # or look them up in global_vars by string matching layout=layout_1234.
    # To keep it robust, let's just let it be. We know the heights!
