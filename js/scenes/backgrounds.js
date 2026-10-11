// Reusable background components for scenes

export function renderXochimilcoBackground(svg) {
  svg.innerHTML += `
    <defs>
      <linearGradient id="sky-xochi" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#87CEEB"/>
        <stop offset="100%" stop-color="#B0E0E6"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#sky-xochi)"/>
    
    <!-- Water -->
    <ellipse cx="400" cy="480" rx="380" ry="120" fill="#4A90A4"/>
    <ellipse cx="400" cy="470" rx="360" ry="100" fill="#5BA4BE" opacity="0.6"/>
    
    <!-- Trajineras (colorful boats) -->
    <g id="trajinera1" transform="translate(100, 380)">
      <path d="M0 40 L0 55 L120 55 L120 40 Z" fill="#D2691E"/>
      <path d="M-10 40 L0 55 L120 55 L130 40 Z" fill="#8B4513"/>
      <rect x="20" y="10" width="80" height="30" fill="#FF6B9D" opacity="0.9"/>
      <path d="M20 10 Q50 0 80 10" fill="none" stroke="#FF1493" stroke-width="2"/>
      <text x="60" y="30" font-size="18" fill="white" text-anchor="middle" font-weight="bold">🌸</text>
    </g>
    
    <g id="trajinera2" transform="translate(550, 400)">
      <path d="M0 35 L0 48 L90 48 L90 35 Z" fill="#CD853F"/>
      <path d="M-8 35 L0 48 L90 48 L98 35 Z" fill="#A0522D"/>
      <rect x="15" y="8" width="60" height="25" fill="#4ECDC4" opacity="0.9"/>
      <path d="M15 8 Q45 -2 75 8" fill="none" stroke="#2BA3B8" stroke-width="2"/>
    </g>
    
    <!-- Chinampas (floating gardens) -->
    <g id="chinampa1" transform="translate(600, 360)">
      <ellipse cx="0" cy="0" rx="90" ry="45" fill="#228B22"/>
      <circle cx="-30" cy="-10" r="10" fill="#FF69B4"/>
      <circle cx="10" cy="-5" r="10" fill="#FFD700"/>
      <circle cx="30" cy="-8" r="10" fill="#FF1493"/>
      <circle cx="-10" cy="5" r="8" fill="#FFA500"/>
    </g>
    
    <!-- Water lilies -->
    <g id="lily1" transform="translate(250, 450)">
      <ellipse cx="0" cy="0" rx="35" ry="15" fill="#228B22" opacity="0.8"/>
      <ellipse cx="0" cy="-3" rx="30" ry="12" fill="#90EE90"/>
      <circle cx="0" cy="-8" r="12" fill="#FFB6C1"/>
      <circle cx="0" cy="-8" r="5" fill="#FFD700"/>
    </g>
    
    <!-- Reeds -->
    <g id="reeds">
      <line x1="50" y1="520" x2="48" y2="420" stroke="#2F4F2F" stroke-width="4"/>
      <line x1="65" y1="520" x2="62" y2="430" stroke="#2F4F2F" stroke-width="4"/>
      <line x1="750" y1="520" x2="750" y2="400" stroke="#2F4F2F" stroke-width="4"/>
      <line x1="765" y1="520" x2="763" y2="410" stroke="#2F4F2F" stroke-width="4"/>
      <ellipse cx="750" cy="390" rx="18" ry="10" fill="#8B4513"/>
    </g>
  `;
}

export function renderRainforestBackground(svg) {
  svg.innerHTML += `
    <defs>
      <linearGradient id="forest-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#87CEEB"/>
        <stop offset="60%" stop-color="#7CB342"/>
        <stop offset="100%" stop-color="#558B2F"/>
      </linearGradient>
      <pattern id="leaves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="8" fill="#228B22" opacity="0.3"/>
        <circle cx="30" cy="25" r="6" fill="#2E7D32" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#forest-sky)"/>
    
    <!-- Ground -->
    <ellipse cx="400" cy="550" rx="400" ry="50" fill="#8B7355"/>
    <ellipse cx="400" cy="545" rx="380" ry="45" fill="#A0826D"/>
    
    <!-- Trees -->
    <g id="tree1">
      <rect x="80" y="100" width="50" height="500" fill="#654321"/>
      <rect x="85" y="100" width="40" height="500" fill="#8B4513" opacity="0.6"/>
      <ellipse cx="105" cy="120" rx="80" ry="100" fill="#228B22"/>
      <ellipse cx="105" cy="100" rx="70" ry="85" fill="#2E7D32" opacity="0.8"/>
      <circle cx="90" cy="140" r="15" fill="#FFD700" opacity="0.8"/>
    </g>
    
    <g id="tree2">
      <rect x="680" y="150" width="45" height="450" fill="#654321"/>
      <rect x="685" y="150" width="35" height="450" fill="#8B4513" opacity="0.6"/>
      <ellipse cx="702" cy="170" rx="70" ry="90" fill="#228B22"/>
      <ellipse cx="702" cy="155" rx="60" ry="75" fill="#2E7D32" opacity="0.8"/>
    </g>
    
    <!-- Vines/lianas -->
    <path d="M120 80 Q130 200 100 320 T 120 450" fill="none" stroke="#2F4F2F" stroke-width="6" opacity="0.6"/>
    <path d="M680 100 Q670 180 690 280 T 680 400" fill="none" stroke="#2F4F2F" stroke-width="5" opacity="0.6"/>
    
    <!-- Tropical flowers -->
    <g id="flowers">
      <circle cx="200" cy="200" r="18" fill="#FF1493"/>
      <circle cx="200" cy="200" r="8" fill="#FFD700"/>
      <circle cx="600" cy="250" r="15" fill="#FF6B6B"/>
      <circle cx="600" cy="250" r="6" fill="#FFE135"/>
      <circle cx="350" cy="280" r="12" fill="#9C27B0"/>
    </g>
  `;
}

export function renderPortal(svg, x, y, size = 100) {
  svg.innerHTML += `
    <g transform="translate(${x}, ${y})">
      <!-- Portal ring -->
      <circle cx="0" cy="0" r="${size}" fill="none" stroke="#4ECDC4" stroke-width="8" opacity="0.7"/>
      <circle cx="0" cy="0" r="${size * 0.85}" fill="#1e3a8a" opacity="0.7"/>
      
      <!-- Glowing points -->
      <circle cx="${-size * 0.7}" cy="${-size * 0.5}" r="7" fill="#4ECDC4">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="0" cy="${-size}" r="7" fill="#4ECDC4">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="${size * 0.7}" cy="${-size * 0.5}" r="7" fill="#4ECDC4">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="${size * 0.9}" cy="${size * 0.3}" r="7" fill="#4ECDC4">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="${-size * 0.9}" cy="${size * 0.3}" r="7" fill="#4ECDC4">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Swirl effect -->
      <path d="M${-size * 0.5} ${-size * 0.2} Q0 ${size * 0.3} ${size * 0.5} ${-size * 0.2} Q${size * 0.4} ${size * 0.4} 0 ${size * 0.5} Q${-size * 0.4} ${size * 0.4} ${-size * 0.5} ${-size * 0.2}" 
            fill="#5DD9D1" opacity="0.4"/>
      
      <!-- Glitter particles -->
      <circle cx="${-size * 0.3}" cy="${size * 0.1}" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="${size * 0.2}" cy="${-size * 0.1}" r="4" fill="#fff" opacity="0.7"/>
      <circle cx="${size * 0.1}" cy="${size * 0.25}" r="2" fill="#fff" opacity="0.9"/>
    </g>
  `;
}
