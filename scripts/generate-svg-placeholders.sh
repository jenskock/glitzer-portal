#!/bin/bash

mkdir -p images/band1

pages=(
  "s01-left:Story 1 Left:Lotti im See"
  "s01-right:Story 1 Right:Lotti tüftelt"
  "p01-suchbild:Puzzle 1:Suchbild"
  "s02-left:Story 2 Left:Portal erscheint"
  "s02-right:Story 2 Right:Rudi stiehlt"
  "p02-diff-left:Puzzle 2 Left:Fehlerbild"
  "p02-diff-right:Puzzle 2 Right:Fehlerbild"
  "s03-left:Story 3 Left:Lotti mutig"
  "s03-right:Story 3 Right:Regenwald"
  "s04-left:Story 4 Left:Bruno schwimmt"
  "s04-right:Story 4 Right:Bruno erscheint"
  "s05-left:Story 5 Left:Paula kommt"
  "s05-right:Story 5 Right:Tuko fliegt"
  "s06-left:Story 6 Left:Bruno fängt"
  "s06-right:Story 6 Right:Momo hängt"
  "s07-left:Story 7 Left:Fips fliegt"
  "s07-right:Story 7 Right:Rudi im Baum"
  "s08-left:Story 8 Left:Ast bricht"
  "s08-right:Story 8 Right:Bruno rettet"
  "p08-coloring:Puzzle 8:Ausmalbild"
  "s09-left:Story 9 Left:Lotti taucht"
  "s09-right:Story 9 Right:Seil-Rettung"
  "s10-left:Story 10 Left:Freunde"
  "s10-right:Story 10 Right:Geheimnis"
)

colors=("#87CEEB" "#90EE90" "#FFB6D9" "#FFD700" "#FFA07A" "#DDA0DD" "#98D8C8")

i=0
for page in "${pages[@]}"; do
  IFS=':' read -r name line1 line2 <<< "$page"
  color="${colors[$((i % 7))]}"
  
  cat > "images/band1/${name}.webp" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <rect width="800" height="600" fill="${color}"/>
  <rect x="50" y="50" width="700" height="500" fill="#fff" opacity="0.9"/>
  <text x="400" y="280" font-size="32" font-weight="bold" text-anchor="middle" fill="#333">${line1}</text>
  <text x="400" y="330" font-size="28" text-anchor="middle" fill="#333">${line2}</text>
  <text x="400" y="420" font-size="18" text-anchor="middle" fill="#666">[Placeholder für gerenderte Illustration]</text>
</svg>
EOF
  
  ((i++))
done

echo "Generated ${#pages[@]} placeholder SVG images"
