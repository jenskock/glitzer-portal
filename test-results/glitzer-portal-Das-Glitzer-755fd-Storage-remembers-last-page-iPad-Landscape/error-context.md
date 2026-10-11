# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> localStorage remembers last page
- Location: tests/glitzer-portal.spec.js:63:3

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
      - button "Zurück zum Bücherregal" [active] [ref=e28] [cursor=pointer]: ×
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]: Fehlerbild
          - generic [ref=e35]: Die zwei Bilder sind fast gleich. Finde 5 Fehler!
        - generic:
          - generic:
            - generic:
              - img "Bild links"
            - generic:
              - img "Bild rechts"
              - generic [ref=e36] [cursor=pointer]
              - generic [ref=e37] [cursor=pointer]
              - generic [ref=e38] [cursor=pointer]
              - generic [ref=e39] [cursor=pointer]
              - generic [ref=e40] [cursor=pointer]
      - button "Vorherige Seite" [ref=e43] [cursor=pointer]
      - button "Nächste Seite" [ref=e46] [cursor=pointer]
```