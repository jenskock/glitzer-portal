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
      spreadImage: 'images/band1/s01.webp',
      left: {
        text: "Das ist Lotti, das Axolotl. Sie lebt in einem See in Mexiko. Dort fahren bunte Boote mit bemalten Bögen. Dazwischen schwimmen kleine Gärten mit Blumen und Gemüse. Die Sonne glitzert auf dem Wasser, und es duftet nach Blüten. \\Guten Morgen!\", ruft Lotti einem Boot zu. Ihre pinken Kiemen wackeln vor Freude."
      },
      right: {
        text: "Lotti tüftelt gern. Heute baut sie eine kleine Wassermühle. Neben ihr liegt ihr türkiser Rucksack. Daraus kommt immer das richtige Ding. Lotti sagt nur: \\Moment, ich hab da was!\" Und schon greift sie hinein. Im Schilf raschelt es leise. Aber Lotti merkt nichts."
      }
    },
    
    // Überraschung 1 - Suchbild
    {
      type: 'puzzle',
      puzzleType: 'search',
      title: 'Suchbild',
      instruction: 'Lottis Tüftel-Sachen sind versteckt. Finde alle 5!',
      image: 'images/band1/p01-suchbild.webp',
      hotspots: [
        { id: 'schraubenschluessel-boot', name: 'Schraubenschlüssel', x: 8.6, y: 62.2, r: 3.8 },
        { id: 'zahnrad', name: 'Zahnrad', x: 60.5, y: 54.7, r: 3.2 },
        { id: 'gluehbirne', name: 'Glühbirne', x: 26.4, y: 35.6, r: 3.0 },
        { id: 'lupe', name: 'Lupe', x: 69.2, y: 77.5, r: 4.8 },
        { id: 'schraubenschluessel-schilf', name: 'Schraubenschlüssel', x: 85.5, y: 81.5, r: 7.0 }
      ],
      bonus: { text: "Wer schaut da aus dem Schilf?", x: 93.7, y: 60.7, r: 3.8 },
      praise: { character: 'lotti', text: "Super! Du hast ja Adleraugen." }
    },
    
    // Doppelseite 2 - Der Dieb
    {
      type: 'story',
      spread: 2,
      spreadImage: 'images/band1/s02.webp',
      left: {
        text: "Plötzlich glitzert es im Wasser. Ein Strudel dreht sich, erst langsam, dann immer schneller. Rundherum liegen alte Steine mit türkisen Punkten. \\Was ist das denn?\", flüstert Lotti. Sie staunt mit offenem Mund. Da kommt Rudi, der Waschbär, aus dem Schilf. Er hat eine schwarze Maske und einen geringelten Schwanz."
      },
      right: {
        text: "Er schnappt den Rucksack. \\Hihi, das gehört jetzt mir!\", kichert er. \\He, gib den sofort zurück!\", ruft Lotti. Doch Rudi grinst nur frech und nimmt Anlauf. Platsch! Rudi springt in den Strudel. Weg ist er, und der Rucksack auch. Nur ein paar Blasen steigen noch auf."
      }
    },
    
    // Überraschung 2 - Fehlerbild
    {
      type: 'puzzle',
      puzzleType: 'differences',
      title: 'Fehlerbild',
      instruction: 'Die zwei Bilder sind fast gleich. Finde 5 Fehler!',
      imageLeft: 'images/band1/p02-fehlerbild-a.webp',
      imageRight: 'images/band1/p02-fehlerbild-b.webp',
      hotspots: [
        { id: 'stern', name: 'Stern am Rucksack fehlt', x: 44.3, y: 66.7, r: 3.3 },
        { id: 'seerose', name: 'Seerose gelb statt pink', x: 89.6, y: 71.0, r: 8.6 },
        { id: 'brille', name: 'Lottis Brille rot statt gelb', x: 15.9, y: 63.3, r: 6.6 },
        { id: 'leuchtpunkt', name: 'Leuchtpunkt am Steinbogen fehlt', x: 65.1, y: 25.8, r: 3.9 },
        { id: 'nase', name: 'Rudis Nase rosa statt schwarz', x: 41.4, y: 44.9, r: 2.4 }
      ],
      praise: { character: 'lotti', text: "Toll gemacht! Du bist ein Fehler-Profi." }
    },
    
    // Doppelseite 3 - Durch das Portal
    {
      type: 'story',
      spread: 3,
      spreadImage: 'images/band1/s03.webp',
      left: {
        text: "Lotti schwimmt bis an den Rand des Strudels. Ihr Herz klopft ganz laut. Lotti hat ein bisschen Angst. Aber ohne ihren Rucksack will sie nicht nach Hause. \\Ich gebe nicht auf\", sagt sie leise. Sie holt tief Luft. Lotti ist mutig. Sie schwimmt in den Strudel."
      },
      right: {
        text: "Wusch! Alles dreht sich. Wasser, Glitzer und Blasen wirbeln herum. Oben ist unten, und unten ist oben. Dann taucht Lotti auf. Sie schwimmt in einem breiten, braunen Fluss. Riesige Bäume stehen am Ufer, und Lianen hängen bis ins Wasser. Es ist warm, und bunte Vögel rufen laut. Jetzt ist Lotti im Regenwald, in Südamerika."
      }
    },
    
    // Überraschung 3 - Anlaut B
    {
      type: 'puzzle',
      puzzleType: 'initial-sounds',
      title: 'Anlaut B',
      instruction: 'B wie Baum! Tippe alle Bilder, die mit B anfangen.',
      targetLetter: 'B',
      items: [
        { id: 'baum', word: 'Baum', image: 'images/band1/p03-anlaut-baum.webp', correct: true },
        { id: 'blume', word: 'Blume', image: 'images/band1/p03-anlaut-blume.webp', correct: true },
        { id: 'banane', word: 'Banane', image: 'images/band1/p03-anlaut-banane.webp', correct: true },
        { id: 'boot', word: 'Boot', image: 'images/band1/p03-anlaut-boot.webp', correct: true },
        { id: 'fisch', word: 'Fisch', image: 'images/band1/p03-anlaut-fisch.webp', correct: false },
        { id: 'sonne', word: 'Sonne', image: 'images/band1/p03-anlaut-sonne.webp', correct: false },
        { id: 'nest', word: 'Nest', image: 'images/band1/p03-anlaut-nest.webp', correct: false },
        { id: 'affe', word: 'Affe', image: 'images/band1/p03-anlaut-affe.webp', correct: false }
      ],
      praise: { character: 'lotti', text: "Bravo! Du hörst ganz genau hin." }
    },
    
    // Doppelseite 4 - Bruno
    {
      type: 'story',
      spread: 4,
      spreadImage: 'images/band1/s04.webp',
      left: {
        text: "Lotti schaut sich um. Da bewegt sich etwas. Im Fluss schwimmt ein Tier. Man sieht nur Augen, Ohren und Nase. \\Ist das etwa ein Krokodil?\", denkt Lotti. Sie macht sich ganz klein, und ihre Kiemen zittern. Blubb, blubb! Langsam taucht das Tier auf."
      },
      right: {
        text: "Es ist kein Krokodil. Das ist Bruno, das Capybara. Er trägt ein rotes Halstuch mit weißen Punkten. Seine Augen, Ohren und Nase sitzen oben am Kopf. So sieht er auch beim Schwimmen alles. Bruno lächelt freundlich. \\Keine Angst\", sagt er. \\Ich bin ja da!\" Lotti atmet auf."
      }
    },
    
    // Überraschung 4 - Steckbrief Capybara
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Tier-Steckbrief: Capybara',
      instruction: 'Das ist Bruno. Tippe auf die Karten und lerne ihn kennen!',
      character: 'bruno',
      image: 'images/band1/p04-steckbrief-capybara.webp',
      facts: [
        'Ich bin das größte Nagetier der Welt.',
        'Ich lebe in Südamerika.',
        'Ich habe Schwimmhäute an den Füßen.',
        'Ich kann bis zu fünf Minuten tauchen.',
        'Ich fresse Gras und Wasserpflanzen.',
        'Ich lebe gern mit vielen anderen zusammen.'
      ],
      quiz: {
        question: 'Was frisst Bruno?',
        options: ['Gras', 'Fisch', 'Kuchen'],
        correct: 0
      },
      praise: { character: 'bruno', text: "Jetzt kennst du mich richtig gut!" }
    },
    
    // Doppelseite 5 - Paula und Tuko
    {
      type: 'story',
      spread: 5,
      spreadImage: 'images/band1/s05.webp',
      left: {
        text: "Lotti erzählt von Rudi. Bruno hört zu und kaut dabei auf einem Grashalm. Da platscht es laut. Ein Mädchen springt mit gelben Gummistiefeln in eine Pfütze. Das ist Paula. Sie wohnt hier am Fluss. \\Der Waschbär hat auch mein Haarband geklaut!\", ruft sie. \\Kommt mit! Ich weiß einen Weg!\""
      },
      right: {
        text: `Oben fliegt Tuko, der Tukan. Sein bunter Schnabel ist riesig, aber ganz leicht. Tuko klappert aufgeregt damit. „Ich hab's gesehen!", ruft er. „Der Dieb hat meine Mango! Rudi ist beim großen Baum." Mit dem Schnabel zeigt er auf einen Baum in der Ferne. Es ist der höchste im ganzen Wald.`
      }
    },
    
    // Überraschung 5 - Labyrinth
    {
      type: 'puzzle',
      puzzleType: 'maze',
      title: 'Labyrinth',
      instruction: 'Hilf Bruno, Lotti und Paula zum großen Baum! Fahre den Weg mit dem Finger nach.',
      image: 'images/band1/p05-labyrinth.webp',
      start: { x: 24.4, y: 71.0, r: 6.0 },
      goal: { x: 84.0, y: 38.0, r: 6.0 },
      meadow: { cx: 48.8, cy: 46.0, rx: 37.0, ry: 37.0 },
      pathStart: { x: 31.0, y: 64.0 },
      pathGoal: { x: 76.0, y: 36.0 },
      praise: { character: 'bruno', text: "Geschafft! Du kennst den Weg." }
    },
    
    // Doppelseite 6 - Momo
    {
      type: 'story',
      spread: 6,
      spreadImage: 'images/band1/s06.webp',
      left: {
        text: "Der Weg führt über einen Bach mit runden Trittsteinen. Paula hüpft voran, von Stein zu Stein. Doch dann rutscht Paula auf einem Stein aus. \\Hilfe!\", ruft sie. Bruno fängt sie auf. Bruno ist stark. \\Danke, Bruno!\", sagt Paula. \\Das war knapp!\" Dann lachen beide erleichtert."
      },
      right: {
        text: "Am Ast hängt Momo, das Faultier. Sie hängt kopfüber. Ihr Fell ist ein bisschen grün, weil darin winzige Pflanzen wachsen. \\Momo, hast du Rudi gesehen?\", fragt Paula. Momo spricht ganz langsam: \\Rudi … ist … oben.\" Dann fallen ihr die Augen zu. \\Chrrr\", schnarcht sie. Alle kichern. Im Schlaf zeigt Momo mit der Kralle nach oben."
      }
    },
    
    // Überraschung 6 - Quiz
    {
      type: 'puzzle',
      puzzleType: 'quiz',
      title: 'Quiz',
      instruction: 'Was weißt du über die Tiere? Tippe auf die richtige Antwort.',
      questions: [
        {
          question: 'Wie bewegt sich ein Faultier?',
          options: [
            { text: "ganz langsam", image: 'images/band1/p06-quiz-langsam.webp', correct: true },
            { text: "ganz schnell", image: 'images/band1/p06-quiz-schnell.webp', correct: false },
            { text: "es hüpft", image: 'images/band1/p06-quiz-huepft.webp', correct: false }
          ]
        },
        {
          question: 'Warum ist Momos Fell ein bisschen grün?',
          options: [
            { text: "Winzige Pflanzen wachsen darin", image: 'images/band1/p06-quiz-pflanzen.webp', correct: true },
            { text: "Sie hat sich angemalt", image: 'images/band1/p06-quiz-angemalt.webp', correct: false },
            { text: "Sie hat Gras gegessen", image: 'images/band1/p06-quiz-gras.webp', correct: false }
          ]
        },
        {
          question: 'Tukos Schnabel ist sehr groß. Ist er schwer?',
          options: [
            { text: "Nein, er ist leicht", image: 'images/band1/p06-quiz-leicht.webp', correct: true },
            { text: "Ja, wie ein Stein", image: 'images/band1/p06-quiz-stein.webp', correct: false }
          ]
        },
        {
          question: 'Was frisst ein Tukan am liebsten?',
          options: [
            { text: "Früchte", image: 'images/band1/p06-quiz-fruechte.webp', correct: true },
            { text: "Gras", image: 'images/band1/p06-quiz-gras.webp', correct: false },
            { text: "Steine", image: 'images/band1/p06-quiz-steine.webp', correct: false }
          ]
        }
      ],
      praise: { character: 'lotti', text: "Richtig! Du bist ja so schlau wie ich." }
    },
    
    // Doppelseite 7 - Fips findet Rudi
    {
      type: 'story',
      spread: 7,
      spreadImage: 'images/band1/s07.webp',
      left: {
        text: "Der große Baum ist so hoch, dass man die Spitze kaum sieht. Da summt es. Fips, der Kolibri, saust nach oben. Seine Flügel schlagen so schnell, dass man sie kaum sieht. Er kann sogar rückwärts fliegen. Schwupp, ist er wieder unten. \\Sssst – schon da!\", ruft Fips."
      },
      right: {
        text: "\\Ich hab ihn gefunden!\", piepst Fips. Oben sitzt Rudi mit dem Rucksack. Er hockt in einer Baumhöhle, mit Paulas Haarband und Tukos Mango. \\Hihi!\", kichert Rudi. \\Fangt mich doch!\" Er klettert auf einen Ast über dem Fluss. Der Ast ist lang und dünn. \\Rudi, komm zurück!\", ruft Bruno."
      }
    },
    
    // Überraschung 7 - Memory
    {
      type: 'puzzle',
      puzzleType: 'memory',
      title: 'Memory',
      instruction: 'Finde die Paare! Tippe immer auf zwei Karten.',
      pairs: [
        { id: 'bruno', name: 'Bruno', image: 'images/band1/p07-memory-bruno.webp' },
        { id: 'lotti', name: 'Lotti', image: 'images/band1/p07-memory-lotti.webp' },
        { id: 'paula', name: 'Paula', image: 'images/band1/p07-memory-paula.webp' },
        { id: 'tuko', name: 'Tuko', image: 'images/band1/p07-memory-tuko.webp' },
        { id: 'momo', name: 'Momo', image: 'images/band1/p07-memory-momo.webp' },
        { id: 'fips', name: 'Fips', image: 'images/band1/p07-memory-fips.webp' }
      ],
      cardBack: 'images/band1/p07-memory-rueckseite.webp',
      praise: { character: 'bruno', text: "Super gemerkt! Du hast alle Paare gefunden." }
    },
    
    // Doppelseite 8 - Der Ast bricht
    {
      type: 'story',
      spread: 8,
      spreadImage: 'images/band1/s08.webp',
      left: {
        text: "Der Ast wackelt und biegt sich. Rudi hört auf zu kichern. Dann knackt es laut. Krach! Der Ast bricht. Tuko kreischt, und Fips flattert erschrocken. Rudi und der Rucksack fallen in den Fluss. Platsch! Der Rucksack geht sofort unter. Alle halten die Luft an."
      },
      right: {
        text: "Der Fluss ist schnell. Rudi klammert sich an ein Stück Holz. \\Hilfe!\", ruft Rudi. Jetzt ist er gar nicht mehr frech. Bruno überlegt keine Sekunde. \\Keine Angst, ich bin ja da!\", ruft er. Bruno springt sofort ins Wasser. Mit seinen Schwimmhäuten an den Füßen schwimmt er schnell zu Rudi."
      }
    },
    
    // Überraschung 8 - Ausmalbild
    {
      type: 'puzzle',
      puzzleType: 'coloring',
      title: 'Ausmalbild',
      instruction: 'Male das Bild bunt aus! Tippe auf eine Farbe und dann auf das Bild.',
      image: 'images/band1/p08-ausmalbild.webp',
      colors: [
        '#FF6B6B', // Rot
        '#4ECDC4', // Türkis
        '#45B7D1', // Hellblau
        '#96CEB4', // Grün
        '#FFEAA7', // Gelb
        '#DDA15E', // Braun
        '#BC6C25', // Dunkelbraun
        '#8B4513', // Sattbraun
        '#228B22', // Waldgrün
        '#FFB6C1'  // Rosa
      ],
      praise: { character: 'bruno', text: "Wow, so schöne Farben!" }
    },
    
    // Doppelseite 9 - Die Rettung
    {
      type: 'story',
      spread: 9,
      spreadImage: 'images/band1/s09.webp',
      left: {
        text: "Der Rucksack liegt unten auf dem Grund. Lotti taucht nach dem Rucksack. Unter Wasser ist es grün und still. Kleine Fische schauen neugierig zu. Lotti hat Kiemen. Sie sitzen außen an ihrem Kopf. Damit kann sie unter Wasser atmen. Ganz unten packt sie den Rucksack. \\Hab ich dich!\""
      },
      right: {
        text: "Lotti taucht wieder auf. Bruno hält Rudi fest, doch die Strömung ist stark. Lotti greift in den Rucksack. \\Moment, ich hab da was!\" Heraus kommt ein Seil! Lotti wirft es Bruno zu. Paula und Tuko ziehen am anderen Ende. \\Hau ruck!\", ruft Paula. Bruno zieht Rudi an Land. Geschafft!"
      }
    },
    
    // Überraschung 9 - Wort zu Bild
    {
      type: 'puzzle',
      puzzleType: 'word-image',
      title: 'Wort zu Bild',
      instruction: 'Lies das Wort. Tippe auf das passende Bild.',
      rounds: [
        {
          word: 'SEIL',
          options: [
            { id: 'seil', name: 'Seil', image: 'images/band1/p09-wort-seil.webp', correct: true },
            { id: 'eis', name: 'Eis', image: 'images/band1/p09-wort-eis.webp', correct: false },
            { id: 'seife', name: 'Seife', image: 'images/band1/p09-wort-seife.webp', correct: false }
          ]
        },
        {
          word: 'AST',
          options: [
            { id: 'ast', name: 'Ast', image: 'images/band1/p09-wort-ast.webp', correct: true },
            { id: 'hase', name: 'Hase', image: 'images/band1/p09-wort-hase.webp', correct: false },
            { id: 'nest', name: 'Nest', image: 'images/band1/p09-wort-nest.webp', correct: false }
          ]
        },
        {
          word: 'MANGO',
          options: [
            { id: 'mango', name: 'Mango', image: 'images/band1/p09-wort-mango.webp', correct: true },
            { id: 'mond', name: 'Mond', image: 'images/band1/p09-wort-mond.webp', correct: false },
            { id: 'mantel', name: 'Mantel', image: 'images/band1/p09-wort-mantel.webp', correct: false }
          ]
        },
        {
          word: 'BAND',
          options: [
            { id: 'band', name: 'Band', image: 'images/band1/p09-wort-band.webp', correct: true },
            { id: 'hand', name: 'Hand', image: 'images/band1/p09-wort-hand.webp', correct: false },
            { id: 'bank', name: 'Bank', image: 'images/band1/p09-wort-bank.webp', correct: false }
          ]
        }
      ],
      praise: { character: 'lotti', text: "Klasse gelesen! Du bist eine echte Leserin." }
    },
    
    // Doppelseite 10 - Freunde und ein Geheimnis
    {
      type: 'story',
      spread: 10,
      spreadImage: 'images/band1/s10.webp',
      left: {
        text: "Rudi sitzt tropfnass am Ufer. \\Tut mir leid\", sagt er leise. \\Ich wollte doch nur Spaß haben.\" Er gibt alles zurück. Das Haarband hat er vorher im Fluss gewaschen. \\Ich wasche eben alles\", sagt er verlegen. Alle lachen. Jetzt sind alle Freunde. Sogar Momo winkt, ganz langsam."
      },
      right: {
        text: "Am Abend gehen alle zum Portal. Lotti und Rudi wollen zurück nach Mexiko. \\Besuchst du mich bald?\", fragt Bruno. \\Na klar!\", sagt Lotti und stellt sich neben ihn. Da leuchtet am Portal ein Stein. Darauf sind ein Axolotl und ein Capybara. Alle staunen. Wer hat das gemacht?"
      }
    },
    
    // Überraschung 10 - Steckbrief Axolotl
    {
      type: 'puzzle',
      puzzleType: 'fact-cards',
      title: 'Tier-Steckbrief: Axolotl',
      instruction: 'Das ist Lotti. Tippe auf die Karten und lerne sie kennen!',
      character: 'lotti',
      image: 'images/band1/p10-steckbrief-axolotl.webp',
      facts: [
        'Ich lebe nur in Mexiko, in Seen bei Mexiko-Stadt.',
        'Meine Kiemen sind außen am Kopf. Damit atme ich unter Wasser.',
        'Wenn ich ein Bein verliere, wächst es wieder nach.',
        'Die meisten Axolotl sind dunkel. Rosa Axolotl wie ich sind selten.',
        'Ich fresse Würmer und kleine Krebse.',
        'Es gibt nur noch wenige Axolotl in der Natur. Wir müssen sie schützen.'
      ],
      quiz: {
        question: 'Wo lebt Lotti?',
        options: ['In Mexiko', 'In Deutschland', 'Am Nordpol'],
        correct: 0
      },
      praise: { character: 'lotti', text: "Jetzt bist du eine Axolotl-Expertin!" }
    }
  ]
};
