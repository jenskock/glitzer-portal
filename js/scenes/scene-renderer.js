export function renderScene(sceneId, container) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 800 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.maxHeight = '100%';
  
  const scene = getSceneContent(sceneId);
  svg.innerHTML = scene;
  
  container.appendChild(svg);
}

function getSceneContent(sceneId) {
  const scenes = {
    'xochimilco-morning': `
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#87CEEB"/>
          <stop offset="100%" stop-color="#B0E0E6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky1)"/>
      <ellipse cx="400" cy="450" rx="350" ry="150" fill="#4A90A4"/>
      <g id="boat">
        <path d="M100 400 L100 420 L200 420 L200 400 Z" fill="#D2691E"/>
        <path d="M80 400 L90 420 L210 420 L220 400 Z" fill="#8B4513"/>
        <rect x="120" y="350" width="60" height="50" fill="#FF6B9D" opacity="0.8"/>
        <text x="150" y="385" font-size="20" fill="white" text-anchor="middle">🌸</text>
      </g>
      <g id="chinampas">
        <ellipse cx="600" cy="380" rx="80" ry="40" fill="#228B22"/>
        <circle cx="580" cy="370" r="8" fill="#FF69B4"/>
        <circle cx="610" cy="375" r="8" fill="#FFD700"/>
        <circle cx="590" cy="385" r="8" fill="#FF1493"/>
      </g>
      <g id="reeds">
        <line x1="50" y1="500" x2="50" y2="400" stroke="#2F4F2F" stroke-width="3"/>
        <line x1="60" y1="500" x2="58" y2="410" stroke="#2F4F2F" stroke-width="3"/>
        <line x1="750" y1="500" x2="750" y2="390" stroke="#2F4F2F" stroke-width="3"/>
        <ellipse cx="750" cy="375" rx="15" ry="8" fill="#8B4513"/>
      </g>
      <g transform="translate(350, 470) scale(0.25)">
        ${getLottiSVG()}
      </g>
      <circle cx="60" cy="430" r="6" fill="#2F4F2F"/>
      <ellipse cx="58" cy="428" rx="3" ry="2" fill="#fff"/>
    `,
    'lotti-tinkering': `
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#87CEEB"/>
          <stop offset="100%" stop-color="#B0E0E6"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky2)"/>
      <ellipse cx="400" cy="450" rx="350" ry="150" fill="#4A90A4"/>
      <ellipse cx="300" cy="380" rx="100" ry="15" fill="#228B22" opacity="0.8"/>
      <ellipse cx="300" cy="375" rx="95" ry="12" fill="#FFB6C1"/>
      <g transform="translate(150, 300) scale(0.35)">
        ${getLottiSVG()}
      </g>
      <g transform="translate(400, 320)">
        <rect x="0" y="0" width="80" height="100" rx="10" fill="#4ECDC4"/>
        <rect x="10" y="10" width="60" height="80" rx="5" fill="#5DD9D1"/>
        <circle cx="70" cy="25" r="8" fill="#FFD700"/>
        <path d="M30 20 L50 20 L40 40 Z" fill="#888"/>
        <circle cx="25" cy="60" r="10" fill="#DDA15E" stroke="#8B4513" stroke-width="2"/>
      </g>
    `,
    'portal-appears': `
      <rect width="800" height="600" fill="#4A90A4"/>
      <g id="portal" transform="translate(400, 300)">
        <circle cx="0" cy="0" r="120" fill="none" stroke="#4ECDC4" stroke-width="8" opacity="0.6"/>
        <circle cx="0" cy="0" r="100" fill="#1e3a8a" opacity="0.7"/>
        <circle cx="-80" cy="-50" r="6" fill="#4ECDC4"/>
        <circle cx="0" cy="-95" r="6" fill="#4ECDC4"/>
        <circle cx="80" cy="-50" r="6" fill="#4ECDC4"/>
        <circle cx="90" cy="30" r="6" fill="#4ECDC4"/>
        <circle cx="-90" cy="30" r="6" fill="#4ECDC4"/>
        <path d="M-60 -20 Q0 20 60 -20 Q50 40 0 50 Q-50 40 -60 -20" fill="#5DD9D1" opacity="0.4"/>
        <circle cx="-30" cy="10" r="3" fill="#fff"/>
        <circle cx="20" cy="-10" r="4" fill="#fff"/>
        <circle cx="10" cy="25" r="2" fill="#fff"/>
      </g>
      <g transform="translate(250, 450) scale(0.3)">
        ${getLottiSVG()}
      </g>
    `,
    'rudi-steals': `
      <rect width="800" height="600" fill="#4A90A4"/>
      <g id="portal" transform="translate(300, 300)">
        <circle cx="0" cy="0" r="100" fill="#1e3a8a" opacity="0.7"/>
        <path d="M-60 -20 Q0 30 60 -20" fill="#5DD9D1" opacity="0.6"/>
      </g>
      <g transform="translate(280, 200) scale(0.35)">
        ${getRudiSVG()}
      </g>
      <g transform="translate(280, 180)">
        <rect x="0" y="0" width="50" height="60" rx="8" fill="#4ECDC4"/>
        <circle cx="40" cy="15" r="6" fill="#FFD700"/>
      </g>
      <g transform="translate(520, 450) scale(0.28)">
        ${getLottiSVG()}
      </g>
    `,
    'lotti-brave': `
      <rect width="800" height="600" fill="#4A90A4"/>
      <g id="portal" transform="translate(550, 300)">
        <circle cx="0" cy="0" r="120" fill="#1e3a8a" opacity="0.7"/>
        <circle cx="-80" cy="-50" r="6" fill="#4ECDC4"/>
        <circle cx="0" cy="-95" r="6" fill="#4ECDC4"/>
        <circle cx="80" cy="-50" r="6" fill="#4ECDC4"/>
      </g>
      <g transform="translate(200, 350) scale(0.35)">
        ${getLottiSVG()}
      </g>
    `,
    'rainforest-arrival': `
      <defs>
        <linearGradient id="forest" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#87CEEB"/>
          <stop offset="70%" stop-color="#228B22"/>
          <stop offset="100%" stop-color="#006400"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#forest)"/>
      <ellipse cx="400" cy="500" rx="300" ry="100" fill="#8B7355"/>
      <rect x="50" y="100" width="40" height="500" fill="#654321"/>
      <ellipse cx="70" cy="100" rx="60" ry="80" fill="#228B22" opacity="0.8"/>
      <rect x="650" y="150" width="35" height="450" fill="#654321"/>
      <ellipse cx="667" cy="150" rx="50" ry="70" fill="#228B22" opacity="0.8"/>
      <circle cx="200" cy="200" r="15" fill="#FF69B4"/>
      <circle cx="600" cy="250" r="12" fill="#FFD700"/>
      <g transform="translate(300, 420) scale(0.3)">
        ${getLottiSVG()}
      </g>
    `,
    'bruno-swimming': `
      <rect width="800" height="600" fill="#8B7355"/>
      <ellipse cx="400" cy="400" rx="350" ry="150" fill="#6B8E23"/>
      <g transform="translate(350, 360)">
        <ellipse cx="0" cy="0" rx="30" ry="20" fill="#A0522D"/>
        <circle cx="-8" cy="-5" r="4" fill="#2d1e17"/>
        <circle cx="8" cy="-5" r="4" fill="#2d1e17"/>
        <ellipse cx="-15" cy="-8" rx="6" ry="4" fill="#A0522D"/>
        <ellipse cx="15" cy="-8" rx="6" ry="4" fill="#A0522D"/>
        <ellipse cx="0" cy="3" rx="8" ry="5" fill="#5a3622"/>
      </g>
    `,
    'bruno-appears': `
      <rect width="800" height="600" fill="#228B22" opacity="0.3"/>
      <ellipse cx="400" cy="520" rx="300" ry="80" fill="#8B7355"/>
      <g transform="translate(300, 300) scale(0.5)">
        ${getBrunoSVG()}
      </g>
      <path d="M560 420 Q580 460 600 420" fill="none" stroke="#e8413c" stroke-width="4"/>
      <circle cx="570" cy="445" r="4" fill="#fff"/>
    `,
    'paula-arrives': `
      <rect width="800" height="600" fill="#228B22" opacity="0.3"/>
      <ellipse cx="400" cy="520" rx="350" ry="80" fill="#8B7355"/>
      <ellipse cx="250" cy="500" rx="40" ry="8" fill="#4A90A4" opacity="0.5"/>
      <g transform="translate(180, 350) scale(0.45)">
        ${getPaulaSVG()}
      </g>
      <g transform="translate(400, 420) scale(0.32)">
        ${getLottiSVG()}
      </g>
      <g transform="translate(550, 400) scale(0.42)">
        ${getBrunoSVG()}
      </g>
    `,
    'tuko-flies': `
      <defs>
        <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#87CEEB"/>
          <stop offset="100%" stop-color="#228B22"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky3)"/>
      <ellipse cx="200" cy="150" rx="120" ry="80" fill="#2F4F2F"/>
      <ellipse cx="600" cy="200" rx="100" ry="70" fill="#2F4F2F"/>
      <rect x="650" y="400" width="60" height="200" fill="#654321"/>
      <ellipse cx="680" cy="380" rx="90" ry="100" fill="#228B22"/>
      <g transform="translate(350, 150) scale(0.4)">
        ${getTukoSVG()}
      </g>
    `,
    'bruno-catches': `
      <rect width="800" height="600" fill="#228B22" opacity="0.2"/>
      <ellipse cx="400" cy="450" rx="200" ry="100" fill="#4A90A4"/>
      <ellipse cx="250" cy="420" rx="35" ry="12" fill="#B8B8B8"/>
      <ellipse cx="350" cy="430" rx="35" ry="12" fill="#B8B8B8"/>
      <ellipse cx="450" cy="425" rx="35" ry="12" fill="#B8B8B8"/>
      <g transform="translate(250, 300) scale(0.42)">
        ${getBrunoSVG()}
      </g>
      <g transform="translate(200, 250) scale(0.38)">
        ${getPaulaSVG()}
      </g>
    `,
    'momo-hanging': `
      <rect width="800" height="600" fill="#228B22" opacity="0.3"/>
      <rect x="100" y="0" width="50" height="350" fill="#654321"/>
      <rect x="100" y="100" width="300" height="30" rx="15" fill="#8B4513"/>
      <g transform="translate(250, 180) scale(0.4) rotate(180)">
        ${getMomoSVG()}
      </g>
      <g transform="translate(450, 450) scale(0.3)">
        ${getLottiSVG()}
      </g>
      <g transform="translate(600, 440) scale(0.35)">
        ${getPaulaSVG()}
      </g>
    `,
    'fips-flies': `
      <rect width="800" height="600" fill="#228B22" opacity="0.3"/>
      <rect x="350" y="150" width="80" height="450" fill="#654321"/>
      <ellipse cx="390" cy="140" rx="80" ry="60" fill="#2F4F2F"/>
      <g transform="translate(250, 200) scale(0.5)">
        ${getFipsSVG()}
      </g>
      <g transform="translate(220, 280) scale(0.45)">
        ${getFipsSVG()}
      </g>
      <circle cx="450" cy="250" r="15" fill="#FF69B4" opacity="0.6"/>
    `,
    'rudi-in-tree': `
      <rect width="800" height="600" fill="#87CEEB"/>
      <ellipse cx="400" cy="550" rx="300" ry="50" fill="#6B8E23"/>
      <rect x="200" y="200" width="60" height="400" fill="#654321"/>
      <rect x="180" y="350" width="200" height="25" rx="10" fill="#8B4513"/>
      <ellipse cx="230" cy="330" rx="50" ry="40" fill="#2F4F2F"/>
      <ellipse cx="230" cy="310" rx="35" ry="50" fill="#1a1a1a" opacity="0.7"/>
      <g transform="translate(180, 290) scale(0.35)">
        ${getRudiSVG()}
      </g>
      <g transform="translate(165, 270)">
        <rect width="40" height="50" rx="8" fill="#4ECDC4"/>
        <circle cx="32" cy="12" r="5" fill="#FFD700"/>
      </g>
    `,
    'branch-breaks': `
      <rect width="800" height="600" fill="#87CEEB"/>
      <ellipse cx="400" cy="550" rx="300" ry="50" fill="#6B8E23"/>
      <g transform="translate(300, 200) rotate(45)">
        <rect width="150" height="20" rx="8" fill="#8B4513"/>
        <path d="M75 10 L85 5 L80 20" stroke="#FF6B6B" stroke-width="4"/>
      </g>
      <g transform="translate(400, 350) scale(0.3) rotate(-20)">
        ${getRudiSVG()}
      </g>
      <g transform="translate(200, 150) scale(0.45)">
        ${getFipsSVG()}
      </g>
      <g transform="translate(500, 120) scale(0.38)">
        ${getTukoSVG()}
      </g>
    `,
    'bruno-rescues': `
      <rect width="800" height="600" fill="#87CEEB"/>
      <ellipse cx="400" cy="400" rx="350" ry="150" fill="#6B8E23"/>
      <path d="M200 400 Q250 390 300 400 Q350 410 400 400 Q450 390 500 400" 
            fill="none" stroke="#fff" stroke-width="3" opacity="0.5"/>
      <g transform="translate(250, 380) scale(0.35)">
        ${getRudiSVG()}
      </g>
      <rect x="230" y="370" width="50" height="15" rx="5" fill="#8B4513"/>
      <g transform="translate(450, 350) scale(0.45)">
        ${getBrunoSVG()}
      </g>
      <g transform="translate(600, 520) scale(0.32)">
        ${getPaulaSVG()}
      </g>
      <g transform="translate(100, 500) scale(0.28)">
        ${getLottiSVG()}
      </g>
    `,
    'lotti-dives': `
      <rect width="800" height="600" fill="#4A90A4"/>
      <ellipse cx="400" cy="300" rx="250" ry="200" fill="#2F5F7F" opacity="0.6"/>
      <g transform="translate(350, 250) scale(0.35)">
        ${getLottiSVG()}
      </g>
      <circle cx="320" cy="280" r="8" fill="#fff" opacity="0.6"/>
      <circle cx="380" cy="300" r="6" fill="#fff" opacity="0.6"/>
      <circle cx="340" cy="330" r="10" fill="#fff" opacity="0.6"/>
      <ellipse cx="500" cy="350" rx="40" ry="20" fill="#FFD700" opacity="0.5"/>
      <path d="M480 350 Q490 360 500 350 Q490 340 480 350" fill="#FF6347"/>
    `,
    'rope-rescue': `
      <rect width="800" height="600" fill="#87CEEB"/>
      <ellipse cx="400" cy="450" rx="350" ry="150" fill="#6B8E23"/>
      <g transform="translate(200, 350) scale(0.32)">
        ${getLottiSVG()}
      </g>
      <path d="M230 380 Q300 350 370 360" fill="none" stroke="#DDA15E" stroke-width="6"/>
      <g transform="translate(350, 330) scale(0.45)">
        ${getBrunoSVG()}
      </g>
      <g transform="translate(320, 310) scale(0.3)">
        ${getRudiSVG()}
      </g>
      <g transform="translate(550, 420) scale(0.35)">
        ${getPaulaSVG()}
      </g>
      <g transform="translate(600, 280) scale(0.35)">
        ${getTukoSVG()}
      </g>
    `,
    'friends': `
      <rect width="800" height="600" fill="#228B22" opacity="0.3"/>
      <ellipse cx="400" cy="520" rx="350" ry="80" fill="#8B7355"/>
      <g transform="translate(200, 380) scale(0.32)">
        ${getRudiSVG()}
      </g>
      <g transform="translate(320, 370) scale(0.35)">
        ${getPaulaSVG()}
      </g>
      <g transform="translate(450, 350) scale(0.42)">
        ${getBrunoSVG()}
      </g>
      <g transform="translate(600, 400) scale(0.28)">
        ${getLottiSVG()}
      </g>
      <g transform="translate(550, 250) scale(0.35)">
        ${getTukoSVG()}
      </g>
      <rect x="300" y="200" width="40" height="30" rx="8" fill="#8B4513"/>
      <g transform="translate(320, 170) scale(0.3) rotate(180)">
        ${getMomoSVG()}
      </g>
    `,
    'mystery-stone': `
      <defs>
        <linearGradient id="evening" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FF6B9D"/>
          <stop offset="100%" stop-color="#4A5899"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#evening)"/>
      <circle cx="100" cy="100" r="60" fill="#FFD700" opacity="0.8"/>
      <ellipse cx="400" cy="520" rx="300" ry="80" fill="#4A5899" opacity="0.6"/>
      <g id="portal" transform="translate(550, 350)">
        <circle cx="0" cy="0" r="100" fill="none" stroke="#4ECDC4" stroke-width="6" opacity="0.8"/>
        <circle cx="-80" cy="-50" r="6" fill="#4ECDC4"/>
        <circle cx="0" cy="-95" r="6" fill="#4ECDC4"/>
        <circle cx="80" cy="-50" r="6" fill="#4ECDC4"/>
        <circle cx="90" cy="30" r="6" fill="#4ECDC4"/>
        <circle cx="-90" cy="30" r="6" fill="#4ECDC4"/>
        <circle cx="-60" cy="80" r="8" fill="#FFD700">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>
      <g transform="translate(200, 420) scale(0.38)">
        ${getBrunoSVG()}
      </g>
      <g transform="translate(350, 450) scale(0.32)">
        ${getLottiSVG()}
      </g>
      <g transform="translate(130, 460) scale(0.28)">
        ${getRudiSVG()}
      </g>
    `
  };
  
  return scenes[sceneId] || '<text x="400" y="300" text-anchor="middle" font-size="24" fill="#666">Scene coming soon</text>';
}

function getBrunoSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="460" rx="138" ry="140" fill="#b8794a"/>
      <ellipse cx="300" cy="490" rx="88" ry="92" fill="#dcae7e" stroke="none"/>
      <path d="M200 330 Q300 375 400 330 L392 362 Q300 400 208 362 Z" fill="#e8413c"/>
      <circle cx="285" cy="360" r="5" fill="#fff" stroke="none"/>
      <circle cx="310" cy="370" r="5" fill="#fff" stroke="none"/>
      <path d="M228 175 Q230 118 300 116 Q370 118 372 175 L404 300 Q408 354 300 356 Q192 354 196 300 Z" fill="#b8794a"/>
      <path d="M214 262 Q218 236 300 234 Q382 236 386 262 L390 310 Q388 348 300 350 Q212 348 210 310 Z" fill="#dcae7e"/>
      <ellipse cx="258" cy="192" rx="11" ry="14" fill="#2d1e17"/>
      <circle cx="261" cy="186" r="4" fill="#fff" stroke="none"/>
      <ellipse cx="342" cy="192" rx="11" ry="14" fill="#2d1e17"/>
      <circle cx="345" cy="186" r="4" fill="#fff" stroke="none"/>
      <path d="M276 262 q-6 8 2 16 M324 262 q6 8 -2 16" fill="none" stroke="#1d120b" stroke-width="5"/>
    </g>
  `;
}

function getLottiSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="380" rx="70" ry="55" fill="#FFB6D9"/>
      <ellipse cx="300" cy="410" rx="50" ry="40" fill="#FFD5E8" stroke="none"/>
      <path d="M240 360 Q235 350 230 360 L235 375 Q240 385 245 375 Z" fill="#FF69B4"/>
      <path d="M360 360 Q365 350 370 360 L365 375 Q360 385 355 375 Z" fill="#FF69B4"/>
      <circle cx="280" cy="370" r="8" fill="#2d1e17"/>
      <circle cx="282" cy="368" r="3" fill="#fff" stroke="none"/>
      <circle cx="320" cy="370" r="8" fill="#2d1e17"/>
      <circle cx="322" cy="368" r="3" fill="#fff" stroke="none"/>
      <path d="M285 385 Q300 395 315 385" fill="none" stroke-width="3"/>
      <rect x="280" y="330" width="40" height="30" rx="8" fill="#FFD700" opacity="0.8"/>
    </g>
  `;
}

function getRudiSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="380" rx="60" ry="70" fill="#808080"/>
      <circle cx="285" cy="365" r="6" fill="#000" stroke="none"/>
      <circle cx="315" cy="365" r="6" fill="#000" stroke="none"/>
      <ellipse cx="280" cy="360" rx="15" ry="12" fill="#fff" opacity="0.8" stroke="none"/>
      <ellipse cx="310" cy="360" rx="15" ry="12" fill="#fff" opacity="0.8" stroke="none"/>
      <path d="M290 380 Q300 385 310 380" fill="none" stroke-width="3"/>
      <path d="M295 395 L300 400 L305 395" fill="none" stroke-width="2"/>
      <path d="M310 430 Q315 460 320 430 Q325 460 330 430 Q335 460 340 430" 
            fill="none" stroke="#606060" stroke-width="8"/>
      <circle cx="340" cy="380" r="4" fill="#FFD700"/>
    </g>
  `;
}

function getPaulaSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="400" rx="50" ry="65" fill="#4ECDC4"/>
      <ellipse cx="300" cy="480" rx="40" ry="50" fill="#FF8C42"/>
      <circle cx="285" cy="390" r="5" fill="#2d1e17"/>
      <circle cx="315" cy="390" r="5" fill="#2d1e17"/>
      <path d="M290 405 Q300 410 310 405" fill="none" stroke-width="2"/>
      <path d="M250 360 Q240 340 230 360" fill="#2d1e17"/>
      <path d="M350 360 Q360 340 370 360" fill="#2d1e17"/>
      <circle cx="235" cy="370" r="5" fill="#FFD700"/>
      <circle cx="365" cy="370" r="5" fill="#FFD700"/>
      <rect x="270" y="340" width="60" height="15" rx="7" fill="#FF69B4"/>
      <circle cx="300" cy="347" r="6" fill="#FFD700"/>
      <rect x="260" y="530" width="25" height="40" rx="8" fill="#FFD700"/>
      <rect x="315" y="530" width="25" height="40" rx="8" fill="#FFD700"/>
    </g>
  `;
}

function getTukoSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="380" rx="50" ry="60" fill="#000"/>
      <ellipse cx="300" cy="390" rx="35" ry="45" fill="#FFF9E6" stroke="none"/>
      <path d="M320 340 Q350 300 380 310 Q390 320 385 340 Q380 360 370 370 Q360 375 350 370 Q340 365 330 355 Z" 
            fill="#4ECDC4"/>
      <path d="M350 310 Q360 305 370 310 Q375 320 370 335" fill="#FF6B42"/>
      <path d="M370 335 Q375 345 375 360" fill="#FFD700"/>
      <circle cx="290" cy="375" r="6" fill="#4ECDC4"/>
      <circle cx="292" cy="373" r="2" fill="#000" stroke="none"/>
    </g>
  `;
}

function getMomoSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="380" rx="55" ry="70" fill="#C4A57B"/>
      <circle cx="290" cy="370" r="6" fill="#2d1e17"/>
      <circle cx="310" cy="370" r="6" fill="#2d1e17"/>
      <ellipse cx="300" cy="390" rx="15" ry="10" fill="#000" stroke-width="2"/>
      <path d="M270 385 Q265 375 260 385" fill="none" stroke-width="3"/>
      <path d="M330 385 Q335 375 340 385" fill="none" stroke-width="3"/>
      <circle cx="330" cy="350" r="10" fill="#FF69B4"/>
      <circle cx="335" cy="350" r="4" fill="#FFD700" stroke="none"/>
    </g>
  `;
}

function getFipsSVG() {
  return `
    <g stroke="#2d1e17" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="300" cy="380" rx="20" ry="25" fill="#228B22"/>
      <ellipse cx="300" cy="385" rx="12" ry="15" fill="#32CD32" stroke="none"/>
      <path d="M285 375 Q270 370 260 375 Q265 385 275 387 Q282 385 285 380 Z" 
            fill="#87CEEB" opacity="0.6"/>
      <path d="M315 375 Q330 370 340 375 Q335 385 325 387 Q318 385 315 380 Z" 
            fill="#87CEEB" opacity="0.6"/>
      <ellipse cx="295" cy="370" rx="20" ry="15" fill="#FF6347"/>
      <path d="M310 375 L320 370 L315 380 Z" fill="#2d1e17"/>
      <circle cx="295" cy="375" r="2" fill="#2d1e17"/>
    </g>
  `;
}
