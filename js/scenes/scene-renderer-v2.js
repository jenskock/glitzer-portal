import { renderXochimilcoBackground, renderRainforestBackground, renderPortal } from './backgrounds.js';
import { renderCharacter } from './characters.js';

export function renderScene(sceneId, container) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 800 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.maxHeight = '100%';
  
  // Build scene based on ID
  switch(sceneId) {
    case 'xochimilco-morning':
      renderXochimilcoBackground(svg);
      renderCharacter(svg, 'lotti', 350, 450, 0.8);
      break;
      
    case 'lotti-tinkering':
      renderXochimilcoBackground(svg);
      renderCharacter(svg, 'lotti', 250, 400, 0.9);
      // Add tinkering props
      svg.innerHTML += `
        <g transform="translate(400, 380)">
          <rect width="70" height="90" rx="10" fill="#4ECDC4"/>
          <rect x="10" y="10" width="50" height="70" rx="5" fill="#5DD9D1"/>
          <circle cx="60" cy="25" r="8" fill="#FFD700"/>
        </g>
      `;
      break;
      
    case 'portal-appears':
      renderXochimilcoBackground(svg);
      renderPortal(svg, 400, 300, 120);
      renderCharacter(svg, 'lotti', 250, 480, 0.7);
      break;
      
    case 'rudi-steals':
      renderXochimilcoBackground(svg);
      renderPortal(svg, 300, 300, 100);
      renderCharacter(svg, 'rudi', 280, 250, 0.8);
      renderCharacter(svg, 'lotti', 550, 480, 0.6);
      svg.innerHTML += `<g transform="translate(260, 210)">
        <rect width="45" height="55" rx="8" fill="#4ECDC4"/>
        <circle cx="38" cy="15" r="6" fill="#FFD700"/>
      </g>`;
      break;
      
    case 'lotti-brave':
      renderXochimilcoBackground(svg);
      renderPortal(svg, 550, 300, 120);
      renderCharacter(svg, 'lotti', 200, 420, 0.85);
      break;
      
    case 'rainforest-arrival':
      renderRainforestBackground(svg);
      renderCharacter(svg, 'lotti', 350, 480, 0.75);
      break;
      
    case 'bruno-swimming':
      renderRainforestBackground(svg);
      svg.innerHTML += `<ellipse cx="400" cy="420" rx="350" ry="100" fill="#6B8E23"/>`;
      svg.innerHTML += `
        <g transform="translate(350, 380)">
          <ellipse cx="0" cy="0" rx="35" ry="25" fill="#A0522D"/>
          <circle cx="-10" cy="-5" r="5" fill="#2d1e17"/>
          <circle cx="10" cy="-5" r="5" fill="#2d1e17"/>
          <ellipse cx="-18" cy="-8" rx="7" ry="5" fill="#A0522D"/>
          <ellipse cx="18" cy="-8" rx="7" ry="5" fill="#A0522D"/>
          <ellipse cx="0" cy="5" rx="10" ry="6" fill="#5a3622"/>
        </g>
      `;
      break;
      
    case 'bruno-appears':
      renderRainforestBackground(svg);
      renderCharacter(svg, 'bruno', 350, 400, 1.0);
      break;
      
    case 'paula-arrives':
      renderRainforestBackground(svg);
      renderCharacter(svg, 'paula', 220, 420, 0.95);
      renderCharacter(svg, 'lotti', 400, 480, 0.7);
      renderCharacter(svg, 'bruno', 580, 460, 0.85);
      svg.innerHTML += `<ellipse cx="250" cy="510" rx="40" ry="8" fill="#4A90A4" opacity="0.5"/>`;
      break;
      
    case 'tuko-flies':
      renderRainforestBackground(svg);
      renderCharacter(svg, 'tuko', 350, 200, 0.9);
      svg.innerHTML += `
        <rect x="650" y="420" width="60" height="180" fill="#654321"/>
        <ellipse cx="680" cy="400" rx="90" ry="100" fill="#228B22"/>
      `;
      break;
      
    case 'bruno-catches':
      renderRainforestBackground(svg);
      svg.innerHTML += `<ellipse cx="400" cy="470" rx="200" ry="80" fill="#4A90A4"/>`;
      renderCharacter(svg, 'bruno', 300, 380, 0.9);
      renderCharacter(svg, 'paula', 250, 340, 0.8);
      break;
      
    case 'momo-hanging':
      renderRainforestBackground(svg);
      svg.innerHTML += `
        <rect x="120" y="0" width="50" height="350" fill="#654321"/>
        <rect x="120" y="150" width="280" height="28" rx="14" fill="#8B4513"/>
      `;
      renderCharacter(svg, 'momo', 260, 240, 0.85);
      renderCharacter(svg, 'lotti', 450, 500, 0.7);
      renderCharacter(svg, 'paula', 600, 490, 0.75);
      break;
      
    case 'fips-flies':
      renderRainforestBackground(svg);
      svg.innerHTML += `
        <rect x="360" y="180" width="80" height="420" fill="#654321"/>
        <ellipse cx="400" cy="170" rx="80" ry="60" fill="#2F4F2F"/>
      `;
      renderCharacter(svg, 'fips', 250, 240, 1.0);
      renderCharacter(svg, 'fips', 220, 320, 0.9);
      break;
      
    case 'rudi-in-tree':
      renderRainforestBackground(svg);
      svg.innerHTML += `
        <rect x="220" y="220" width="60" height="380" fill="#654321"/>
        <rect x="200" y="360" width="200" height="25" rx="10" fill="#8B4513"/>
        <ellipse cx="250" cy="340" rx="50" ry="40" fill="#2F4F2F"/>
        <ellipse cx="250" cy="320" rx="35" ry="50" fill="#1a1a1a" opacity="0.7"/>
      `;
      renderCharacter(svg, 'rudi', 230, 310, 0.75);
      svg.innerHTML += `
        <g transform="translate(210, 280)">
          <rect width="40" height="50" rx="8" fill="#4ECDC4"/>
          <circle cx="32" cy="12" r="5" fill="#FFD700"/>
        </g>
      `;
      break;
      
    case 'branch-breaks':
      renderRainforestBackground(svg);
      svg.innerHTML += `
        <g transform="translate(300, 220) rotate(45)">
          <rect width="150" height="20" rx="8" fill="#8B4513"/>
        </g>
      `;
      renderCharacter(svg, 'rudi', 400, 380, 0.7);
      renderCharacter(svg, 'fips', 220, 200, 0.9);
      renderCharacter(svg, 'tuko', 520, 180, 0.8);
      break;
      
    case 'bruno-rescues':
      renderRainforestBackground(svg);
      svg.innerHTML += `
        <ellipse cx="400" cy="420" rx="350" ry="120" fill="#6B8E23"/>
        <path d="M200 420 Q250 410 300 420 Q350 430 400 420 Q450 410 500 420" 
              fill="none" stroke="#fff" stroke-width="3" opacity="0.5"/>
      `;
      renderCharacter(svg, 'rudi', 260, 410, 0.75);
      svg.innerHTML += `<rect x="240" y="390" width="50" height="15" rx="5" fill="#8B4513"/>`;
      renderCharacter(svg, 'bruno', 450, 400, 0.95);
      renderCharacter(svg, 'paula', 630, 540, 0.7);
      renderCharacter(svg, 'lotti', 120, 530, 0.6);
      break;
      
    case 'lotti-dives':
      svg.innerHTML += `
        <rect width="800" height="600" fill="#4A90A4"/>
        <ellipse cx="400" cy="300" rx="250" ry="200" fill="#2F5F7F" opacity="0.6"/>
      `;
      renderCharacter(svg, 'lotti', 350, 300, 0.8);
      svg.innerHTML += `
        <circle cx="320" cy="300" r="8" fill="#fff" opacity="0.6"/>
        <circle cx="380" cy="320" r="6" fill="#fff" opacity="0.6"/>
        <circle cx="340" cy="350" r="10" fill="#fff" opacity="0.6"/>
      `;
      break;
      
    case 'rope-rescue':
      renderRainforestBackground(svg);
      svg.innerHTML += `<ellipse cx="400" cy="470" rx="350" ry="120" fill="#6B8E23"/>`;
      renderCharacter(svg, 'lotti', 220, 420, 0.7);
      svg.innerHTML += `<path d="M250 400 Q320 370 390 390" fill="none" stroke="#DDA15E" stroke-width="8"/>`;
      renderCharacter(svg, 'bruno', 380, 390, 0.95);
      renderCharacter(svg, 'rudi', 350, 360, 0.65);
      renderCharacter(svg, 'paula', 570, 480, 0.75);
      renderCharacter(svg, 'tuko', 620, 330, 0.7);
      break;
      
    case 'friends':
      renderRainforestBackground(svg);
      renderCharacter(svg, 'rudi', 220, 440, 0.75);
      renderCharacter(svg, 'paula', 340, 430, 0.8);
      renderCharacter(svg, 'bruno', 480, 420, 0.9);
      renderCharacter(svg, 'lotti', 620, 470, 0.65);
      renderCharacter(svg, 'tuko', 570, 300, 0.75);
      svg.innerHTML += `
        <rect x="320" y="240" width="40" height="30" rx="8" fill="#8B4513"/>
      `;
      renderCharacter(svg, 'momo', 340, 210, 0.6);
      break;
      
    case 'mystery-stone':
      svg.innerHTML += `
        <defs>
          <linearGradient id="evening" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FF6B9D"/>
            <stop offset="100%" stop-color="#4A5899"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#evening)"/>
        <circle cx="120" cy="120" r="60" fill="#FFD700" opacity="0.8"/>
        <ellipse cx="400" cy="540" rx="300" ry="60" fill="#4A5899" opacity="0.6"/>
      `;
      renderPortal(svg, 580, 380, 100);
      svg.innerHTML += `
        <circle cx="520" cy="460" r="10" fill="#FFD700">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
      `;
      renderCharacter(svg, 'bruno', 240, 480, 0.85);
      renderCharacter(svg, 'lotti', 370, 500, 0.7);
      renderCharacter(svg, 'rudi', 150, 510, 0.65);
      break;
      
    default:
      svg.innerHTML = '<text x="400" y="300" text-anchor="middle" font-size="24" fill="#666">Scene coming soon</text>';
  }
  
  container.appendChild(svg);
}
