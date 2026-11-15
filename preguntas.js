const questionsDB = [
    {
        "q": "¿Cómo se llama el famoso vaquero de la película 'Toy Story'?",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Woody"
        ],
        "options": [
            "Buzz Lightyear",
            "Woody",
            "Rex",
            "Andy"
        ],
        "answer": "Woody"
    },
    {
        "q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel?",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Robert Downey Jr."
        ],
        "options": [
            "Chris Evans",
            "Chris Hemsworth",
            "Robert Downey Jr.",
            "Mark Ruffalo"
        ],
        "answer": "Robert Downey Jr."
    },
    {
        "q": "¿Cuál es el nombre del pez payaso que busca su padre en una conocida película animada?",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nemo"
        ],
        "options": [
            "Dory",
            "Marlin",
            "Nemo",
            "Gill"
        ],
        "answer": "Nemo"
    },
    {
        "q": "¿Es cierto que en qué saga de películas aparece el maestro yoda?",
        "category": "cine",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama la escuela de magia a la que asiste Harry Potter?",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Hogwarts"
        ],
        "options": [
            "Beauxbatons",
            "Durmstrang",
            "Hogwarts",
            "Ilvermorny"
        ],
        "answer": "Hogwarts"
    },
    {
        "q": "¿Quién dirigió la famosa película 'Jurassic Park' estrenada en 1993?",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Steven Spielberg"
        ],
        "options": [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Martin Scorsese"
        ],
        "answer": "Steven Spielberg"
    },
    {
        "q": "¿Cuál es el nombre del ogro verde protagonista de la saga de DreamWorks?",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Shrek"
        ],
        "options": [
            "Asno",
            "Shrek",
            "Fiona",
            "Gato con Botas"
        ],
        "answer": "Shrek"
    },
    {
        "q": "¿Es cierto que qué actor encarnó al célebre pirata jack sparrow en 'piratas del caribe'?",
        "category": "cine",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el león protagonista de 'El Rey León'?",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Simba"
        ],
        "options": [
            "Mufasa",
            "Scar",
            "Simba",
            "Timón"
        ],
        "answer": "Simba"
    },
    {
        "q": "¿Qué objeto mágico utiliza Dorothy en 'El mago de Oz' para regresar a casa?",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Unas zapatillas rojas"
        ],
        "options": [
            "Un sombrero mágico",
            "Unas zapatillas rojas",
            "Una varita",
            "Un anillo"
        ],
        "answer": "Unas zapatillas rojas"
    },
    {
        "q": "¿Qué actor interpreta al agente secreto James Bond en 'Casino Royale' (2006)?",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Daniel Craig"
        ],
        "options": [
            "Pierce Brosnan",
            "Daniel Craig",
            "Sean Connery",
            "Roger Moore"
        ],
        "answer": "Daniel Craig"
    },
    {
        "q": "¿Es cierto que cómo se llama el archienemigo de batman en gotham?",
        "category": "cine",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad viven los personajes de la serie animada 'Los Simpson'?",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Springfield"
        ],
        "options": [
            "Shelbyville",
            "Springfield",
            "Capital City",
            "Ogdenville"
        ],
        "answer": "Springfield"
    },
    {
        "q": "¿Qué hobbit es el portador del Anillo Único en 'El Señor de los Anillos'?",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Frodo Bolsón"
        ],
        "options": [
            "Bilbo Bolsón",
            "Frodo Bolsón",
            "Sam Gamyi",
            "Pippin Tuk"
        ],
        "answer": "Frodo Bolsón"
    },
    {
        "q": "¿Quién es el director de las películas de fantasía 'El viaje de Chihiro' y 'Mi vecino Totoro'?",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Hayao Miyazaki"
        ],
        "options": [
            "Hayao Miyazaki",
            "Makoto Shinkai",
            "Isao Takahata",
            "Mamoru Hosoda"
        ],
        "answer": "Hayao Miyazaki"
    },
    {
        "q": "¿Es cierto que de qué país era originaria la legendaria banda de rock the beatles?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el instrumento de teclado principal que toca tradicionalmente un pianista?",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Piano"
        ],
        "options": [
            "Guitarra",
            "Batería",
            "Piano",
            "Violín"
        ],
        "answer": "Piano"
    },
    {
        "q": "¿Qué artista es conocido mundialmente como 'El Rey del Pop'?",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Michael Jackson"
        ],
        "options": [
            "Elvis Presley",
            "Michael Jackson",
            "Prince",
            "Freddie Mercury"
        ],
        "answer": "Michael Jackson"
    },
    {
        "q": "¿Cuántas cuerdas tiene una guitarra acústica estándar por lo general?",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "6"
        ],
        "options": [
            "4",
            "5",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "q": "¿Es cierto que qué género musical tradicional es originario de argentina y se baila en pareja?",
        "category": "musica",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el nombre de la famosa banda británica liderada por Freddie Mercury?",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Queen"
        ],
        "options": [
            "Led Zeppelin",
            "Queen",
            "Pink Floyd",
            "The Rolling Stones"
        ],
        "answer": "Queen"
    },
    {
        "q": "¿Qué instrumento musical de viento metal se asocia comúnmente con el jazz clásico?",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Saxofón"
        ],
        "options": [
            "Flauta traversa",
            "Saxofón",
            "Violonchelo",
            "Clarinete"
        ],
        "answer": "Saxofón"
    },
    {
        "q": "¿De qué nacionalidad era el célebre compositor clásico Ludwig van Beethoven?",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemana"
        ],
        "options": [
            "Austriaca",
            "Alemana",
            "Italiana",
            "Francesa"
        ],
        "answer": "Alemana"
    },
    {
        "q": "¿Es cierto que qué nombre recibe el grupo musical coreano (k-pop) con mayor impacto global en la actualidad?",
        "category": "musica",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Con qué se toca habitualmente la guitarra eléctrica para rasguear las cuerdas de forma precisa?",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Una púa o pletro"
        ],
        "options": [
            "Una púa o pletro",
            "Un arco",
            "Baquetas",
            "Los dedos exclusivamente"
        ],
        "answer": "Una púa o pletro"
    },
    {
        "q": "¿Qué famosa cantante colombiana interpreta el tema 'Hips Don't Lie'?",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Shrakira"
        ],
        "options": [
            "Shakira",
            "Rosalía",
            "Karol G",
            "Jennifer Lopez"
        ],
        "answer": "Shakira"
    },
    {
        "q": "¿Cuál es la banda de rock británica famosa por su logotipo de la lengua y los labios rojos?",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "The Rolling Stones"
        ],
        "options": [
            "The Beatles",
            "The Rolling Stones",
            "AC/DC",
            "Pink Floyd"
        ],
        "answer": "The Rolling Stones"
    },
    {
        "q": "¿Es cierto que qué instrumento de percusión compone la base del ritmo junto al bombo en una batería?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué famoso festival de música masiva se celebra cada año en un desierto de California?",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Coachella"
        ],
        "options": [
            "Glastonbury",
            "Coachella",
            "Rock in Rio",
            "Tomorrowland"
        ],
        "answer": "Coachella"
    },
    {
        "q": "¿Qué legendario guitarrista zurdo destacó en el festival de Woodstock de 1969?",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Jimi Hendrix"
        ],
        "options": [
            "Eric Clapton",
            "Jimi Hendrix",
            "Jimmy Page",
            "Carlos Santana"
        ],
        "answer": "Jimi Hendrix"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol en el terreno de juego durante un partido oficial?",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "11"
    },
    {
        "q": "¿Es cierto que en qué deporte se utiliza una raqueta y una pequeña pelota para pasarla por encima de una red?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cada cuántos años se celebran los Juegos Olímpicos de verano?",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "4 años"
        ],
        "options": [
            "2 años",
            "3 años",
            "4 años",
            "5 años"
        ],
        "answer": "4 años"
    },
    {
        "q": "¿En qué país se originó el sumo, deporte de lucha tradicional?",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Japón"
        ],
        "options": [
            "China",
            "Corea del Sur",
            "Japón",
            "Mongolia"
        ],
        "answer": "Japón"
    },
    {
        "q": "¿Cuántos puntos vale una canasta libre básica en el baloncesto?",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "1"
        ],
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "1"
    },
    {
        "q": "¿Es cierto que en qué deporte compiten los equipos por la famosa 'stanley cup'?",
        "category": "deportes",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el evento deportivo ciclista más famoso del mundo celebrado en Francia?",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Tour de Francia"
        ],
        "options": [
            "Giro de Italia",
            "Vuelta a España",
            "Tour de Francia",
            "Milán-San Remo"
        ],
        "answer": "Tour de Francia"
    },
    {
        "q": "¿Qué país ganó la Copa Mundial de Fútbol de la FIFA en el año 2014?",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemania"
        ],
        "options": [
            "Brasil",
            "Argentina",
            "Alemania",
            "España"
        ],
        "answer": "Alemania"
    },
    {
        "q": "¿Cuál es el deporte nacional de los Estados Unidos que se juega con bate y manopla?",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Béisbol"
        ],
        "options": [
            "Fútbol americano",
            "Béisbol",
            "Baloncesto",
            "Hockey"
        ],
        "answer": "Béisbol"
    },
    {
        "q": "¿Es cierto que cuántos hoyos se juegan en una ronda estándar completa de golf?",
        "category": "deportes",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué tenista español ha ganado más títulos de Grand Slam en la historia?",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Rafael Nadal"
        ],
        "options": [
            "Carlos Alcaraz",
            "Rafael Nadal",
            "David Ferrer",
            "Feliciano López"
        ],
        "answer": "Rafael Nadal"
    },
    {
        "q": "¿Cómo se llama el campeonato de automovilismo más importante y prestigioso del mundo?",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fórmula 1"
        ],
        "options": [
            "MotoGP",
            "Fórmula 1",
            "Rally Dakar",
            "IndyCar"
        ],
        "answer": "Fórmula 1"
    },
    {
        "q": "¿En qué deporte se utiliza el término 'slam dunk'?",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Voleibol",
            "Tenis",
            "Rugby"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Es cierto que cuántos jugadores hay en la pista por cada equipo en un partido de baloncesto oficial?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país albergó los Juegos Olímpicos de Verano en el año 2008?",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "China"
        ],
        "options": [
            "Grecia",
            "China",
            "Reino Unido",
            "Brasil"
        ],
        "answer": "China"
    },
    {
        "q": "¿En qué año se aprobó la actual Constitución Española?",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1978"
        ],
        "options": [
            "1978",
            "1975",
            "1981",
            "1976"
        ],
        "answer": "1978"
    },
    {
        "q": "¿En qué año llegó Cristóbal Colón a América?",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1492"
        ],
        "options": [
            "1492",
            "1498",
            "1519",
            "1488"
        ],
        "answer": "1492"
    },
    {
        "q": "¿Es cierto que en qué año comenzó la revolución francesa?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué año terminó la Guerra Civil Española?",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1936",
            "1945",
            "1931"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año comenzó la Segunda Guerra Mundial?",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1941",
            "1914",
            "1936"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año cayó el Imperio Romano de Occidente?",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "476"
        ],
        "options": [
            "476",
            "1453",
            "313",
            "711"
        ],
        "answer": "476"
    },
    {
        "q": "¿Es cierto que qué muro cayó en 1989 simbolizando el fin de la guerra fría?",
        "category": "historia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país europeo inició la Revolución Industrial en el siglo XVIII?",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gran Bretaña"
        ],
        "options": [
            "Gran Bretaña",
            "Francia",
            "Alemania",
            "España"
        ],
        "answer": "Gran Bretaña"
    },
    {
        "q": "¿Qué emperador francés fue derrotado definitivamente en Waterloo en 1815?",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Napoleón Bonaparte"
        ],
        "options": [
            "Napoleón Bonaparte",
            "Julio César",
            "Luis XIV",
            "Carlomagno"
        ],
        "answer": "Napoleón Bonaparte"
    },
    {
        "q": "¿Quién fue el líder de la Revolución Rusa de 1917?",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Vladimir Lenin"
        ],
        "options": [
            "Vladimir Lenin",
            "Iósif Stalin",
            "León Trotski",
            "Zar Nicolás II"
        ],
        "answer": "Vladimir Lenin"
    },
    {
        "q": "¿Es cierto que qué civilización antigua construyó el impresionante imperio con capital en machu picchu?",
        "category": "historia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién fue el primer emperador del Imperio Romano?",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Augusto"
        ],
        "options": [
            "Julio César",
            "Augusto",
            "Nerón",
            "Trajano"
        ],
        "answer": "Augusto"
    },
    {
        "q": "¿En qué siglo se produjo la caída de Constantinopla a manos del Imperio Otomano?",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Siglo XV"
        ],
        "options": [
            "Siglo XIV",
            "Siglo XV",
            "Siglo XVI",
            "Siglo XIII"
        ],
        "answer": "Siglo XV"
    },
    {
        "q": "¿Qué reina española financió el viaje de Cristóbal Colón hacia las Indias?",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Isabel la Católica"
        ],
        "options": [
            "Isabel la Católica",
            "Juana la Loca",
            "Isabel II",
            "María Luisa de Parma"
        ],
        "answer": "Isabel la Católica"
    },
    {
        "q": "¿Es cierto que qué tratado puso fin formalmente a la primera guerra mundial en 1919?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el pico más alto de España (situado en Tenerife)?",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Teide"
        ],
        "options": [
            "Teide",
            "Mulhacén",
            "Aneto",
            "Veleta"
        ],
        "answer": "Teide"
    },
    {
        "q": "¿Cuál es el río más largo de la Península Ibérica?",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tajo"
        ],
        "options": [
            "Tajo",
            "Ebro",
            "Duero",
            "Guadalquivir"
        ],
        "answer": "Tajo"
    },
    {
        "q": "¿Cuál es el río más caudaloso de España?",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Ebro"
        ],
        "options": [
            "Ebro",
            "Tajo",
            "Duero",
            "Guadiana"
        ],
        "answer": "Ebro"
    },
    {
        "q": "¿Es cierto que qué cordillera separa naturalmente españa de francia?",
        "category": "geografia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el océano más grande del planeta Tierra?",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Océano Pacífico"
        ],
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "answer": "Océano Pacífico"
    },
    {
        "q": "¿Cuál es el río más largo del mundo?",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "El Nilo / Amazonas"
        ],
        "options": [
            "El Nilo / Amazonas",
            "El Danubio",
            "El Misisipi",
            "El Volga"
        ],
        "answer": "El Nilo / Amazonas"
    },
    {
        "q": "¿Cuál es la capital de Australia?",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Canberra"
        ],
        "options": [
            "Canberra",
            "Sídney",
            "Melbourne",
            "Brisbane"
        ],
        "answer": "Canberra"
    },
    {
        "q": "¿Es cierto que qué país tiene mayor superficie en todo el mundo?",
        "category": "geografia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué continente se encuentra el desierto del Sahara?",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "África"
        ],
        "options": [
            "África",
            "Asia",
            "América",
            "Oceanía"
        ],
        "answer": "África"
    },
    {
        "q": "¿Cuál es la capital de Italia?",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Roma"
        ],
        "options": [
            "Roma",
            "Milán",
            "Nápoles",
            "Florencia"
        ],
        "answer": "Roma"
    },
    {
        "q": "¿Cuál es la capital de Japón?",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tokio"
        ],
        "options": [
            "Tokio",
            "Kioto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": "Tokio"
    },
    {
        "q": "¿Es cierto que en qué país se encuentra la famosa ciudad histórica de machu picchu?",
        "category": "geografia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué mar baña las costas orientales de la península ibérica?",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Mar Mediterráneo"
        ],
        "options": [
            "Mar Mediterráneo",
            "Mar Cantábrico",
            "Océano Atlántico",
            "Mar Báltico"
        ],
        "answer": "Mar Mediterráneo"
    },
    {
        "q": "¿Cuál es la capital de Argentina?",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Buenos Aires"
        ],
        "options": [
            "Buenos Aires",
            "Córdoba",
            "Rosario",
            "Mendoza"
        ],
        "answer": "Buenos Aires"
    },
    {
        "q": "¿Qué estrecho separa el continente europeo del africano?",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Estrecho de Gibraltar"
        ],
        "options": [
            "Estrecho de Gibraltar",
            "Estrecho de Bering",
            "Canal de la Mancha",
            "Estrecho de Mesina"
        ],
        "answer": "Estrecho de Gibraltar"
    },
    {
        "q": "¿Es cierto que cuál es la unidad básica de los seres vivos?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué planeta del Sistema Solar es conocido como el planeta rojo?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Marte"
        ],
        "options": [
            "Marte",
            "Júpiter",
            "Venus",
            "Saturno"
        ],
        "answer": "Marte"
    },
    {
        "q": "¿Cuál es el símbolo químico del oro en la tabla periódica?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Au"
        ],
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": "Au"
    },
    {
        "q": "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Nitrógeno"
        ],
        "options": [
            "Nitrógeno",
            "Oxígeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "answer": "Nitrógeno"
    },
    {
        "q": "¿Es cierto que qué científico formuló la teoría de la relatividad?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el hueso más largo del cuerpo humano?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fémur"
        ],
        "options": [
            "Fémur",
            "Tibia",
            "Húmero",
            "Peroné"
        ],
        "answer": "Fémur"
    },
    {
        "q": "¿Qué órgano del cuerpo humano produce la insulina?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Páncreas"
        ],
        "options": [
            "Páncreas",
            "Hígado",
            "Riñón",
            "Estómago"
        ],
        "answer": "Páncreas"
    },
    {
        "q": "¿Qué partícula del átomo tiene carga eléctrica negativa?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Electrón"
        ],
        "options": [
            "Electrón",
            "Protón",
            "Neutrón",
            "Positrón"
        ],
        "answer": "Electrón"
    },
    {
        "q": "¿Es cierto que qué fuerza atrae a los objetos hacia el centro de la tierra?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el símbolo químico del agua?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "H2O"
        ],
        "options": [
            "H2O",
            "CO2",
            "O2",
            "NaCl"
        ],
        "answer": "H2O"
    },
    {
        "q": "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Mitocondria"
        ],
        "options": [
            "Mitocondria",
            "Cloroplasto",
            "Ribosoma",
            "Vacuola"
        ],
        "answer": "Mitocondria"
    },
    {
        "q": "¿Qué base nitrogenada del ARN sustituye a la timina presente en el ADN?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Uracilo"
        ],
        "options": [
            "Uracilo",
            "Adenina",
            "Guanina",
            "Citosina"
        ],
        "answer": "Uracilo"
    },
    {
        "q": "¿Es cierto que cómo se llaman las proteínas que actúan como catalizadores acelerando las reacciones bioquímicas?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué científico británico descubrió la penicilina en 1928?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alexander Fleming"
        ],
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Marie Curie"
        ],
        "answer": "Alexander Fleming"
    },
    {
        "q": "¿Qué científica pionera ganó dos premios Nobel en campos diferentes (Física y Química)?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Marie Curie"
        ],
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "answer": "Marie Curie"
    },
    {
        "q": "¿Quién escribió 'Don Quijote de la Mancha'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Miguel de Cervantes"
        ],
        "options": [
            "Miguel de Cervantes",
            "Lope de Vega",
            "Quevedo",
            "Góngora"
        ],
        "answer": "Miguel de Cervantes"
    },
    {
        "q": "¿Es cierto que quién escribió 'la casa de bernarda alba'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'Las Meninas'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Diego Velázquez"
        ],
        "options": [
            "Diego Velázquez",
            "Francisco de Goya",
            "El Greco",
            "Murillo"
        ],
        "answer": "Diego Velázquez"
    },
    {
        "q": "¿Quién pintó el cuadro 'Guernica'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Pablo Picasso"
        ],
        "options": [
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró",
            "Juan Gris"
        ],
        "answer": "Pablo Picasso"
    },
    {
        "q": "¿Quién es el autor de la novela 'Cien años de soledad'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gabriel García Márquez"
        ],
        "options": [
            "Gabriel García Márquez",
            "Mario Vargas Llosa",
            "Julio Cortázar",
            "Jorge Luis Borges"
        ],
        "answer": "Gabriel García Márquez"
    },
    {
        "q": "¿Es cierto que qué autor inglés escribió la famosa obra de teatro 'romeo y julieta'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'La Mona Lisa' (La Gioconda)?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Leonardo da Vinci"
        ],
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael Sanzio",
            "Botticelli"
        ],
        "answer": "Leonardo da Vinci"
    },
    {
        "q": "¿Quién escribió la novela corta 'El principito'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Antoine de Saint-Exupéry"
        ],
        "options": [
            "Antoine de Saint-Exupéry",
            "Jules Verne",
            "Victor Hugo",
            "Albert Camus"
        ],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "q": "¿Quién pintó 'La persistencia de la memoria' con los relojes blandos?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Salvador Dalí"
        ],
        "options": [
            "Salvador Dalí",
            "Pablo Picasso",
            "Joan Miró",
            "René Magritte"
        ],
        "answer": "Salvador Dalí"
    },
    {
        "q": "¿Es cierto que qué poeta andaluz escribió 'platero y yo'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué autor escribió la trágica obra 'La Celestina'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Fernando de Rojas"
        ],
        "options": [
            "Fernando de Rojas",
            "Miguel de Cervantes",
            "Lope de Vega",
            "Arcipreste de Hita"
        ],
        "answer": "Fernando de Rojas"
    },
    {
        "q": "¿Qué escritor de la Generación del 98 escribió 'Niebla' y 'San Manuel Bueno, mártir'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Miguel de Unamuno"
        ],
        "options": [
            "Miguel de Unamuno",
            "Pío Baroja",
            "Azorín",
            "Valle-Inclán"
        ],
        "answer": "Miguel de Unamuno"
    },
    {
        "q": "¿Qué autor del Siglo de Oro escribió la famosa obra teatral 'La vida es sueño'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Calderón de la Barca"
        ],
        "options": [
            "Calderón de la Barca",
            "Lope de Vega",
            "Tirso de Molina",
            "Cervantes"
        ],
        "answer": "Calderón de la Barca"
    },
    {
        "q": "¿Es cierto que quién esculpió el famosísimo 'david' de mármol que se encuentra en florencia?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué arquitecto modernista diseñó el templo de la Sagrada Familia en Barcelona?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Antoni Gaudí"
        ],
        "options": [
            "Antoni Gaudí",
            "Santiago Calatrava",
            "Juan de Villanueva",
            "Moneo"
        ],
        "answer": "Antoni Gaudí"
    },
    {
        "q": "¿Qué filósofo griego fue maestro de Alejandro Magno?",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Aristóteles"
        ],
        "options": [
            "Aristóteles",
            "Platón",
            "Sócrates",
            "Epicuro"
        ],
        "answer": "Aristóteles"
    },
    {
        "q": "¿Cómo se llama el impuesto indirecto que grava el consumo en España?",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "IVA"
        ],
        "options": [
            "IVA",
            "IRPF",
            "IBI",
            "IS"
        ],
        "answer": "IVA"
    },
    {
        "q": "¿Es cierto que qué ideología política defendía karl marx junto a friedrich engels?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol sobre el campo?",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "11",
            "7",
            "5",
            "9"
        ],
        "answer": "11"
    },
    {
        "q": "¿En qué país se originaron los Juegos Olímpicos en la antigüedad?",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Grecia"
        ],
        "options": [
            "Grecia",
            "Italia",
            "Egipto",
            "Francia"
        ],
        "answer": "Grecia"
    },
    {
        "q": "¿Qué moneda oficial se utiliza en la mayor parte de la Unión Europea?",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Euro"
        ],
        "options": [
            "Euro",
            "Dólar",
            "Libra",
            "Franco"
        ],
        "answer": "Euro"
    },
    {
        "q": "¿Es cierto que qué organismo internacional se fundó en 1945 para mantener la paz mundial?",
        "category": "culturageneral",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad se encuentra la famosa Torre Eiffel?",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "París"
        ],
        "options": [
            "París",
            "Londres",
            "Roma",
            "Berlín"
        ],
        "answer": "París"
    },
    {
        "q": "¿Qué deporte se practica en la NBA?",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Fútbol",
            "Béisbol",
            "Tenis"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Cuál es el idioma más hablado del mundo como lengua nativa?",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Chino mandarín"
        ],
        "options": [
            "Chino mandarín",
            "Español",
            "Inglés",
            "Hindi"
        ],
        "answer": "Chino mandarín"
    },
    {
        "q": "¿Es cierto que de qué color es el icónico erizo protagonista de los videojuegos de sega, sonic?",
        "category": "culturageneral",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué compañía de videojuegos creó al famoso personaje fontanero Mario Bros?",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nintendo"
        ],
        "options": [
            "Sega",
            "Sony",
            "Nintendo",
            "Microsoft"
        ],
        "answer": "Nintendo"
    },
    {
        "q": "¿Cuántos colores principales forman tradicionalmente un arcoíris visible?",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "7"
        ],
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7"
    },
    {
        "q": "¿Cuál es la moneda oficial de Japón?",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Yen"
        ],
        "options": [
            "Yuan",
            "Dólar",
            "Yen",
            "Euro"
        ],
        "answer": "Yen"
    },
    {
        "q": "¿Es cierto que de qué nacionalidad era el célebre pintor y escultor cubista pablo picasso?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el famoso vaquero de la película 'Toy Story'? (Parte 2)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Woody"
        ],
        "options": [
            "Buzz Lightyear",
            "Woody",
            "Rex",
            "Andy"
        ],
        "answer": "Woody"
    },
    {
        "q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel? (Parte 2)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Robert Downey Jr."
        ],
        "options": [
            "Chris Evans",
            "Chris Hemsworth",
            "Robert Downey Jr.",
            "Mark Ruffalo"
        ],
        "answer": "Robert Downey Jr."
    },
    {
        "q": "¿Cuál es el nombre del pez payaso que busca su padre en una conocida película animada? (Parte 2)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nemo"
        ],
        "options": [
            "Dory",
            "Marlin",
            "Nemo",
            "Gill"
        ],
        "answer": "Nemo"
    },
    {
        "q": "¿Es cierto que en qué saga de películas aparece el maestro yoda?",
        "category": "cine",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama la escuela de magia a la que asiste Harry Potter? (Parte 2)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Hogwarts"
        ],
        "options": [
            "Beauxbatons",
            "Durmstrang",
            "Hogwarts",
            "Ilvermorny"
        ],
        "answer": "Hogwarts"
    },
    {
        "q": "¿Quién dirigió la famosa película 'Jurassic Park' estrenada en 1993? (Parte 2)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Steven Spielberg"
        ],
        "options": [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Martin Scorsese"
        ],
        "answer": "Steven Spielberg"
    },
    {
        "q": "¿Cuál es el nombre del ogro verde protagonista de la saga de DreamWorks? (Parte 2)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Shrek"
        ],
        "options": [
            "Asno",
            "Shrek",
            "Fiona",
            "Gato con Botas"
        ],
        "answer": "Shrek"
    },
    {
        "q": "¿Es cierto que qué actor encarnó al célebre pirata jack sparrow en 'piratas del caribe'?",
        "category": "cine",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el león protagonista de 'El Rey León'? (Parte 2)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Simba"
        ],
        "options": [
            "Mufasa",
            "Scar",
            "Simba",
            "Timón"
        ],
        "answer": "Simba"
    },
    {
        "q": "¿Qué objeto mágico utiliza Dorothy en 'El mago de Oz' para regresar a casa? (Parte 2)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Unas zapatillas rojas"
        ],
        "options": [
            "Un sombrero mágico",
            "Unas zapatillas rojas",
            "Una varita",
            "Un anillo"
        ],
        "answer": "Unas zapatillas rojas"
    },
    {
        "q": "¿Qué actor interpreta al agente secreto James Bond en 'Casino Royale' (2006)? (Parte 2)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Daniel Craig"
        ],
        "options": [
            "Pierce Brosnan",
            "Daniel Craig",
            "Sean Connery",
            "Roger Moore"
        ],
        "answer": "Daniel Craig"
    },
    {
        "q": "¿Es cierto que cómo se llama el archienemigo de batman en gotham?",
        "category": "cine",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad viven los personajes de la serie animada 'Los Simpson'? (Parte 2)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Springfield"
        ],
        "options": [
            "Shelbyville",
            "Springfield",
            "Capital City",
            "Ogdenville"
        ],
        "answer": "Springfield"
    },
    {
        "q": "¿Qué hobbit es el portador del Anillo Único en 'El Señor de los Anillos'? (Parte 2)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Frodo Bolsón"
        ],
        "options": [
            "Bilbo Bolsón",
            "Frodo Bolsón",
            "Sam Gamyi",
            "Pippin Tuk"
        ],
        "answer": "Frodo Bolsón"
    },
    {
        "q": "¿Quién es el director de las películas de fantasía 'El viaje de Chihiro' y 'Mi vecino Totoro'? (Parte 2)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Hayao Miyazaki"
        ],
        "options": [
            "Hayao Miyazaki",
            "Makoto Shinkai",
            "Isao Takahata",
            "Mamoru Hosoda"
        ],
        "answer": "Hayao Miyazaki"
    },
    {
        "q": "¿Es cierto que de qué país era originaria la legendaria banda de rock the beatles?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el instrumento de teclado principal que toca tradicionalmente un pianista? (Parte 2)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Piano"
        ],
        "options": [
            "Guitarra",
            "Batería",
            "Piano",
            "Violín"
        ],
        "answer": "Piano"
    },
    {
        "q": "¿Qué artista es conocido mundialmente como 'El Rey del Pop'? (Parte 2)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Michael Jackson"
        ],
        "options": [
            "Elvis Presley",
            "Michael Jackson",
            "Prince",
            "Freddie Mercury"
        ],
        "answer": "Michael Jackson"
    },
    {
        "q": "¿Cuántas cuerdas tiene una guitarra acústica estándar por lo general? (Parte 2)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "6"
        ],
        "options": [
            "4",
            "5",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "q": "¿Es cierto que qué género musical tradicional es originario de argentina y se baila en pareja?",
        "category": "musica",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el nombre de la famosa banda británica liderada por Freddie Mercury? (Parte 2)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Queen"
        ],
        "options": [
            "Led Zeppelin",
            "Queen",
            "Pink Floyd",
            "The Rolling Stones"
        ],
        "answer": "Queen"
    },
    {
        "q": "¿Qué instrumento musical de viento metal se asocia comúnmente con el jazz clásico? (Parte 2)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Saxofón"
        ],
        "options": [
            "Flauta traversa",
            "Saxofón",
            "Violonchelo",
            "Clarinete"
        ],
        "answer": "Saxofón"
    },
    {
        "q": "¿De qué nacionalidad era el célebre compositor clásico Ludwig van Beethoven? (Parte 2)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemana"
        ],
        "options": [
            "Austriaca",
            "Alemana",
            "Italiana",
            "Francesa"
        ],
        "answer": "Alemana"
    },
    {
        "q": "¿Es cierto que qué nombre recibe el grupo musical coreano (k-pop) con mayor impacto global en la actualidad?",
        "category": "musica",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Con qué se toca habitualmente la guitarra eléctrica para rasguear las cuerdas de forma precisa? (Parte 2)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Una púa o pletro"
        ],
        "options": [
            "Una púa o pletro",
            "Un arco",
            "Baquetas",
            "Los dedos exclusivamente"
        ],
        "answer": "Una púa o pletro"
    },
    {
        "q": "¿Qué famosa cantante colombiana interpreta el tema 'Hips Don't Lie'? (Parte 2)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Shrakira"
        ],
        "options": [
            "Shakira",
            "Rosalía",
            "Karol G",
            "Jennifer Lopez"
        ],
        "answer": "Shakira"
    },
    {
        "q": "¿Cuál es la banda de rock británica famosa por su logotipo de la lengua y los labios rojos? (Parte 2)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "The Rolling Stones"
        ],
        "options": [
            "The Beatles",
            "The Rolling Stones",
            "AC/DC",
            "Pink Floyd"
        ],
        "answer": "The Rolling Stones"
    },
    {
        "q": "¿Es cierto que qué instrumento de percusión compone la base del ritmo junto al bombo en una batería?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué famoso festival de música masiva se celebra cada año en un desierto de California? (Parte 2)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Coachella"
        ],
        "options": [
            "Glastonbury",
            "Coachella",
            "Rock in Rio",
            "Tomorrowland"
        ],
        "answer": "Coachella"
    },
    {
        "q": "¿Qué legendario guitarrista zurdo destacó en el festival de Woodstock de 1969? (Parte 2)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Jimi Hendrix"
        ],
        "options": [
            "Eric Clapton",
            "Jimi Hendrix",
            "Jimmy Page",
            "Carlos Santana"
        ],
        "answer": "Jimi Hendrix"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol en el terreno de juego durante un partido oficial? (Parte 2)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "11"
    },
    {
        "q": "¿Es cierto que en qué deporte se utiliza una raqueta y una pequeña pelota para pasarla por encima de una red?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cada cuántos años se celebran los Juegos Olímpicos de verano? (Parte 2)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "4 años"
        ],
        "options": [
            "2 años",
            "3 años",
            "4 años",
            "5 años"
        ],
        "answer": "4 años"
    },
    {
        "q": "¿En qué país se originó el sumo, deporte de lucha tradicional? (Parte 2)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Japón"
        ],
        "options": [
            "China",
            "Corea del Sur",
            "Japón",
            "Mongolia"
        ],
        "answer": "Japón"
    },
    {
        "q": "¿Cuántos puntos vale una canasta libre básica en el baloncesto? (Parte 2)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "1"
        ],
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "1"
    },
    {
        "q": "¿Es cierto que en qué deporte compiten los equipos por la famosa 'stanley cup'?",
        "category": "deportes",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el evento deportivo ciclista más famoso del mundo celebrado en Francia? (Parte 2)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Tour de Francia"
        ],
        "options": [
            "Giro de Italia",
            "Vuelta a España",
            "Tour de Francia",
            "Milán-San Remo"
        ],
        "answer": "Tour de Francia"
    },
    {
        "q": "¿Qué país ganó la Copa Mundial de Fútbol de la FIFA en el año 2014? (Parte 2)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemania"
        ],
        "options": [
            "Brasil",
            "Argentina",
            "Alemania",
            "España"
        ],
        "answer": "Alemania"
    },
    {
        "q": "¿Cuál es el deporte nacional de los Estados Unidos que se juega con bate y manopla? (Parte 2)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Béisbol"
        ],
        "options": [
            "Fútbol americano",
            "Béisbol",
            "Baloncesto",
            "Hockey"
        ],
        "answer": "Béisbol"
    },
    {
        "q": "¿Es cierto que cuántos hoyos se juegan en una ronda estándar completa de golf?",
        "category": "deportes",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué tenista español ha ganado más títulos de Grand Slam en la historia? (Parte 2)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Rafael Nadal"
        ],
        "options": [
            "Carlos Alcaraz",
            "Rafael Nadal",
            "David Ferrer",
            "Feliciano López"
        ],
        "answer": "Rafael Nadal"
    },
    {
        "q": "¿Cómo se llama el campeonato de automovilismo más importante y prestigioso del mundo? (Parte 2)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fórmula 1"
        ],
        "options": [
            "MotoGP",
            "Fórmula 1",
            "Rally Dakar",
            "IndyCar"
        ],
        "answer": "Fórmula 1"
    },
    {
        "q": "¿En qué deporte se utiliza el término 'slam dunk'? (Parte 2)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Voleibol",
            "Tenis",
            "Rugby"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Es cierto que cuántos jugadores hay en la pista por cada equipo en un partido de baloncesto oficial?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país albergó los Juegos Olímpicos de Verano en el año 2008? (Parte 2)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "China"
        ],
        "options": [
            "Grecia",
            "China",
            "Reino Unido",
            "Brasil"
        ],
        "answer": "China"
    },
    {
        "q": "¿En qué año se aprobó la actual Constitución Española? (Parte 2)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1978"
        ],
        "options": [
            "1978",
            "1975",
            "1981",
            "1976"
        ],
        "answer": "1978"
    },
    {
        "q": "¿En qué año llegó Cristóbal Colón a América? (Parte 2)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1492"
        ],
        "options": [
            "1492",
            "1498",
            "1519",
            "1488"
        ],
        "answer": "1492"
    },
    {
        "q": "¿Es cierto que en qué año comenzó la revolución francesa?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué año terminó la Guerra Civil Española? (Parte 2)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1936",
            "1945",
            "1931"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año comenzó la Segunda Guerra Mundial? (Parte 2)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1941",
            "1914",
            "1936"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año cayó el Imperio Romano de Occidente? (Parte 2)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "476"
        ],
        "options": [
            "476",
            "1453",
            "313",
            "711"
        ],
        "answer": "476"
    },
    {
        "q": "¿Es cierto que qué muro cayó en 1989 simbolizando el fin de la guerra fría?",
        "category": "historia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país europeo inició la Revolución Industrial en el siglo XVIII? (Parte 2)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gran Bretaña"
        ],
        "options": [
            "Gran Bretaña",
            "Francia",
            "Alemania",
            "España"
        ],
        "answer": "Gran Bretaña"
    },
    {
        "q": "¿Qué emperador francés fue derrotado definitivamente en Waterloo en 1815? (Parte 2)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Napoleón Bonaparte"
        ],
        "options": [
            "Napoleón Bonaparte",
            "Julio César",
            "Luis XIV",
            "Carlomagno"
        ],
        "answer": "Napoleón Bonaparte"
    },
    {
        "q": "¿Quién fue el líder de la Revolución Rusa de 1917? (Parte 2)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Vladimir Lenin"
        ],
        "options": [
            "Vladimir Lenin",
            "Iósif Stalin",
            "León Trotski",
            "Zar Nicolás II"
        ],
        "answer": "Vladimir Lenin"
    },
    {
        "q": "¿Es cierto que qué civilización antigua construyó el impresionante imperio con capital en machu picchu?",
        "category": "historia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién fue el primer emperador del Imperio Romano? (Parte 2)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Augusto"
        ],
        "options": [
            "Julio César",
            "Augusto",
            "Nerón",
            "Trajano"
        ],
        "answer": "Augusto"
    },
    {
        "q": "¿En qué siglo se produjo la caída de Constantinopla a manos del Imperio Otomano? (Parte 2)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Siglo XV"
        ],
        "options": [
            "Siglo XIV",
            "Siglo XV",
            "Siglo XVI",
            "Siglo XIII"
        ],
        "answer": "Siglo XV"
    },
    {
        "q": "¿Qué reina española financió el viaje de Cristóbal Colón hacia las Indias? (Parte 2)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Isabel la Católica"
        ],
        "options": [
            "Isabel la Católica",
            "Juana la Loca",
            "Isabel II",
            "María Luisa de Parma"
        ],
        "answer": "Isabel la Católica"
    },
    {
        "q": "¿Es cierto que qué tratado puso fin formalmente a la primera guerra mundial en 1919?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el pico más alto de España (situado en Tenerife)? (Parte 2)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Teide"
        ],
        "options": [
            "Teide",
            "Mulhacén",
            "Aneto",
            "Veleta"
        ],
        "answer": "Teide"
    },
    {
        "q": "¿Cuál es el río más largo de la Península Ibérica? (Parte 2)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tajo"
        ],
        "options": [
            "Tajo",
            "Ebro",
            "Duero",
            "Guadalquivir"
        ],
        "answer": "Tajo"
    },
    {
        "q": "¿Cuál es el río más caudaloso de España? (Parte 2)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Ebro"
        ],
        "options": [
            "Ebro",
            "Tajo",
            "Duero",
            "Guadiana"
        ],
        "answer": "Ebro"
    },
    {
        "q": "¿Es cierto que qué cordillera separa naturalmente españa de francia?",
        "category": "geografia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el océano más grande del planeta Tierra? (Parte 2)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Océano Pacífico"
        ],
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "answer": "Océano Pacífico"
    },
    {
        "q": "¿Cuál es el río más largo del mundo? (Parte 2)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "El Nilo / Amazonas"
        ],
        "options": [
            "El Nilo / Amazonas",
            "El Danubio",
            "El Misisipi",
            "El Volga"
        ],
        "answer": "El Nilo / Amazonas"
    },
    {
        "q": "¿Cuál es la capital de Australia? (Parte 2)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Canberra"
        ],
        "options": [
            "Canberra",
            "Sídney",
            "Melbourne",
            "Brisbane"
        ],
        "answer": "Canberra"
    },
    {
        "q": "¿Es cierto que qué país tiene mayor superficie en todo el mundo?",
        "category": "geografia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué continente se encuentra el desierto del Sahara? (Parte 2)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "África"
        ],
        "options": [
            "África",
            "Asia",
            "América",
            "Oceanía"
        ],
        "answer": "África"
    },
    {
        "q": "¿Cuál es la capital de Italia? (Parte 2)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Roma"
        ],
        "options": [
            "Roma",
            "Milán",
            "Nápoles",
            "Florencia"
        ],
        "answer": "Roma"
    },
    {
        "q": "¿Cuál es la capital de Japón? (Parte 2)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tokio"
        ],
        "options": [
            "Tokio",
            "Kioto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": "Tokio"
    },
    {
        "q": "¿Es cierto que en qué país se encuentra la famosa ciudad histórica de machu picchu?",
        "category": "geografia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué mar baña las costas orientales de la península ibérica? (Parte 2)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Mar Mediterráneo"
        ],
        "options": [
            "Mar Mediterráneo",
            "Mar Cantábrico",
            "Océano Atlántico",
            "Mar Báltico"
        ],
        "answer": "Mar Mediterráneo"
    },
    {
        "q": "¿Cuál es la capital de Argentina? (Parte 2)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Buenos Aires"
        ],
        "options": [
            "Buenos Aires",
            "Córdoba",
            "Rosario",
            "Mendoza"
        ],
        "answer": "Buenos Aires"
    },
    {
        "q": "¿Qué estrecho separa el continente europeo del africano? (Parte 2)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Estrecho de Gibraltar"
        ],
        "options": [
            "Estrecho de Gibraltar",
            "Estrecho de Bering",
            "Canal de la Mancha",
            "Estrecho de Mesina"
        ],
        "answer": "Estrecho de Gibraltar"
    },
    {
        "q": "¿Es cierto que cuál es la unidad básica de los seres vivos?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué planeta del Sistema Solar es conocido como el planeta rojo? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Marte"
        ],
        "options": [
            "Marte",
            "Júpiter",
            "Venus",
            "Saturno"
        ],
        "answer": "Marte"
    },
    {
        "q": "¿Cuál es el símbolo químico del oro en la tabla periódica? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Au"
        ],
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": "Au"
    },
    {
        "q": "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Nitrógeno"
        ],
        "options": [
            "Nitrógeno",
            "Oxígeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "answer": "Nitrógeno"
    },
    {
        "q": "¿Es cierto que qué científico formuló la teoría de la relatividad?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el hueso más largo del cuerpo humano? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fémur"
        ],
        "options": [
            "Fémur",
            "Tibia",
            "Húmero",
            "Peroné"
        ],
        "answer": "Fémur"
    },
    {
        "q": "¿Qué órgano del cuerpo humano produce la insulina? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Páncreas"
        ],
        "options": [
            "Páncreas",
            "Hígado",
            "Riñón",
            "Estómago"
        ],
        "answer": "Páncreas"
    },
    {
        "q": "¿Qué partícula del átomo tiene carga eléctrica negativa? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Electrón"
        ],
        "options": [
            "Electrón",
            "Protón",
            "Neutrón",
            "Positrón"
        ],
        "answer": "Electrón"
    },
    {
        "q": "¿Es cierto que qué fuerza atrae a los objetos hacia el centro de la tierra?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el símbolo químico del agua? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "H2O"
        ],
        "options": [
            "H2O",
            "CO2",
            "O2",
            "NaCl"
        ],
        "answer": "H2O"
    },
    {
        "q": "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Mitocondria"
        ],
        "options": [
            "Mitocondria",
            "Cloroplasto",
            "Ribosoma",
            "Vacuola"
        ],
        "answer": "Mitocondria"
    },
    {
        "q": "¿Qué base nitrogenada del ARN sustituye a la timina presente en el ADN? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Uracilo"
        ],
        "options": [
            "Uracilo",
            "Adenina",
            "Guanina",
            "Citosina"
        ],
        "answer": "Uracilo"
    },
    {
        "q": "¿Es cierto que cómo se llaman las proteínas que actúan como catalizadores acelerando las reacciones bioquímicas?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué científico británico descubrió la penicilina en 1928? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alexander Fleming"
        ],
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Marie Curie"
        ],
        "answer": "Alexander Fleming"
    },
    {
        "q": "¿Qué científica pionera ganó dos premios Nobel en campos diferentes (Física y Química)? (Parte 2)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Marie Curie"
        ],
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "answer": "Marie Curie"
    },
    {
        "q": "¿Quién escribió 'Don Quijote de la Mancha'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Miguel de Cervantes"
        ],
        "options": [
            "Miguel de Cervantes",
            "Lope de Vega",
            "Quevedo",
            "Góngora"
        ],
        "answer": "Miguel de Cervantes"
    },
    {
        "q": "¿Es cierto que quién escribió 'la casa de bernarda alba'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'Las Meninas'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Diego Velázquez"
        ],
        "options": [
            "Diego Velázquez",
            "Francisco de Goya",
            "El Greco",
            "Murillo"
        ],
        "answer": "Diego Velázquez"
    },
    {
        "q": "¿Quién pintó el cuadro 'Guernica'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Pablo Picasso"
        ],
        "options": [
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró",
            "Juan Gris"
        ],
        "answer": "Pablo Picasso"
    },
    {
        "q": "¿Quién es el autor de la novela 'Cien años de soledad'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gabriel García Márquez"
        ],
        "options": [
            "Gabriel García Márquez",
            "Mario Vargas Llosa",
            "Julio Cortázar",
            "Jorge Luis Borges"
        ],
        "answer": "Gabriel García Márquez"
    },
    {
        "q": "¿Es cierto que qué autor inglés escribió la famosa obra de teatro 'romeo y julieta'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'La Mona Lisa' (La Gioconda)? (Parte 2)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Leonardo da Vinci"
        ],
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael Sanzio",
            "Botticelli"
        ],
        "answer": "Leonardo da Vinci"
    },
    {
        "q": "¿Quién escribió la novela corta 'El principito'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Antoine de Saint-Exupéry"
        ],
        "options": [
            "Antoine de Saint-Exupéry",
            "Jules Verne",
            "Victor Hugo",
            "Albert Camus"
        ],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "q": "¿Quién pintó 'La persistencia de la memoria' con los relojes blandos? (Parte 2)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Salvador Dalí"
        ],
        "options": [
            "Salvador Dalí",
            "Pablo Picasso",
            "Joan Miró",
            "René Magritte"
        ],
        "answer": "Salvador Dalí"
    },
    {
        "q": "¿Es cierto que qué poeta andaluz escribió 'platero y yo'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué autor escribió la trágica obra 'La Celestina'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Fernando de Rojas"
        ],
        "options": [
            "Fernando de Rojas",
            "Miguel de Cervantes",
            "Lope de Vega",
            "Arcipreste de Hita"
        ],
        "answer": "Fernando de Rojas"
    },
    {
        "q": "¿Qué escritor de la Generación del 98 escribió 'Niebla' y 'San Manuel Bueno, mártir'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Miguel de Unamuno"
        ],
        "options": [
            "Miguel de Unamuno",
            "Pío Baroja",
            "Azorín",
            "Valle-Inclán"
        ],
        "answer": "Miguel de Unamuno"
    },
    {
        "q": "¿Qué autor del Siglo de Oro escribió la famosa obra teatral 'La vida es sueño'? (Parte 2)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Calderón de la Barca"
        ],
        "options": [
            "Calderón de la Barca",
            "Lope de Vega",
            "Tirso de Molina",
            "Cervantes"
        ],
        "answer": "Calderón de la Barca"
    },
    {
        "q": "¿Es cierto que quién esculpió el famosísimo 'david' de mármol que se encuentra en florencia?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué arquitecto modernista diseñó el templo de la Sagrada Familia en Barcelona? (Parte 2)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Antoni Gaudí"
        ],
        "options": [
            "Antoni Gaudí",
            "Santiago Calatrava",
            "Juan de Villanueva",
            "Moneo"
        ],
        "answer": "Antoni Gaudí"
    },
    {
        "q": "¿Qué filósofo griego fue maestro de Alejandro Magno? (Parte 2)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Aristóteles"
        ],
        "options": [
            "Aristóteles",
            "Platón",
            "Sócrates",
            "Epicuro"
        ],
        "answer": "Aristóteles"
    },
    {
        "q": "¿Cómo se llama el impuesto indirecto que grava el consumo en España? (Parte 2)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "IVA"
        ],
        "options": [
            "IVA",
            "IRPF",
            "IBI",
            "IS"
        ],
        "answer": "IVA"
    },
    {
        "q": "¿Es cierto que qué ideología política defendía karl marx junto a friedrich engels?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol sobre el campo? (Parte 2)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "11",
            "7",
            "5",
            "9"
        ],
        "answer": "11"
    },
    {
        "q": "¿En qué país se originaron los Juegos Olímpicos en la antigüedad? (Parte 2)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Grecia"
        ],
        "options": [
            "Grecia",
            "Italia",
            "Egipto",
            "Francia"
        ],
        "answer": "Grecia"
    },
    {
        "q": "¿Qué moneda oficial se utiliza en la mayor parte de la Unión Europea? (Parte 2)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Euro"
        ],
        "options": [
            "Euro",
            "Dólar",
            "Libra",
            "Franco"
        ],
        "answer": "Euro"
    },
    {
        "q": "¿Es cierto que qué organismo internacional se fundó en 1945 para mantener la paz mundial?",
        "category": "culturageneral",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad se encuentra la famosa Torre Eiffel? (Parte 2)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "París"
        ],
        "options": [
            "París",
            "Londres",
            "Roma",
            "Berlín"
        ],
        "answer": "París"
    },
    {
        "q": "¿Qué deporte se practica en la NBA? (Parte 2)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Fútbol",
            "Béisbol",
            "Tenis"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Cuál es el idioma más hablado del mundo como lengua nativa? (Parte 2)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Chino mandarín"
        ],
        "options": [
            "Chino mandarín",
            "Español",
            "Inglés",
            "Hindi"
        ],
        "answer": "Chino mandarín"
    },
    {
        "q": "¿Es cierto que de qué color es el icónico erizo protagonista de los videojuegos de sega, sonic?",
        "category": "culturageneral",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué compañía de videojuegos creó al famoso personaje fontanero Mario Bros? (Parte 2)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nintendo"
        ],
        "options": [
            "Sega",
            "Sony",
            "Nintendo",
            "Microsoft"
        ],
        "answer": "Nintendo"
    },
    {
        "q": "¿Cuántos colores principales forman tradicionalmente un arcoíris visible? (Parte 2)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "7"
        ],
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7"
    },
    {
        "q": "¿Cuál es la moneda oficial de Japón? (Parte 2)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Yen"
        ],
        "options": [
            "Yuan",
            "Dólar",
            "Yen",
            "Euro"
        ],
        "answer": "Yen"
    },
    {
        "q": "¿Es cierto que de qué nacionalidad era el célebre pintor y escultor cubista pablo picasso?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el famoso vaquero de la película 'Toy Story'? (Parte 3)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Woody"
        ],
        "options": [
            "Buzz Lightyear",
            "Woody",
            "Rex",
            "Andy"
        ],
        "answer": "Woody"
    },
    {
        "q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel? (Parte 3)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Robert Downey Jr."
        ],
        "options": [
            "Chris Evans",
            "Chris Hemsworth",
            "Robert Downey Jr.",
            "Mark Ruffalo"
        ],
        "answer": "Robert Downey Jr."
    },
    {
        "q": "¿Cuál es el nombre del pez payaso que busca su padre en una conocida película animada? (Parte 3)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nemo"
        ],
        "options": [
            "Dory",
            "Marlin",
            "Nemo",
            "Gill"
        ],
        "answer": "Nemo"
    },
    {
        "q": "¿Es cierto que en qué saga de películas aparece el maestro yoda?",
        "category": "cine",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama la escuela de magia a la que asiste Harry Potter? (Parte 3)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Hogwarts"
        ],
        "options": [
            "Beauxbatons",
            "Durmstrang",
            "Hogwarts",
            "Ilvermorny"
        ],
        "answer": "Hogwarts"
    },
    {
        "q": "¿Quién dirigió la famosa película 'Jurassic Park' estrenada en 1993? (Parte 3)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Steven Spielberg"
        ],
        "options": [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Martin Scorsese"
        ],
        "answer": "Steven Spielberg"
    },
    {
        "q": "¿Cuál es el nombre del ogro verde protagonista de la saga de DreamWorks? (Parte 3)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Shrek"
        ],
        "options": [
            "Asno",
            "Shrek",
            "Fiona",
            "Gato con Botas"
        ],
        "answer": "Shrek"
    },
    {
        "q": "¿Es cierto que qué actor encarnó al célebre pirata jack sparrow en 'piratas del caribe'?",
        "category": "cine",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el león protagonista de 'El Rey León'? (Parte 3)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Simba"
        ],
        "options": [
            "Mufasa",
            "Scar",
            "Simba",
            "Timón"
        ],
        "answer": "Simba"
    },
    {
        "q": "¿Qué objeto mágico utiliza Dorothy en 'El mago de Oz' para regresar a casa? (Parte 3)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Unas zapatillas rojas"
        ],
        "options": [
            "Un sombrero mágico",
            "Unas zapatillas rojas",
            "Una varita",
            "Un anillo"
        ],
        "answer": "Unas zapatillas rojas"
    },
    {
        "q": "¿Qué actor interpreta al agente secreto James Bond en 'Casino Royale' (2006)? (Parte 3)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Daniel Craig"
        ],
        "options": [
            "Pierce Brosnan",
            "Daniel Craig",
            "Sean Connery",
            "Roger Moore"
        ],
        "answer": "Daniel Craig"
    },
    {
        "q": "¿Es cierto que cómo se llama el archienemigo de batman en gotham?",
        "category": "cine",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad viven los personajes de la serie animada 'Los Simpson'? (Parte 3)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Springfield"
        ],
        "options": [
            "Shelbyville",
            "Springfield",
            "Capital City",
            "Ogdenville"
        ],
        "answer": "Springfield"
    },
    {
        "q": "¿Qué hobbit es el portador del Anillo Único en 'El Señor de los Anillos'? (Parte 3)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Frodo Bolsón"
        ],
        "options": [
            "Bilbo Bolsón",
            "Frodo Bolsón",
            "Sam Gamyi",
            "Pippin Tuk"
        ],
        "answer": "Frodo Bolsón"
    },
    {
        "q": "¿Quién es el director de las películas de fantasía 'El viaje de Chihiro' y 'Mi vecino Totoro'? (Parte 3)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Hayao Miyazaki"
        ],
        "options": [
            "Hayao Miyazaki",
            "Makoto Shinkai",
            "Isao Takahata",
            "Mamoru Hosoda"
        ],
        "answer": "Hayao Miyazaki"
    },
    {
        "q": "¿Es cierto que de qué país era originaria la legendaria banda de rock the beatles?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el instrumento de teclado principal que toca tradicionalmente un pianista? (Parte 3)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Piano"
        ],
        "options": [
            "Guitarra",
            "Batería",
            "Piano",
            "Violín"
        ],
        "answer": "Piano"
    },
    {
        "q": "¿Qué artista es conocido mundialmente como 'El Rey del Pop'? (Parte 3)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Michael Jackson"
        ],
        "options": [
            "Elvis Presley",
            "Michael Jackson",
            "Prince",
            "Freddie Mercury"
        ],
        "answer": "Michael Jackson"
    },
    {
        "q": "¿Cuántas cuerdas tiene una guitarra acústica estándar por lo general? (Parte 3)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "6"
        ],
        "options": [
            "4",
            "5",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "q": "¿Es cierto que qué género musical tradicional es originario de argentina y se baila en pareja?",
        "category": "musica",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el nombre de la famosa banda británica liderada por Freddie Mercury? (Parte 3)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Queen"
        ],
        "options": [
            "Led Zeppelin",
            "Queen",
            "Pink Floyd",
            "The Rolling Stones"
        ],
        "answer": "Queen"
    },
    {
        "q": "¿Qué instrumento musical de viento metal se asocia comúnmente con el jazz clásico? (Parte 3)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Saxofón"
        ],
        "options": [
            "Flauta traversa",
            "Saxofón",
            "Violonchelo",
            "Clarinete"
        ],
        "answer": "Saxofón"
    },
    {
        "q": "¿De qué nacionalidad era el célebre compositor clásico Ludwig van Beethoven? (Parte 3)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemana"
        ],
        "options": [
            "Austriaca",
            "Alemana",
            "Italiana",
            "Francesa"
        ],
        "answer": "Alemana"
    },
    {
        "q": "¿Es cierto que qué nombre recibe el grupo musical coreano (k-pop) con mayor impacto global en la actualidad?",
        "category": "musica",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Con qué se toca habitualmente la guitarra eléctrica para rasguear las cuerdas de forma precisa? (Parte 3)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Una púa o pletro"
        ],
        "options": [
            "Una púa o pletro",
            "Un arco",
            "Baquetas",
            "Los dedos exclusivamente"
        ],
        "answer": "Una púa o pletro"
    },
    {
        "q": "¿Qué famosa cantante colombiana interpreta el tema 'Hips Don't Lie'? (Parte 3)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Shrakira"
        ],
        "options": [
            "Shakira",
            "Rosalía",
            "Karol G",
            "Jennifer Lopez"
        ],
        "answer": "Shakira"
    },
    {
        "q": "¿Cuál es la banda de rock británica famosa por su logotipo de la lengua y los labios rojos? (Parte 3)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "The Rolling Stones"
        ],
        "options": [
            "The Beatles",
            "The Rolling Stones",
            "AC/DC",
            "Pink Floyd"
        ],
        "answer": "The Rolling Stones"
    },
    {
        "q": "¿Es cierto que qué instrumento de percusión compone la base del ritmo junto al bombo en una batería?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué famoso festival de música masiva se celebra cada año en un desierto de California? (Parte 3)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Coachella"
        ],
        "options": [
            "Glastonbury",
            "Coachella",
            "Rock in Rio",
            "Tomorrowland"
        ],
        "answer": "Coachella"
    },
    {
        "q": "¿Qué legendario guitarrista zurdo destacó en el festival de Woodstock de 1969? (Parte 3)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Jimi Hendrix"
        ],
        "options": [
            "Eric Clapton",
            "Jimi Hendrix",
            "Jimmy Page",
            "Carlos Santana"
        ],
        "answer": "Jimi Hendrix"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol en el terreno de juego durante un partido oficial? (Parte 3)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "11"
    },
    {
        "q": "¿Es cierto que en qué deporte se utiliza una raqueta y una pequeña pelota para pasarla por encima de una red?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cada cuántos años se celebran los Juegos Olímpicos de verano? (Parte 3)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "4 años"
        ],
        "options": [
            "2 años",
            "3 años",
            "4 años",
            "5 años"
        ],
        "answer": "4 años"
    },
    {
        "q": "¿En qué país se originó el sumo, deporte de lucha tradicional? (Parte 3)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Japón"
        ],
        "options": [
            "China",
            "Corea del Sur",
            "Japón",
            "Mongolia"
        ],
        "answer": "Japón"
    },
    {
        "q": "¿Cuántos puntos vale una canasta libre básica en el baloncesto? (Parte 3)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "1"
        ],
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "1"
    },
    {
        "q": "¿Es cierto que en qué deporte compiten los equipos por la famosa 'stanley cup'?",
        "category": "deportes",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el evento deportivo ciclista más famoso del mundo celebrado en Francia? (Parte 3)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Tour de Francia"
        ],
        "options": [
            "Giro de Italia",
            "Vuelta a España",
            "Tour de Francia",
            "Milán-San Remo"
        ],
        "answer": "Tour de Francia"
    },
    {
        "q": "¿Qué país ganó la Copa Mundial de Fútbol de la FIFA en el año 2014? (Parte 3)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemania"
        ],
        "options": [
            "Brasil",
            "Argentina",
            "Alemania",
            "España"
        ],
        "answer": "Alemania"
    },
    {
        "q": "¿Cuál es el deporte nacional de los Estados Unidos que se juega con bate y manopla? (Parte 3)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Béisbol"
        ],
        "options": [
            "Fútbol americano",
            "Béisbol",
            "Baloncesto",
            "Hockey"
        ],
        "answer": "Béisbol"
    },
    {
        "q": "¿Es cierto que cuántos hoyos se juegan en una ronda estándar completa de golf?",
        "category": "deportes",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué tenista español ha ganado más títulos de Grand Slam en la historia? (Parte 3)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Rafael Nadal"
        ],
        "options": [
            "Carlos Alcaraz",
            "Rafael Nadal",
            "David Ferrer",
            "Feliciano López"
        ],
        "answer": "Rafael Nadal"
    },
    {
        "q": "¿Cómo se llama el campeonato de automovilismo más importante y prestigioso del mundo? (Parte 3)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fórmula 1"
        ],
        "options": [
            "MotoGP",
            "Fórmula 1",
            "Rally Dakar",
            "IndyCar"
        ],
        "answer": "Fórmula 1"
    },
    {
        "q": "¿En qué deporte se utiliza el término 'slam dunk'? (Parte 3)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Voleibol",
            "Tenis",
            "Rugby"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Es cierto que cuántos jugadores hay en la pista por cada equipo en un partido de baloncesto oficial?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país albergó los Juegos Olímpicos de Verano en el año 2008? (Parte 3)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "China"
        ],
        "options": [
            "Grecia",
            "China",
            "Reino Unido",
            "Brasil"
        ],
        "answer": "China"
    },
    {
        "q": "¿En qué año se aprobó la actual Constitución Española? (Parte 3)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1978"
        ],
        "options": [
            "1978",
            "1975",
            "1981",
            "1976"
        ],
        "answer": "1978"
    },
    {
        "q": "¿En qué año llegó Cristóbal Colón a América? (Parte 3)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1492"
        ],
        "options": [
            "1492",
            "1498",
            "1519",
            "1488"
        ],
        "answer": "1492"
    },
    {
        "q": "¿Es cierto que en qué año comenzó la revolución francesa?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué año terminó la Guerra Civil Española? (Parte 3)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1936",
            "1945",
            "1931"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año comenzó la Segunda Guerra Mundial? (Parte 3)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1941",
            "1914",
            "1936"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año cayó el Imperio Romano de Occidente? (Parte 3)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "476"
        ],
        "options": [
            "476",
            "1453",
            "313",
            "711"
        ],
        "answer": "476"
    },
    {
        "q": "¿Es cierto que qué muro cayó en 1989 simbolizando el fin de la guerra fría?",
        "category": "historia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país europeo inició la Revolución Industrial en el siglo XVIII? (Parte 3)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gran Bretaña"
        ],
        "options": [
            "Gran Bretaña",
            "Francia",
            "Alemania",
            "España"
        ],
        "answer": "Gran Bretaña"
    },
    {
        "q": "¿Qué emperador francés fue derrotado definitivamente en Waterloo en 1815? (Parte 3)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Napoleón Bonaparte"
        ],
        "options": [
            "Napoleón Bonaparte",
            "Julio César",
            "Luis XIV",
            "Carlomagno"
        ],
        "answer": "Napoleón Bonaparte"
    },
    {
        "q": "¿Quién fue el líder de la Revolución Rusa de 1917? (Parte 3)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Vladimir Lenin"
        ],
        "options": [
            "Vladimir Lenin",
            "Iósif Stalin",
            "León Trotski",
            "Zar Nicolás II"
        ],
        "answer": "Vladimir Lenin"
    },
    {
        "q": "¿Es cierto que qué civilización antigua construyó el impresionante imperio con capital en machu picchu?",
        "category": "historia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién fue el primer emperador del Imperio Romano? (Parte 3)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Augusto"
        ],
        "options": [
            "Julio César",
            "Augusto",
            "Nerón",
            "Trajano"
        ],
        "answer": "Augusto"
    },
    {
        "q": "¿En qué siglo se produjo la caída de Constantinopla a manos del Imperio Otomano? (Parte 3)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Siglo XV"
        ],
        "options": [
            "Siglo XIV",
            "Siglo XV",
            "Siglo XVI",
            "Siglo XIII"
        ],
        "answer": "Siglo XV"
    },
    {
        "q": "¿Qué reina española financió el viaje de Cristóbal Colón hacia las Indias? (Parte 3)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Isabel la Católica"
        ],
        "options": [
            "Isabel la Católica",
            "Juana la Loca",
            "Isabel II",
            "María Luisa de Parma"
        ],
        "answer": "Isabel la Católica"
    },
    {
        "q": "¿Es cierto que qué tratado puso fin formalmente a la primera guerra mundial en 1919?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el pico más alto de España (situado en Tenerife)? (Parte 3)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Teide"
        ],
        "options": [
            "Teide",
            "Mulhacén",
            "Aneto",
            "Veleta"
        ],
        "answer": "Teide"
    },
    {
        "q": "¿Cuál es el río más largo de la Península Ibérica? (Parte 3)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tajo"
        ],
        "options": [
            "Tajo",
            "Ebro",
            "Duero",
            "Guadalquivir"
        ],
        "answer": "Tajo"
    },
    {
        "q": "¿Cuál es el río más caudaloso de España? (Parte 3)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Ebro"
        ],
        "options": [
            "Ebro",
            "Tajo",
            "Duero",
            "Guadiana"
        ],
        "answer": "Ebro"
    },
    {
        "q": "¿Es cierto que qué cordillera separa naturalmente españa de francia?",
        "category": "geografia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el océano más grande del planeta Tierra? (Parte 3)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Océano Pacífico"
        ],
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "answer": "Océano Pacífico"
    },
    {
        "q": "¿Cuál es el río más largo del mundo? (Parte 3)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "El Nilo / Amazonas"
        ],
        "options": [
            "El Nilo / Amazonas",
            "El Danubio",
            "El Misisipi",
            "El Volga"
        ],
        "answer": "El Nilo / Amazonas"
    },
    {
        "q": "¿Cuál es la capital de Australia? (Parte 3)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Canberra"
        ],
        "options": [
            "Canberra",
            "Sídney",
            "Melbourne",
            "Brisbane"
        ],
        "answer": "Canberra"
    },
    {
        "q": "¿Es cierto que qué país tiene mayor superficie en todo el mundo?",
        "category": "geografia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué continente se encuentra el desierto del Sahara? (Parte 3)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "África"
        ],
        "options": [
            "África",
            "Asia",
            "América",
            "Oceanía"
        ],
        "answer": "África"
    },
    {
        "q": "¿Cuál es la capital de Italia? (Parte 3)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Roma"
        ],
        "options": [
            "Roma",
            "Milán",
            "Nápoles",
            "Florencia"
        ],
        "answer": "Roma"
    },
    {
        "q": "¿Cuál es la capital de Japón? (Parte 3)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tokio"
        ],
        "options": [
            "Tokio",
            "Kioto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": "Tokio"
    },
    {
        "q": "¿Es cierto que en qué país se encuentra la famosa ciudad histórica de machu picchu?",
        "category": "geografia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué mar baña las costas orientales de la península ibérica? (Parte 3)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Mar Mediterráneo"
        ],
        "options": [
            "Mar Mediterráneo",
            "Mar Cantábrico",
            "Océano Atlántico",
            "Mar Báltico"
        ],
        "answer": "Mar Mediterráneo"
    },
    {
        "q": "¿Cuál es la capital de Argentina? (Parte 3)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Buenos Aires"
        ],
        "options": [
            "Buenos Aires",
            "Córdoba",
            "Rosario",
            "Mendoza"
        ],
        "answer": "Buenos Aires"
    },
    {
        "q": "¿Qué estrecho separa el continente europeo del africano? (Parte 3)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Estrecho de Gibraltar"
        ],
        "options": [
            "Estrecho de Gibraltar",
            "Estrecho de Bering",
            "Canal de la Mancha",
            "Estrecho de Mesina"
        ],
        "answer": "Estrecho de Gibraltar"
    },
    {
        "q": "¿Es cierto que cuál es la unidad básica de los seres vivos?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué planeta del Sistema Solar es conocido como el planeta rojo? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Marte"
        ],
        "options": [
            "Marte",
            "Júpiter",
            "Venus",
            "Saturno"
        ],
        "answer": "Marte"
    },
    {
        "q": "¿Cuál es el símbolo químico del oro en la tabla periódica? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Au"
        ],
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": "Au"
    },
    {
        "q": "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Nitrógeno"
        ],
        "options": [
            "Nitrógeno",
            "Oxígeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "answer": "Nitrógeno"
    },
    {
        "q": "¿Es cierto que qué científico formuló la teoría de la relatividad?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el hueso más largo del cuerpo humano? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fémur"
        ],
        "options": [
            "Fémur",
            "Tibia",
            "Húmero",
            "Peroné"
        ],
        "answer": "Fémur"
    },
    {
        "q": "¿Qué órgano del cuerpo humano produce la insulina? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Páncreas"
        ],
        "options": [
            "Páncreas",
            "Hígado",
            "Riñón",
            "Estómago"
        ],
        "answer": "Páncreas"
    },
    {
        "q": "¿Qué partícula del átomo tiene carga eléctrica negativa? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Electrón"
        ],
        "options": [
            "Electrón",
            "Protón",
            "Neutrón",
            "Positrón"
        ],
        "answer": "Electrón"
    },
    {
        "q": "¿Es cierto que qué fuerza atrae a los objetos hacia el centro de la tierra?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el símbolo químico del agua? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "H2O"
        ],
        "options": [
            "H2O",
            "CO2",
            "O2",
            "NaCl"
        ],
        "answer": "H2O"
    },
    {
        "q": "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Mitocondria"
        ],
        "options": [
            "Mitocondria",
            "Cloroplasto",
            "Ribosoma",
            "Vacuola"
        ],
        "answer": "Mitocondria"
    },
    {
        "q": "¿Qué base nitrogenada del ARN sustituye a la timina presente en el ADN? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Uracilo"
        ],
        "options": [
            "Uracilo",
            "Adenina",
            "Guanina",
            "Citosina"
        ],
        "answer": "Uracilo"
    },
    {
        "q": "¿Es cierto que cómo se llaman las proteínas que actúan como catalizadores acelerando las reacciones bioquímicas?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué científico británico descubrió la penicilina en 1928? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alexander Fleming"
        ],
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Marie Curie"
        ],
        "answer": "Alexander Fleming"
    },
    {
        "q": "¿Qué científica pionera ganó dos premios Nobel en campos diferentes (Física y Química)? (Parte 3)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Marie Curie"
        ],
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "answer": "Marie Curie"
    },
    {
        "q": "¿Quién escribió 'Don Quijote de la Mancha'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Miguel de Cervantes"
        ],
        "options": [
            "Miguel de Cervantes",
            "Lope de Vega",
            "Quevedo",
            "Góngora"
        ],
        "answer": "Miguel de Cervantes"
    },
    {
        "q": "¿Es cierto que quién escribió 'la casa de bernarda alba'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'Las Meninas'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Diego Velázquez"
        ],
        "options": [
            "Diego Velázquez",
            "Francisco de Goya",
            "El Greco",
            "Murillo"
        ],
        "answer": "Diego Velázquez"
    },
    {
        "q": "¿Quién pintó el cuadro 'Guernica'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Pablo Picasso"
        ],
        "options": [
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró",
            "Juan Gris"
        ],
        "answer": "Pablo Picasso"
    },
    {
        "q": "¿Quién es el autor de la novela 'Cien años de soledad'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gabriel García Márquez"
        ],
        "options": [
            "Gabriel García Márquez",
            "Mario Vargas Llosa",
            "Julio Cortázar",
            "Jorge Luis Borges"
        ],
        "answer": "Gabriel García Márquez"
    },
    {
        "q": "¿Es cierto que qué autor inglés escribió la famosa obra de teatro 'romeo y julieta'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'La Mona Lisa' (La Gioconda)? (Parte 3)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Leonardo da Vinci"
        ],
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael Sanzio",
            "Botticelli"
        ],
        "answer": "Leonardo da Vinci"
    },
    {
        "q": "¿Quién escribió la novela corta 'El principito'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Antoine de Saint-Exupéry"
        ],
        "options": [
            "Antoine de Saint-Exupéry",
            "Jules Verne",
            "Victor Hugo",
            "Albert Camus"
        ],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "q": "¿Quién pintó 'La persistencia de la memoria' con los relojes blandos? (Parte 3)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Salvador Dalí"
        ],
        "options": [
            "Salvador Dalí",
            "Pablo Picasso",
            "Joan Miró",
            "René Magritte"
        ],
        "answer": "Salvador Dalí"
    },
    {
        "q": "¿Es cierto que qué poeta andaluz escribió 'platero y yo'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué autor escribió la trágica obra 'La Celestina'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Fernando de Rojas"
        ],
        "options": [
            "Fernando de Rojas",
            "Miguel de Cervantes",
            "Lope de Vega",
            "Arcipreste de Hita"
        ],
        "answer": "Fernando de Rojas"
    },
    {
        "q": "¿Qué escritor de la Generación del 98 escribió 'Niebla' y 'San Manuel Bueno, mártir'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Miguel de Unamuno"
        ],
        "options": [
            "Miguel de Unamuno",
            "Pío Baroja",
            "Azorín",
            "Valle-Inclán"
        ],
        "answer": "Miguel de Unamuno"
    },
    {
        "q": "¿Qué autor del Siglo de Oro escribió la famosa obra teatral 'La vida es sueño'? (Parte 3)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Calderón de la Barca"
        ],
        "options": [
            "Calderón de la Barca",
            "Lope de Vega",
            "Tirso de Molina",
            "Cervantes"
        ],
        "answer": "Calderón de la Barca"
    },
    {
        "q": "¿Es cierto que quién esculpió el famosísimo 'david' de mármol que se encuentra en florencia?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué arquitecto modernista diseñó el templo de la Sagrada Familia en Barcelona? (Parte 3)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Antoni Gaudí"
        ],
        "options": [
            "Antoni Gaudí",
            "Santiago Calatrava",
            "Juan de Villanueva",
            "Moneo"
        ],
        "answer": "Antoni Gaudí"
    },
    {
        "q": "¿Qué filósofo griego fue maestro de Alejandro Magno? (Parte 3)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Aristóteles"
        ],
        "options": [
            "Aristóteles",
            "Platón",
            "Sócrates",
            "Epicuro"
        ],
        "answer": "Aristóteles"
    },
    {
        "q": "¿Cómo se llama el impuesto indirecto que grava el consumo en España? (Parte 3)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "IVA"
        ],
        "options": [
            "IVA",
            "IRPF",
            "IBI",
            "IS"
        ],
        "answer": "IVA"
    },
    {
        "q": "¿Es cierto que qué ideología política defendía karl marx junto a friedrich engels?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol sobre el campo? (Parte 3)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "11",
            "7",
            "5",
            "9"
        ],
        "answer": "11"
    },
    {
        "q": "¿En qué país se originaron los Juegos Olímpicos en la antigüedad? (Parte 3)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Grecia"
        ],
        "options": [
            "Grecia",
            "Italia",
            "Egipto",
            "Francia"
        ],
        "answer": "Grecia"
    },
    {
        "q": "¿Qué moneda oficial se utiliza en la mayor parte de la Unión Europea? (Parte 3)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Euro"
        ],
        "options": [
            "Euro",
            "Dólar",
            "Libra",
            "Franco"
        ],
        "answer": "Euro"
    },
    {
        "q": "¿Es cierto que qué organismo internacional se fundó en 1945 para mantener la paz mundial?",
        "category": "culturageneral",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad se encuentra la famosa Torre Eiffel? (Parte 3)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "París"
        ],
        "options": [
            "París",
            "Londres",
            "Roma",
            "Berlín"
        ],
        "answer": "París"
    },
    {
        "q": "¿Qué deporte se practica en la NBA? (Parte 3)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Fútbol",
            "Béisbol",
            "Tenis"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Cuál es el idioma más hablado del mundo como lengua nativa? (Parte 3)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Chino mandarín"
        ],
        "options": [
            "Chino mandarín",
            "Español",
            "Inglés",
            "Hindi"
        ],
        "answer": "Chino mandarín"
    },
    {
        "q": "¿Es cierto que de qué color es el icónico erizo protagonista de los videojuegos de sega, sonic?",
        "category": "culturageneral",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué compañía de videojuegos creó al famoso personaje fontanero Mario Bros? (Parte 3)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nintendo"
        ],
        "options": [
            "Sega",
            "Sony",
            "Nintendo",
            "Microsoft"
        ],
        "answer": "Nintendo"
    },
    {
        "q": "¿Cuántos colores principales forman tradicionalmente un arcoíris visible? (Parte 3)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "7"
        ],
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7"
    },
    {
        "q": "¿Cuál es la moneda oficial de Japón? (Parte 3)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Yen"
        ],
        "options": [
            "Yuan",
            "Dólar",
            "Yen",
            "Euro"
        ],
        "answer": "Yen"
    },
    {
        "q": "¿Es cierto que de qué nacionalidad era el célebre pintor y escultor cubista pablo picasso?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el famoso vaquero de la película 'Toy Story'? (Parte 4)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Woody"
        ],
        "options": [
            "Buzz Lightyear",
            "Woody",
            "Rex",
            "Andy"
        ],
        "answer": "Woody"
    },
    {
        "q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel? (Parte 4)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Robert Downey Jr."
        ],
        "options": [
            "Chris Evans",
            "Chris Hemsworth",
            "Robert Downey Jr.",
            "Mark Ruffalo"
        ],
        "answer": "Robert Downey Jr."
    },
    {
        "q": "¿Cuál es el nombre del pez payaso que busca su padre en una conocida película animada? (Parte 4)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nemo"
        ],
        "options": [
            "Dory",
            "Marlin",
            "Nemo",
            "Gill"
        ],
        "answer": "Nemo"
    },
    {
        "q": "¿Es cierto que en qué saga de películas aparece el maestro yoda?",
        "category": "cine",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama la escuela de magia a la que asiste Harry Potter? (Parte 4)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Hogwarts"
        ],
        "options": [
            "Beauxbatons",
            "Durmstrang",
            "Hogwarts",
            "Ilvermorny"
        ],
        "answer": "Hogwarts"
    },
    {
        "q": "¿Quién dirigió la famosa película 'Jurassic Park' estrenada en 1993? (Parte 4)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Steven Spielberg"
        ],
        "options": [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Martin Scorsese"
        ],
        "answer": "Steven Spielberg"
    },
    {
        "q": "¿Cuál es el nombre del ogro verde protagonista de la saga de DreamWorks? (Parte 4)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Shrek"
        ],
        "options": [
            "Asno",
            "Shrek",
            "Fiona",
            "Gato con Botas"
        ],
        "answer": "Shrek"
    },
    {
        "q": "¿Es cierto que qué actor encarnó al célebre pirata jack sparrow en 'piratas del caribe'?",
        "category": "cine",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el león protagonista de 'El Rey León'? (Parte 4)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Simba"
        ],
        "options": [
            "Mufasa",
            "Scar",
            "Simba",
            "Timón"
        ],
        "answer": "Simba"
    },
    {
        "q": "¿Qué objeto mágico utiliza Dorothy en 'El mago de Oz' para regresar a casa? (Parte 4)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Unas zapatillas rojas"
        ],
        "options": [
            "Un sombrero mágico",
            "Unas zapatillas rojas",
            "Una varita",
            "Un anillo"
        ],
        "answer": "Unas zapatillas rojas"
    },
    {
        "q": "¿Qué actor interpreta al agente secreto James Bond en 'Casino Royale' (2006)? (Parte 4)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Daniel Craig"
        ],
        "options": [
            "Pierce Brosnan",
            "Daniel Craig",
            "Sean Connery",
            "Roger Moore"
        ],
        "answer": "Daniel Craig"
    },
    {
        "q": "¿Es cierto que cómo se llama el archienemigo de batman en gotham?",
        "category": "cine",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad viven los personajes de la serie animada 'Los Simpson'? (Parte 4)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Springfield"
        ],
        "options": [
            "Shelbyville",
            "Springfield",
            "Capital City",
            "Ogdenville"
        ],
        "answer": "Springfield"
    },
    {
        "q": "¿Qué hobbit es el portador del Anillo Único en 'El Señor de los Anillos'? (Parte 4)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Frodo Bolsón"
        ],
        "options": [
            "Bilbo Bolsón",
            "Frodo Bolsón",
            "Sam Gamyi",
            "Pippin Tuk"
        ],
        "answer": "Frodo Bolsón"
    },
    {
        "q": "¿Quién es el director de las películas de fantasía 'El viaje de Chihiro' y 'Mi vecino Totoro'? (Parte 4)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Hayao Miyazaki"
        ],
        "options": [
            "Hayao Miyazaki",
            "Makoto Shinkai",
            "Isao Takahata",
            "Mamoru Hosoda"
        ],
        "answer": "Hayao Miyazaki"
    },
    {
        "q": "¿Es cierto que de qué país era originaria la legendaria banda de rock the beatles?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el instrumento de teclado principal que toca tradicionalmente un pianista? (Parte 4)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Piano"
        ],
        "options": [
            "Guitarra",
            "Batería",
            "Piano",
            "Violín"
        ],
        "answer": "Piano"
    },
    {
        "q": "¿Qué artista es conocido mundialmente como 'El Rey del Pop'? (Parte 4)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Michael Jackson"
        ],
        "options": [
            "Elvis Presley",
            "Michael Jackson",
            "Prince",
            "Freddie Mercury"
        ],
        "answer": "Michael Jackson"
    },
    {
        "q": "¿Cuántas cuerdas tiene una guitarra acústica estándar por lo general? (Parte 4)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "6"
        ],
        "options": [
            "4",
            "5",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "q": "¿Es cierto que qué género musical tradicional es originario de argentina y se baila en pareja?",
        "category": "musica",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el nombre de la famosa banda británica liderada por Freddie Mercury? (Parte 4)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Queen"
        ],
        "options": [
            "Led Zeppelin",
            "Queen",
            "Pink Floyd",
            "The Rolling Stones"
        ],
        "answer": "Queen"
    },
    {
        "q": "¿Qué instrumento musical de viento metal se asocia comúnmente con el jazz clásico? (Parte 4)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Saxofón"
        ],
        "options": [
            "Flauta traversa",
            "Saxofón",
            "Violonchelo",
            "Clarinete"
        ],
        "answer": "Saxofón"
    },
    {
        "q": "¿De qué nacionalidad era el célebre compositor clásico Ludwig van Beethoven? (Parte 4)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemana"
        ],
        "options": [
            "Austriaca",
            "Alemana",
            "Italiana",
            "Francesa"
        ],
        "answer": "Alemana"
    },
    {
        "q": "¿Es cierto que qué nombre recibe el grupo musical coreano (k-pop) con mayor impacto global en la actualidad?",
        "category": "musica",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Con qué se toca habitualmente la guitarra eléctrica para rasguear las cuerdas de forma precisa? (Parte 4)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Una púa o pletro"
        ],
        "options": [
            "Una púa o pletro",
            "Un arco",
            "Baquetas",
            "Los dedos exclusivamente"
        ],
        "answer": "Una púa o pletro"
    },
    {
        "q": "¿Qué famosa cantante colombiana interpreta el tema 'Hips Don't Lie'? (Parte 4)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Shrakira"
        ],
        "options": [
            "Shakira",
            "Rosalía",
            "Karol G",
            "Jennifer Lopez"
        ],
        "answer": "Shakira"
    },
    {
        "q": "¿Cuál es la banda de rock británica famosa por su logotipo de la lengua y los labios rojos? (Parte 4)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "The Rolling Stones"
        ],
        "options": [
            "The Beatles",
            "The Rolling Stones",
            "AC/DC",
            "Pink Floyd"
        ],
        "answer": "The Rolling Stones"
    },
    {
        "q": "¿Es cierto que qué instrumento de percusión compone la base del ritmo junto al bombo en una batería?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué famoso festival de música masiva se celebra cada año en un desierto de California? (Parte 4)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Coachella"
        ],
        "options": [
            "Glastonbury",
            "Coachella",
            "Rock in Rio",
            "Tomorrowland"
        ],
        "answer": "Coachella"
    },
    {
        "q": "¿Qué legendario guitarrista zurdo destacó en el festival de Woodstock de 1969? (Parte 4)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Jimi Hendrix"
        ],
        "options": [
            "Eric Clapton",
            "Jimi Hendrix",
            "Jimmy Page",
            "Carlos Santana"
        ],
        "answer": "Jimi Hendrix"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol en el terreno de juego durante un partido oficial? (Parte 4)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "11"
    },
    {
        "q": "¿Es cierto que en qué deporte se utiliza una raqueta y una pequeña pelota para pasarla por encima de una red?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cada cuántos años se celebran los Juegos Olímpicos de verano? (Parte 4)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "4 años"
        ],
        "options": [
            "2 años",
            "3 años",
            "4 años",
            "5 años"
        ],
        "answer": "4 años"
    },
    {
        "q": "¿En qué país se originó el sumo, deporte de lucha tradicional? (Parte 4)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Japón"
        ],
        "options": [
            "China",
            "Corea del Sur",
            "Japón",
            "Mongolia"
        ],
        "answer": "Japón"
    },
    {
        "q": "¿Cuántos puntos vale una canasta libre básica en el baloncesto? (Parte 4)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "1"
        ],
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "1"
    },
    {
        "q": "¿Es cierto que en qué deporte compiten los equipos por la famosa 'stanley cup'?",
        "category": "deportes",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el evento deportivo ciclista más famoso del mundo celebrado en Francia? (Parte 4)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Tour de Francia"
        ],
        "options": [
            "Giro de Italia",
            "Vuelta a España",
            "Tour de Francia",
            "Milán-San Remo"
        ],
        "answer": "Tour de Francia"
    },
    {
        "q": "¿Qué país ganó la Copa Mundial de Fútbol de la FIFA en el año 2014? (Parte 4)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemania"
        ],
        "options": [
            "Brasil",
            "Argentina",
            "Alemania",
            "España"
        ],
        "answer": "Alemania"
    },
    {
        "q": "¿Cuál es el deporte nacional de los Estados Unidos que se juega con bate y manopla? (Parte 4)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Béisbol"
        ],
        "options": [
            "Fútbol americano",
            "Béisbol",
            "Baloncesto",
            "Hockey"
        ],
        "answer": "Béisbol"
    },
    {
        "q": "¿Es cierto que cuántos hoyos se juegan en una ronda estándar completa de golf?",
        "category": "deportes",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué tenista español ha ganado más títulos de Grand Slam en la historia? (Parte 4)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Rafael Nadal"
        ],
        "options": [
            "Carlos Alcaraz",
            "Rafael Nadal",
            "David Ferrer",
            "Feliciano López"
        ],
        "answer": "Rafael Nadal"
    },
    {
        "q": "¿Cómo se llama el campeonato de automovilismo más importante y prestigioso del mundo? (Parte 4)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fórmula 1"
        ],
        "options": [
            "MotoGP",
            "Fórmula 1",
            "Rally Dakar",
            "IndyCar"
        ],
        "answer": "Fórmula 1"
    },
    {
        "q": "¿En qué deporte se utiliza el término 'slam dunk'? (Parte 4)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Voleibol",
            "Tenis",
            "Rugby"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Es cierto que cuántos jugadores hay en la pista por cada equipo en un partido de baloncesto oficial?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país albergó los Juegos Olímpicos de Verano en el año 2008? (Parte 4)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "China"
        ],
        "options": [
            "Grecia",
            "China",
            "Reino Unido",
            "Brasil"
        ],
        "answer": "China"
    },
    {
        "q": "¿En qué año se aprobó la actual Constitución Española? (Parte 4)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1978"
        ],
        "options": [
            "1978",
            "1975",
            "1981",
            "1976"
        ],
        "answer": "1978"
    },
    {
        "q": "¿En qué año llegó Cristóbal Colón a América? (Parte 4)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1492"
        ],
        "options": [
            "1492",
            "1498",
            "1519",
            "1488"
        ],
        "answer": "1492"
    },
    {
        "q": "¿Es cierto que en qué año comenzó la revolución francesa?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué año terminó la Guerra Civil Española? (Parte 4)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1936",
            "1945",
            "1931"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año comenzó la Segunda Guerra Mundial? (Parte 4)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1941",
            "1914",
            "1936"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año cayó el Imperio Romano de Occidente? (Parte 4)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "476"
        ],
        "options": [
            "476",
            "1453",
            "313",
            "711"
        ],
        "answer": "476"
    },
    {
        "q": "¿Es cierto que qué muro cayó en 1989 simbolizando el fin de la guerra fría?",
        "category": "historia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país europeo inició la Revolución Industrial en el siglo XVIII? (Parte 4)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gran Bretaña"
        ],
        "options": [
            "Gran Bretaña",
            "Francia",
            "Alemania",
            "España"
        ],
        "answer": "Gran Bretaña"
    },
    {
        "q": "¿Qué emperador francés fue derrotado definitivamente en Waterloo en 1815? (Parte 4)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Napoleón Bonaparte"
        ],
        "options": [
            "Napoleón Bonaparte",
            "Julio César",
            "Luis XIV",
            "Carlomagno"
        ],
        "answer": "Napoleón Bonaparte"
    },
    {
        "q": "¿Quién fue el líder de la Revolución Rusa de 1917? (Parte 4)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Vladimir Lenin"
        ],
        "options": [
            "Vladimir Lenin",
            "Iósif Stalin",
            "León Trotski",
            "Zar Nicolás II"
        ],
        "answer": "Vladimir Lenin"
    },
    {
        "q": "¿Es cierto que qué civilización antigua construyó el impresionante imperio con capital en machu picchu?",
        "category": "historia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién fue el primer emperador del Imperio Romano? (Parte 4)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Augusto"
        ],
        "options": [
            "Julio César",
            "Augusto",
            "Nerón",
            "Trajano"
        ],
        "answer": "Augusto"
    },
    {
        "q": "¿En qué siglo se produjo la caída de Constantinopla a manos del Imperio Otomano? (Parte 4)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Siglo XV"
        ],
        "options": [
            "Siglo XIV",
            "Siglo XV",
            "Siglo XVI",
            "Siglo XIII"
        ],
        "answer": "Siglo XV"
    },
    {
        "q": "¿Qué reina española financió el viaje de Cristóbal Colón hacia las Indias? (Parte 4)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Isabel la Católica"
        ],
        "options": [
            "Isabel la Católica",
            "Juana la Loca",
            "Isabel II",
            "María Luisa de Parma"
        ],
        "answer": "Isabel la Católica"
    },
    {
        "q": "¿Es cierto que qué tratado puso fin formalmente a la primera guerra mundial en 1919?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el pico más alto de España (situado en Tenerife)? (Parte 4)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Teide"
        ],
        "options": [
            "Teide",
            "Mulhacén",
            "Aneto",
            "Veleta"
        ],
        "answer": "Teide"
    },
    {
        "q": "¿Cuál es el río más largo de la Península Ibérica? (Parte 4)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tajo"
        ],
        "options": [
            "Tajo",
            "Ebro",
            "Duero",
            "Guadalquivir"
        ],
        "answer": "Tajo"
    },
    {
        "q": "¿Cuál es el río más caudaloso de España? (Parte 4)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Ebro"
        ],
        "options": [
            "Ebro",
            "Tajo",
            "Duero",
            "Guadiana"
        ],
        "answer": "Ebro"
    },
    {
        "q": "¿Es cierto que qué cordillera separa naturalmente españa de francia?",
        "category": "geografia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el océano más grande del planeta Tierra? (Parte 4)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Océano Pacífico"
        ],
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "answer": "Océano Pacífico"
    },
    {
        "q": "¿Cuál es el río más largo del mundo? (Parte 4)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "El Nilo / Amazonas"
        ],
        "options": [
            "El Nilo / Amazonas",
            "El Danubio",
            "El Misisipi",
            "El Volga"
        ],
        "answer": "El Nilo / Amazonas"
    },
    {
        "q": "¿Cuál es la capital de Australia? (Parte 4)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Canberra"
        ],
        "options": [
            "Canberra",
            "Sídney",
            "Melbourne",
            "Brisbane"
        ],
        "answer": "Canberra"
    },
    {
        "q": "¿Es cierto que qué país tiene mayor superficie en todo el mundo?",
        "category": "geografia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué continente se encuentra el desierto del Sahara? (Parte 4)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "África"
        ],
        "options": [
            "África",
            "Asia",
            "América",
            "Oceanía"
        ],
        "answer": "África"
    },
    {
        "q": "¿Cuál es la capital de Italia? (Parte 4)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Roma"
        ],
        "options": [
            "Roma",
            "Milán",
            "Nápoles",
            "Florencia"
        ],
        "answer": "Roma"
    },
    {
        "q": "¿Cuál es la capital de Japón? (Parte 4)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tokio"
        ],
        "options": [
            "Tokio",
            "Kioto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": "Tokio"
    },
    {
        "q": "¿Es cierto que en qué país se encuentra la famosa ciudad histórica de machu picchu?",
        "category": "geografia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué mar baña las costas orientales de la península ibérica? (Parte 4)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Mar Mediterráneo"
        ],
        "options": [
            "Mar Mediterráneo",
            "Mar Cantábrico",
            "Océano Atlántico",
            "Mar Báltico"
        ],
        "answer": "Mar Mediterráneo"
    },
    {
        "q": "¿Cuál es la capital de Argentina? (Parte 4)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Buenos Aires"
        ],
        "options": [
            "Buenos Aires",
            "Córdoba",
            "Rosario",
            "Mendoza"
        ],
        "answer": "Buenos Aires"
    },
    {
        "q": "¿Qué estrecho separa el continente europeo del africano? (Parte 4)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Estrecho de Gibraltar"
        ],
        "options": [
            "Estrecho de Gibraltar",
            "Estrecho de Bering",
            "Canal de la Mancha",
            "Estrecho de Mesina"
        ],
        "answer": "Estrecho de Gibraltar"
    },
    {
        "q": "¿Es cierto que cuál es la unidad básica de los seres vivos?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué planeta del Sistema Solar es conocido como el planeta rojo? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Marte"
        ],
        "options": [
            "Marte",
            "Júpiter",
            "Venus",
            "Saturno"
        ],
        "answer": "Marte"
    },
    {
        "q": "¿Cuál es el símbolo químico del oro en la tabla periódica? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Au"
        ],
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": "Au"
    },
    {
        "q": "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Nitrógeno"
        ],
        "options": [
            "Nitrógeno",
            "Oxígeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "answer": "Nitrógeno"
    },
    {
        "q": "¿Es cierto que qué científico formuló la teoría de la relatividad?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el hueso más largo del cuerpo humano? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fémur"
        ],
        "options": [
            "Fémur",
            "Tibia",
            "Húmero",
            "Peroné"
        ],
        "answer": "Fémur"
    },
    {
        "q": "¿Qué órgano del cuerpo humano produce la insulina? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Páncreas"
        ],
        "options": [
            "Páncreas",
            "Hígado",
            "Riñón",
            "Estómago"
        ],
        "answer": "Páncreas"
    },
    {
        "q": "¿Qué partícula del átomo tiene carga eléctrica negativa? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Electrón"
        ],
        "options": [
            "Electrón",
            "Protón",
            "Neutrón",
            "Positrón"
        ],
        "answer": "Electrón"
    },
    {
        "q": "¿Es cierto que qué fuerza atrae a los objetos hacia el centro de la tierra?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el símbolo químico del agua? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "H2O"
        ],
        "options": [
            "H2O",
            "CO2",
            "O2",
            "NaCl"
        ],
        "answer": "H2O"
    },
    {
        "q": "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Mitocondria"
        ],
        "options": [
            "Mitocondria",
            "Cloroplasto",
            "Ribosoma",
            "Vacuola"
        ],
        "answer": "Mitocondria"
    },
    {
        "q": "¿Qué base nitrogenada del ARN sustituye a la timina presente en el ADN? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Uracilo"
        ],
        "options": [
            "Uracilo",
            "Adenina",
            "Guanina",
            "Citosina"
        ],
        "answer": "Uracilo"
    },
    {
        "q": "¿Es cierto que cómo se llaman las proteínas que actúan como catalizadores acelerando las reacciones bioquímicas?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué científico británico descubrió la penicilina en 1928? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alexander Fleming"
        ],
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Marie Curie"
        ],
        "answer": "Alexander Fleming"
    },
    {
        "q": "¿Qué científica pionera ganó dos premios Nobel en campos diferentes (Física y Química)? (Parte 4)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Marie Curie"
        ],
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "answer": "Marie Curie"
    },
    {
        "q": "¿Quién escribió 'Don Quijote de la Mancha'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Miguel de Cervantes"
        ],
        "options": [
            "Miguel de Cervantes",
            "Lope de Vega",
            "Quevedo",
            "Góngora"
        ],
        "answer": "Miguel de Cervantes"
    },
    {
        "q": "¿Es cierto que quién escribió 'la casa de bernarda alba'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'Las Meninas'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Diego Velázquez"
        ],
        "options": [
            "Diego Velázquez",
            "Francisco de Goya",
            "El Greco",
            "Murillo"
        ],
        "answer": "Diego Velázquez"
    },
    {
        "q": "¿Quién pintó el cuadro 'Guernica'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Pablo Picasso"
        ],
        "options": [
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró",
            "Juan Gris"
        ],
        "answer": "Pablo Picasso"
    },
    {
        "q": "¿Quién es el autor de la novela 'Cien años de soledad'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gabriel García Márquez"
        ],
        "options": [
            "Gabriel García Márquez",
            "Mario Vargas Llosa",
            "Julio Cortázar",
            "Jorge Luis Borges"
        ],
        "answer": "Gabriel García Márquez"
    },
    {
        "q": "¿Es cierto que qué autor inglés escribió la famosa obra de teatro 'romeo y julieta'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'La Mona Lisa' (La Gioconda)? (Parte 4)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Leonardo da Vinci"
        ],
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael Sanzio",
            "Botticelli"
        ],
        "answer": "Leonardo da Vinci"
    },
    {
        "q": "¿Quién escribió la novela corta 'El principito'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Antoine de Saint-Exupéry"
        ],
        "options": [
            "Antoine de Saint-Exupéry",
            "Jules Verne",
            "Victor Hugo",
            "Albert Camus"
        ],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "q": "¿Quién pintó 'La persistencia de la memoria' con los relojes blandos? (Parte 4)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Salvador Dalí"
        ],
        "options": [
            "Salvador Dalí",
            "Pablo Picasso",
            "Joan Miró",
            "René Magritte"
        ],
        "answer": "Salvador Dalí"
    },
    {
        "q": "¿Es cierto que qué poeta andaluz escribió 'platero y yo'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué autor escribió la trágica obra 'La Celestina'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Fernando de Rojas"
        ],
        "options": [
            "Fernando de Rojas",
            "Miguel de Cervantes",
            "Lope de Vega",
            "Arcipreste de Hita"
        ],
        "answer": "Fernando de Rojas"
    },
    {
        "q": "¿Qué escritor de la Generación del 98 escribió 'Niebla' y 'San Manuel Bueno, mártir'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Miguel de Unamuno"
        ],
        "options": [
            "Miguel de Unamuno",
            "Pío Baroja",
            "Azorín",
            "Valle-Inclán"
        ],
        "answer": "Miguel de Unamuno"
    },
    {
        "q": "¿Qué autor del Siglo de Oro escribió la famosa obra teatral 'La vida es sueño'? (Parte 4)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Calderón de la Barca"
        ],
        "options": [
            "Calderón de la Barca",
            "Lope de Vega",
            "Tirso de Molina",
            "Cervantes"
        ],
        "answer": "Calderón de la Barca"
    },
    {
        "q": "¿Es cierto que quién esculpió el famosísimo 'david' de mármol que se encuentra en florencia?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué arquitecto modernista diseñó el templo de la Sagrada Familia en Barcelona? (Parte 4)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Antoni Gaudí"
        ],
        "options": [
            "Antoni Gaudí",
            "Santiago Calatrava",
            "Juan de Villanueva",
            "Moneo"
        ],
        "answer": "Antoni Gaudí"
    },
    {
        "q": "¿Qué filósofo griego fue maestro de Alejandro Magno? (Parte 4)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Aristóteles"
        ],
        "options": [
            "Aristóteles",
            "Platón",
            "Sócrates",
            "Epicuro"
        ],
        "answer": "Aristóteles"
    },
    {
        "q": "¿Cómo se llama el impuesto indirecto que grava el consumo en España? (Parte 4)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "IVA"
        ],
        "options": [
            "IVA",
            "IRPF",
            "IBI",
            "IS"
        ],
        "answer": "IVA"
    },
    {
        "q": "¿Es cierto que qué ideología política defendía karl marx junto a friedrich engels?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol sobre el campo? (Parte 4)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "11",
            "7",
            "5",
            "9"
        ],
        "answer": "11"
    },
    {
        "q": "¿En qué país se originaron los Juegos Olímpicos en la antigüedad? (Parte 4)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Grecia"
        ],
        "options": [
            "Grecia",
            "Italia",
            "Egipto",
            "Francia"
        ],
        "answer": "Grecia"
    },
    {
        "q": "¿Qué moneda oficial se utiliza en la mayor parte de la Unión Europea? (Parte 4)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Euro"
        ],
        "options": [
            "Euro",
            "Dólar",
            "Libra",
            "Franco"
        ],
        "answer": "Euro"
    },
    {
        "q": "¿Es cierto que qué organismo internacional se fundó en 1945 para mantener la paz mundial?",
        "category": "culturageneral",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad se encuentra la famosa Torre Eiffel? (Parte 4)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "París"
        ],
        "options": [
            "París",
            "Londres",
            "Roma",
            "Berlín"
        ],
        "answer": "París"
    },
    {
        "q": "¿Qué deporte se practica en la NBA? (Parte 4)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Fútbol",
            "Béisbol",
            "Tenis"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Cuál es el idioma más hablado del mundo como lengua nativa? (Parte 4)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Chino mandarín"
        ],
        "options": [
            "Chino mandarín",
            "Español",
            "Inglés",
            "Hindi"
        ],
        "answer": "Chino mandarín"
    },
    {
        "q": "¿Es cierto que de qué color es el icónico erizo protagonista de los videojuegos de sega, sonic?",
        "category": "culturageneral",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué compañía de videojuegos creó al famoso personaje fontanero Mario Bros? (Parte 4)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nintendo"
        ],
        "options": [
            "Sega",
            "Sony",
            "Nintendo",
            "Microsoft"
        ],
        "answer": "Nintendo"
    },
    {
        "q": "¿Cuántos colores principales forman tradicionalmente un arcoíris visible? (Parte 4)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "7"
        ],
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7"
    },
    {
        "q": "¿Cuál es la moneda oficial de Japón? (Parte 4)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Yen"
        ],
        "options": [
            "Yuan",
            "Dólar",
            "Yen",
            "Euro"
        ],
        "answer": "Yen"
    },
    {
        "q": "¿Es cierto que de qué nacionalidad era el célebre pintor y escultor cubista pablo picasso?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el famoso vaquero de la película 'Toy Story'? (Parte 5)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Woody"
        ],
        "options": [
            "Buzz Lightyear",
            "Woody",
            "Rex",
            "Andy"
        ],
        "answer": "Woody"
    },
    {
        "q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel? (Parte 5)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Robert Downey Jr."
        ],
        "options": [
            "Chris Evans",
            "Chris Hemsworth",
            "Robert Downey Jr.",
            "Mark Ruffalo"
        ],
        "answer": "Robert Downey Jr."
    },
    {
        "q": "¿Cuál es el nombre del pez payaso que busca su padre en una conocida película animada? (Parte 5)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nemo"
        ],
        "options": [
            "Dory",
            "Marlin",
            "Nemo",
            "Gill"
        ],
        "answer": "Nemo"
    },
    {
        "q": "¿Es cierto que en qué saga de películas aparece el maestro yoda?",
        "category": "cine",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama la escuela de magia a la que asiste Harry Potter? (Parte 5)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Hogwarts"
        ],
        "options": [
            "Beauxbatons",
            "Durmstrang",
            "Hogwarts",
            "Ilvermorny"
        ],
        "answer": "Hogwarts"
    },
    {
        "q": "¿Quién dirigió la famosa película 'Jurassic Park' estrenada en 1993? (Parte 5)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Steven Spielberg"
        ],
        "options": [
            "George Lucas",
            "Steven Spielberg",
            "James Cameron",
            "Martin Scorsese"
        ],
        "answer": "Steven Spielberg"
    },
    {
        "q": "¿Cuál es el nombre del ogro verde protagonista de la saga de DreamWorks? (Parte 5)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Shrek"
        ],
        "options": [
            "Asno",
            "Shrek",
            "Fiona",
            "Gato con Botas"
        ],
        "answer": "Shrek"
    },
    {
        "q": "¿Es cierto que qué actor encarnó al célebre pirata jack sparrow en 'piratas del caribe'?",
        "category": "cine",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el león protagonista de 'El Rey León'? (Parte 5)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Simba"
        ],
        "options": [
            "Mufasa",
            "Scar",
            "Simba",
            "Timón"
        ],
        "answer": "Simba"
    },
    {
        "q": "¿Qué objeto mágico utiliza Dorothy en 'El mago de Oz' para regresar a casa? (Parte 5)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Unas zapatillas rojas"
        ],
        "options": [
            "Un sombrero mágico",
            "Unas zapatillas rojas",
            "Una varita",
            "Un anillo"
        ],
        "answer": "Unas zapatillas rojas"
    },
    {
        "q": "¿Qué actor interpreta al agente secreto James Bond en 'Casino Royale' (2006)? (Parte 5)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Daniel Craig"
        ],
        "options": [
            "Pierce Brosnan",
            "Daniel Craig",
            "Sean Connery",
            "Roger Moore"
        ],
        "answer": "Daniel Craig"
    },
    {
        "q": "¿Es cierto que cómo se llama el archienemigo de batman en gotham?",
        "category": "cine",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad viven los personajes de la serie animada 'Los Simpson'? (Parte 5)",
        "category": "cine",
        "level": 2,
        "type": "standard",
        "accept": [
            "Springfield"
        ],
        "options": [
            "Shelbyville",
            "Springfield",
            "Capital City",
            "Ogdenville"
        ],
        "answer": "Springfield"
    },
    {
        "q": "¿Qué hobbit es el portador del Anillo Único en 'El Señor de los Anillos'? (Parte 5)",
        "category": "cine",
        "level": 3,
        "type": "standard",
        "accept": [
            "Frodo Bolsón"
        ],
        "options": [
            "Bilbo Bolsón",
            "Frodo Bolsón",
            "Sam Gamyi",
            "Pippin Tuk"
        ],
        "answer": "Frodo Bolsón"
    },
    {
        "q": "¿Quién es el director de las películas de fantasía 'El viaje de Chihiro' y 'Mi vecino Totoro'? (Parte 5)",
        "category": "cine",
        "level": 1,
        "type": "standard",
        "accept": [
            "Hayao Miyazaki"
        ],
        "options": [
            "Hayao Miyazaki",
            "Makoto Shinkai",
            "Isao Takahata",
            "Mamoru Hosoda"
        ],
        "answer": "Hayao Miyazaki"
    },
    {
        "q": "¿Es cierto que de qué país era originaria la legendaria banda de rock the beatles?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el instrumento de teclado principal que toca tradicionalmente un pianista? (Parte 5)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Piano"
        ],
        "options": [
            "Guitarra",
            "Batería",
            "Piano",
            "Violín"
        ],
        "answer": "Piano"
    },
    {
        "q": "¿Qué artista es conocido mundialmente como 'El Rey del Pop'? (Parte 5)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Michael Jackson"
        ],
        "options": [
            "Elvis Presley",
            "Michael Jackson",
            "Prince",
            "Freddie Mercury"
        ],
        "answer": "Michael Jackson"
    },
    {
        "q": "¿Cuántas cuerdas tiene una guitarra acústica estándar por lo general? (Parte 5)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "6"
        ],
        "options": [
            "4",
            "5",
            "6",
            "12"
        ],
        "answer": "6"
    },
    {
        "q": "¿Es cierto que qué género musical tradicional es originario de argentina y se baila en pareja?",
        "category": "musica",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el nombre de la famosa banda británica liderada por Freddie Mercury? (Parte 5)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Queen"
        ],
        "options": [
            "Led Zeppelin",
            "Queen",
            "Pink Floyd",
            "The Rolling Stones"
        ],
        "answer": "Queen"
    },
    {
        "q": "¿Qué instrumento musical de viento metal se asocia comúnmente con el jazz clásico? (Parte 5)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Saxofón"
        ],
        "options": [
            "Flauta traversa",
            "Saxofón",
            "Violonchelo",
            "Clarinete"
        ],
        "answer": "Saxofón"
    },
    {
        "q": "¿De qué nacionalidad era el célebre compositor clásico Ludwig van Beethoven? (Parte 5)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemana"
        ],
        "options": [
            "Austriaca",
            "Alemana",
            "Italiana",
            "Francesa"
        ],
        "answer": "Alemana"
    },
    {
        "q": "¿Es cierto que qué nombre recibe el grupo musical coreano (k-pop) con mayor impacto global en la actualidad?",
        "category": "musica",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Con qué se toca habitualmente la guitarra eléctrica para rasguear las cuerdas de forma precisa? (Parte 5)",
        "category": "musica",
        "level": 2,
        "type": "standard",
        "accept": [
            "Una púa o pletro"
        ],
        "options": [
            "Una púa o pletro",
            "Un arco",
            "Baquetas",
            "Los dedos exclusivamente"
        ],
        "answer": "Una púa o pletro"
    },
    {
        "q": "¿Qué famosa cantante colombiana interpreta el tema 'Hips Don't Lie'? (Parte 5)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Shrakira"
        ],
        "options": [
            "Shakira",
            "Rosalía",
            "Karol G",
            "Jennifer Lopez"
        ],
        "answer": "Shakira"
    },
    {
        "q": "¿Cuál es la banda de rock británica famosa por su logotipo de la lengua y los labios rojos? (Parte 5)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "The Rolling Stones"
        ],
        "options": [
            "The Beatles",
            "The Rolling Stones",
            "AC/DC",
            "Pink Floyd"
        ],
        "answer": "The Rolling Stones"
    },
    {
        "q": "¿Es cierto que qué instrumento de percusión compone la base del ritmo junto al bombo en una batería?",
        "category": "musica",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué famoso festival de música masiva se celebra cada año en un desierto de California? (Parte 5)",
        "category": "musica",
        "level": 3,
        "type": "standard",
        "accept": [
            "Coachella"
        ],
        "options": [
            "Glastonbury",
            "Coachella",
            "Rock in Rio",
            "Tomorrowland"
        ],
        "answer": "Coachella"
    },
    {
        "q": "¿Qué legendario guitarrista zurdo destacó en el festival de Woodstock de 1969? (Parte 5)",
        "category": "musica",
        "level": 1,
        "type": "standard",
        "accept": [
            "Jimi Hendrix"
        ],
        "options": [
            "Eric Clapton",
            "Jimi Hendrix",
            "Jimmy Page",
            "Carlos Santana"
        ],
        "answer": "Jimi Hendrix"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol en el terreno de juego durante un partido oficial? (Parte 5)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "9",
            "10",
            "11",
            "12"
        ],
        "answer": "11"
    },
    {
        "q": "¿Es cierto que en qué deporte se utiliza una raqueta y una pequeña pelota para pasarla por encima de una red?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cada cuántos años se celebran los Juegos Olímpicos de verano? (Parte 5)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "4 años"
        ],
        "options": [
            "2 años",
            "3 años",
            "4 años",
            "5 años"
        ],
        "answer": "4 años"
    },
    {
        "q": "¿En qué país se originó el sumo, deporte de lucha tradicional? (Parte 5)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Japón"
        ],
        "options": [
            "China",
            "Corea del Sur",
            "Japón",
            "Mongolia"
        ],
        "answer": "Japón"
    },
    {
        "q": "¿Cuántos puntos vale una canasta libre básica en el baloncesto? (Parte 5)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "1"
        ],
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "1"
    },
    {
        "q": "¿Es cierto que en qué deporte compiten los equipos por la famosa 'stanley cup'?",
        "category": "deportes",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cómo se llama el evento deportivo ciclista más famoso del mundo celebrado en Francia? (Parte 5)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Tour de Francia"
        ],
        "options": [
            "Giro de Italia",
            "Vuelta a España",
            "Tour de Francia",
            "Milán-San Remo"
        ],
        "answer": "Tour de Francia"
    },
    {
        "q": "¿Qué país ganó la Copa Mundial de Fútbol de la FIFA en el año 2014? (Parte 5)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alemania"
        ],
        "options": [
            "Brasil",
            "Argentina",
            "Alemania",
            "España"
        ],
        "answer": "Alemania"
    },
    {
        "q": "¿Cuál es el deporte nacional de los Estados Unidos que se juega con bate y manopla? (Parte 5)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Béisbol"
        ],
        "options": [
            "Fútbol americano",
            "Béisbol",
            "Baloncesto",
            "Hockey"
        ],
        "answer": "Béisbol"
    },
    {
        "q": "¿Es cierto que cuántos hoyos se juegan en una ronda estándar completa de golf?",
        "category": "deportes",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué tenista español ha ganado más títulos de Grand Slam en la historia? (Parte 5)",
        "category": "deportes",
        "level": 3,
        "type": "standard",
        "accept": [
            "Rafael Nadal"
        ],
        "options": [
            "Carlos Alcaraz",
            "Rafael Nadal",
            "David Ferrer",
            "Feliciano López"
        ],
        "answer": "Rafael Nadal"
    },
    {
        "q": "¿Cómo se llama el campeonato de automovilismo más importante y prestigioso del mundo? (Parte 5)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fórmula 1"
        ],
        "options": [
            "MotoGP",
            "Fórmula 1",
            "Rally Dakar",
            "IndyCar"
        ],
        "answer": "Fórmula 1"
    },
    {
        "q": "¿En qué deporte se utiliza el término 'slam dunk'? (Parte 5)",
        "category": "deportes",
        "level": 2,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Voleibol",
            "Tenis",
            "Rugby"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Es cierto que cuántos jugadores hay en la pista por cada equipo en un partido de baloncesto oficial?",
        "category": "deportes",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país albergó los Juegos Olímpicos de Verano en el año 2008? (Parte 5)",
        "category": "deportes",
        "level": 1,
        "type": "standard",
        "accept": [
            "China"
        ],
        "options": [
            "Grecia",
            "China",
            "Reino Unido",
            "Brasil"
        ],
        "answer": "China"
    },
    {
        "q": "¿En qué año se aprobó la actual Constitución Española? (Parte 5)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1978"
        ],
        "options": [
            "1978",
            "1975",
            "1981",
            "1976"
        ],
        "answer": "1978"
    },
    {
        "q": "¿En qué año llegó Cristóbal Colón a América? (Parte 5)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1492"
        ],
        "options": [
            "1492",
            "1498",
            "1519",
            "1488"
        ],
        "answer": "1492"
    },
    {
        "q": "¿Es cierto que en qué año comenzó la revolución francesa?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué año terminó la Guerra Civil Española? (Parte 5)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1936",
            "1945",
            "1931"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año comenzó la Segunda Guerra Mundial? (Parte 5)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "1939"
        ],
        "options": [
            "1939",
            "1941",
            "1914",
            "1936"
        ],
        "answer": "1939"
    },
    {
        "q": "¿En qué año cayó el Imperio Romano de Occidente? (Parte 5)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "476"
        ],
        "options": [
            "476",
            "1453",
            "313",
            "711"
        ],
        "answer": "476"
    },
    {
        "q": "¿Es cierto que qué muro cayó en 1989 simbolizando el fin de la guerra fría?",
        "category": "historia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué país europeo inició la Revolución Industrial en el siglo XVIII? (Parte 5)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gran Bretaña"
        ],
        "options": [
            "Gran Bretaña",
            "Francia",
            "Alemania",
            "España"
        ],
        "answer": "Gran Bretaña"
    },
    {
        "q": "¿Qué emperador francés fue derrotado definitivamente en Waterloo en 1815? (Parte 5)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Napoleón Bonaparte"
        ],
        "options": [
            "Napoleón Bonaparte",
            "Julio César",
            "Luis XIV",
            "Carlomagno"
        ],
        "answer": "Napoleón Bonaparte"
    },
    {
        "q": "¿Quién fue el líder de la Revolución Rusa de 1917? (Parte 5)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Vladimir Lenin"
        ],
        "options": [
            "Vladimir Lenin",
            "Iósif Stalin",
            "León Trotski",
            "Zar Nicolás II"
        ],
        "answer": "Vladimir Lenin"
    },
    {
        "q": "¿Es cierto que qué civilización antigua construyó el impresionante imperio con capital en machu picchu?",
        "category": "historia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién fue el primer emperador del Imperio Romano? (Parte 5)",
        "category": "historia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Augusto"
        ],
        "options": [
            "Julio César",
            "Augusto",
            "Nerón",
            "Trajano"
        ],
        "answer": "Augusto"
    },
    {
        "q": "¿En qué siglo se produjo la caída de Constantinopla a manos del Imperio Otomano? (Parte 5)",
        "category": "historia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Siglo XV"
        ],
        "options": [
            "Siglo XIV",
            "Siglo XV",
            "Siglo XVI",
            "Siglo XIII"
        ],
        "answer": "Siglo XV"
    },
    {
        "q": "¿Qué reina española financió el viaje de Cristóbal Colón hacia las Indias? (Parte 5)",
        "category": "historia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Isabel la Católica"
        ],
        "options": [
            "Isabel la Católica",
            "Juana la Loca",
            "Isabel II",
            "María Luisa de Parma"
        ],
        "answer": "Isabel la Católica"
    },
    {
        "q": "¿Es cierto que qué tratado puso fin formalmente a la primera guerra mundial en 1919?",
        "category": "historia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el pico más alto de España (situado en Tenerife)? (Parte 5)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Teide"
        ],
        "options": [
            "Teide",
            "Mulhacén",
            "Aneto",
            "Veleta"
        ],
        "answer": "Teide"
    },
    {
        "q": "¿Cuál es el río más largo de la Península Ibérica? (Parte 5)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tajo"
        ],
        "options": [
            "Tajo",
            "Ebro",
            "Duero",
            "Guadalquivir"
        ],
        "answer": "Tajo"
    },
    {
        "q": "¿Cuál es el río más caudaloso de España? (Parte 5)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Ebro"
        ],
        "options": [
            "Ebro",
            "Tajo",
            "Duero",
            "Guadiana"
        ],
        "answer": "Ebro"
    },
    {
        "q": "¿Es cierto que qué cordillera separa naturalmente españa de francia?",
        "category": "geografia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el océano más grande del planeta Tierra? (Parte 5)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Océano Pacífico"
        ],
        "options": [
            "Océano Pacífico",
            "Océano Atlántico",
            "Océano Índico",
            "Océano Ártico"
        ],
        "answer": "Océano Pacífico"
    },
    {
        "q": "¿Cuál es el río más largo del mundo? (Parte 5)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "El Nilo / Amazonas"
        ],
        "options": [
            "El Nilo / Amazonas",
            "El Danubio",
            "El Misisipi",
            "El Volga"
        ],
        "answer": "El Nilo / Amazonas"
    },
    {
        "q": "¿Cuál es la capital de Australia? (Parte 5)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Canberra"
        ],
        "options": [
            "Canberra",
            "Sídney",
            "Melbourne",
            "Brisbane"
        ],
        "answer": "Canberra"
    },
    {
        "q": "¿Es cierto que qué país tiene mayor superficie en todo el mundo?",
        "category": "geografia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué continente se encuentra el desierto del Sahara? (Parte 5)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "África"
        ],
        "options": [
            "África",
            "Asia",
            "América",
            "Oceanía"
        ],
        "answer": "África"
    },
    {
        "q": "¿Cuál es la capital de Italia? (Parte 5)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Roma"
        ],
        "options": [
            "Roma",
            "Milán",
            "Nápoles",
            "Florencia"
        ],
        "answer": "Roma"
    },
    {
        "q": "¿Cuál es la capital de Japón? (Parte 5)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Tokio"
        ],
        "options": [
            "Tokio",
            "Kioto",
            "Osaka",
            "Hiroshima"
        ],
        "answer": "Tokio"
    },
    {
        "q": "¿Es cierto que en qué país se encuentra la famosa ciudad histórica de machu picchu?",
        "category": "geografia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué mar baña las costas orientales de la península ibérica? (Parte 5)",
        "category": "geografia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Mar Mediterráneo"
        ],
        "options": [
            "Mar Mediterráneo",
            "Mar Cantábrico",
            "Océano Atlántico",
            "Mar Báltico"
        ],
        "answer": "Mar Mediterráneo"
    },
    {
        "q": "¿Cuál es la capital de Argentina? (Parte 5)",
        "category": "geografia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Buenos Aires"
        ],
        "options": [
            "Buenos Aires",
            "Córdoba",
            "Rosario",
            "Mendoza"
        ],
        "answer": "Buenos Aires"
    },
    {
        "q": "¿Qué estrecho separa el continente europeo del africano? (Parte 5)",
        "category": "geografia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Estrecho de Gibraltar"
        ],
        "options": [
            "Estrecho de Gibraltar",
            "Estrecho de Bering",
            "Canal de la Mancha",
            "Estrecho de Mesina"
        ],
        "answer": "Estrecho de Gibraltar"
    },
    {
        "q": "¿Es cierto que cuál es la unidad básica de los seres vivos?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué planeta del Sistema Solar es conocido como el planeta rojo? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Marte"
        ],
        "options": [
            "Marte",
            "Júpiter",
            "Venus",
            "Saturno"
        ],
        "answer": "Marte"
    },
    {
        "q": "¿Cuál es el símbolo químico del oro en la tabla periódica? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Au"
        ],
        "options": [
            "Au",
            "Ag",
            "Fe",
            "Cu"
        ],
        "answer": "Au"
    },
    {
        "q": "¿Qué gas compone aproximadamente el 78% de la atmósfera terrestre? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Nitrógeno"
        ],
        "options": [
            "Nitrógeno",
            "Oxígeno",
            "Dióxido de carbono",
            "Hidrógeno"
        ],
        "answer": "Nitrógeno"
    },
    {
        "q": "¿Es cierto que qué científico formuló la teoría de la relatividad?",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el hueso más largo del cuerpo humano? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Fémur"
        ],
        "options": [
            "Fémur",
            "Tibia",
            "Húmero",
            "Peroné"
        ],
        "answer": "Fémur"
    },
    {
        "q": "¿Qué órgano del cuerpo humano produce la insulina? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "Páncreas"
        ],
        "options": [
            "Páncreas",
            "Hígado",
            "Riñón",
            "Estómago"
        ],
        "answer": "Páncreas"
    },
    {
        "q": "¿Qué partícula del átomo tiene carga eléctrica negativa? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Electrón"
        ],
        "options": [
            "Electrón",
            "Protón",
            "Neutrón",
            "Positrón"
        ],
        "answer": "Electrón"
    },
    {
        "q": "¿Es cierto que qué fuerza atrae a los objetos hacia el centro de la tierra?",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuál es el símbolo químico del agua? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "standard",
        "accept": [
            "H2O"
        ],
        "options": [
            "H2O",
            "CO2",
            "O2",
            "NaCl"
        ],
        "answer": "H2O"
    },
    {
        "q": "¿Qué orgánulo celular produce la mayor parte de la energía (ATP)? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Mitocondria"
        ],
        "options": [
            "Mitocondria",
            "Cloroplasto",
            "Ribosoma",
            "Vacuola"
        ],
        "answer": "Mitocondria"
    },
    {
        "q": "¿Qué base nitrogenada del ARN sustituye a la timina presente en el ADN? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Uracilo"
        ],
        "options": [
            "Uracilo",
            "Adenina",
            "Guanina",
            "Citosina"
        ],
        "answer": "Uracilo"
    },
    {
        "q": "¿Es cierto que cómo se llaman las proteínas que actúan como catalizadores acelerando las reacciones bioquímicas?",
        "category": "cienciaytecnologia",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué científico británico descubrió la penicilina en 1928? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 3,
        "type": "standard",
        "accept": [
            "Alexander Fleming"
        ],
        "options": [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Marie Curie"
        ],
        "answer": "Alexander Fleming"
    },
    {
        "q": "¿Qué científica pionera ganó dos premios Nobel en campos diferentes (Física y Química)? (Parte 5)",
        "category": "cienciaytecnologia",
        "level": 1,
        "type": "standard",
        "accept": [
            "Marie Curie"
        ],
        "options": [
            "Marie Curie",
            "Rosalind Franklin",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "answer": "Marie Curie"
    },
    {
        "q": "¿Quién escribió 'Don Quijote de la Mancha'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Miguel de Cervantes"
        ],
        "options": [
            "Miguel de Cervantes",
            "Lope de Vega",
            "Quevedo",
            "Góngora"
        ],
        "answer": "Miguel de Cervantes"
    },
    {
        "q": "¿Es cierto que quién escribió 'la casa de bernarda alba'?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'Las Meninas'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Diego Velázquez"
        ],
        "options": [
            "Diego Velázquez",
            "Francisco de Goya",
            "El Greco",
            "Murillo"
        ],
        "answer": "Diego Velázquez"
    },
    {
        "q": "¿Quién pintó el cuadro 'Guernica'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Pablo Picasso"
        ],
        "options": [
            "Pablo Picasso",
            "Salvador Dalí",
            "Joan Miró",
            "Juan Gris"
        ],
        "answer": "Pablo Picasso"
    },
    {
        "q": "¿Quién es el autor de la novela 'Cien años de soledad'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Gabriel García Márquez"
        ],
        "options": [
            "Gabriel García Márquez",
            "Mario Vargas Llosa",
            "Julio Cortázar",
            "Jorge Luis Borges"
        ],
        "answer": "Gabriel García Márquez"
    },
    {
        "q": "¿Es cierto que qué autor inglés escribió la famosa obra de teatro 'romeo y julieta'?",
        "category": "arteyliteratura",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Quién pintó 'La Mona Lisa' (La Gioconda)? (Parte 5)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Leonardo da Vinci"
        ],
        "options": [
            "Leonardo da Vinci",
            "Miguel Ángel",
            "Rafael Sanzio",
            "Botticelli"
        ],
        "answer": "Leonardo da Vinci"
    },
    {
        "q": "¿Quién escribió la novela corta 'El principito'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Antoine de Saint-Exupéry"
        ],
        "options": [
            "Antoine de Saint-Exupéry",
            "Jules Verne",
            "Victor Hugo",
            "Albert Camus"
        ],
        "answer": "Antoine de Saint-Exupéry"
    },
    {
        "q": "¿Quién pintó 'La persistencia de la memoria' con los relojes blandos? (Parte 5)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Salvador Dalí"
        ],
        "options": [
            "Salvador Dalí",
            "Pablo Picasso",
            "Joan Miró",
            "René Magritte"
        ],
        "answer": "Salvador Dalí"
    },
    {
        "q": "¿Es cierto que qué poeta andaluz escribió 'platero y yo'?",
        "category": "arteyliteratura",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué autor escribió la trágica obra 'La Celestina'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 3,
        "type": "standard",
        "accept": [
            "Fernando de Rojas"
        ],
        "options": [
            "Fernando de Rojas",
            "Miguel de Cervantes",
            "Lope de Vega",
            "Arcipreste de Hita"
        ],
        "answer": "Fernando de Rojas"
    },
    {
        "q": "¿Qué escritor de la Generación del 98 escribió 'Niebla' y 'San Manuel Bueno, mártir'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Miguel de Unamuno"
        ],
        "options": [
            "Miguel de Unamuno",
            "Pío Baroja",
            "Azorín",
            "Valle-Inclán"
        ],
        "answer": "Miguel de Unamuno"
    },
    {
        "q": "¿Qué autor del Siglo de Oro escribió la famosa obra teatral 'La vida es sueño'? (Parte 5)",
        "category": "arteyliteratura",
        "level": 2,
        "type": "standard",
        "accept": [
            "Calderón de la Barca"
        ],
        "options": [
            "Calderón de la Barca",
            "Lope de Vega",
            "Tirso de Molina",
            "Cervantes"
        ],
        "answer": "Calderón de la Barca"
    },
    {
        "q": "¿Es cierto que quién esculpió el famosísimo 'david' de mármol que se encuentra en florencia?",
        "category": "arteyliteratura",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué arquitecto modernista diseñó el templo de la Sagrada Familia en Barcelona? (Parte 5)",
        "category": "arteyliteratura",
        "level": 1,
        "type": "standard",
        "accept": [
            "Antoni Gaudí"
        ],
        "options": [
            "Antoni Gaudí",
            "Santiago Calatrava",
            "Juan de Villanueva",
            "Moneo"
        ],
        "answer": "Antoni Gaudí"
    },
    {
        "q": "¿Qué filósofo griego fue maestro de Alejandro Magno? (Parte 5)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Aristóteles"
        ],
        "options": [
            "Aristóteles",
            "Platón",
            "Sócrates",
            "Epicuro"
        ],
        "answer": "Aristóteles"
    },
    {
        "q": "¿Cómo se llama el impuesto indirecto que grava el consumo en España? (Parte 5)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "IVA"
        ],
        "options": [
            "IVA",
            "IRPF",
            "IBI",
            "IS"
        ],
        "answer": "IVA"
    },
    {
        "q": "¿Es cierto que qué ideología política defendía karl marx junto a friedrich engels?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Cuántos jugadores forman un equipo de fútbol sobre el campo? (Parte 5)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "11"
        ],
        "options": [
            "11",
            "7",
            "5",
            "9"
        ],
        "answer": "11"
    },
    {
        "q": "¿En qué país se originaron los Juegos Olímpicos en la antigüedad? (Parte 5)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Grecia"
        ],
        "options": [
            "Grecia",
            "Italia",
            "Egipto",
            "Francia"
        ],
        "answer": "Grecia"
    },
    {
        "q": "¿Qué moneda oficial se utiliza en la mayor parte de la Unión Europea? (Parte 5)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Euro"
        ],
        "options": [
            "Euro",
            "Dólar",
            "Libra",
            "Franco"
        ],
        "answer": "Euro"
    },
    {
        "q": "¿Es cierto que qué organismo internacional se fundó en 1945 para mantener la paz mundial?",
        "category": "culturageneral",
        "level": 2,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿En qué ciudad se encuentra la famosa Torre Eiffel? (Parte 5)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "París"
        ],
        "options": [
            "París",
            "Londres",
            "Roma",
            "Berlín"
        ],
        "answer": "París"
    },
    {
        "q": "¿Qué deporte se practica en la NBA? (Parte 5)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Baloncesto"
        ],
        "options": [
            "Baloncesto",
            "Fútbol",
            "Béisbol",
            "Tenis"
        ],
        "answer": "Baloncesto"
    },
    {
        "q": "¿Cuál es el idioma más hablado del mundo como lengua nativa? (Parte 5)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "Chino mandarín"
        ],
        "options": [
            "Chino mandarín",
            "Español",
            "Inglés",
            "Hindi"
        ],
        "answer": "Chino mandarín"
    },
    {
        "q": "¿Es cierto que de qué color es el icónico erizo protagonista de los videojuegos de sega, sonic?",
        "category": "culturageneral",
        "level": 3,
        "type": "true_false",
        "answer": "Verdadero"
    },
    {
        "q": "¿Qué compañía de videojuegos creó al famoso personaje fontanero Mario Bros? (Parte 5)",
        "category": "culturageneral",
        "level": 1,
        "type": "standard",
        "accept": [
            "Nintendo"
        ],
        "options": [
            "Sega",
            "Sony",
            "Nintendo",
            "Microsoft"
        ],
        "answer": "Nintendo"
    },
    {
        "q": "¿Cuántos colores principales forman tradicionalmente un arcoíris visible? (Parte 5)",
        "category": "culturageneral",
        "level": 2,
        "type": "standard",
        "accept": [
            "7"
        ],
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": "7"
    },
    {
        "q": "¿Cuál es la moneda oficial de Japón? (Parte 5)",
        "category": "culturageneral",
        "level": 3,
        "type": "standard",
        "accept": [
            "Yen"
        ],
        "options": [
            "Yuan",
            "Dólar",
            "Yen",
            "Euro"
        ],
        "answer": "Yen"
    },
    {
        "q": "¿Es cierto que de qué nacionalidad era el célebre pintor y escultor cubista pablo picasso?",
        "category": "culturageneral",
        "level": 1,
        "type": "true_false",
        "answer": "Verdadero"
    }
];
