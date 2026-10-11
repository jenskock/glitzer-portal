# Issues Found During Second Pass

## Completed Fixes
1. ✅ Story image splitting: Fixed to use `marginLeft: -100%` for right page
2. ✅ Story text layout: Image now 55% height, text flexible with 18-22px font  
3. ✅ Puzzle spread positioning: Changed to fixed positioning to span full width

## Remaining Critical Issues

### 1. JavaScript Syntax Error
**Problem**: The escaped quotes `\"` in band1.js render as literal backslashes in the UI
**Attempted Fix**: Tried replacing with German quotes `„"` but these cause JavaScript syntax errors
**Solution Needed**: Either:
- Use Unicode escapes: `\u201E` and `\u201C`
- Or render-time replacement in the text rendering code
- Or accept English quotes `"` for now

### 2. Book Opening Fails in Tests  
**Problem**: Page navigation click helper times out when opening book
**Likely Cause**: JavaScript error from malformed book data or rendering issue
**Need**: Debug console errors in browser

### 3. Missing Card Images
**Files Missing**: 
- images/band1/p03-anlaut-*.webp (8 cards)
- images/band1/p06-quiz-*.webp  
- images/band1/p07-memory-*.webp (12 cards)
- images/band1/p09-wort-*.webp (12 cards)

**Solution Needed**: Either generate placeholder images or update paths to use existing images

### 4. Puzzle Positioning Not Verified
**Status**: Changed CSS but need to verify puzzles actually span both pages
**Test Needed**: Visual inspection of each puzzle screenshot

### 5. Story Spread Image Mapping
**User Report**: "Screenshot labelled spread 5 shows s04's content"
**Need**: Verify each story spread N uses correct sN.webp file

### 6. Steckbrief Puzzles  
**Problem**: Only show buttons 1/3/5, image faded
**Need**: Check FactCardsPuzzle renderer implementation

### 7. Labyrinth Rendering
**Problem**: Maze barely visible and clipped
**Need**: Adjust canvas sizing and maze drawing code

### 8. Ausmalbild
**Problem**: Need to show full line art with color palette
**Need**: Check ColoringPuzzle implementation

### 9. Fehlerbild Layout
**Problem**: Need A and B images side by side, one per page
**Need**: Check DifferencesPuzzle CSS

## Recommendations
1. Fix JavaScript syntax first (blocks everything)
2. Generate missing card image placeholders
3. Test each puzzle type individually
4. Capture and verify all 22 screenshots
5. Run full test suite

## Files Modified So Far
- js/pages/story.js - Image splitting fix
- styles/book.css - Layout improvements  
- Tests timing out, unable to verify changes visually
