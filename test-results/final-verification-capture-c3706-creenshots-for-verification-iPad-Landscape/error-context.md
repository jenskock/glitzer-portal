# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: final-verification.spec.js >> capture all 22 screenshots for verification
- Location: tests/final-verification.spec.js:10:1

# Error details

```
Error: page.evaluate: TypeError: Cannot read properties of null (reading 'click')
    at eval (eval at evaluate (:370:30), <anonymous>:2:32)
    at UtilityScript.evaluate (<anonymous>:372:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Das Glitzer-Portal" [level=1] [ref=e5]
  - generic:
    - generic:
      - button "Zurück zum Bücherregal" [ref=e7] [cursor=pointer]: ×
      - button "Vorherige Seite" [ref=e13] [cursor=pointer]
      - button "Nächste Seite" [ref=e16] [cursor=pointer]
```