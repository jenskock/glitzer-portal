# Das Glitzer-Portal

Interactive children's book web app for the series "Das Glitzer-Portal".

## 🌟 Live Demo

Visit: **https://jenskock.github.io/glitzer-portal/**

## 📚 About

"Das Glitzer-Portal" is an interactive children's book series for readers aged 6-7 who are learning to read. Each volume combines storytelling with educational puzzles.

**Band 1: Das Rätsel des leuchtenden Steins**
- 10 story double spreads
- 10 interactive puzzles
- Colorful comic-style illustrations
- Large, readable fonts (Andika & Baloo2)

## 🎮 Features

- **Interactive Reading**: Swipe or tap to turn pages
- **Touch-Friendly Puzzles**: All 10 puzzles work by touch
- **Progress Memory**: Automatically remembers where you left off
- **iPad Optimized**: Best viewed on iPad in landscape mode
- **No Installation**: Works directly in the browser

## 🧩 Puzzles in Band 1

1. Suchbild (Hidden Objects)
2. Fehlerbild (Spot the Differences)
3. Anlaut B (Initial Sounds)
4. Steckbrief Capybara (Animal Facts)
5. Labyrinth (Maze)
6. Quiz
7. Memory
8. Ausmalbild (Coloring)
9. Wort-zu-Bild (Word Matching)
10. Steckbrief Axolotl (Animal Facts)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- Python 3 (for local server)

### Setup
```bash
npm install
```

### Run locally
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

### Run tests
```bash
npm test
```

## 📁 Project Structure

```
/
├── index.html              # Main entry point
├── styles/                 # CSS files
├── js/                     # JavaScript modules
│   ├── main.js            # App initialization
│   ├── bookshelf.js       # Bookshelf renderer
│   ├── book-reader.js     # Page navigation
│   ├── pages/             # Page renderers
│   ├── puzzles/           # Puzzle implementations
│   └── scenes/            # SVG scene compositions
├── books/                  # Book data
│   └── band1.js           # Band 1 content
├── assets/
│   ├── characters/        # SVG character graphics
│   └── fonts/             # Andika & Baloo2 fonts
└── tests/                  # Playwright tests
```

## 🎨 Adding New Volumes

To add Band 2, Band 3, etc.:

1. Create `books/band2.js` with the same structure as `band1.js`
2. Import and add to the books array in `js/main.js`
3. Add any new character SVGs to `assets/characters/`

No code changes needed - the bookshelf is data-driven!

## 📝 License

All content © Jens Kock

## 🐾 Characters

- **Lotti** - Pink axolotl from Mexico
- **Bruno** - Capybara from South America
- **Paula** - Girl from the rainforest
- **Tuko** - Toucan
- **Momo** - Sloth
- **Fips** - Hummingbird
- **Rudi** - Raccoon
