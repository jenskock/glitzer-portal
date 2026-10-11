import cairosvg, io
from PIL import Image, ImageDraw, ImageFont
W,H=2400,1250
bg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe8ff"/><stop offset="1" stop-color="#fff3d6"/></linearGradient></defs>
<rect width="{W}" height="{H}" rx="50" fill="url(#s)"/>
<g stroke="#2d1e17" stroke-width="8" stroke-linejoin="round">
<path d="M0 760 Q600 700 1200 740 Q1800 780 2400 720 L2400 1250 L0 1250 Z" fill="#8fd47a"/>
<path d="M0 1080 Q600 1040 1200 1070 Q1800 1100 2400 1060 L2400 1250 L0 1250 Z" fill="#46b6e6"/>
<path d="M2400 80 Q2200 110 2170 330 Q2290 300 2400 240 Z" fill="#3c9a4a"/>
<path d="M0 100 Q190 130 210 320 Q100 300 0 250 Z" fill="#56b85a"/>
</g>
<path d="M300 1150 q50 -18 100 0 M1100 1170 q50 -18 100 0 M1900 1150 q50 -18 100 0" fill="none" stroke="#bdeeff" stroke-width="8" stroke-linecap="round"/>
</svg>'''
base=Image.open(io.BytesIO(cairosvg.svg2png(bytestring=bg.encode()))).convert("RGBA")
font=ImageFont.truetype("/usr/share/fonts/truetype/sand-box/google/Baloo 2/Baloo2-VariableFont_wght.ttf",64)
try: font.set_variation_by_name("Bold")
except Exception: pass
# name, scale(height px), center x, feet y, label
cast=[("rudi",560,230,1040,"Rudi"),("momo",560,560,1050,"Momo"),("paula",600,880,1050,"Paula"),
      ("bruno",640,1220,1060,"Bruno"),("lotti",620,1560,1060,"Lotti"),("tuko",560,1890,1050,"Tuko"),("fips",420,2190,760,"Fips")]
d=ImageDraw.Draw(base)
for n,h,cx,fy,label in cast:
    im=Image.open(f"png/transparent/{n}.png").convert("RGBA")
    w=int(im.width*h/im.height); im=im.resize((w,h),Image.LANCZOS)
    base.alpha_composite(im,(cx-w//2,fy-h+int(h*0.04)))
for n,h,cx,fy,label in cast:
    ly = fy+40 if n!="fips" else fy+30
    tw=d.textlength(label,font=font)
    d.rounded_rectangle((cx-tw/2-28,ly-6,cx+tw/2+28,ly+78),radius=40,fill="#ffffff",outline="#2d1e17",width=6)
    d.text((cx-tw/2,ly-6),label,font=font,fill="#2d1e17")
base.convert("RGB").save("lineup.png")
print("ok")
