// Das Glitzer-Portal - Band 1: Das Rätsel des leuchtenden Steins
export const band1 = {
  id: 'band1',
  title: 'Das Rätsel des leuchtenden Steins',
  series: 'Das Glitzer-Portal',
  coverColor: '#4ECDC4',
  pages: [
    // Cover
    {
      type: 'cover',
      title: 'Das Rätsel des leuchtenden Steins',
      series: 'Das Glitzer-Portal',
      subtitle: 'Band 1'
    },
    // Doppelseite 1 - Lotti im See
    {
      type: 'story',
      spread: 1,
      left: {
        text: 'Das ist Lotti, das Axolotl. Sie lebt in einem See in Mexiko. Dort fahren bunte Boote.',
        image: 'images/band1/s01-left.webp'
      },
      right: {
        text: 'Lotti tüftelt gern. Sie hat einen Rucksack. Daraus kommt immer das richtige Ding.',
        image: 'images/band1/s01-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'search',
      title: 'Suchbild',
      instruction: 'Lottis Tüftel-Sachen sind versteckt. Finde alle 5!',
      image: 'images/band1/p01-suchbild.webp',
      hotspots: [
        { id: 'screw', name: 'Schraube', x: 15, y: 45, radius: 5 },
        { id: 'gear', name: 'Zahnrad', x: 65, y: 30, radius: 5 },
        { id: 'wrench', name: 'Schraubenschlüssel', x: 85, y: 60, radius: 5 },
        { id: 'magnifier', name: 'Lupe', x: 35, y: 75, radius: 5 },
        { id: 'bulb', name: 'Glühbirne', x: 50, y: 20, radius: 5 }
      ],
      bonus: { text: 'Wer schaut da aus dem Schilf?', x: 8, y: 65, radius: 5 },
      praise: { character: 'lotti', text: 'Super! Du hast ja Adleraugen.' }
    },
    // Doppelseite 2 - Der Dieb
    {
      type: 'story',
      spread: 2,
      left: {
        text: 'Im Wasser glitzert es. Ein Strudel dreht sich. Da kommt Rudi, der Waschbär.',
        image: 'images/band1/s02-left.webp'
      },
      right: {
        text: 'Er schnappt den Rucksack. "Hihi, das gehört jetzt mir!" Platsch! Rudi springt in den Strudel.',
        image: 'images/band1/s02-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'differences',
      title: 'Fehlerbild',
      instruction: 'Die zwei Bilder sind fast gleich. Finde 5 Fehler!',
      imageLeft: 'images/band1/p02-diff-left.webp',
      imageRight: 'images/band1/p02-diff-right.webp',
      hotspots: [
        { id: 'tail', name: 'Schwanz', x: 75, y: 50, radius: 8 },
        { id: 'star', name: 'Stern', x: 55, y: 35, radius: 6 },
        { id: 'lily', name: 'Seerose', x: 70, y: 70, radius: 7 },
        { id: 'glasses', name: 'Brille', x: 82, y: 45, radius: 5 },
        { id: 'portal-star', name: 'Glitzerstern', x: 90, y: 25, radius: 5 }
      ],
      praise: { character: 'lotti', text: 'Toll gemacht! Du bist ein Fehler-Profi.' }
    },
    // Doppelseite 3 - Durch das Portal
    {
      type: 'story',
      spread: 3,
      left: {
        text: 'Lotti hat ein bisschen Angst. Aber sie ist mutig. Sie schwimmt in den Strudel.',
        image: 'images/band1/s03-left.webp'
      },
      right: {
        text: 'Wusch! Alles dreht sich. Jetzt ist Lotti im Regenwald, in Südamerika.',
        image: 'images/band1/s03-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'initial-sounds',
      title: 'Leserätsel',
      instruction: 'B wie Baum! Tippe alle Bilder, die mit B anfangen.',
      letter: 'B',
      items: [
        { id: 'baum', word: 'Baum', startsWithB: true },
        { id: 'blume', word: 'Blume', startsWithB: true },
        { id: 'banane', word: 'Banane', startsWithB: true },
        { id: 'boot', word: 'Boot', startsWithB: true },
        { id: 'fisch', word: 'Fisch', startsWithB: false },
        { id: 'sonne', word: 'Sonne', startsWithB: false },
        { id: 'nest', word: 'Nest', startsWithB: false },
        { id: 'affe', word: 'Affe', startsWithB: false }
      ],
      praise: { character: 'lotti', text: 'Bravo! Du hörst ganz genau hin.' }
    },
    // Doppelseite 4 - Bruno
    {
      type: 'story',
      spread: 4,
      left: {
        text: 'Im Fluss schwimmt ein Tier. Man sieht nur Augen, Ohren und Nase.',
        image: 'images/band1/s04-left.webp'
      },
      right: {
        text: 'Das ist Bruno, das Capybara. "Keine Angst", sagt er. "Ich bin ja da!"',
        image: 'images/band1/s04-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Tier-Steckbrief: Capybara',
      instruction: 'Das ist Bruno. Tippe auf die Karten und lerne ihn kennen!',
      character: 'bruno',
      cards: [
        'Ich bin das größte Nagetier der Welt.',
        'Ich lebe in Südamerika.',
        'Ich habe Schwimmhäute an den Füßen.',
        'Ich kann bis zu fünf Minuten tauchen.',
        'Ich fresse Gras und Wasserpflanzen.',
        'Ich lebe gern mit vielen anderen zusammen.'
      ],
      quiz: {
        question: 'Was frisst Bruno?',
        options: [
          { text: 'Gras', correct: true },
          { text: 'Fisch', correct: false },
          { text: 'Kuchen', correct: false }
        ]
      },
      praise: { character: 'bruno', text: 'Jetzt kennst du mich richtig gut!' }
    },
    // Doppelseite 5 - Paula und Tuko
    {
      type: 'story',
      spread: 5,
      left: {
        text: 'Lotti erzählt von Rudi. Da kommt Paula. "Ich weiß einen Weg!", ruft sie.',
        image: 'images/band1/s05-left.webp'
      },
      right: {
        text: 'Oben fliegt Tuko, der Tukan. "Ich hab\'s gesehen!", ruft er. "Rudi ist beim großen Baum."',
        image: 'images/band1/s05-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'maze',
      title: 'Labyrinth',
      instruction: 'Hilf Bruno, Lotti und Paula zum großen Baum! Fahre den Weg mit dem Finger nach.',
      start: { x: 10, y: 50 },
      goal: { x: 90, y: 50 },
      correctPath: [
        { x: 10, y: 50 }, { x: 25, y: 50 }, { x: 25, y: 35 }, 
        { x: 45, y: 35 }, { x: 45, y: 60 }, { x: 65, y: 60 },
        { x: 65, y: 45 }, { x: 90, y: 45 }
      ],
      obstacles: [
        { type: 'puddle', x: 30, y: 65 },
        { type: 'thorns', x: 55, y: 25 },
        { type: 'caiman', x: 75, y: 70 }
      ],
      praise: { character: 'bruno', text: 'Geschafft! Du kennst den Weg.' }
    },
    // Doppelseite 6 - Momo
    {
      type: 'story',
      spread: 6,
      left: {
        text: 'Paula rutscht auf einem Stein aus. Bruno fängt sie auf. Bruno ist stark.',
        image: 'images/band1/s06-left.webp'
      },
      right: {
        text: 'Am Ast hängt Momo, das Faultier. Momo spricht ganz langsam: "Rudi ... ist ... oben."',
        image: 'images/band1/s06-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was weißt du über die Tiere? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wie bewegt sich ein Faultier?',
          options: [
            { text: 'ganz langsam', correct: true, image: 'slow' },
            { text: 'ganz schnell', correct: false, image: 'fast' },
            { text: 'es hüpft', correct: false, image: 'hop' }
          ]
        },
        {
          question: 'Warum ist Momos Fell ein bisschen grün?',
          options: [
            { text: 'Winzige Pflanzen wachsen darin', correct: true },
            { text: 'Sie hat sich angemalt', correct: false },
            { text: 'Sie hat Gras gegessen', correct: false }
          ]
        },
        {
          question: 'Tukos Schnabel ist sehr groß. Ist er schwer?',
          options: [
            { text: 'Nein, er ist leicht', correct: true },
            { text: 'Ja, wie ein Stein', correct: false }
          ]
        },
        {
          question: 'Was frisst ein Tukan am liebsten?',
          options: [
            { text: 'Früchte', correct: true, image: 'fruit' },
            { text: 'Gras', correct: false, image: 'grass' },
            { text: 'Steine', correct: false, image: 'stone' }
          ]
        }
      ],
      praise: { character: 'lotti', text: 'Richtig! Du bist ja so schlau wie ich.' }
    },
    // Doppelseite 7 - Fips findet Rudi
    {
      type: 'story',
      spread: 7,
      left: {
        text: 'Fips, der Kolibri, saust nach oben. Er kann sogar rückwärts fliegen.',
        image: 'images/band1/s07-left.webp'
      },
      right: {
        text: 'Oben sitzt Rudi mit dem Rucksack. "Hihi!" Er klettert auf einen Ast über dem Fluss.',
        image: 'images/band1/s07-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'memory',
      title: 'Memory',
      instruction: 'Finde die Paare! Tippe immer auf zwei Karten.',
      pairs: ['bruno', 'lotti', 'paula', 'tuko', 'momo', 'fips'],
      cardBack: 'portal',
      praise: { character: 'bruno', text: 'Super gemerkt! Du hast alle Paare gefunden.' }
    },
    // Doppelseite 8 - Der Ast bricht
    {
      type: 'story',
      spread: 8,
      left: {
        text: 'Krach! Der Ast bricht. Rudi und der Rucksack fallen in den Fluss.',
        image: 'images/band1/s08-left.webp'
      },
      right: {
        text: 'Der Fluss ist schnell. "Hilfe!", ruft Rudi. Bruno springt sofort ins Wasser.',
        image: 'images/band1/s08-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'coloring',
      title: 'Ausmalbild',
      instruction: 'Male das Bild bunt aus! Tippe auf eine Farbe und dann auf das Bild.',
      image: 'images/band1/p08-coloring.webp',
      colors: [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA15E', '#BC6C25', '#8B4513', '#228B22', '#FFB6C1'
      ],
      hotspots: [
        { id: 'bruno', name: 'Bruno', x: 40, y: 45, radius: 12 },
        { id: 'fips', name: 'Fips', x: 70, y: 25, radius: 8 },
        { id: 'lily1', name: 'Seerose 1', x: 25, y: 65, radius: 8 },
        { id: 'lily2', name: 'Seerose 2', x: 60, y: 70, radius: 8 },
        { id: 'fish1', name: 'Fisch 1', x: 50, y: 55, radius: 6 },
        { id: 'fish2', name: 'Fisch 2', x: 15, y: 50, radius: 5 },
        { id: 'reeds', name: 'Schilf', x: 90, y: 60, radius: 10 }
      ],
      praise: { character: 'bruno', text: 'Wow, so schöne Farben!' }
    },
    // Doppelseite 9 - Die Rettung
    {
      type: 'story',
      spread: 9,
      left: {
        text: 'Lotti taucht nach dem Rucksack. Sie hat Kiemen. Sie kann unter Wasser atmen.',
        image: 'images/band1/s09-left.webp'
      },
      right: {
        text: 'Lotti greift in den Rucksack. Heraus kommt ein Seil! Bruno zieht Rudi an Land.',
        image: 'images/band1/s09-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'word-image',
      title: 'Leserätsel',
      instruction: 'Lies das Wort. Tippe auf das passende Bild.',
      rounds: [
        { word: 'SEIL', options: ['seil', 'eis', 'seife'] },
        { word: 'AST', options: ['ast', 'hase', 'nest'] },
        { word: 'MANGO', options: ['mango', 'mond', 'mantel'] },
        { word: 'BAND', options: ['band', 'hand', 'bank'] }
      ],
      praise: { character: 'lotti', text: 'Klasse gelesen! Du bist eine echte Leserin.' }
    },
    // Doppelseite 10 - Freunde und ein Geheimnis
    {
      type: 'story',
      spread: 10,
      left: {
        text: '"Tut mir leid", sagt Rudi. Er gibt alles zurück. Jetzt sind alle Freunde.',
        image: 'images/band1/s10-left.webp'
      },
      right: {
        text: 'Am Portal leuchtet ein Stein. Darauf sind ein Axolotl und ein Capybara. Wer hat das gemacht?',
        image: 'images/band1/s10-right.webp'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Tier-Steckbrief: Axolotl',
      instruction: 'Das ist Lotti. Tippe auf die Karten und lerne sie kennen!',
      character: 'lotti',
      cards: [
        'Ich lebe nur in Mexiko, in Seen bei Mexiko-Stadt.',
        'Meine Kiemen sind außen am Kopf. Damit atme ich unter Wasser.',
        'Wenn ich ein Bein verliere, wächst es wieder nach.',
        'Die meisten Axolotl sind dunkel. Rosa Axolotl wie ich sind selten.',
        'Ich fresse Würmer und kleine Krebse.',
        'Es gibt nur noch wenige Axolotl in der Natur. Wir müssen sie schützen.'
      ],
      quiz: {
        question: 'Wo lebt Lotti?',
        options: [
          { text: 'In Mexiko', correct: true },
          { text: 'In Deutschland', correct: false },
          { text: 'Am Nordpol', correct: false }
        ]
      },
      praise: { character: 'lotti', text: 'Jetzt bist du eine Axolotl-Expertin!' }
    }
  ]
};
