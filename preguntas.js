const questionsDB = [
    // --- 1. CULTURA GENERAL ---
    {
        q: "¿De qué país es originaria la famosa bebida alcohólica llamada tequila?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["mexico", "méxico"],
        options: ["México", "Colombia", "España", "Cuba"],
        answer: "México"
    },
    {
        q: "¿Es cierto que una persona adulta tiene exactamente 206 huesos en su esqueleto en condiciones normales?",
        category: "culturageneral", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes elementos y símbolos químicos, ¿cuál corresponde al elemento 'Fe' en la tabla periódica?",
        category: "culturageneral", level: 3, type: "standard",
        accept: ["hierro"],
        options: ["Hierro", "Flúor", "Fósforo", "Francio"],
        answer: "Hierro"
    },
    {
        q: "¿Cuál es el idioma más hablado del mundo como lengua materna?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["chino mandarin", "mandarin", "chino"],
        options: ["Chino mandarín", "Español", "Inglés", "Hindi"],
        answer: "Chino mandarín"
    },
    {
        q: "¿En qué continente se encuentra el desierto de Kalahari?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["africa", "áfrica"],
        options: ["África", "Asia", "Oceanía", "América del Sur"],
        answer: "África"
    },
    {
        q: "¿Es cierto que los diamantes y el grafito están compuestos exactamente por el mismo elemento químico (carbono)?",
        category: "culturageneral", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos monumentos son maravillas del mundo moderno, pero uno NO lo es. ¿Cuál es el intruso?",
        category: "culturageneral", level: 3, type: "find_false",
        options: ["Gran Muralla China", "Coliseo de Roma", "Pirámide de Guiza", "Chichén Itzá"],
        answer: "Pirámide de Guiza"
    },
    {
        q: "¿Qué moneda oficial se utiliza en el país de Japón?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["yen", "yenes"],
        options: ["Yen", "Yuan", "Won", "Dólar"],
        answer: "Yen"
    },
    {
        q: "¿Cuál es el órgano interno más grande del cuerpo humano?",
        category: "culturageneral", level: 2, type: "standard",
        accept: ["el higado", "higado"],
        options: ["El hígado", "El corazón", "El intestino delgado", "Los pulmones"],
        answer: "El hígado"
    },
    {
        q: "De las siguientes afirmaciones sobre elementos geográficos y astronómicos, ¿cuál es la ÚNICA verdadera?",
        category: "culturageneral", level: 3, type: "find_true",
        options: [
            "La línea del Ecuador cruza exactamente por el centro de Europa.",
            "La estrella más cercana a la Tierra (aparte del Sol) es Próxima Centauri.",
            "El monte Everest es el volcán más activo del planeta.",
            "El Océano Atlántico es el más profundo de todos los océanos."
        ],
        answer: "La estrella más cercana a la Tierra (aparte del Sol) es Próxima Centauri."
    },
    {
        q: "¿En qué año tuvo lugar el famoso hundimiento del transatlántico Titanic?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["1912"],
        options: ["1910", "1912", "1915", "1905"],
        answer: "1912"
    },
    {
        q: "¿Es cierto que las zanahorias eran originalmente de color morado o amarillo antes de ser cultivadas en su tonalidad naranja actual?",
        category: "culturageneral", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es el metal más caro del mundo en los mercados internacionales habitualmente?",
        category: "culturageneral", level: 3, type: "standard",
        accept: ["rodio", "el rodio"],
        options: ["Rodio", "Oro", "Platino", "Paladio"],
        answer: "Rodio"
    },
    {
        q: "¿Cómo se llama el punto más alto de la superficie terrestre ubicado en la cordillera del Himalaya?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["everest", "monte everest"],
        options: ["Monte Everest", "K2", "Kilimanjaro", "Aconcagua"],
        answer: "Monte Everest"
    },
    {
        q: "¿Cuál es el animal terrestre capaz de alcanzar mayor velocidad en carrera corta?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["guepardo", "chita"],
        options: ["Guepardo", "León", "Gacela", "Antílope"],
        answer: "Guepardo"
    },
    {
        q: "¿Es cierto que el sonido viaja más rápido en el agua que en el aire?",
        category: "culturageneral", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos países tienen frontera terrestre con España, pero uno NO. ¿Cuál es el intruso?",
        category: "culturageneral", level: 2, type: "find_false",
        options: ["Portugal", "Francia", "Italia", "Andorra"],
        answer: "Italia"
    },
    {
        q: "¿Qué físico alemán formuló la famosa teoría de la relatividad especial y general?",
        category: "culturageneral", level: 1, type: "standard",
        accept: ["albert einstein", "einstein"],
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Albert Einstein"
    },

    // --- 2. DEPORTES ---
    {
        q: "¿Qué piloto logró el campeonato mundial de Fórmula 1 en la temporada 2023?",
        category: "deportes", level: 1, type: "standard",
        accept: ["max verstappen", "verstappen"],
        options: ["Max Verstappen", "Lewis Hamilton", "Fernando Alonso", "Charles Leclerc"],
        answer: "Max Verstappen"
    },
    {
        q: "¿Es cierto que Usain Bolt ostenta el récord mundial oficial en la prueba de los 100 metros lisos?",
        category: "deportes", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos tenistas ganaron múltiples Grand Slams en tierra batida, pero uno NUNCA ganó Roland Garros. ¿Quién es el intruso?",
        category: "deportes", level: 3, type: "find_false",
        options: ["Rafael Nadal", "Björn Borg", "Pete Sampras", "Gustavo Kuerten"],
        answer: "Pete Sampras"
    },
    {
        q: "¿En qué país se inventó el deporte del baloncesto a finales del siglo XIX?",
        category: "deportes", level: 2, type: "standard",
        accept: ["estados unidos", "eeuu", "usa"],
        options: ["Estados Unidos", "Canadá", "Inglaterra", "Francia"],
        answer: "Estados Unidos"
    },
    {
        q: "¿Cuántos jugadores forman un equipo titular sobre el terreno de juego en un partido de fútbol oficial?",
        category: "deportes", level: 1, type: "standard",
        accept: ["11", "once"],
        options: ["11", "10", "12", "9"],
        answer: "11"
    },
    {
        q: "¿Es cierto que en el golf el objetivo consiste en completar el recorrido introduciendo la bola en el hoyo con el menor número posible de golpes?",
        category: "deportes", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes deportistas, ¿cuál ostenta el récord histórico de medallas de oro olímpicas ganadas?",
        category: "deportes", level: 2, type: "standard",
        accept: ["michael phelps", "phelps"],
        options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Mark Spitz"],
        answer: "Michael Phelps"
    },
    {
        q: "¿Qué selección nacional ganó la Copa Mundial de Fútbol de la FIFA celebrada en Brasil en 2014?",
        category: "deportes", level: 2, type: "standard",
        accept: ["alemania"],
        options: ["Alemania", "Argentina", "Brasil", "España"],
        answer: "Alemania"
    },
    {
        q: "De las siguientes afirmaciones sobre el Tour de Francia, ¿cuál es la ÚNICA verdadera?",
        category: "deportes", level: 3, type: "find_true",
        options: [
            "El líder de la clasificación general viste un maillot de color amarillo.",
            "La carrera siempre finaliza obligatoriamente en los Campos Elíseos de Marsella.",
            "Está permitido recibir ayuda mecánica continua de vehículos a motor durante todo el recorrido.",
            "El maillot de lunares rojos premia al mejor velocista."
        ],
        answer: "El líder de la clasificación general viste un maillot de color amarillo."
    },
    {
        q: "¿Cuántos anillos forman el símbolo olímpico oficial de los Juegos Olímpicos?",
        category: "deportes", level: 1, type: "standard",
        accept: ["5", "cinco"],
        options: ["5", "4", "6", "7"],
        answer: "5"
    },
    {
        q: "¿Es cierto que el boxeo profesional actual se disputa habitualmente en cuadriláteros que reciben el nombre popular de 'ring'?",
        category: "deportes", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos equipos compiten en la NBA de baloncesto, pero uno de ellos pertenece a otra liga profesional. ¿Cuál es el intruso?",
        category: "deportes", level: 2, type: "find_false",
        options: ["Los Angeles Lakers", "Chicago Bulls", "Real Madrid Baloncesto", "Golden State Warriors"],
        answer: "Real Madrid Baloncesto"
    },
    {
        q: "¿Qué tenista suizo es considerado uno de los más grandes de la historia y es famoso por su elegancia y su revés a una mano?",
        category: "deportes", level: 2, type: "standard",
        accept: ["roger federer", "federer"],
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
        answer: "Roger Federer"
    },
    {
        q: "¿En qué deporte se utiliza una escoba y piedras de granito deslizantes sobre una pista de hielo?",
        category: "deportes", level: 2, type: "standard",
        accept: ["curling"],
        options: ["Curling", "Hockey sobre hielo", "Biatlón", "Patinaje artístico"],
        answer: "Curling"
    },
    {
        q: "¿Qué país organizó los Juegos Olímpicos de Verano en el año 2008?",
        category: "deportes", level: 2, type: "standard",
        accept: ["china", "pekín"],
        options: ["China", "Grecia", "Reino Unido", "Brasil"],
        answer: "China"
    },
    {
        q: "De los siguientes torneos de tenis del Grand Slam, ¿cuál se juega tradicionalmente sobre superficie de tierra batida?",
        category: "deportes", level: 2, type: "standard",
        accept: ["roland garros", "abierto de francia"],
        options: ["Roland Garros", "Wimbledon", "Abierto de Australia", "Abierto de Estados Unidos"],
        answer: "Roland Garros"
    },
    {
        q: "¿Es cierto que en el rugby está permitido pasar el balón con las manos hacia adelante durante el juego en curso?",
        category: "deportes", level: 3, type: "true_false",
        answer: "Falso"
    },
    {
        q: "¿Cuál es la distancia oficial en metros de una carrera de maratón completa?",
        category: "deportes", level: 3, type: "standard",
        accept: ["42195", "42.195", "42 kilometros", "42 km"],
        options: ["42.195 metros", "40.000 metros", "45.000 metros", "50.000 metros"],
        answer: "42.195 metros"
    },

    // --- 3. HISTORIA ---
    {
        q: "¿En qué año se produjo la histórica caída del Muro de Berlín?",
        category: "historia", level: 1, type: "standard",
        accept: ["1989"],
        options: ["1985", "1989", "1991", "1975"],
        answer: "1989"
    },
    {
        q: "¿Qué civilización precolombina construyó la ciudadela en piedra de Machu Picchu en los Andes?",
        category: "historia", level: 2, type: "standard",
        accept: ["los incas", "inca"],
        options: ["Los Incas", "Los Mayas", "Los Aztecas", "Los Toltecas"],
        answer: "Los Incas"
    },
    {
        q: "¿Es cierto que Cleopatra, la última reina del Antiguo Egipto, era étnicamente de origen griego macedonio y no egipcio nativo?",
        category: "historia", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿En qué año llegó Cristóbal Colón al continente americano por primera vez?",
        category: "historia", level: 1, type: "standard",
        accept: ["1492"],
        options: ["1492", "1500", "1485", "1512"],
        answer: "1492"
    },
    {
        q: "¿Qué líder político lideró la Revolución Rusa de 1917 y fundó la Unión Soviética?",
        category: "historia", level: 2, type: "standard",
        accept: ["vladimir lenin", "lenin"],
        options: ["Vladimir Lenin", "Iósif Stalin", "León Trotski", "Nicolás II"],
        answer: "Vladimir Lenin"
    },
    {
        q: "Tres de estos imperios dominaron extensos territorios en la antigüedad, pero uno de ellos pertenece a la Edad Moderna. ¿Cuál es el intruso?",
        category: "historia", level: 3, type: "find_false",
        options: ["Imperio Romano", "Imperio Persa", "Imperio Británico", "Imperio Macedonio"],
        answer: "Imperio Británico"
    },
    {
        q: "¿Cuál fue el nombre del famoso emperador francés derrotado definitivamente en la batalla de Waterloo en 1815?",
        category: "historia", level: 1, type: "standard",
        accept: ["napoleon bonaparte", "napoleon"],
        options: ["Napoleón Bonaparte", "Julio César", "Luis XIV", "Carlomagno"],
        answer: "Napoleón Bonaparte"
    },
    {
        q: "¿Es cierto que la Primera Guerra Mundial finalizó oficialmente con la firma del Tratado de Versalles en el año 1919?",
        category: "historia", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes acontecimientos históricos, ¿cuál ocurrió primero en la línea temporal?",
        category: "historia", level: 3, type: "standard",
        accept: ["caida del imperio romano", "caida de roma"],
        options: ["Caída del Imperio Romano de Occidente", "Descubrimiento de América", "Revolución Francesa", "Invención de la imprenta"],
        answer: "Caída del Imperio Romano de Occidente"
    },
    {
        q: "¿Qué civilización antigua construyó las famosas pirámides de Guiza para sus faraones?",
        category: "historia", level: 1, type: "standard",
        accept: ["egipcios", "antiguo egipto", "egipto"],
        options: ["Los egipcios", "Los romanos", "Los griegos", "Los sumerios"],
        answer: "Los egipcios"
    },
    {
        q: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos de América?",
        category: "historia", level: 2, type: "standard",
        accept: ["1776"],
        options: ["1776", "1812", "1789", "1750"],
        answer: "1776"
    },
    {
        q: "¿Es cierto que el Imperio Romano de Oriente sobrevivió a la caída de Roma durante casi mil años más bajo el nombre de Imperio Bizantino?",
        category: "historia", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos personajes históricos fueron presidentes de Estados Unidos, pero uno NO lo fue. ¿Quién es el intruso?",
        category: "historia", level: 2, type: "find_false",
        options: ["Abraham Lincoln", "George Washington", "Benjamin Franklin", "Thomas Jefferson"],
        answer: "Benjamin Franklin"
    },
    {
        q: "¿Qué muro físico dividió la capital alemana entre la zona capitalista y la comunista durante la Guerra Fría?",
        category: "historia", level: 1, type: "standard",
        accept: ["muro de berlin", "berlin"],
        options: ["Muro de Berlín", "Muro de Adriano", "Muralla China", "Muro de Limes"],
        answer: "Muro de Berlín"
    },
    {
        q: "¿Cuál fue el nombre del primer ser humano en pisar la superficie de la Luna en 1969?",
        category: "historia", level: 1, type: "standard",
        accept: ["neil armstrong", "armstrong"],
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        q: "De las siguientes afirmaciones sobre la Revolución Francesa, ¿cuál es la ÚNICA verdadera?",
        category: "historia", level: 3, type: "find_true",
        options: [
            "Se inició formalmente con la toma de la prisión de la Bastilla en 1789.",
            "Supuso la restauración absoluta de la monarquía de los Luises para siempre.",
            "Tuvo lugar íntegramente durante el siglo XX.",
            "Napoleón Bonaparte gobernó Francia antes del estallido de la revolución."
        ],
        answer: "Se inició formalmente con la toma de la prisión de la Bastilla en 1789."
    },
    {
        q: "¿En qué siglo comenzó la conocida como época histórica del Renacimiento en Europa?",
        category: "historia", level: 2, type: "standard",
        accept: ["siglo xv", "siglo 15", "15"],
        options: ["Siglo XV", "Siglo XII", "Siglo XVIII", "Siglo X"],
        answer: "Siglo XV"
    },
    {
        q: "¿Es cierto que el Imperio Otomano conquistó la ciudad de Constantinopla en el año 1453 poniendo fin al Imperio Bizantino?",
        category: "historia", level: 3, type: "true_false",
        answer: "Verdadero"
    },

    // --- 4. GEOGRAFÍA ---
    {
        q: "¿Cuál es la ciudad capital oficial del país de Australia?",
        category: "geografia", level: 2, type: "standard",
        accept: ["canberra"],
        options: ["Canberra", "Sídney", "Melbourne", "Brisbane"],
        answer: "Canberra"
    },
    {
        q: "¿Qué estrecho marítimo separa las costas del continente europeo (España) del continente africano (Marruecos)?",
        category: "geografia", level: 2, type: "standard",
        accept: ["estrecho de gibraltar", "gibraltar"],
        options: ["Estrecho de Gibraltar", "Estrecho de Bering", "Estrecho de Magallanes", "Bósforo"],
        answer: "Estrecho de Gibraltar"
    },
    {
        q: "De los siguientes ríos del continente europeo, ¿cuál es el que cuenta con mayor longitud total?",
        category: "geografia", level: 3, type: "standard",
        accept: ["volga", "rio volga"],
        options: ["Río Volga", "Río Danubio", "Río Rin", "Río Támesis"],
        answer: "Río Volga"
    },
    {
        q: "¿Cuál es el país más extenso del mundo en superficie terrestre total?",
        category: "geografia", level: 1, type: "standard",
        accept: ["rusia"],
        options: ["Rusia", "Canadá", "China", "Estados Unidos"],
        answer: "Rusia"
    },
    {
        q: "¿En qué continente se encuentra ubicado el famoso río Nilo?",
        category: "geografia", level: 1, type: "standard",
        accept: ["africa", "áfrica"],
        options: ["África", "Asia", "América del Sur", "Europa"],
        answer: "África"
    },
    {
        q: "¿Es cierto que Canadá es el país con mayor cantidad de costa del mundo debido a sus innumerables lagos e islas?",
        category: "geografia", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estas ciudades son capitales de países europeos, pero una NO lo es. ¿Cuál es el intruso?",
        category: "geografia", level: 2, type: "find_false",
        options: ["Lisboa", "Barcelona", "Viena", "Budapest"],
        answer: "Barcelona"
    },
    {
        q: "¿Cuál es el océano más grande y extenso de nuestro planeta Tierra?",
        category: "geografia", level: 1, type: "standard",
        accept: ["oceano pacifico", "pacifico"],
        options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"],
        answer: "Océano Pacífico"
    },
    {
        q: "¿Qué cordillera montañosa actúa como frontera natural principal entre Europa y Asia?",
        category: "geografia", level: 3, type: "standard",
        accept: ["los montes urales", "urales"],
        options: ["Los Montes Urales", "Los Alpes", "Los Andes", "El Cáucaso"],
        answer: "Los Montes Urales"
    },
    {
        q: "De las siguientes afirmaciones geográficas, ¿cuál es la ÚNICA verdadera?",
        category: "geografia", level: 3, type: "find_true",
        options: [
            "El desierto del Sahara es el desierto más frío de todo el planeta.",
            "El río Amazonas descarga más agua dulce al mar que cualquier otro río del mundo.",
            "Madagascar es una isla situada en el mar Caribe.",
            "Italia es un país con forma de rectángulo perfecto."
        ],
        answer: "El río Amazonas descarga más agua dulce al mar que cualquier otro río del mundo."
    },
    {
        q: "¿Cuál es el país más poblado del mundo actualmente?",
        category: "geografia", level: 2, type: "standard",
        accept: ["india"],
        options: ["India", "China", "Estados Unidos", "Indonesia"],
        answer: "India"
    },
    {
        q: "¿Es cierto que el Vaticano es considerado el país independiente más pequeño del mundo en superficie?",
        category: "geografia", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿En qué país sudamericano se encuentra el famoso desierto de Atacama?",
        category: "geografia", level: 2, type: "standard",
        accept: ["chile"],
        options: ["Chile", "Perú", "Argentina", "Bolivia"],
        answer: "Chile"
    },
    {
        q: "¿Qué canal artificial de navegación une el océano Atlántico con el océano Pacífico en Centroamérica?",
        category: "geografia", level: 1, type: "standard",
        accept: ["canal de panama", "panama"],
        options: ["Canal de Panamá", "Canal de Suez", "Canal de Corinto", "Canal de Kiel"],
        answer: "Canal de Panamá"
    },
    {
        q: "¿Cuál es la capital del país de Argentina?",
        category: "geografia", level: 1, type: "standard",
        accept: ["buenos aires"],
        options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        answer: "Buenos Aires"
    },
    {
        q: "Tres de estos países forman parte de la península escandinava, pero uno NO. ¿Cuál es el intruso?",
        category: "geografia", level: 3, type: "find_false",
        options: ["Suecia", "Noruega", "Finlandia", "Dinamarca"],
        answer: "Dinamarca"
    },
    {
        q: "¿Qué mar interior separa Europa meridional de África septentrional?",
        category: "geografia", level: 1, type: "standard",
        accept: ["mar mediterraneo", "mediterraneo"],
        options: ["Mar Mediterráneo", "Mar Báltico", "Mar Negro", "Mar Caspio"],
        answer: "Mar Mediterráneo"
    },
    {
        q: "¿Es cierto que Islandia es conocida popularmente como 'la isla de hielo y fuego' debido a sus glaciares y volcanes activos?",
        category: "geografia", level: 2, type: "true_false",
        answer: "Verdadero"
    },

    // --- 5. CURIOSIDADES ---
    {
        q: "¿Es cierto que las huellas dactilares de los koalas son tan sorprendentemente similares a las de los humanos que pueden llegar a confundir a la policía en una escena del crimen?",
        category: "curiosidades", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es el animal terrestre que, a pesar de su enorme tamaño y aparente pesadez, es capaz de correr más rápido que un ser humano medio?",
        category: "curiosidades", level: 2, type: "standard",
        accept: ["hipopotamo", "el hipopotamo"],
        options: ["El hipopótamo", "El elefante africano", "El rinoceronte blanco", "El oso pardo"],
        answer: "El hipopótamo"
    },
    {
        q: "De las siguientes afirmaciones sobre datos insólitos de nuestro planeta, ¿cuál es la ÚNICA FALSA (el intruso)?",
        category: "curiosidades", level: 3, type: "find_false",
        options: [
            "En Venus, un día completo (rotación) dura más que un año entero (su órbita alrededor del Sol).",
            "El agua caliente puede congelarse más rápido que el agua fría bajo ciertas condiciones (Efecto Mpemba).",
            "Las jirafas necesitan dormir al menos 8 horas seguidas tumbadas en el suelo cada noche para sobrevivir.",
            "Hay más árboles en la Tierra que estrellas en nuestra galaxia según estimaciones de la NASA."
        ],
        answer: "Las jirafas necesitan dormir al menos 8 horas seguidas tumbadas en el suelo cada noche para sobrevivir."
    },
    {
        q: "¿Es cierto que los cerdos no pueden físicamente mirar hacia el cielo debido a la estructura anatómica de sus vértebras cervicales?",
        category: "curiosidades", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Qué fruta es técnicamente una baya y crece colgando de grandes plantas herbáceas que se confunden a menudo con árboles?",
        category: "curiosidades", level: 2, type: "standard",
        accept: ["platano", "banana"],
        options: ["Plátano", "Manzana", "Fresa", "Melocotón"],
        answer: "Plátano"
    },
    {
        q: "¿Cuál es el único mamífero del mundo que posee la capacidad natural de volar de forma sostenida?",
        category: "curiosidades", level: 1, type: "standard",
        accept: ["murcielago", "el murcielago"],
        options: ["El murciélago", "La ardilla voladora", "El lémur volador", "El colibrí"],
        answer: "El murciélago"
    },
    {
        q: "De las siguientes curiosidades sobre el cuerpo humano, ¿cuál es la ÚNICA verdadera?",
        category: "curiosidades", level: 3, type: "find_true",
        options: [
            "El ácido del estómago humano es lo suficientemente fuerte como para disolver hojas de afeitar de metal.",
            "Las uñas de las manos crecen exactamente a la misma velocidad que el cabello.",
            "Los seres humanos nacemos con un número menor de huesos que los que tenemos de adultos.",
            "El corazón humano nunca descansa ni un solo segundo a lo largo de toda la vida."
        ],
        answer: "El ácido del estómago humano es lo suficientemente fuerte como para disolver hojas de afeitar de metal."
    },
    {
        q: "¿Es cierto que las torres de la catedral de Notre Dame en París tienen gárgolas que sirven como desagües pluviales para el agua de lluvia?",
        category: "curiosidades", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Qué animal marino cuenta con tres corazones y sangre de color azul?",
        category: "curiosidades", level: 2, type: "standard",
        accept: ["pulpo"],
        options: ["Pulpo", "Tiburón", "Delfín", "Medusa"],
        answer: "Pulpo"
    },
    {
        q: "¿Es cierto que el ADN humano comparte aproximadamente un 50% de similitud genética con el de los plátanos?",
        category: "curiosidades", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos objetos fueron inventados en el siglo XX, pero uno de ellos es mucho más antiguo. ¿Cuál es el intruso?",
        category: "curiosidades", level: 3, type: "find_false",
        options: ["El teléfono móvil", "El horno microondas", "La imprenta moderna", "El velcro"],
        answer: "La imprenta moderna"
    },
    {
        q: "¿Cuál es el nombre del animal considerado el más venenoso del mundo, un anfibio pequeño de colores vivos?",
        category: "curiosidades", level: 2, type: "standard",
        accept: ["rana dardo venenosa", "rana de dardo", "rana flecha"],
        options: ["Rana dardo venenosa", "Serpiente taipán", "Medusa caja", "Pulpo de anillos azules"],
        answer: "Rana dardo venenosa"
    },
    {
        q: "¿Es cierto que en el espacio exterior los astronautas no pueden llorar con lágrimas que caigan por la mejilla debido a la falta de gravedad?",
        category: "curiosidades", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Qué mamífero acuático es famoso por utilizar herramientas como piedras para romper conchas de moluscos mientras flota bocarriba?",
        category: "curiosidades", level: 1, type: "standard",
        accept: ["nutria marina", "nutria"],
        options: ["Nutria marina", "Foca monje", "Morsa", "Delfín mular"],
        answer: "Nutria marina"
    },
    {
        q: "¿Cuál es el único planeta del sistema solar que gira sobre su eje de lado, prácticamente rodando sobre su órbita?",
        category: "curiosidades", level: 3, type: "standard",
        accept: ["urano"],
        options: ["Urano", "Venus", "Neptuno", "Saturno"],
        answer: "Urano"
    },
    {
        q: "¿Es cierto que las abejas pueden llegar a reconocer rostros humanos individuales si se les entrena para ello?",
        category: "curiosidades", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos alimentos son considerados verduras u hortalizas botánicamente, pero uno es una fruta. ¿Cuál es el intruso?",
        category: "curiosidades", level: 2, type: "find_false",
        options: ["Zanahoria", "Lechuga", "Tomate", "Brócoli"],
        answer: "Tomate"
    },
    {
        q: "¿Qué animal es capaz de regenerar extremidades completas y órganos vitales si sufre una lesión grave?",
        category: "curiosidades", level: 2, type: "standard",
        accept: ["ajolote", "salamandra"],
        options: ["Ajolote", "Estrella de mar", "Geco", "Cangrejo ermitaño"],
        answer: "Ajolote"
    },

    // --- 6. ARTE Y LITERATURA ---
    {
        q: "¿Quién es el autor de la célebre novela universal 'Don Quijote de la Mancha'?",
        category: "arteyliteratura", level: 1, type: "standard",
        accept: ["miguel de cervantes", "cervantes"],
        options: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca", "Quevedo"],
        answer: "Miguel de Cervantes"
    },
    {
        q: "¿Qué célebre pintor neerlandés se cortó parte de la oreja izquierda en un famoso episodio de crisis mental?",
        category: "arteyliteratura", level: 2, type: "standard",
        accept: ["vincent van gogh", "van gogh"],
        options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Salvador Dalí"],
        answer: "Vincent van Gogh"
    },
    {
        q: "De las siguientes obras maestras de la pintura universal, ¿cuál se encuentra expuesta de forma permanente en el Museo del Louvre de París?",
        category: "arteyliteratura", level: 3, type: "find_true",
        options: ["La Gioconda (Mona Lisa)", "Las Meninas", "El Guernica", "La noche estrellada"],
        answer: "La Gioconda (Mona Lisa)"
    },
    {
        q: "¿Cuál es el título de la famosa tragedia escrita por William Shakespeare sobre los amantes de Verona?",
        category: "arteyliteratura", level: 1, type: "standard",
        accept: ["romeo y julieta"],
        options: ["Romeo y Julieta", "Hamlet", "Macbeth", "Otelo"],
        answer: "Romeo y Julieta"
    },
    {
        q: "¿Es cierto que Pablo Picasso fue uno de los fundadores principales del movimiento artístico conocido como cubismo?",
        category: "arteyliteratura", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos autores pertenecen a la literatura en lengua española, pero uno es un escritor británico clásico. ¿Quién es el intruso?",
        category: "arteyliteratura", level: 2, type: "find_false",
        options: ["Gabriel García Márquez", "Jorge Luis Borges", "Charles Dickens", "Isabel Allende"],
        answer: "Charles Dickens"
    },
    {
        q: "¿Qué escultor y pintor renacentista italiano creó la famosa estatua de mármol del David y los frescos de la Capilla Sixtina?",
        category: "arteyliteratura", level: 2, type: "standard",
        accept: ["miguel angel", "michelangelo"],
        options: ["Miguel Ángel Buonarroti", "Leonardo da Vinci", "Rafael Sanzio", "Donatello"],
        answer: "Miguel Ángel Buonarroti"
    },
    {
        q: "¿En qué siglo se desarrolló principalmente el movimiento artístico del barroco en Europa?",
        category: "arteyliteratura", level: 3, type: "standard",
        accept: ["siglo xvii", "siglo 17", "17"],
        options: ["Siglo XVII", "Siglo XIV", "Siglo XIX", "Siglo XVI"],
        answer: "Siglo XVII"
    },
    {
        q: "¿Es cierto que el famoso cuadro 'El Guernica' fue pintado por Salvador Dalí como homenaje a los surrealistas?",
        category: "arteyliteratura", level: 2, type: "true_false",
        answer: "Falso"
    },
    {
        q: "¿Cuál es el nombre del protagonista y detective creado por el escritor Arthur Conan Doyle?",
        category: "arteyliteratura", level: 1, type: "standard",
        accept: ["sherlock holmes", "holmes"],
        options: ["Sherlock Holmes", "Hercule Poirot", "Agatha Christie", "Inspector Clouseau"],
        answer: "Sherlock Holmes"
    },
    {
        q: "De las siguientes novelas épicas de fantasía, ¿cuál fue escrita por el autor británico J.R.R. Tolkien?",
        category: "arteyliteratura", level: 1, type: "standard",
        accept: ["el señor de los anillos", "señor de los anillos"],
        options: ["El Señor de los Anillos", "Harry Potter", "Las Crónicas de Narnia", "Juego de Tronos"],
        answer: "El Señor de los Anillos"
    },
    {
        q: "¿Es cierto que Miguel de Cervantes Saavedra participó en la histórica batalla de Naval de Lepanto donde perdió la movilidad de su mano izquierda?",
        category: "arteyliteratura", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos pintores son máximos exponentes del movimiento surrealista, pero uno pertenece al impresionismo. ¿Cuál es el intruso?",
        category: "arteyliteratura", level: 3, type: "find_false",
        options: ["Salvador Dalí", "René Magritte", "Claude Monet", "Max Ernst"],
        answer: "Claude Monet"
    },
    {
        q: "¿Qué escritora británica es la creadora de la exitosa saga literaria juvenil de Harry Potter?",
        category: "arteyliteratura", level: 1, type: "standard",
        accept: ["j.k. rowling", "jk rowling", "rowling"],
        options: ["J.K. Rowling", "Jane Austen", "Virginia Woolf", "Agatha Christie"],
        answer: "J.K. Rowling"
    },
    {
        q: "¿Cuál es el título de la célebre obra de teatro de Federico García Lorca que narra la tragedia de una madre en la España rural?",
        category: "arteyliteratura", level: 2, type: "standard",
        accept: ["bodas de sangre", "la casa de bernarda alba"],
        options: ["Bodas de sangre", "Luces de bohemia", "Don Juan Tenorio", "La Celestina"],
        answer: "Bodas de sangre"
    },
    {
        q: "¿Qué famoso movimiento pictórico vanguardista lideró Georges Braque junto a Pablo Picasso a principios del siglo XX?",
        category: "arteyliteratura", level: 3, type: "standard",
        accept: ["cubismo"],
        options: ["Cubismo", "Impresionismo", "Romanticismo", "Neoclasicismo"],
        answer: "Cubismo"
    },
    {
        q: "¿Es cierto que Edgar Allan Poe es considerado uno de los grandes maestros pioneros del relato corto de terror y de la novela policíaca?",
        category: "arteyliteratura", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes premios literarios internacionales, ¿cuál es considerado el más prestigioso del mundo hispanohablante?",
        category: "arteyliteratura", level: 3, type: "standard",
        accept: ["premio cervantes", "premio miguel de cervantes"],
        options: ["Premio Miguel de Cervantes", "Premio Planeta", "Premio Nadal", "Premio Princesa de Asturias"],
        answer: "Premio Miguel de Cervantes"
    },

    // --- 7. CIENCIA Y TECNOLOGÍA ---
    {
        q: "¿Cuál es el planeta que se encuentra más cerca del Sol en nuestro sistema solar?",
        category: "cienciaytecnologia", level: 1, type: "standard",
        accept: ["mercurio"],
        options: ["Mercurio", "Venus", "Marte", "La Tierra"],
        answer: "Mercurio"
    },
    {
        q: "¿Qué lenguaje de programación multiplataforma web comparte nombre con una popular bebida caliente de origen tropical?",
        category: "cienciaytecnologia", level: 2, type: "standard",
        accept: ["java"],
        options: ["Java", "Python", "C++", "Ruby"],
        answer: "Java"
    },
    {
        q: "¿Cuál es el nombre del elemento químico cuyo símbolo oficial en la tabla periódica es 'Au'?",
        category: "cienciaytecnologia", level: 3, type: "standard",
        accept: ["oro"],
        options: ["Oro", "Plata", "Aluminio", "Cobre"],
        answer: "Oro"
    },
    {
        q: "¿Qué científico formuló las leyes clásicas de la física y la ley de la gravitación universal tras ver caer una manzana?",
        category: "cienciaytecnologia", level: 1, type: "standard",
        accept: ["isaac newton", "newton"],
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Isaac Newton"
    },
    {
        q: "¿Es cierto que la velocidad de la luz en el vacío es la velocidad límite absoluta para el desplazamiento de cualquier partícula en el universo?",
        category: "cienciaytecnologia", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes dispositivos de hardware informático, ¿cuál es considerado el cerebro principal encargado de procesar las instrucciones del sistema?",
        category: "cienciaytecnologia", level: 1, type: "standard",
        accept: ["procesador", "cpu"],
        options: ["Procesador (CPU)", "Memoria RAM", "Tarjeta gráfica", "Disco duro"],
        answer: "Procesador (CPU)"
    },
    {
        q: "Tres de estos científicos ganaron un Premio Nobel de Física o Química, pero uno de ellos es un físico teórico clásico anterior. ¿Quién es el intruso?",
        category: "cienciaytecnologia", level: 3, type: "find_false",
        options: ["Marie Curie", "Albert Einstein", "Galileo Galilei", "Max Planck"],
        answer: "Galileo Galilei"
    },
    {
        q: "¿Qué gas abunda en mayor porcentaje en la composición química de la atmósfera terrestre?",
        category: "cienciaytecnologia", level: 2, type: "standard",
        accept: ["nitrogeno"],
        options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"],
        answer: "Nitrógeno"
    },
    {
        q: "¿Es cierto que los agujeros negros se llaman así porque su fuerza gravitatoria es tan intensa que ni siquiera la luz puede escapar de ellos?",
        category: "cienciaytecnologia", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es la unidad básica de almacenamiento de información digital en informática compuesta por un valor de 0 o 1?",
        category: "cienciaytecnologia", level: 1, type: "standard",
        accept: ["bit"],
        options: ["Bit", "Byte", "Gigabyte", "Megabyte"],
        answer: "Bit"
    },
    {
        q: "De las siguientes afirmaciones sobre tecnología e internet, ¿cuál es la ÚNICA verdadera?",
        category: "cienciaytecnologia", level: 3, type: "find_true",
        options: [
            "Tim Berners-Lee es considerado el inventor principal de la World Wide Web (WWW).",
            "El primer ordenador personal del mundo fue fabricado por la empresa Google en 1998.",
            "El lenguaje HTML se utiliza exclusivamente para compilar programas de inteligencia artificial.",
            "La tecnología Wi-Fi fue inventada en el siglo XIX durante la Revolución Industrial."
        ],
        answer: "Tim Berners-Lee es considerado el inventor principal de la World Wide Web (WWW)."
    },
    {
        q: "¿Qué partícula subatómica con carga positiva se encuentra en el núcleo de los átomos?",
        category: "cienciaytecnologia", level: 2, type: "standard",
        accept: ["proton"],
        options: ["Protón", "Electrón", "Neutrón", "Fotón"],
        answer: "Protón"
    },
    {
        q: "¿Es cierto que la penicilina, el primer antibiótico de la historia, fue descubierta de forma accidental por Alexander Fleming?",
        category: "cienciaytecnologia", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es el nombre del telescopio espacial orbital lanzado conjuntamente por la NASA y la ESA que revolucionó la astronomía moderna en 1990?",
        category: "cienciaytecnologia", level: 2, type: "standard",
        accept: ["hubble", "telescopio hubble"],
        options: ["Telescopio Hubble", "James Webb", "Kepler", "Spitzer"],
        answer: "Telescopio Hubble"
    },
    {
        q: "¿Qué metal líquido a temperatura ambiente se utilizaba tradicionalmente en los termómetros médicos clásicos?",
        category: "cienciaytecnologia", level: 2, type: "standard",
        accept: ["mercurio"],
        options: ["Mercurio", "Galio", "Bromo", "Platino"],
        answer: "Mercurio"
    },
    {
        q: "Tres de estos navegadores web actuales utilizan el motor de código abierto Chromium, pero uno utiliza un motor completamente independiente. ¿Cuál es el intruso?",
        category: "cienciaytecnologia", level: 3, type: "find_false",
        options: ["Google Chrome", "Microsoft Edge", "Mozilla Firefox", "Brave"],
        answer: "Mozilla Firefox"
    },
    {
        q: "¿Cuál es el planeta más caliente de todo el sistema solar debido a un potente efecto invernadero en su atmósfera?",
        category: "cienciaytecnologia", level: 3, type: "standard",
        accept: ["venus"],
        options: ["Venus", "Mercurio", "Marte", "Júpiter"],
        answer: "Venus"
    },
    {
        q: "¿Es cierto que Nikola Tesla patentó el sistema de corriente alterna que hoy en día alimenta la red eléctrica de nuestros hogares?",
        category: "cienciaytecnologia", level: 2, type: "true_false",
        answer: "Verdadero"
    },

    // --- 8. CINE ---
    {
        q: "¿En qué año se estrenó en cines la película original de Star Wars (Episodio IV: Una nueva esperanza)?",
        category: "cine", level: 1, type: "standard",
        accept: ["1977"],
        options: ["1975", "1977", "1980", "1983"],
        answer: "1977"
    },
    {
        q: "Tres de estas películas fueron dirigidas por Christopher Nolan. ¿Cuál de ellas NO pertenece a su filmografía?",
        category: "cine", level: 2, type: "find_false",
        options: ["Interstellar", "Origen (Inception)", "Tenet", "Blade Runner 2049"],
        answer: "Blade Runner 2049"
    },
    {
        q: "¿Qué director surcoreano hizo historia al ganar el Óscar a la Mejor Película con 'Parásitos'?",
        category: "cine", level: 2, type: "standard",
        accept: ["bong joon ho", "bong joon-ho"],
        options: ["Bong Joon-ho", "Park Chan-wook", "Kim Jee-woon", "Ryoo Seung-wan"],
        answer: "Bong Joon-ho"
    },
    {
        q: "¿Cómo se llama el famoso tiburón gigante prehistórico que protagoniza la película de acción de tiburones?",
        category: "cine", level: 1, type: "standard",
        accept: ["megalodon", "el megalodon"],
        options: ["Megalodón", "Tiburón blanco", "Leviatán", "Mosasaurio"],
        answer: "Megalodón"
    },
    {
        q: "¿Es cierto que la película animada 'Toy Story' (1995) fue el primer largometraje de la historia del cine creado completamente por ordenador?",
        category: "cine", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De las siguientes sagas cinematográficas de ciencia ficción, ¿cuál fue creada por el director George Lucas?",
        category: "cine", level: 1, type: "standard",
        accept: ["star wars", "la guerra de las galaxias"],
        options: ["Star Wars", "Star Trek", "Matrix", "Alien"],
        answer: "Star Wars"
    },
    {
        q: "Tres de estos actores han interpretado al famoso agente secreto James Bond en la gran pantalla, pero uno NO lo ha hecho. ¿Quién es el intruso?",
        category: "cine", level: 3, type: "find_false",
        options: ["Daniel Craig", "Pierce Brosnan", "Tom Cruise", "Sean Connery"],
        answer: "Tom Cruise"
    },
    {
        q: "¿Qué película de suspense dirigida por Alfred Hitchcock en 1960 popularizó la icónica escena del asesinato en la ducha?",
        category: "cine", level: 2, type: "standard",
        accept: ["psicosis", "psycho"],
        options: ["Psicosis", "Los pájaros", "Vértigo", "La ventana indiscreta"],
        answer: "Psicosis"
    },
    {
        q: "¿Es cierto que la trilogía cinematográfica de 'El Señor de los Anillos' dirigida por Peter Jackson se rodó íntegramente en Nueva Zelanda?",
        category: "cine", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es el título de la película de animación de Hayao Miyazaki que ganó el Óscar y narra las aventuras de Chihiro en un mundo de espíritus?",
        category: "cine", level: 2, type: "standard",
        accept: ["el viaje de chihiro", "viaje de chihiro"],
        options: ["El viaje de Chihiro", "Mi vecino Totoro", "La princesa Mononoke", "El castillo ambulante"],
        answer: "El viaje de Chihiro"
    },
    {
        q: "De las siguientes afirmaciones sobre premios Óscar de Hollywood, ¿cuál es la ÚNICA verdadera?",
        category: "cine", level: 3, type: "find_true",
        options: [
            "Titanic, Ben-Hur y El Señor de los Anillos: El retorno del Rey comparten el récord de 11 premios Óscar ganados.",
            "Ninguna película de animación ha ganado jamás el premio Óscar a la Mejor Película.",
            "Walt Disney es la persona que menos nominaciones a los Óscar ha recibido en la historia.",
            "Los premios Óscar se entregan tradicionalmente en la ciudad de Nueva York."
        ],
        answer: "Titanic, Ben-Hur y El Señor de los Anillos: El retorno del Rey comparten el récord de 11 premios Óscar ganados."
    },
    {
        q: "¿Quién interpretó al carismático y excéntrico capitán Jack Sparrow en la saga cinematográfica 'Piratas del Caribe'?",
        category: "cine", level: 1, type: "standard",
        accept: ["johnny depp", "depp"],
        options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Leonardo DiCaprio"],
        answer: "Johnny Depp"
    },
    {
        q: "¿En qué año se estrenó la revolucionaria película de ciencia ficción 'Matrix' dirigida por las hermanas Wachowski?",
        category: "cine", level: 2, type: "standard",
        accept: ["1999"],
        options: ["1999", "1995", "2001", "1997"],
        answer: "1999"
    },
    {
        q: "¿Es cierto que Heath Ledger ganó un premio Óscar póstumo por su inolvidable interpretación del Joker en 'El caballero oscuro'?",
        category: "cine", level: 3, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos directores de cine son considerados maestros del cine de suspense y terror, pero uno destaca principalmente por sus comedias románticas. ¿Cuál es el intruso?",
        category: "cine", level: 3, type: "find_false",
        options: ["Alfred Hitchcock", "John Carpenter", "Richard Curtis", "Wes Craven"],
        answer: "Richard Curtis"
    },
    {
        q: "¿Cómo se llama el simpático pez cirujano azul olvidadizo que acompaña a Marlin en busca de Nemo?",
        category: "cine", level: 1, type: "standard",
        accept: ["dory"],
        options: ["Dory", "Marlin", "Bubbles", "Gill"],
        answer: "Dory"
    },
    {
        q: "¿Qué actor protagonizó al legendario personaje de boxeo Rocky Balboa en la famosa saga cinematográfica homónima?",
        category: "cine", level: 1, type: "standard",
        accept: ["sylvester stallone", "stallone"],
        options: ["Sylvester Stallone", "Arnold Schwarzenegger", "Bruce Willis", "Jean-Claude Van Damme"],
        answer: "Sylvester Stallone"
    },
    {
        q: "¿Es cierto que el director Quentin Tarantino es conocido por dirigir películas con diálogos muy elaborados, violencia estilizada y tramas no lineales?",
        category: "cine", level: 2, type: "true_false",
        answer: "Verdadero"
    },

    // --- 9. VIDEOJUEGOS ---
    {
        q: "¿Cuál es el nombre del protagonista con gorra verde de la mítica saga de aventuras 'The Legend of Zelda'?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["link"],
        options: ["Link", "Zelda", "Ganondorf", "Tingle"],
        answer: "Link"
    },
    {
        q: "¿Es cierto que el videojuego de construcción y supervivencia 'Minecraft' fue desarrollado inicialmente por una sola persona (Markus Notch Persson)?",
        category: "videojuegos", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes títulos clásicos de la historia de los videojuegos, ¿cuál fue el ÚNICO lanzado originalmente en la década de los años 70?",
        category: "videojuegos", level: 3, type: "find_true",
        options: ["Space Invaders", "Super Mario Bros", "Pac-Man", "Tetris"],
        answer: "Space Invaders"
    },
    {
        q: "¿Cómo se llama el fontanero italiano mascota oficial de la compañía de videojuegos Nintendo?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["mario"],
        options: ["Mario", "Luigi", "Sonic", "Kirby"],
        answer: "Mario"
    },
    {
        q: "¿Cuál es el nombre del erizo azul supersónico que actúa como mascota principal de la compañía SEGA?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["sonic"],
        options: ["Sonic", "Knuckles", "Tails", "Shadow"],
        answer: "Sonic"
    },
    {
        q: "¿Es cierto que la consola de videojuegos PlayStation original fue lanzada al mercado por la empresa Sony en el año 1994?",
        category: "videojuegos", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos videojuegos pertenecen al género de los juegos de disparos en primera persona (FPS), pero uno es un juego de rol (RPG) de mundo abierto. ¿Cuál es el intruso?",
        category: "videojuegos", level: 3, type: "find_false",
        options: ["Call of Duty", "Counter-Strike", "The Witcher 3: Wild Hunt", "Battlefield"],
        answer: "The Witcher 3: Wild Hunt"
    },
    {
        q: "¿Qué conocido motor gráfico multiplataforma fue desarrollado y creado por la empresa Epic Games?",
        category: "videojuegos", level: 3, type: "standard",
        accept: ["unreal engine"],
        options: ["Unreal Engine", "Unity", "Frostbite", "CryEngine"],
        answer: "Unreal Engine"
    },
    {
        q: "¿Es cierto que el juego 'Tetris' fue inventado y creado en la Unión Soviética por el programador Alekséi Pázhitnov en 1984?",
        category: "videojuegos", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "¿Cuál es el nombre del protagonista principal con cicatriz y tatuajes en la saga de videojuegos de acción 'God of War'?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["kratos"],
        options: ["Kratos", "Master Chief", "Nathan Drake", "Ezio Auditore"],
        answer: "Kratos"
    },
    {
        q: "De los siguientes estudios de desarrollo, ¿cuál es el creador de la famosa saga de videojuegos de rol 'The Elder Scrolls' y 'Fallout'?",
        category: "videojuegos", level: 2, type: "standard",
        accept: ["bethesda", "bethesda game studios"],
        options: ["Bethesda Game Studios", "Rockstar Games", "Ubisoft", "Electronic Arts"],
        answer: "Bethesda Game Studios"
    },
    {
        q: "¿Es cierto que la franquicia 'Pokémon' fue creada en Japón inicialmente como un par de juegos para la consola portátil Game Boy en 1996?",
        category: "videojuegos", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estas consolas fueron fabricadas y lanzadas por la empresa Nintendo, pero una pertenece a la competencia (Microsoft). ¿Cuál es el intruso?",
        category: "videojuegos", level: 2, type: "find_false",
        options: ["Nintendo Switch", "Super Nintendo", "Xbox Series X", "Game Boy"],
        answer: "Xbox Series X"
    },
    {
        q: "¿Cómo se llama el carismático cazatesoros protagonista de la saga de aventuras exclusiva de PlayStation 'Uncharted'?",
        category: "videojuegos", level: 2, type: "standard",
        accept: ["nathan drake", "drake"],
        options: ["Nathan Drake", "Lara Croft", "Kratos", "Solid Snake"],
        answer: "Nathan Drake"
    },
    {
        q: "¿Cuál es el nombre de la famosa princesa que el fontanero Mario debe rescatar habitualmente en los juegos clásicos de su franquicia?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["princesa peach", "peach"],
        options: ["Princesa Peach", "Princesa Zelda", "Princesa Daisy", "Rosalina"],
        answer: "Princesa Peach"
    },
    {
        q: "De las siguientes afirmaciones sobre la historia del medio interactivo, ¿cuál es la ÚNICA verdadera?",
        category: "videojuegos", level: 3, type: "find_true",
        options: [
            "El videojuego 'Pong' de Atari, lanzado en 1972, popularizó masivamente el sector arcade recreativo.",
            "La primera consola de videojuegos doméstica de la historia se lanzó en el siglo XXI.",
            "La compañía SEGA sigue fabricando consolas de sobremesa en la actualidad.",
            "Los cartuchos de ROM se inventaron después de los discos Blu-ray."
        ],
        answer: "El videojuego 'Pong' de Atari, lanzado en 1972, popularizó masivamente el sector arcade recreativo."
    },
    {
        q: "¿Qué videojuego multijugador masivo de género battle royale desarrollado por Epic Games popularizó las construcciones y los bailes virales en 2017?",
        category: "videojuegos", level: 1, type: "standard",
        accept: ["fortnite"],
        options: ["Fortnite", "PUBG", "Apex Legends", "Free Fire"],
        answer: "Fortnite"
    },
    {
        q: "¿Es cierto que la saga de sigilo 'Metal Gear Solid' fue dirigida y creada por el famoso diseñador japonés Hideo Kojima?",
        category: "videojuegos", level: 2, type: "true_false",
        answer: "Verdadero"
    },

    // --- 10. MÚSICA ---
    {
        q: "¿Cómo se llamaba el legendario vocalista principal de la banda británica Queen?",
        category: "musica", level: 1, type: "standard",
        accept: ["freddie mercury", "mercury"],
        options: ["Freddie Mercury", "Mick Jagger", "Elton John", "David Bowie"],
        answer: "Freddie Mercury"
    },
    {
        q: "¿Es cierto que el famoso festival de música electrónica 'Tomorrowland' se celebra originalmente en los Países Bajos (Ámsterdam)?",
        category: "musica", level: 2, type: "true_false",
        answer: "Falso"
    },
    {
        q: "De las siguientes leyendas de la música rock, ¿cuál de ellas formaba parte como guitarrista principal de la mítica banda 'Queen'?",
        category: "musica", level: 3, type: "standard",
        accept: ["brian may", "brian"],
        options: ["Brian May", "Eric Clapton", "Jimmy Page", "Slash"],
        answer: "Brian May"
    },
    {
        q: "¿Cómo se le conoce popularmente al legendario rey del rock and roll estadounidense fallecido en 1977?",
        category: "musica", level: 1, type: "standard",
        accept: ["elvis presley", "elvis"],
        options: ["Elvis Presley", "Michael Jackson", "Chuck Berry", "Frank Sinatra"],
        answer: "Elvis Presley"
    },
    {
        q: "¿Qué famoso miembro de la legendaria banda británica The Beatles fue asesinado frente a su edificio en Nueva York en 1980?",
        category: "musica", level: 2, type: "standard",
        accept: ["john lennon", "lennon"],
        options: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        answer: "John Lennon"
    },
    {
        q: "Tres de estos artistas musicales son iconos históricos del género pop, pero uno es un célebre compositor clásico. ¿Cuál es el intruso?",
        category: "musica", level: 2, type: "find_false",
        options: ["Michael Jackson", "Madonna", "Wolfgang Amadeus Mozart", "Prince"],
        answer: "Wolfgang Amadeus Mozart"
    },
    {
        q: "¿Cuál es el nombre del famoso rapero y productor estadounidense conocido artísticamente también como Slim Shady?",
        category: "musica", level: 1, type: "standard",
        accept: ["eminem", "marshall mathers"],
        options: ["Eminem", "Snoop Dogg", "Jay-Z", "Kanye West"],
        answer: "Eminem"
    },
    {
        q: "¿Es cierto que el instrumento musical conocido como piano cuenta tradicionalmente con un total de 88 teclas?",
        category: "musica", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De las siguientes afirmaciones sobre la historia de la música, ¿cuál es la ÚNICA verdadera?",
        category: "musica", level: 3, type: "find_true",
        options: [
            "Ludwig van Beethoven compuso algunas de sus obras maestras más célebres estando ya completamente sordo.",
            "La guitarra eléctrica se inventó antes que la flauta travesera en la prehistoria.",
            "El género musical del jazz nació en la ciudad europea de Viena a finales del siglo XVIII.",
            "Los Beatles eran originarios de la ciudad de Londres."
        ],
        answer: "Ludwig van Beethoven compuso algunas de sus obras maestras más célebres estando ya completamente sordo."
    },
    {
        q: "¿Qué legendaria banda de rock británica publicó en 1973 el icónico álbum conceptual 'The Dark Side of the Moon'?",
        category: "musica", level: 3, type: "standard",
        accept: ["pink floyd"],
        options: ["Pink Floyd", "Led Zeppelin", "The Rolling Stones", "The Who"],
        answer: "Pink Floyd"
    },
    {
        q: "¿Cómo se llama el famoso festival de música y arte al aire libre que se celebra anualmente en el desierto de Colorado (California)?",
        category: "musica", level: 2, type: "standard",
        accept: ["coachella"],
        options: ["Coachella", "Glastonbury", "Lollapalooza", "Rock in Rio"],
        answer: "Coachella"
    },
    {
        q: "¿Es cierto que Michael Jackson ostenta el título del álbum más vendido de todos los tiempos en la historia de la música con 'Thriller'?",
        category: "musica", level: 1, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos músicos formaron parte de la mítica banda de rock británica Led Zeppelin, pero uno formaba parte de The Rolling Stones. ¿Cuál es el intruso?",
        category: "musica", level: 3, type: "find_false",
        options: ["Robert Plant", "Jimmy Page", "Mick Jagger", "John Bonham"],
        answer: "Mick Jagger"
    },
    {
        q: "¿Qué artista colombiana es internacionalmente conocida como la reina de la música latina con éxitos globales como 'Hips Don't Lie'?",
        category: "musica", level: 1, type: "standard",
        accept: ["shakira"],
        options: ["Shakira", "Rosalía", "Jennifer Lopez", "Karol G"],
        answer: "Shakira"
    },
    {
        q: "¿En qué país europeo nació el célebre compositor clásico Wolfgang Amadeus Mozart en el siglo XVIII?",
        category: "musica", level: 2, type: "standard",
        accept: ["austria"],
        options: ["Austria", "Alemania", "Italia", "Francia"],
        answer: "Austria"
    },
    {
        q: "¿Cuál es el nombre del legendario guitarrista zurdo considerado uno de los músicos más influyentes de la historia del rock psicodélico de los años 60?",
        category: "musica", level: 2, type: "standard",
        accept: ["jimi hendrix", "hendrix"],
        options: ["Jimi Hendrix", "Eric Clapton", "B.B. King", "Carlos Santana"],
        answer: "Jimi Hendrix"
    },
    {
        q: "¿Es cierto que el formato de archivo de audio comprimido MP3 revolucionó la distribución digital de música a finales de los años 90?",
        category: "musica", level: 2, type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "De los siguientes géneros musicales, ¿cuál tiene sus raíces históricas y culturales originarias en la ciudad de Nueva Orleans (Estados Unidos) a principios del siglo XX?",
        category: "musica", level: 3, type: "standard",
        accept: ["jazz"],
        options: ["Jazz", "Heavy Metal", "Techno", "Grunge"],
        answer: "Jazz"
    }
];
