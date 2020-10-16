//E = ESPECIFICA; C = COMPARTIDA; G = GENERAL
let materiasGenerales = [
  //sem1
  {
    id: "Análisis Matemático I",
    hijo: [],
    cat: "G",
    nombre: "Analisis I",
    profesor: "José Díaz Milesi",
    creditos: "9",
    semestre: "I",
    exonerable: "Se exonera parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Geometría y Álgebra Lineal I", //falta datos exoneracion
    hijo: [],
    cat: "G",
    nombre: "Geometría y Álgebra Lineal I",
    profesor: "Alfredo Piria",
    creditos: "9",
    semestre: "I",
    exonerable: "Se exonera parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Física I", //falta datos exoneracion
    hijo: [],
    cat: "G",
    nombre: "Física I",
    profesor: "Juan Pablo Fossati",
    creditos: "7,5",
    semestre: "I",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Se exonera totalmente con nota 10",
    directos: 0,
  },
  {
    id: "Introducción a la Robótica",
    hijo: [],
    cat: "G",
    nombre: "Introducción a la Robótica",
    profesor: "Gustavo Compagnone", //esto esta mal
    creditos: "6",
    semestre: "I",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Introducción a la Ingeniería",
    hijo: [],
    cat: "G",
    nombre: "Introducción a la Ingeniería",
    profesor: "Adrián Santilli",
    creditos: "6",
    semestre: "I",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  //sem2
  {
    id: "Análisis Matemático II",
    hijo: ["Análisis Matemático I"],
    cat: "G",
    nombre: "Analisis II",
    profesor: "Pepe Díaz Milesi",
    creditos: "9",
    semestre: "II",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Geometría y algebra lineal II",
    hijo: ["Geometría y Álgebra Lineal I"],
    cat: "G",
    nombre: "Geometría y Álgebra Lineal I",
    profesor: "Alfredo Piria",
    creditos: "9",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  //sem3
  {
    id: "Cálculo Numérico",
    hijo: [
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "G",
    nombre: "Cálculo Numérico",
    profesor: "Maximiliano Stock", //falta
    creditos: "6",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  {
    id: "Ciencias Humanas I",
    hijo: [],
    cat: "G",
    nombre: "Ciencias Humanas 1",
    profesor: "Fernando Otero",
    creditos: "4,5",
    semestre: "III",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem4
  {
    id: "Probabilidad y Estaidstica",
    hijo: ["Análisis Matemático II", "Análisis Matemático I"],
    cat: "G",
    nombre: "Probabilidad y Estaidstica",
    profesor: "Pepe Diaz",
    creditos: "9",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Economía",
    hijo: [],
    cat: "G",
    nombre: "Economía",
    profesor: "Heber Francia",
    creditos: "6",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Comunicación profesional",
    hijo: [],
    cat: "G",
    nombre: "Comunicación profesional",
    profesor: "María del Huerto Prato",
    creditos: "3",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem5

  {
    id: "Investigación Operativa I",
    hijo: [
      "Probabilidad y Estaidstica",
      "Análisis Matemático II",
      "Análisis Matemático I",
    ],
    cat: "G",
    nombre: "Investigación Operativa I",
    profesor: "Claudio Ruibal",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Práctica profesional 1",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 1",
    profesor: "",
    creditos: "-",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "Contabilidad y costos",
    hijo: [],
    cat: "G",
    nombre: "Contabilidad y costos",
    profesor: "Guillermo Rouks",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre ipar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Se exonera con nota 8",
  }, //sem6
  {
    id: "Cuestion de Teología",
    hijo: [],
    cat: "G",
    nombre: "Cuestion de Teología",
    profesor: "Juan Carlos Carrasco",
    creditos: "4,5",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //sem7
  {
    id: "Gestión de Calidad",
    hijo: [],
    cat: "G",
    nombre: "Gestión de Calidad",
    profesor: "Darío Alentorn",
    creditos: "4,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Práctica profesional 2",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 2",
    profesor: "",
    creditos: "-",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //sem8
  {
    id: "Ciencias Humanas II",
    hijo: [],
    cat: "G",
    nombre: "Ciencias Humanas II",
    profesor: "Silvia Facal",
    creditos: "4,5",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //sem9
  {
    id: "Proyectos de Inversión",
    hijo: ["Contabilidad y costos"],
    cat: "G",
    nombre: "Proyectos de Inversión",
    profesor: "Marcos Rey",
    creditos: "4,5",
    semestre: "IX",
    dicta: "Se dicta en semestre impar",
    exonerable: "No se exonera", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Práctica profesional 3",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 3",
    profesor: "",
    creditos: "-",
    semestre: "IX",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //sem10
  {
    id: "Elementos de Gestión Empresarial",
    hijo: ["Economía"],
    cat: "G",
    nombre: "Elementos de Gestión Empresarial ",
    profesor: "Fernando Requena ",
    creditos: "6",
    semestre: "X",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Gestión de Proyecto",
    hijo: ["Proyectos de Inversión", "Contabilidad y costos"],
    cat: "G",
    nombre: "Gestión de Proyectos",
    profesor: "Viviana Rocco", //skere
    creditos: "4,5",
    semestre: "X",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Ética Profesional",
    hijo: ["Ciencias Humanas I"],
    cat: "G",
    nombre: "Ética Profesional",
    profesor: "Juan Carlos Carrasco, Manuel Vega Utrera",
    creditos: "6",
    semestre: "X",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
];
matericasComunes = [
  //sem2

  {
    id: "Física II",
    hijo: [],
    cat: "C",
    nombre: "Física II",
    profesor: "Juan Pablo Fossati",
    creditos: "7,5",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "ind", "civ"],
    directos: 0,
  },
  {
    id: "Investigación Operativa II",
    hijo: [
      "Investigación Operativa I",
      "Probabilidad y Estaidstica",
      "Análisis Matemático II",
      "Análisis Matemático I",
    ],
    cat: "G",
    nombre: "Investigación Operativa II",
    profesor: "Claudio Ruibal",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["inf", "ind"],
    directos: 1,
  },
  {
    id: "Matlab", //falta
    hijo: [],
    cat: "C",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["ind", "civ"],
    directos: 0,
  },

  {
    id: "Fundamentos Químicos de la Ingeniería", //nose si esta bien lo de exonerable
    hijo: [],
    cat: "C",
    nombre: "Fundamentos Químicos de la Ingeniería",
    profesor: "Laura Luzuriaga",
    creditos: "6",
    semestre: "II",
    exonerable: "no es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["ind", "civ"],
    directos: 0,
  },
  {
    id: "Programación I",
    hijo: [],
    cat: "C",
    nombre: "Pogramación  I",
    profesor: "Daniel Pereda",
    creditos: "7,5",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  {
    id: "Sistemas Digitales I",
    hijo: [],
    cat: "C",
    nombre: "Sistemas Digitales",
    profesor: "Andres Merello",
    creditos: "6",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  //sem3
  {
    id: "Análisis Matemático III",
    hijo: [
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "C",
    nombre: "Análisis Matemático III ",
    profesor: "José Díaz Milesi ",
    creditos: "9",
    semestre: "III",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "ind", "civ"],
    directos: 2,
  },
  {
    id: "Mecánica I", //error en doc
    hijo: ["Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "Mecánica I",
    profesor: "",
    creditos: "7,5",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["ind", "civ"],
    directos: 2,
  },
  {
    id: "Laboratorio CAD",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio Laboratorio CAD",
    profesor: "Daniel Larnaudie",
    creditos: "6",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["ind", "civ"],
    directos: 0,
  },
  {
    id: "Programación II",
    hijo: ["Programación I"],
    cat: "C",
    nombre: "Programacion II",
    profesor: "Daniel Pereda",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre pimar",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  }, //sem3
  {
    id: "Diseño de Base de Datos I",
    hijo: ["Programación I"],
    cat: "C",
    nombre: "Intoduccion a Base de Datos",
    profesor: "Javier Pereira",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Sistemas Digitales II",
    hijo: ["Sistemas Digitales I"],
    cat: "C",
    nombre: "Sistemas Digitales II",
    profesor: "Andres Merello",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre par",
    exonerable: "No se exonera", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  //sem4
  {
    id: "Diseño de Base de Datos II",
    hijo: ["Diseño de Base de Datos I", "Programación I"],
    cat: "C",
    nombre: "Introducion a Base de Datos II",
    profesor: "Javier Pereira",
    creditos: "7,5",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Mecánica II",
    hijo: ["Mecánica I", "Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "Mecánica II",
    profesor: "Carlos Brun",
    creditos: "7,5",
    semestre: "IV",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["civ", "ind"],
    directos: 1,
  },
  {
    id: "Resistencia de materiales I",
    hijo: ["Mecánica I", "Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["civ", "ind"],
    directos: 1,
  },

  {
    id: "Laboratirio TIC I",
    hijo: ["Programación II", "Programación I"],
    cat: "C",
    nombre: "Laboratirio TIC I",
    profesor: "Daniel Pereda",
    creditos: "6",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  }, //sem5
  {
    id: "Sistemas Operativos",
    hijo: ["Sistemas Digitales II", "Sistemas Digitales I"],
    cat: "C",
    nombre: "Sistemas Operativos",
    profesor: "Gerardo Quincke",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Resistencia de materiales II",
    hijo: [
      "Resistencia de materiales I",
      "Mecánica I",
      "Física I",
      "Análisis Matemático I",
    ],
    cat: "C",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["civ", "ind"],
    directos: 1,
  },
  {
    id: "Ciencia e Ingeniería de materiales",
    hijo: ["Fundamentos Químicos de la Ingeniería"],
    cat: "C",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["civ", "ind"],
    directos: 1,
  },
  {
    id: "Laboratorio TIC II",
    hijo: [],
    cat: "C",
    nombre: "",
    profesor: "Gerardo Quincke",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  {
    id: "Electromagnetismo", //faltan datos de exoneracion
    hijo: [
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "C",
    nombre: "Electromagnetismo",
    profesor: "Gerardo Beltrame",
    creditos: "7,5",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "ind"],
    directos: 2,
  }, //sem6

  {
    id: "Electrotecnia I",
    hijo: [
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Electrotecnia I",
    profesor: "Mauricio Riera",
    creditos: "7,5",
    semestre: "VI",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["ind"],
    directos: 1,
  },
  {
    id: "Redes de Datos I",
    hijo: [
      "Sistemas Digitales II",
      "Práctica profesional 1",
      "Sistemas Digitales I"
    ],
    cat: "C",
    nombre: "Redes de Datos I",
    profesor: "Gustavo Compagnone",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 2,
  },
  {
    id: "Ingeniería de Software I",
    hijo: ["Laboratirio TIC I", "Programación II", "Programación I"],
    cat: "C",
    nombre: "Ingeniería de Software I",
    profesor: "Juan Pablo Núñez",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Laboratorio TIC III",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC III",
    profesor: "Analía Conde",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
  },
  //sem7
  {
    id: "Sistemas Distribuidos",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
      "Sistemas Digitales I",
    ],
    cat: "C",
    nombre: "Sistemas Distribuidos",
    profesor: "Daniel Canoniero",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "No es exonerable",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Ingeniería Ambiental ",
    hijo: [],
    cat: "C",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["civ", "ind"],
    directos: 0,
  },
  {
    id: "Laboratorio TIC IV",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC IV",
    profesor: "Analía Conde",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  }, //SEM8
  {
    id: "Laboratorio TIC V",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC V",
    profesor: "Diego Durán",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  {
    id: "Electronica",
    hijo: [
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "C",
    nombre: "Electrónica",
    profesor: "--falta info--", //skere
    creditos: "7,5",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "ind"],
    directos: 1,
  }, //SEM9
  {
    id: "Laboratorio TIC VI",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC VI",
    profesor: "Daniel Canoniero ",
    creditos: "6",
    semestre: "IX",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota -", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
];

let materiasEspecificasTel = [
  //sem4

  {
    id: "Sistemas Lineales I",
    hijo: [
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Sistemas Lineales",
    profesor: "Hueso Abreu",
    creditos: "7,5",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  }, //sem5

  {
    id: "Sistemas Lineales II",
    hijo: [
      "Sistemas Lineales I",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Sistemas Lineales",
    profesor: "Marcelo Abreu",
    creditos: "7,5",
    semestre: "V",
    exonerable: "Se exonerea parcialmente,el practico,con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  //sem6
  {
    id: "Muestreo y Procesamiento Digital",
    hijo: [
      "Sistemas Lineales I",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Muestreo y Procesamiento Digital",
    profesor: "Juan Piaggio",
    creditos: "7,5",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Medidas e Instalaciones Eléctricas",
    hijo: [
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "C",
    nombre: "Medidas e Instalaciones Eléctricas ",
    profesor: "Andrés Merello ",
    creditos: "7,5",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  }, //SEM7
  {
    id: "Modulación de Señales",
    hijo: [
      "Sistemas Lineales I",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Modulación de Señales",
    profesor: "Diego Durán",
    creditos: "7,5",
    semestre: "VII",
    deicta: "Se dicta en semestre impar",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Redes de Datos II ",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Ondas Electromagnéticas",
    hijo: [
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  }, //SEM8
  {
    id: "Sistemas de Transmisión",
    hijo: [
      "Práctica profesional 2",
      "Ondas Electromagnéticas",
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Sistemas de Transmisión",
    profesor: "Rafael Sotelo",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerale", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  }, //SEM10

  {
    id: "proyTel",
    hijo: [
      "Sistemas de Transmisión",
      "Electronica",
      "Ingeniería de Software I",
      "Laboratirio TIC I",
      "Programación II",
      "Programación I",
      "Práctica profesional 2",
      "Ondas Electromagnéticas",
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Proyecto",
    profesor: "Marcelo Abreu, Thomas Honnins",
    creditos: "24",
    semestre: "X",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },
];
//cets
let cetTel = [
  {
    id: "CET/IDIOMAS/MLE 1",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 2 ",
    nombre: "CET/IDIOMAS/MLE ",
    hijo: [""],
    creditos: "4.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 3 ",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 4",
    hijo: [""],
    creditos: "13.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 5",
    hijo: [""],
    nombre: "CET/IDIOMAS/MLE ",
    creditos: "27",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
];
let cetInf = [
  {
    id: "CET/IDIOMAS/MLE 1",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 2 ",
    nombre: "CET/IDIOMAS/MLE ",
    hijo: [""],
    creditos: "9",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 3 ",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 4",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 5",
    hijo: [""],
    nombre: "CET/IDIOMAS/MLE ",
    creditos: "27",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 6",
    hijo: [""],
    nombre: "CET/IDIOMAS/MLE ",
    creditos: "13.5",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
];
let cetCiv = [
  {
    id: "CET/IDIOMAS/MLE 1",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 2 ",
    nombre: "CET/IDIOMAS/MLE ",
    hijo: [""],
    creditos: "13.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 3 ",
    hijo: [""],
    creditos: "13.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 4",
    hijo: [""],
    creditos: "13.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 5",
    hijo: [""],
    nombre: "CET/IDIOMAS/MLE ",
    creditos: "3",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
];
let cetInd = [
  {
    id: "CET/IDIOMAS/MLE 1",
    hijo: [""],
    creditos: "9",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 2 ",
    nombre: "CET/IDIOMAS/MLE ",
    hijo: [""],
    creditos: "7.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 3 ",
    hijo: [""],
    creditos: "10.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 4",
    hijo: [""],
    creditos: "16.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 5",
    hijo: [""],
    nombre: "CET/IDIOMAS/MLE ",
    creditos: "4.5",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
];

let materiasEspCiv = [
  {
    id: "Introducción a la Termodinámica", //falta
    hijo: ["Análisis Matemático I"],
    cat: "E",
    nombre: "Laboratorio I Industrial", //skere
    profesor: "",
    creditos: "6",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: " Procedimientos de construcción I ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: " ",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Laboratorio I Civil",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Hidraúlica",
    hijo: [
      "Introducción a la Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático I",
      "Análisis Matemático II",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },

  {
    id: "Laboratorio II Civil",
    hijo: ["Laboratorio I Civil"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Topografía y cartografia",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Hidrología",
    hijo: [
      "Hidraúlica",
      "Introducción a la Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático I",
      "Análisis Matemático II",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Mecánica de suelos I",
    hijo: [
      "Resistencia de materiales I",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Resistencia de materiales III",
    hijo: [
      "Resistencia de materiales II",
      "Mecánica II",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
      "Resistencia de materiales I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  {
    id: "Hormigón I",
    hijo: [
      "Práctica profesional 1",
      "Resistencia de materiales II",
      "Ciencia e Ingeniería de materiales",
      "Fundamentos Químicos de la Ingeniería",
      "Mecánica II",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
      "Resistencia de materiales I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },
  {
    id: "Mecánica de Suelos II",
    hijo: [
      "Mecánica de suelos I",
      "Resistencia de materiales I",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Resistencia de materiales IV",
    hijo: [
      "Resistencia de materiales III",
      "Resistencia de materiales II",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
      "Resistencia de materiales I",
      "Mecánica II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Hormigón II",
    hijo: [
      "Hormigón I",
      "Resistencia de materiales III",
      "Resistencia de materiales II",
      "Mecánica II",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
      "Resistencia de materiales I",
      "Práctica profesional 1",
      "Ciencia e Ingeniería de materiales",
      "Fundamentos Químicos de la Ingeniería",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },

  {
    id: "Ingeniería Sanitaria I",
    hijo: [
      "Hidraúlica",
      "Práctica profesional 2",
      "Introducción a la Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático I",
      "Análisis Matemático II",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  {
    id: "Caminos",
    hijo: [
      "Mecánica de Suelos II",
      "Topografía y cartografia",
      "Mecánica de suelos I",
      "Resistencia de materiales I",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  {
    id: "Transporte",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Laboratorio III Civil",
    hijo: ["Laboratorio II Civil", "Laboratorio I Civil"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Ingeniería Sanitaria II",
    hijo: [
      "Ingeniería Sanitaria I",
      "Hidrología",
      "Práctica profesional 2",
      "Hidraúlica",
      "Introducción a la Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático I",
      "Análisis Matemático II",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
  {
    id: "Estructuras metálicas y de madera ",
    hijo: [
      "Resistencia de materiales IV",
      "Resistencia de materiales III",
      "Resistencia de materiales II",
      "Física I",
      "Análisis Matemático I",
      "Mecánica I",
      "Resistencia de materiales I",
      "Mecánica II",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Ingeniería de Transporte",
    hijo: ["Transporte"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Proyecto CIV",
    hijo: [
      "Caminos",
      "Ingeniería Sanitaria II",
      "Hormigón II",
      "Ingeniería Sanitaria I",
      "Hidrología",
      "Práctica profesional 2",
      "Hidraúlica",
      "Introducción a la Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
      "Mecánica de Suelos II",
      "Topografía y cartografia",
      "Mecánica de suelos I",
      "Resistencia de materiales I",
      "Física I",
      "Mecánica I",
      "Hormigón I",
      "Resistencia de materiales III",
      "Resistencia de materiales II",
      "Mecánica II",
      "Análisis Matemático I",
      "Práctica profesional 1",
      "Ciencia e Ingeniería de materiales",
      "Fundamentos Químicos de la Ingeniería",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "24",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },
];
let materiasEspInd = [
  {
    id: "Laboratorio I Industrial",
    hijo: [],
    cat: "E",
    nombre: "Laboratorio I Industrial",
    profesor: "Diego Moratorio y Sofía Teixeira",
    creditos: "6",
    semestre: "III",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Termodinámica",
    hijo: ["Análisis Matemático I"],
    cat: "E",
    nombre: "Termodinámica",
    profesor: "Gerardo Beltrame ",
    creditos: "7,5",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Ayudantía Técnica",
    hijo: ["Laboratorio CAD"],
    cat: "E",
    nombre: "Ayudantía Técnica",
    profesor: "Ricardo Cosentino",
    creditos: "3",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Laboratorio II Industrial",
    hijo: ["Laboratorio I Industrial"],
    cat: "E",
    nombre: "Laboratorio II Industrial",
    profesor: "Marcelo Castelli",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Mecánica de fluídos",
    hijo: [
      "Análisis Matemático III",
      "Práctica profesional 1",
      "Termodinámica",
      "Análisis Matemático II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "Mecánica de los Fluidos",
    profesor: "Gerardo Beltrame",
    creditos: "7,5",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },
  {
    id: "Metalurgia",
    hijo: [
      "Ciencia e Ingeniería de materiales",
      "Fundamentos Químicos de la Ingeniería",
    ],
    cat: "E",
    nombre: "Metalurgia",
    profesor: "Manuel Vega Utrera",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Organizacíon de la Producción I",
    hijo: [
      "Investigación Operativa I",
      "Probabilidad y Estaidstica",
      "Análisis Matemático II",
      "Análisis Matemático I",
    ],
    cat: "E",
    nombre: "Organizacíon de la Producción I",
    profesor: "Martín Tanco",
    creditos: "4,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Electrotecnia II",
    hijo: [
      "Electrotecnia I",
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Electrotecnia II",
    profesor: "Mauricio Riera",
    creditos: "7,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Transferencia de Calor",
    hijo: [
      "Termodinámica",
      "Análisis Matemático I",
    ],
    cat: "E",
    nombre: "Transferencia de Calor",
    profesor: "Miguel Baldriz Chouhy",
    creditos: "4,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Máquinas I",
    hijo: [
      "Mecánica de fluídos",
      "Mecánica II",
      "Análisis Matemático III",
      "Práctica profesional 1",
      "Termodinámica",
      "Análisis Matemático II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
      "Mecánica I",
      "Física I",
    ],
    cat: "E",
    nombre: "Máquinas I",
    profesor: "Marcelo Schimchak",
    creditos: "7,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },

  {
    id: "Máquinas II",
    hijo: [
      "Práctica profesional 2",
      "Transferencia de Calor",
      "Mecánica de fluídos",
      "Práctica profesional 1",
      "Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "Máquinas II",
    profesor: "Miguel Baldriz Chouhy",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },

  {
    id: "Procesos Unitarios",
    hijo: ["Fundamentos Químicos de la Ingeniería"],
    cat: "E",
    nombre: "Procesos Unitarios",
    profesor: "Yamandú Rodríguez",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Laboratorio III Industrial",
    hijo: ["Laboratorio II Industrial", "Laboratorio I Industrial"],
    cat: "E",
    nombre: "Laboratorio III Industrial",
    profesor: "Marcelo Castelli",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Automatización y control industrial",
    hijo: [
      "Electronica",
      "Electromagnetismo",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
    ],
    cat: "E",
    nombre: "Automatización y control industrial",
    profesor: "Ricardo Gonzalez",
    creditos: "6",
    semestre: "IX",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Diseño de elementos de máquinas",
    hijo: [
      "Resistencia de materiales II",
      "Resistencia de materiales I",
      "Mecánica I",
      "Física I",
      "Análisis Matemático I",
    ],
    cat: "E",
    nombre: "Diseño de Elementos de Máquinas",
    profesor: "Oliver Kraus",
    creditos: "7,5",
    semestre: "IX",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Máquinas III",
    hijo: [
      "Máquinas II",
      "Práctica profesional 2",
      "Transferencia de Calor",
      "Mecánica de fluídos",
      "Práctica profesional 1",
      "Termodinámica",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Geometría y algebra lineal II",
    ],
    cat: "E",
    nombre: "Máquinas III",
    profesor: "Miguel Angel Causa y Hector Tosar",
    creditos: "7,5",
    semestre: "IX",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Proyecto IND", //ver que poner con la exoneracion
    hijo: [
      "Electrotecnia II",
      "Máquinas III",
      "Electrotecnia I",
      "Electromagnetismo",
      "Mecánica de fluídos",
      "Práctica profesional 1",
      "Física II",
      "Análisis Matemático III",
      "Análisis Matemático II",
      "Geometría y algebra lineal II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Máquinas II",
      "Práctica profesional 2",
      "Transferencia de Calor",
      "Termodinámica",
    ],
    cat: "E",
    nombre: "Proyecto Ingeniería Industrial",
    profesor: "Miguel Angel Causa, Juan Martínez Galán y Marcelo Castelli",
    creditos: "24",
    semestre: "X",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },
];

let materiasEspinf = [
  {
    id: "Logica",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Metodología de la Investigación ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },


  {
    id: "Matemática Discreta",
    hijo: ["Análisis Matemático I", "Geometría y Álgebra Lineal I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "9",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },

  {
    id: "Análisis y Diseño de Algoritmos",
    hijo: ["Programación II", "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Arquitectura de Aplicaciones ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Teoría de la Computación",
    hijo: [
      "Matemática Discreta",
      "Programación II",
      "Análisis Matemático I",
      "Geometría y Álgebra Lineal I",
      "Programación I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 2,
  },

  {
    id: "Ingeniería de Software II",
    hijo: [
      "Ingeniería de Software I",
      "Laboratirio TIC I",
      "Programación II",
      "Programación I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Infraestructura de Informática",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Derecho Telemático",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Seguridad Informática",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Auditoría y Control ",
    hijo: [
      "Ingeniería de Software I",
      "Laboratirio TIC I",
      "Programación II",
      "Programación I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Inteligencia de Negocios ",
    hijo: ["Diseño de Base de Datos I",
          "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Proyecto INF",
    hijo: [
      "Análisis y Diseño de Algoritmos",
      "Redes de Datos I",
      "Ingeniería de Software I",
      "Laboratirio TIC I",
      "Programación II",
      "Programación I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
      "Sistemas Digitales I"
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "24",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 3,
  },
];

let materiasCienciaDatos = [
  {
    id: "Calculo Basico",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "I",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Algebra",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "I",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Principios De Administracion",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "I",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Comunicacion Profesional",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "I",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Introduccion Analitica Empresarial",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "I",
    exonerable: "",
    descripcion: "",
  }, //SEM2
  {
    id: "Introduccion a la Economia",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Calculo",
    hijo: ["Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "9",
    semestre: "II",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Antropologia",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Programacion Analitica",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "9",
    semestre: "II",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Introduccion a la Contabilidad",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "II",
    exonerable: "",
    descripcion: "",
  }, //SEM3
  {
    id: "Diseño de base de datos 1",
    hijo: ["Programacion Analitica"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "III",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Análisis Financiero Internacional",
    hijo: ["Introduccion a la Contabilidad"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "III",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Probabilidad",
    hijo: ["Calculo", "Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "7.5",
    semestre: "III",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Introducción a la Ciencia de Datos",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "III",
    exonerable: "",
    descripcion: "",
  },
 {   id: "Práctica profesional 1",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 1",
    profesor: "",
    creditos: "10",
    semestre: "III",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //SEM4
  {
    id: "Estadística I",
    hijo: ["Probabilidad","Práctica profesional 1","Calculo", "Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "9",
    semestre: "IV",
    exonerable: "",
    descripcion: "",
    directos: 2,
  },
  {
    id: "Matemática Financiera",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Inteligencia de Negocios",
    hijo: ["Diseño de base de datos 1", "Programacion Analitica"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Ética Profesional I",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "IV",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Estrategia de Dirección I",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "",
    descripcion: "",
  }, //SEM5
  {
    id: "Estadística II",
    hijo: ["Probabilidad", "Calculo", "Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Investigación Operativa I",
    hijo: ["Probabilidad", "Estadística I","Práctica profesional 1","Calculo", "Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "",
    descripcion: "",
    directos: 2,
  },
  {
    id: "Tecnologías de Avanzada",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Aprendizaje Automático",
    hijo: ["Programacion Analitica"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Investigación de mercado",
    hijo: ["Práctica profesional 1"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {   id: "Práctica profesional 2",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 1",
    profesor: "",
    creditos: "10",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //SEM6
  {
    id: "Cuestiones de Teología",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VI",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Finanzas I",
    hijo: ["Matemática Financiera"],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "8",
    semestre: "VI",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
  {
    id: "Econometría I",
    hijo: ["Estadística II", "Algebra", "Probabilidad", "Calculo", "Calculo Basico"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "9",
    semestre: "VI",
    exonerable: "",
    descripcion: "",
    directos: 2,
  },
  {
    id: "Analítica de Negocios",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Gestión de sistemas de información",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "",
    descripcion: "",
  }, //SEM7
  {
    id: "Ética Profesional II",
    hijo: ["Ética Profesional I"],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
    directos:1,
  },
  {
    id: "Proyectos de Inversión",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Pasantía Social",
    hijo: [],
    cat: "G",
    nombre: "",
    profesor: "",
    creditos: "1.5",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Marketing Digital",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Contabilidad de Gestión",
    hijo: ["Introduccion a la Contabilidad"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
    directos:1,
  },
  {
    id: "Derecho Telemático",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "",
    descripcion: "",
  },
  {   id: "Práctica profesional 3",
  hijo: [],
  cat: "G",
  nombre: "Práctica profesional 1",
  profesor: "",
  creditos: "10",
  semestre: "VII",
  dicta: "Se dicta en semestre impar",
  exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
  descripcion: "",
}, //SEM8
  {
    id: "PROYECTO DE FIN DE CARRERA",
    hijo: ["Finanzas I","Matemática Financiera"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "30",
    semestre: "VIII",
    exonerable: "",
    descripcion: "",
    directos: 1,
  },
];

let materiasLicInf = [
  {
    id: "Análisis Matemático I",
    hijo: [],
    cat: "G",
    nombre: "Analisis I",
    profesor: "José Díaz Milesi",
    creditos: "9",
    semestre: "I",
    exonerable: "Se exonera parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "Geometría y Álgebra Lineal I", //falta datos exoneracion
    hijo: [],
    cat: "G",
    nombre: "Geometría y Álgebra Lineal I",
    profesor: "Alfredo Piria",
    creditos: "9",
    semestre: "I",
    exonerable: "Se exonera parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },

  {
    id: "Introducción a la Robótica",
    hijo: [],
    cat: "G",
    nombre: "Introducción a la Robótica",
    profesor: "Gustavo Compagnone", //esto esta mal
    creditos: "6",
    semestre: "I",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "Introducción a la Ingeniería",
    hijo: [],
    cat: "G",
    nombre: "Introducción a la Ingeniería",
    profesor: "Adrián Santilli",
    creditos: "6",
    semestre: "I",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  //sem2
  {
    id: "Análisis Matemático II",
    hijo: ["Análisis Matemático I"],
    cat: "G",
    nombre: "Analisis II",
    profesor: "Pepe Díaz Milesi",
    creditos: "9",
    semestre: "II",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  //sem3

  {
    id: "Ciencias Humanas I",
    hijo: [],
    cat: "G",
    nombre: "Ciencias Humanas 1",
    profesor: "Fernando Otero",
    creditos: "4,5",
    semestre: "III",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  }, //sem4
  {
    id: "Probabilidad y Estaidstica",
    hijo: ["Análisis Matemático II", "Análisis Matemático I"],
    cat: "G",
    nombre: "Probabilidad y Estaidstica",
    profesor: "Pepe Diaz",
    creditos: "9",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Economía",
    hijo: [],
    cat: "G",
    nombre: "Economía",
    profesor: "Heber Francia",
    creditos: "6",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },
  {
    id: "Comunicación profesional",
    hijo: [],
    cat: "G",
    nombre: "Comunicación profesional",
    profesor: "María del Huerto Prato",
    creditos: "3",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem5

  {
    id: "Investigación Operativa I",
    hijo: [
      "Probabilidad y Estaidstica",
      "Análisis Matemático II",
      "Análisis Matemático I",
    ],
    cat: "G",
    nombre: "Investigación Operativa I",
    profesor: "Claudio Ruibal",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Práctica profesional 1",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 1",
    profesor: "",
    creditos: "1",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "Contabilidad y costos",
    hijo: [],
    cat: "G",
    nombre: "Contabilidad y costos",
    profesor: "Guillermo Rouks",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre ipar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Se exonera con nota 8",
    directos: 0,
  }, //sem6
  {
    id: "Cuestion de Teología",
    hijo: [],
    cat: "G",
    nombre: "Cuestion de Teología",
    profesor: "Juan Carlos Carrasco",
    creditos: "4,5",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem7

  {
    id: "Práctica profesional 2",
    hijo: [],
    cat: "G",
    nombre: "Práctica profesional 2",
    profesor: "",
    creditos: "0",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem8
  {
    id: "Ciencias Humanas II",
    hijo: [],
    cat: "G",
    nombre: "Ciencias Humanas II",
    profesor: "Silvia Facal",
    creditos: "4,5",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  }, //sem9

  //sem10

  {
    id: "Logica",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Análisis y Diseño de Algoritmos",
    hijo: ["Programación II", "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Arquitectura de Aplicaciones ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 0,
  },

  {
    id: "Teoría de la Computación",
    hijo: ["Programación II", "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Ingeniería de Software II",
    hijo: [
      "Ingeniería de Software I",
      "Laboratirio TIC I",
      "Programación II",
      "Programación I",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },
  {
    id: "Infraestructura de Informática",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
    ],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    directos: 1,
  },

  {
    id: "Programación I",
    hijo: [],
    cat: "C",
    nombre: "Pogramación  I",
    profesor: "Daniel Pereda",
    creditos: "7,5",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  {
    id: "Sistemas Digitales I",
    hijo: [],
    cat: "C",
    nombre: "Sistemas Digitales",
    profesor: "Andres Merello",
    creditos: "6",
    semestre: "II",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  //sem3

  {
    id: "Programación II",
    hijo: ["Programación I"],
    cat: "C",
    nombre: "Programacion II",
    profesor: "Daniel Pereda",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre pimar",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  }, //sem3
  {
    id: "Diseño de Base de Datos I",
    hijo: ["Programación I"],
    cat: "C",
    nombre: "Intoduccion a Base de Datos",
    profesor: "Javier Pereira",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Sistemas Digitales II",
    hijo: ["Sistemas Digitales I"],
    cat: "C",
    nombre: "Sistemas Digitales II",
    profesor: "Andres Merello",
    creditos: "7,5",
    semestre: "III",
    dicta: "Se dicta en semestre par",
    exonerable: "No se exonera", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  //sem4
  {
    id: "Diseño de Base de Datos II",
    hijo: ["Diseño de Base de Datos I"],
    cat: "C",
    nombre: "Introducion a Base de Datos II",
    profesor: "Javier Pereira",
    creditos: "7,5",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 9", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Laboratirio TIC I",
    hijo: ["Programación II", "Programación I"],
    cat: "C",
    nombre: "Laboratirio TIC I",
    profesor: "Daniel Pereda",
    creditos: "6",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera totalmente con nota 6", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  }, //sem5

  {
    id: "Sistemas Operativos",
    hijo: ["Sistemas Digitales II", "Sistemas Digitales I"],
    cat: "C",
    nombre: "Sistemas Operativos",
    profesor: "Gerardo Quincke",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Laboratorio TIC II",
    hijo: [],
    cat: "C",
    nombre: "",
    profesor: "Gerardo Quincke",
    creditos: "6",
    semestre: "V",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  //sem6
  {
    id: "Redes de Datos I",
    hijo: [
      "Sistemas Digitales II",
      "Práctica profesional 1",
      "Sistemas Digitales I",
    ],
    cat: "C",
    nombre: "Redes de Datos I",
    profesor: "Gustavo Compagnone",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 2,
  },
  {
    id: "Ingeniería de Software I",
    hijo: ["Laboratirio TIC I", "Programación II", "Programación I"],
    cat: "C",
    nombre: "Ingeniería de Sofware I",
    profesor: "Juan Pablo Núñez",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Laboratorio TIC III",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC III",
    profesor: "Analía Conde",
    creditos: "6",
    semestre: "VI",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
  //sem7
  {
    id: "Sistemas Distribuidos",
    hijo: [
      "Redes de Datos I",
      "Sistemas Digitales II",
      "Práctica profesional 1",
      "Sistemas Digitales I",
    ],
    cat: "C",
    nombre: "Sistemas Distribuidos",
    profesor: "Daniel Canoniero",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "No es exonerable",
    carreras: ["tel", "inf"],
    directos: 1,
  },

  {
    id: "Laboratorio TIC IV",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC IV",
    profesor: "Analía Conde",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "Se exonera con nota 8", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  }, //SEM8
  {
    id: "Laboratorio TIC V",
    hijo: [],
    cat: "C",
    nombre: "Laboratorio TIC V",
    profesor: "Diego Durán",
    creditos: "6",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
    carreras: ["tel", "inf"],
    directos: 0,
  },
];
let cetLicInf = [
  {
    id: "CET/IDIOMAS/MLE 1",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 2 ",
    nombre: "CET/IDIOMAS/MLE ",
    hijo: [""],
    creditos: "4.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 3 ",
    hijo: [""],
    creditos: "4.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
  {
    id: "CET/IDIOMAS/MLE 4",
    hijo: [""],
    creditos: "22.5",
    nombre: "CET/IDIOMAS/MLE ",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "",
  },
];

htmlid = document.getElementsByTagName("html")[0].id;
var materias;
var cets;
if (htmlid == "Informatica") {
  materias = materiasGenerales;
  for (let index = 0; index < matericasComunes.length; index++) {
    if (matericasComunes[index].carreras.includes("inf")) {
      materias.push(matericasComunes[index]);
    }
  }
  materias = materias.concat(materiasEspinf);
  cets = cetInf;
} else if (htmlid == "Industrial") {
  materias = materiasGenerales;
  for (let index = 0; index < matericasComunes.length; index++) {
    if (matericasComunes[index].carreras.includes("ind")) {
      materias.push(matericasComunes[index]);
    }
  }
  materias = materias.concat(materiasEspInd);
  cets = cetInd;
} else if (htmlid == "Civil") {
  materias = materiasGenerales;
  for (let index = 0; index < matericasComunes.length; index++) {
    if (matericasComunes[index].carreras.includes("civ")) {
      materias.push(matericasComunes[index]);
    }
  }
  materias = materias.concat(materiasEspCiv);
  cets = cetCiv;
} else if (htmlid == "Telematica") {
  materias = materiasGenerales;
  for (let index = 0; index < matericasComunes.length; index++) {
    if (matericasComunes[index].carreras.includes("tel")) {
      materias.push(matericasComunes[index]);
    }
  }
  materias = materias.concat(materiasEspecificasTel);
  cets = cetTel;
} else if (htmlid == "cienciaDatos") {
  materias = materiasCienciaDatos;
} else if (htmlid == "licInformatica") {
  materias = materiasLicInf;
  cets = cetLicInf;
}

const mouseTarget = document.getElementsByClassName("btn");
makeGird();
addCredit();

function addCredit() {
  for (i = 0; i < materias.length; i++) {
    document.getElementById(materias[i].id).innerHTML +=
      "<br> (" + materias[i].creditos + ") ";
  }
  for (i = 0; i < cets.length; i++) {
    document.getElementById(cets[i].id).innerHTML +=
      "<br> (" + cets[i].creditos + ") ";
  }
}

function makeGird() {
  for (i = 0; i < materias.length; i++) {
    let mycol = document.createElement("button");
    mycol.className = "btn btn-light";
    mycol.innerHTML = materias[i].id;
    mycol.id = materias[i].id;
    if (materias[i].semestre == "I") {
      document.getElementById("sem1").appendChild(mycol);
    }
    if (materias[i].semestre == "II") {
      document.getElementById("sem2").appendChild(mycol);
    }
    if (materias[i].semestre == "III") {
      document.getElementById("sem3").appendChild(mycol);
    }
    if (materias[i].semestre == "IV") {
      document.getElementById("sem4").appendChild(mycol);
    }
    if (materias[i].semestre == "V") {
      document.getElementById("sem5").appendChild(mycol);
    }
    if (materias[i].semestre == "VI") {
      document.getElementById("sem6").appendChild(mycol);
    }
    if (materias[i].semestre == "VII") {
      document.getElementById("sem7").appendChild(mycol);
    }
    if (materias[i].semestre == "VIII") {
      document.getElementById("sem8").appendChild(mycol);
    }
    if (materias[i].semestre == "IX") {
      document.getElementById("sem9").appendChild(mycol);
    }
    if (materias[i].semestre == "X") {
      document.getElementById("sem10").appendChild(mycol);
    }
  }

  for (let i = 0; i < cets.length; i++) {
    let mycol = document.createElement("button");

    mycol.className = "btn btn-light";
    mycol.innerHTML = cets[i].nombre;
    mycol.id = cets[i].id;

    if (cets[i].semestre == "I") {
      document.getElementById("sem1").appendChild(mycol);
    }
    if (cets[i].semestre == "II") {
      document.getElementById("sem2").appendChild(mycol);
    }
    if (cets[i].semestre == "III") {
      document.getElementById("sem3").appendChild(mycol);
    }
    if (cets[i].semestre == "IV") {
      document.getElementById("sem4").appendChild(mycol);
    }
    if (cets[i].semestre == "V") {
      document.getElementById("sem5").appendChild(mycol);
    }
    if (cets[i].semestre == "VI") {
      document.getElementById("sem6").appendChild(mycol);
    }
    if (cets[i].semestre == "VII") {
      document.getElementById("sem7").appendChild(mycol);
    }
    if (cets[i].semestre == "VIII") {
      document.getElementById("sem8").appendChild(mycol);
    }
    if (cets[i].semestre == "IX") {
      document.getElementById("sem9").appendChild(mycol);
    }
    if (cets[i].semestre == "X") {
      document.getElementById("sem10").appendChild(mycol);
    }
  }
}

document.getElementById("hamburger").addEventListener("click", hideButtons);
function hideButtons() {
  var button = document.getElementById("inv");

  if (button.style.visibility === "hidden") {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
}
var limpio = true;
var staticbool = true;
var isfiltred = false;

function filtro(id) {
  var a;
  if (id == "filtroE" || id == "filtroEs") {
    isfiltred = true;
    a = "E";
  } else if (id == "filtroG" || id == "filtroGs") {
    a = "G";

    isfiltred = true;
  } else if (id == "filtroC" || id == "filtroCs") {
    a = "C";
    isfiltred = true;
  }
  for (i = 0; i < materias.length; i++) {
    if (true) {
      if (materias[i].cat == "E" && materias[i].cat == a) {
        document.getElementById(materias[i].id).style.backgroundColor =
          "rgba(033,231,0,0.5)";
        document.getElementById(materias[i].id).style.boxShadow =
          "0px 0px 0px 0.2rem rgba(033,231,0,0.5)";
        limpio = false;
      } else if (materias[i].cat == "G" && materias[i].cat == a) {
        document.getElementById(materias[i].id).style.backgroundColor =
          "rgba(23,162,184,0.5)";
        document.getElementById(materias[i].id).style.boxShadow =
          "0px 0px 0px 0.2rem rgba(58,176,195,0.5)";
        limpio = false;
      } else if (materias[i].cat == "C" && materias[i].cat == a) {
        document.getElementById(materias[i].id).style.backgroundColor =
          "rgba(255,190,7,0.5)";
        document.getElementById(materias[i].id).style.boxShadow =
          "0px 0px 0px 0.2rem rgba(255,231,130,0.5)";
        limpio = false;
      } else if (!materias[i].cat !== a) {
        document.getElementById(materias[i].id).style.backgroundColor =
          "rgb(204, 204, 204)";
        document.getElementById(materias[i].id).style.boxShadow =
          "0px 0px 0px 0.0rem rgba(216,217,219,0.0)";
        limpio = true;
      }
    }
  }

  if (id == "todo") {
    isfiltred = false;
    staticbool = !staticbool;
  }
}

//----

function pintar(idpadre) {
  var contador = 0;

  if (!isfiltred) {
    for (i = 0; i < materias.length; i++) {
      contador = 0;
      if (materias[i].id === idpadre) {
        if (materias[i].hijo != null) {
          document.getElementById(materias[i].id).style.backgroundColor =
            "rgb(224, 224, 224)";
          for (j = 0; j < materias[i].hijo.length; j++) {
            if (contador < materias[i].directos) {
              document.getElementById(
                materias[i].hijo[j]
              ).style.backgroundColor = "rgba(255,99,71,0.5)";
              document.getElementById(materias[i].hijo[j]).style.boxShadow =
                "0px 0px 0px 0.2rem rgba(220,20,60,0.5)";
            } else {
              document.getElementById(
                materias[i].hijo[j]
              ).style.backgroundColor = "rgb(255, 230, 230)";
            }
            contador++;
          }
        }
      }
    }
  }
}

function despintar(idpadre) {
  if (!isfiltred) {
    for (i = 0; i < materias.length; i++) {
      document.getElementById(materias[i].id).style.backgroundColor =
        "rgb(204, 204, 204)";
      document.getElementById(materias[i].id).style.boxShadow =
        "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
    }
  }
}

function setValue(value) {
  document.getElementById("value").value = value;
}

function informar(idpadre) {
  if (idpadre != "cets") {
    for (i = 0; i < materias.length; i++) {
      if (materias[i].id === idpadre) {
        var btnAbrirPopup = document.getElementById("idpadre"),
          overlay = document.getElementById("overlay"),
          popup = document.getElementById("popup"),
          popup2 = document.getElementById("popup2");
        btnCerrarPopup = document.getElementById("btn-cerrar-popup");
        btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2");
        overlay.classList.add("active");
        popup.classList.add("active");
        stringPrevias = " ";
        var hij = 0;
        for (j = 0; j < materias.length; j++) {
          for (k = 0; k < materias[i].hijo.length; k++) {
            if (materias[j].id === materias[i].hijo[k]) {
              if (hij === 0) {
                stringPrevias = stringPrevias + " " + materias[j].id;
              } else {
                stringPrevias = stringPrevias + " , " + materias[j].id;
              }
              hij++;
            }
          }
        }
        if (stringPrevias === " ") {
          stringPrevias = " No tiene previas";
        }

        popup.innerHTML =
          '<button href="#" id="btn-cerrar-popup" class="btn-cerrar-popup" onclick="cerrar()"><i class="fa fa-times"></i></button>\n' +
          "          <h3 style='Color: rgb(37,50,104)'>" +
          materias[i].nombre +
          "</h3>\n" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Profesor: </span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          materias[i].profesor +
          "</span>\n" +
          "<div></div>" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Cantidad de Creditos: </span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          materias[i].creditos +
          "</span>\n" +
          "<div></div>" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Semestre: </span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          materias[i].semestre +
          "</span>\n" +
          "<div></div>" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Previas:</span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          stringPrevias +
          "</span>\n" +
          "<div></div>" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Exonerable: </span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          materias[i].exonerable +
          "</span>\n" +
          "<div></div>" +
          "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Descripcion: </span>" +
          "<span style='Color: rgb(37,50,134)'>" +
          materias[i].descripcion +
          "</span>\n";
      }
    }
  }
}
function cerrar() {
  overlay.classList.remove("active");
  popup.classList.remove("active");
}

function cets() {
  (overlay2 = document.getElementById("overlay2")),
    (popup2 = document.getElementById("popup2")),
    (btnCerrarPopup = document.getElementById("btn-cerrar-popup"));
  overlay2.classList.add("active");
  popup2.classList.add("active");
  popup2.innerHTML =
    '<button href="#" id="btn-cerrar-popup2" class="btn-cerrar-popup" onclick="cerrar2()"><i class="fa fa-times"></i></button>\n' +
    "          <h3 style='Color: rgb(37,50,104)'>" +
    "CETS/IDIOMAS/LMS" +
    "</h3>\n";
}
function cerrar2() {
  overlay.classList.remove("active");
  popup.classList.remove("active");
  overlay2.classList.remove("active");
  popup2.classList.remove("active");
}
idPadre = null;
function subpintar(idpadre) {
  document.getElementById(idpadre).style.backgroundColor = "#e2e6a";
}

for (let index = 0; index < mouseTarget.length; index++) {
  mouseTarget[index].addEventListener("mouseenter", (event) => {
    subpintar(mouseTarget[index].id);
    pintar(mouseTarget[index].id);
  });
  mouseTarget[index].addEventListener("mouseleave", (event) => {
    despintar(mouseTarget[index].id);
  });

  mouseTarget[index].addEventListener("click", (event) => {
    informar(mouseTarget[index].id);
  });
}

document.getElementById("filtroE").addEventListener("click", (e) => {
  filtro("filtroE");
});

document.getElementById("filtroG").addEventListener("click", (e) => {
  filtro("filtroG");
});

document.getElementById("filtroC").addEventListener("click", (e) => {
  filtro("filtroC");
});

document.getElementById("filtroEs").addEventListener("click", (e) => {
  filtro("filtroEs");
});

document.getElementById("filtroGs").addEventListener("click", (e) => {
  filtro("filtroGs");
});

document.getElementById("filtroCs").addEventListener("click", (e) => {
  filtro("filtroCs");
});

document.getElementById("todos").addEventListener("click", (e) => {
  filtro("todo");
});
