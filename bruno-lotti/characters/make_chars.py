# Generates consistent character SVGs (shared style) and renders PNGs.
import cairosvg, os
OUT = os.path.dirname(os.path.abspath(__file__))
INK = "#2d1e17"; SW = 6

TRANSPARENT = False
def doc(inner, bg="#fff6e0", accent="#ffe9b8", w=600, h=700):
    back = "" if TRANSPARENT else f'''<rect x="0" y="0" width="{w}" height="{h}" rx="40" fill="{bg}"/>
<circle cx="{w/2}" cy="{h*0.42}" r="{w*0.40}" fill="{accent}"/>'''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
{back}
<ellipse cx="{w/2}" cy="{h-58}" rx="170" ry="22" fill="#000" opacity="0.12"/>
<g stroke="{INK}" stroke-width="{SW}" stroke-linejoin="round" stroke-linecap="round">
{inner}
</g></svg>'''

def eye(x, y, rx=13, ry=16):
    return f'''<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="{INK}"/>
<circle cx="{x+rx*0.35}" cy="{y-ry*0.4}" r="{rx*0.42}" fill="#fff" stroke="none"/>
<circle cx="{x-rx*0.35}" cy="{y+ry*0.45}" r="{rx*0.18}" fill="#fff" stroke="none"/>'''

def cheeks(x1, x2, y, r=16):
    return f'''<ellipse cx="{x1}" cy="{y}" rx="{r}" ry="{r*0.65}" fill="#ff7b9c" opacity="0.55" stroke="none"/>
<ellipse cx="{x2}" cy="{y}" rx="{r}" ry="{r*0.65}" fill="#ff7b9c" opacity="0.55" stroke="none"/>'''

def mirror(s):  # mirror around x=300
    return f'<g transform="translate(600,0) scale(-1,1)">{s}</g>'

# ---------------- BRUNO (capybara) ----------------
def bruno():
    fur, furd, light, nose = "#b8794a", "#9a5f35", "#dcae7e", "#5a3622"
    leg = f'<rect x="222" y="555" width="62" height="88" rx="28" fill="{furd}"/>' \
          f'<path d="M232 632 h42" fill="none" stroke-width="4"/>'
    arm = f'<path d="M168 420 C120 450 118 520 150 548 C170 565 196 548 190 520 C186 495 196 470 205 450 Z" fill="{furd}"/>'
    s = f'''
{leg}{mirror(leg)}
{arm}{mirror(arm)}
<ellipse cx="300" cy="460" rx="138" ry="140" fill="{fur}"/>
<ellipse cx="300" cy="490" rx="88" ry="92" fill="{light}" stroke="none"/>
<path d="M240 470 q10 6 20 0 M330 520 q10 6 20 0 M290 560 q10 6 20 0" fill="none" stroke="{furd}" stroke-width="4"/>
<!-- bandana -->
<path d="M200 330 Q300 375 400 330 L392 362 Q300 400 208 362 Z" fill="#e8413c"/>
<path d="M262 375 L300 450 L338 375 Z" fill="#e8413c"/>
<circle cx="285" cy="395" r="5" fill="#fff" stroke="none"/><circle cx="310" cy="410" r="5" fill="#fff" stroke="none"/><circle cx="298" cy="428" r="4" fill="#fff" stroke="none"/>
<!-- ears: tiny, high, set back (capybara) -->
<ellipse cx="236" cy="138" rx="16" ry="13" fill="{furd}"/><ellipse cx="236" cy="140" rx="7" ry="6" fill="{nose}" stroke="none"/>
<ellipse cx="364" cy="138" rx="16" ry="13" fill="{furd}"/><ellipse cx="364" cy="140" rx="7" ry="6" fill="{nose}" stroke="none"/>
<!-- head: tall blunt brick, widest at the muzzle -->
<path d="M228 175 Q230 118 300 116 Q370 118 372 175 L404 300 Q408 354 300 356 Q192 354 196 300 Z" fill="{fur}"/>
<path d="M214 262 Q218 236 300 234 Q382 236 386 262 L390 310 Q388 348 300 350 Q212 348 210 310 Z" fill="{light}"/>
<path d="M246 258 Q300 240 354 258 Q360 282 300 288 Q240 282 246 258 Z" fill="{nose}"/>
<path d="M276 262 q-6 8 2 16 M324 262 q6 8 -2 16" fill="none" stroke="#1d120b" stroke-width="5"/>
<path d="M300 289 V305 M276 312 Q290 324 300 306 Q310 324 324 312" fill="none" stroke-width="5"/>
{eye(258,192,11,14)}{eye(342,192,11,14)}
<path d="M242 168 Q256 160 272 166 M328 166 Q344 160 358 168" fill="none" stroke-width="6"/>
{cheeks(232,368,245,14)}
<path d="M285 118 q8 -22 22 -10 q-2 -18 18 -12" fill="none" stroke="{furd}" stroke-width="5"/>
'''
    return doc(s, bg="#e6f6ea", accent="#c9edd2")

# ---------------- LOTTI (axolotl) ----------------
def lotti():
    pink, pinkd, belly, gill, gilld = "#f9a8c8", "#ec7fab", "#ffd6e6", "#e2508f", "#c43a76"
    def g(x, y, a, ln=58):
        return f'''<g transform="translate({x},{y}) rotate({a})">
