# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshot-walkthrough.spec.js >> capture walkthrough screenshots
- Location: tests/screenshot-walkthrough.spec.js:3:1

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
            - generic: Das Raetsel des leuchtenden Steins
            - generic: "1"
  - generic [ref=e4]:
    - button "Zurück zum Bücherregal" [ref=e5] [cursor=pointer]: ×
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11]: "Tier-Steckbrief: Axolotl"
        - generic [ref=e12]: Das ist Lotti. Tippe auf die Karten und lerne sie kennen!
      - generic [ref=e14]:
        - generic:
          - img "lotti"
        - generic [ref=e15]:
          - generic [ref=e16] [cursor=pointer]:
            - text: "?"
            - generic [ref=e17]: Ich lebe nur in Mexiko, in Seen bei Mexiko-Stadt.
          - generic [ref=e18] [cursor=pointer]:
            - text: "?"
            - generic [ref=e19]: Meine Kiemen sind außen am Kopf. Damit atme ich unter Wasser.
          - generic [ref=e20] [cursor=pointer]:
            - text: "?"
            - generic [ref=e21]: Wenn ich ein Bein verliere, wächst es wieder nach.
          - generic [ref=e22] [cursor=pointer]:
            - text: "?"
            - generic [ref=e23]: Die meisten Axolotl sind dunkel. Rosa Axolotl wie ich sind selten.
          - generic [ref=e24] [cursor=pointer]:
            - text: "?"
            - generic [ref=e25]: Ich fresse Würmer und kleine Krebse.
          - generic [ref=e26] [cursor=pointer]:
            - text: "?"
            - generic [ref=e27]: Es gibt nur noch wenige Axolotl in der Natur. Wir müssen sie schützen.
    - button "Vorherige Seite" [ref=e30] [cursor=pointer]
    - button "Nächste Seite" [disabled] [ref=e33]
```