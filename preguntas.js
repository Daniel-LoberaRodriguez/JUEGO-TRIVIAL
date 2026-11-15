const questionsDB = [
    // --- MOTO Y MOTOR ---
    {
        q: "¿Qué generación del Honda Civic cuenta con el icónico motor de gasolina 1.6 VTEC (D16V1)?",
        category: "motor",
        level: 1,
        type: "standard",
        accept: ["7 generacion", "septima generacion", "7a gen", "civic 7"],
        options: ["Séptima generación (7ª Gen)", "Quinta generación", "Octava generación", "Novena generación"],
        answer: "Séptima generación (7ª Gen)"
    },
    {
        q: "¿Qué significan las siglas VTEC en los motores desarrollados por Honda?",
        category: "motor",
        level: 2,
        type: "standard",
        accept: ["variable valve timing and lift electronic control", "variable valve timing"],
        options: ["Variable Valve Timing and Lift Electronic Control", "Very Fast Turbo Engine Car", "Valve Technology Electronic Control", "Vehicle Traction Energy Control"],
        answer: "Variable Valve Timing and Lift Electronic Control"
    },
    {
        q: "De las siguientes afirmaciones sobre mecánica de competición, ¿cuál es la ÚNICA VERDADERA?",
        category: "motor",
        level: 3,
        type: "find_true",
        options: [
            "El turbocompresor aprovecha la energía de los gases de escape para comprimir el aire de admisión.",
            "Los motores diésel de calle modernos utilizan bujías de encendido convencionales.",
            "Un diferencial abierto bloquea siempre las dos ruedas al 100% en línea recta.",
            "Los frenos carbocerámicos pierden eficacia por completo a baja temperatura de uso."
        ],
        answer: "El turbocompresor aprovecha la energía de los gases de escape para comprimir el aire de admisión."
    },

    // --- DEPORTES ---
    {
        q: "¿Qué piloto logró el campeonato mundial de Fórmula 1 en la temporada 2023?",
        category: "deportes",
        level: 1,
        type: "standard",
        accept: ["max verstappen", "verstappen"],
        options: ["Max Verstappen", "Lewis Hamilton", "Fernando Alonso", "Charles Leclerc"],
        answer: "Max Verstappen"
    },
    {
        q: "¿Es cierto que Usain Bolt ostenta el récord mundial oficial en la prueba de los 100 metros lisos?",
        category: "deportes",
        level: 1,
        type: "true_false",
        answer: "Verdadero"
    },
    {
        q: "Tres de estos tenistas ganaron múltiples Grand Slams en tierra batida, pero uno NUNCA ganó Roland Garros. ¿Quién es el intruso?",
        category: "deportes",
        level: 3,
        type: "find_false",
        options: [
            "Rafael Nadal",
            "Björn Borg",
            "Pete Sampras",
            "Gustavo Kuerten"
        ],
        answer: "Pete Sampras"
    },

    // --- CINE ---
    {
        q: "¿En qué año se estrenó en cines la película original de Star Wars (Episodio IV: Una nueva esperanza)?",
        category: "cine",
        level: 1,
        type: "standard",
        accept: ["1977"],
        options: ["1975", "1977", "1980", "1983"],
        answer: "1977"
    },
    {
        q: "Tres de estas películas fueron dirigidas por Christopher Nolan. ¿Cuál de ellas NO pertenece a su filmografía?",
        category: "cine",
        level: 2,
        type: "find_false",
        options: [
            "Interstellar",
            "Origen (Inception)",
            "Tenet",
            "Blade Runner 2049"
        ],
        answer: "Blade Runner 2049"
    },
    {
        q: "¿Qué director surcoreano hizo historia al ganar el Óscar a la Mejor Película con 'Parásitos'?",
        category: "cine",
        level: 2,
        type: "standard",
        accept: ["bong joon ho", "bong joon-ho"],
        options: ["Bong Joon-ho", "Park Chan-wook", "Kim Jee-woon", "Ryoo Seung-wan"],
        answer: "Bong Joon-ho"
    },

    // --- MÚSICA ---
    {
        q: "¿Cómo se llamaba el legendario vocalista principal de la banda británica Queen?",
        category: "musica",
        level: 1,
        type: "standard",
        accept: ["freddie mercury", "mercury"],
        options: ["Freddie Mercury", "Mick Jagger", "Elton John", "David Bowie"],
        answer: "Freddie Mercury"
    },
    {
        q: "¿Es cierto que el famoso festival de música electrónica 'Tomorrowland' se celebra originalmente en los Países Bajos (Ámsterdam)?",
        category: "musica",
        level: 2,
        type: "true_false",
        answer: "Falso" // Se celebra en Boom, Bélgica
    },

    // --- VIDEOJUEGOS ---
    {
        q: "¿Cuál es el nombre del fontanero con bigote mascota oficial de la compañía Nintendo?",
        category: "videojuegos",
        level: 1,
        type: "standard",
        accept: ["mario"],
        options: ["Mario", "Luigi", "Sonic", "Link"],
        answer: "Mario"
    },
    {
        q: "¿Cómo se llama el conocido motor gráfico multiplataforma desarrollado por la empresa Epic Games?",
        category: "videojuegos",
        level: 3,
        type: "standard",
        accept: ["unreal engine"],
        options: ["Unreal Engine", "Unity", "Frostbite", "CryEngine"],
        answer: "Unreal Engine"
    },

    // --- HISTORIA ---
    {
        q: "¿En qué año se produjo la histórica caída del Muro de Berlín?",
        category: "historia",
        level: 1,
        type: "standard",
        accept: ["1989"],
        options: ["1985", "1989", "1991", "1975"],
        answer: "1989"
    },
    {
        q: "¿Qué civilización precolombina construyó la ciudadela en piedra de Machu Picchu en los Andes?",
        category: "historia",
        level: 2,
        type: "standard",
        accept: ["los incas", "inca"],
        options: ["Los Incas", "Los Mayas", "Los Aztecas", "Los Toltecas"],
        answer: "Los Incas"
    },

    // --- CIENCIA ---
    {
        q: "¿Cuál es el planeta que se encuentra más cerca del Sol en nuestro sistema solar?",
        category: "ciencia",
        level: 1,
        type: "standard",
        accept: ["mercurio"],
        options: ["Mercurio", "Venus", "Marte", "La Tierra"],
        answer: "Mercurio"
    },
    {
        q: "¿Cuál es el nombre del elemento químico cuyo símbolo oficial en la tabla periódica es 'Au'?",
        category: "ciencia",
        level: 3,
        type: "standard",
        accept: ["oro"],
        options: ["Oro", "Plata", "Aluminio", "Cobre"],
        answer: "Oro"
    },

    // --- GEOGRAFÍA ---
    {
        q: "¿Cuál es la ciudad capital oficial del país de Australia?",
        category: "geografia",
        level: 2,
        type: "standard",
        accept: ["canberra"],
        options: ["Canberra", "Sídney", "Melbourne", "Brisbane"],
        answer: "Canberra"
    },
    {
        q: "¿Qué estrecho marítimo separa las costas del continente europeo (España) del continente africano (Marruecos)?",
        category: "geografia",
        level: 2,
        type: "standard",
        accept: ["estrecho de gibraltar", "gibraltar"],
        options: ["Estrecho de Gibraltar", "Estrecho de Bering", "Estrecho de Magallanes", "Bósforo"],
        answer: "Estrecho de Gibraltar"
    },

    // --- CULTURA POP ---
    {
        q: "¿Cómo se llama la popular plataforma de vídeos cortos en formato vertical propiedad de ByteDance?",
        category: "culturapop",
        level: 1,
        type: "standard",
        accept: ["tiktok"],
        options: ["TikTok", "Instagram", "YouTube", "Twitch"],
        answer: "TikTok"
    },
    {
        q: "¿En qué exitosa serie de ciencia ficción de Netflix los protagonistas se enfrentan a criaturas del 'Upside Down'?",
        category: "culturapop",
        level: 2,
        type: "standard",
        accept: ["stranger things"],
        options: ["Stranger Things", "Dark", "Breaking Bad", "The Office"],
        answer: "Stranger Things"
    },

    // --- LITERATURA ---
    {
        q: "¿Quién es el autor de la célebre novela universal 'Don Quijote de la Mancha'?",
        category: "literatura",
        level: 1,
        type: "standard",
        accept: ["miguel de cervantes", "cervantes"],
        options: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca", "Quevedo"],
        answer: "Miguel de Cervantes"
    },
    {
        q: "¿Qué célebre escritor británico creó al famoso detective privado Sherlock Holmes?",
        category: "literatura",
        level: 2,
        type: "standard",
        accept: ["arthur conan doyle", "conan doyle"],
        options: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Stephen King"],
        answer: "Arthur Conan Doyle"
    }
];
