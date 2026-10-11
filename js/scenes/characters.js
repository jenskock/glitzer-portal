// Full-body character SVGs for positioning in scenes

export function renderCharacter(svg, character, x, y, scale = 1) {
  const characterSVGs = {
    lotti: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/lotti_transparent.svg" width="200" height="200" x="-100" y="-100"/>
      </g>
    `,
    bruno: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/bruno_transparent.svg" width="250" height="250" x="-125" y="-125"/>
      </g>
    `,
    paula: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/paula_transparent.svg" width="200" height="220" x="-100" y="-110"/>
      </g>
    `,
    tuko: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/tuko_transparent.svg" width="180" height="180" x="-90" y="-90"/>
      </g>
    `,
    momo: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/momo_transparent.svg" width="160" height="180" x="-80" y="-90"/>
      </g>
    `,
    fips: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/fips_transparent.svg" width="120" height="120" x="-60" y="-60"/>
      </g>
    `,
    rudi: `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <image href="./assets/characters/rudi_transparent.svg" width="180" height="200" x="-90" y="-100"/>
      </g>
    `
  };
  
  if (characterSVGs[character]) {
    svg.innerHTML += characterSVGs[character];
  }
}

export function renderMultipleCharacters(svg, characters) {
  characters.forEach(char => {
    renderCharacter(svg, char.name, char.x, char.y, char.scale || 1);
  });
}
