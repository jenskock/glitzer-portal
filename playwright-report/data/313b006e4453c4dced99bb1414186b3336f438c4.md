# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 10: Axolotl Steckbrief can be completed
- Location: tests/glitzer-portal.spec.js:337:3

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
          - generic [ref=e10]: "Tier-Steckbrief: Axolotl"
          - generic [ref=e11]: Das ist Lotti. Tippe auf die Karten und lerne sie kennen!
        - generic:
          - generic:
            - generic:
              - img "lotti"
            - generic [ref=e12]:
              - generic [ref=e13] [cursor=pointer]:
                - text: "?"
                - generic [ref=e14]: Ich lebe nur in Mexiko, in Seen bei Mexiko-Stadt.
              - generic [ref=e15] [cursor=pointer]:
                - text: "?"
                - generic [ref=e16]: Meine Kiemen sind außen am Kopf. Damit atme ich unter Wasser.
              - generic [ref=e17] [cursor=pointer]:
                - text: "?"
                - generic [ref=e18]: Wenn ich ein Bein verliere, wächst es wieder nach.
              - generic [ref=e19] [cursor=pointer]:
                - text: "?"
                - generic [ref=e20]: Die meisten Axolotl sind dunkel. Rosa Axolotl wie ich sind selten.
              - generic [ref=e21] [cursor=pointer]:
                - text: "?"
                - generic [ref=e22]: Ich fresse Würmer und kleine Krebse.
              - generic [ref=e23] [cursor=pointer]:
                - text: "?"
                - generic [ref=e24]: Es gibt nur noch wenige Axolotl in der Natur. Wir müssen sie schützen.
      - button "Vorherige Seite" [ref=e27] [cursor=pointer]
      - button "Nächste Seite" [disabled] [ref=e30]
```