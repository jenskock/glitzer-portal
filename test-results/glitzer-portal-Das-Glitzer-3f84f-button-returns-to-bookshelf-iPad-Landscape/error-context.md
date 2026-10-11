# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> close button returns to bookshelf
- Location: tests/glitzer-portal.spec.js:377:3

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - heading "Das Glitzer-Portal" [level=1] [ref=e5]
    - generic [ref=e8] [cursor=pointer]:
      - generic [ref=e9]: Das Glitzer-Portal
      - generic [ref=e26]: Das Rätsel des leuchtenden Steins
      - generic [ref=e27]: Band 1
  - generic:
    - generic:
      - button "Zurück zum Bücherregal" [ref=e28] [cursor=pointer]: ×
      - button "Vorherige Seite" [ref=e34] [cursor=pointer]
      - button "Nächste Seite" [ref=e37] [cursor=pointer]
```