<circle cx="{-ln*0.45}" cy="-13" r="9" fill="{gill}"/><circle cx="{-ln*0.8}" cy="-12" r="9" fill="{gill}"/>
<circle cx="{-ln*0.6}" cy="13" r="9" fill="{gill}"/><circle cx="{-ln*1.0}" cy="9" r="8" fill="{gill}"/>
<ellipse cx="{-ln*0.62}" cy="0" rx="{ln*0.62}" ry="15" fill="{gill}"/>
<path d="M{-ln*0.15} 0 H{-ln*1.05}" fill="none" stroke="{gilld}" stroke-width="4"/></g>'''
    gills = g(170,215,25) + g(162,250,0,64) + g(172,285,-25)
    leg = f'<path d="M232 560 Q226 625 238 640 Q262 650 282 638 Q288 600 282 560 Z" fill="{pinkd}"/>' \
          f'<path d="M240 640 v-10 M258 643 v-10 M274 640 v-10" fill="none" stroke-width="4"/>'
    arm = f'<path d="M205 420 Q168 455 172 500 Q182 520 200 508 Q205 478 222 455 Z" fill="{pinkd}"/>'
    s = f'''
<!-- backpack behind -->
<rect x="168" y="350" width="264" height="200" rx="50" fill="#22b3a3"/>
<!-- tools sticking out -->
<g transform="translate(436,372) rotate(40)"><rect x="-9" y="-80" width="18" height="80" rx="6" fill="#b9c3cc"/>
<path d="M-22 -95 a22 22 0 1 0 44 0 l-10 0 v12 h-24 v-12 Z" fill="#b9c3cc"/></g>
<g transform="translate(150,372) rotate(-35)"><path d="M0 -70 l9 20 22 2 -16 15 5 22 -20 -11 -20 11 5 -22 -16 -15 22 -2 Z" fill="#ffd23f"/></g>
<!-- tail -->
<path d="M380 545 C450 560 500 520 515 470 C520 455 505 450 498 462 C480 500 440 515 395 505 Z" fill="{pink}"/>
<path d="M470 500 C495 485 512 465 515 470" fill="none" stroke="{gill}" stroke-width="10" opacity="0.6"/>
{leg}{mirror(leg)}
<ellipse cx="300" cy="465" rx="108" ry="122" fill="{pink}"/>
<ellipse cx="300" cy="490" rx="66" ry="82" fill="{belly}" stroke="none"/>
<!-- straps -->
<path d="M225 380 Q240 450 230 540" fill="none" stroke="#8a5a2b" stroke-width="16"/>
<path d="M375 380 Q360 450 370 540" fill="none" stroke="#8a5a2b" stroke-width="16"/>
<path d="M225 380 Q240 450 230 540 M375 380 Q360 450 370 540" fill="none" stroke="{INK}" stroke-width="3" stroke-dasharray="1 0" opacity="0"/>
<circle cx="236" cy="465" r="9" fill="#ffd23f"/><circle cx="364" cy="465" r="9" fill="#ffd23f"/>
{arm}{mirror(arm)}
<!-- gills -->
{gills}{mirror(gills)}
<!-- head -->
<ellipse cx="300" cy="255" rx="148" ry="112" fill="{pink}"/>
<!-- spots -->
<circle cx="225" cy="190" r="7" fill="{pinkd}" stroke="none"/><circle cx="380" cy="200" r="6" fill="{pinkd}" stroke="none"/><circle cx="395" cy="225" r="4" fill="{pinkd}" stroke="none"/>
<!-- goggles on forehead -->
<path d="M160 205 Q300 150 440 205" fill="none" stroke="#6b4a2b" stroke-width="12"/>
<circle cx="262" cy="175" r="27" fill="#9fe3ff"/><circle cx="338" cy="175" r="27" fill="#9fe3ff"/>
<circle cx="262" cy="175" r="27" fill="none" stroke="#f2b632" stroke-width="9"/><circle cx="338" cy="175" r="27" fill="none" stroke="#f2b632" stroke-width="9"/>
<circle cx="262" cy="175" r="32" fill="none"/><circle cx="338" cy="175" r="32" fill="none"/>
<path d="M252 165 l10 -6 M328 165 l10 -6" stroke="#fff" stroke-width="5"/>
{eye(232,252,12,14)}{eye(368,252,12,14)}
<path d="M238 292 Q300 330 362 292" fill="none" stroke-width="6"/>
{cheeks(212,388,288,17)}
'''
    return doc(s, bg="#fdeef4", accent="#fbd3e3")

# ---------------- PAULA (girl) ----------------
def paula():
    skin, skind, hair = "#c68a5e", "#a8704a", "#2e1c14"
    braid = f'''<path d="M200 230 Q178 280 190 330" fill="none" stroke="{INK}" stroke-width="30"/>
