# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 3: Anlaut B can be solved
- Location: tests/glitzer-portal.spec.js:137:3

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - generic:
      - heading "Das Glitzer-Portal" [level=1]
      - generic:
        - generic:
          - generic:
            - generic: Das Glitzer-Portal
            - generic: Das Rätsel des leuchtenden Steins
            - generic: Band 1
  - generic [ref=e3]:
    - generic:
      - button "Zurück zum Bücherregal" [ref=e4] [cursor=pointer]: ×
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]: Anlaut B
          - generic [ref=e11]: B wie Baum! Tippe alle Bilder, die mit B anfangen.
        - generic [ref=e12]:
          - generic [ref=e13] [cursor=pointer]:
            - img "Baum"
          - generic [ref=e14] [cursor=pointer]:
            - img "Blume"
          - generic [ref=e15] [cursor=pointer]:
            - img "Banane"
          - generic [ref=e16] [cursor=pointer]:
            - img "Boot"
          - generic [ref=e17] [cursor=pointer]:
            - img "Fisch"
          - generic [ref=e18] [cursor=pointer]:
            - img "Sonne"
          - generic [ref=e19] [cursor=pointer]:
            - img "Nest"
          - generic [ref=e20] [cursor=pointer]:
            - img "Affe"
      - button "Vorherige Seite" [ref=e23] [cursor=pointer]
      - button "Nächste Seite" [active] [ref=e26] [cursor=pointer]
```