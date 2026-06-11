import re
from pathlib import Path
p = Path(r'C:\Users\DELL\Desktop\Flare\index.html')
text = p.read_text(encoding='utf-8')
new = re.sub(r'href\s*=\s*(["\"])index\.html(\s*)\1', r'href=\1wallet.html\2\1', text)
if text == new:
    print('no changes')
else:
    p.write_text(new, encoding='utf-8')
    print('replaced')