<path d="M200 230 Q178 280 190 330" fill="none" stroke="{hair}" stroke-width="18"/>
<circle cx="191" cy="340" r="11" fill="#ffd23f"/>
<path d="M185 352 q6 20 -4 30 M195 352 q4 20 10 28" fill="none" stroke="{hair}" stroke-width="9"/>'''
    arm = f'<path d="M232 335 Q195 380 196 450" fill="none" stroke="{INK}" stroke-width="34"/><path d="M232 335 Q195 380 196 450" fill="none" stroke="{skin}" stroke-width="22"/><circle cx="196" cy="458" r="17" fill="{skin}"/>'
    leg = f'<rect x="255" y="470" width="34" height="105" rx="14" fill="{skin}"/>' \
          f'<path d="M244 565 h56 v52 q0 22 -22 22 h-40 q-14 0 -14 -16 v-14 q0 -14 20 -14 Z" fill="#ffd23f"/>' \
          f'<path d="M244 580 h56" fill="none" stroke-width="4"/>'
    s = f'''
{braid}{mirror(braid)}
{arm}{mirror(arm)}
<path d="M251 470 h98" fill="none"/>
{leg}{mirror(leg)}
<!-- shirt -->
<path d="M240 320 Q300 300 360 320 L378 345 L362 362 L355 350 L360 440 L240 440 L245 350 L238 362 L222 345 Z" fill="#26b5c9"/>
<path d="M270 360 l8 12 8 -12 M314 380 l8 12 8 -12 M282 405 l8 12 8 -12" fill="none" stroke="#fff" stroke-width="4"/>
<!-- shorts -->
<path d="M240 435 H360 L368 495 H306 L300 470 L294 495 H232 Z" fill="#ff8a3d"/>
<!-- neck/head -->
<rect x="285" y="290" width="30" height="34" fill="{skind}"/>
<circle cx="208" cy="215" r="16" fill="{skin}"/><circle cx="392" cy="215" r="16" fill="{skin}"/>
<circle cx="300" cy="205" r="95" fill="{skin}"/>
<!-- hair top -->
<path d="M205 205 Q200 105 300 102 Q400 105 395 205 Q385 160 355 150 Q320 175 270 160 Q240 160 222 185 Z" fill="{hair}"/>
<!-- headband with flower -->
<path d="M210 175 Q300 120 390 175" fill="none" stroke="#ff4f7a" stroke-width="13"/>
<g transform="translate(372,148)">
<circle cx="0" cy="-16" r="12" fill="#ffe14d"/><circle cx="15" cy="-5" r="12" fill="#ffe14d"/><circle cx="10" cy="13" r="12" fill="#ffe14d"/>
<circle cx="-10" cy="13" r="12" fill="#ffe14d"/><circle cx="-15" cy="-5" r="12" fill="#ffe14d"/><circle cx="0" cy="0" r="8" fill="#ff8a3d"/></g>
{eye(265,215,13,17)}{eye(335,215,13,17)}
<path d="M248 186 q16 -8 30 0 M322 186 q16 -8 30 0" fill="none" stroke="{hair}" stroke-width="6"/>
<path d="M298 232 q5 10 -2 14" fill="none" stroke="{skind}" stroke-width="4"/>
<path d="M272 258 Q300 285 328 258 Z" fill="#fff"/>
{cheeks(240,360,248,16)}
'''
    return doc(s, bg="#fff3dc", accent="#ffe2a8")

# ---------------- TUKO (toucan) ----------------
def tuko():
    s = f'''
