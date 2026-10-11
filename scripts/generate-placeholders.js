#!/usr/bin/env node
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 's01-left', label: 'Story 1 Left\nLotti im See' },
  { name: 's01-right', label: 'Story 1 Right\nLotti tüftelt' },
  { name: 'p01-suchbild', label: 'Puzzle 1\nSuchbild' },
  { name: 's02-left', label: 'Story 2 Left\nPortal erscheint' },
  { name: 's02-right', label: 'Story 2 Right\nRudi stiehlt' },
  { name: 'p02-diff-left', label: 'Puzzle 2 Left\nFehlerbild' },
  { name: 'p02-diff-right', label: 'Puzzle 2 Right\nFehlerbild' },
  { name: 's03-left', label: 'Story 3 Left\nLotti mutig' },
  { name: 's03-right', label: 'Story 3 Right\nRegenwald' },
  { name: 's04-left', label: 'Story 4 Left\nBruno schwimmt' },
  { name: 's04-right', label: 'Story 4 Right\nBruno erscheint' },
  { name: 's05-left', label: 'Story 5 Left\nPaula kommt' },
  { name: 's05-right', label: 'Story 5 Right\nTuko fliegt' },
  { name: 's06-left', label: 'Story 6 Left\nBruno fängt' },
  { name: 's06-right', label: 'Story 6 Right\nMomo hängt' },
  { name: 's07-left', label: 'Story 7 Left\nFips fliegt' },
  { name: 's07-right', label: 'Story 7 Right\nRudi im Baum' },
  { name: 's08-left', label: 'Story 8 Left\nAst bricht' },
  { name: 's08-right', label: 'Story 8 Right\nBruno rettet' },
  { name: 'p08-coloring', label: 'Puzzle 8\nAusmalbild' },
  { name: 's09-left', label: 'Story 9 Left\nLotti taucht' },
  { name: 's09-right', label: 'Story 9 Right\nSeil-Rettung' },
  { name: 's10-left', label: 'Story 10 Left\nFreunde' },
  { name: 's10-right', label: 'Story 10 Right\nGeheimnis' }
];

const colors = ['#87CEEB', '#90EE90', '#FFB6D9', '#FFD700', '#FFA07A', '#DDA0DD', '#98D8C8'];

pages.forEach((page, i) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');
  
  const color = colors[i % colors.length];
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 800, 600);
  
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillRect(50, 50, 700, 500);
  
  ctx.fillStyle = '#333';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  const lines = page.label.split('\n');
  lines.forEach((line, j) => {
    ctx.fillText(line, 400, 250 + j * 50);
  });
  
  ctx.font = '20px Arial';
  ctx.fillStyle = '#666';
  ctx.fillText('[Placeholder - wird durch gerenderte Illustration ersetzt]', 400, 400);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join('images/band1', `${page.name}.webp`), buffer);
});

console.log(`Generated ${pages.length} placeholder images`);
