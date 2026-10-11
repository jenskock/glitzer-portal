// Suchbild scene with hidden objects embedded in Xochimilco

export function renderSearchScene(container, onObjectFound) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1600 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  
  svg.innerHTML = `
    <defs>
      <linearGradient id="sky-search" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#87CEEB"/>
        <stop offset="100%" stop-color="#B0E0E6"/>
      </linearGradient>
    </defs>
    
    <!-- Sky -->
    <rect width="1600" height="600" fill="url(#sky-search)"/>
    
    <!-- Water -->
    <ellipse cx="800" cy="480" rx="750" ry="120" fill="#4A90A4"/>
    <ellipse cx="800" cy="470" rx="720" ry="100" fill="#5BA4BE" opacity="0.6"/>
    
    <!-- Trajinera 1 (left) with hidden screw -->
    <g id="boat1" transform="translate(200, 380)">
      <path d="M0 40 L0 55 L140 55 L140 40 Z" fill="#D2691E"/>
      <path d="M-12 40 L0 55 L140 55 L152 40 Z" fill="#8B4513"/>
      <rect x="25" y="8" width="90" height="35" fill="#FF6B9D" opacity="0.9"/>
      <path d="M25 8 Q70 -3 115 8" fill="none" stroke="#FF1493" stroke-width="3"/>
      <text x="70" y="32" font-size="20" fill="white" text-anchor="middle">🌸</text>
      
      <!-- Hidden: Schraube am Bootsrand -->
      <g class="search-object" data-id="screw" transform="translate(135, 45)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="18" fill="transparent"/>
        <path d="M-5 -8 L5 -8 L6 8 L-6 8 Z" fill="#888"/>
        <circle cx="0" cy="-5" r="2" fill="#444"/>
        <line x1="-3" y1="-5" x2="3" y2="-5" stroke="#444" stroke-width="1"/>
      </g>
    </g>
    
    <!-- Trajinera 2 (right) with hidden bulb -->
    <g id="boat2" transform="translate(1100, 400)">
      <path d="M0 35 L0 48 L110 48 L110 35 Z" fill="#CD853F"/>
      <path d="M-10 35 L0 48 L110 48 L120 35 Z" fill="#A0522D"/>
      <rect x="20" y="6" width="70" height="28" fill="#4ECDC4" opacity="0.9"/>
      <path d="M20 6 Q55 -3 90 6" fill="none" stroke="#2BA3B8" stroke-width="3"/>
      
      <!-- Hidden: Glühbirne an Bootsbogen -->
      <g class="search-object" data-id="bulb" transform="translate(55, 15)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="20" fill="transparent"/>
        <circle cx="0" cy="0" r="9" fill="#FFD700" opacity="0.8"/>
        <rect x="-3" y="7" width="6" height="4" fill="#888"/>
        <path d="M-4 3 L-4 7 L4 7 L4 3" fill="none" stroke="#666" stroke-width="1"/>
      </g>
    </g>
    
    <!-- Chinampa (floating garden) with hidden gear -->
    <g id="chinampa" transform="translate(1200, 340)">
      <ellipse cx="0" cy="0" rx="110" ry="50" fill="#228B22"/>
      <circle cx="-40" cy="-15" r="12" fill="#FF69B4"/>
      <circle cx="10" cy="-8" r="12" fill="#FFD700"/>
      <circle cx="40" cy="-12" r="12" fill="#FF1493"/>
      <circle cx="-15" cy="8" r="10" fill="#FFA500"/>
      
      <!-- Hidden: Zahnrad zwischen Blumen -->
      <g class="search-object" data-id="gear" transform="translate(-15, -5)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="22" fill="transparent"/>
        <circle cx="0" cy="0" r="10" fill="#888"/>
        <circle cx="0" cy="0" r="4" fill="#666"/>
        <rect x="-2" y="-13" width="4" height="4" fill="#888"/>
        <rect x="-2" y="9" width="4" height="4" fill="#888"/>
        <rect x="-13" y="-2" width="4" height="4" fill="#888"/>
        <rect x="9" y="-2" width="4" height="4" fill="#888"/>
      </g>
    </g>
    
    <!-- Water lilies with hidden magnifier -->
    <g id="lily-group" transform="translate(500, 450)">
      <ellipse cx="0" cy="0" rx="45" ry="18" fill="#228B22" opacity="0.8"/>
      <ellipse cx="0" cy="-3" rx="40" ry="15" fill="#90EE90"/>
      <circle cx="0" cy="-10" r="15" fill="#FFB6C1"/>
      <circle cx="0" cy="-10" r="6" fill="#FFD700"/>
      
      <!-- Hidden: Lupe unter Seerosenblatt -->
      <g class="search-object" data-id="magnifier" transform="translate(-20, 12)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="24" fill="transparent"/>
        <circle cx="0" cy="0" r="11" fill="none" stroke="#888" stroke-width="2"/>
        <line x1="8" y1="8" x2="15" y2="15" stroke="#888" stroke-width="3"/>
      </g>
    </g>
    
    <g id="lily2" transform="translate(900, 460)">
      <ellipse cx="0" cy="0" rx="40" ry="16" fill="#228B22" opacity="0.8"/>
      <ellipse cx="0" cy="-3" rx="35" ry="13" fill="#90EE90"/>
      <circle cx="0" cy="-8" r="12" fill="#FFA500"/>
    </g>
    
    <!-- Reeds with hidden wrench and Rudi's eyes -->
    <g id="reeds-left">
      <line x1="100" y1="520" x2="98" y2="410" stroke="#2F4F2F" stroke-width="5"/>
      <line x1="120" y1="520" x2="116" y2="420" stroke="#2F4F2F" stroke-width="5"/>
      <line x1="140" y1="520" x2="138" y2="400" stroke="#2F4F2F" stroke-width="4"/>
      
      <!-- Hidden: Schraubenschlüssel im Schilf -->
      <g class="search-object" data-id="wrench" transform="translate(110, 460)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="25" fill="transparent"/>
        <rect x="-3" y="-15" width="6" height="25" fill="#888"/>
        <path d="M-6 -18 L-6 -12 L-3 -15 L3 -15 L6 -12 L6 -18 Z" fill="#888"/>
      </g>
      
      <!-- Bonus: Rudi's eyes -->
      <g class="search-object bonus" data-id="rudi-eyes" transform="translate(120, 440)" style="cursor: pointer;">
        <circle cx="0" cy="0" r="28" fill="transparent"/>
        <ellipse cx="-6" cy="0" rx="8" ry="10" fill="#2F4F2F"/>
        <ellipse cx="6" cy="0" rx="8" ry="10" fill="#2F4F2F"/>
        <circle cx="-6" cy="-2" r="3" fill="#FFD700"/>
        <circle cx="6" cy="-2" r="3" fill="#FFD700"/>
      </g>
    </g>
    
    <g id="reeds-right">
      <line x1="1500" y1="520" x2="1500" y2="390" stroke="#2F4F2F" stroke-width="5"/>
      <line x1="1520" y1="520" x2="1518" y2="400" stroke="#2F4F2F" stroke-width="5"/>
      <ellipse cx="1500" cy="380" rx="22" ry="12" fill="#8B4513"/>
    </g>
    
    <!-- Lotti on lily pad -->
    <g transform="translate(700, 440)">
      <image href="./assets/characters/lotti_transparent.svg" width="140" height="140" x="-70" y="-70"/>
    </g>
  `;
  
  // Add click handlers
  const objects = svg.querySelectorAll('.search-object');
  objects.forEach(obj => {
    obj.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = obj.getAttribute('data-id');
      obj.style.opacity = '0.5';
      obj.style.pointerEvents = 'none';
      onObjectFound(id);
    });
  });
  
  container.appendChild(svg);
}