<path d="M262 560 v70 M248 640 l14 -12 14 12 M338 560 v70 M324 640 l14 -12 14 12" fill="none" stroke="#f08a24" stroke-width="10"/>
<path d="M262 560 v70 M338 560 v70" fill="none" stroke="{INK}" stroke-width="3" opacity="0"/>
<!-- wings -->
<path d="M190 380 Q140 470 175 560 Q205 540 215 470 Z" fill="#23222b"/>
<path d="M410 380 Q460 470 425 560 Q395 540 385 470 Z" fill="#23222b"/>
<!-- tail -->
<path d="M265 560 L255 625 L300 610 L345 625 L335 560 Z" fill="#23222b"/>
<ellipse cx="300" cy="455" rx="120" ry="130" fill="#2f2e3a"/>
<path d="M240 345 Q300 330 360 345 Q368 420 300 440 Q232 420 240 345 Z" fill="#fff4c2"/>
<path d="M250 450 Q300 470 350 450 Q345 500 300 505 Q255 500 250 450 Z" fill="#e53b3b" stroke="none" opacity="0"/>

<!-- head -->
<circle cx="285" cy="235" r="100" fill="#2f2e3a"/>
<path d="M215 270 Q260 320 330 300 Q300 340 250 330 Q215 310 215 270 Z" fill="#fff4c2" stroke="none"/>
<circle cx="240" cy="210" r="27" fill="#4fb3ff"/><circle cx="315" cy="210" r="27" fill="#4fb3ff"/>
{eye(240,210,13,16)}{eye(315,210,13,16)}
<!-- big banana beak to the side -->
<path d="M318 238 Q420 200 505 240 Q515 270 478 285 Q400 305 322 292 Q300 265 318 238 Z" fill="#ffb21f"/>
<path d="M455 228 Q500 232 508 250 Q512 272 480 284 Q470 255 455 228 Z" fill="#e53b3b"/>
<path d="M318 238 Q340 232 352 230 Q345 265 355 296 L322 292 Q300 265 318 238 Z" fill="#4cc25a"/>
<path d="M350 270 Q420 272 492 262" fill="none" stroke="#e07a00" stroke-width="5"/>
<circle cx="338" cy="255" r="4" fill="{INK}" stroke="none"/>
<path d="M258 140 q10 -30 28 -10 q10 -30 28 -5" fill="#2f2e3a"/>
{cheeks(222,330,262,12)}
'''
    return doc(s, bg="#fff1d6", accent="#ffd99a")

# ---------------- MOMO (sloth) ----------------
def momo():
    fur, furd, face, mask = "#a98a6b", "#8a6c50", "#efdfc2", "#5c4230"
    arm = f'''<path d="M215 360 C150 400 145 480 160 540" fill="none" stroke="{INK}" stroke-width="50"/>
