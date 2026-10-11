# Das Glitzer-Portal

Interactive children's book for readers aged 6–7. Band 1, *Das Rätsel des leuchtenden Steins*, is ten story spreads and ten touch puzzles. Reading progress is stored in the browser.

Live: https://jenskock.github.io/glitzer-portal/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:8000. HTML, CSS, and JS changes reload in the browser.

## Layout

```
index.html          entry page
js/                 bookshelf, reader, page and puzzle modules
books/band1.js      Band 1 text and puzzle data
images/band1/       story and puzzle art
assets/fonts/       Andika and Source Sans 3
assets/characters/  praise portraits
styles/             layout and puzzle styles
illustration/       style prompt, reference image, character lineup
glitzer-assets-band1/  Band 1 manuscript, prompts, and source art
bruno-lotti/        character art and manuscript
```

To add another volume, create `books/bandN.js` in the same shape as `books/band1.js` and add it to the books array in `js/main.js`. The style prompt and character lineup in `illustration/` are the reference for new art.

## Characters

- Lotti — pink axolotl
- Bruno — capybara
- Paula — girl from the rainforest
- Tuko — toucan
- Momo — sloth
- Fips — hummingbird
- Rudi — raccoon

All content © Jens Kock
