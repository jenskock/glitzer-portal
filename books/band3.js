export const band3 = {
  "id": "band3",
  "title": "Die Spur im Schilf",
  "series": "Das Glitzer-Portal",
  "coverColor": "#3E8B62",
  "coverImage": "images/band3/cover.webp",
  "pages": [
    {
      "type": "cover",
      "title": "Die Spur im Schilf",
      "series": "Das Glitzer-Portal",
      "subtitle": "Band 3",
      "image": "images/band3/cover.webp",
      "alt": "Bruno, Lotti, Rudi und Milo am Kanal in Blumenstadt"
    },
    {
      "type": "story",
      "spread": 1,
      "spreadImage": "images/band3/s01.webp",
      "left": {
        "text": "Bruno steht am Fluss und hält eine kleine Tasche. Darin liegt Gras für Rudi. „Du hast es versprochen“, sagt Paula und lacht. Neben ihnen glitzert das Portal. Zwei Steine leuchten im Ring. Bruno freut sich schon auf Lotti."
      },
      "right": {
        "text": "„Bis später!“, ruft er. Platsch! Der Strudel wirbelt ihn nach Mexiko. In Blumenstadt wartet Lotti am Ufer. Ihre Kiemen wackeln. Rudi schaut sofort in die Tasche. „Gras? Für mich?“ Er schnuppert daran. Dann müssen alle drei lachen."
      }
    },
    {
      "puzzleType": "search",
      "title": "Suchbild",
      "instruction": "Finde die fünf Sachen am Ufer!",
      "image": "images/band3/p01-suchbild.webp",
      "hotspots": [
        {
          "id": "tasche",
          "name": "Stofftasche",
          "x": 14,
          "y": 86,
          "r": 6
        },
        {
          "id": "grashalm",
          "name": "Grashalm",
          "x": 46,
          "y": 78,
          "r": 5
        },
        {
          "id": "muschel",
          "name": "Muschel",
          "x": 70,
          "y": 81,
          "r": 5
        },
        {
          "id": "blatt",
          "name": "Blatt",
          "x": 87,
          "y": 58,
          "r": 5
        },
        {
          "id": "bluete",
          "name": "Gelbe Blüte",
          "x": 94,
          "y": 75,
          "r": 5
        }
      ],
      "bonus": {
        "text": "Wer schaut aus dem Schilf?",
        "x": 10,
        "y": 43,
        "r": 6
      },
      "comprehension": [
        {
          "questionId": "b3-s1-c1",
          "question": "Was bringt Bruno mit?",
          "correctAnswerId": "gras",
          "options": [
            {
              "answerId": "kuchen",
              "text": "Kuchen"
            },
            {
              "answerId": "gras",
              "text": "Gras"
            },
            {
              "answerId": "fisch",
              "text": "Fisch"
            }
          ]
        },
        {
          "questionId": "b3-s1-c2",
          "question": "Wie viele Steine leuchten am Anfang?",
          "correctAnswerId": "zwei",
          "options": [
            {
              "answerId": "zwei",
              "text": "Zwei"
            },
            {
              "answerId": "drei",
              "text": "Drei"
            },
            {
              "answerId": "einer",
              "text": "Einer"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Gut gefunden!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 2,
      "spreadImage": "images/band3/s02.webp",
      "left": {
        "text": "Im Schilf raschelt es. Ein brauner Hund kommt hervor. Seine Brust ist weiß. Auch eine Vorderpfote ist weiß, wie ein kleiner Schuh. Er bleibt vor den Freunden stehen. Dann schaut er zu einem geschlossenen Gartentor. „Wuff!“, macht er leise."
      },
      "right": {
        "text": "Am blauen Halsband hängt eine runde Marke. „Milo“, liest Lotti. „Ist das dein Name?“ Der Hund wedelt kurz. Dann geht er wieder zum Tor. Er schaut zurück und wartet. „Ich glaube, er möchte uns etwas zeigen“, sagt Bruno."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s2-q1",
          "question": "Wie heißt der Hund?",
          "correctAnswerId": "milo",
          "options": [
            {
              "answerId": "rudi",
              "text": "Rudi"
            },
            {
              "answerId": "tuko",
              "text": "Tuko"
            },
            {
              "answerId": "milo",
              "text": "Milo"
            }
          ]
        },
        {
          "questionId": "b3-s2-q2",
          "question": "Welche Pfote fällt den Freunden auf?",
          "correctAnswerId": "weiss",
          "options": [
            {
              "answerId": "weiss",
              "text": "Eine weiße Vorderpfote"
            },
            {
              "answerId": "gruen",
              "text": "Eine grüne Hinterpfote"
            },
            {
              "answerId": "rot",
              "text": "Eine rote Vorderpfote"
            }
          ]
        },
        {
          "questionId": "b3-s2-q3",
          "question": "Wohin schaut Milo?",
          "correctAnswerId": "tor",
          "options": [
            {
              "answerId": "wolke",
              "text": "Zu einer Wolke"
            },
            {
              "answerId": "tor",
              "text": "Zum Gartentor"
            },
            {
              "answerId": "portal",
              "text": "Zum Portal"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Gut aufgepasst!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 3,
      "spreadImage": "images/band3/s03.webp",
      "left": {
        "text": "Lotti kennt den Garten. „Hier wohnt Ana“, sagt sie. „Sie pflanzt Blumen und Gemüse an. Milo lebt bei ihr.“ Rudi klopft mit dem Löffel ans Tor. Klack, klack! Niemand antwortet. Milo setzt sich hin. Seine Ohren hängen."
      },
      "right": {
        "text": "Bruno drückt vorsichtig gegen das Tor. Es ist nicht abgeschlossen. Nur ein loser Stein liegt davor. Gemeinsam rollen sie ihn weg. Das Tor geht auf. Milo wartet, bis alle bereit sind. Dann läuft er zum leeren Korb neben dem Gartenhaus."
      }
    },
    {
      "puzzleType": "initial-sounds",
      "title": "Anlaut H",
      "instruction": "H wie Hund! Tippe alle Bilder, die mit H anfangen.",
      "items": [
        {
          "id": "ball",
          "word": "Ball",
          "image": "images/band3/p03-anlaut-ball.webp",
          "correct": false
        },
        {
          "id": "hund",
          "word": "Hund",
          "image": "images/band3/p03-anlaut-hund.webp",
          "correct": true
        },
        {
          "id": "blume",
          "word": "Blume",
          "image": "images/band3/p03-anlaut-blume.webp",
          "correct": false
        },
        {
          "id": "hut",
          "word": "Hut",
          "image": "images/band3/p03-anlaut-hut.webp",
          "correct": true
        },
        {
          "id": "hase",
          "word": "Hase",
          "image": "images/band3/p03-anlaut-hase.webp",
          "correct": true
        },
        {
          "id": "boot",
          "word": "Boot",
          "image": "images/band3/p03-anlaut-boot.webp",
          "correct": false
        },
        {
          "id": "haus",
          "word": "Haus",
          "image": "images/band3/p03-anlaut-haus.webp",
          "correct": true
        },
        {
          "id": "fisch",
          "word": "Fisch",
          "image": "images/band3/p03-anlaut-fisch.webp",
          "correct": false
        }
      ],
      "comprehension": [
        {
          "questionId": "b3-s3-c1",
          "question": "Wer wohnt hier mit Milo?",
          "correctAnswerId": "ana",
          "options": [
            {
              "answerId": "paula",
              "text": "Paula"
            },
            {
              "answerId": "momo",
              "text": "Momo"
            },
            {
              "answerId": "ana",
              "text": "Ana"
            }
          ]
        },
        {
          "questionId": "b3-s3-c2",
          "question": "Was liegt vor dem Tor?",
          "correctAnswerId": "stein",
          "options": [
            {
              "answerId": "stein",
              "text": "Ein Stein"
            },
            {
              "answerId": "seil",
              "text": "Ein Seil"
            },
            {
              "answerId": "korb",
              "text": "Ein Korb"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Du hast die H-Wörter gefunden!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 4,
      "spreadImage": "images/band3/s04.webp",
      "left": {
        "text": "Im Korb liegt ein violettes Tuch. Milo steckt die Nase hinein und schnuppert lange. „Das gehört Ana“, sagt Lotti. „Sie trägt es oft am Hals.“ Rudi hebt das Tuch hoch. „Hihi, das gehört jetzt …“ Er schaut Milo an und stockt."
      },
      "right": {
        "text": "„Nein. Heute helfe ich“, sagt Rudi. Er hält Milo das Tuch hin. Der Hund schnuppert noch einmal. Dann senkt er die Nase zum Boden. Langsam geht er den Weg entlang. Bruno nickt. „Er hat wohl eine Spur gefunden. Wir bleiben zusammen.“"
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s4-q1",
          "question": "Welche Farbe hat Anas Tuch?",
          "correctAnswerId": "violett",
          "options": [
            {
              "answerId": "gelb",
              "text": "Gelb"
            },
            {
              "answerId": "violett",
              "text": "Violett"
            },
            {
              "answerId": "blau",
              "text": "Blau"
            }
          ]
        },
        {
          "questionId": "b3-s4-q2",
          "question": "Was tut Milo am Tuch?",
          "correctAnswerId": "schnuppert",
          "options": [
            {
              "answerId": "schlaeft",
              "text": "Er schläft darauf"
            },
            {
              "answerId": "zerreisst",
              "text": "Er zerreißt es"
            },
            {
              "answerId": "schnuppert",
              "text": "Er schnuppert daran"
            }
          ]
        },
        {
          "questionId": "b3-s4-q3",
          "question": "Was beschließt Rudi?",
          "correctAnswerId": "hilft",
          "options": [
            {
              "answerId": "hilft",
              "text": "Er hilft mit"
            },
            {
              "answerId": "versteckt",
              "text": "Er versteckt sich"
            },
            {
              "answerId": "faehrt",
              "text": "Er fährt nach Hause"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Prima mitgedacht!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 5,
      "spreadImage": "images/band3/s05.webp",
      "left": {
        "text": "Milo schnuppert am Boden. Mal geht er langsam, mal bleibt er stehen. Die Freunde warten geduldig. Rudi hält den goldenen Löffel wie eine Nase vor sich. Er schnuppert laut. „Ich rieche nur mich!“ Lotti kichert. Milo dreht kurz ein Ohr."
      },
      "right": {
        "text": "Der Weg führt zwischen Blumenbeeten hindurch. Hinter einer Hecke stehen zwei Schubkarren. Milo prüft beide Wege. Dann biegt er nach rechts ab. „Nicht ziehen und nicht drängeln“, sagt Bruno. „Wir lassen ihm Zeit.“ Lotti schiebt ihre Brille auf die Stirn."
      }
    },
    {
      "puzzleType": "differences",
      "title": "Fehlerbild",
      "instruction": "Finde die fünf Unterschiede!",
      "imageLeft": "images/band3/p05-fehlerbild-a.webp",
      "imageRight": "images/band3/p05-fehlerbild-b.webp",
      "hotspots": [
        {
          "id": "halstuch",
          "name": "Halstuch fehlt",
          "x": 17,
          "y": 61,
          "r": 6
        },
        {
          "id": "brille",
          "name": "Brille ist rot",
          "x": 33,
          "y": 53,
          "r": 5.5
        },
        {
          "id": "loeffel",
          "name": "Löffel ist silbern",
          "x": 73,
          "y": 46,
          "r": 5.5
        },
        {
          "id": "blume",
          "name": "Topfblume ist blau",
          "x": 67,
          "y": 59,
          "r": 5.5
        },
        {
          "id": "rad",
          "name": "Schubkarrenrad fehlt",
          "x": 75,
          "y": 88,
          "r": 6
        }
      ],
      "comprehension": [
        {
          "questionId": "b3-s5-c1",
          "question": "Womit macht Rudi eine Quatschnase?",
          "correctAnswerId": "loeffel",
          "options": [
            {
              "answerId": "blatt",
              "text": "Mit einem Blatt"
            },
            {
              "answerId": "blume",
              "text": "Mit einer Blume"
            },
            {
              "answerId": "loeffel",
              "text": "Mit dem Löffel"
            }
          ]
        },
        {
          "questionId": "b3-s5-c2",
          "question": "Welchen Weg wählt Milo?",
          "correctAnswerId": "rechts",
          "options": [
            {
              "answerId": "links",
              "text": "Den linken"
            },
            {
              "answerId": "rechts",
              "text": "Den rechten"
            },
            {
              "answerId": "portal",
              "text": "Den zum Portal"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Du hast genau hingeschaut!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 6,
      "spreadImage": "images/band3/s06.webp",
      "left": {
        "text": "An einer Bank macht Milo Halt. Bruno stellt ihm eine Schale Wasser hin. Der Hund trinkt und ruht sich kurz aus. „Er kann Gerüche viel besser erkennen als wir“, sagt Lotti. „Für ihn erzählt der Garten eine ganze Geschichte.“"
      },
      "right": {
        "text": "Rudi riecht an einer Blume. „Die erzählt mir, dass sie gut duftet.“ Bruno lacht. „Aber wir wissen noch nicht, wo Ana ist.“ Milo hebt den Kopf. Dann steht er auf und schnuppert weiter. Die Freunde folgen ihm langsam durch den Garten."
      }
    },
    {
      "puzzleType": "fact-cards",
      "title": "Steckbrief: Hunde",
      "instruction": "Tippe auf die sechs Karten und lerne Hunde kennen!",
      "character": "lotti",
      "image": "images/band3/p06-steckbrief-hund.webp",
      "facts": [
        "Hunde sind Säugetiere.",
        "Ihre Nase erkennt viele Gerüche.",
        "Sie hören auch hohe Töne, die wir nicht hören.",
        "Sie zeigen mit dem Körper, wie es ihnen geht.",
        "Sie brauchen Wasser, Futter, Bewegung und Ruhe.",
        "Bei einem fremden Hund fragen wir erst die Bezugsperson. Wir bedrängen ihn nicht."
      ],
      "quiz": {
        "questionId": "b3-s6-mini",
        "question": "Womit nimmt Milo Gerüche wahr?",
        "correctAnswerId": "nase",
        "options": [
          {
            "answerId": "nase",
            "text": "Mit der Nase"
          },
          {
            "answerId": "halsband",
            "text": "Mit dem Halsband"
          },
          {
            "answerId": "pfote",
            "text": "Mit der Pfote"
          }
        ]
      },
      "comprehension": [
        {
          "questionId": "b3-s6-c1",
          "question": "Was bekommt Milo an der Bank?",
          "correctAnswerId": "wasser",
          "options": [
            {
              "answerId": "kuchen",
              "text": "Kuchen"
            },
            {
              "answerId": "saft",
              "text": "Saft"
            },
            {
              "answerId": "wasser",
              "text": "Wasser"
            }
          ]
        },
        {
          "questionId": "b3-s6-c2",
          "question": "Was machen die Freunde bei seiner Pause?",
          "correctAnswerId": "warten",
          "options": [
            {
              "answerId": "rennen",
              "text": "Sie rennen weg"
            },
            {
              "answerId": "warten",
              "text": "Sie warten"
            },
            {
              "answerId": "ziehen",
              "text": "Sie ziehen ihn weiter"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Jetzt kennst du Hunde besser!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 7,
      "spreadImage": "images/band3/s07.webp",
      "left": {
        "text": "Hinter den Beeten beginnt ein schmaler Weg. Am Ende steht ein altes Gewächshaus. Durch seine Scheiben fällt Sonnenlicht. Milo spitzt die Ohren. Ganz leise hören sie einen Ruf. „Hallo? Ist da jemand?“ Lotti bleibt stehen. „Das klingt wie Ana!“"
      },
      "right": {
        "text": "Milo bellt zweimal und läuft ein Stück voraus. Dann wartet er wieder. Ein großer Busch verdeckt den direkten Weg. „Wir müssen außen herum“, sagt Bruno. Rudi schaut zu Milo. „Na los, weiße Pfote. Zeig uns den Weg!“ Gemeinsam gehen sie weiter."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s7-q1",
          "question": "Was steht am Ende des Weges?",
          "correctAnswerId": "haus",
          "options": [
            {
              "answerId": "haus",
              "text": "Ein Gewächshaus"
            },
            {
              "answerId": "turm",
              "text": "Ein Turm"
            },
            {
              "answerId": "boot",
              "text": "Ein Boot"
            }
          ]
        },
        {
          "questionId": "b3-s7-q2",
          "question": "Was hören die Freunde?",
          "correctAnswerId": "ruf",
          "options": [
            {
              "answerId": "trommel",
              "text": "Eine Trommel"
            },
            {
              "answerId": "ruf",
              "text": "Einen Ruf"
            },
            {
              "answerId": "auto",
              "text": "Ein Auto"
            }
          ]
        },
        {
          "questionId": "b3-s7-q3",
          "question": "Warum gehen sie außen herum?",
          "correctAnswerId": "busch",
          "options": [
            {
              "answerId": "gras",
              "text": "Sie suchen Gras"
            },
            {
              "answerId": "tanzen",
              "text": "Sie wollen tanzen"
            },
            {
              "answerId": "busch",
              "text": "Ein Busch ist im Weg"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Du bist gut dabei!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 8,
      "spreadImage": "images/band3/s08.webp",
      "left": {
        "text": "Milo führt sie um ein Beet mit Mais. Dann geht es an einer Mauer entlang. Rudi möchte durch eine Lücke schlüpfen. Doch dahinter wachsen dichte Dornen. „Lieber nicht“, sagt er und zieht den Bauch ein. Bruno muss leise lachen."
      },
      "right": {
        "text": "Lotti entdeckt einen flachen Weg neben der Mauer. „Hier kommen wir durch!“ Bald stehen alle vor dem Gewächshaus. Milo drückt die Nase an die Tür. Von drinnen klopft jemand. „Ich bin hier!“, ruft Ana. „Die Tür klemmt. Könnt ihr mir helfen?“"
      }
    },
    {
      "puzzleType": "maze",
      "title": "Labyrinth",
      "instruction": "Fahre mit dem Finger den Weg zum Gewächshaus nach!",
      "image": "images/band3/p08-labyrinth.webp",
      "start": {
        "x": 12,
        "y": 79,
        "r": 6
      },
      "goal": {
        "x": 88,
        "y": 14,
        "r": 6
      },
      "route": [
        {
          "id": "start",
          "x": 12,
          "y": 79
        },
        {
          "id": "a",
          "x": 21,
          "y": 50
        },
        {
          "id": "b",
          "x": 40,
          "y": 34
        },
        {
          "id": "c",
          "x": 80,
          "y": 16
        },
        {
          "id": "goal",
          "x": 88,
          "y": 14
        }
      ],
      "deadEnds": [
        {
          "id": "busch",
          "x": 40,
          "y": 12
        },
        {
          "id": "zaun",
          "x": 78,
          "y": 56
        },
        {
          "id": "beet",
          "x": 70,
          "y": 31
        }
      ],
      "waypointRadius": 9,
      "deadRadius": 6,
      "comprehension": [
        {
          "questionId": "b3-s8-c1",
          "question": "Was versperrt Rudis Abkürzung?",
          "correctAnswerId": "dornen",
          "options": [
            {
              "answerId": "dornen",
              "text": "Dornen"
            },
            {
              "answerId": "schnee",
              "text": "Schnee"
            },
            {
              "answerId": "boot",
              "text": "Ein Boot"
            }
          ]
        },
        {
          "questionId": "b3-s8-c2",
          "question": "Warum kommt Ana nicht heraus?",
          "correctAnswerId": "klemmt",
          "options": [
            {
              "answerId": "schlaeft",
              "text": "Sie schläft"
            },
            {
              "answerId": "liest",
              "text": "Sie liest"
            },
            {
              "answerId": "klemmt",
              "text": "Die Tür klemmt"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Du hast den Weg gefunden!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 9,
      "spreadImage": "images/band3/s09.webp",
      "left": {
        "text": "Bruno fasst den Türgriff und zieht vorsichtig. Nichts passiert. Unten steckt die Holztür fest im Rahmen. „Bitte nicht mit Gewalt“, ruft Ana. „Die Scheiben sollen heil bleiben!“ Bruno lässt sofort los. Milo setzt sich dicht neben die Tür und wartet."
      },
      "right": {
        "text": "„Keine Angst, ich bin ja da!“, sagt Bruno. Lotti schaut auf den Rahmen. „Wir sind alle da.“ Rudi hält seinen Löffel hoch. „Hilft der?“ Lotti schüttelt den Kopf. „Hier brauchen wir eine andere Idee.“ Da steht Milo plötzlich wieder auf."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s9-q1",
          "question": "Was soll heil bleiben?",
          "correctAnswerId": "scheiben",
          "options": [
            {
              "answerId": "tasche",
              "text": "Rudis Tasche"
            },
            {
              "answerId": "scheiben",
              "text": "Die Scheiben"
            },
            {
              "answerId": "bank",
              "text": "Die Bank"
            }
          ]
        },
        {
          "questionId": "b3-s9-q2",
          "question": "Wer bietet einen Löffel an?",
          "correctAnswerId": "rudi",
          "options": [
            {
              "answerId": "lotti",
              "text": "Lotti"
            },
            {
              "answerId": "milo",
              "text": "Milo"
            },
            {
              "answerId": "rudi",
              "text": "Rudi"
            }
          ]
        },
        {
          "questionId": "b3-s9-q3",
          "question": "Was macht Bruno nach Anas Bitte?",
          "correctAnswerId": "los",
          "options": [
            {
              "answerId": "los",
              "text": "Er lässt los"
            },
            {
              "answerId": "zieht",
              "text": "Er zieht stärker"
            },
            {
              "answerId": "springt",
              "text": "Er springt gegen die Tür"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Gut mitgedacht!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 10,
      "spreadImage": "images/band3/s10.webp",
      "left": {
        "text": "Milo geht um die Ecke und schnuppert. Unter einem kleinen Fenster bleibt er stehen. Er schaut hinauf und bellt. Das Fenster steht einen Spalt offen. „Gut gesehen!“, ruft Lotti. Ana kommt von innen heran. Jetzt können sie besser miteinander reden."
      },
      "right": {
        "text": "„Moment, ich hab da was!“ Lotti holt ein kleines Werkzeug aus dem Rucksack. Ana zeigt durch das Fenster auf einen lockeren Metallwinkel außen am Rahmen. „Der drückt gegen die Tür.“ Lotti nickt. „Jetzt weiß ich, wo wir anfangen müssen!“"
      }
    },
    {
      "puzzleType": "memory",
      "title": "Memory",
      "instruction": "Finde die sechs Paare! Tippe immer zwei Karten an.",
      "pairs": [
        {
          "id": "milo",
          "name": "Milo",
          "image": "images/band3/p10-memory-milo.webp"
        },
        {
          "id": "lotti",
          "name": "Lotti",
          "image": "images/band3/p10-memory-lotti.webp"
        },
        {
          "id": "bruno",
          "name": "Bruno",
          "image": "images/band3/p10-memory-bruno.webp"
        },
        {
          "id": "rudi",
          "name": "Rudi",
          "image": "images/band3/p10-memory-rudi.webp"
        },
        {
          "id": "tuch",
          "name": "Violettes Tuch",
          "image": "images/band3/p10-memory-tuch.webp"
        },
        {
          "id": "gewaechshaus",
          "name": "Gewächshaus",
          "image": "images/band3/p10-memory-gewaechshaus.webp"
        }
      ],
      "cardBack": "images/band2/p10-memory-rueckseite.webp",
      "comprehension": [
        {
          "questionId": "b3-s10-c1",
          "question": "Was findet Milo an der Seite?",
          "correctAnswerId": "fenster",
          "options": [
            {
              "answerId": "boot",
              "text": "Ein Boot"
            },
            {
              "answerId": "fenster",
              "text": "Ein Fenster"
            },
            {
              "answerId": "tunnel",
              "text": "Einen Tunnel"
            }
          ]
        },
        {
          "questionId": "b3-s10-c2",
          "question": "Wer zeigt auf den Metallwinkel?",
          "correctAnswerId": "ana",
          "options": [
            {
              "answerId": "ana",
              "text": "Ana"
            },
            {
              "answerId": "rudi",
              "text": "Rudi"
            },
            {
              "answerId": "bruno",
              "text": "Bruno"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Gut gemerkt!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 11,
      "spreadImage": "images/band3/s11.webp",
      "left": {
        "text": "Lotti richtet den lockeren Winkel. Bruno hält dabei die Tür ruhig. Rudi sammelt die heruntergefallene Schraube auf. Milo wartet neben Ana am Fenster. „Noch einen Moment“, sagt Lotti. Dann legt sie das Werkzeug weg. „Jetzt versuch es noch einmal, Bruno.“"
      },
      "right": {
        "text": "Bruno zieht ganz vorsichtig. Knarr! Die Tür öffnet sich. Ana tritt ins Freie. Milo springt vor Freude auf der Stelle. Sein ganzer Körper wackelt. „Da bist du ja!“, lacht Ana. Sie kniet sich hin. Milo schmiegt sich an sie."
      }
    },
    {
      "puzzleType": "word-image",
      "title": "Wort zu Bild",
      "instruction": "Lies das Wort. Tippe auf das passende Bild.",
      "rounds": [
        {
          "questionId": "b3-w-hund",
          "word": "HUND",
          "correctAnswerId": "hund",
          "options": [
            {
              "answerId": "hut",
              "id": "hut",
              "name": "Hut",
              "text": "Hut",
              "image": "images/band3/p11-wort-hut.webp"
            },
            {
              "answerId": "haus",
              "id": "haus",
              "name": "Haus",
              "text": "Haus",
              "image": "images/band3/p11-wort-haus.webp"
            },
            {
              "answerId": "hund",
              "id": "hund",
              "name": "Hund",
              "text": "Hund",
              "image": "images/band3/p11-wort-hund.webp"
            }
          ]
        },
        {
          "questionId": "b3-w-tuch",
          "word": "TUCH",
          "correctAnswerId": "tuch",
          "options": [
            {
              "answerId": "tuch",
              "id": "tuch",
              "name": "Tuch",
              "text": "Tuch",
              "image": "images/band3/p11-wort-tuch.webp"
            },
            {
              "answerId": "tisch",
              "id": "tisch",
              "name": "Tisch",
              "text": "Tisch",
              "image": "images/band3/p11-wort-tisch.webp"
            },
            {
              "answerId": "tor",
              "id": "tor",
              "name": "Tor",
              "text": "Tor",
              "image": "images/band3/p11-wort-tor.webp"
            }
          ]
        },
        {
          "questionId": "b3-w-tuer",
          "word": "TÜR",
          "correctAnswerId": "tuer",
          "options": [
            {
              "answerId": "topf",
              "id": "topf",
              "name": "Topf",
              "text": "Topf",
              "image": "images/band3/p11-wort-topf.webp"
            },
            {
              "answerId": "tuer",
              "id": "tuer",
              "name": "Tür",
              "text": "Tür",
              "image": "images/band3/p11-wort-tuer.webp"
            },
            {
              "answerId": "tasse",
              "id": "tasse",
              "name": "Tasse",
              "text": "Tasse",
              "image": "images/band3/p11-wort-tasse.webp"
            }
          ]
        },
        {
          "questionId": "b3-w-nase",
          "word": "NASE",
          "correctAnswerId": "nase",
          "options": [
            {
              "answerId": "nest",
              "id": "nest",
              "name": "Nest",
              "text": "Nest",
              "image": "images/band3/p11-wort-nest.webp"
            },
            {
              "answerId": "nuss",
              "id": "nuss",
              "name": "Nuss",
              "text": "Nuss",
              "image": "images/band3/p11-wort-nuss.webp"
            },
            {
              "answerId": "nase",
              "id": "nase",
              "name": "Nase",
              "text": "Nase",
              "image": "images/band3/p11-wort-nase.webp"
            }
          ]
        }
      ],
      "comprehension": [
        {
          "questionId": "b3-s11-c1",
          "question": "Wer hält die Tür ruhig?",
          "correctAnswerId": "bruno",
          "options": [
            {
              "answerId": "rudi",
              "text": "Rudi"
            },
            {
              "answerId": "bruno",
              "text": "Bruno"
            },
            {
              "answerId": "ana",
              "text": "Ana"
            }
          ]
        },
        {
          "questionId": "b3-s11-c2",
          "question": "Wen begrüßt Milo?",
          "correctAnswerId": "ana",
          "options": [
            {
              "answerId": "ana",
              "text": "Ana"
            },
            {
              "answerId": "paula",
              "text": "Paula"
            },
            {
              "answerId": "momo",
              "text": "Momo"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Gut gelesen!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 12,
      "spreadImage": "images/band3/s12.webp",
      "left": {
        "text": "Ana setzt sich mit den Freunden auf die Gartenbank. „Der Wind hat die Tür zugedrückt“, erzählt sie. „Zum Glück habt ihr mich gehört.“ Sie streichelt Milo sanft an der Schulter. „Und du hast mich gefunden.“ Milo legt den Kopf auf ihren Schuh."
      },
      "right": {
        "text": "Rudi reicht ihr das violette Tuch. „Diesmal habe ich nichts behalten!“ Ana lächelt und bedankt sich bei allen. Milo bekommt frisches Wasser. Bruno knabbert Gras. Lotti lässt die Beine baumeln. Über den Blumen summen Bienen. Jetzt ist alles wieder gut."
      }
    },
    {
      "puzzleType": "coloring",
      "title": "Ausmalbild",
      "instruction": "Male das Gartenbild bunt. Wähle eine Farbe und tippe auf eine Fläche.",
      "image": "images/band3/p12-ausmalbild.webp",
      "colors": [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FFEAA7",
        "#DDA15E",
        "#BC6C25",
        "#E07A3D",
        "#228B22",
        "#FFB6C1"
      ],
      "colorNames": [
        "Koralle",
        "Türkis",
        "Blau",
        "Hellgrün",
        "Hellgelb",
        "Sand",
        "Braun",
        "Orange",
        "Dunkelgrün",
        "Rosa"
      ],
      "comprehension": [
        {
          "questionId": "b3-s12-c1",
          "question": "Was hat die Tür zugedrückt?",
          "correctAnswerId": "wind",
          "options": [
            {
              "answerId": "wind",
              "text": "Der Wind"
            },
            {
              "answerId": "fisch",
              "text": "Ein Fisch"
            },
            {
              "answerId": "milo",
              "text": "Milo"
            }
          ]
        },
        {
          "questionId": "b3-s12-c2",
          "question": "Was gibt Rudi zurück?",
          "correctAnswerId": "tuch",
          "options": [
            {
              "answerId": "hut",
              "text": "Einen Hut"
            },
            {
              "answerId": "blume",
              "text": "Eine Blume"
            },
            {
              "answerId": "tuch",
              "text": "Das Tuch"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Schöne Farben!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 13,
      "spreadImage": "images/band3/s13.webp",
      "left": {
        "text": "Vor dem Abschied laufen sie noch zum Kanal. Milo bleibt bei Ana auf dem breiten Uferweg. Im weichen Lehm stehen seine Pfotenabdrücke. Rudi setzt seine kleine Pfote daneben. „Meine ist viel kleiner!“ Bruno drückt auch einen Fuß in den Lehm."
      },
      "right": {
        "text": "Lotti betrachtet die Spuren. Da fällt ihr der Steinring ein. „Vielleicht sind die Bilder am Portal auch Spuren“, sagt sie leise. „Jemand hat sie für andere hinterlassen.“ Bruno schaut zum Wasser. „Aber wer?“ Das weiß noch immer niemand. Sie gehen zum Portal."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s13-q1",
          "question": "Wo sieht man die Pfotenabdrücke?",
          "correctAnswerId": "lehm",
          "options": [
            {
              "answerId": "himmel",
              "text": "Im Himmel"
            },
            {
              "answerId": "lehm",
              "text": "Im Lehm"
            },
            {
              "answerId": "scheibe",
              "text": "Auf einer Scheibe"
            }
          ]
        },
        {
          "questionId": "b3-s13-q2",
          "question": "Wer setzt seine kleine Pfote daneben?",
          "correctAnswerId": "rudi",
          "options": [
            {
              "answerId": "rudi",
              "text": "Rudi"
            },
            {
              "answerId": "ana",
              "text": "Ana"
            },
            {
              "answerId": "tuko",
              "text": "Tuko"
            }
          ]
        },
        {
          "questionId": "b3-s13-q3",
          "question": "Was vermutet Lotti?",
          "correctAnswerId": "spuren",
          "options": [
            {
              "answerId": "boot",
              "text": "Das Portal ist ein Boot"
            },
            {
              "answerId": "weg",
              "text": "Die Bilder sind weg"
            },
            {
              "answerId": "spuren",
              "text": "Die Bilder könnten Spuren sein"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Du denkst mit!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 14,
      "spreadImage": "images/band3/s14.webp",
      "left": {
        "text": "Am Portal leuchten die beiden bekannten Steine. Bruno und Lotti stehen nebeneinander. Da glimmt ein dritter Stein auf. Darauf ist eine offene Hand. Daneben sind drei kleine Punkte. Eine feine Linie führt von den Punkten bis zum Rand des Steins."
      },
      "right": {
        "text": "Rudi beugt sich vor. „Ist das ein Weg?“ Lotti zuckt mit den Schultern. „Vielleicht. Oder ein Teil von etwas Größerem.“ Sie zeichnet das Bild in ihr Heft. „Damit wir nichts vergessen.“ Milo gähnt neben Ana. Für heute hat er genug Spuren gesucht."
      }
    },
    {
      "puzzleType": "fact-cards",
      "title": "Steckbrief: Spuren entdecken",
      "instruction": "Tippe auf die sechs Karten. Welche Spuren gibt es?",
      "character": "lotti",
      "image": "images/band3/p14-steckbrief-spuren.webp",
      "facts": [
        "In weichem Boden bleiben oft Abdrücke zurück.",
        "Hunde hinterlassen Pfotenabdrücke.",
        "Vögel hinterlassen andere Abdrücke als Hunde.",
        "Auch ein angeknabbertes Blatt kann eine Spur sein.",
        "Eine Spur allein verrät nicht immer die ganze Geschichte.",
        "Wir schauen vorsichtig. Tiere und Pflanzen lassen wir in Ruhe."
      ],
      "quiz": {
        "questionId": "b3-s14-mini",
        "question": "Wo bleiben Abdrücke oft gut sichtbar?",
        "correctAnswerId": "boden",
        "options": [
          {
            "answerId": "wolke",
            "text": "Auf einer Wolke"
          },
          {
            "answerId": "boden",
            "text": "Im weichen Boden"
          },
          {
            "answerId": "sonne",
            "text": "Im Sonnenlicht allein"
          }
        ]
      },
      "comprehension": [
        {
          "questionId": "b3-s14-c1",
          "question": "Wie viele Steine leuchten jetzt?",
          "correctAnswerId": "drei",
          "options": [
            {
              "answerId": "einer",
              "text": "Einer"
            },
            {
              "answerId": "zwei",
              "text": "Zwei"
            },
            {
              "answerId": "drei",
              "text": "Drei"
            }
          ]
        },
        {
          "questionId": "b3-s14-c2",
          "question": "Was macht Lotti mit dem neuen Bild?",
          "correctAnswerId": "zeichnet",
          "options": [
            {
              "answerId": "zeichnet",
              "text": "Sie zeichnet es ab"
            },
            {
              "answerId": "wischt",
              "text": "Sie wischt es weg"
            },
            {
              "answerId": "versteckt",
              "text": "Sie versteckt den Stein"
            }
          ]
        }
      ],
      "praise": {
        "character": "lotti",
        "text": "Genau beobachtet!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 15,
      "spreadImage": "images/band3/s15.webp",
      "left": {
        "text": "Ana und Milo gehen nach Hause. Der Hund schaut noch einmal zurück und wedelt. Rudi winkt mit dem Löffel. „Bis bald, weiße Pfote!“ Dann legt er Bruno einen Grashalm in die Tasche. „Für unterwegs.“ Bruno grinst. „Den hast du also doch aufgehoben!“"
      },
      "right": {
        "text": "Lotti umarmt Bruno. „Beim nächsten Besuch schauen wir weiter nach den Steinen.“ Bruno nickt. „Und nach Milo.“ Dann springt er in den Strudel. Platsch! Lotti und Rudi winken ihm nach. Am Ufer geht Ana langsam mit Milo durch das offene Gartentor."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s15-q1",
          "question": "Mit wem geht Milo heim?",
          "correctAnswerId": "ana",
          "options": [
            {
              "answerId": "ana",
              "text": "Mit Ana"
            },
            {
              "answerId": "paula",
              "text": "Mit Paula"
            },
            {
              "answerId": "momo",
              "text": "Mit Momo"
            }
          ]
        },
        {
          "questionId": "b3-s15-q2",
          "question": "Was legt Rudi in Brunos Tasche?",
          "correctAnswerId": "gras",
          "options": [
            {
              "answerId": "schraube",
              "text": "Eine Schraube"
            },
            {
              "answerId": "gras",
              "text": "Einen Grashalm"
            },
            {
              "answerId": "tuch",
              "text": "Ein Tuch"
            }
          ]
        },
        {
          "questionId": "b3-s15-q3",
          "question": "Wer springt ins Portal?",
          "correctAnswerId": "bruno",
          "options": [
            {
              "answerId": "ana",
              "text": "Ana"
            },
            {
              "answerId": "milo",
              "text": "Milo"
            },
            {
              "answerId": "bruno",
              "text": "Bruno"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Gut aufgepasst!"
      },
      "type": "puzzle"
    },
    {
      "type": "story",
      "spread": 16,
      "spreadImage": "images/band3/s16.webp",
      "left": {
        "text": "Bruno taucht im Regenwald auf. Paula wartet mit den anderen am Ufer. „Und?“, fragt sie. Bruno erzählt von Milo und der klemmenden Tür. Fips schwirrt aufgeregt. „Sssst – schon da!“ Momo blinzelt. „Eine … gute … Nase.“ Dann fallen ihr die Augen zu."
      },
      "right": {
        "text": "Auch hier leuchten nun drei Steine. Bruno zeichnet die Hand und die Punkte in den Sand. „Das haben wir noch nicht gelöst“, sagt er. Paula setzt sich neben ihn. „Dann lösen wir es zusammen.“ Bruno lächelt. Heute hat ein neuer Freund seine Menschen wiedergefunden."
      }
    },
    {
      "puzzleType": "quiz",
      "title": "Quiz",
      "instruction": "Was hast du gelesen? Tippe auf die richtige Antwort.",
      "questions": [
        {
          "questionId": "b3-s16-q1",
          "question": "Wo ist Bruno am Ende?",
          "correctAnswerId": "wald",
          "options": [
            {
              "answerId": "stadt",
              "text": "In Blumenstadt"
            },
            {
              "answerId": "wald",
              "text": "Im Regenwald"
            },
            {
              "answerId": "haus",
              "text": "Im Gewächshaus"
            }
          ]
        },
        {
          "questionId": "b3-s16-q2",
          "question": "Wer hat Ana mit seiner Nase gesucht?",
          "correctAnswerId": "milo",
          "options": [
            {
              "answerId": "tuko",
              "text": "Tuko"
            },
            {
              "answerId": "rudi",
              "text": "Rudi"
            },
            {
              "answerId": "milo",
              "text": "Milo"
            }
          ]
        },
        {
          "questionId": "b3-s16-q3",
          "question": "Ist die Herkunft des Portals schon erklärt?",
          "correctAnswerId": "nein",
          "options": [
            {
              "answerId": "nein",
              "text": "Nein, sie bleibt ein Rätsel"
            },
            {
              "answerId": "ja",
              "text": "Ja, vollständig"
            },
            {
              "answerId": "weg",
              "text": "Das Portal ist verschwunden"
            }
          ]
        }
      ],
      "praise": {
        "character": "bruno",
        "text": "Du kennst unser Abenteuer!"
      },
      "type": "puzzle"
    }
  ]
};