<path d="M215 360 C150 400 145 480 160 540" fill="none" stroke="{fur}" stroke-width="38"/>
<path d="M146 548 q-4 24 4 34 M160 552 q0 24 8 34 M174 548 q4 22 14 28" fill="none" stroke="#f3ead7" stroke-width="9"/>
<path d="M146 548 q-4 24 4 34 M160 552 q0 24 8 34 M174 548 q4 22 14 28" fill="none" stroke="{INK}" stroke-width="2.5"/>'''
    leg = f'<path d="M238 545 Q228 620 250 638 Q275 645 288 630 L292 560 Z" fill="{furd}"/>'
    s = f'''
{leg}{mirror(leg)}
{arm}{mirror(arm)}
<ellipse cx="300" cy="455" rx="112" ry="135" fill="{fur}"/>
<path d="M255 410 q8 8 0 16 M330 460 q8 8 0 16 M280 520 q8 8 0 16 M345 400 q8 8 0 16" fill="none" stroke="{furd}" stroke-width="4"/>
<!-- head -->
<path d="M185 240 Q180 130 300 125 Q420 130 415 240 Q415 345 300 350 Q185 345 185 240 Z" fill="{fur}"/>
<path d="M300 165 Q395 165 392 245 Q390 320 300 325 Q210 320 208 245 Q205 165 300 165 Z" fill="{face}"/>
<!-- eye stripes -->
<path d="M222 222 Q240 205 275 225 Q285 250 262 258 Q232 262 220 245 Z" fill="{mask}" stroke="none"/>
<path d="M378 222 Q360 205 325 225 Q315 250 338 258 Q368 262 380 245 Z" fill="{mask}" stroke="none"/>
<!-- sleepy eyes -->
<path d="M240 238 Q252 250 266 238" fill="none" stroke="#fff" stroke-width="6"/>
<path d="M334 238 Q348 250 360 238" fill="none" stroke="#fff" stroke-width="6"/>
<ellipse cx="300" cy="268" rx="18" ry="12" fill="{mask}"/>
<path d="M270 292 Q300 315 330 292" fill="none" stroke-width="5"/>
{cheeks(232,368,285,15)}
<!-- flower -->
<g transform="translate(375,150)">
<circle cx="0" cy="-18" r="15" fill="#ff5fa2"/><circle cx="17" cy="-5" r="15" fill="#ff5fa2"/><circle cx="11" cy="15" r="15" fill="#ff5fa2"/>
<circle cx="-11" cy="15" r="15" fill="#ff5fa2"/><circle cx="-17" cy="-5" r="15" fill="#ff5fa2"/><circle cx="0" cy="0" r="8" fill="#ffd23f"/></g>
<!-- leaf in hand -->
'''
    return doc(s, bg="#eef5e2", accent="#d6eac0")

# ---------------- FIPS (hummingbird) ----------------
def fips():
    green, greend = "#2fbf71", "#1f9a58"
    wing = '''<path d="M240 360 Q140 250 120 170 Q200 190 262 320 Z" fill="#bfe8ff" opacity="0.95"/>
