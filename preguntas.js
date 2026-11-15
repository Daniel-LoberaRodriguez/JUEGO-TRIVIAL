const questionsDB = [
  // =========================================================================
  // 1. ESTÁNDAR - NIVEL 1 (50 PREGUNTAS: 1 a 50)
  // =========================================================================
  { q: "¿En qué año se aprobó la actual Constitución Española?", category: "culturageneral", level: 1, type: "standard", accept: ["1978"], options: ["1978", "1975", "1981", "1976"], answer: "1978" },
  { q: "¿Qué filósofo griego escribió 'La República' y formuló la teoría de las Ideas?", category: "culturageneral", level: 1, type: "standard", accept: ["platon", "platón"], options: ["Platón", "Aristóteles", "Sócrates", "Epicuro"], answer: "Platón" },
  { q: "¿Cuál es la unidad básica estructural y funcional de todos los seres vivos?", category: "culturageneral", level: 1, type: "standard", accept: ["celula", "célula", "la celula"], options: ["La célula", "El átomo", "El tejido", "La mitocondria"], answer: "La célula" },
  { q: "¿Quién escribió 'La Casa de Bernarda Alba'?", category: "culturageneral", level: 1, type: "standard", accept: ["federico garcia lorca", "lorca", "garcia lorca"], options: ["Federico García Lorca", "Rafael Alberti", "Luis Cernuda", "Antonio Machado"], answer: "Federico García Lorca" },
  { q: "¿Qué gas es el más abundante en la atmósfera terrestre?", category: "culturageneral", level: 1, type: "standard", accept: ["nitrogeno", "nitrógeno"], options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"], answer: "Nitrógeno" },
  { q: "¿En qué año comenzó la Revolución Francesa?", category: "culturageneral", level: 1, type: "standard", accept: ["1789"], options: ["1789", "1776", "1804", "1812"], answer: "1789" },
  { q: "¿Cuál es la derivada de la función f(x) = x²?", category: "culturageneral", level: 1, type: "standard", accept: ["2x"], options: ["2x", "x", "x²", "2"], answer: "2x" },
  { q: "¿Qué orgánulo celular se encarga principalmente de la respiración celular y producción de ATP?", category: "culturageneral", level: 1, type: "standard", accept: ["mitocondria", "las mitocondrias"], options: ["Mitocondria", "Ribosoma", "Cloroplasto", "Lisosoma"], answer: "Mitocondria" },
  { q: "¿En qué año estalló la Guerra Civil Española?", category: "culturageneral", level: 1, type: "standard", accept: ["1936"], options: ["1936", "1939", "1931", "1934"], answer: "1936" },
  { q: "¿Qué filósofo pronunció la célebre frase 'Pienso, luego existo'?", category: "culturageneral", level: 1, type: "standard", accept: ["rene descartes", "descartes"], options: ["René Descartes", "Immanuel Kant", "David Hume", "John Locke"], answer: "René Descartes" },
  { q: "¿Cuál es el símbolo químico del sodio en la tabla periódica?", category: "culturageneral", level: 1, type: "standard", accept: ["na"], options: ["Na", "So", "Sd", "K"], answer: "Na" },
  { q: "¿Qué movimiento literario del siglo XIX exaltaba los sentimientos, la libertad y lo subjetivo?", category: "culturageneral", level: 1, type: "standard", accept: ["romanticismo", "el romanticismo"], options: ["Romanticismo", "Realismo", "Neoclasicismo", "Barroco"], answer: "Romanticismo" },
  { q: "¿En qué año cayó el Imperio Romano de Occidente?", category: "culturageneral", level: 1, type: "standard", accept: ["476"], options: ["476 d.C.", "1453 d.C.", "313 d.C.", "410 d.C."], answer: "476 d.C." },
  { q: "¿Qué nombre recibe el cambio de estado de sólido a gas sin pasar por líquido?", category: "culturageneral", level: 1, type: "standard", accept: ["sublimacion", "sublimación"], options: ["Sublimación", "Vaporización", "Condensación", "Fusión"], answer: "Sublimación" },
  { q: "¿Cuál es el pico más alto de la Península Ibérica?", category: "culturageneral", level: 1, type: "standard", accept: ["mulhacen", "mulhacén"], options: ["Mulhacén", "Teide", "Aneto", "Veleta"], answer: "Mulhacén" },
  { q: "¿Qué ácido nucleico contiene la información genética hereditaria en la mayoría de organismos?", category: "culturageneral", level: 1, type: "standard", accept: ["adn"], options: ["ADN", "ARN", "ATP", "AMP"], answer: "ADN" },
  { q: "¿En qué año se proclamó la Segunda República Española?", category: "culturageneral", level: 1, type: "standard", accept: ["1931"], options: ["1931", "1936", "1923", "1873"], answer: "1931" },
  { q: "¿Qué autor escribió 'Campos de Castilla'?", category: "culturageneral", level: 1, type: "standard", accept: ["antonio machado", "machado"], options: ["Antonio Machado", "Juan Ramón Jiménez", "Miguel de Unamuno", "Pío Baroja"], answer: "Antonio Machado" },
  { q: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?", category: "culturageneral", level: 1, type: "standard", accept: ["newton", "newtons"], options: ["Newton", "Julio", "Vatio", "Pascal"], answer: "Newton" },
  { q: "¿Qué nombre recibe la línea imaginaria que divide la Tierra en hemisferio norte y sur?", category: "culturageneral", level: 1, type: "standard", accept: ["ecuador", "el ecuador"], options: ["Ecuador", "Meridiano de Greenwich", "Trópico de Cáncer", "Trópico de Capricornio"], answer: "Ecuador" },
  { q: "¿En qué siglo se desarrolló principalmente el Siglo de Oro español?", category: "culturageneral", level: 1, type: "standard", accept: ["xvi y xvii", "16 y 17", "xvii"], options: ["XVI y XVII", "XV y XVI", "XVII y XVIII", "XIV y XV"], answer: "XVI y XVII" },
  { q: "¿Qué macromolécula está formada por la unión de aminoácidos?", category: "culturageneral", level: 1, type: "standard", accept: ["proteina", "proteínas", "proteinas"], options: ["Proteína", "Lípido", "Glúcido", "Ácido nucleico"], answer: "Proteína" },
  { q: "¿En qué año llegó Cristóbal Colón a América?", category: "culturageneral", level: 1, type: "standard", accept: ["1492"], options: ["1492", "1498", "1502", "1488"], answer: "1492" },
  { q: "¿Qué filosofo alemán afirmó que 'Dios ha muerto'?", category: "culturageneral", level: 1, type: "standard", accept: ["friedrich nietzsche", "nietzsche"], options: ["Friedrich Nietzsche", "Karl Marx", "Arthur Schopenhauer", "Georg Hegel"], answer: "Friedrich Nietzsche" },
  { q: "¿Cuál es el valor aproximado de la aceleración de la gravedad en la superficie terrestre?", category: "culturageneral", level: 1, type: "standard", accept: ["9.8", "9,8", "9.8 m/s2"], options: ["9,8 m/s²", "10,8 m/s²", "8,9 m/s²", "6,67 m/s²"], answer: "9,8 m/s²" },
  { q: "¿Qué tipo de enlace químico se forma al compartir pares de electrones entre no metales?", category: "culturageneral", level: 1, type: "standard", accept: ["covalente", "enlace covalente"], options: ["Covalente", "Iónico", "Metálico", "Puente de hidrógeno"], answer: "Covalente" },
  { q: "¿Quién pintó 'Las Meninas'?", category: "culturageneral", level: 1, type: "standard", accept: ["diego velazquez", "velazquez", "velázquez"], options: ["Diego Velázquez", "Francisco de Goya", "El Greco", "Murillo"], answer: "Diego Velázquez" },
  { q: "¿Cuál es el río más caudaloso de la Península Ibérica?", category: "culturageneral", level: 1, type: "standard", accept: ["ebro", "el ebro"], options: ["Ebro", "Tajo", "Duero", "Guadalquivir"], answer: "Ebro" },
  { q: "¿En qué año comenzó la Primera Guerra Mundial?", category: "culturageneral", level: 1, type: "standard", accept: ["1914"], options: ["1914", "1918", "1939", "1917"], answer: "1914" },
  { q: "¿Qué obra anónima inaugura la novela picaresca española en 1554?", category: "culturageneral", level: 1, type: "standard", accept: ["el lazarillo de tormes", "lazarillo de tormes", "lazarillo"], options: ["El Lazarillo de Tormes", "El Buscón", "Guzmán de Alfarache", "La Celestina"], answer: "El Lazarillo de Tormes" },
  { q: "¿Qué partícula subatómica tiene carga eléctrica negativa?", category: "culturageneral", level: 1, type: "standard", accept: ["electron", "electrón"], options: ["Electrón", "Protón", "Neutrón", "Positrón"], answer: "Electrón" },
  { q: "¿Cómo se llama el proceso por el cual las plantas convierten energía lumínica en química?", category: "culturageneral", level: 1, type: "standard", accept: ["fotosintesis", "fotosíntesis"], options: ["Fotosíntesis", "Quimiosíntesis", "Glucólisis", "Fermentación"], answer: "Fotosíntesis" },
  { q: "¿Qué ciudad fue el epicentro del Renacimiento italiano en el siglo XV?", category: "culturageneral", level: 1, type: "standard", accept: ["florencia"], options: ["Florencia", "Venecia", "Milán", "Nápoles"], answer: "Florencia" },
  { q: "¿Qué rey español fue conocido como 'El Rey Planeta'?", category: "culturageneral", level: 1, type: "standard", accept: ["felipe iv", "felipe 4"], options: ["Felipe IV", "Felipe II", "Carlos I", "Carlos III"], answer: "Felipe IV" },
  { q: "¿Cuál es el pH neutro de una disolución acuosa a 25 °C?", category: "culturageneral", level: 1, type: "standard", accept: ["7", "siete"], options: ["7", "0", "14", "5"], answer: "7" },
  { q: "¿Qué autor escribió 'La Regenta'?", category: "culturageneral", level: 1, type: "standard", accept: ["leopoldo alas clarin", "clarin", "clarín"], options: ["Leopoldo Alas 'Clarín'", "Benito Pérez Galdós", "Emilia Pardo Bazán", "Juan Valera"], answer: "Leopoldo Alas 'Clarín'" },
  { q: "¿Cuál es el único mamífero capaz de volar activamente?", category: "culturageneral", level: 1, type: "standard", accept: ["murcielago", "el murcielago", "murciélago"], options: ["Murciélago", "Ardilla voladora", "Colugo", "Ornitorrinco"], answer: "Murciélago" },
  { q: "¿En qué año terminó la Segunda Guerra Mundial?", category: "culturageneral", level: 1, type: "standard", accept: ["1945"], options: ["1945", "1944", "1946", "1942"], answer: "1945" },
  { q: "¿Qué nombre recibe el triángulo que tiene todos sus lados y ángulos iguales?", category: "culturageneral", level: 1, type: "standard", accept: ["equilatero", "equilátero"], options: ["Equilátero", "Isósceles", "Escaleno", "Rectángulo"], answer: "Equilátero" },
  { q: "¿Qué tratado puso fin a la Primera Guerra Mundial en 1919?", category: "culturageneral", level: 1, type: "standard", accept: ["versalles", "tratado de versalles"], options: ["Tratado de Versalles", "Tratado de Utrecht", "Paz de Westfalia", "Tratado de París"], answer: "Tratado de Versalles" },
  { q: "¿Qué científico propuso la teoría de la evolución por selección natural?", category: "culturageneral", level: 1, type: "standard", accept: ["charles darwin", "darwin"], options: ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Louis Pasteur"], answer: "Charles Darwin" },
  { q: "¿Cuál es la capital de la comunidad autónoma de Extremadura?", category: "culturageneral", level: 1, type: "standard", accept: ["merida", "mérida"], options: ["Mérida", "Badajoz", "Cáceres", "Plasencia"], answer: "Mérida" },
  { q: "¿Qué figura retórica consiste en la exageración intencionada de la realidad?", category: "culturageneral", level: 1, type: "standard", accept: ["hiperbole", "hipérbole"], options: ["Hipérbole", "Metáfora", "Metonimia", "Antítesis"], answer: "Hipérbole" },
  { q: "¿Cuál es el símbolo químico del hierro?", category: "culturageneral", level: 1, type: "standard", accept: ["fe"], options: ["Fe", "Hi", "Ir", "He"], answer: "Fe" },
  { q: "¿En qué año se promulgó la primera Constitución española, 'La Pepa'?", category: "culturageneral", level: 1, type: "standard", accept: ["1812"], options: ["1812", "1808", "1837", "1869"], answer: "1812" },
  { q: "¿Qué filósofo es considerado el padre del empirismo moderno junto a Locke y Berkeley?", category: "culturageneral", level: 1, type: "standard", accept: ["david hume", "hume"], options: ["David Hume", "Baruch Spinoza", "Gottfried Leibniz", "Thomas Hobbes"], answer: "David Hume" },
  { q: "¿Qué tipo de división celular produce cuatro células hijas haploides?", category: "culturageneral", level: 1, type: "standard", accept: ["meiosis"], options: ["Meiosis", "Mitosis", "Bipartición", "Gemación"], answer: "Meiosis" },
  { q: "¿Cuál es la unidad de resistencia eléctrica en el Sistema Internacional?", category: "culturageneral", level: 1, type: "standard", accept: ["ohmio", "ohmios"], options: ["Ohmio", "Voltio", "Amperio", "Faradio"], answer: "Ohmio" },
  { q: "¿Quién escribió 'Niebla' y fue figura clave de la Generación del 98?", category: "culturageneral", level: 1, type: "standard", accept: ["miguel de unamuno", "unamuno"], options: ["Miguel de Unamuno", "Azorín", "Ramiro de Maeztu", "Valle-Inclán"], answer: "Miguel de Unamuno" },
  { q: "¿Cómo se llama el punto de la superficie terrestre situado directamente encima del hipocentro de un terremoto?", category: "culturageneral", level: 1, type: "standard", accept: ["epicentro"], options: ["Epicentro", "Falla", "Cráter", "Dorsal"], answer: "Epicentro" },

  // =========================================================================
  // 2. ESTÁNDAR - NIVEL 2 (125 PREGUNTAS: 51 a 175)
  // =========================================================================
  { q: "¿Qué tratado de 1713 puso fin a la Guerra de Sucesión Española y cedió Gibraltar a Gran Bretaña?", category: "culturageneral", level: 2, type: "standard", accept: ["utrecht", "tratado de utrecht"], options: ["Tratado de Utrecht", "Paz de los Pirineos", "Tratado de Rastatt", "Tratado de Tordesillas"], answer: "Tratado de Utrecht" },
  { q: "¿Cómo llama Kant a los juicios universales y necesarios que amplían nuestro conocimiento?", category: "culturageneral", level: 2, type: "standard", accept: ["sinteticos a priori", "juicios sinteticos a priori"], options: ["Sintéticos a priori", "Analíticos a priori", "Sintéticos a posteriori", "Categóricos"], answer: "Sintéticos a priori" },
  { q: "¿Qué enzima desenrolla la doble hélice de ADN durante la replicación?", category: "culturageneral", level: 2, type: "standard", accept: ["helicasa"], options: ["Helicasa", "ADN polimerasa", "Ligasa", "Primasa"], answer: "Helicasa" },
  { q: "¿Qué subgénero teatral breve y cómico de Siglo de Oro escribió Cervantes con obras como 'El retablo de las maravillas'?", category: "culturageneral", level: 2, type: "standard", accept: ["entremes", "entremés", "entremeses"], options: ["Entremés", "Auto sacramental", "Sainete", "Loa"], answer: "Entremés" },
  { q: "¿Qué ley de los gases establece que a temperatura constante el volumen es inversamente proporcional a la presión?", category: "culturageneral", level: 2, type: "standard", accept: ["ley de boyle", "boyle", "boyle-mariotte"], options: ["Ley de Boyle-Mariotte", "Ley de Charles", "Ley de Gay-Lussac", "Ley de Avogadro"], answer: "Ley de Boyle-Mariotte" },
  { q: "¿Cómo se llamó el golpe de Estado fallido en España el 23 de febrero de 1981?", category: "culturageneral", level: 2, type: "standard", accept: ["23f", "23-f"], options: ["23-F", "18-J", "10-A", "20-N"], answer: "23-F" },
  { q: "¿Qué filósofo define al ser humano como un 'animal político' (zoon politikon)?", category: "culturageneral", level: 2, type: "standard", accept: ["aristoteles", "aristóteles"], options: ["Aristóteles", "Platón", "Cicerón", "Séneca"], answer: "Aristóteles" },
  { q: "¿Cuál es la integral indefinida de f(x) = 1/x?", category: "culturageneral", level: 2, type: "standard", accept: ["ln|x| + c", "ln(x)", "logaritmo neperiano de x"], options: ["ln|x| + C", "e^x + C", "-1/x² + C", "x⁰ + C"], answer: "ln|x| + C" },
  { q: "¿Qué ministro español impulsó la desamortización eclesiástica de 1836?", category: "culturageneral", level: 2, type: "standard", accept: ["mendizabal", "juan alvarez mendizabal", "mendizábal"], options: ["Juan Álvarez Mendizábal", "Pascual Madoz", "Baldomero Espartero", "Ramón María Narváez"], answer: "Juan Álvarez Mendizábal" },
  { q: "¿Qué nombre recibe el conjunto de reacciones metabólicas que degradan moléculas complejas para obtener energía?", category: "culturageneral", level: 2, type: "standard", accept: ["catabolismo"], options: ["Catabolismo", "Anabolismo", "Homeostasis", "Osmosis"], answer: "Catabolismo" },
  { q: "¿Qué poeta del 27 escribió 'Poeta en Nueva York'?", category: "culturageneral", level: 2, type: "standard", accept: ["federico garcia lorca", "lorca"], options: ["Federico García Lorca", "Vicente Aleixandre", "Pedro Salinas", "Jorge Guillén"], answer: "Federico García Lorca" },
  { q: "¿Qué magnitud física se mide en julios (J) y equivale al producto escalar de fuerza por desplazamiento?", category: "culturageneral", level: 2, type: "standard", accept: ["trabajo", "trabajo mecanico"], options: ["Trabajo", "Potencia", "Impulso", "Momento lineal"], answer: "Trabajo" },
  { q: "¿Qué tipo de clima predomina en la mayor parte del interior de la Península Ibérica?", category: "culturageneral", level: 2, type: "standard", accept: ["mediterraneo continentalizado", "mediterraneo interior"], options: ["Mediterráneo continentalizado", "Oceánico", "Subtropical", "De montaña"], answer: "Mediterráneo continentalizado" },
  { q: "¿En qué año ocurrió el Crack bursátil de Nueva York que originó la Gran Depresión?", category: "culturageneral", level: 2, type: "standard", accept: ["1929"], options: ["1929", "1927", "1933", "1921"], answer: "1929" },
  { q: "¿Qué filósofo contractulista escribió 'Leviatán' defendiendo el absolutismo para evitar la guerra de todos contra todos?", category: "culturageneral", level: 2, type: "standard", accept: ["thomas hobbes", "hobbes"], options: ["Thomas Hobbes", "Jean-Jacques Rousseau", "John Locke", "Montesquieu"], answer: "Thomas Hobbes" },
  { q: "¿Qué base nitrogenada está presente en el ARN pero ausente en el ADN?", category: "culturageneral", level: 2, type: "standard", accept: ["uracilo"], options: ["Uracilo", "Timina", "Citosina", "Guanina"], answer: "Uracilo" },
  { q: "¿Qué vanguardia artística fundó Filippo Tommaso Marinetti exaltando la velocidad y las máquinas?", category: "culturageneral", level: 2, type: "standard", accept: ["futurismo", "el futurismo"], options: ["Futurismo", "Surrealismo", "Dadaísmo", "Cubismo"], answer: "Futurismo" },
  { q: "¿Qué número cuántico determina la forma del orbital atómico (s, p, d, f)?", category: "culturageneral", level: 2, type: "standard", accept: ["secundario", "azimutal", "l"], options: ["Secundario (l)", "Principal (n)", "Magnético (m)", "De espín (s)"], answer: "Secundario (l)" },
  { q: "¿Quién fue el dictador español que gobernó entre 1923 y 1930 durante el reinado de Alfonso XIII?", category: "culturageneral", level: 2, type: "standard", accept: ["miguel primo de rivera", "primo de rivera"], options: ["Miguel Primo de Rivera", "Francisco Franco", "Dámaso Berenguer", "Manuel Azaña"], answer: "Miguel Primo de Rivera" },
  { q: "¿Qué concepto marxista designa la diferencia entre el valor producido por el trabajador y el salario que recibe?", category: "culturageneral", level: 2, type: "standard", accept: ["plusvalia", "plusvalía"], options: ["Plusvalía", "Alienación", "Infraestructura", "Lucha de clases"], answer: "Plusvalía" },
  { q: "¿Cuál es el determinante de una matriz identidad de orden 3?", category: "culturageneral", level: 2, type: "standard", accept: ["1", "uno"], options: ["1", "3", "0", "-1"], answer: "1" },
  { q: "¿Qué fenómeno atmosférico ocurre cuando una masa de aire cálido se sitúa sobre una capa de aire frío impidiendo su ascenso?", category: "culturageneral", level: 2, type: "standard", accept: ["inversion termica", "inversión térmica"], options: ["Inversión térmica", "Efecto Foehn", "Gota fría (DANA)", "Ciclogénesis"], answer: "Inversión térmica" },
  { q: "¿En qué ciudad española se firmó la Constitución de 1812?", category: "culturageneral", level: 2, type: "standard", accept: ["cadiz", "cádiz"], options: ["Cádiz", "Madrid", "Sevilla", "Valencia"], answer: "Cádiz" },
  { q: "¿Qué autor teatral creó el 'esperpento' con obras como 'Luces de bohemia'?", category: "culturageneral", level: 2, type: "standard", accept: ["ramon maria del valle inclan", "valle inclan", "valle-inclán"], options: ["Ramón María del Valle-Inclán", "Jacinto Benavente", "Carlos Arniches", "Pedro Muñoz Seca"], answer: "Ramón María del Valle-Inclán" },
  { q: "¿Qué ácido orgánico se produce en las células musculares durante la fermentación láctica en ausencia de oxígeno?", category: "culturageneral", level: 2, type: "standard", accept: ["acido lactico", "ácido láctico", "lactato"], options: ["Ácido láctico", "Ácido pirúvico", "Ácido cítrico", "Ácido acético"], answer: "Ácido láctico" },
  { q: "¿Qué principio físico explica por qué un cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba?", category: "culturageneral", level: 2, type: "standard", accept: ["principio de arquimedes", "arquimedes"], options: ["Principio de Arquímedes", "Principio de Pascal", "Principio de Bernoulli", "Ley de Hooke"], answer: "Principio de Arquímedes" },
  { q: "¿Qué batalla de 1212 marcó el declive definitivo del imperio almohade en la Península Ibérica?", category: "culturageneral", level: 2, type: "standard", accept: ["las navas de tolosa", "navas de tolosa"], options: ["Las Navas de Tolosa", "Batalla de Covadonga", "Batalla de Guadalete", "Batalla del Salado"], answer: "Las Navas de Tolosa" },
  { q: "¿Qué filósofo existencialista francés escribió 'El ser y la nada' y afirmó que 'el hombre está condenado a ser libre'?", category: "culturageneral", level: 2, type: "standard", accept: ["jean paul sartre", "sartre"], options: ["Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir", "Martin Heidegger"], answer: "Jean-Paul Sartre" },
  { q: "¿Qué glándula endocrina produce la insulina y el glucagón?", category: "culturageneral", level: 2, type: "standard", accept: ["pancreas", "páncreas"], options: ["Páncreas", "Tiroides", "Hipófisis", "Suprarrenal"], answer: "Páncreas" },
  { q: "¿Cuál es la obra cumbre del mester de clerecía escrita por Gonzalo de Berceo?", category: "culturageneral", level: 2, type: "standard", accept: ["milagros de nuestra señora"], options: ["Milagros de Nuestra Señora", "Libro de buen amor", "Libro de Alexandre", "Cantar de Mio Cid"], answer: "Milagros de Nuestra Señora" },
  { q: "¿Qué ley de la termodinámica establece que la entropía del universo tiende siempre a aumentar?", category: "culturageneral", level: 2, type: "standard", accept: ["segunda ley", "segundo principio"], options: ["Segunda ley", "Primera ley", "Tercera ley", "Ley cero"], answer: "Segunda ley" },
  { q: "¿Cómo se denominó el sistema político de alternancia pacífica entre liberales y conservadores en la Restauración española?", category: "culturageneral", level: 2, type: "standard", accept: ["turnismo", "turno pacifico"], options: ["Turnismo", "Caciquismo", "Regeneracionismo", "Cantonalismo"], answer: "Turnismo" },
  { q: "¿Qué corriente económica defiende la mínima intervención del Estado y fue impulsada por Adam Smith?", category: "culturageneral", level: 2, type: "standard", accept: ["liberalismo economico", "liberalismo clásico", "liberalismo"], options: ["Liberalismo económico", "Keynesianismo", "Mercantilismo", "Fisiocracia"], answer: "Liberalismo económico" },
  { q: "¿Cuál es la probabilidad de obtener dos caras seguidas al lanzar una moneda equilibrada dos veces?", category: "culturageneral", level: 2, type: "standard", accept: ["0.25", "1/4", "25%"], options: ["1/4 (25%)", "1/2 (50%)", "1/3 (33%)", "1/8 (12,5%)"], answer: "1/4 (25%)" },
  { q: "¿Qué estilo arquitectónico medieval se caracteriza por el arco apuntado, la bóveda de crucería y grandes vidrieras?", category: "culturageneral", level: 2, type: "standard", accept: ["gotico", "gótico"], options: ["Gótico", "Románico", "Prerrománico", "Mudéjar"], answer: "Gótico" },
  { q: "¿Qué científico descubrió la penicilina en 1928?", category: "culturageneral", level: 2, type: "standard", accept: ["alexander fleming", "fleming"], options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"], answer: "Alexander Fleming" },
  { q: "¿Qué estrofa de catorce versos endecasílabos divididos en dos cuartetos y dos tercetos es típica del Renacimiento?", category: "culturageneral", level: 2, type: "standard", accept: ["soneto", "el soneto"], options: ["Soneto", "Lira", "Silva", "Romance"], answer: "Soneto" },
  { q: "¿Qué nombre recibe la reacción química en la que una especie cede electrones?", category: "culturageneral", level: 2, type: "standard", accept: ["oxidacion", "oxidación"], options: ["Oxidación", "Reducción", "Neutralización", "Hidrólisis"], answer: "Oxidación" },
  { q: "¿En qué año tuvo lugar la Revolución Rusa que llevó a los bolcheviques al poder?", category: "culturageneral", level: 2, type: "standard", accept: ["1917"], options: ["1917", "1905", "1922", "1914"], answer: "1917" },
  { q: "¿Qué filosofo propuso el 'imperativo categórico' como fundamento de su ética formal?", category: "culturageneral", level: 2, type: "standard", accept: ["immanuel kant", "kant"], options: ["Immanuel Kant", "John Stuart Mill", "Jeremy Bentham", "Aristóteles"], answer: "Immanuel Kant" },
  { q: "¿Qué estructura celular regula el paso de sustancias hacia el interior y exterior de la célula?", category: "culturageneral", level: 2, type: "standard", accept: ["membrana plasmatica", "membrana celular"], options: ["Membrana plasmática", "Pared celular", "Citoesqueleto", "Retículo endoplasmático"], answer: "Membrana plasmática" },
  { q: "¿Quién escribió 'La colmena' y ganó el Premio Nobel de Literatura en 1989?", category: "culturageneral", level: 2, type: "standard", accept: ["camilo jose cela", "cela"], options: ["Camilo José Cela", "Miguel Delibes", "Carmen Laforet", "Gonzalo Torrente Ballester"], answer: "Camilo José Cela" },
  { q: "¿Cuál es la unidad de frecuencia en el Sistema Internacional?", category: "culturageneral", level: 2, type: "standard", accept: ["hercio", "hertz", "hz"], options: ["Hercio (Hz)", "Decibelio", "Tesla", "Weber"], answer: "Hercio (Hz)" },
  { q: "¿Qué cordillera separa España de Francia?", category: "culturageneral", level: 2, type: "standard", accept: ["pirineos", "los pirineos"], options: ["Pirineos", "Sistema Central", "Cordillera Cantábrica", "Alpes"], answer: "Pirineos" },
  { q: "¿Qué partido político fundó Pablo Iglesias Posse en Madrid en 1879?", category: "culturageneral", level: 2, type: "standard", accept: ["psoe", "partido socialista obrero español"], options: ["PSOE", "PCE", "UGT", "CNT"], answer: "PSOE" },
  { q: "¿Cómo se llama el paso de ARN mensajero a secuencia de aminoácidos en los ribosomas?", category: "culturageneral", level: 2, type: "standard", accept: ["traduccion", "traducción"], options: ["Traducción", "Transcripción", "Replicación", "Maduración"], answer: "Traducción" },
  { q: "¿Qué corriente barroca española se caracterizó por la complejidad conceptual y juegos de palabras, liderada por Quevedo?", category: "culturageneral", level: 2, type: "standard", accept: ["conceptismo"], options: ["Conceptismo", "Culteranismo", "Petrarquismo", "Modernismo"], answer: "Conceptismo" },
  { q: "¿Qué magnitud mide la cantidad de sustancia en el Sistema Internacional?", category: "culturageneral", level: 2, type: "standard", accept: ["mol"], options: ["Mol", "Gramo", "Litro", "Candela"], answer: "Mol" },
  { q: "¿Qué plan económico estadounidense ayudó a reconstruir Europa Occidental tras la Segunda Guerra Mundial?", category: "culturageneral", level: 2, type: "standard", accept: ["plan marshall"], options: ["Plan Marshall", "Plan Dawes", "New Deal", "Plan Young"], answer: "Plan Marshall" },
  { q: "¿Qué filósofo ilustrado defendió la división de poderes en ejecutivo, legislativo y judicial?", category: "culturageneral", level: 2, type: "standard", accept: ["montesquieu"], options: ["Montesquieu", "Voltaire", "Rousseau", "Diderot"], answer: "Montesquieu" },
  { q: "¿Cuál es el valor de cos(0) en radianes o grados?", category: "culturageneral", level: 2, type: "standard", accept: ["1", "uno"], options: ["1", "0", "-1", "1/2"], answer: "1" },
  { q: "¿Qué rey abdicó en 1873 dando paso a la Primera República Española?", category: "culturageneral", level: 2, type: "standard", accept: ["amadeo i", "amadeo de saboya"], options: ["Amadeo I de Saboya", "Isabel II", "Alfonso XII", "Fernando VII"], answer: "Amadeo I de Saboya" },
  { q: "¿Qué tipo de inmunidad se adquiere tras recibir una vacuna con antígenos atenuados?", category: "culturageneral", level: 2, type: "standard", accept: ["activa artificial", "inmunidad activa artificial"], options: ["Activa artificial", "Pasiva artificial", "Activa natural", "Pasiva natural"], answer: "Activa artificial" },
  { q: "¿Quién escribió 'Nada', novela ganadora del primer Premio Nadal en 1944?", category: "culturageneral", level: 2, type: "standard", accept: ["carmen laforet", "laforet"], options: ["Carmen Laforet", "Ana María Matute", "Mercè Rodoreda", "Carmen Martín Gaite"], answer: "Carmen Laforet" },
  { q: "¿Qué partícula subatómica determina el número atómico (Z) de un elemento químico?", category: "culturageneral", level: 2, type: "standard", accept: ["proton", "protón"], options: ["Protón", "Neutrón", "Electrón", "Quark"], answer: "Protón" },
  { q: "¿Qué indicador macroeconómico mide el valor monetario de todos los bienes y servicios finales producidos en un país?", category: "culturageneral", level: 2, type: "standard", accept: ["pib", "producto interior bruto"], options: ["PIB", "IPC", "PNB", "IDH"], answer: "PIB" },
  { q: "¿En qué batalla naval de 1805 fue derrotada la flota franco-española por la armada británica de Nelson?", category: "culturageneral", level: 2, type: "standard", accept: ["trafalgar", "batalla de trafalgar"], options: ["Trafalgar", "Lepanto", "San Vicente", "Cabo Finisterre"], answer: "Trafalgar" },
  { q: "¿Cómo llama Platón al mundo sensible donde habitan los objetos materiales cambiantes?", category: "culturageneral", level: 2, type: "standard", accept: ["mundo sensible", "doxa"], options: ["Mundo sensible", "Mundo inteligible", "Topos Uranos", "Demiurgo"], answer: "Mundo sensible" },
  { q: "¿Qué hormona vegetativa regula el cierre de estomas y la dormición de semillas frente al estrés hídrico?", category: "culturageneral", level: 2, type: "standard", accept: ["acido abscisico", "ácido abscísico"], options: ["Ácido abscísico", "Auxina", "Giberelina", "Etileno"], answer: "Ácido abscísico" },
  { q: "¿Qué autor modernista nicaragüense publicó 'Azul...' en 1888?", category: "culturageneral", level: 2, type: "standard", accept: ["ruben dario", "rubén darío"], options: ["Rubén Darío", "José Martí", "Amado Nervo", "Manuel Machado"], answer: "Rubén Darío" },
  { q: "¿Qué tipo de lente óptica es más gruesa en el centro que en los bordes y hace converger los rayos de luz?", category: "culturageneral", level: 2, type: "standard", accept: ["convergente", "biconvexa"], options: ["Convergente", "Divergente", "Cóncava", "Cilíndrica"], answer: "Convergente" },
  { q: "¿Qué pacto de 1939 firmaron Alemania y la URSS acordando no agredirse y repartirse Europa Oriental?", category: "culturageneral", level: 2, type: "standard", accept: ["ribbentrop-molotov", "pacto germano-sovietico"], options: ["Pacto Ribbentrop-Mólotov", "Pacto de Acero", "Pacto Antikomintern", "Acuerdos de Múnich"], answer: "Pacto Ribbentrop-Mólotov" },
  { q: "¿Qué término orteguiano resume su filosofía diciendo 'Yo soy yo y mi circunstancia'?", category: "culturageneral", level: 2, type: "standard", accept: ["raciovitalismo", "circunstancia"], options: ["Raciovitalismo", "Perspectivismo", "Existencialismo", "Positivismo"], answer: "Raciovitalismo" },
  { q: "¿Cuál es la pendiente de la recta cuya ecuación es y = 3x - 5?", category: "culturageneral", level: 2, type: "standard", accept: ["3", "tres"], options: ["3", "-5", "5", "1/3"], answer: "3" },
  { q: "¿Qué accidente geográfico español es una albufera separada del mar Mediterráneo por La Manga?", category: "culturageneral", level: 2, type: "standard", accept: ["mar menor"], options: ["Mar Menor", "Albufera de Valencia", "Delta del Ebro", "Marismas del Guadalquivir"], answer: "Mar Menor" },
  { q: "¿Qué ley proclamada por Fernando VII en 1830 permitió reinar a su hija Isabel II?", category: "culturageneral", level: 2, type: "standard", accept: ["pragmatica sancion", "pragmática sanción"], options: ["Pragmática Sanción", "Ley Sálica", "Estatuto Real", "Decretos de Nueva Planta"], answer: "Pragmática Sanción" },
  { q: "¿Qué biomolécula almacena energía a largo plazo y forma la bicapa de las membranas celulares?", category: "culturageneral", level: 2, type: "standard", accept: ["lipidos", "lípidos", "fosfolipidos"], options: ["Lípidos", "Glúcidos", "Proteínas", "Vitaminas"], answer: "Lípidos" },
  { q: "¿Quién escribió 'El árbol de la ciencia'?", category: "culturageneral", level: 2, type: "standard", accept: ["pio baroja", "baroja", "pío baroja"], options: ["Pío Baroja", "Miguel de Unamuno", "Azorín", "Blasco Ibáñez"], answer: "Pío Baroja" },
  { q: "¿Cuál es el estado de oxidación habitual del oxígeno en la mayoría de los óxidos?", category: "culturageneral", level: 2, type: "standard", accept: ["-2"], options: ["-2", "+2", "-1", "0"], answer: "-2" },
  { q: "¿Qué organismo internacional sustituyó a la Sociedad de Naciones en 1945?", category: "culturageneral", level: 2, type: "standard", accept: ["onu", "organizacion de las naciones unidas"], options: ["ONU", "OTAN", "OCDE", "UNESCO"], answer: "ONU" },
  { q: "¿Qué filósofo medieval formuló las 'Cinco Vías' para demostrar racionalmente la existencia de Dios?", category: "culturageneral", level: 2, type: "standard", accept: ["tomas de aquino", "santo tomas", "tomás de aquino"], options: ["Tomás de Aquino", "Agustín de Hipona", "Guillermo de Ockham", "Anselmo de Canterbury"], answer: "Tomás de Aquino" },
  { q: "¿Qué par craneal o tejido transmite impulsos eléctricos desde el sistema nervioso central hacia los efectores?", category: "culturageneral", level: 2, type: "standard", accept: ["neurona motora", "motoneurona", "nervio motor"], options: ["Neurona motora", "Neurona sensitiva", "Interneurona", "Célula de Schwann"], answer: "Neurona motora" },
  { q: "¿Qué obra teatral de Pedro Calderón de la Barca plantea la frontera entre la realidad y el sueño?", category: "culturageneral", level: 2, type: "standard", accept: ["la vida es sueño"], options: ["La vida es sueño", "El alcalde de Zalamea", "El gran teatro del mundo", "Fuenteovejuna"], answer: "La vida es sueño" },
  { q: "¿Qué fenómeno ondulatorio ocurre cuando una onda rodea un obstáculo o atraviesa una rendija estrecha?", category: "culturageneral", level: 2, type: "standard", accept: ["difraccion", "difracción"], options: ["Difracción", "Refracción", "Reflexión", "Polarización"], answer: "Difracción" },
  { q: "¿Qué plan económico de 1959 liberalizó la economía española poniendo fin a la autarquía franquista?", category: "culturageneral", level: 2, type: "standard", accept: ["plan de estabilizacion", "plan de estabilización"], options: ["Plan de Estabilización", "Planes de Desarrollo", "Pactos de la Moncloa", "Plan Badajoz"], answer: "Plan de Estabilización" },
  { q: "¿Qué concepto económico describe una situación de mercado donde existe un único vendedor?", category: "culturageneral", level: 2, type: "standard", accept: ["monopolio"], options: ["Monopolio", "Oligopolio", "Monopsonio", "Competencia perfecta"], answer: "Monopolio" },
  { q: "¿Cuál es la suma de los ángulos interiores de cualquier triángulo plano?", category: "culturageneral", level: 2, type: "standard", accept: ["180", "180 grados"], options: ["180°", "360°", "90°", "270°"], answer: "180°" },
  { q: "¿Qué pintor español creó las 'Pinturas Negras' en la Quinta del Sordo?", category: "culturageneral", level: 2, type: "standard", accept: ["francisco de goya", "goya"], options: ["Francisco de Goya", "Diego Velázquez", "José de Ribera", "Francisco de Zurbarán"], answer: "Francisco de Goya" },
  { q: "¿Qué científico enunció las tres leyes del movimiento planetario?", category: "culturageneral", level: 2, type: "standard", accept: ["johannes kepler", "kepler"], options: ["Johannes Kepler", "Tycho Brahe", "Nicolás Copérnico", "Galileo Galilei"], answer: "Johannes Kepler" },
  { q: "¿Qué poeta del Siglo de Oro encabezó el culteranismo con obras como 'Fábula de Polifemo y Galatea'?", category: "culturageneral", level: 2, type: "standard", accept: ["luis de gongora", "gongora", "góngora"], options: ["Luis de Góngora", "Francisco de Quevedo", "Lope de Vega", "Garcilaso de la Vega"], answer: "Luis de Góngora" },
  { q: "¿Qué tipo de enlace une a los aminoácidos formando cadenas polipeptídicas?", category: "culturageneral", level: 2, type: "standard", accept: ["enlace peptidico", "peptidico", "peptídico"], options: ["Enlace peptídico", "Enlace glucosídico", "Enlace éster", "Enlace fosfodiéster"], answer: "Enlace peptídico" },
  { q: "¿En qué año cayó el Muro de Berlín?", category: "culturageneral", level: 2, type: "standard", accept: ["1989"], options: ["1989", "1991", "1985", "1961"], answer: "1989" },
  { q: "¿Qué filósofo utilitarista afirmó que es mejor ser un Sócrates insatisfecho que un cerdo satisfecho?", category: "culturageneral", level: 2, type: "standard", accept: ["john stuart mill", "stuart mill"], options: ["John Stuart Mill", "Jeremy Bentham", "Epicuro", "David Hume"], answer: "John Stuart Mill" },
  { q: "¿Cuál es la fórmula molecular del ácido sulfúrico?", category: "culturageneral", level: 2, type: "standard", accept: ["h2so4"], options: ["H2SO4", "HCl", "HNO3", "H2SO3"], answer: "H2SO4" },
  { q: "¿Qué río desemboca formando un amplio estuario en Lisboa tras atravesar la Meseta española?", category: "culturageneral", level: 2, type: "standard", accept: ["tajo", "el tajo"], options: ["Tajo", "Duero", "Guadiana", "Miño"], answer: "Tajo" },
  { q: "¿Qué movimiento político-social buscó modernizar España tras la pérdida de las últimas colonias en 1898?", category: "culturageneral", level: 2, type: "standard", accept: ["regeneracionismo", "el regeneracionismo"], options: ["Regeneracionismo", "Krausismo", "Carlismo", "Iberismo"], answer: "Regeneracionismo" },
  { q: "¿Qué estructura de los cloroplastos contiene la clorofila y realiza la fase luminosa de la fotosíntesis?", category: "culturageneral", level: 2, type: "standard", accept: ["tilacoides", "tilacoide"], options: ["Tilacoides", "Estroma", "Crestas", "Matriz"], answer: "Tilacoides" },
  { q: "¿Quién escribió 'La familia de Pascual Duarte' inaugurando el tremendismo literario?", category: "culturageneral", level: 2, type: "standard", accept: ["camilo jose cela", "cela"], options: ["Camilo José Cela", "Rafael Sánchez Ferlosio", "Ignacio Aldecoa", "Luis Martín-Santos"], answer: "Camilo José Cela" },
  { q: "¿Qué principio establece que es imposible conocer simultáneamente con precisión exacta la posición y el momento de un electrón?", category: "culturageneral", level: 2, type: "standard", accept: ["incertidumbre de heisenberg", "heisenberg"], options: ["Incertidumbre de Heisenberg", "Exclusión de Pauli", "Dualidad onda-corpúsculo", "Superposición cuántica"], answer: "Incertidumbre de Heisenberg" },
  { q: "¿En qué año se firmaron los Pactos de la Moncloa durante la Transición española?", category: "culturageneral", level: 2, type: "standard", accept: ["1977"], options: ["1977", "1978", "1976", "1979"], answer: "1977" },
  { q: "¿Qué obra de Jean-Jacques Rousseau defiende que la soberanía reside en la voluntad general del pueblo?", category: "culturageneral", level: 2, type: "standard", accept: ["el contrato social", "contrato social"], options: ["El contrato social", "Emilio", "Discurso sobre el origen de la desigualdad", "Cartas filosóficas"], answer: "El contrato social" },
  { q: "¿Qué nombre recibe el conjunto de vectores linealmente independientes que generan un espacio vectorial?", category: "culturageneral", level: 2, type: "standard", accept: ["base"], options: ["Base", "Rango", "Núcleo", "Traza"], answer: "Base" },
  { q: "¿Qué tratado repartió en 1494 las tierras recién descubiertas entre Castilla y Portugal?", category: "culturageneral", level: 2, type: "standard", accept: ["tordesillas", "tratado de tordesillas"], options: ["Tratado de Tordesillas", "Tratado de Alcáçovas", "Tratado de Zaragoza", "Bulas Alejandrinas"], answer: "Tratado de Tordesillas" },
  { q: "¿Qué orgánulo celular modifica, empaqueta y distribuye proteínas y lípidos en vesículas?", category: "culturageneral", level: 2, type: "standard", accept: ["aparato de golgi", "golgi"], options: ["Aparato de Golgi", "Retículo rugoso", "Peroxisoma", "Centriolo"], answer: "Aparato de Golgi" },
  { q: "¿Qué dramaturgo español ganó el Nobel en 1922 con obras como 'Los intereses creados'?", category: "culturageneral", level: 2, type: "standard", accept: ["jacinto benavente", "benavente"], options: ["Jacinto Benavente", "José Echegaray", "Valle-Inclán", "García Lorca"], answer: "Jacinto Benavente" },
  { q: "¿Cómo se llama la energía necesaria para arrancar un electrón de un átomo gaseoso en estado fundamental?", category: "culturageneral", level: 2, type: "standard", accept: ["energia de ionizacion", "energía de ionización"], options: ["Energía de ionización", "Afinidad electrónica", "Electronegatividad", "Energía reticular"], answer: "Energía de ionización" },
  { q: "¿Qué crisis internacional enfrentó a EE. UU. y la URSS en octubre de 1962 por misiles nucleares en el Caribe?", category: "culturageneral", level: 2, type: "standard", accept: ["crisis de los misiles", "crisis de cuba"], options: ["Crisis de los misiles de Cuba", "Bloqueo de Berlín", "Guerra de Corea", "Crisis del Canal de Suez"], answer: "Crisis de los misiles de Cuba" },
  { q: "¿Qué concepto freudiano representa la parte inconsciente regida por el principio del placer y los impulsos?", category: "culturageneral", level: 2, type: "standard", accept: ["ello", "el ello"], options: ["Ello", "Yo", "Superyó", "Sublimación"], answer: "Ello" },
  { q: "¿Qué magnitud física se conserva en un sistema aislado sobre el que no actúan fuerzas exteriores netas?", category: "culturageneral", level: 2, type: "standard", accept: ["momento lineal", "cantidad de movimiento"], options: ["Momento lineal", "Energía cinética", "Aceleración", "Potencia"], answer: "Momento lineal" },
  { q: "¿Qué archipiélago español tiene origen volcánico y clima subtropical?", category: "culturageneral", level: 2, type: "standard", accept: ["islas canarias", "canarias"], options: ["Islas Canarias", "Islas Baleares", "Islas Cíes", "Islas Columbretes"], answer: "Islas Canarias" },
  { q: "¿Quién fue el primer presidente del Gobierno de la democracia tras las elecciones de 1977?", category: "culturageneral", level: 2, type: "standard", accept: ["adolfo suarez", "adolfo suárez"], options: ["Adolfo Suárez", "Leopoldo Calvo-Sotelo", "Felipe González", "Carlos Arias Navarro"], answer: "Adolfo Suárez" },
  { q: "¿Qué enfermedad genética autosómica recesiva está causada por una mutación en la proteína hemoglobina?", category: "culturageneral", level: 2, type: "standard", accept: ["anemia falciforme", "drepanocitosis"], options: ["Anemia falciforme", "Hemofilia", "Daltonismo", "Síndrome de Down"], answer: "Anemia falciforme" },
  { q: "¿Qué poemario de Juan Ramón Jiménez marca el inicio de su etapa de 'poesía pura'?", category: "culturageneral", level: 2, type: "standard", accept: ["diario de un poeta recien casado", "diario de un poeta recién casado"], options: ["Diario de un poeta recién casado", "Platero y yo", "Arias tristes", "Eternidades"], answer: "Diario de un poeta recién casado" },
  { q: "¿Qué tipo de reacción orgánica convierte un alqueno en un alcano mediante adición de H2?", category: "culturageneral", level: 2, type: "standard", accept: ["hidrogenacion", "hidrogenación"], options: ["Hidrogenación", "Halogenación", "Esterificación", "Saponificación"], answer: "Hidrogenación" },
  { q: "¿Qué conferencista y líder político pronunció el discurso 'I Have a Dream' en 1963?", category: "culturageneral", level: 2, type: "standard", accept: ["martin luther king", "luther king"], options: ["Martin Luther King Jr.", "Malcolm X", "Nelson Mandela", "John F. Kennedy"], answer: "Martin Luther King Jr." },
  { q: "¿Qué filosofo presocrático afirmó que todo fluye ('panta rei') y que el arjé es el fuego?", category: "culturageneral", level: 2, type: "standard", accept: ["heraclito", "heráclito"], options: ["Heráclito", "Parménides", "Tales de Mileto", "Demócrito"], answer: "Heráclito" },
  { q: "¿Cuál es la derivada de la función f(x) = sen(x)?", category: "culturageneral", level: 2, type: "standard", accept: ["cos(x)", "coseno de x"], options: ["cos(x)", "-cos(x)", "-sen(x)", "tg(x)"], answer: "cos(x)" },
  { q: "¿Qué decretos promulgados por Felipe V abolieron los fueros de la Corona de Aragón?", category: "culturageneral", level: 2, type: "standard", accept: ["decretos de nueva planta", "nueva planta"], options: ["Decretos de Nueva Planta", "Leyes de Burgos", "Ordenanzas de Montalvo", "Fuero Juzgo"], answer: "Decretos de Nueva Planta" },
  { q: "¿Qué etapa del ciclo celular comprende las fases G1, S y G2 antes de la división?", category: "culturageneral", level: 2, type: "standard", accept: ["interfase"], options: ["Interfase", "Profase", "Citocinesis", "Metafase"], answer: "Interfase" },
  { q: "¿Qué novela de Gabriel García Márquez narra la historia de la familia Buendía en Macondo?", category: "culturageneral", level: 2, type: "standard", accept: ["cien años de soledad"], options: ["Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada", "Pedro Páramo"], answer: "Cien años de soledad" },
  { q: "¿Cuál es la unidad de carga eléctrica en el Sistema Internacional?", category: "culturageneral", level: 2, type: "standard", accept: ["culombio", "coulomb"], options: ["Culombio", "Amperio", "Voltio", "Ohmio"], answer: "Culombio" },
  { q: "¿Qué tasa económica mide el porcentaje de población activa que busca empleo y no lo encuentra?", category: "culturageneral", level: 2, type: "standard", accept: ["tasa de paro", "tasa de desempleo"], options: ["Tasa de paro", "Tasa de actividad", "Tasa de ocupación", "Tasa de inflación"], answer: "Tasa de paro" },
  { q: "¿En qué ciudad se inició el levantamiento popular del 2 de mayo de 1808 contra las tropas napoleónicas?", category: "culturageneral", level: 2, type: "standard", accept: ["madrid"], options: ["Madrid", "Zaragoza", "Bailén", "Móstoles"], answer: "Madrid" },
  { q: "¿Qué término aristotélico designa el paso de la posibilidad al ser efectivo?", category: "culturageneral", level: 2, type: "standard", accept: ["acto", "del potencia al acto"], options: ["Acto", "Potencia", "Sustancia", "Accidente"], answer: "Acto" },
  { q: "¿Qué células sanguíneas contienen hemoglobina y transportan oxígeno?", category: "culturageneral", level: 2, type: "standard", accept: ["eritrocitos", "globulos rojos", "hematies"], options: ["Eritrocitos", "Leucocitos", "Plaquetas", "Linfocitos"], answer: "Eritrocitos" },
  { q: "¿Quién escribió 'El sí de las niñas', máxima expresión del teatro neoclásico español?", category: "culturageneral", level: 2, type: "standard", accept: ["leandro fernandez de moratin", "moratin", "moratín"], options: ["Leandro Fernández de Moratín", "Gaspar Melchor de Jovellanos", "José Cadalso", "Ramón de la Cruz"], answer: "Leandro Fernández de Moratín" },
  { q: "¿Qué ley de Faraday relaciona la fuerza electromotriz inducida con la variación del flujo magnético?", category: "culturageneral", level: 2, type: "standard", accept: ["ley de faraday-lenz", "ley de induccion", "ley de faraday"], options: ["Ley de Faraday-Lenz", "Ley de Biot-Savart", "Ley de Ampère", "Ley de Gauss"], answer: "Ley de Faraday-Lenz" },
  { q: "¿Qué conflicto armado enfrentó a Estados Unidos y España en 1898?", category: "culturageneral", level: 2, type: "standard", accept: ["guerra hispano-estadounidense", "guerra de cuba", "desastre del 98"], options: ["Guerra hispano-estadounidense", "Guerra de los Diez Años", "Guerra Chiquita", "Guerra de Independencia"], answer: "Guerra hispano-estadounidense" },
  { q: "¿Qué filosofo británico formuló la navaja que afirma que no deben multiplicarse los entes sin necesidad?", category: "culturageneral", level: 2, type: "standard", accept: ["guillermo de ockham", "ockham"], options: ["Guillermo de Ockham", "Francis Bacon", "Duns Escoto", "Roger Bacon"], answer: "Guillermo de Ockham" },
  { q: "¿Qué nombre recibe el conjunto de genes de un individuo para uno o varios caracteres?", category: "culturageneral", level: 2, type: "standard", accept: ["genotipo"], options: ["Genotipo", "Fenotipo", "Cariotipo", "Alelo"], answer: "Genotipo" },
  { q: "¿Qué movimiento artístico del siglo XX incluye 'La persistencia de la memoria' de Salvador Dalí?", category: "culturageneral", level: 2, type: "standard", accept: ["surrealismo", "el surrealismo"], options: ["Surrealismo", "Expresionismo", "Cubismo", "Fauvismo"], answer: "Surrealismo" },
  { q: "¿Qué tipo de enlace intermolecular explica el elevado punto de ebullición del agua?", category: "culturageneral", level: 2, type: "standard", accept: ["puente de hidrogeno", "enlaces de hidrogeno"], options: ["Puente de hidrógeno", "Fuerzas de London", "Enlace iónico", "Enlace metálico"], answer: "Puente de hidrógeno" },
  { q: "¿Qué tratado fundacional creó la Comunidad Económica Europea en 1957?", category: "culturageneral", level: 2, type: "standard", accept: ["tratado de roma"], options: ["Tratado de Roma", "Tratado de Maastricht", "Tratado de Lisboa", "Tratado de Schengen"], answer: "Tratado de Roma" },
  { q: "¿Cuál es el valor del límite cuando x tiende a 0 de sen(x)/x?", category: "culturageneral", level: 2, type: "standard", accept: ["1", "uno"], options: ["1", "0", "Infinito", "No existe"], answer: "1" },

  // =========================================================================
  // 3. ESTÁNDAR - NIVEL 3 (25 PREGUNTAS: 176 a 200)
  // =========================================================================
  { q: "¿Qué principio de exclusión cuántica impide que dos fermiones en un átomo tengan los cuatro números cuánticos iguales?", category: "culturageneral", level: 3, type: "standard", accept: ["principio de exclusion de pauli", "pauli"], options: ["Principio de Pauli", "Regla de Hund", "Principio de Aufbau", "Efecto Zeeman"], answer: "Principio de Pauli" },
  { q: "¿Cómo denominó Kant a la realidad en sí misma, incognoscible para la razón teórica?", category: "culturageneral", level: 3, type: "standard", accept: ["noumeno", "noúmeno", "cosa en si"], options: ["Noúmeno", "Fenómeno", "Trascendental", "Entelequia"], answer: "Noúmeno" },
  { q: "¿Qué complejo proteico transmembrana sintetiza ATP aprovechando el gradiente electroquímico de protones?", category: "culturageneral", level: 3, type: "standard", accept: ["atp sintasa"], options: ["ATP sintasa", "Citocromo c", "Rubisco", "NADH deshidrogenasa"], answer: "ATP sintasa" },
  { q: "¿Qué pacto de 1866 firmaron progresistas y demócratas en Bélgica para derrocar a Isabel II?", category: "culturageneral", level: 3, type: "standard", accept: ["pacto de ostende"], options: ["Pacto de Ostende", "Pacto del Pardo", "Pacto de San Sebastián", "Convenio de Vergara"], answer: "Pacto de Ostende" },
  { q: "¿Qué poetisa chilena fue la primera persona latinoamericana en recibir el Premio Nobel de Literatura en 1945?", category: "culturageneral", level: 3, type: "standard", accept: ["gabriela mistral"], options: ["Gabriela Mistral", "Alfonsina Storni", "Juana de Ibarbourou", "Isabel Allende"], answer: "Gabriela Mistral" },
  { q: "¿Qué ecuación química relaciona la constante de equilibrio con la temperatura y la entalpía estándar de reacción?", category: "culturageneral", level: 3, type: "standard", accept: ["ecuacion de vant hoff", "van't hoff"], options: ["Ecuación de Van't Hoff", "Ecuación de Nernst", "Ecuación de Arrhenius", "Ley de Hess"], answer: "Ecuación de Van't Hoff" },
  { q: "¿Qué figura política presidió la Primera República Española tras la dimisión de Estanislao Figueras y antes de Salmerón?", category: "culturageneral", level: 3, type: "standard", accept: ["francisco pi y margall", "pi y margall"], options: ["Francisco Pi y Margall", "Emilio Castelar", "Nicolás Salmerón", "Juan Prim"], answer: "Francisco Pi y Margall" },
  { q: "¿Cómo llama Nietzsche a la moral que afirma la vida, la fuerza y la creación de valores propios?", category: "culturageneral", level: 3, type: "standard", accept: ["moral de señores", "moral de los señores"], options: ["Moral de señores", "Moral de esclavos", "Nihilismo pasivo", "Eterno retorno"], answer: "Moral de señores" },
  { q: "¿Qué secuencia reguladora del operón lac en bacterias es el sitio de unión de la proteína represora?", category: "culturageneral", level: 3, type: "standard", accept: ["operador"], options: ["Operador", "Promotor", "Terminador", "Intrón"], answer: "Operador" },
  { q: "¿Qué obra de Luis Martín-Santos publicada en 1962 renovó la novela española rompiendo con el realismo social?", category: "culturageneral", level: 3, type: "standard", accept: ["tiempo de silencio"], options: ["Tiempo de silencio", "Señas de identidad", "Últimas tardes con Teresa", "Cinco horas con Mario"], answer: "Tiempo de silencio" },
  { q: "¿Qué teorema del cálculo diferencial garantiza que si f es continua en [a,b] y derivable en (a,b) con f(a)=f(b), existe c donde f'(c)=0?", category: "culturageneral", level: 3, type: "standard", accept: ["teorema de rolle", "rolle"], options: ["Teorema de Rolle", "Teorema de Bolzano", "Teorema de Cauchy", "Teorema de Weierstrass"], answer: "Teorema de Rolle" },
  { q: "¿Qué efecto relativista explica el incremento de longitud de onda de un fotón al dispersarse con un electrón libre?", category: "culturageneral", level: 3, type: "standard", accept: ["efecto compton"], options: ["Efecto Compton", "Efecto fotoeléctrico", "Efecto Doppler", "Efecto Túnel"], answer: "Efecto Compton" },
  { q: "¿Qué acuerdo secreto de 1916 dividió las esferas de influencia en Oriente Próximo entre Reino Unido y Francia?", category: "culturageneral", level: 3, type: "standard", accept: ["sykes-picot", "acuerdo sykes-picot"], options: ["Acuerdo Sykes-Picot", "Declaración Balfour", "Tratado de Sèvres", "Tratado de Lausana"], answer: "Acuerdo Sykes-Picot" },
  { q: "¿Qué término utiliza Thomas Kuhn para describir un cambio radical de marco teórico en la historia de la ciencia?", category: "culturageneral", level: 3, type: "standard", accept: ["cambio de paradigma", "revolucion cientifica"], options: ["Cambio de paradigma", "Falsacionismo", "Anarquismo epistemológico", "Verificacionismo"], answer: "Cambio de paradigma" },
  { q: "¿Qué enzima fija el CO2 atmosférico a la ribulosa-1,5-bisfosfato en el ciclo de Calvin?", category: "culturageneral", level: 3, type: "standard", accept: ["rubisco"], options: ["RuBisCO", "PEP carboxilasa", "Hexoquinasa", "Piruvato quinasa"], answer: "RuBisCO" },
  { q: "¿Qué estrofa castellana empleó Jorge Manrique en las 'Coplas por la muerte de su padre'?", category: "culturageneral", level: 3, type: "standard", accept: ["copla de pie quebrado", "copla manriqueña"], options: ["Copla de pie quebrado", "Cuaderna vía", "Octava real", "Estancia"], answer: "Copla de pie quebrado" },
  { q: "¿Cómo se llama el efecto por el cual una reacción redox espontánea genera corriente eléctrica en una celda?", category: "culturageneral", level: 3, type: "standard", accept: ["celda galvanica", "pila galvanica", "pila voltaica"], options: ["Celda galvánica", "Cuba electrolítica", "Puente salino", "Electrólisis"], answer: "Celda galvánica" },
  { q: "¿Qué ley educativa española de 1857 estructuró por primera vez la enseñanza pública en tres niveles?", category: "culturageneral", level: 3, type: "standard", accept: ["ley moyano"], options: ["Ley Moyano", "Ley Villar Palasí", "LOGSE", "Institución Libre de Enseñanza"], answer: "Ley Moyano" },
  { q: "¿Qué filosofo del círculo de Viena y autor del 'Tractatus Logico-Philosophicus' afirmó que los límites de mi lenguaje son los límites de mi mundo?", category: "culturageneral", level: 3, type: "standard", accept: ["ludwig wittgenstein", "wittgenstein"], options: ["Ludwig Wittgenstein", "Bertrand Russell", "Karl Popper", "Rudolf Carnap"], answer: "Ludwig Wittgenstein" },
  { q: "¿Qué ley de la radiación establece que la longitud de onda de máxima emisión de un cuerpo negro es inversamente proporcional a su temperatura?", category: "culturageneral", level: 3, type: "standard", accept: ["ley de wien", "ley del desplazamiento de wien"], options: ["Ley de Wien", "Ley de Stefan-Boltzmann", "Ley de Planck", "Ley de Rayleigh-Jeans"], answer: "Ley de Wien" },
  { q: "¿Qué tratado de 1648 puso fin a la Guerra de los Treinta Años e instauró el sistema moderno de soberanía estatal?", category: "culturageneral", level: 3, type: "standard", accept: ["paz de westfalia", "westfalia"], options: ["Paz de Westfalia", "Paz de Augsburgo", "Tratado de Nimega", "Paz de Cateau-Cambrésis"], answer: "Paz de Westfalia" },
  { q: "¿Qué estructuras cromosómicas repetitivas protegen los extremos de los cromosomas eucariotas frente a la degradación?", category: "culturageneral", level: 3, type: "standard", accept: ["telomeros", "telómeros"], options: ["Telómeros", "Centrómeros", "Cinetocoros", "Cromátidas"], answer: "Telómeros" },
  { q: "¿Qué concepto económico describe la situación en la que coexisten alta inflación y estancamiento económico?", category: "culturageneral", level: 3, type: "standard", accept: ["estanflacion", "estanflación"], options: ["Estanflación", "Deflación", "Hiperinflación", "Desinflación"], answer: "Estanflación" },
  { q: "¿Qué novela de Juan Rulfo influyó decisivamente en el realismo mágico hispanoamericano con el viaje de Juan Preciado a Comala?", category: "culturageneral", level: 3, type: "standard", accept: ["pedro paramo", "pedro páramo"], options: ["Pedro Páramo", "El llano en llamas", "Rayuela", "La muerte de Artemio Cruz"], answer: "Pedro Páramo" },
  { q: "¿Qué teorema afirma que todo polinomio de grado n ≥ 1 con coeficientes complejos tiene al menos una raíz compleja?", category: "culturageneral", level: 3, type: "standard", accept: ["teorema fundamental del algebra"], options: ["Fundamental del Álgebra", "De Gauss-Markov", "De Pitágoras", "De Bayes"], answer: "Fundamental del Álgebra" },

  // =========================================================================
  // 4. VERDADERO / FALSO - NIVEL 1 (10 PREGUNTAS: 201 a 210)
  // =========================================================================
  { q: "La Segunda República Española se proclamó el 14 de abril de 1931 tras las elecciones municipales.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },
  { q: "En el mito de la caverna de Platón, los prisioneros encadenados contemplan directamente la luz del Sol desde el principio.", category: "culturageneral", level: 1, type: "true_false", answer: "Falso" },
  { q: "Las células procariotas carecen de envoltura nuclear que separe su ADN del citoplasma.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },
  { q: "El Cantar de Mio Cid pertenece al género lírico trovadoresco del siglo XV.", category: "culturageneral", level: 1, type: "true_false", answer: "Falso" },
  { q: "La velocidad de la luz en el vacío es aproximadamente 300.000 kilómetros por segundo.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },
  { q: "El Teide, situado en la isla de Tenerife, es el pico más alto de toda España.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },
  { q: "Los metales alcalinos pertenecen al grupo 17 de la tabla periódica.", category: "culturageneral", level: 1, type: "true_false", answer: "Falso" },
  { q: "La Guerra Fría enfrentó indirectamente a los bloques liderados por Estados Unidos y la Unión Soviética.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },
  { q: "Una función continua en un punto siempre es derivable en ese mismo punto.", category: "culturageneral", level: 1, type: "true_false", answer: "Falso" },
  { q: "Francisco de Goya retrató tanto a la familia de Carlos IV como los horrores de la Guerra de la Independencia.", category: "culturageneral", level: 1, type: "true_false", answer: "Verdadero" },

  // =========================================================================
  // 5. VERDADERO / FALSO - NIVEL 2 (10 PREGUNTAS: 211 a 220)
  // =========================================================================
  { q: "El Estatuto Real de 1834 fue una carta otorgada impulsada durante la regencia de María Cristina de Borbón.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },
  { q: "Para David Hume, la idea de causalidad necesaria procede de una impresión sensible directa.", category: "culturageneral", level: 2, type: "true_false", answer: "Falso" },
  { q: "Durante la fase S de la interfase celular se duplica el contenido de ADN cromosómico.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },
  { q: "La Generación del 98 adoptó un estilo puramente escapista desinteresado por el problema de España.", category: "culturageneral", level: 2, type: "true_false", answer: "Falso" },
  { q: "Según la tercera ley de Newton, las fuerzas de acción y reacción actúan siempre sobre el mismo cuerpo.", category: "culturageneral", level: 2, type: "true_false", answer: "Falso" },
  { q: "El efecto Foehn provoca lluvias abundantes en la ladera de barlovento y aire seco y cálido en sotavento.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },
  { q: "Un catalizador aumenta la velocidad de una reacción química disminuyendo su energía de activación.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },
  { q: "El Tratado de Maastricht de 1992 creó formalmente la Unión Europea y sentó las bases del euro.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },
  { q: "El producto escalar de dos vectores perpendiculares no nulos es siempre igual a 1.", category: "culturageneral", level: 2, type: "true_false", answer: "Falso" },
  { q: "La novela picaresca suele estar narrada en primera persona con estructura autobiográfica.", category: "culturageneral", level: 2, type: "true_false", answer: "Verdadero" },

  // =========================================================================
  // 6. VERDADERO / FALSO - NIVEL 3 (30 PREGUNTAS: 221 a 250)
  // =========================================================================
  { q: "La Constitución española de 1869 fue la primera de la historia de España en reconocer el sufragio universal masculino.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "Para Karl Popper, una teoría científica es válida si puede ser verificada definitivamente mediante inducción.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "La cadena de transporte de electrones mitocondrial se localiza en la membrana mitocondrial externa.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "El 'Libro de buen amor' del Arcipreste de Hita está escrito mayoritariamente en cuaderna vía.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "En un movimiento armónico simple, la aceleración es proporcional al desplazamiento y de sentido opuesto.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "La desamortización de Pascual Madoz de 1855 afectó principalmente a los bienes comunales y municipales.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "En la ética de Aristóteles, la virtud moral consiste en el extremo máximo de cualquier pasión humana.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "Los fragmentos de Okazaki se sintetizan en la hebra conductora durante la replicación del ADN.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "Una matriz cuadrada tiene inversa si y solo si su determinante es distinto de cero.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "La Conferencia de Berlín de 1884-1885 reguló el reparto colonial de África entre las potencias europeas.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "El efecto fotoeléctrico demostró que la energía de los fotoelectrones depende de la intensidad de la luz y no de su frecuencia.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "El mester de juglaría empleaba versos regulares de catorce sílabas con rima consonante estricta.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "La regla de Markovnikov predice la orientación de la adición electrófila a alquenos asimétricos.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "El Pacto del Pardo de 1885 aseguró la continuidad de la monarquía tras la muerte de Alfonso XII.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "Según Descartes, la 'res extensa' tiene como atributo esencial el pensamiento.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "La glucólisis ocurre en el citosol celular y no requiere presencia de oxígeno molecular.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "El teorema de Bolzano asegura que si una función continua toma signos opuestos en los extremos de [a,b], se anula en algún punto interior.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "La Semana Trágica de Barcelona de 1909 estalló por el envío de reservistas a la guerra de Marruecos.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "La obra 'La Celestina' de Fernando de Rojas se publicó originalmente en 1499 como 'Comedia de Calisto y Melibea'.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "Un campo magnético estático realiza trabajo mecánico sobre una carga eléctrica en movimiento.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "La hiperinflación alemana de 1923 estuvo vinculada al pago de reparaciones y la ocupación francesa del Ruhr.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "Para Santo Tomás de Aquino, la fe y la razón son incompatibles y se contradicen mutuamente.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "Los plásmidos son pequeñas moléculas de ADN circular extracromosómico frecuentes en bacterias.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "La Generación del 27 recibió ese nombre por conmemorar el tricentenario de la muerte de Luis de Góngora.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "El principio de Le Châtelier afirma que un sistema en equilibrio desplazado responde oponiéndose a la perturbación.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "El Convenio de Vergara de 1839 puso fin a la Tercera Guerra Carlista.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "En estadística, la varianza de una variable aleatoria puede tomar valores negativos.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "El estilo mudéjar es un arte exclusivo de los reinos cristianos hispánicos con mano de obra y tradición islámica.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },
  { q: "Los anticuerpos o inmunoglobulinas son sintetizados por los linfocitos T citotóxicos.", category: "culturageneral", level: 3, type: "true_false", answer: "Falso" },
  { q: "La Revolución Gloriosa de 1868 provocó el exilio de Isabel II a Francia.", category: "culturageneral", level: 3, type: "true_false", answer: "Verdadero" },

  // =========================================================================
  // 7. ENCONTRAR LA AFIRMACIÓN CORRECTA - NIVEL 1 (5 PREGUNTAS: 251 a 255)
  // =========================================================================
  {
    q: "¿Cuál de estas afirmaciones sobre la Historia de España es CORRECTA?",
    category: "culturageneral", level: 1, type: "find_true",
    options: ["La Constitución de 1978 instauró una monarquía parlamentaria.", "La Guerra Civil terminó en 1936.", "Alfonso XIII abdicó en 1975.", "Cádiz aprobó su Constitución en 1868."],
    answer: "La Constitución de 1978 instauró una monarquía parlamentaria."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Biología celular es CORRECTA?",
    category: "culturageneral", level: 1, type: "find_true",
    options: ["Los ribosomas sintetizan proteínas.", "Las células animales tienen cloroplastos.", "El ADN se localiza solo en los lisosomas.", "La mitosis genera gametos haploides."],
    answer: "Los ribosomas sintetizan proteínas."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Literatura Española es CORRECTA?",
    category: "culturageneral", level: 1, type: "find_true",
    options: ["Miguel de Cervantes murió en 1616.", "Lope de Vega escribió Don Quijote.", "García Lorca perteneció al siglo XVIII.", "El Lazarillo es una obra teatral en verso."],
    answer: "Miguel de Cervantes murió en 1616."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Física y Química es CORRECTA?",
    category: "culturageneral", level: 1, type: "find_true",
    options: ["El agua pura hierve a 100 °C a 1 atm.", "El protón tiene carga negativa.", "El oro tiene símbolo químico Ag.", "La masa se mide en newtons."],
    answer: "El agua pura hierve a 100 °C a 1 atm."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Geografía de España es CORRECTA?",
    category: "culturageneral", level: 1, type: "find_true",
    options: ["El río Ebro desemboca en el Mediterráneo.", "Madrid tiene costa en el Cantábrico.", "El Teide está en Mallorca.", "Portugal limita al este con España."],
    answer: "El río Ebro desemboca en el Mediterráneo."
  },

  // =========================================================================
  // 8. ENCONTRAR LA AFIRMACIÓN CORRECTA - NIVEL 2 (15 PREGUNTAS: 256 a 270)
  // =========================================================================
  {
    q: "¿Cuál de estas afirmaciones sobre Filosofía Moderna es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Descartes usó la duda metódica para hallar certezas.", "Hume defendió la existencia de ideas innatas.", "Kant rechazó la existencia del deber moral.", "Nietzsche defendió el platonismo cristiano."],
    answer: "Descartes usó la duda metódica para hallar certezas."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre el siglo XIX español es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La Restauración borbónica comenzó en 1874.", "La Primera República duró diez años.", "Carlos IV venció a Napoleón en Bailén.", "La Constitución de 1812 fue absolutista."],
    answer: "La Restauración borbónica comenzó en 1874."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Genética Molecular es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La transcripción sintetiza ARN a partir de ADN.", "La adenina se empareja con la citosina.", "El código genético es ambiguo.", "La replicación del ADN es conservativa."],
    answer: "La transcripción sintetiza ARN a partir de ADN."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre la Generación del 27 es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Sintetizó tradición popular y vanguardias.", "Rechazó por completo a los poetas clásicos.", "Se formó exclusivamente en Barcelona.", "Solo cultivó novela realista."],
    answer: "Sintetizó tradición popular y vanguardias."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Química Orgánica es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Los alquenos poseen al menos un doble enlace C=C.", "Los alcanos son hidrocarburos aromáticos.", "El grupo carboxilo caracteriza a las aminas.", "El benceno es un alcohol saturado."],
    answer: "Los alquenos poseen al menos un doble enlace C=C."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre la Guerra Fría es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La OTAN se fundó en 1949.", "El Pacto de Varsovia lo lideró EE. UU.", "La carrera espacial empezó en 1989.", "Corea se unificó en 1953."],
    answer: "La OTAN se fundó en 1949."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Economía es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La inflación es el aumento generalizado de precios.", "El IPC mide el desempleo juvenil.", "En un oligopolio hay infinitos oferentes.", "El BCE fija los impuestos en España."],
    answer: "La inflación es el aumento generalizado de precios."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Cálculo Matemático es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La derivada en un extremo relativo anulable vale cero.", "La integral de una constante es cero.", "El logaritmo de cero es uno.", "Toda matriz rectangular tiene determinante."],
    answer: "La derivada en un extremo relativo anulable vale cero."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre el Siglo de Oro es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Lope de Vega renovó el teatro con 'Arte nuevo de hacer comedias'.", "Garcilaso introdujo el verso alejandrino medieval.", "Calderón perteneció al Renacimiento temprano.", "Quevedo escribió 'Soledades'."],
    answer: "Lope de Vega renovó el teatro con 'Arte nuevo de hacer comedias'."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Electromagnetismo es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Una corriente eléctrica genera un campo magnético.", "Existen monopolos magnéticos aislados.", "La ley de Coulomb mide fuerzas gravitatorias.", "El campo magnético se mide en culombios."],
    answer: "Una corriente eléctrica genera un campo magnético."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Historia Medieval peninsular es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La conquista de Granada culminó en 1492.", "El Califato de Córdoba cayó en el siglo VIII.", "Alfonso X impulsó la Escuela de Traductores de Sevilla.", "Los visigodos entraron tras los musulmanes."],
    answer: "La conquista de Granada culminó en 1492."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Metabolismo celular es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["El ciclo de Krebs ocurre en la matriz mitocondrial.", "La fermentación alcohólica produce ácido láctico.", "La fotosíntesis libera CO2 como residuo.", "La glucólisis ocurre dentro del núcleo."],
    answer: "El ciclo de Krebs ocurre en la matriz mitocondrial."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Filosofía Antigua es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["Sócrates empleó la mayéutica para alumbrar la verdad.", "Aristóteles fundó la Academia de Atenas.", "Los sofistas defendían verdades absolutas inmutables.", "Epicuro predicaba el dolor como bien supremo."],
    answer: "Sócrates empleó la mayéutica para alumbrar la verdad."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Historia del Arte es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["El Guernica de Picasso se pintó en 1937.", "Velázquez fue un pintor impresionista.", "La Mezquita de Córdoba es de estilo gótico.", "Dalí diseñó la Sagrada Familia."],
    answer: "El Guernica de Picasso se pintó en 1937."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Geografía Física es CORRECTA?",
    category: "culturageneral", level: 2, type: "find_true",
    options: ["La Meseta Central está dividida por el Sistema Central.", "El Guadalquivir desemboca en el Atlántico en Huelva.", "Los Picos de Europa están en los Pirineos.", "El clima oceánico tiene veranos muy áridos."],
    answer: "La Meseta Central está dividida por el Sistema Central."
  },

  // =========================================================================
  // 9. ENCONTRAR LA AFIRMACIÓN CORRECTA - NIVEL 3 (5 PREGUNTAS: 271 a 275)
  // =========================================================================
  {
    q: "¿Cuál de estas afirmaciones sobre Termodinámica Química es CORRECTA?",
    category: "culturageneral", level: 3, type: "find_true",
    options: ["Un proceso es espontáneo si ΔG < 0 a P y T constantes.", "Toda reacción exotérmica es siempre espontánea.", "La entalpía de formación de un elemento puro es positiva.", "La entropía disminuye en toda fusión."],
    answer: "Un proceso es espontáneo si ΔG < 0 a P y T constantes."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre la Segunda República Española es CORRECTA?",
    category: "culturageneral", level: 3, type: "find_true",
    options: ["La Constitución de 1931 reconoció el voto femenino.", "El Bienio Reformista lo presidió Gil-Robles.", "La CEDA ganó las elecciones de febrero de 1936.", "La reforma agraria se aprobó durante el franquismo."],
    answer: "La Constitución de 1931 reconoció el voto femenino."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Epistemología kantiana es CORRECTA?",
    category: "culturageneral", level: 3, type: "find_true",
    options: ["Espacio y tiempo son formas a priori de la sensibilidad.", "Las categorías del entendimiento proceden de la experiencia.", "La metafísica es posible como ciencia teórica.", "La razón práctica niega la libertad humana."],
    answer: "Espacio y tiempo son formas a priori de la sensibilidad."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Inmunología es CORRECTA?",
    category: "culturageneral", level: 3, type: "find_true",
    options: ["Los linfocitos B maduran en la médula ósea.", "Los macrófagos son exclusivos de la inmunidad adaptativa.", "La sueroterapia confiere inmunidad activa duradera.", "Los antígenos son producidos por los linfocitos T."],
    answer: "Los linfocitos B maduran en la médula ósea."
  },
  {
    q: "¿Cuál de estas afirmaciones sobre Métrica y Literatura es CORRECTA?",
    category: "culturageneral", level: 3, type: "find_true",
    options: ["La silva combina versos heptasílabos y endecasílabos.", "El romance tiene rima consonante en los versos pares.", "La lira consta de seis versos alejandrinos.", "El haiku tradicional tiene cinco versos."],
    answer: "La silva combina versos heptasílabos y endecasílabos."
  },

  // =========================================================================
  // 10. ENCONTRAR LA AFIRMACIÓN ERRÓNEA - NIVEL 1 (5 PREGUNTAS: 276 a 280)
  // =========================================================================
  {
    q: "Señala la afirmación ERRÓNEA sobre la Tierra y el Sistema Solar:",
    category: "culturageneral", level: 1, type: "find_false",
    options: ["El Sol gira alrededor de la Tierra cada 24 horas.", "La Tierra tarda unos 365 días en orbitar el Sol.", "La Luna es el único satélite natural terrestre.", "Marte es el cuarto planeta desde el Sol."],
    answer: "El Sol gira alrededor de la Tierra cada 24 horas."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Biología básica:",
    category: "culturageneral", level: 1, type: "find_false",
    options: ["Los hongos realizan la fotosíntesis.", "Los mamíferos son animales vertebrados.", "El corazón humano tiene cuatro cavidades.", "Las bacterias son organismos unicelulares."],
    answer: "Los hongos realizan la fotosíntesis."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Historia Contemporánea:",
    category: "culturageneral", level: 1, type: "find_false",
    options: ["España participó activamente en la Segunda Guerra Mundial.", "La Primera Guerra Mundial acabó en 1918.", "La Revolución Francesa ocurrió en el siglo XVIII.", "La ONU se creó tras la Segunda Guerra Mundial."],
    answer: "España participó activamente en la Segunda Guerra Mundial."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Lengua y Literatura:",
    category: "culturageneral", level: 1, type: "find_false",
    options: ["Las palabras agudas llevan tilde siempre.", "El verbo es el núcleo del predicado.", "Cervantes escribió novelas ejemplares.", "La metáfora identifica dos términos semejantes."],
    answer: "Las palabras agudas llevan tilde siempre."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Química elemental:",
    category: "culturageneral", level: 1, type: "find_false",
    options: ["El agua es un elemento químico puro.", "El oxígeno es necesario para la combustión.", "Los ácidos tienen pH inferior a 7.", "El carbono es la base de la química orgánica."],
    answer: "El agua es un elemento químico puro."
  },

  // =========================================================================
  // 11. ENCONTRAR LA AFIRMACIÓN ERRÓNEA - NIVEL 2 (15 PREGUNTAS: 281 a 295)
  // =========================================================================
  {
    q: "Señala la afirmación ERRÓNEA sobre el Reinado de Isabel II:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Estableció el sufragio universal femenino.", "Sufrió las guerras carlistas.", "Alternó gobiernos moderados y progresistas.", "Terminó con la Revolución de 1868."],
    answer: "Estableció el sufragio universal femenino."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre la filosofía de Platón:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Defendió la democracia asamblearia como gobierno ideal.", "Propuso el gobierno de los filósofos-reyes.", "Dividió el alma en tres partes.", "Consideró las Ideas eternas e inmutables."],
    answer: "Defendió la democracia asamblearia como gobierno ideal."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre la mitosis:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Reduce a la mitad el número de cromosomas.", "Consta de profase, metafase, anafase y telofase.", "Origina dos células genéticamente idénticas.", "Interviene en el crecimiento de tejidos."],
    answer: "Reduce a la mitad el número de cromosomas."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre el Romanticismo español:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Buscó el equilibrio racional y didáctico clásico.", "José de Espronceda escribió 'La canción del pirata'.", "Gustavo Adolfo Bécquer destacó en la lírica intimista.", "Mariano José de Larra brilló en el artículo de costumbres."],
    answer: "Buscó el equilibrio racional y didáctico clásico."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Mecánica Clásica:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["La energía cinética puede ser negativa.", "La energía mecánica se conserva sin rozamiento.", "La fuerza gravitatoria es siempre atractiva.", "La potencia se mide en vatios."],
    answer: "La energía cinética puede ser negativa."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre la Transición Española:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["El Partido Comunista nunca fue legalizado.", "La Ley para la Reforma Política se aprobó en 1976.", "Se celebraron elecciones democráticas en junio de 1977.", "Se aprobaron estatutos de autonomía."],
    answer: "El Partido Comunista nunca fue legalizado."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Economía de la Empresa:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["El activo siempre es mayor que el pasivo más neto.", "Los costes fijos no varían con la producción a corto plazo.", "El umbral de rentabilidad iguala ingresos y costes totales.", "Una sociedad anónima divide su capital en acciones."],
    answer: "El activo siempre es mayor que el pasivo más neto."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Enlace Químico:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Los compuestos iónicos conducen electricidad en estado sólido.", "Los metales poseen electrones deslocalizados.", "El diamante es un sólido covalente reticular.", "El agua presenta geometría angular."],
    answer: "Los compuestos iónicos conducen electricidad en estado sólido."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Álgebra Lineal:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["El producto de matrices es siempre conmutativo.", "Un sistema compatible determinado tiene solución única.", "El rango de una matriz coincide con sus filas independientes.", "La traspuesta de una matriz simétrica es ella misma."],
    answer: "El producto de matrices es siempre conmutativo."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Geografía de la Población:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["El saldo vegetativo es la diferencia entre inmigrantes y emigrantes.", "España presenta una baja tasa de natalidad.", "El éxodo rural creció en los años 60 en España.", "La esperanza de vida en España es de las más altas."],
    answer: "El saldo vegetativo es la diferencia entre inmigrantes y emigrantes."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre la Segunda Guerra Mundial:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Italia formó parte de los Aliados desde 1939.", "La invasión de Polonia detonó el conflicto europeo.", "La batalla de Stalingrado fue un punto de inflexión.", "Estados Unidos lanzó bombas atómicas sobre Japón."],
    answer: "Italia formó parte de los Aliados desde 1939."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Ácidos Nucleicos:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["El ARN es siempre bicatenario en células humanas.", "Los nucleótidos contienen pentosa, fosfato y base.", "La adenina y la guanina son bases púricas.", "Las cadenas del ADN son antiparalelas."],
    answer: "El ARN es siempre bicatenario en células humanas."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Realismo y Naturalismo:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Idealizó la realidad huyendo de lo cotidiano.", "Benito Pérez Galdós retrató la sociedad madrileña.", "Emilia Pardo Bazán difundió el naturalismo en España.", "Utilizó frecuentemente un narrador omnisciente."],
    answer: "Idealizó la realidad huyendo de lo cotidiano."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Óptica Geométrica:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["La luz viaja más rápido en el vidrio que en el vacío.", "El ángulo de incidencia iguala al de reflexión.", "La refracción cambia la dirección al variar el medio.", "Los espejos planos forman imágenes virtuales."],
    answer: "La luz viaja más rápido en el vidrio que en el vacío."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Arte Renacentista:",
    category: "culturageneral", level: 2, type: "find_false",
    options: ["Renunció al estudio de la anatomía y perspectiva.", "Recuperó los órdenes arquitectónicos clásicos.", "Miguel Ángel esculpió el David en mármol.", "Leonardo da Vinci pintó La Última Cena."],
    answer: "Renunció al estudio de la anatomía y perspectiva."
  },

  // =========================================================================
  // 12. ENCONTRAR LA AFIRMACIÓN ERRÓNEA - NIVEL 3 (5 PREGUNTAS: 296 a 300)
  // =========================================================================
  {
    q: "Señala la afirmación ERRÓNEA sobre Cinética y Equilibrio Químico:",
    category: "culturageneral", level: 3, type: "find_false",
    options: ["Un catalizador modifica el valor de la constante Kc.", "Kc depende exclusivamente de la temperatura.", "La velocidad de reacción suele aumentar con la temperatura.", "En el equilibrio las velocidades directa e inversa se igualan."],
    answer: "Un catalizador modifica el valor de la constante Kc."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre la filosofía de Karl Marx:",
    category: "culturageneral", level: 3, type: "find_false",
    options: ["La superestructura ideológica determina la base económica.", "El materialismo histórico analiza los modos de producción.", "El trabajo alienado separa al obrero de su producto.", "La historia avanza mediante contradicciones dialécticas."],
    answer: "La superestructura ideológica determina la base económica."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Microbiología y Biotecnología:",
    category: "culturageneral", level: 3, type: "find_false",
    options: ["Los virus poseen metabolismo propio independiente.", "La PCR permite amplificar fragmentos específicos de ADN.", "Las enzimas de restricción cortan ADN en secuencias concretas.", "Los bacteriófagos son virus que infectan bacterias."],
    answer: "Los virus poseen metabolismo propio independiente."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre el Sexenio Democrático (1868-1874):",
    category: "culturageneral", level: 3, type: "find_false",
    options: ["Alfonso XII reinó durante todo el Sexenio.", "Estalló la Guerra de los Diez Años en Cuba.", "Se produjo la insurrección cantonal en 1873.", "El general Prim fue asesinado en diciembre de 1870."],
    answer: "Alfonso XII reinó durante todo el Sexenio."
  },
  {
    q: "Señala la afirmación ERRÓNEA sobre Física Cuántica y Nuclear:",
    category: "culturageneral", level: 3, type: "find_false",
    options: ["La desintegración alfa emite electrones de alta energía.", "La constante de Planck cuantiza la energía de los fotones.", "La fusión nuclear une núcleos ligeros liberando energía.", "De Broglie asoció una longitud de onda a toda partícula."],
    answer: "La desintegración alfa emite electrones de alta energía."
  }
];
