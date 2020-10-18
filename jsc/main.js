//E = ESPECIFICA; C = COMPARTIDA; G = GENERAL
let materiasGenerales = [
  //sem1
  {
    id: "Análisis Matemático I",
    hijo: [],
    cat: "G",
    nombre: "Analisis I",
    profesor: "José Díaz Milesi,Coates, Gabriel",
    creditos: "9",
    semestre: "I",
    exonerable: "Se exonera parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion:
      "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero. Las herramientas matemáticas y sus razonamientos lógicos son la base para cuantificar los fenómenos físicos y la resolución de problemas técnicos. Número complejo. Funciones complejas y “movimientos” en el plano. Integración  de funciones de  una variable. Series. Ecuaciones  diferenciales  ordinarias.",
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
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. La geometría analítica marca un hito en la historia de la matemática, porque constituye una síntesis de dos formas de pensamiento, el geométrico y el algebraico, cada uno con características propias. La  geometría analítica, junto con la mecánica clásica, fueron las principales motivadoras de los desarrollos en álgebra lineal, rama de la matemática que concierne al estudio de las estructuras lineales (o más formalmente de los  espacios vectoriales). Ejemplos de tales estructuras lineales son los vectores ordinarios, las matrices, las soluciones de sistemas de ecuaciones homogéneos. Geometría en el espacio ordinario. Producto escalar y vectorial. Espacios vectoriales. Matrices. Sistemas lineales de ecuaciones. Determinantes.",
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
    descripcion: "Este  curso tiene como objetivo desarrollar en los estudiantes las habilidades que permitan la introducción a la comprensión de los principales fenómenos físicos, desarrollar la mejor base teórica posible para la descripción de dichos fenómenos, así como promover la utilización de la misma en la resolución de problemas tradicionales de la disciplina e introducir al estudiante al “lenguaje” que se utilizará en el resto de las materias vinculadas a lo largo de su formación en los distintos niveles de la Facultad. Mediciones: Patrones de longitud, masa, tiempo; Análisis dimensional; Conversión de unidades; Sistemas de coordenadas; Campos eléctricos; Ley de gauss; Potencial eléctrico; Capacitancia y los materiales dieléctricos; Campos magnéticos; Fuentes de campo magnético; Leyes de Kirchoff y Faraday; Ecuaciones de Maxwell; Inductancia; Circuitos de corriente alterna; Circuitos RLC Ondas electro magnéticas.",
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
    descripcion: "En la actualidad la informática se encuentra presente en todas las ramas de la ingeniería. El presente curso propone integrar aspectos básicos de programación, electrónica y mecánica utilizando un microprocesador para controlar un robot basado en una plataforma móvil de cuatro ruedas. Durante el desarrollo del curso los estudiantes se enfrentarán con distintas situaciones que van desde el ensamblado completo del robot hasta la programación del microprocesador de forma tal que pueda monitorear variables del mundo exterior y responder a ellas en forma adecuada. ",
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
    descripcion: "Se pretende fomentar en los alumnos la inquietud de estar permanentemente al día en su formación profesional y vincular la carrera con la resolución practica de problemas. Por otro lado, también se pretende desarrollar la capacidad de los alumnos para elaborar informes técnicos. Esta materia brinda una idea general acerca de la Ingeniería justo en el momento que el estudiante ingresa a la Facultad para brindar una orientación ajustada de la carrera. Se tiene como objetivo ayudar al estudiante a seleccionar que carrera cursar dentro de las posibilidades que brinda la Facultad. Por otro lado, esta materia a partir de la discusión y el análisis de casos de estudiantes reales busca motivar a los alumnos durante la carrera y orientarlos durante su primer semestre en la Universidad. Se busca que los alumnos adquieran una actitud pro-activa en su formación.",
    directos: 0,
  },
  //sem2
  {
    id: "Análisis Matemático II",
    hijo: ["Análisis Matemático I"],
    cat: "G",
    nombre: "Analisis II",
    profesor: "José Díaz Milesi,Coates, Gabriel",
    creditos: "9",
    semestre: "II",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion:
      "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero. Las herramientas matemáticas y sus razonamientos lógicos son la base para cuantificar los fenómenos físicos y la resolución de problemas técnicos. Funciones de varias variables. Integrales múltiples. Curvas. ",
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
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. Continuación natural de Geometría y Algebra Lineal I, donde en la estructura lineal se introduce las nociones de ángulo “ortogonalidad’’ y de distancia “norma’’ a través de la operación entre vectores “producto interno o escalar’’. Transformaciones lineales. Valores y vectores propios. Producto interno y ortogonalidad. Matrices simétricas y ortogonales. Formas cuadráticas y superficies cuádricas.",
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
    descripcion:
      "Técnicas de cálculo asistido por computadora (MatLab). Métodos a emplear como errores de redondeo y truncamiento, sistemas de ecuaciones lineales y no lineales, interpolación e integración, aproximación por mínimos cuadrados y métodos para ecuaciones diferenciales ordinarias. ",
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
    descripcion: "Esta materia forma parte de las ciencias humanas fundamentales en la formación del ingeniero. Las herramientas para el manejo del ser humano son básicas para el trabajo en equipo y la dirección del Ingeniero en la empresa. La vida sensitiva. Lo intelectual y lo sentimental. La persona. La verdad. La libertad. Sexualidad, matrimonio y familia. Relaciones interpersonales. La felicidad. El sentido de la vida. El dolor. El destino. Lo sagrado.",
    directos: 0,
  }, //sem4
  {
    id: "Probabilidad y Estadistica",
    hijo: ["Análisis Matemático II", "Análisis Matemático I"],
    cat: "G",
    nombre: "Probabilidad y Estadistica",
    profesor: "José Díaz Milesi",
    creditos: "9",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. La probabilidad es una rama de la matemática que proporciona modelos para experimentos aleatorios, en el sentido que conocemos los posibles resultados, pero no podemos predecir  con exactitud cual va a ocurrir. Mientras que la estadística es una rama de la matemática que se refiere al  estudio e interpretación de los datos obtenidos en un experimento. Una parte importante de la estadística, es la llamada inferencia estadística, que comprende los métodos y procedimientos para deducir propiedades (hacer inferencias) de una población, a partir de una pequeña parte de la misma (muestra). La bondad de estas deducciones se mide en términos probabilísticos, es decir, toda inferencia se acompaña de su probabilidad de acierto. Espacios de probabilidad. Variables aleatorias. Distribuciones conjuntas. Valor esperado de una variable aleatoria. Leyes límites. Estimación. Pruebas de hipótesis paramétricas y no-paramétricas. Métodos lineales.",
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
    descripcion: "Los conceptos que están contenidos en los factores económicos son una ayuda para el análisis de las situaciones que se presentan en las variables de costos de la producción de bienes y servicios y son una ayuda para estimar las evoluciones del mercado y de sus precios. Pensar como economista. La demanda y el consumidor. La oferta y la empresa. Equilibrio y bienestar. Los aranceles y comercio exterior. Oferta y demanda globales. Dinero e inflación. Tipo de cambio nominal y real. Balanza de pagos. Balanza comercial. Tipo de cambio fijo y flotante. Uruguay y la región.",
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
    descripcion: "Se requiere que el futuro profesional tenga habilidades y en el desarrollo de los cursos de la carrera en cuanto a un adecuada y comprensiva presentación oral y escrita. También para poder mejorar la comunicación en la organización  y fuera de ella. Lenguaje escrito. Lenguaje Oral.",
    directos: 0,
  }, //sem5

  {
    id: "Investigación Operativa I",
    hijo: [
      "Probabilidad y Estadistica",
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
    descripcion: "Curso de ciencia básica en el cual se estudia el uso de modelos matemáticos, estadísticos y algoritmos con objeto de resolver problemas complejos, determinando la solución óptima y permitiendo, de esta forma, la toma de decisiones. Toma de decisiones. Programación Lineal. Modelos de Redes.",
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
    descripcion: "Las carreras de ingeniería preparan para un ejercicio profesional donde es fundamental el conocimiento y control de los costos y el análisis económico y financiero de la organización. Esta materia brinda los conocimientos básicos Contables y la forma de analizar y llevar costos. La contabilidad y el sistema de información de las organizaciones. Las operaciones más comunes y sus comprobantes. Cuentas colectivas. Ajustes contables. Bienes de Cambio. Deudas, provisiones y previsiones. Estados contables. Los objetivos de los sistemas de costes. Introducción a Sistemas de Control.",
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
    descripcion: "Integrado a los otros cursos de formación humana, el análisis de los conceptos de la dimensión trascendente en el hombre es de gran importancia en la formación del individuo como persona. Este curso promueve la reflexión por parte del estudiante universitario del sentido de trascendencia del Individuo, estimular su pensamiento crítico y reflexivo y su sentido en la vida. ",
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
    descripcion: "Los alumnos de Ingeniería necesitan conocer los temas referidos al aseguramiento de calidad. Evolución histórica de la misma, así como los temas y técnicas de control y gestión de la calidad en las distintas áreas de la empresa.  Controles en las áreas de diseño, producción y compras. Calidad en servicios. Ciclo e identificación de procesos principales. Normalización Técnica. Certificación de productos y de sistemas. Infraestructura en calidad. Introducción a la calidad. Costos de la calidad. Control de procesos. Sistemas de gestión de la calidad. Calidad Total. ",
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
    descripcion: "Esta materia forma parte de las ciencias humanas fundamentales en la formación del ingeniero. Las herramientas para el manejo del ser humano son básicas para el trabajo en equipo y la dirección del ingeniero en la empresa. La contemporaneidad, sus causas y desafíos.",
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
    descripcion: "Esta materia forma parte de los temas de gestión de empresas que son fundamentales en la formación del ingeniero. Las herramientas de análisis económico en los proyectos son básicas para la innovación y puesta en práctica de nuevos proyectos. Conceptos de un proyecto de inversión. Visión integradora de la gestión de proyectos y la planificación. La comercialización. Desarrollo del concepto clientes y su relación con los productos y servicios. Desarrollo de los conceptos precio, plaza y promoción. El tamaño de producción del proyecto. El diseño técnico del proyecto. Las Inversiones del proyecto. Definiciones de estado económico y estado financiero del proyecto. El financiamiento del proyecto. La organización de la empresa. La evaluación del proyecto. Diferentes puntos de vista de la evaluación.",
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
    descripcion: "Esta materia reúne diversos temas que aportan al ingeniero los conocimientos que se requieren para poder alcanzar los objetivos propios de la empresa, sea en el ámbito de la producción, de la comercialización y en todo emprendimiento empresarial. Los temas de comportamiento humano, comercialización y relaciones interpersonales son básicos para toda organización.  Estrategia de Recursos Humanos. Dirección por objetivos. Retribución. Integración de políticas de recursos humanos. Fundamentos del Marketing. Planeación Estratégica orientada al mercado. Análisis del mercado y Conducta del Consumidor. Segmentación de Mercado. Diferenciación y Posicionamiento. Marketing Mix.- Decisiones sobre PRECIOS. Marketing Mix.- Decisiones sobre COMUNICACIONES. Marketing Mix.- Decisiones sobre DISTRIBUCION FISICA Y CANALES. El Plan de Marketing. Incentivos. La demanda y el consumidor. ",
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
    descripcion: "Esta materia situada en el último año de la Carrera permite adquirir los conceptos que van unidos a la gestión de los proyectos, tanto en el aspecto técnico y económico como en cuanto al cumplimiento de los plazos y la interacción eficaz entre los distintos integrantes del equipo que los lleva a cabo. Planificación de la gestión. El Gerente de Proyecto. Elementos de PMI: áreas de conocimiento. Elementos de Control del Proyecto. Gestión de los Recursos Humanos del Proyecto dentro de la Organización. Gestión de Involucrados. Gestión de Riesgos del Proyecto. Monitoreo del Proyecto. Clausura del Proyecto. ",
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
    descripcion: "Es misión de la Universidad de Montevideo formar profesionales competentes en lo técnico, a la vez que actores comprometidos con la realidad y la implicancia social de su labor. Las regulaciones éticas comerciales, la atención a la calidad y el cuidado del medio ambiente, están llamados a jugar un papel cada vez más importante, y son aspectos que no pueden escapar a la formación del ingeniero. Fin de la vida humana. Libertad  y acción humana. Virtudes morales. Criterios para determinar la bondad de las acciones. El marco político de la ética. Corrientes éticas. Actos profesionales. Responsabilidad en el ejercicio profesional. La actuación profesional y su relación con los actos de otros. El ingeniero en proyectos. Responsabilidad en el desarrollo de proyectos. El ingeniero en sus informes. El ingeniero dirigiendo trabajos. Condiciones de trabajo y riesgos de accidente. El ingeniero independiente y trabajando en empresas. El ingeniero como administrador. Cualidades necesarias o convenientes. Análisis de Casos.",
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
      "Probabilidad y Estadistica",
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
    descripcion: "Aplicación de herramientas estadísticas para la toma de decisiones y la solución de problemas complejos de organización y de procesos. Se utilizan modelos matemáticos, estadísticos y algoritmos que permiten abordar algunos problemas típicos de la gestión de operaciones. Pronósticos. Gestión de Inventarios. Teoría de los Fenómenos de Espera. Simulación de Sistemas continuos y discretos.",
    carreras: ["inf", "ind"],
    directos: 1,
  },
  {
    id: "Matlab", //falta
    hijo: [],
    cat: "C",
    nombre: "Méndez Bruzzone, Juan Ignacio",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de la formación básica en razonamiento lógico, tema fundamental en la formación del ingeniero. Comenzando con los conceptos básicos de la programación se forman reglas para luego implementar algoritmos de algebra o simular procesos en la computadora. Para ello utilizamos MATLAB, que además de permitirnos realizar y ejecutar programas, contamos con sus potencialidades gráficas y de visualización de resultados.",
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
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero Industrial y Civil como preparación, entre otras, de la formación estructural de los materiales, así como de los fundamentos químicos que forman parte de temas de energía, combustión, interacción con el medio ambiente y dinámica de procesos industriales. Transformaciones químicas generadoras de energía. Química de los materiales de ingeniería. Líquidos usados cotidianamente: agua, los solventes orgánicos, aceites y lubricantes.",
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
    descripcion: "Curso inicial de informática de la carrera de ingeniería telemática para familiarizar al estudiante en el uso de las herramientas. Introducción. Entrada-Salida. Tipos de datos. Estructuras de control. Excepciones. Objetos y Clases. Métodos. Polimorfismo. Herencia, interfases.",
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
    descripcion: "En esta materia técnica de la carrera de ingeniería telemática se presentan en detalle los principales dispositivos microelectrónicos, como ser microcontroladores y microprocesadores. Asimismo, se describen los conceptos básicos de los lenguajes de programación de bajo nivel. Repaso de conceptos de Lógica Digital. Arquitectura típica de un sistema basado en microprocesador. Formato de instrucciones – Assembler. Arquitectura PIC. Buses. Líneas de Control. Modos de Direccionamiento. Set de Instrucciones. Software. Introducción - Lenguajes RISC y CISC. Tipos de Instrucciones. Ejemplos de programas. Trabajo con Herramientas de Desarrollo: ensambladores, simuladores, debuggers y kits de Desarrollo. Hardware.  Descripción de Señales. Ciclos de Máquina. Memorias. Puertos de entrada/salida. Interrupciones. Periféricos. Ejemplos de Diseño. ",
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
    descripcion:
      "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero. Las herramientas matemáticas y sus razonamientos lógicos son la base para cuantificar los fenómenos físicos y la resolución de problemas técnicos. Análisis vectorial. Sucesiones y series de funciones. Ecuaciones diferenciales ordinarias. Ecuaciones en derivadas parciales y Series de Fourier. ",
    carreras: ["tel", "ind", "civ"],
    directos: 2,
  },
  {
    id: "Mecánica I", //error en doc
    hijo: ["Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "Mecánica I",
    profesor: "Fossati Pintos, Juan Pablo",
    creditos: "7,5",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. En esta ciencia básica, que es una rama de la física, se estudia y  describe el movimiento de los cuerpos, y su evolución en el tiempo, bajo la acción de fuerzas. Axiomas de la Estática. Momento de una fuerza. Estática de los sistemas. Estructuras y reacciones de vínculo externo. Rozamiento. Estática de los hilos. Dinámica de la partícula. Energía de la partícula. Movimiento Central. Movimiento Impulsivo. Sistemas con masa variable. Movimiento Relativo. Oscilaciones. Equilibrio y estabilidad en los sistemas conservativos. Estudio General de la Estabilidad.",
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
    descripcion: "El principal componente de un sistema informático sigue siendo su programación. En esta materia el estudiante consolida los conceptos adquiridos en la materia Programación I y profundiza en las tareas de programación, utilizando lenguajes y técnicas adecuadas para mejorar la escritura de código. Introducción a las estructuras básicas. Stacks. Introducción a la recursividad. Árboles. Algoritmos de búsqueda y ordenamiento. Introducción a los grafos, el algoritmo de Dijkstra.  Hash.",
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
    descripcion: "Un sistema informático debe disponer de un adecuado almacenamiento de datos con un correcto diseño que permita tiempos de respuesta aceptables y contemple además, aspectos de seguridad y mantenimiento.  Esta asignatura instruye en las principales técnicas acerca del diseño de Bases de Datos en un entorno informático. Definición básica de un sistema de base de datos. Diseño de bases de datos. El modelo relacional. Gestión de sistemas de base de datos.",
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
    descripcion: "Un sistema informático debe disponer de un adecuado almacenamiento de datos con un correcto diseño que permita tiempos de respuesta aceptables y contemple además, aspectos de seguridad y mantenimiento.   Los modernos sistemas informáticos y de base de datos deben responder a una amplia gama de necesidades.Esta asignatura instruye en el Diseño de Bases de Datos Orientadas a Objetos en un entorno informático. De igual modo introduce al estudiante en los conceptos de bases de datos distribuidas y bases de datos en la web",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Mecánica II",
    hijo: ["Mecánica I", "Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "Mecánica II",
    profesor: "Fossati Pintos, Juan Pablo",
    creditos: "7,5",
    semestre: "IV",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. Continuación de Mecánica I, en el estudio y la descripción  del movimiento de los cuerpos, y su evolución en el tiempo, bajo la acción de fuerzas. Cinemática de los sistemas rígidos. Distribución de velocidades y aceleraciones. Rodadura sin deslizamiento. Cinemática plana. Base y rodante del movimiento rígido plano. Cinemática en el espacio.  Ángulos de Euler. Cinética de los sistemas materiales. Baricentros. Tensor de inercia. Momento angular de los sistemas materiales y de los sistemas rígidos. Energía cinética y dinámica de los sistemas materiales. Ecuaciones cardinales para rígidos. Articulaciones cilíndrica y esférica. Fuerzas de ligadura. Rodadura sin deslizamiento (condición dinámica). Fuerza de Rozamiento. Fuerzas conservativas y disipativas. Teorema de conservación de  la energía mecánica. Formalismo lagrangeano. Coordenadas  y fuerzas generalizadas. Potencia. Sistemas holónomos y anholónomos. Principio de los trabajos virtuales. Principio de D´Alembert. Dinámica y ecuaciones de Lagrange. Preintegrales independientes de un sistema lagrangeano. Sólido con un punto fijo. Ecuaciones de Euler. Trompo de Lagrange. Cono polódico y herpolódico. Movimiento a la Poinsot. Equilibrio y estabilidad de los equilibrios en sistemas esclerónomos  y conservativos. Movimientos merostáticos y su estabilidad. Sistemas reónomos. Equilibrio Relativo. Preintegral de Painlevé. Potencial Eficaz. Formalismo Hamiltoniano. Ecuaciones de Hamilton. Propiedades de la función de Hamilton.",
    carreras: ["civ", "ind"],
    directos: 1,
  },
  {
    id: "Resistencia de materiales I",
    hijo: ["Mecánica I", "Física I", "Análisis Matemático I"],
    cat: "C",
    nombre: "",
    profesor: "Santilli, Adrián",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas de las carreras de ingeniería civil e industrial orientadas a la modelización de diferentes estructuras, y su comportamiento y dimensionado bajo cargas y/o otras acciones. Características geométricas de áreas planas. Cargas, solicitaciones y vínculos. Barras a fibra media y aplicaciones. Flexión pura. Flexo – cortante. Vigas cargadas con cargas normales a su eje. Otras estructuras isostáticas.",
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
    descripcion: "Esta materia lleva a la práctica los conocimientos informáticos teóricos adquiridos por los estudiantes hasta el momento de su dictado.  Marca un hito al consolidar en un proyecto las tareas principales en el desarrollo de un sistema informático, tales como Diseño, Análisis y Programación, así como el uso de Bases de Datos.  Ayuda a la formación profesional del estudiante en lo que refiere a la expresión oral y escrita, con la entrega y defensa del proyecto que se elabora en equipo durante el curso.",
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
    descripcion: "Uno de los componentes clave en un sistema informático es su Sistema Operativo. Esta asignatura hace conocer al estudiante de ingeniería telemática la estructura de una computadora y aborda los conceptos principales para que un sistema pueda operar eficazmente. Introducción a los sistemas operativos y su evolución histórica. Estructura de computadoras y principales interacciones entre el sistema operativo y el hardware. Interfaces de administración. Interfaces de programación. Manejo de procesos y recursos. Programación y scheduling de procesos. Programación concurrente. Sincronización entre tareas y manejo de bloqueos (“deadlock”). Sistemas operativos multiprocesador. Particionamiento. Subsistemas de entrada/salida y manejo dispositivos. Administración de memoria. Memoria virtual. Almacenamiento secundario. Sistema de archivos. Seguridad. Administración de usuarios.",
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
    profesor: "Santilli, Adrián",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas de las carreras de ingeniería civil e industrial, orientadas al conocimiento de las estructuras de barras, sus fundamentos teóricos, su metodología de cálculo, con elementos clásicos y con software, sus aplicaciones  en  las tipologías estructurales básicas. Elástica de vigas rectas. Flexión compuesta de vigas rectas. Vigas continuas hiperestáticas. Introducción a la teoría de la elasticidad. Estados de tensión. Estados de deformación de un medio continuo con desplazamientos pequeños. Relaciones entre estados de tensión y de deformación. Estudio elástico de la torsión.",
    carreras: ["civ", "ind"],
    directos: 1,
  },
  {
    id: "Ciencia e Ingeniería de materiales",
    hijo: ["Fundamentos Químicos de la Ingeniería"],
    cat: "C",
    nombre: "",
    profesor: "Pardo, Gabriel",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. Introduce en el conocimiento científico de cómo están constituidos los materiales aplicados en Ingeniería. A partir de esto se analiza la ingeniería de los mismos. Hay materiales que se utilizan directamente de la naturaleza y otros que son altamente procesados en busca de obtener propiedades adecuadas al uso tecnológico. Comportamiento mecánico de los materiales. Ensayos y propiedades mecánicas. Solidificación. Aleaciones. Transformaciones en estado sólido. Sistema Hierro-Carbono. Materiales Cerámicos. Materiales Polímeros. Materiales compuestos. ",
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
    descripcion: "La asignatura Laboratorio II se cursa en paralelo con la materia Sistemas Operativos. En esta asignatura los alumnos harán prácticas de los conceptos adquiridos en Sistemas Operativos, a través de programación usando los lenguajes “bash” (shell-scripts) y C, sobre sistema operativo Linux.",
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
    descripcion: "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero industrial y telemático. Los conceptos físicos de cargas eléctricas, campos electromagnéticos y corrientes eléctricas, su razonamiento lógico, así como la aplicación en el análisis de los componentes básicos de los circuitos eléctricos forman parte de la base física del conocimiento aplicable en la carrera. Cargas eléctricas. Campo eléctrico. Concepto de circulación de un vector. Condensadores. Intensidad. Resistencias en serie y en paralelo. Magnetismo. Fuerza sobre un conductor que transporta una corriente. Campo magnético creado por un circuito que transporta corriente. Fuerza electromotriz producida por movimiento. Corrientes superficiales equivalentes. Corrientes alternas. Ondas electromagnéticas.",
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
    descripcion: "A partir de los conocimientos impartidos en la materia Electromagnetismo, se abordan los temas relativos a circuitos, máquinas e instalaciones de redes eléctricas, con especial énfasis en aquellos elementos de mayor aplicación industrial. Circuitos eléctricos. Fundamentos y elementos de los circuitos. Elementos ideales, parámetros concentrados,  resistencias, inductores, capacitores, fuentes de corriente y tensión. Transitorios en circuitos simples. Circuitos en régimen de corriente alterna. Fasores, impedancias. Resonancia. Potencia y energía. Representación compleja. Compensación de energía reactiva. Topología de circuitos, métodos de resolución: mallas y nudos. Teoremas de circuitos, superposición, circuitos equivalentes, representaciones de Thevenin y Norton. Sistemas trifásicos equilibrados: Potencia y energía. Sistemas trifásicos desequilibrados, método de componentes simétricas. Factores de desbalance. Impedancia de líneas, circuitos de secuencia. Resolución de fallas en redes. Circuitos en régimen no sinusoidal. Componentes armónicas. Distorsión armónica total. Potencia activa y aparente. Medidas de corriente, tensión, frecuencia, potencia  energía. ",
    carreras: ["ind"],
    directos: 1,
  },
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
    descripcion: "En los últimos años la informática ha evolucionado desde una computadora aislada a una extensa red de computadores interconectados, como es la World Wide Web. Para obtener una correcta comunicación entre máquinas, es necesario conseguir un fuerte conocimiento de los componentes físicos y las distintas capas de software que componen una red informática. Esta asignatura muestra al estudiante los distintos componentes, físicos y lógicos, de una red de datos. Introducción a las redes y modelo de capas. Concepto de Red. Tipos de Redes. Modelos OSI y TCP/IP. Ejemplos de implementación de redes. Capa Física. La interfaz de comunicaciones. Estándares. Medios de transmisión. Capa de Enlace. Servicios. Control de flujo. Framing. Control de errores. Protocolos HDLC, SLIP, PPP. Subcapa de Acceso al Medio. Protocolos de acceso múltiple. Los estándares IEEE 802.x. Bridges. LANs de alta velocidad. Redes satelitales. Capa de Red. Servicios. Algoritmos de enrutamiento. Control de congestión. Interconectividad. Routers. Proceso de túnel. Firewalls. El protocolo IP. Capa de transporte. Servicios. Control de flujo. Protocolos de transporte TCP y UDP. Capa de aplicación. Encriptación. DNS. SNMP. Correo electrónico. www. Protocolo HTTP. URL. HTML. Java.",
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
    descripcion: "El proceso de generación de un sistema informático requiere una adecuada planificación y el seguimiento de normas y estándares. Se busca crear un software que cumpla con lo solicitado por el cliente, sea fácil de operar por los usuarios y que su mantenimiento no sea un problema. Esta asignatura prepara al estudiante en los temas referidos a las actividades protectoras de software, aplicando las metodologías adecuadas a cada una de las fases de su ciclo de desarrollo. El proceso de software. La gestión de proyectos de software. Requerimientos de software. Modelado de sistemas. UML. Prototipación. Diseño arquitectónico. Arquitecturas de sistemas distribuidos. Cliente servidor, objetos distribuidos, brokers y middlewares. Diseño orientado a objetos. Reutilización. Diseño de la interfase de usuario. Interacción, presentación de información, asistencia al usuario. Verificación y Validación. Testeo del software. Gerenciamiento de personas. Estimaciones. Gerenciamiento de calidad. La mejora del proceso. CMM. Sistemas legados. Cambios del software. Control de configuración.",
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
    descripcion: "La Telemática e Informática es una rama de la Ingeniería que sufre permanentes transformaciones tecnológicas al cabo del tiempo. Los Laboratorios TICs permiten acompasar esos cambios aportando la práctica necesaria en temas que se tratan en las asignaturas de Redes de Datos I y II, Ondas Electromagnéticas, Sistemas de Transmisión, Telefonía Digital, Sistemas Distribuidos, Ingeniería de Software, Automatización y Control, Televisión y Multimedia, Comunicaciones Inalámbricas y Seguridad Informática",
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
    exonerable: "",
    descripcion: "La comunicación de los computadores y la creación de redes informáticas, hacen que los aspectos de seguridad, comunicación y distribución de aplicaciones sean fundamentales. Esta asignatura muestra al estudiante de ingeniería telemática las distintas maneras de comunicación entre redes y describe mecanismos para distribuir y asegurar las aplicaciones y los datos que viajan entre ellas.  Arquitecturas y modelos de sistemas distribuidos. Arquitecturas de sistemas de objetos distribuidos. Comunicación. Sistemas de almacenamiento distribuidos. Consideraciones temporales, de coordinación y concurrencia en sistemas distribuidos. Seguridad y tolerancia a fallos en sistemas distribuidos. Sistemas multimedia distribuidos. Gestión de sistemas distribuidos en telecomunicaciones.",
    carreras: ["tel", "inf"],
    directos: 1,
  },
  {
    id: "Ingeniería Ambiental ",
    hijo: [],
    cat: "C",
    nombre: "",
    profesor: "Sojachenski, Milenka",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso orientado hacia el conocimiento y evaluación de las variables medioambientales - basado en el respeto de las leyes de la naturaleza, el conocimiento de las interacciones sistémicas y el respeto de la legislación nacional e internacional – con el objetivo de establecer y desarrollar  prácticas eco-eficientes que contribuyan al desarrollo sustentable. Conceptos básicos y estudio de ecosistemas. Impactos naturales sobre el medio ambiente. Efectos humanos sobre el medio ambiente, el recurso suelo, la atmósfera y sobre el recurso agua. Efectos de la actividad humana en recursos naturales no renovables y energéticos. Instrumentos de Gestión Ambiental: Legislación, SGA, EIA, Eco-eficiencia. ",
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
    descripcion: "La Telemática es una rama de la Ingeniería que sufre permanentes transformaciones tecnológicas al cabo del tiempo. Los Laboratorios de Telemática permiten acompasar esos cambios aportando la práctica necesaria en temas que se tratan en las asignaturas de Redes de Datos I y II, Ondas Electromagnéticas, Sistemas de Transmisión, Telefonía Digital, Sistemas Distribuidos, Ingeniería de Software, Automatización y Control, Televisión y Multimedia, Comunicaciones Inalámbricas y Seguridad Informática.",
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
    descripcion: "El objetivo general de este laboratorio es emprender un trabajo práctico de ingeniería.En este laboratorio se realiza un proyecto en el cual se entrega un prototipo de una entidad significativa, que involucra la integración de distintas disciplinas de la Telemática, tales como la electrónica analógica y digital, las telecomunicaciones y la informática.Resultan proyectos en el área de la robótica, domótica, control industrial o monitoreo remoto.",
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
    profesor: "Burgos, Juan Pablo", 
    creditos: "7,5",
    semestre: "VIII",
    dicta: "Se dicta en semestre par",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Electrónica forma parte de las materias avanzadas aplicadas en la formación del Ingeniero. Se basa en el conocimiento y la aplicación a situaciones concretas de dispositivos de estado sólido y componentes discretos. Electrónica analógica.- Semiconductores: Diodos. Transistores. Amplificadores. 	Fuentes de alimentación. Reguladores. Electrónica digital.- Introducción al Algebra de Boole: Sistemas binarios, leyes. Familias lógicas: TTL, CMOS, otras familias. Características y usos. Circuitos Combinacionales: Multiplexadores, Demultiplexadores, Codificadores. Contadores y Registros de Desplazamientos: Asincrónicos y síncronos. Circuitos Secuenciales: Asíncronos y síncronos. Diagramas de estado e implementaciones. Memorias de Semiconductores: Tipos. Memorias RAM, ROM, EPROM, EEPROM. Microprocesadores y Microcontroladores: Estructura interna, arquitectura de un sistema digital basado en microprocesador. Instrucciones de un microprocesador: Aritméticas, lógicas, de salto, de entrada/salida, para control de interrupciones y subrutinas. Unidades de entrada/salida: Paralelo, serie. Control de comunicación. Polling. Comunicación mediante interrupción handshake. Interrupciones: Concepto de interrupción. Interrupciones de Hardware y software. Software: Assembler básico. Periféricos: Display, Teclados, Impresoras, TRCs. Conversión A/D y D/A.",
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
    descripcion: "La comunicación de los computadores y la creación de redes informáticas, hacen que los aspectos de seguridad, comunicación y distribución de aplicaciones sean fundamentales. Esta asignatura muestra al estudiante las distintas maneras de comunicación entre redes y describe mecanismos para distribuir y asegurar las aplicaciones y los datos que viajan entre ellas. De una manera práctica, el alumno conseguirá dominio sobre el sistema operativo Linux, variadas aplicaciones y servicios.",
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
    descripcion: "Esta materia forma parte de las ciencias aplicadas fundamentales en la formación del ingeniero en telemática. Las teorías matemáticas de distribuciones, su razonamiento lógico, así como el análisis y resolución de situaciones problemáticas relacionadas con circuitos eléctricos son la base para el correcto aprovechamiento de materias técnicas posteriores. Distribuciones. Producto tensorial y de convolución. Señales y sistemas. Sistemas lineales e invariantes en el tiempo. Series de Fourier y señales periódicas. Caracterización frecuencial de señales y sistemas. Régimen sinusoidal. Transformada de Fourier. Transformada de Laplace. Realimentación y estabilidad.",
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
    descripcion: "Esta materia forma parte de las ciencias aplicadas fundamentales en la formación del ingeniero en telemática. Las teorías matemáticas de Laplace, los conceptos de realimentación y estabilidad, la aplicación de los Amplificadores Operacionales a circuitos de complejidad básica y media, su razonamiento lógico, así como el análisis y resolución de situaciones problemáticas relacionadas profundizan los conceptos analizados en Sistemas Lineales I, y son la base para el correcto aprovechamiento de materias técnicas posteriores. Circuitos resistivos. Cuadripolos. Sistemas polifásicos. Teoría de circuitos. Teoremas de circuitos. Realimentación y estabilidad. Complementos. Métodos de resolución de circuitos.",
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
    descripcion: "Esta materia forma parte del grupo de asignaturas avanzadas en el campo de las telecomunicaciones. En ella se presenta el concepto fundamental de muestreo, y el posterior análisis y tratamiento de las señales discretizadas. La materia otorga las herramientas básicas para posteriores materias en el transcurso de la carrera. Señales y sistemas discretos. Sistemas lineales e invariantes en el tiempo. Respuesta Frecuencial. Transformada z. Análisis de Fourier de señales analógicas (FT & FS). Transformada de Fourier Discreta en el Tiempo (DTFT). Transformada Discreta de Fourier (DFT). Muestreo. Muestreo en frecuencia. Estructura de sistemas discretos. Cuantificación y efectos del redondeo. Diseño de filtros digitales. Simulación de sistemas analógicos. Transformada rápida de Fourier (FFT). Procesos estocásticos. ",
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
    descripcion: "Este curso de Instalaciones Eléctricas de Media y Baja Tensión introduce al alumno en los fundamentos y las herramientas generales necesarias para el diseño básico, la selección de equipamiento, y la toma de decisiones generales en proyectos y en mantenimiento de instalaciones eléctricas, orientándolo al área industrial. ",
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
    descripcion: "Esta materia forma parte del grupo de asignaturas avanzadas en telecomunicaciones. En ella se presentan las formas de modulación clásicas de señales (fundamentalmente PCM), las principales formas de muestreo y los fundamentos de la transmisión digital. Onda continua: Modulación lineal, modulación exponencial, sistemas de modulación, ruido en modulación. Muestreo y Modulación por Pulsos.  Transmisión Digital en Banda Base.  PCM.  Transmisión digital pasa banda. ",
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
    profesor: "Compagnone Lorenzo, Gustavo Alberto",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "En la gestión actual de las empresas, la Informática y las Telecomunicaciones asumen un papel preponderante. Con la llegada de Internet, la comunicación entre computadoras exige cada vez mejores tiempos de respuesta y mecanismos de seguridad, que permitan, a modo de ejemplo,  realizar video conferencias y comercio electrónico. LANs, Redes de Área Local. WANs. Redes de área extendida. Redes sobre Frame Relay. Redes sobre ATM. Internet. Calidad de Servicio (QoS). Internetworking. Gestión y seguridad en redes. Planificación de Redes.",
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
    profesor: "Beltrame Benedetto, Gerardo Sergio",
    creditos: "6",
    semestre: "VII",
    dicta: "Se dicta en semestre par",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte del grupo de asignaturas de ciencias físicas avanzadas, aplicadas a telecomunicaciones. En ella se presentan las herramientas teóricas necesarias para comprender el funcionamiento de las guías y líneas de transmisión, así como las antenas. Ecuaciones de Maxwell. Ondas electromagnéticas. Ecuación de onda plana. Incidencia de onda plana sobre obstáculos. Reflexión de ondas. Ondas guiadas. Líneas de Transmisión. Guías de Onda. Radiación del dipolo. Antenas. Parámetros de antenas.",
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
    descripcion: "Esta materia forma parte del grupo de asignaturas aplicadas a telecomunicaciones de la carrera de ingeniería telemática. En ella se presentan por un lado los medios clásicos de transporte de señales, y por otro lado un marco teórico que permite planificar redes y comprender la regulación asociada. Medios cableados de transmisión. Óptica y Fibra Óptica. Propagación de ondas electromagnéticas. Radiocomunicaciones por satélite. Sistemas de radiodifusión. Regulación del espectro electromagnético.",
    directos: 2,
  }, //SEM10

  {
    id: "Proyecto Tel",
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
    descripcion: "El proyecto a realizar en el último semestre de la carrera tiene como finalidad aplicar con creatividad los conocimientos adquiridos en las materias técnicas específicas de los semestres anteriores para solucionar un problema de ingeniería telemática. Tendrá una complejidad y alcance equivalente al  que insumirá un trabajo durante un semestre de un profesional del área. El tema objeto del proyecto podrá implicar el diseño y fabricación de un equipo, diseño y ejecución de una instalación, desarrollo de un proyecto de informática, elaboración de estudios técnicos e informes relacionados con las áreas propias de la telemática. También podrá ser el diseño y fabricación de un equipo o desarrollar un trabajo de investigación. La inscripción a este curso requiere que el estudiante haya aprobado 330 créditos, incluyendo dos de las tres prácticas profesionales.",
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
    profesor: "Tosar Piaggio, Héctor José",
    creditos: "6",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso de ciencias básicas que estudia la  energía y sus transformaciones en los sistemas físicos desde un punto de vista macroscópico: procesos que implican cambios en temperatura, transformación de la energía, como el calor, y su capacidad  para producir trabajo. Conceptos preliminares. Sustancias simples. Calor y trabajo. Primer principio de la termodinámica para sistemas cerrados. Primer principio para sistemas abiertos. Segundo principio de la termodinámica para sistemas cerrados. Entropía. Segundo principio para sistemas abiertos. CET para la carrera de ingeniería telemática.",
    directos: 1,
  },

  {
    id: " Procedimientos de construcción I ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Demarco Mastrascusa, Nelson Alejandro",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas de la carrera de ingeniería civil, orientadas al conocimiento de los procedimientos de construcción básicos en las obras civiles más comunes. Complementa los conocimientos teóricos que el estudiante va adquiriendo en la carrera vislumbrando así la parte práctica de la misma.  Generalidades. Hormigón Definiciones. Movimientos de Tierra. Fundaciones Generalidades. El suelo y las cargas. Complementos. Reparaciones.",
    directos: 0,
  },

  {
    id: "Laboratorio I Civil",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Demarco Mastrascusa, Nelson Alejandro",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El trabajo de laboratorio es un ámbito especialmente apto para enseñar y educar tal como se ha planteado en el perfil del egresado de Ingeniería. Llevar lo estudiado a la práctica, interactuar con la realidad física, consolidar los estudios teóricos de las diversas asignaturas, el contacto cercano con el docente, el manejo de instrumental, el diseño de programas de software adaptado a determinada necesidad, el diseño y puesta en práctica de aplicaciones telemáticas, son elementos donde la Facultad pretende dar solidez a la formación del estudiante, fomentar su creatividad en la resolución de problemas, y contagiarle el entusiasmo por la Ingeniería.  En este curso se realizan diversas  prácticas sobre algunos de los temas tratados en los siguientes cursos: Física General, Mecánica, Termodinámica, Laboratorios de Informática.   Durante el planteo de la práctica se abordarán los fundamentos teóricos de la misma. A su finalización se presentará un informe que incluye el desarrollo de la práctica, su alcance y limitaciones, análisis de los resultados obtenidos y conclusiones. ",
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
    profesor: "Pigola Vilaró, Paula",
    creditos: "7.5",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso integrante del conjunto de ciencias básicas en la formación del ingeniero civil. Constituye el fundamento de las materias que le preparan para las aplicaciones de Ingeniería Sanitaria. Mecánica de los Fluidos: Cinemática, estática y dinámica de medios fluidos. Movimiento laminar y turbulento. Ecuaciones de Navier Stokes y Reynolds. Movimiento plano. Análisis dimensional capa límite. Paradojas hidrodinámicas. Hidráulica técnica: Tuberías. Cauces abiertos: canales, energía específica, secciones críticas, resaltos hidráulicos, vertederos y desagües.",
    directos: 2,
  },

  {
    id: "Laboratorio II Civil",
    hijo: ["Laboratorio I Civil"],
    cat: "E",
    nombre: "",
    profesor: "Demarco Mastrascusa, Nelson Alejandro",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El trabajo de laboratorio es un ámbito especialmente apto para enseñar y educar tal como se ha planteado en el perfil del egresado de Ingeniería. Llevar lo estudiado a la práctica, interactuar con la realidad física, consolidar los estudios teóricos de las diversas asignaturas, el contacto cercano con el docente, el manejo de instrumental, fomentar su creatividad en la resolución de problemas, y contagiarle el entusiasmo por la Ingeniería. Los estudiantes de ingeniería industrial encaran prácticas de Electromagnetismo y los estudiantes de ingeniería civil realizan prácticas sobre resistencia de materiales y mecánica de suelos. Durante el planteo de la práctica se abordarán los fundamentos teóricos de la misma. A su finalización se presentará un informe que incluye el desarrollo de la práctica, su alcance y limitaciones, análisis de los resultados obtenidos y conclusiones. ",
    directos: 1,
  },

  {
    id: "Topografía y cartografia",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Berenguer Rampini, Wellington Eduardo",
    creditos: "7.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso técnico de la carrera de ingeniería civil que brinda un conocimiento práctico sobre representaciones del terreno tridimensional, magnitudes y sus errores, de forma de adquirir destreza en la comprensión espacial del ambiente donde implantará sus proyectos, e iniciarlo en el manejo elemental de instrumentos topográficos. Introducción a la topografía. Instrumentos topográficos. Métodos topográficos elementales. Métodos topográficos compuestos. Topografía aplicada.",
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
    profesor: "Pigola Vilaró, Paula",
    creditos: "4.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso técnico orientado al conocimiento de la distribución y movimiento del agua en la biosfera, con el objetivo de conocer el manejo de los recursos hídricos. Disciplina esencial para el desarrollo de estudios de obras de infraestructura hidráulica y sanitaria. Hidráulica subterránea: Ley de Darcy. Ecuaciones de continuidad y Dinámica. Condiciones de contorno. Pozos. Movimiento plano. Hidrología: Conceptos estadísticos. El ciclo hidrológico. Fórmulas empíricas. Medidas de las variables hidrológicas. La atmósfera. Los vientos. Origen y formación de las precipitaciones. Estudio de precipitaciones máximas. Tormentas. Análisis y Descomposición del hidrograma. El hidrograma unitario. Método de predicción de avenidas. Regulación de embalses. Series hidrológicas. Métodos de regulación. ",
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
    profesor: "Patrone Matteo, Julio César",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Materia técnica de ingeniería civil orientada al conocimiento de los materiales naturales, como suelos, rocas y macizos rocosos, en relación con sus propiedades básicas, origen y comportamiento previsible, en la interacción con las estructuras civiles. Definición del suelo y de la roca. Propiedades geológicas fundamentales. Estructura de la Tierra. Rocas ígneas, sedimentarias y metamórficas. Propiedades de las rocas y los macizos rocosos Conceptos de pliegues, fallas, diaclasas, etc. Meteorización de rocas y formación de suelos. Propiedades básicas de los suelos  Conceptos fundamentales. Propiedades físicas y  propiedades índices. Estructura del suelo y textura de las arcillas Estructura del suelo granular. Exploración del subsuelo  Planeamiento de las investigaciones. Propiedades hidráulicas de los suelos  Revisión de ciclo hidrológico. Distribución de tensiones en la masa de suelos  Disipación de las cargas según un plano vertical.",
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
    profesor: "Lurner Steinberg, Eduardo",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas de la carrera de ingeniería civil, y trata sobre la resistencia, rigidez y estabilidad de los elementos que componen las estructuras. Reticulados planos. Método de las fuerzas. Criterios de resistencia o falla de los materiales. Fenómenos de plasticidad. Inestabilidad de barras. Cargas variables: de impacto y cíclicas. Concentración de tensiones.",
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
    profesor: "Pedoja Ingold, Eduardo Delfino",
    creditos: "7.5",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Hormigón armado: metodología de cálculo y su aplicación en  tipologías estructurales básicas. Características de los materiales Hormigón. Acciones y solicitaciones. Dimensionado a flexión compuesta  Diagramas tensión deformación y resistencia del hormigón y del acero. Dimensionado a esfuerzo cortante Analogía de Moersch. Dimensionado a torsión  Fundamentos. Dimensionado de elementos comprimidos  Estabilidad de piezas comprimidas-Pandeo.",
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
    profesor: "Patrone Matteo, Julio César",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Materia técnica de ingeniería civil  que estudia la aplicación en obras civiles de materiales naturales (suelos, rocas y macizos rocosos) ya sea como elemento constitutivo de las mismas, o bien como materiales de fundación. Asentamientos de suelos  Consolidación. Suelos expansivos  Suelos potencialmente expansivos. Resistencia al corte de los suelos  Revisión de estados tensionales en un punto de la masa de suelo. Ensayos de Campo. Empuje de suelos  y Muros de Contención. Estabilidad de Taludes. Tipología de cimentaciones.  Cimentaciones Superficiales Tipologías. Cimentaciones Profundas. Compactación Conceptos generales y  métodos. Mejoramiento de suelos. Mecánica de Rocas.",
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
    descripcion: "Esta materia integra el grupo de materias técnicas de la carrera de ingeniería civil, orientadas a la modelización de diferentes estructuras, y su comportamiento y dimensionado bajo cargas y/o otras acciones, con énfasis en el análisis estructural matricial, y la modelización y cálculo de estructuras a través de diversos paquetes informáticos. Líneas de influencia y sus aplicaciones. Introducción al Análisis Estructural: Método de los Desplazamientos.",
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
    profesor: "Pedoja Ingold, Eduardo Delfino",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Hormigón pretensado: metodología de cálculo y aplicación en tipologías estructurales básicas. Descripción, aplicaciones, conceptos generales. Aceros, cordones adherentes y no adherentes, aspectos reológicos del hormigón. Teoría del cable. Método de la carga externa  Cables rectos, cables curvos, balanceo de cargas, efectos estructurales del pretensado, sistemas hiperestáticos. Fricción. Pérdidas elásticas, por retracción, fluencia y relajación, método de la carga constante, método diferencial, método del coeficiente de envejecimiento. Flexión  Dominios de deformación, cables adherentes y no adherentes, dimensionado de las armaduras. Cortante.  Efectos del pretensado, compresión oblicua, tracción, punzonado. Introducción de cargas concentradas  Teoría de las bielas. Calculo de flechas  Cálculo de flechas en el hormigón armado y pretensazo.",
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
    nombre: "Kasek Bressl, Martín Gunter",
    profesor: "",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas orientadas al conocimiento de los fundamentos de la ingeniería sanitaria y en particular de lo relacionado con el abastecimiento de agua potable. Se abordan en la materia todos los componentes del proceso: producción, transporte, distribución, suministro y generación de infraestructura. Fundamentos generales de salud pública. Sistemas de abastecimiento de agua potable. Tratamiento de aguas superficiales.",
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
    profesor: "Cassinelli, Alberto",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Este curso integra el grupo de materias técnicas, orientado a suministrar al estudiante avanzado de Ingeniería Civil información esencial referida a proyectos de vialidad, considerando su terminología específica, criterios de diseño, dimensionado y procedimientos constructivos propios de la especialidad. Trazado planimétrico. Altimetría. Drenaje y desagües. Estructura de pavimentos. Pavimentos asfálticos. Pavimentos de hormigón. Elementos complementarios.",
    directos: 2,
  },
  {
    id: "Transporte",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Solari Terra, José Manuel",
    creditos: "4.5",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Curso técnico de la carrera de ingeniería civil y de especialización técnica para los estudiantes de ingeniería industrial. El transporte es imprescindible para satisfacer las necesidades básicas de la sociedad. Permite la movilidad y accesibilidad de las personas y sus bienes a toda zona de producción o de consumo. Se destaca que los sectores vinculados al Transporte y la Logística fueron en los últimos años unos de los más dinámicos del país, habiendo crecido a un ritmo cercano al 6% acumulativo anual.  Cumplen además un papel principal en la operativa del comercio interno y del comercio internacional, influyendo decididamente en las cadenas productivas y en la competitividad de la producción exportable uruguaya. Su objetivo principal es apoyar la creación de las ventajas competitivas de la sociedad nacional y de sus empresas. Conceptos generales. El mercado del transporte. El transporte en el Uruguay. Producción de los servicios. Infraestructura de transporte. La planificación del transporte. Política de transporte.",
    directos: 0,
  },
  {
    id: "Laboratorio III Civil",
    hijo: ["Laboratorio II Civil", "Laboratorio I Civil"],
    cat: "E",
    nombre: "",
    profesor: "Demarco Mastrascusa, Nelson Alejandro",
    creditos: "6",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El trabajo de laboratorio es un ámbito especialmente apto para enseñar y educar tal como se ha planteado en el perfil del egresado de Ingeniería. Llevar lo estudiado a la práctica, interactuar con la realidad física, consolidar los estudios teóricos de las diversas asignaturas, el contacto cercano con el docente, el manejo de instrumental, el diseño de programas de software adaptado a determinada necesidad, el diseño y puesta en práctica de aplicaciones telemáticas, son elementos donde la Facultad pretende dar solidez a la formación del estudiante, fomentar su creatividad en la resolución de problemas, y contagiarle el entusiasmo por la Ingeniería. Los estudiantes de ingeniería industrial encaran prácticas de Electrónica, Motores y Electrotecnia y los estudiantes de ingeniería civil encaran la resolución de problemas de cálculo de estructuras y de ingeniería sanitaria. Durante el planteo de la práctica se abordarán los fundamentos teóricos de la misma. A su finalización se presentará un informe que incluye el desarrollo de la práctica, su alcance y limitaciones, análisis de los resultados obtenidos y conclusiones. ",
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
    profesor: "Caprario, Gonzalo",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas, orientada al conocimiento de la Ingeniería Sanitaria, en este caso la colecta, transporte, tratamiento y disposición final de aguas residuales y residuos sólidos urbanos, abarcando los principios teóricos, su metodología de cálculo y diseño y su aplicación en  los diferentes sistemas. Sistemas de colecta y disposición final de aguas residuales. Instalaciones sanitarias internas. Sistemas de manejo de residuos sólidos. Gestión de servicios de agua y saneamiento. ",
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
    profesor: "BAZZANO GARCÍA, Juan Bruno",
    creditos: "7.5",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas, orientadas al conocimiento de los materiales estructurales, en este caso el acero y la madera, a su metodología de cálculo y su aplicación en  las tipologías estructurales básicas. Estructuras metálicas: Acciones, sobrecargas, viento sobre las construcciones. Barras traccionadas. Tipos de uniones (conectores, soldadas) y sus aplicaciones. Análisis y diseño. Disposiciones constructivas. Vigas. Barras comprimidas. Estabilidad. Pandeo por flexión, elástico y plástico. Columnas compactas y compuestas. Barras comprimidas y flexadas. Pandeo local. Arrostramientos. Estructuras de madera: La madera como material estructural, propiedades. Criterios de diseño. Uniones y conectores. Uniones encoladas. Piezas laminadas. Piezas sometidas a fuerzas directas. Barras comprimidas. Estabilidad. Columnas compuestas. Piezas flexadas. Estabilidad de la forma plana de la flexión. Vigas compuestas. Vigas armadas. ",
    directos: 1,
  },

  {
    id: "Ingeniería de Transporte",
    hijo: ["Transporte"],
    cat: "E",
    nombre: "",
    profesor: "Nieto Trenche, Andrés Hugo",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia integra el grupo de materias técnicas, orientadas a comprender la importancia de la ingeniería de transporte en general, y de los puertos, aeropuertos y ferrocarriles en particular. El transporte es imprescindible para satisfacer las necesidades básicas de una sociedad, y la cadena de transporte juega un papel fundamental y preponderante en la economía de un país, al permitir el desplazamiento de mercaderías y personas entre las zonas de producción, habitación y consumo. Introduce al futuro ingeniero en la importancia de los sistemas de transporte. Los puertos, aeropuertos y ferrocarriles inciden directamente en la economía de un país en general y en la cadena de transporte en particular. Dar nociones respecto a los tipos de barcos, terminales portuarias especializadas, operativa portuaria y elementos para manejo de cargas e infraestructura asociada. Brindar referencias relativas a la ingeniería portuaria, los agentes atmosféricos, la clasificación y dimensionamiento de obras portuarias y dragado. Plantear las bases de la planificación portuaria.Prepara al alumno en los conceptos básicos del transporte aéreo y ferroviario, brindando conocimientos sobre la infraestructura y operación de estos modos de transporte.",
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
    profesor: "Pedoja Ingold, Eduardo Delfino",
    creditos: "24",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El proyecto a realizar en el último semestre de la carrera tiene como finalidad aplicar con creatividad los conocimientos adquiridos en las materias técnicas específicas de los semestres anteriores para solucionar un problema de ingeniería civil. El estudiante deberá abordar la elaboración de uno o varios proyectos concretos cubriendo al menos dos disciplinas fundamentales de su formación como ingeniero civil: estructuras, vial y sanitaria. También podrá ser un proyecto de investigación aplicada. La inscripción a este curso requiere que el estudiante haya aprobado 330 créditos, incluyendo dos de las tres prácticas profesionales.",
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
    descripcion: "Curso esencial en la formación de un ingeniero industrial. Su correcta aplicación en la práctica, es clave en el diseño y la puesta a punto de cualquier proceso que se lleve a cabo en el área productiva. Constituye una piedra angular en el desarrollo intelectual de los estudiantes, permitiéndoles afrontar los futuros desafíos profesionales. Es, muy posiblemente, la rama de la física con menor número de postulados y mayor ámbito de aplicabilidad, y permite a los estudiantes empezar a ver el mundo que los rodea con una herramienta insustituible para la comprensión de todos los fenómenos naturales. Es base de la columna vertebral de la formación de los ingenieros industriales, y es menester que ellos estén expuestos desde temprano en sus carreras a la correcta interpretación y utilización de sus principios, de manera tal, de aprovechar al máximo los recursos y minimizar los costos energéticos, objetivos de permanente actualidad y preocupación de la humanidad. Introducción a la termodinámica. Nociones generales de sistemas. Conceptos preliminares. Sustancias simples. Calor y trabajo. Primer principio de la termodinámica para sistemas cerrados. Primer principio para sistemas abiertos. Segundo principio de la termodinámica para sistemas cerrados. Entropía. Segundo principio para sistemas abiertos. Ciclos de potencia y refrigeración.",
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
    descripcion: "Esta materia forma parte del plan de estudios de la carrera de ingeniería industrial con el fin de que los alumnos tengan una preparación en temas básicos de carácter técnico industrial que les facilite la realización de la primera práctica profesional prevista para ese momento de la carrera. Normas y manuales técnicos. Dibujo técnico. Tolerancias y ajustes. Manejo y conocimiento de instrumental y herramientas de taller. Visita a taller de máquinas herramienta. Uniones temporales y permanentes. Elementos de transmisión de potencia. Sistemas de transmisión de fluidos. Cañerías y accesorios.",
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
    descripcion: "El conocimiento profundo de la teoría y práctica de la mecánica de los fluidos es fundamental para la correcta comprensión de los problemas y modelos de diseño industriales a los que se enfrentará el ingeniero industrial. Propiedades de los fluidos. Estática de los fluidos (Ecuaciones fundamentales). Estática de fluidos (Fuerzas sobre superficies planas y curvas). Dinámica de los fluidos perfectos. Teorema de la cantidad de movimiento. Flujo bidimensional de un fluido: Requisitos para el flujo bidimensional de un fluido ideal. Fluidos reales: Viscosidad. Número de Reynolds. Flujo no uniforme en canales abiertos: Resalto hidráulico. Flujo en conductos cerrados: Flujo permanente y uniforme.",
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
    descripcion: "Curso técnico de ingeniería industrial que toma como base los conocimientos adquiridos en Ciencias e Ingeniería de los Materiales, y profundiza el conocimiento de los metales en su conocimiento con una visión mas tecnológica que sirva de base para los procesos de conformado y fabricación de piezas específicas industriales. Metalurgia extractiva. Transformaciones de equilibrio en los diagramas estable y meta estable del Hierro y el Carbono. Transformaciones de no equilibrio de la austenita. Curvas TTT y CCT. Temple y templabilidad. El Revenido. Tratamientos térmicos, termoquímicos y termomecánicos. Mecánica de la fractura. Conformado de materiales. Soldadura. Aluminio y sus aleaciones. Cobre, Bronces y Latones.",
    directos: 1,
  },

  {
    id: "Organizacíon de la Producción I",
    hijo: [
      "Investigación Operativa I",
      "Probabilidad y Estadistica",
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
    descripcion: "En esta asignatura se analiza en profundidad el departamento de producción de una empresa industrial. En concreto Organización de la producción se encarga de las herramientas de diseño y mejora. Sistemas y organizaciones. Tipos de sistemas productivos y de servicio. Desarrollo de productos y procesos. Configuración y diseño de sistemas productivos y de servicio. Diseño de procesos de trabajo. Calidad y performance. Condiciones de trabajo. Planificación de plantillas. Relaciones laborales. ",
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
    descripcion: "Curso de ingeniería aplicada basado en el conocimiento y la aplicación a situaciones concretas de dispositivos de estado sólido y componentes discretos. Máquinas eléctricas. Máquinas sincrónicas. Redes de corriente alterna industriales. Comportamiento de equipo eléctrico según la tensión. Comportamiento de equipo eléctrico según la corriente. Elementos de maniobra, interruptores, disyuntores, seccionadores, contactores etc. Valores nominales de corriente, tensión y frecuencia. Capacidades de apertura y cierre. Conductores eléctricos. Protección contra sobre-corrientes. Arranque de motores. Pararrayos. Instalaciones de puesta a tierra, instalaciones de protección y servicio. Subestaciones. Normas de Equipos e Instalaciones.",
    directos: 1,
  },

  {
    id: "Transferencia de Calor",
    hijo: ["Termodinámica", "Análisis Matemático I"],
    cat: "E",
    nombre: "Transferencia de Calor",
    profesor: "Miguel Baldriz Chouhy",
    creditos: "4,5",
    semestre: "VII",
    dicta: "Se dicta en semestre impar",
    exonerable: "No es exonerable", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Constituye la base del entendimiento de los diferentes procesos industriales en los que se encuentra involucrada la transferencia de calor. Introducción a los diferentes fenómenos de transferencia de calor. Conducción - Ecuación de conducción - Forma diferencial. Casos particulares: muro plano, cilindro y esfera - Concepto de resistencia térmica. Superficies extendidas. Fenómenos transitorios unidimensionales. Fenómenos bidimensionales. Convección - Capa límite hidrodinámica, térmica y de concentraciones. Analogías entre los distintos fenómenos. Fenómeno de convección en el caso de flujo externo (cilindro aislado y banco de tubos) y en el caso de flujo interno. Convección natural. Introducción a la transferencia de calor por radiación. Leyes de la radiación. Concepto de factor de vista y método de las radiosidades.",
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
    descripcion: "Curso técnico de ingeniería industrial en el cual se estudia el proceso mediante el cual las turbo máquinas intercambian energía con el fluido y en los diferentes tipos de máquinas disponibles a tales efectos. Similitud en turbomáquinas. Fundamentos de las turbomáquinas. Bombas y ventiladores centrífugos. Bombas y ventiladores axiales. Turbinas hidráulicas. Cavitación. Instalaciones de bombeo. Bombas de desplazamiento positivo. Selección de bombas. Compresores.",
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
    descripcion: "Curso técnico de ingeniería industrial que constituye la base del entendimiento de los diferentes procesos industriales en los que se encuentran involucrados los fenómenos de transferencia de calor. Intercambiadores. Termometría. Teoría de la Combustión. Generadores de vapor. ",
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
    descripcion: "Las industrias de procesos son un ámbito clave para el desempeño profesional de los ingenieros industriales.  Éstos deben enfrentar, en forma permanente, desafíos provenientes de la operación, el dimensionado y diseño tanto de equipos como de procesos.  Su inclusión en el plan de estudios de la carrera de ingeniero industrial procura facilitar un diálogo inteligente entre profesionales de la ingeniería industrial y química que convergen en el ámbito común de la industria. Operaciones unitarias en ingeniería de procesos. Operaciones con partículas sólidas. Agitación y mezcla. Condensación y Evaporación. Operaciones de transferencia de masa. Humidificación. Secado. Destilación.",
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
    descripcion: "Curso técnico de la carrera de ingeniería industrial y de especialización técnica de la carrera de ingeniería telemática. Las aplicaciones electrónicas dentro del ámbito industrial permiten sistemas de automatización de los procesos que redundan en el control y la productividad de dichos procesos. Control analógico o continuo.- Introducción: Sistemas mecánicos, hidráulicos, eléctricos, etc. Descripción analítica de los sistemas de regulación. Definición de control de lazo abierto y cerrado. Análisis en el tiempo: respuesta al impulso, al escalón unitario. Función de transferencia. Sistemas de segundo orden. Análisis en las frecuencias: Respuesta en frecuencias. Diagramas de Bode y Nyquist. Estabilidad: Aplicaciones. Técnicas de compensación: Método del lugar de las raíces, respuesta en frecuencia. Instrumentación de control: Reguladores tipo P, I, PI, PD, PID. Control digital o discreto.- Sistemas discretos: Muestreo y reconstrucción. Sistemas muestreados. Estabilidad: sistemas de primer y segundo orden. Sistemas realimentados. Discretización de reguladores continuos. Diseño. Ingeniería de control: autómatas, soporte de hardware. Concepto de estado: representación y ecuaciones. Estabilidad y realimentación.",
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
    descripcion: "Curso técnico de la carrera de ingeniería industrial en el cual, a partir de los conocimientos impartidos sobre matemáticas, materiales, física, procesos metalúrgicos y resistencia de materiales, se abordan los temas referentes al diseño de equipos. Se estudian los diferentes elementos constructivos mecánicos para el proyecto de máquinas y equipos, en especial aquellos de mayor aplicación industrial en la construcción de: herramientas, máquinas, equipos e instalaciones industriales. Elementos de diseño y selección de recipientes sometidos a presión. Elementos de diseño y selección de intercambiadores de calor. Transmisión de Movimientos y Esfuerzos. Tuberías.",
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
    descripcion: "Curso técnico de ingeniería industrial. Aplicaciones generales del frío. Diferentes tipos de refrigeración. Conservación de los alimentos. Ejemplos de usos. Ciclo de Carnot de potencia e invertido. Coeficiente de performance. Diagrama termodinámico presión vs. Entalpía de un fluido frigorígeno: isolíneas. Ciclo teórico y ciclo práctico de refrigeración. Componentes fundamentales de un circuito frigorífico. Intercambiador de calor líquido-vapor. Compresión escalonada. Expansión escalonada. Ciclo y circuito frigorífico de un sistema con compresión y expansión escalonadas. Necesidades de frío a varias temperaturas; soluciones posibles.  Compresores frigoríficos alternativos, rotativos y centrífugos. Ejercicios. Compresores frigoríficos alternativos centrífugos. Condensadores frigoríficos. Evaporadores frigoríficos. Dispositivos de expansión. Refrigerantes. El aceite en los equipos frigoríficos. Predicción del funcionamiento de un sistema total de compresión de vapores con cambio de fase. Compresión en varias etapas. Bomba de calor. ",
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
    descripcion: "El proyecto a realizar en el último semestre de la carrera tiene como finalidad aplicar con creatividad los conocimientos adquiridos en las materias técnicas específicas de los semestres anteriores para solucionar un problema de ingeniería industrial. Tendrá una complejidad y alcance equivalente al que insumirá un trabajo durante un semestre de un profesional del área. El tema objeto del proyecto podrá ser el diseño e implantación de una planta industrial, o bien el lay-out y desarrollo de un proceso, con el proceso de construcción, adquisición de equipos y construcciones, etc. Estos incluirán el diseño de todos los servicios necesarios para su funcionamiento. También podrá ser el diseño y fabricación de un equipo o desarrollar un trabajo de investigación. La inscripción a este curso requiere que el estudiante haya aprobado 330 créditos, incluyendo dos de las tres prácticas profesionales.",
    directos: 2,
  },
];

let materiasEspinf = [
  {
    id: "Lógica",
    hijo: [],
    cat: "E",
    nombre: "Moreno, Hugo",
    profesor: "",
    creditos: "6",
    semestre: "II",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "La Lógica y particularmente la Lógica Matemática es una disciplina básica de las Ciencias de la Computación. Esta materia sigue a la materia Lógica Digital en la que se presentan el Álgebra de Boole y las máquinas de estado. Las proposiciones de enunciados, las reglas de demostración y si un problema es resoluble por métodos algorítmicos son temas abordados en esta asignatura, con un fuerte énfasis en la formalización de sistemas y rigor en la demostración de enunciados.",
    directos: 0,
  },
  {
    id: "Metodología de la Investigación ",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Tanco Rainuso, Pablo Martín",
    creditos: "4.5",
    semestre: "VIII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "En el escenario que rodea hoy en día a las empresas del entorno, la experimentación y la investigación son uno de los elementos que más pueden contribuir al aprendizaje y a la mejora de productos y proceso. Sin embargo, para afrontar una investigación es necesario conocer los principales elementos que constituyen el método científico. Luego de un módulo teórico, se pretende impartir la asignatura con un enfoque práctico y de utilidad para las futuras investigaciones de los alumnos, ya sea en programas de doctorado o en las propias empresas. ",
    directos: 0,
  },

  {
    id: "Matemática Discreta",
    hijo: ["Análisis Matemático I", "Geometría y Álgebra Lineal I"],
    cat: "E",
    nombre: "",
    profesor: "Kalemkerian Kazandjian, Juan Antonio",
    creditos: "9",
    semestre: "III",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "La matemática discreta es una disciplina que unifica diversas áreas tradicionales de la Matemática (teoría de conteo, probabilidad, recurrencia, aritmética, grafos, criptografía,…),Esta materia forma parte de las ciencias básicas en la formación del ingeniero en informática.Por ejemplo la información se manipula y almacena en las computadoras en forma discreta (secuencias de ceros y unos), la cantidad de operaciones que realiza un algoritmo es discreta (finita), las relaciones (funciones) son entre conjuntos finitos de datos (bases de datos), etc. ",
    directos: 2,
  },

  {
    id: "Análisis y Diseño de Algoritmos",
    hijo: ["Programación II", "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "Etchecopar, Lucía",
    creditos: "6",
    semestre: "IV",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia brinda al estudiante conocimientos acerca de las principales técnicas para diseñar algoritmos computacionales y evaluar su desempeño, así como también familiariza al estudiante con el uso de estructuras como árboles y grafos",
    directos: 1,
  },

  {
    id: "Arquitectura de Aplicaciones ",
    hijo: [],
    cat: "E",
    nombre: "López Roig, Diego",
    profesor: "",
    creditos: "6",
    semestre: "V",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Contribuye al perfil del futuro profesional analizando los problemas que se plantean en el diseño de aplicaciones de tipo “Enterprise” y propone soluciones a los mismos a través de distintos tipos de “arquitecturas”. Transmitir los conceptos básicos sobre qué es una arquitectura de software.Estudiar distintos tipos de arquitectura y cómo estás se utilizan a lo largo del ciclo de desarrollo de software.Mostrar a través de casos de estudio como utilizar patrones de diseño para crear una arquitectura efectiva.Mostrar cómo utilizar UML y otras técnicas para documentar la arquitectura de software.  Realizar trabajos prácticos que ayuden a los estudiantes a aplicar los conocimientos teóricos, analizando y diseñando sistemas con tecnologías orientadas a objetos y con distintos tipos de arquitectura. Presentar los aspectos más relevantes sobre la gestión de la arquitectura.",
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
    profesor: "Canoniero Solsona, Walter Daniel",
    creditos: "6",
    semestre: "VI",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta asignatura presenta las limitaciones y capacidades fundamentales de las computadoras, los límites de la posibilidad de resolver problemas mediante algoritmos, y la clasificación de problemas de acuerdo a su dificultad. El objetivo es lograr que el estudiante sea capaz de determinar qué es computable y qué no, mostrando los distintos tipos de máquinas de estado. Mostrar y aplicar en forma práctica métodos para diseñar compiladores de lenguajes de programación.",
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
    profesor: "Barreiro Laplume, Javier",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El proceso de construcción de software requiere dominar procesos y técnicas adecuadas, adherir a normas y estándares y gestionar adecuadamente todo el proyecto, y a estos efectos se ofrece un panorama de aquello generalmente aceptado en la actualidad por la industria. Esta asignatura profundiza lo visto en Ingeniería de Software, haciendo especial incapié en la Calidad del Software y de la Gestión de Proyectos de Software. Los objetivos más importantes son: Ser consciente de la importancia de la calidad en el desarrollo del software, y de las particularidades de la calidad en el ámbito. Incorporar herramientas que le permitan gestionar con solvencia y habilidad un proyecto de desarrollo de software. Ser consciente de las particularidades de los grupos humanos que desarrollan software. Concebir el desarrollo de software con una perspectiva creativa.",
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
    profesor: "Joskowicz, José",
    creditos: "6",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "La materia Infraestructura de Informática presenta al alumno los diferentes componentes en el área de infraestructura de los que se compone un sistema informático y a los que deberá enfrentarse en el futuro. Complementariamente al de otras materias de perfil más lógico o abstracto, Infraestructura de Informática tiene un cariz práctico importante, orientado a que el futuro profesional pueda tomar decisiones sobre gestión e instalación de equipamiento. Asimismo, cubre principios de teoría de la información y la comunicación, componentes básicos de sistemas de comunicación de datos, y de seguridad. Esta materia forma parte de las materias tecnológicas básicas en la formación del ingeniero en informática.",
    directos: 1,
  },

  {
    id: "Derecho Telemático",
    hijo: [],
    cat: "E",
    nombre: "",
    profesor: "Brian Nougreres, Ana",
    creditos: "4.5",
    semestre: "VII",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Como bien se ha destacado, no se pueden aplicar soluciones domésticas para la solución de problemas planetarios: Políticos, intelectuales, educadores, hombres de negocios, profesionales y, en general, todos aquellos que toman decisiones necesitan ser conscientes del impacto profundo del empleo de las nuevas tecnologías en la organización de nuestras vidas. No se puede gobernar de espaldas a la sociedad digital; antes bien, conviene gobernar para que ésta crezca de la manera más armónica posible, evitando nuevos desajustes y desigualdades, de los que nacerían inevitablemente conflictos y violencias. Por eso, se dice que es necesario construir un nuevo Derecho. Su calificación como telemático deriva de la aplicación de la expresión telemática, la cual fue inicialmente usada por los autores del informe presentado en 1978 al entonces Presidente de Francia, Valery Giscard d' Estaing, y publicado ese mismo año bajo el título de La informatización de la sociedad, para designar la imbricación creciente de los computadores y de las telecomunicaciones.Ese Derecho está en construcción tanto a nivel de los países como internacionalmente, siendo necesario su conocimiento, tanto en perspectiva positiva como científica. ",
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
    descripcion: "La comunicación de los computadores y la creación de redes informáticas, hacen que los aspectos de seguridad, comunicación y distribución de aplicaciones sean fundamentales. Esta asignatura muestra al estudiante las tecnologías de seguridad de aplicaciones y datos que viajan en una red informática. Seguridad física y lógica. Conceptos fundamentales sobre la seguridad informática. Confidencialidad, integridad y disponibilidad de la información. Amenazas y métodos de defensa. Políticas y planes de seguridad. Tecnologías de Seguridad Informática. Control de Accesos. Seguridad en Redes. Criptografía. Clave pública, certificados digitales, pagos digitales. Seguridad en Internet. Seguridad Operacional. Seguridad Informática en el desarrollo de aplicaciones. Recupero ante contingencias. Plan de Continuidad de Negocios/ Plan de Recuperación ante desastres. Seguridad Física.  Servicios de Seguridad. Evaluaciones de Vulnerabilidad. Estudios de Penetración. Auditoria de Sistemas. Evaluación de Riesgo.",
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
    profesor: "Mayr, Cristina",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "A través de la asignatura se transmite al estudiante la necesidad de establecer mecanismos de auditoría y controles de los Sistemas Informáticos y de la Tecnología de la información. Como realizar planes y establecer pautas para su correcta verificación, como así también la de los diferentes programas y presupuestos de la organización.",
    directos: 1,
  },
  {
    id: "Inteligencia de Negocios ",
    hijo: ["Diseño de Base de Datos I", "Programación I"],
    cat: "E",
    nombre: "",
    profesor: "",
    creditos: "6",
    semestre: "IX",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "La Inteligencia de Negocios está cada vez más presente en la actividad empresarial. En esta materia se presentará el tema y si brindarán herramientas para que el egresado sepa desempeñarse en el área. Generar sistemas de información, que faciliten la gestión empresarial, a partir de datos operacionales. Serán utilizadas técnicas de datawarehousing, data mining y se crearán tableros de control balanceados.",
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
      "Sistemas Digitales I",
    ],
    cat: "E",
    nombre: "Sotelo Bovino, Rafael Guzmán",
    profesor: "",
    creditos: "24",
    semestre: "X",
    exonerable: "", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "El Proyecto a realizar en el último semestre de la carrera tiene como finalidad aplicar con creatividad los conocimientos adquiridos en las materias técnicas específicas de los semestres anteriores para solucionar un problema de ingeniería en informática. Tendrá una complejidad y alcance equivalente al  que insumirá un trabajo durante un semestre de un profesional del área. El objeto del proyecto en general será el desarrollo por parte de un equipo de un sistema informático, en el que se realice un análisis y especificación de requisitos, se planificará la arquitectura del sistema, se programará y probará el resultado final. Por otra parte el proyecto puede consistir en el desarrollo de investigación en Informática, elaboración de estudios técnicos e informes relacionados con las áreas propias.",
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
    descripcion: "Se requiere que el futuro profesional tenga habilidades y en el desarrollo de los cursos de la carrera en cuanto a un adecuada y comprensiva presentación oral y escrita. También para poder mejorar la comunicación en la organización  y fuera de ella. Lenguaje escrito. Lenguaje Oral.",
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
  {
    id: "Práctica profesional 1",
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
    hijo: [
      "Probabilidad",
      "Práctica profesional 1",
      "Calculo",
      "Calculo Basico",
    ],
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
    descripcion: "Es misión de la Universidad de Montevideo formar profesionales competentes en lo técnico, a la vez que actores comprometidos con la realidad y la implicancia social de su labor. Las regulaciones éticas comerciales, la atención a la calidad y el cuidado del medio ambiente, están llamados a jugar un papel cada vez más importante, y son aspectos que no pueden escapar a la formación del ingeniero. Fin de la vida humana. Libertad  y acción humana. Virtudes morales. Criterios para determinar la bondad de las acciones. El marco político de la ética. Corrientes éticas. Actos profesionales. Responsabilidad en el ejercicio profesional. La actuación profesional y su relación con los actos de otros. El ingeniero en proyectos. Responsabilidad en el desarrollo de proyectos. El ingeniero en sus informes. El ingeniero dirigiendo trabajos. Condiciones de trabajo y riesgos de accidente. El ingeniero independiente y trabajando en empresas. El ingeniero como administrador. Cualidades necesarias o convenientes. Análisis de Casos.",
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
    hijo: [
      "Probabilidad",
      "Estadística I",
      "Práctica profesional 1",
      "Calculo",
      "Calculo Basico",
    ],
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
  {
    id: "Práctica profesional 2",
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
    hijo: [
      "Estadística II",
      "Algebra",
      "Probabilidad",
      "Calculo",
      "Calculo Basico",
    ],
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
    directos: 1,
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
    exonerable: "",
    descripcion: "",
  },
  {
    id: "Práctica profesional 3",
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
    hijo: ["Finanzas I", "Matemática Financiera"],
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
    descripcion: "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero. Las herramientas matemáticas y sus razonamientos lógicos son la base para cuantificar los fenómenos físicos y la resolución de problemas técnicos. Número complejo. Funciones complejas y “movimientos” en el plano. Integración  de funciones de  una variable. Series. Ecuaciones  diferenciales  ordinarias.",
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
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. La geometría analítica marca un hito en la historia de la matemática, porque constituye una síntesis de dos formas de pensamiento, el geométrico y el algebraico, cada uno con características propias. La  geometría analítica, junto con la mecánica clásica, fueron las principales motivadoras de los desarrollos en álgebra lineal, rama de la matemática que concierne al estudio de las estructuras lineales (o más formalmente de los  espacios vectoriales). Ejemplos de tales estructuras lineales son los vectores ordinarios, las matrices, las soluciones de sistemas de ecuaciones homogéneos. Geometría en el espacio ordinario. Producto escalar y vectorial. Espacios vectoriales. Matrices. Sistemas lineales de ecuaciones. Determinantes.",
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
    descripcion: "En la actualidad la informática se encuentra presente en todas las ramas de la ingeniería. El presente curso propone integrar aspectos básicos de programación, electrónica y mecánica utilizando un microprocesador para controlar un robot basado en una plataforma móvil de cuatro ruedas. Durante el desarrollo del curso los estudiantes se enfrentarán con distintas situaciones que van desde el ensamblado completo del robot hasta la programación del microprocesador de forma tal que pueda monitorear variables del mundo exterior y responder a ellas en forma adecuada. ",
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
    descripcion: "Se pretende fomentar en los alumnos la inquietud de estar permanentemente al día en su formación profesional y vincular la carrera con la resolución practica de problemas. Por otro lado, también se pretende desarrollar la capacidad de los alumnos para elaborar informes técnicos. Esta materia brinda una idea general acerca de la Ingeniería justo en el momento que el estudiante ingresa a la Facultad para brindar una orientación ajustada de la carrera. Se tiene como objetivo ayudar al estudiante a seleccionar que carrera cursar dentro de las posibilidades que brinda la Facultad. Por otro lado, esta materia a partir de la discusión y el análisis de casos de estudiantes reales busca motivar a los alumnos durante la carrera y orientarlos durante su primer semestre en la Universidad. Se busca que los alumnos adquieran una actitud pro-activa en su formación.",
  },
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
    descripcion: "El objetivo general de este laboratorio es emprender un trabajo práctico de ingeniería.En este laboratorio se realiza un proyecto en el cual se entrega un prototipo de una entidad significativa, que involucra la integración de distintas disciplinas de la Telemática, tales como la electrónica analógica y digital, las telecomunicaciones y la informática.Resultan proyectos en el área de la robótica, domótica, control industrial o monitoreo remoto.",
    carreras: ["tel", "inf"],
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
    descripcion: "Esta materia forma parte de las ciencias básicas fundamentales en la formación del ingeniero. Las herramientas matemáticas y sus razonamientos lógicos son la base para cuantificar los fenómenos físicos y la resolución de problemas técnicos. Funciones de varias variables. Integrales múltiples. Curvas. ",
  }, //sem4
  {
    id: "Probabilidad y Estadistica",
    hijo: ["Análisis Matemático II", "Análisis Matemático I"],
    cat: "G",
    nombre: "Probabilidad y Estadistica",
    profesor: "Pepe Diaz",
    creditos: "9",
    semestre: "IV",
    dicta: "Se dicta en semestre par",
    exonerable: "Se exonerea parcialmente,el practico,con nota 10", // "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
    descripcion: "Esta materia forma parte de las ciencias básicas en la formación del ingeniero. La probabilidad es una rama de la matemática que proporciona modelos para experimentos aleatorios, en el sentido que conocemos los posibles resultados, pero no podemos predecir  con exactitud cual va a ocurrir. Mientras que la estadística es una rama de la matemática que se refiere al  estudio e interpretación de los datos obtenidos en un experimento. Una parte importante de la estadística, es la llamada inferencia estadística, que comprende los métodos y procedimientos para deducir propiedades (hacer inferencias) de una población, a partir de una pequeña parte de la misma (muestra). La bondad de estas deducciones se mide en términos probabilísticos, es decir, toda inferencia se acompaña de su probabilidad de acierto. Espacios de probabilidad. Variables aleatorias. Distribuciones conjuntas. Valor esperado de una variable aleatoria. Leyes límites. Estimación. Pruebas de hipótesis paramétricas y no-paramétricas. Métodos lineales.",
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
    descripcion: "Los conceptos que están contenidos en los factores económicos son una ayuda para el análisis de las situaciones que se presentan en las variables de costos de la producción de bienes y servicios y son una ayuda para estimar las evoluciones del mercado y de sus precios. Pensar como economista. La demanda y el consumidor. La oferta y la empresa. Equilibrio y bienestar. Los aranceles y comercio exterior. Oferta y demanda globales. Dinero e inflación. Tipo de cambio nominal y real. Balanza de pagos. Balanza comercial. Tipo de cambio fijo y flotante. Uruguay y la región.",
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
    descripcion: "Se requiere que el futuro profesional tenga habilidades y en el desarrollo de los cursos de la carrera en cuanto a un adecuada y comprensiva presentación oral y escrita. También para poder mejorar la comunicación en la organización  y fuera de ella. Lenguaje escrito. Lenguaje Oral.",
    directos: 0,
  }, //sem5

  {
    id: "Investigación Operativa I",
    hijo: [
      "Probabilidad y Estadistica",
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
    descripcion: "Curso de ciencia básica en el cual se estudia el uso de modelos matemáticos, estadísticos y algoritmos con objeto de resolver problemas complejos, determinando la solución óptima y permitiendo, de esta forma, la toma de decisiones. Toma de decisiones. Programación Lineal. Modelos de Redes.",
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
    descripcion: "Las carreras de ingeniería preparan para un ejercicio profesional donde es fundamental el conocimiento y control de los costos y el análisis económico y financiero de la organización. Esta materia brinda los conocimientos básicos Contables y la forma de analizar y llevar costos. La contabilidad y el sistema de información de las organizaciones. Las operaciones más comunes y sus comprobantes. Cuentas colectivas. Ajustes contables. Bienes de Cambio. Deudas, provisiones y previsiones. Estados contables. Los objetivos de los sistemas de costes. Introducción a Sistemas de Control.",
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
    descripcion: "Integrado a los otros cursos de formación humana, el análisis de los conceptos de la dimensión trascendente en el hombre es de gran importancia en la formación del individuo como persona. Este curso promueve la reflexión por parte del estudiante universitario del sentido de trascendencia del Individuo, estimular su pensamiento crítico y reflexivo y su sentido en la vida. ",
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
    descripcion: "Esta materia forma parte de las ciencias humanas fundamentales en la formación del ingeniero. Las herramientas para el manejo del ser humano son básicas para el trabajo en equipo y la dirección del ingeniero en la empresa. La contemporaneidad, sus causas y desafíos.",
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
    descripcion: "La Lógica y particularmente la Lógica Matemática es una disciplina básica de las Ciencias de la Computación. Esta materia sigue a la materia Lógica Digital en la que se presentan el Álgebra de Boole y las máquinas de estado. Las proposiciones de enunciados, las reglas de demostración y si un problema es resoluble por métodos algorítmicos son temas abordados en esta asignatura, con un fuerte énfasis en la formalización de sistemas y rigor en la demostración de enunciados.",
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
    descripcion: "Esta materia brinda al estudiante conocimientos acerca de las principales técnicas para diseñar algoritmos computacionales y evaluar su desempeño, así como también familiariza al estudiante con el uso de estructuras como árboles y grafos.",
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
    descripcion: "Contribuye al perfil del futuro profesional analizando los problemas que se plantean en el diseño de aplicaciones de tipo “Enterprise” y propone soluciones a los mismos a través de distintos tipos de “arquitecturas”.Transmitir los conceptos básicos sobre qué es una arquitectura de software.Estudiar distintos tipos de arquitectura y cómo estás se utilizan a lo largo del ciclo de desarrollo de software.Mostrar a través de casos de estudio como utilizar patrones de diseño para crear una arquitectura efectiva.Mostrar cómo utilizar UML y otras técnicas para documentar la arquitectura de software.Realizar trabajos prácticos que ayuden a los estudiantes a aplicar los conocimientos teóricos, analizando y diseñando sistemas con tecnologías orientadas a objetos y con distintos tipos de arquitectura.Presentar los aspectos más relevantes sobre la gestión de la arquitectura.",
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
    descripcion: "Esta asignatura presenta las limitaciones y capacidades fundamentales de las computadoras, los límites de la posibilidad de resolver problemas mediante algoritmos, y la clasificación de problemas de acuerdo a su dificultad. El objetivo es lograr que el estudiante sea capaz de determinar qué es computable y qué no, mostrando los distintos tipos de máquinas de estado. Mostrar y aplicar en forma práctica métodos para diseñar compiladores de lenguajes de programación.",
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
    descripcion: "El proceso de construcción de software requiere dominar procesos y técnicas adecuadas, adherir a normas y estándares y gestionar adecuadamente todo el proyecto, y a estos efectos se ofrece un panorama de aquello generalmente aceptado en la actualidad por la industria. Esta asignatura profundiza lo visto en Ingeniería de Software, haciendo especial incapié en la Calidad del Software y de la Gestión de Proyectos de Software. Los objetivos más importantes son: Ser consciente de la importancia de la calidad en el desarrollo del software, y de las particularidades de la calidad en el ámbito. Incorporar herramientas que le permitan gestionar con solvencia y habilidad un proyecto de desarrollo de software. Ser consciente de las particularidades de los grupos humanos que desarrollan software. Concebir el desarrollo de software con una perspectiva creativa.",
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
    descripcion: "La materia Infraestructura de Informática presenta al alumno los diferentes componentes en el área de infraestructura de los que se compone un sistema informático y a los que deberá enfrentarse en el futuro. Complementariamente al de otras materias de perfil más lógico o abstracto, Infraestructura de Informática tiene un cariz práctico importante, orientado a que el futuro profesional pueda tomar decisiones sobre gestión e instalación de equipamiento. Asimismo, cubre principios de teoría de la información y la comunicación, componentes básicos de sistemas de comunicación de datos, y de seguridad.Esta materia forma parte de las materias tecnológicas básicas en la formación del ingeniero en informática.",
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
    descripcion: "Curso inicial de informática de la carrera de ingeniería telemática para familiarizar al estudiante en el uso de las herramientas. Introducción. Entrada-Salida. Tipos de datos. Estructuras de control. Excepciones. Objetos y Clases. Métodos. Polimorfismo. Herencia, interfases.",
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
    descripcion: "En esta materia técnica de la carrera de ingeniería telemática se presentan en detalle los principales dispositivos microelectrónicos, como ser microcontroladores y microprocesadores. Asimismo, se describen los conceptos básicos de los lenguajes de programación de bajo nivel. Repaso de conceptos de Lógica Digital. Arquitectura típica de un sistema basado en microprocesador. Formato de instrucciones – Assembler. Arquitectura PIC. Buses. Líneas de Control. Modos de Direccionamiento. Set de Instrucciones. Software. Introducción - Lenguajes RISC y CISC. Tipos de Instrucciones. Ejemplos de programas. Trabajo con Herramientas de Desarrollo: ensambladores, simuladores, debuggers y kits de Desarrollo. Hardware.  Descripción de Señales. Ciclos de Máquina. Memorias. Puertos de entrada/salida. Interrupciones. Periféricos. Ejemplos de Diseño. ",
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
    descripcion: "El principal componente de un sistema informático sigue siendo su programación. En esta materia el estudiante consolida los conceptos adquiridos en la materia Programación I y profundiza en las tareas de programación, utilizando lenguajes y técnicas adecuadas para mejorar la escritura de código. Introducción a las estructuras básicas. Stacks. Introducción a la recursividad. Árboles. Algoritmos de búsqueda y ordenamiento. Introducción a los grafos, el algoritmo de Dijkstra.  Hash.",
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
    descripcion: "Un sistema informático debe disponer de un adecuado almacenamiento de datos con un correcto diseño que permita tiempos de respuesta aceptables y contemple además, aspectos de seguridad y mantenimiento.  Esta asignatura instruye en las principales técnicas acerca del diseño de Bases de Datos en un entorno informático. Definición básica de un sistema de base de datos. Diseño de bases de datos. El modelo relacional. Gestión de sistemas de base de datos.",
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
    descripcion: "Un sistema informático debe disponer de un adecuado almacenamiento de datos con un correcto diseño que permita tiempos de respuesta aceptables y contemple además, aspectos de seguridad y mantenimiento.   Los modernos sistemas informáticos y de base de datos deben responder a una amplia gama de necesidades.Esta asignatura instruye en el Diseño de Bases de Datos Orientadas a Objetos en un entorno informático. De igual modo introduce al estudiante en los conceptos de bases de datos distribuidas y bases de datos en la web",
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
    descripcion: "Esta materia lleva a la práctica los conocimientos informáticos teóricos adquiridos por los estudiantes hasta el momento de su dictado.  Marca un hito al consolidar en un proyecto las tareas principales en el desarrollo de un sistema informático, tales como Diseño, Análisis y Programación, así como el uso de Bases de Datos.  Ayuda a la formación profesional del estudiante en lo que refiere a la expresión oral y escrita, con la entrega y defensa del proyecto que se elabora en equipo durante el curso.",
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
    descripcion: "Uno de los componentes clave en un sistema informático es su Sistema Operativo. Esta asignatura hace conocer al estudiante de ingeniería telemática la estructura de una computadora y aborda los conceptos principales para que un sistema pueda operar eficazmente. Introducción a los sistemas operativos y su evolución histórica. Estructura de computadoras y principales interacciones entre el sistema operativo y el hardware. Interfaces de administración. Interfaces de programación. Manejo de procesos y recursos. Programación y scheduling de procesos. Programación concurrente. Sincronización entre tareas y manejo de bloqueos (“deadlock”). Sistemas operativos multiprocesador. Particionamiento. Subsistemas de entrada/salida y manejo dispositivos. Administración de memoria. Memoria virtual. Almacenamiento secundario. Sistema de archivos. Seguridad. Administración de usuarios.",
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
    descripcion: "La asignatura Laboratorio II se cursa en paralelo con la materia Sistemas Operativos. En esta asignatura los alumnos harán prácticas de los conceptos adquiridos en Sistemas Operativos, a través de programación usando los lenguajes “bash” (shell-scripts) y C, sobre sistema operativo Linux.",
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
    descripcion: "En los últimos años la informática ha evolucionado desde una computadora aislada a una extensa red de computadores interconectados, como es la World Wide Web. Para obtener una correcta comunicación entre máquinas, es necesario conseguir un fuerte conocimiento de los componentes físicos y las distintas capas de software que componen una red informática. Esta asignatura muestra al estudiante los distintos componentes, físicos y lógicos, de una red de datos. Introducción a las redes y modelo de capas. Concepto de Red. Tipos de Redes. Modelos OSI y TCP/IP. Ejemplos de implementación de redes. Capa Física. La interfaz de comunicaciones. Estándares. Medios de transmisión. Capa de Enlace. Servicios. Control de flujo. Framing. Control de errores. Protocolos HDLC, SLIP, PPP. Subcapa de Acceso al Medio. Protocolos de acceso múltiple. Los estándares IEEE 802.x. Bridges. LANs de alta velocidad. Redes satelitales. Capa de Red. Servicios. Algoritmos de enrutamiento. Control de congestión. Interconectividad. Routers. Proceso de túnel. Firewalls. El protocolo IP. Capa de transporte. Servicios. Control de flujo. Protocolos de transporte TCP y UDP. Capa de aplicación. Encriptación. DNS. SNMP. Correo electrónico. www. Protocolo HTTP. URL. HTML. Java.",
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
    descripcion: "El proceso de generación de un sistema informático requiere una adecuada planificación y el seguimiento de normas y estándares. Se busca crear un software que cumpla con lo solicitado por el cliente, sea fácil de operar por los usuarios y que su mantenimiento no sea un problema. Esta asignatura prepara al estudiante en los temas referidos a las actividades protectoras de software, aplicando las metodologías adecuadas a cada una de las fases de su ciclo de desarrollo. El proceso de software. La gestión de proyectos de software. Requerimientos de software. Modelado de sistemas. UML. Prototipación. Diseño arquitectónico. Arquitecturas de sistemas distribuidos. Cliente servidor, objetos distribuidos, brokers y middlewares. Diseño orientado a objetos. Reutilización. Diseño de la interfase de usuario. Interacción, presentación de información, asistencia al usuario. Verificación y Validación. Testeo del software. Gerenciamiento de personas. Estimaciones. Gerenciamiento de calidad. La mejora del proceso. CMM. Sistemas legados. Cambios del software. Control de configuración.",
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
    descripcion: "La Telemática e Informática es una rama de la Ingeniería que sufre permanentes transformaciones tecnológicas al cabo del tiempo. Los Laboratorios TICs permiten acompasar esos cambios aportando la práctica necesaria en temas que se tratan en las asignaturas de Redes de Datos I y II, Ondas Electromagnéticas, Sistemas de Transmisión, Telefonía Digital, Sistemas Distribuidos, Ingeniería de Software, Automatización y Control, Televisión y Multimedia, Comunicaciones Inalámbricas y Seguridad Informática.",
    carreras: ["tel", "inf"],
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
    descripcion: "La Telemática es una rama de la Ingeniería que sufre permanentes transformaciones tecnológicas al cabo del tiempo. Los Laboratorios de Telemática permiten acompasar esos cambios aportando la práctica necesaria en temas que se tratan en las asignaturas de Redes de Datos I y II, Ondas Electromagnéticas, Sistemas de Transmisión, Telefonía Digital, Sistemas Distribuidos, Ingeniería de Software, Automatización y Control, Televisión y Multimedia, Comunicaciones Inalámbricas y Seguridad Informática.",
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
    descripcion: "La comunicación de los computadores y la creación de redes informáticas, hacen que los aspectos de seguridad, comunicación y distribución de aplicaciones sean fundamentales. Esta asignatura muestra al estudiante de ingeniería telemática las distintas maneras de comunicación entre redes y describe mecanismos para distribuir y asegurar las aplicaciones y los datos que viajan entre ellas.  Arquitecturas y modelos de sistemas distribuidos. Arquitecturas de sistemas de objetos distribuidos. Comunicación. Sistemas de almacenamiento distribuidos. Consideraciones temporales, de coordinación y concurrencia en sistemas distribuidos. Seguridad y tolerancia a fallos en sistemas distribuidos. Sistemas multimedia distribuidos. Gestión de sistemas distribuidos en telecomunicaciones.",
    carreras: ["tel", "inf"],
    directos: 1,
  },

 //SEM8
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
        popup.style.height="fit-content";
        popup.style.fontFamily="Titillium Web";
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
          materias[i].id +
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
function cetss(){
  
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
document.getElementById("cets").addEventListener("click", (e) => {
  cetss();
});