<path d="M150 210 Q190 250 225 300 M135 180 Q180 210 245 330" fill="none" stroke="#7cc7ef" stroke-width="4"/>
<path d="M95 190 q-15 20 0 40 M85 240 q-12 15 0 30" fill="none" stroke="#7cc7ef" stroke-width="5"/>'''
    s = f'''
{wing}{mirror(wing)}
<!-- tail -->
<path d="M270 500 L245 590 L285 570 L300 600 L315 570 L355 590 L330 500 Z" fill="{greend}"/>
<path d="M285 520 v30 M315 520 v30" fill="none" stroke-width="4"/>
<path d="M280 505 v40 M320 505 v40" fill="none" stroke="#3a2a1f" stroke-width="5"/>
<ellipse cx="300" cy="420" rx="88" ry="110" fill="{green}"/>
<ellipse cx="300" cy="455" rx="55" ry="68" fill="#d9f7e2" stroke="none"/>
<path d="M245 345 Q300 395 355 345 Q340 400 300 410 Q260 400 245 345 Z" fill="#e8306c"/>
<!-- head -->
<circle cx="300" cy="270" r="85" fill="{green}"/>
<path d="M240 220 Q300 190 360 220" fill="none" stroke="{greend}" stroke-width="8" opacity="0.6"/>
{eye(262,262,14,17)}{eye(338,262,14,17)}
<!-- beak pointing down-forward, short-ish for cuteness -->
<path d="M290 300 L300 395 L310 300 Z" fill="#3a2a1f"/>
{cheeks(240,360,300,13)}
<path d="M290 190 q5 -30 18 -40 q0 25 -2 40" fill="{green}"/>
<!-- tiny feet -->
<path d="M285 528 v14 M315 528 v14" fill="none" stroke="#3a2a1f" stroke-width="5"/>
<!-- sparkles -->
<path d="M470 150 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6 Z" fill="#ffd23f"/>
<path d="M130 470 l5 11 11 5 -11 5 -5 11 -5 -11 -11 -5 11 -5 Z" fill="#ffd23f"/>
'''
    return doc(s, bg="#eaf6ff", accent="#cfe9ff")

# ---------------- RUDI (raccoon) ----------------
def rudi():
    grey, greyd, light, mask = "#8f939e", "#6d717c", "#e3e4ea", "#2a2a33"
    leg = f'<rect x="232" y="550" width="56" height="88" rx="26" fill="{greyd}"/><path d="M240 630 h40" fill="none" stroke-width="4"/>'
    s = f'''
