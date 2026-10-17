export const band2 = {
  id: 'band2',
  title: 'Bruno kommt zu Besuch',
  series: 'Das Glitzer-Portal',
  coverColor: '#E07A3D',
  coverImage: 'images/band2/s01.webp',

  pages: [
    {
      type: 'cover',
      title: 'Bruno kommt zu Besuch',
      series: 'Das Glitzer-Portal',
      subtitle: 'Band 2'
    },

    // Doppelseite 1
    {
      type: 'story',
      spread: 1,
      spreadImage: 'images/band2/s01.webp',
      left: {
        text: 'Das ist Bruno, das Capybara. Er lebt am Fluss im Regenwald in Südamerika. Heute kaut er auf einem Grashalm und schaut aufs Wasser. Die Lianen hängen still. Vögel rufen leise. „Ich vermisse Lotti“, sagt Bruno. Sein rotes Halstuch mit den weißen Punkten weht im Wind.'
      },
      right: {
        text: 'Am Portal glitzert der Stein. Darauf sind ein Axolotl und ein Capybara. Bruno stellt sich daneben. Der Stein leuchtet hell türkis. „Vielleicht … besuche ich sie?“, denkt Bruno. Sein Herz klopft. Er nimmt einen tiefen Atemzug und nickt entschlossen.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'search',
      title: 'Suchbild',
      instruction: 'Brunos Sachen sind versteckt. Finde alle 5!',
      image: 'images/band2/p01-suchbild.webp',
      hotspots: [
        { id: 'halstuch', name: 'Halstuch', x: 84, y: 78, r: 5.5 },
        { id: 'grashalm', name: 'Grashalm', x: 14, y: 88, r: 5 },
        { id: 'banane', name: 'Banane', x: 58, y: 84, r: 5 },
        { id: 'muschel', name: 'Muschel', x: 36, y: 90, r: 4.5 },
        { id: 'glitzerstern', name: 'Glitzerstern', x: 54, y: 34, r: 4.5 }
      ],
      bonus: { text: 'Wer winkt da?', x: 71, y: 36, r: 5 },
      comprehension: [
        { question: 'Wen vermisst Bruno?', options: ['Lotti', 'Momo', 'einen Fisch'], correct: 0 },
        { question: 'Was leuchtet am Portal?', options: ['Ein Stein', 'Eine Lampe', 'Die Sonne'], correct: 0 }
      ],
      praise: { character: 'bruno', text: 'Super! Du hast ja Adleraugen.' }
    },

    // Doppelseite 2
    {
      type: 'story',
      spread: 2,
      spreadImage: 'images/band2/s02.webp',
      left: {
        text: 'Paula kommt angerannt. Ihre gelben Gummistiefel platschen. „Ich weiß einen Weg!“, ruft sie. Dann sieht sie Brunos Entschluss. „Du gehst zu Lotti?“ Bruno nickt. Tuko klappert mit dem Schnabel. Momo winkt ganz langsam. Fips schwirrt aufgeregt. „Keine Angst“, sagt Bruno. „Ich bin ja da!“'
      },
      right: {
        text: 'Bruno holt tief Luft. Platsch! Er springt in den Strudel. Wusch! Alles dreht sich. Wasser, Glitzer und Blasen wirbeln herum. Oben ist unten, und unten ist oben. Dann wird es hell und warm. Bruno hält den Atem an und schwimmt nach oben.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wohin will Bruno?',
          options: [
            { text: 'Zu Lotti nach Mexiko', correct: true },
            { text: 'Schlafen', correct: false },
            { text: 'Zum großen Baum', correct: false }
          ]
        },
        {
          question: 'Wer sagt: „Ich weiß einen Weg!“?',
          options: [
            { text: 'Paula', correct: true },
            { text: 'Rudi', correct: false },
            { text: 'Momo', correct: false }
          ]
        },
        {
          question: 'Was macht Bruno am Ende?',
          options: [
            { text: 'Er springt ins Portal', correct: true },
            { text: 'Er isst Gras', correct: false },
            { text: 'Er fliegt', correct: false }
          ]
        }
      ],
      praise: { character: 'bruno', text: 'Richtig! Du hast gut zugehört.' }
    },

    // Doppelseite 3
    {
      type: 'story',
      spread: 3,
      spreadImage: 'images/band2/s03.webp',
      left: {
        text: 'Bruno taucht auf. Das Wasser ist klar und warm. Rundherum fahren bunte Boote mit bemalten Bögen. Das sind Trajineras. Dazwischen schwimmen kleine Gärten mit Blumen und Gemüse. „Wo bin ich?“, staunt Bruno. Seine winzigen Ohren zucken. Alles riecht nach Blüten.'
      },
      right: {
        text: 'Die Sonne glitzert auf den Kanälen. Ein Boot fährt vorbei, und die Leute winken freundlich. Bruno lächelt breit. „Das muss Blumenstadt sein! Lottis Stadt am See!“ Er schwimmt an den Rand und schaut sich um. Irgendwo hier wohnt Lotti.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'initial-sounds',
      title: 'Anlaut K',
      instruction: 'K wie Kanal! Tippe alle Bilder, die mit K anfangen.',
      targetLetter: 'K',
      items: [
        { id: 'kanal', word: 'Kanal', image: 'images/band2/p03-anlaut-kanal.webp', correct: true },
        { id: 'kanu', word: 'Kanu', image: 'images/band2/p03-anlaut-kanu.webp', correct: true },
        { id: 'korb', word: 'Korb', image: 'images/band2/p03-anlaut-korb.webp', correct: true },
        { id: 'krokodil', word: 'Krokodil', image: 'images/band2/p03-anlaut-krokodil.webp', correct: true },
        { id: 'boot', word: 'Boot', image: 'images/band2/p03-anlaut-boot.webp', correct: false },
        { id: 'blume', word: 'Blume', image: 'images/band2/p03-anlaut-blume.webp', correct: false },
        { id: 'sonne', word: 'Sonne', image: 'images/band2/p03-anlaut-sonne.webp', correct: false },
        { id: 'fisch', word: 'Fisch', image: 'images/band2/p03-anlaut-fisch.webp', correct: false }
      ],
      comprehension: [
        { question: 'Wo ist Bruno jetzt?', options: ['In Mexiko', 'Im Schnee', 'Im Weltall'], correct: 0 },
        { question: 'Wie heißen die bunten Boote?', options: ['Trajineras', 'U-Boote', 'Flugzeuge'], correct: 0 }
      ],
      praise: { character: 'lotti', text: 'Bravo! Du hörst ganz genau hin.' }
    },

    // Doppelseite 4
    {
      type: 'story',
      spread: 4,
      spreadImage: 'images/band2/s04.webp',
      left: {
        text: 'Da kommt Lotti angerannt. Ihre pinken Kiemen wackeln vor Freude. Die gelbe Tüftel-Brille sitzt schief auf der Stirn. „Bruno! Du bist wirklich da!“ Sie umarmen sich fest. „Besuchst du mich bald?“, hatte Bruno gefragt. Und jetzt ist er wirklich da!'
      },
      right: {
        text: 'Aus dem Schilf huscht Rudi. „Hihi! Schau mal, wer da ist!“ Rudi ist frech, aber er freut sich auch. Er schwenkt den goldenen Löffel. „Willkommen in Blumenstadt!“, piepst er. Alle drei lachen. Die Kiemen von Lotti wackeln vor Glück.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wen trifft Bruno zuerst?',
          options: [
            { text: 'Lotti', correct: true },
            { text: 'Paula', correct: false },
            { text: 'Momo', correct: false }
          ]
        },
        {
          question: 'Wer kommt aus dem Schilf?',
          options: [
            { text: 'Rudi', correct: true },
            { text: 'Tuko', correct: false },
            { text: 'Fips', correct: false }
          ]
        },
        {
          question: 'Wie fühlen sich die Freunde?',
          options: [
            { text: 'Glücklich', correct: true },
            { text: 'Wütend', correct: false },
            { text: 'Traurig', correct: false }
          ]
        }
      ],
      praise: { character: 'lotti', text: 'Richtig! Du bist ja so schlau wie ich.' }
    },

    // Doppelseite 5
    {
      type: 'story',
      spread: 5,
      spreadImage: 'images/band2/s05.webp',
      left: {
        text: '„Komm!“, ruft Lotti. „Ich zeige dir alles!“ Sie klettern in eine Trajinera. Das Boot ist bunt bemalt. Es hat einen großen Bogen mit Blumen. Bruno setzt sich vorsichtig. Das Boot wackelt. „Keine Angst, ich bin ja da!“, sagt er und kichert über sich selbst.'
      },
      right: {
        text: 'Lotti stakt mit einer langen Stange. Das Boot gleitet über den Kanal. Vorbei an Blumen, vorbei an anderen Booten. Rudi sitzt vorn und spritzt mit dem Löffel. „Hihi!“ Wasser tropft von Brunos Halstuch. Alle sind nass. Alle lachen laut.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'differences',
      title: 'Fehlerbild',
      instruction: 'Die zwei Bilder sind fast gleich. Finde 5 Fehler!',
      imageLeft: 'images/band2/p05-fehlerbild-a.webp',
      imageRight: 'images/band2/p05-fehlerbild-b.webp',
      hotspots: [
        { id: 'halstuch', name: 'Halstuch fehlt', x: 45, y: 49, r: 6 },
        { id: 'blume', name: 'Blume andere Farbe', x: 48, y: 16, r: 5.5 },
        { id: 'loeffel', name: 'Löffel silbern', x: 72, y: 40, r: 5.5 },
        { id: 'fisch', name: 'Fisch fehlt', x: 82, y: 84, r: 6 },
        { id: 'brille', name: 'Brille andere Farbe', x: 27, y: 36, r: 5.5 }
      ],
      comprehension: [
        { question: 'Womit fahren die Freunde?', options: ['Mit einer Trajinera', 'Mit dem Auto', 'Mit dem Zug'], correct: 0 },
        { question: 'Wer stakt das Boot?', options: ['Lotti', 'Bruno', 'Rudi'], correct: 0 }
      ],
      praise: { character: 'lotti', text: 'Toll gemacht! Du bist ein Fehler-Profi.' }
    },

    // Doppelseite 6
    {
      type: 'story',
      spread: 6,
      spreadImage: 'images/band2/s06.webp',
      left: {
        text: '„Schau!“, sagt Lotti. „Das sind Chinampas. Schwimmende Gärten!“ Auf dem Wasser schwimmen Inseln aus Erde und Pflanzen. Dort wachsen Blumen, Mais und Gemüse. Bruno riecht an einer großen rosa Blüte. „Mmm, das duftet lecker!“'
      },
      right: {
        text: 'Ein Gärtner winkt vom Ufer. Lotti erklärt stolz: „Hier leben die Leute von den Gärten. Und Axolotl wie ich brauchen das klare Wasser.“ Bruno nickt ernst. „Dann müssen wir die Gärten schützen.“ Lotti lächelt. „Genau!“'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Steckbrief: Schwimmende Gärten',
      instruction: 'Tippe auf die Karten und lerne die Gärten kennen!',
      character: 'lotti',
      image: 'images/band2/p06-steckbrief-chinampa.webp',
      facts: [
        'Chinampas sind Gärten auf dem Wasser.',
        'Sie liegen in Blumenstadt in Mexiko.',
        'Darauf wachsen Blumen, Mais und Gemüse.',
        'Die Erde liegt auf Flößen aus Pflanzen.',
        'Axolotl brauchen das klare Wasser der Kanäle.',
        'Die Gärten sind sehr alt und wichtig.'
      ],
      quiz: {
        question: 'Was wächst auf Chinampas?',
        options: ['Blumen und Gemüse', 'Schuhe', 'Steine'],
        correct: 0
      },
      comprehension: [
        { question: 'Wie heißen die schwimmenden Gärten?', options: ['Chinampas', 'Trajineras', 'Portale'], correct: 0 },
        { question: 'Warum sind die Kanäle wichtig für Lotti?', options: ['Wegen des klaren Wassers', 'Wegen der Eiscreme', 'Wegen der Autos'], correct: 0 }
      ],
      praise: { character: 'lotti', text: 'Jetzt kennst du meine Heimat richtig gut!' }
    },

    // Doppelseite 7
    {
      type: 'story',
      spread: 7,
      spreadImage: 'images/band2/s07.webp',
      left: {
        text: 'Rudi will helfen. „Ich hole Blumen für die Fiesta!“, ruft er. Er huscht auf eine Chinampa. Schnapp! Er nimmt einen ganzen Arm voll bunter Blumen. Und Lottis kleinen Schraubenschlüssel dazu. „Hihi, das gehört jetzt mir!“'
      },
      right: {
        text: '„Rudi!“, ruft Lotti. „Bring das sofort zurück!“ Doch Rudi springt schon in ein kleines Boot. Er paddelt davon. Die Blumen flattern im Wind. Der Schraubenschlüssel glänzt. Bruno seufzt und schüttelt den Kopf. „Nicht schon wieder!“'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Was nimmt Rudi mit?',
          options: [
            { text: 'Blumen und einen Schraubenschlüssel', correct: true },
            { text: 'Eine Banane', correct: false },
            { text: 'Ein Auto', correct: false }
          ]
        },
        {
          question: 'Warum nimmt Rudi die Blumen? (sagt er)',
          options: [
            { text: 'Für die Fiesta', correct: true },
            { text: 'Zum Kochen', correct: false },
            { text: 'Zum Fliegen', correct: false }
          ]
        },
        {
          question: 'Was macht Rudi danach?',
          options: [
            { text: 'Er paddelt davon', correct: true },
            { text: 'Er schläft', correct: false },
            { text: 'Er putzt', correct: false }
          ]
        }
      ],
      praise: { character: 'bruno', text: 'Richtig! Du passt gut auf.' }
    },

    // Doppelseite 8
    {
      type: 'story',
      spread: 8,
      spreadImage: 'images/band2/s08.webp',
      left: {
        text: 'Lotti und Bruno springen in die Trajinera. „Nach ihm!“, ruft Lotti. Das Boot gleitet schnell über das Wasser. Links ein Kanal, rechts ein Kanal. Rudi knickt ab und kichert. „Hihi! Fangt mich doch!“ Wasser spritzt hoch.'
      },
      right: {
        text: 'Bruno stakt jetzt mit. Er ist stark. Das Boot schaukelt. Vorbei an bunten Bögen, vorbei an Gärten. Rudi ist immer einen Kanal voraus. „Er ist so flink!“, keucht Lotti. Ihre Brille rutscht schief. Bruno paddelt noch schneller.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'maze',
      title: 'Labyrinth',
      instruction: 'Hilf Lotti und Bruno, Rudi zu finden! Fahre den Weg mit dem Finger nach.',
      image: 'images/band2/p08-labyrinth.webp',
      start: { x: 22, y: 74, r: 6 },
      goal: { x: 82, y: 28, r: 6 },
      meadow: { cx: 50, cy: 48, rx: 38, ry: 36 },
      pathStart: { x: 28, y: 68 },
      pathGoal: { x: 76, y: 30 },
      comprehension: [
        { question: 'Wen jagen Lotti und Bruno?', options: ['Rudi', 'Paula', 'Einen Hai'], correct: 0 },
        { question: 'Womit fahren sie hinterher?', options: ['Mit der Trajinera', 'Mit dem Fahrrad', 'Zu Fuß'], correct: 0 }
      ],
      praise: { character: 'bruno', text: 'Geschafft! Du kennst den Weg.' }
    },

    // Doppelseite 9
    {
      type: 'story',
      spread: 9,
      spreadImage: 'images/band2/s09.webp',
      left: {
        text: 'Plötzlich ist Rudis Boot weg. Die Kanäle sehen alle gleich aus. Links Blumen, rechts Blumen. „Wo sind wir?“, fragt Bruno. Lotti schaut sich um und kneift die Augen zusammen. „Huch. Ich kenne diesen Weg nicht.“'
      },
      right: {
        text: 'Es wird ein bisschen still. Ein Vogel ruft. Das Boot treibt langsam. Rudi ruft von irgendwo her: „Hallo? Ich … ich finde den Weg auch nicht!“ Seine Stimme klingt klein und leise. Gar nicht frech.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Was ist passiert?',
          options: [
            { text: 'Alle sind verirrt', correct: true },
            { text: 'Es schneit', correct: false },
            { text: 'Das Boot fliegt', correct: false }
          ]
        },
        {
          question: 'Wie fühlt sich Rudi jetzt?',
          options: [
            { text: 'Ein bisschen Angst', correct: true },
            { text: 'Sehr frech', correct: false },
            { text: 'Müde vom Tanzen', correct: false }
          ]
        },
        {
          question: 'Sehen die Kanäle gleich aus?',
          options: [
            { text: 'Ja', correct: true },
            { text: 'Nein, sie sind gestreift', correct: false },
            { text: 'Es gibt keine Kanäle', correct: false }
          ]
        }
      ],
      praise: { character: 'lotti', text: 'Super mitgedacht!' }
    },

    // Doppelseite 10
    {
      type: 'story',
      spread: 10,
      spreadImage: 'images/band2/s10.webp',
      left: {
        text: 'Lotti greift in den türkisen Rucksack. „Moment, ich hab da was!“ Heraus kommt eine kleine Boje mit einer Glocke. Und ein Kompass, den sie selbst gebaut hat. Die Nadel zittert und zeigt zum Portal. „Perfekt!“'
      },
      right: {
        text: '„Der Kompass zeigt nach Hause – zum Portal!“, erklärt Lotti. Bruno lächelt. „Keine Angst, ich bin ja da!“ Sie rufen laut zu Rudi: „Folge dem Glöckchen!“ Klingeling! Die Boje schwimmt voraus und leuchtet ein bisschen.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'memory',
      title: 'Memory',
      instruction: 'Finde die Paare! Tippe immer auf zwei Karten.',
      pairs: [
        { id: 'bruno', name: 'Bruno', image: 'images/band2/p10-memory-bruno.webp' },
        { id: 'lotti', name: 'Lotti', image: 'images/band2/p10-memory-lotti.webp' },
        { id: 'rudi', name: 'Rudi', image: 'images/band2/p10-memory-rudi.webp' },
        { id: 'trajinera', name: 'Trajinera', image: 'images/band2/p10-memory-trajinera.webp' },
        { id: 'portal', name: 'Portal', image: 'images/band2/p10-memory-portal.webp' },
        { id: 'chinampa', name: 'Chinampa', image: 'images/band2/p10-memory-chinampa.webp' }
      ],
      cardBack: 'images/band2/p10-memory-rueckseite.webp',
      comprehension: [
        { question: 'Was holt Lotti aus dem Rucksack?', options: ['Boje und Kompass', 'Eine Pizza', 'Einen Drachen'], correct: 0 },
        { question: 'Wohin zeigt der Kompass?', options: ['Zum Portal', 'Zum Mond', 'Zum Zoo'], correct: 0 }
      ],
      praise: { character: 'bruno', text: 'Super gemerkt!' }
    },

    // Doppelseite 11
    {
      type: 'story',
      spread: 11,
      spreadImage: 'images/band2/s11.webp',
      left: {
        text: 'Klingeling! Die Boje führt sie durch die Kanäle. Rudi paddelt hinterher. Plötzlich erkennen sie die große Trajinera mit dem Blumenbogen. „Wir sind da!“, jubelt Lotti. Am Ufer warten schon bunte Lichter – die Fiesta beginnt.'
      },
      right: {
        text: 'Rudi steigt aus. Seine Ohren hängen. „Tut mir leid“, sagt er leise. Er gibt die Blumen zurück. Und den Schraubenschlüssel. „Ich wollte nur helfen. Und ein bisschen Spaß.“ Alle lachen. Bruno legt ihm freundlich die Pfote auf die Schulter.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'word-image',
      title: 'Wort zu Bild',
      instruction: 'Lies das Wort. Tippe auf das passende Bild.',
      rounds: [
        {
          word: 'BOJE',
          options: [
            { id: 'boje', name: 'Boje', image: 'images/band2/p11-wort-boje.webp', correct: true },
            { id: 'bohne', name: 'Bohne', image: 'images/band2/p11-wort-bohne.webp', correct: false },
            { id: 'boot', name: 'Boot', image: 'images/band2/p11-wort-boot.webp', correct: false }
          ]
        },
        {
          word: 'BLUME',
          options: [
            { id: 'blume', name: 'Blume', image: 'images/band2/p11-wort-blume.webp', correct: true },
            { id: 'blitz', name: 'Blitz', image: 'images/band2/p11-wort-blitz.webp', correct: false },
            { id: 'ball', name: 'Ball', image: 'images/band2/p11-wort-ball.webp', correct: false }
          ]
        },
        {
          word: 'SCHLÜSSEL',
          options: [
            { id: 'schluessel', name: 'Schlüssel', image: 'images/band2/p11-wort-schluessel.webp', correct: true },
            { id: 'schuh', name: 'Schuh', image: 'images/band2/p11-wort-schuh.webp', correct: false },
            { id: 'schnee', name: 'Schnee', image: 'images/band2/p11-wort-schnee.webp', correct: false }
          ]
        },
        {
          word: 'KANAL',
          options: [
            { id: 'kanal', name: 'Kanal', image: 'images/band2/p11-wort-kanal.webp', correct: true },
            { id: 'kuchen', name: 'Kuchen', image: 'images/band2/p11-wort-kuchen.webp', correct: false },
            { id: 'katze', name: 'Katze', image: 'images/band2/p11-wort-katze.webp', correct: false }
          ]
        }
      ],
      comprehension: [
        { question: 'Was gibt Rudi zurück?', options: ['Blumen und Schraubenschlüssel', 'Nichts', 'Einen Stein'], correct: 0 },
        { question: 'Sind sie wieder Freunde?', options: ['Ja', 'Nein', 'Nur am Dienstag'], correct: 0 }
      ],
      praise: { character: 'lotti', text: 'Klasse gelesen!' }
    },

    // Doppelseite 12
    {
      type: 'story',
      spread: 12,
      spreadImage: 'images/band2/s12.webp',
      left: {
        text: 'Am Abend ist Fiesta. Musik spielt laut und fröhlich. Bunte Lichter hängen über dem Wasser. Die Blumen von Rudi schmücken den Tisch – diesmal mit Erlaubnis. Bruno tanzt langsam im Takt. Lotti wackelt mit den Kiemen.'
      },
      right: {
        text: 'Rudi wäscht vorsichtig eine Tasse im Kanal. „Ich wasche eben alles“, sagt er. Alle kichern. Ein Boot fährt vorbei, und die Leute singen. Bruno denkt warm: Zu Hause ist dort, wo Freunde sind.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'coloring',
      title: 'Ausmalbild',
      instruction: 'Male das Bild bunt aus! Tippe auf eine Farbe und dann auf das Bild.',
      image: 'images/band2/p12-ausmalbild.webp',
      colors: [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#96CEB4',
        '#FFEAA7',
        '#DDA15E',
        '#BC6C25',
        '#E07A3D',
        '#228B22',
        '#FFB6C1'
      ],
      comprehension: [
        { question: 'Was feiern die Freunde?', options: ['Eine Fiesta', 'Weihnachten', 'Ein Fußballspiel'], correct: 0 },
        { question: 'Wann ist die Fiesta?', options: ['Am Abend', 'Am Morgen', 'Im Winter'], correct: 0 }
      ],
      praise: { character: 'bruno', text: 'Wow, so schöne Farben!' }
    },

    // Doppelseite 13
    {
      type: 'story',
      spread: 13,
      spreadImage: 'images/band2/s13.webp',
      left: {
        text: 'Nach der Fiesta gehen sie zum Portal. Das Wasser glitzert im Mondlicht. Der erste Stein leuchtet noch immer: Axolotl und Capybara. Bruno und Lotti stellen sich daneben. Es ist still und magisch. Rudi hält den Atem an.'
      },
      right: {
        text: 'Da leuchtet ein zweiter Stein auf! Darauf ist ein altes Bild: Wellen, zwei Freunde Hand in Hand, und ein Ring aus Licht. „Noch ein Stein!“, flüstert Lotti. Rudi macht große Augen. „Was bedeutet das?“'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wie viele Steine leuchten jetzt?',
          options: [
            { text: 'Zwei', correct: true },
            { text: 'Einer', correct: false },
            { text: 'Zehn', correct: false }
          ]
        },
        {
          question: 'Was ist auf dem zweiten Stein?',
          options: [
            { text: 'Wellen und Freunde', correct: true },
            { text: 'Eine Pizza', correct: false },
            { text: 'Ein Auto', correct: false }
          ]
        },
        {
          question: 'Wann gehen sie zum Portal?',
          options: [
            { text: 'Nach der Fiesta', correct: true },
            { text: 'Vor dem Frühstück', correct: false },
            { text: 'Nie', correct: false }
          ]
        }
      ],
      praise: { character: 'lotti', text: 'Richtig! Du bist ein Portal-Profi.' }
    },

    // Doppelseite 14
    {
      type: 'story',
      spread: 14,
      spreadImage: 'images/band2/s14.webp',
      left: {
        text: '„Wer hat das gemacht?“, fragt Bruno. Lotti tippt vorsichtig an den Stein. Er ist warm. „Vielleicht … verbindet das Portal Freunde?“, sagt sie. Rudi nickt. „Oder es mag einfach Glitzer.“ Alle drei überlegen und schauen sich an.'
      },
      right: {
        text: 'Sie wissen es noch nicht. Aber sie spüren: Die Steine gehören zusammen. Wie ein Puzzle. „Wir finden es heraus“, sagt Bruno. „Keine Angst. Ich bin ja da!“ – und Lotti ergänzt lachend: „Wir sind ja da!“'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Tier-Steckbrief: Axolotl',
      instruction: 'Das ist Lotti. Tippe auf die Karten und lerne sie kennen!',
      character: 'lotti',
      image: 'images/band2/p14-steckbrief-axolotl.webp',
      facts: [
        'Ich lebe nur in Mexiko, in Seen bei Mexiko-Stadt.',
        'Meine Kiemen sind außen am Kopf. Damit atme ich unter Wasser.',
        'Wenn ich ein Bein verliere, wächst es wieder nach.',
        'Die meisten Axolotl sind dunkel. Rosa Axolotl wie ich sind selten.',
        'Ich fresse Würmer und kleine Krebse.',
        'Es gibt nur noch wenige Axolotl in der Natur. Wir müssen sie schützen.'
      ],
      quiz: {
        question: 'Womit atmet Lotti unter Wasser?',
        options: ['Mit den Kiemen', 'Mit einer Flasche', 'Mit dem Rucksack'],
        correct: 0
      },
      comprehension: [
        { question: 'Was vermutet Lotti über das Portal?', options: ['Es verbindet Freunde', 'Es macht Pizza', 'Es ist kaputt'], correct: 0 },
        { question: 'Wissen sie schon alles über die Steine?', options: ['Nein', 'Ja', 'Nur Rudi'], correct: 0 }
      ],
      praise: { character: 'lotti', text: 'Jetzt bist du eine Axolotl-Expertin!' }
    },

    // Doppelseite 15
    {
      type: 'story',
      spread: 15,
      spreadImage: 'images/band2/s15.webp',
      left: {
        text: 'Es ist Zeit. Bruno muss zurück. Lotti drückt ihm eine leuchtend pinke Blume in die Pfote. „Besuchst du mich bald wieder?“, fragt sie. „Na klar!“, sagt Bruno. Rudi winkt mit dem Löffel. „Bring nächstes Mal Gras mit!“'
      },
      right: {
        text: 'Sie umarmen sich fest. Dann stellt Bruno sich an den Strudel. „Tschüss, Blumenstadt! Tschüss, Lotti! Tschüss, Rudi!“ Platsch! Er springt hinein. Lotti und Rudi winken, bis nur noch Glitzer zu sehen ist.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Was schenkt Lotti Bruno?',
          options: [
            { text: 'Eine Blume', correct: true },
            { text: 'Einen Stein', correct: false },
            { text: 'Ein Boot', correct: false }
          ]
        },
        {
          question: 'Kommt Bruno wieder?',
          options: [
            { text: 'Ja, bald', correct: true },
            { text: 'Nie', correct: false },
            { text: 'Nur im Traum', correct: false }
          ]
        },
        {
          question: 'Was wünscht sich Rudi?',
          options: [
            { text: 'Gras von Bruno', correct: true },
            { text: 'Eine Rakete', correct: false },
            { text: 'Schnee', correct: false }
          ]
        }
      ],
      praise: { character: 'bruno', text: 'Richtig! Bis bald!' }
    },

    // Doppelseite 16
    {
      type: 'story',
      spread: 16,
      spreadImage: 'images/band2/s16.webp',
      left: {
        text: 'Wusch! Bruno taucht im Regenwald-Fluss auf. Paula, Tuko, Momo und Fips warten schon am Ufer. „Er ist zurück!“, jubelt Paula und springt in eine Pfütze. Bruno zeigt die Blume. „Lotti geht es gut. Und Rudi auch.“'
      },
      right: {
        text: 'Am Portal leuchten zwei Steine – auch hier. Die Freunde staunen. „Ein Rätsel für später“, sagt Bruno und lächelt. Er kaut auf einem Grashalm. Zu Hause ist schön. Und Freunde besuchen ist auch schön.'
      }
    },
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was hast du gelesen? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wen trifft Bruno zu Hause?',
          options: [
            { text: 'Paula und die Freunde', correct: true },
            { text: 'Niemanden', correct: false },
            { text: 'Rudi', correct: false }
          ]
        },
        {
          question: 'Wie viele Steine leuchten am Portal?',
          options: [
            { text: 'Zwei', correct: true },
            { text: 'Keiner', correct: false },
            { text: 'Hundert', correct: false }
          ]
        },
        {
          question: 'Ist die Geschichte vom Portal zu Ende?',
          options: [
            { text: 'Nein, es bleibt ein Rätsel', correct: true },
            { text: 'Ja, alles klar', correct: false },
            { text: 'Das Portal ist weg', correct: false }
          ]
        }
      ],
      praise: { character: 'bruno', text: 'Super! Du kennst die ganze Geschichte.' }
    }
  ]
};
