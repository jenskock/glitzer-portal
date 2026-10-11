# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 6: Quiz can be answered
- Location: tests/glitzer-portal.spec.js:227:3

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
          - generic [ref=e10]: Quiz
          - generic [ref=e11]: Was weißt du über die Tiere? Tippe auf die richtige Antwort.
        - generic [ref=e12]:
          - generic [ref=e13]: Wie bewegt sich ein Faultier?
          - generic [ref=e14]:
            - generic [ref=e15] [cursor=pointer]:
              - img "ganz langsam" [ref=e16]
              - generic [ref=e17]: ganz langsam
            - generic [ref=e18] [cursor=pointer]:
              - img "ganz schnell" [ref=e19]
              - generic [ref=e20]: ganz schnell
            - generic [ref=e21] [cursor=pointer]:
              - img "es hüpft" [ref=e22]
              - generic [ref=e23]: es hüpft
      - button "Vorherige Seite" [ref=e26] [cursor=pointer]
      - button "Nächste Seite" [active] [ref=e29] [cursor=pointer]
```