<!-- ringed tail -->
<g transform="translate(385,505) rotate(22) scale(1.25)">
<clipPath id="tailclip"><path d="M0 0 C40 -20 70 -80 60 -150 C55 -175 25 -180 15 -160 C5 -100 -10 -60 -30 -30 Z"/></clipPath>
<path d="M0 0 C40 -20 70 -80 60 -150 C55 -175 25 -180 15 -160 C5 -100 -10 -60 -30 -30 Z" fill="{grey}"/>
<g clip-path="url(#tailclip)" stroke="none" fill="{mask}"><rect x="-60" y="-50" width="160" height="22" transform="rotate(-25)"/><rect x="-60" y="-100" width="160" height="22" transform="rotate(-15)"/><rect x="-60" y="-150" width="160" height="22" transform="rotate(-8)"/></g>
<path d="M0 0 C40 -20 70 -80 60 -150 C55 -175 25 -180 15 -160 C5 -100 -10 -60 -30 -30 Z" fill="none"/>
</g>
{leg}{mirror(leg)}
<!-- left arm holding spoon (viewer left) -->
<g transform="translate(150,330) rotate(-20)"><rect x="-8" y="-90" width="16" height="90" rx="6" fill="#ffd23f"/><ellipse cx="0" cy="-110" rx="22" ry="30" fill="#ffd23f"/>
<path d="M-8 -120 q4 -10 10 -12" fill="none" stroke="#fff" stroke-width="5"/></g>
<path d="M205 410 Q160 380 150 335 Q168 315 182 330 Q192 365 222 385 Z" fill="{greyd}"/>
<circle cx="160" cy="330" r="20" fill="{greyd}"/>
<!-- right arm with sack -->
<path d="M395 410 Q440 440 440 500 Q425 515 412 500 Q410 460 380 440 Z" fill="{greyd}"/>
<path d="M415 495 Q470 500 480 560 Q470 610 425 605 Q385 600 395 555 Q405 515 415 495 Z" fill="#c9a26a"/>
<path d="M410 500 l12 -8 M420 515 l14 -6" fill="none" stroke-width="4"/>
<circle cx="430" cy="505" r="17" fill="{greyd}"/>
<ellipse cx="300" cy="460" rx="120" ry="130" fill="{grey}"/>
<ellipse cx="300" cy="485" rx="72" ry="85" fill="{light}" stroke="none"/>
<!-- ears -->
<path d="M200 165 L195 90 L262 130 Z" fill="{grey}"/><path d="M210 150 L208 112 L240 132 Z" fill="{mask}" stroke="none"/>
<path d="M400 165 L405 90 L338 130 Z" fill="{grey}"/><path d="M390 150 L392 112 L360 132 Z" fill="{mask}" stroke="none"/>
<!-- head -->
<path d="M180 240 Q180 120 300 118 Q420 120 420 240 Q430 300 360 325 L300 345 L240 325 Q170 300 180 240 Z" fill="{grey}"/>
<path d="M300 210 Q370 205 372 275 Q362 335 300 340 Q238 335 228 275 Q230 205 300 210 Z" fill="{light}"/>
<!-- mask band -->
<path d="M190 220 Q250 185 300 215 Q350 185 410 220 Q412 268 360 270 Q325 268 300 240 Q275 268 240 270 Q188 268 190 220 Z" fill="{mask}"/>
<path d="M232 190 Q255 178 278 192 M322 186 Q345 170 368 180" fill="none" stroke="#fff" stroke-width="9"/>
<ellipse cx="252" cy="232" rx="17" ry="19" fill="#fff" stroke="none"/><ellipse cx="348" cy="232" rx="17" ry="19" fill="#fff" stroke="none"/>
<circle cx="258" cy="234" r="10" fill="{INK}" stroke="none"/><circle cx="354" cy="234" r="10" fill="{INK}" stroke="none"/>
<circle cx="261" cy="230" r="3.5" fill="#fff" stroke="none"/><circle cx="357" cy="230" r="3.5" fill="#fff" stroke="none"/>
<ellipse cx="300" cy="285" rx="20" ry="13" fill="{mask}"/>
<path d="M262 305 Q300 335 345 300" fill="none" stroke-width="5"/>
<path d="M314 312 h14 v10 q-7 5 -14 0 Z" fill="#fff" stroke-width="3"/>
{cheeks(230,370,295,13)}
<!-- stripe on forehead -->
<path d="M300 125 V200" fill="none" stroke="{greyd}" stroke-width="10" opacity="0.7"/>
'''
    return doc(s, bg="#f0eefa", accent="#dcd8f2")

# ---------------- PORTAL ----------------
def portal():
    W, H = 1000, 700
    sw = []
    import math
    # spiral swirl arcs
    for i, (r, col) in enumerate([(200,"#1a8fd6"),(165,"#27b0e6"),(130,"#4ccfee"),(95,"#7fe3f5"),(60,"#b8f3ff"),(28,"#ffffff")]):
        sw.append(f'<ellipse cx="500" cy="330" rx="{r}" ry="{r*1.05}" fill="{col}" stroke="none"/>')
    arcs = ""
    for k in range(6):
        a = k*60
        arcs += f'<path d="M500 330 m0 -40 a120 125 0 0 1 130 120" transform="rotate({a} 500 330)" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.55"/>'
    stones = ""
    n = 16
    for k in range(n):
        ang = 2*math.pi*k/n
        x = 500 + 228*math.cos(ang); y = 330 + 238*math.sin(ang)
        if y > 520: continue
        col = ["#a99f93","#9a8f82","#b8ad9f"][k%3]
        stones += f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="38" ry="32" fill="{col}" transform="rotate({math.degrees(ang)+90:.1f} {x:.1f} {y:.1f})"/>'
        # glowing rune dots (no letters)
        stones += f'<circle cx="{x:.1f}" cy="{y:.1f}" r="8" fill="#6ff7e8" stroke="none"/>'
    sparkles = ""
    for (x,y,s) in [(300,150,1),(720,130,1.2),(650,260,0.7),(380,420,0.8),(560,200,0.6),(260,330,0.9),(760,380,0.8)]:
        sparkles += f'<path transform="translate({x},{y}) scale({s})" d="M0 -20 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6 Z" fill="#fff6a8" stroke="none"/>'
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe8ff"/><stop offset="1" stop-color="#fff3d6"/></linearGradient>
<radialGradient id="glow"><stop offset="0.55" stop-color="#7ff3ff" stop-opacity="0.8"/><stop offset="1" stop-color="#7ff3ff" stop-opacity="0"/></radialGradient></defs>
<rect width="{W}" height="{H}" rx="40" fill="url(#sky)"/>
<!-- left: Mexican lake side (colorful houses-free: flowers & reeds) ; right: jungle river -->
<path d="M0 420 Q120 380 250 410 L250 700 L0 700 Z" fill="#7ccf6b"/>
<path d="M750 410 Q880 370 1000 400 L1000 700 L750 700 Z" fill="#4aa856"/>
<g stroke="{INK}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
<!-- jungle leaves right -->
<path d="M1000 120 Q880 140 860 260 Q930 240 1000 200 Z" fill="#3c9a4a"/>
<path d="M1000 260 Q900 280 880 380 Q950 360 1000 330 Z" fill="#56b85a"/>
<path d="M0 150 Q100 170 110 270 Q50 255 0 220 Z" fill="#56b85a"/>
<!-- water -->
<path d="M0 520 Q250 480 500 510 Q750 540 1000 505 L1000 700 L0 700 Z" fill="#46b6e6"/>
<path d="M80 600 q40 -15 80 0 M700 620 q40 -15 80 0 M420 640 q40 -15 80 0" fill="none" stroke="#bdeeff" stroke-width="6"/>
<!-- portal glow -->
<circle cx="500" cy="330" r="290" fill="url(#glow)" stroke="none"/>
{''.join(sw)}
<ellipse cx="500" cy="330" rx="200" ry="210" fill="none"/>
{arcs}
{stones}
<!-- lily pads + flowers (Mexico lake) -->
<ellipse cx="150" cy="580" rx="55" ry="18" fill="#3fae58"/><circle cx="160" cy="568" r="12" fill="#ff7eb6"/>
<ellipse cx="290" cy="640" rx="45" ry="15" fill="#3fae58"/>
<!-- reeds right (river) -->
<path d="M860 520 V420 M880 525 V400 M900 520 V430" fill="none" stroke="#2d1e17"/>
<path d="M860 520 V420 M880 525 V400 M900 520 V430" fill="none" stroke="#7a5a32" stroke-width="2"/>
<ellipse cx="860" cy="420" rx="7" ry="20" fill="#7a5a32"/><ellipse cx="880" cy="400" rx="7" ry="20" fill="#7a5a32"/><ellipse cx="900" cy="430" rx="7" ry="20" fill="#7a5a32"/>
<!-- marigolds left -->
<circle cx="70" cy="420" r="16" fill="#ff9f1c"/><circle cx="110" cy="440" r="13" fill="#ffd23f"/><circle cx="200" cy="415" r="14" fill="#ff5f7e"/>
<!-- water splash ripples at base -->
<ellipse cx="500" cy="545" rx="190" ry="28" fill="#8fe0ff"/>
<ellipse cx="500" cy="545" rx="120" ry="16" fill="#c9f4ff"/>
</g>
{sparkles}
</svg>'''
    return s

CHARS = {"bruno": bruno, "lotti": lotti, "paula": paula, "tuko": tuko, "momo": momo, "fips": fips, "rudi": rudi, "portal": portal}
if __name__ == "__main__":
    for name, fn in CHARS.items():
        svg = fn()
        p = os.path.join(OUT, "svg", f"{name}.svg")
        open(p, "w").write(svg)
        cairosvg.svg2png(bytestring=svg.encode(), write_to=os.path.join(OUT, "png", f"{name}.png"), output_width=1200 if name != "portal" else 2000)
        print("ok", name)
    TRANSPARENT = True
    os.makedirs(os.path.join(OUT, "png", "transparent"), exist_ok=True)
    for name, fn in CHARS.items():
        if name == "portal": continue
        svg = fn()
        open(os.path.join(OUT, "svg", f"{name}_transparent.svg"), "w").write(svg)
        cairosvg.svg2png(bytestring=svg.encode(), write_to=os.path.join(OUT, "png", "transparent", f"{name}.png"), output_width=1200)
