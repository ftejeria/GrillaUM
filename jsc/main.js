//E = ESPECIFICA; C = COMPARTIDA; G = GENERAL


let materiastel=[
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G",
        "nombre":"Analisis II",
        "profesor":"Pepe Díaz Milesi",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G",
        "nombre":"Analisis I",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Geometría y Álgebra Lineal I",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Física I",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":"Se exonera totalmente con nota 10"
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Robótica",
        "profesor":"Gustavo Compagnone",//esto esta mal
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Ingeniería",
        "profesor":"Adrián Santilli",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G",
        "nombre":"Geometría y Álgebra Lineal I",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica2",
        "hijo": [],
        "cat": "C",
        "nombre":"Física II",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdig1",
        "hijo": [],
        "cat": "C",
        "nombre":"Sistemas Digitales",
        "profesor":"Andres Merello",
        "creditos":"6",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 9",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prog1",
        "hijo": [],
        "cat": "C",
        "nombre":"Pogramación  I",
        "profesor":"Daniel Pereda",
        "creditos":"7,5",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
 
     {
        "id": "caluclo",//calculo?
        "hijo": ["analisis2", "gal2"],
        "cat": "G",
        "nombre":"Cálculo Numérico",
        "profesor":"Maximiliano Stock",//falta
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"],
        "cat": "C",
        "nombre":"Análisis Matemático III ",
        "profesor":"José Díaz Milesi ",
        "creditos":"9",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prog2",
        "hijo": ["prog1"],
        "cat": "C",
        "nombre":"Programacion II",
        "profesor":"Daniel Pereda",
        "creditos":"7,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre pimar",
        "exonerable":"Se exonera totalmente con nota 9",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "bbdd1",
        "hijo": ["prog1"],
        "cat": "C",
        "nombre":"Intoduccion a Base de Datos",
        "profesor":"Javier Pereira",
        "creditos":"7,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 9",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdig2",
        "hijo": ["sisdig1"],
        "cat": "C",
        "nombre":"Sistemas Digitales II",
        "profesor":"Andres Merello",
        "creditos":"/,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No se exonera",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas 1",
        "profesor":"Fernando Otero",
        "creditos":"4,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G",
        "nombre":"Probabilidad y Estaidstica",
        "profesor":"Pepe Diaz",
        "creditos":"9",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sislin",
        "hijo": ["analisis3"],
        "cat": "E",
        "nombre":"Sistemas Lineales",
        "profesor":"Hueso Abreu",
        "creditos":"7,5",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "bbdd2",
        "hijo": ["bbdd1"],
        "cat": "C",
        "nombre":"Introducion a Base de Datos II",
        "profesor":"Javier Pereira",
        "creditos":"7,5",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 9",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic1",
        "hijo": ["prog2"],
        "cat": "C",
        "nombre":"Laboratirio TIC I",
        "profesor":"Daniel Pereda",
        "creditos":"6",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G",
        "nombre":"Economía",
        "profesor":"Heber Francia",
        "creditos":"6",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G",
        "nombre":"Cominacion Profesional",
        "profesor":"María del Huerto Prato",
        "creditos":"3",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G",
        "nombre":"Investigacion Operativa I",
        "profesor":"Claudio Ruibal",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "electroMag",//faltan datos de exoneracion
        "hijo": ["fisica2", "analisis3"],
        "cat": "C",
        "nombre":"Electromagnetismo",
        "profesor":"Gerardo Beltrame",
        "creditos":"7,5",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sislin2",
        "hijo": ["sislin","fisica2"],
        "cat": "E",
        "nombre":"Sistemas Lineales",
        "profesor":"Marcelo Abreu",
        "creditos":"7,5",
        "semestre":"V",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 9",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G",
        "nombre":"Pasantia 1",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisop",
        "hijo": ["sisdig2"],
        "cat": "C",
        "nombre":"Sistemas Operativos",
        "profesor":"Gerardo Quincke",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic2",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"Analía Conde",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G",
        "nombre":"Contabilidad Y costao",
        "profesor":"Guillermo Rouks",
        "creditos":"&",
        "semestre":"V",
        "dicta":"Se dicta en semestre ipar",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":"Se exonera con nota 8"
    },    {
        "id": "medidaselectricas",
        "hijo": ["electroMag"],
        "cat": "C",
        "nombre":"Medidas e Instalaciones Eléctricas ",
        "profesor":"Andrés Merello ",
        "creditos":"7,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "muestreoypros",
        "hijo": ["sislin"],
        "cat": "E",
        "nombre":"Muestreo y Procesamiento Digital",
        "profesor":"Juan Piaggio",
        "creditos":"7,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "ingsoft",
        "hijo": ["tic1"],
        "cat": "C",
        "nombre":"Ingenieria de Sofware",
        "profesor":"Juan Pablo Núñez",
        "creditos":"6",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "redes1",
        "hijo": ["sisdig2", "pasantia1"],
        "cat": "C",
        "nombre":"Redes de Datos I",
        "profesor":"Gustavo Compagnone",
        "creditos":"6",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic3",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio TIC III",
        "profesor":"Analía Conde",
        "creditos":"6",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G",
        "nombre":"Cuestion de Teología",
        "profesor":"Juan Carlos Carrasco",
        "creditos":"4,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G",
        "nombre":"Gestión de Calidad",
        "profesor":"Darío Alentorn",
        "creditos":"4,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "modsena",
        "hijo": ["sislin"],
        "cat": "E",
        "nombre":"Modulación de Señales",
        "profesor":"Diego Durán",
        "creditos":"7,5",
        "semestre":"VII",
        "deicta":"Se dicta en semestre impar",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ondas",
        "hijo": ["electroMag"],
        "cat": "E",
        "nombre":"Ondas Electromagneticas",
        "profesor":"Gerardo Beltrame",
        "creditos":"6",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdis",
        "hijo": ["redes1"],
        "cat": "C",
        "nombre":"Sistemas Distribuidos",
        "profesor":"Daniel Canoniero",
        "creditos":"6",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":"No es exonerable"
    },
    {
        "id": "redes2",
        "hijo": ["redes1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },


    {
        "id": "tic4",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio TIC IV",
        "profesor":"Analía Conde",
        "creditos":"6",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "Electronica",
        "hijo": ["electroMag"],
        "cat": "C",
        "nombre":"Electrónica",
        "profesor":"--falta info--", //skere
        "creditos":"7,5",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },


    {
        "id": "sistrans",
        "hijo": ["pasantia2","ondas"],
        "cat": "E",
        "nombre":"Sistemas de Transmisión",
        "profesor":"Rafael Sotelo",
        "creditos":"6",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerale",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic5",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio TIC V",
        "profesor":"Diego Durán",
        "creditos":"6",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas II",
        "profesor":"Silvia Facal",
        "creditos":"4,5",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic6",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio TIC VI",
        "profesor":"Daniel Canoniero ",
        "creditos":"6",
        "semestre":"IX",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota -",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G",
        "nombre":"Proyectos de Inversión",
        "profesor":"Marcos Rey",
        "creditos":"4,5",
        "semestre":"IX",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No se exonera",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "proyTel",
        "hijo": ["sistrans", "Electronica","ingsoft"],
        "cat": "E",
        "nombre":"Proyecto",
        "profesor":"Hueso Abreu, Thomas Honnins",
        "creditos":"24",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G",
        "nombre":"Elementos de Gestión Empresarial ",
        "profesor":"Fernando Requena ",
        "creditos":"6",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G",
        "nombre":"Gestión de Proyectos",
        "profesor":"Viviana Rocco",  //skere
        "creditos":"4,5",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "etica",
        "hijo": [],
        "cat": "G",
        "nombre":"Ética Profesional",
        "profesor":"Juan Carlos Carrasco, Manuel Vega Utrera",
        "creditos":"6",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cets",
        "hijo": [],
        "cat": "",
        "nombre":"CETS/IDIOMAS/MLE",
        "creditos":"18",
        "descripcion":""
    }
];

let materiasciv = [
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G",
        "nombre":"Analisis II",
        "profesor":"Pepe Díaz Milesi",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G",
        "nombre":"Analisis I",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Geometría y Álgebra Lineal I",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"I",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Física I",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Robótica",
        "profesor":"Gustavo Compagnone",//esto esta mal
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Ingeniería",
        "profesor":"Adrián Santilli",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G",
        "nombre":"Geometría y algebra lineal II",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica2",
        "hijo": [],
        "cat": "C",
        "nombre":"Física II",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"II",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "matlab",//falta
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "funQui",//nose si esta bien lo de exonerable
        "hijo": [],
        "cat": "C",
        "nombre":"Fundamentos Químicos de la Ingeniería",
        "profesor":"Laura Luzuriaga",
        "creditos":"6",
        "semestre":"II",
        "exonerable":"no es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "caluclo",//calculo?
        "hijo": ["analisis2", "gal2"],
        "cat": "G",
        "nombre":"Cálculo Numérico",
        "profesor":"Maximiliano Stock",//falta
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"],
        "cat": "C",
        "nombre":"Análisis Matemático III ",
        "profesor":"José Díaz Milesi ",
        "creditos":"9",
        "semestre":"III",
        "exonerable":"se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica1",//error en doc
        "hijo": ["fisica1", "analisis1"],
        "cat": "C",
        "nombre":"Mecánica I",
        "profesor":"",
        "creditos":"7,5",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cad",
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio CAD",
        "profesor":"Daniel Larnaudie",
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "itnrotermo",//falta
        "hijo": ["analisis1"],
        "cat": "E",
        "nombre":"Laboratorio I Industrial", //skere
        "profesor":"",
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas I",
        "profesor":"",
        "creditos":"4,5",
        "semestre":"III",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G",
        "nombre":"Probabilidad y estadística",
        "profesor":"José Díaz Milesi",
        "creditos":"7,5",
        "semestre":"IV",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica2",
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"Mecánica II",
        "profesor":"Carlos Brun",
        "creditos":"7,5",
        "semestre":"IV",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "procontru1",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":" ",
        "creditos":"6",
        "semestre":"IV",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat",
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil1",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "hidro",
        "hijo": ["itnrotermo", "analisis3"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat2",
        "hijo": ["resMat"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ceinIngMat",
        "hijo": ["funQui"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil2",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "topocart",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "hidrolog",
        "hijo": ["hidro"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecsuelo",
        "hijo": ["resMat"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat3",
        "hijo": ["resMat2","mecanica2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "horm",
        "hijo": ["pasantia1","resMat2","ceinIngMat"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecsuelo2",
        "hijo": ["mecsuelo"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat4",
        "hijo": ["resMat3"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "horm2",
        "hijo": ["horm","resMat3"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingAmbiental",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },


    {
        "id": "plomeria1",
        "hijo": ["hidro",],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elcamino",
        "hijo": ["mecsuelo2","topocart"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "trans",
        "hijo": ["funQui"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "lbcivil3",
        "hijo": ["lbcivil2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "plomeria2",
        "hijo": ["plomeria1","hidrolog","pasantia2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "estrucmetalywood",
        "hijo": ["resMat4"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingtranspor",
        "hijo": ["trans"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "proyCiv",
        "hijo": ["plomeria2","elcamino","resMat4","horm2" ],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "etica",
        "hijo": ["ch1"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cets",
        "hijo": [],
        "cat": "",
        "nombre":"CETS/IDIOMAS/MLE",
        "creditos":"18",
        "descripcion":""
    }

];
let materiasind = [
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G",
        "nombre":"Analisis II",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"II",
        "dicta":"Se dicta en todos los semestres",
        "exonerable":"Se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G",
        "nombre":"Analisis I",
        "profesor":"José Díaz Milesi",
        "creditos":"9",
        "semestre":"I",
        "dicta":"Se dicta en todos los semestres",
        "exonerable":"Se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Geometría y Álgebra Lineal I",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"I",
        "dicta":"Se dicta en todos los semestres",
        "exonerable":"Se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Física I",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"I",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Robótica",
        "profesor":"Gustavo Compagnone",
        "creditos":"6",
        "semestre":"I",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G",
        "nombre":"Introducción a la Ingeniería",
        "profesor":"Adrián Santilli",
        "creditos":"6",
        "semestre":"I",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G",
        "nombre":"Geometría y algebra lineal II",
        "profesor":"Alfredo Piria",
        "creditos":"9",
        "semestre":"II",
        "dicta":"Se dicta en todos los semestres",
        "exonerable":"se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica2", //falta datos de exoneracion
        "hijo": [],
        "cat": "C",
        "nombre":"Física II",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "matlab",//esta en informatica y telematica
        "hijo": [],
        "cat": "C",
        "nombre":"Matlab",
        "profesor":"Blas Melissari",
        "creditos":"6",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "funQui",//nose si esta bien lo de exonerable
        "hijo": [],
        "cat": "C",
        "nombre":"Fundamentos Químicos de la Ingeniería",
        "profesor":"Laura Luzuriaga",
        "creditos":"6",
        "semestre":"II",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "caluclo",//calculo? falta profe y exoneracion
        "hijo": ["analisis2", "gal2"],
        "cat": "G",
        "nombre":"Cálculo Numérico",
        "profesor":"Maximiliano Stock",//falta
        "creditos":"6",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis3",
        "hijo": ["analisis2", "gal2"],
        "cat": "C",
        "nombre":"Análisis Matemático III ",
        "profesor":"José Díaz Milesi ",
        "creditos":"9",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"se exonera parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica1",
        "hijo": ["fisica1", "analisis1"],
        "cat": "C",
        "nombre":"Mecánica I",
        "profesor":"Carlos Brun",
        "creditos":"7,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cad",//falta datos de exoneracion
        "hijo": [],
        "cat": "C",
        "nombre":"Laboratorio CAD",
        "profesor":"Daniel Larnaudie",
        "creditos":"6",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonera parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "labInd",
        "hijo": [],
        "cat": "E",
        "nombre":"Laboratorio I Industrial",
        "profesor":"Diego Moratorio y Sofía Teixeira",
        "creditos":"6",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas I",
        "profesor":"Fernando Otero",
        "creditos":"4,5",
        "semestre":"III",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G",
        "nombre":"Probabilidad y estadística",
        "profesor":"José Díaz Milesi",
        "creditos":"7,5",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonerea parcialmente,el practico,con nota 10",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecanica2",
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"Mecánica II",
        "profesor":"Carlos Brun",
        "creditos":"7,5",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "termodinamica",
        "hijo": ["analisis1"],
        "cat": "E",
        "nombre":"Termodinámica",
        "profesor":"Gerardo Beltrame ",
        "creditos":"7,5",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat",//faltan datos de exoneracion
        "hijo": ["mecanica1"],
        "cat": "C",
        "nombre":"Resistencia de materiales I",
        "profesor":"Eduardo Lurner",
        "creditos":"6",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ayudaTecnica",
        "hijo": ["cad"],
        "cat": "E",
        "nombre":"Ayudantía Técnica",
        "profesor":"Ricardo Cosentino",
        "creditos":"3",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G",
        "nombre":"Economía",
        "profesor":"Heber Francia",
        "creditos":"6",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G",
        "nombre":"Comunicación Profesional",
        "profesor":"María del Huerto Prato",
        "creditos":"3",
        "semestre":"IV",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G",
        "nombre":"Investigación Operativa I",
        "profesor":"Claudio Ruibal",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "electroMag",//faltan datos de exoneracion
        "hijo": ["fisica2", "analisis3"],
        "cat": "C",
        "nombre":"Electromagnetismo",
        "profesor":"Gerardo Beltrame",
        "creditos":"7,5",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia1",//no necesita datos a lo sumo una descripcion
        "hijo": [],
        "cat": "G",
        "nombre":"Pasantia 1",
        "profesor":"",
        "creditos":"",
        "semestre":"V",
        "dicta":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "resMat2",
        "hijo": ["resMat"],
        "cat": "C",
        "nombre":"Resistencia de los Materiales II",
        "profesor":"Adrián Santilli",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ceinIngMat",
        "hijo": ["funQui"],
        "cat": "C",
        "nombre":"Ciencia e Ingeniería de los Materiales",
        "profesor":"Manuel Vega Utrera",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "labInd2",
        "hijo": ["labInd"],
        "cat": "E",
        "nombre":"Laboratorio II Industrial",
        "profesor":"Marcelo Castelli",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "contYcost",//falta responsable
        "hijo": [],
        "cat": "G",
        "nombre":"Contabilidad y Costos",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper2",
        "hijo": ["ivestOper"],
        "cat": "C",
        "nombre":"Investigacion Operativa II",
        "profesor":"Claudio Ruibal",
        "creditos":"6",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "Electrotecnia1",
        "hijo": ["electroMag"],
        "cat": "C",
        "nombre":"Electrotecnia I",
        "profesor":"Mauricio Riera",
        "creditos":"7,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "mecFludis",
        "hijo": ["analisis3", "pasantia1", "termodinamica"],
        "cat": "E",
        "nombre":"Mecánica de los Fluidos",
        "profesor":"Gerardo Beltrame",
        "creditos":"7,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "Metalurgia",
        "hijo": ["ceinIngMat"],
        "cat": "E",
        "nombre":"Metalurgia",
        "profesor":"Manuel Vega Utrera",
        "creditos":"6",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G",
        "nombre":"Cuestiones de Teología",
        "profesor":"Juan Carlos Carrasco",
        "creditos":"4,5",
        "semestre":"VI",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G",
        "nombre":"Gestión de Calidad",
        "profesor":"Darío Alentorn",
        "creditos":"4,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "operProd1",
        "hijo": ["ivestOper"],
        "cat": "E",
        "nombre":"Organizacíon de la Producción I",
        "profesor":"Martín Tanco",
        "creditos":"4,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "Electrotecnia2",
        "hijo": ["Electrotecnia1"],
        "cat": "E",
        "nombre":"Electrotecnia II",
        "profesor":"Mauricio Riera",
        "creditos":"7,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia2",//no se necesitan datos quisas descripcion
        "hijo": [],
        "cat": "G",
        "nombre":"Pasantia 2",
        "profesor":"",
        "creditos":"",
        "semestre":"VII",
        "dicta":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "transfCalor",
        "hijo": ["termodinamica"],
        "cat": "E",
        "nombre":"Transferencia de Calor",
        "profesor":"Miguel Baldriz Chouhy",
        "creditos":"4,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingAmbiental",
        "hijo": [],
        "cat": "C",
        "nombre":"Ingeniería Ambiental",
        "profesor":"Viviana Rocco",
        "creditos":"4,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "maq1",
        "hijo": ["mecFludis", "mecanica2"],
        "cat": "E",
        "nombre":"Máquinas I",
        "profesor":"Marcelo Schimchak",
        "creditos":"7,5",
        "semestre":"VII",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },

    {
        "id": "maq2",
        "hijo": ["pasantia2", "transfCalor"],
        "cat": "E",
        "nombre":"Máquinas II",
        "profesor":"Miguel Baldriz Chouhy",
        "creditos":"6",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "Electronica",
        "hijo": ["electroMag"],
        "cat": "C",
        "nombre":"Electrónica",
        "profesor":"",
        "creditos":"7,5",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prosUnitarios",
        "hijo": ["funQui"],
        "cat": "E",
        "nombre":"Procesos Unitarios",
        "profesor":"Yamandú Rodríguez",
        "creditos":"6",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "labInd3",
        "hijo": ["labInd2"],
        "cat": "E",
        "nombre":"Laboratorio III Industrial",
        "profesor":"Marcelo Castelli",
        "creditos":"6",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 6",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G",
        "nombre":"Ciencias Humanas II",
        "profesor":"Silvia Facal",
        "creditos":"4,5",
        "semestre":"VIII",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "autoControlIndustrial",
        "hijo": ["Electronica"],
        "cat": "E",
        "nombre":"Automatización y control industrial",
        "profesor":"Ricardo Gonzalez",
        "creditos":"6",
        "semestre":"IX",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "diseElementMaquinas",
        "hijo": ["resMat2"],
        "cat": "E",
        "nombre":"Diseño de Elementos de Máquinas",
        "profesor":"Oliver Kraus",
        "creditos":"7,5",
        "semestre":"IX",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia3",//no necesitamos datos capas alguna descripcion
        "hijo": [],
        "cat": "G",
        "nombre":"Pasantia 3",
        "profesor":"",
        "creditos":"",
        "semestre":"IX",
        "dicta":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "maq3",
        "hijo": ["maq2"],
        "cat": "E",
        "nombre":"Máquinas III",
        "profesor":"Miguel Angel Causa y Hector Tosar",
        "creditos":"7,5",
        "semestre":"IX",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "proyInven",//ver que poner con la exoneracion
        "hijo": ["contYcost"],
        "cat": "G",
        "nombre":"Proyectos de Inversión ",
        "profesor":"Marcos Rey",
        "creditos":"4,5",
        "semestre":"IX",
        "dicta":"Se dicta en semestre impar",
        "exonerable":"Se exonera totalmente",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "proyInd",//ver que poner con la exoneracion
        "hijo": ["Electrotecnia2", "maq3"],
        "cat": "E",
        "nombre":"Proyecto Ingeniería Industrial",
        "profesor":"Miguel Angel Causa, Juan Martínez Galán y Marcelo Castelli",
        "creditos":"24",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"No es exonerable",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G",
        "nombre":"Elementos de Gestión Empresarial ",
        "profesor":"Fernando Requena",
        "creditos":"6",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "gestiProy",//Probablemente mal profesor
        "hijo": ["proyInven"],
        "cat": "G",
        "nombre":"Gestión de Proyectos",
        "profesor":"Viviana Rocco",
        "creditos":"4,5",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "etica",
        "hijo": ["ch1"],
        "cat": "G",
        "nombre":"Ética Profesional",
        "profesor":"Manuel Vega Utrera y Juan Carlos Carrasco",
        "creditos":"6",
        "semestre":"X",
        "dicta":"Se dicta en semestre par",
        "exonerable":"Se exonera totalmente con nota 8",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cets",
        "hijo": [],
        "cat": "",
        "nombre":"CETS/IDIOMAS/MLE",
        "creditos":"18",
        "descripcion":""
    }

];


let materiasinf=[
    {
        "id": "analisis2",
        "hijo": ["analisis1"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analisis1",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal1",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "fisica1",//falta datos exoneracion
        "hijo": [],
        "cat": "G",
        "nombre":"Física I",
        "profesor":"Juan Pablo Fossati",
        "creditos":"7,5",
        "semestre":"I",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intRob",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intIng",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gal2",
        "hijo": ["gal1"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "logica",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdig1",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prog1",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "caluclo",
        "hijo": ["analisis2", "gal2"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "matdis",
        "hijo": ["analisis1", "gal1"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prog2",
        "hijo": ["prog1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "bbdd",
        "hijo": ["prog1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdig2",
        "hijo": ["sisdig1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch1",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "prob",
        "hijo": ["analisis2"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "analgo",
        "hijo": ["prog2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "bbdd2",
        "hijo": ["bbdd1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic1",
        "hijo": ["prog2"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "eco",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "comProf",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper",
        "hijo": ["prob"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "arqapp",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia1",
        "hijo": [],
        "cat": "G",
        "nombre":"Pasantia 1",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisop",
        "hijo": ["sisdig2"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic2",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "contYcost",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "teoComp",
        "hijo": ["matdis"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ivestOper2",
        "hijo": ["ivestOper"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingsoft",
        "hijo": ["tic1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "redes1",
        "hijo": ["sisdig2", "pasantia1"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic3",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "teologia",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "gestCal",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ingsoft2",
        "hijo": ["ingsoft"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "infrainfo",
        "hijo": ["redes1"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "sisdis",
        "hijo": ["redes1"],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "tic4",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "derechotel",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },

    {
        "id": "metoinv",
        "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic5",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "ch2",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "audicontrol",
        "hijo": ["ingsoft"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "intelnegocios",
        "hijo": ["bbdd2"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "pasantia3",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "tic6",
        "hijo": [],
        "cat": "C",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "proyInven",
        "hijo": ["contYcost"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },

    {
        "id": "proyInf",
        "hijo": ["analgo", "redes1","ingsoft"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "elemGestion",
        "hijo": ["eco"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""

    },
    {
        "id": "gestiProy",
        "hijo": ["proyInven"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "etica",
        "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"",
        "semestre":"",
        "exonerable":"",// "se exonerea parcialmente,el practico,con nota tal",se exonera totalmente con nota tal,no es exonerable
        "descripcion":""
    },
    {
        "id": "cets",
        "hijo": [],
        "cat": "G",
        "nombre":"CETS/IDIOMAS/MLE",
        "creditos":"18",
        "descripcion":""
    }
];
let materiasCienciaDatos=[
    {
    "id": "Calculo Basico",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Algebra",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"7.5",
        "semestre":"I",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Principios De Administracion",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Comunicacion Profesional",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Introduccion Analitica Empresarial",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"I",
        "exonerable":"",
        "descripcion":""
    },//SEM2
     {
    "id": "Introduccion a la Economia",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"II",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Calculo",
    "hijo": ["Calculo Basico"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Antropologia",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"II",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Programacion Analitica",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"9",
        "semestre":"II",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Introduccion a la Contabilidad",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"7.5",
        "semestre":"II",
        "exonerable":"",
        "descripcion":""
    },//SEM3
     {
    "id": "Diseño de base de datos 1",
    "hijo": ["Programacion Analitica"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"7.5",
        "semestre":"III",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Análisis Financiero Internacional",
    "hijo": ["Introduccion a la Contabilidad"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"7.5",
        "semestre":"III",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Probabilidad",
    "hijo": ["Calculo"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"7.5",
        "semestre":"III",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Introducción a la Ciencia de Datos",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"III",
        "exonerable":"",
        "descripcion":""
    },//SEM4
     {
    "id": "Estadística I",
    "hijo": ["Probabilidad"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"9",
        "semestre":"IV",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Matemática Financiera",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"IV",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Inteligencia de Negocios",
    "hijo": ["Diseño de base de datos 1"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"IV",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Ética Profesional I",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"IV",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Estrategia de Dirección I",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"IV",
        "exonerable":"",
        "descripcion":""
    },//SEM5
     {
    "id": "Estadística II",
    "hijo": ["Probabilidad"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Investigación operativa I",
    "hijo": ["Probabilidad","Estadística I"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Tecnologías de Avanzada",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Aprendizaje Automático",
    "hijo": ["Programacion Analitica"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "exonerable":"",
        "descripcion":""
    },
     {
    "id": "Investigación de mercado",
    "hijo": ["Práctica Profesional I"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"V",
        "exonerable":"",
        "descripcion":""
    },//SEM6
    {
    "id": "Cuestiones de Teología",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Finanzas I",
    "hijo": ["Matemática Financiera"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"8",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Econometría I",
    "hijo": ["Estadística II","Algebra"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"9",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Analítica de Negocios",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Gestión de sistemas de información",
    "hijo": ["Introduccion Analitica Empresarial"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },//SEM7
    {
    "id": "Ética Profesional II",
    "hijo": ["Ética Profesional I"],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"VII",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Proyectos de Inversión",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"VII",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Pasantía Social",
    "hijo": [],
        "cat": "G",
        "nombre":"",
        "profesor":"",
        "creditos":"1.5",
        "semestre":"VII",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Contabilidad de Gestión",
    "hijo": ["Introduccion a la Contabilidad"],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"6",
        "semestre":"VI",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Marketing Digital",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"VII",
        "exonerable":"",
        "descripcion":""
    },
    {
    "id": "Derecho Telemático",
    "hijo": [],
        "cat": "E",
        "nombre":"",
        "profesor":"",
        "creditos":"4.5",
        "semestre":"VII",
        "exonerable":"",
        "descripcion":""
    },//SEM8
    {
        "id": "PROYECTO DE FIN DE CARRERA",
        "hijo": [],
            "cat": "E",
            "nombre":"",
            "profesor":"",
            "creditos":"30",
            "semestre":"VIII",
            "exonerable":"",
            "descripcion":""
        },
    


]





htmlid= document.getElementsByTagName("html")[0].id;
var materias
if(htmlid=="Informatica"){
 materias= materiasinf;
}
else if(htmlid =="Industrial"){
materias = materiasind;
}
else if (htmlid =="Civil"){
    materias=materiasciv;
}
else if( htmlid=="Telematica"){
    materias=materiastel;
}
else if( htmlid=="Telematica"){
    materias=materiastel;
}
else if( htmlid=="cienciaDatos"){
    materias=materiasCienciaDatos;
}

const mouseTarget = document.getElementsByClassName("btn");
makeGird();
addCredit();

function addCredit(){
    for(i =0;i<materias.length;i++){
        document.getElementById(materias[i].id).innerHTML+=  "<br> ("+ materias[i].creditos +") ";
    }
}

function makeGird(){
    
    if(htmlid=="cienciaDatos"){
       
    
    for(i =0;i<materias.length;i++){
       let mycol = document.createElement("button");
       mycol.className ="btn btn-light" ;
       mycol.innerHTML=materias[i].id;
       mycol.id=materias[i].id;
       if (materias[i].semestre=="I"){
            document.getElementById("sem1").appendChild(mycol);
       }
       if (materias[i].semestre=="II"){
        document.getElementById("sem2").appendChild(mycol);
      
    }
    if (materias[i].semestre=="III"){
        document.getElementById("sem3").appendChild(mycol);
      
    }
    if (materias[i].semestre=="IV"){
        document.getElementById("sem4").appendChild(mycol);
      
    }
    if (materias[i].semestre=="V"){
        document.getElementById("sem5").appendChild(mycol);
      
    }
    if (materias[i].semestre=="VI"){
        document.getElementById("sem6").appendChild(mycol);
      
    }
    if (materias[i].semestre=="VII"){
        document.getElementById("sem7").appendChild(mycol);
      
    }
    if (materias[i].semestre=="VIII"){
        document.getElementById("sem8").appendChild(mycol);
      
    }
}
}
}

var staticbool=true;
var isfiltred=false;

function filtro(id){
    var a;
    if (id=="filtroE") {
        isfiltred=true;
        a="E";
    }
    else if(id=="filtroG"){
        a="G"

        isfiltred=true;
    }
    else if(id=="filtroC"){
        a="C"
        isfiltred=true;

    }
    for (i=0; i<materias.length; i++){

        if(true){
        if (materias[i].cat=="E" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(0,200,0,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(033,231,0,0.5)";

        }
        else if (materias[i].cat=="G" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(23,162,184,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(58,176,195,0.5)";

        }
        else if (materias[i].cat=="C" && materias[i].cat==a){
            document.getElementById(materias[i].id).style.backgroundColor="rgba(255,190,7,0.5)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.2rem rgba(255,231,130,0.5)";

        }
        else if(!materias[i].cat !== a){
            document.getElementById(materias[i].id).style.backgroundColor = "rgb(204, 204, 204)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.0)";
        }
      

        }
        else if (id=="todo") {

            document.getElementById(materias[i].id).style.backgroundColor = "rgb(204, 204, 204)";
            document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.0)";

        }

    }
    if (id=="todo"){
        isfiltred=false;
    staticbool=!staticbool;
    }
}
//----

function pintar(idpadre) {
if(!isfiltred){
    for (i = 0; i < materias.length; i++) {
        
        if (materias[i].id === idpadre) {

            for (j = 0; j < materias[i].hijo.length; j++) {
                document.getElementById(idpadre).style.backgroundColor ="#e2e6ea"
                if (materias[i].hijo[j] !== null) {

                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "rgba(255,99,71,0.5)";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.2rem rgba(220,20,60,0.5)";
                }
             
            }
        }
    }
}
}
function despintar(idpadre) {
if (!isfiltred ) {
    for (i = 0; i < materias.length; i++) {
        if (materias[i].id === idpadre)
            for (j = 0; j < materias[i].hijo.length; j++) {

                if (materias[i].hijo[j] !== null){

                    document.getElementById(materias[i].id).style.backgroundColor = "rgb(204, 204, 204)";
                    document.getElementById(materias[i].id).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
                    document.getElementById(materias[i].hijo[j]).style.backgroundColor = "rgb(204, 204, 204)";
                    document.getElementById(materias[i].hijo[j]).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
                }
            }
    }
}

}

function setValue(value) {
    document.getElementById('value').value = value;
}



/*function informar(idtemp) {
    var i, l, options = [{
            value: 'first',
            text: 'First'
        }, {
            value: 'second',
            text: 'Second'
        }],
        newWindow = window.open("", null, "height=200,width=400,status=yes,toolbar=no,menubar=no,location=no");

    newWindow.document.write("<select onchange='window.opener.setValue(this.value);'>");
    for(i=0,l=options.length; i<l; i++) {
        newWindow.document.write("<option value='"+options[i].value+"'>");
        newWindow.document.write(options[i].text);
        newWindow.document.write("</option>");
    }
    newWindow.document.write("</select>");
}*/
function informar(idpadre) {
if (idpadre != "cets"){

    for (i = 0; i < materias.length; i++) {

        if (materias[i].id === idpadre) {
        	var btnAbrirPopup = document.getElementById('idpadre'),
        	overlay = document.getElementById('overlay'),
        	popup = document.getElementById('popup'),
            popup2 = document.getElementById('popup2')
        	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
            btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
        	overlay.classList.add('active');
        	popup.classList.add('active');
            stringPrevias = " ";
            var hij=0;
            for (j = 0; j < materias.length; j++){
                for (k = 0; k < materias[i].hijo.length; k++){
                    if(materias[j].id === materias[i].hijo[k]){
                        if(hij === 0){
                            stringPrevias=stringPrevias+" "+materias[j].nombre;
                        }
                        else{
                            stringPrevias=stringPrevias+" , "+materias[j].nombre;
                        }
                        hij++
                    }
                }
            }
            if(stringPrevias===" "){stringPrevias= " No tiene previas"}



            if(materias[i].profesor === "" && materias[i].dicta === "" && stringPrevias === " No tiene previas" && materias[i].exonerable === ""){}
            if(materias[i].id === "pasantia1" || materias[i].id === "pasantia2" || materias[i].id === "pasantia3"){
                popup.innerHTML="<button href=\"#\" id=\"btn-cerrar-popup\" class=\"btn-cerrar-popup\" onclick=\"cerrar()\"><i class=\"fa fa-times\"></i></button>\n" +
                    "          <h3>"+ materias[i].nombre+"</h3>\n" +
                    "          <span>Cantidad de Creditos: "+materias[i].creditos +"</span>\n" +
                    "<div></div>"+
                    "          <span>Descripcion: "+materias[i].descripcion+"</span>\n"
                ;

            }
            else{
            	popup.innerHTML="<button href=\"#\" id=\"btn-cerrar-popup\" class=\"btn-cerrar-popup\" onclick=\"cerrar()\"><i class=\"fa fa-times\"></i></button>\n" +
                    "          <h3 style='Color: rgb(37,50,104)'>"+ materias[i].nombre+"</h3>\n" +

                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Profesor: </span>" +"<span style='Color: rgb(37,50,134)'>"+materias[i].profesor+"</span>\n" +
                                "<div></div>"+
                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Cantidad de Creditos: </span>" +"<span style='Color: rgb(37,50,134)'>"+materias[i].creditos +"</span>\n" +
                    "<div></div>"+
                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Semestre: </span>" +"<span style='Color: rgb(37,50,134)'>"+materias[i].dicta +"</span>\n" +
                    "<div></div>"+
                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Previas:</span>" +"<span style='Color: rgb(37,50,134)'>"+stringPrevias+"</span>\n" +
                    "<div></div>"+
                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Exonerable: </span>" +"<span style='Color: rgb(37,50,134)'>"+materias[i].exonerable+"</span>\n" +
                    "<div></div>"+
                    "          <span style='font-weight: bold; Color: rgb(37,50,104)'>Descripcion: </span>" +"<span style='Color: rgb(37,50,134)'>"+materias[i].descripcion+"</span>\n"
                ;
            }

        }

    }
}
//if (idpadre == "cets") {

		/*	var btnAbrirPopup = document.getElementById('idpadre'),
        	overlay2 = document.getElementById('overlay2'),
        	popup2 = document.getElementById('popup2'),
        	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
        	overlay2.classList.add('active');

*/

//}
}
function cerrar(){

	overlay.classList.remove("active");
	popup.classList.remove("active")

}

function cets(){

            overlay2 = document.getElementById('overlay2'),
            popup2 = document.getElementById('popup2'),
            btnCerrarPopup = document.getElementById('btn-cerrar-popup');
            overlay2.classList.add('active');
            popup2.classList.add('active');
    popup2.innerHTML="<button href=\"#\" id=\"btn-cerrar-popup2\" class=\"btn-cerrar-popup\" onclick=\"cerrar2()\"><i class=\"fa fa-times\"></i></button>\n" +
        "          <h3 style='Color: rgb(37,50,104)'>"+ "CETS/IDIOMAS/LMS"+"</h3>\n"
    ;


}
function cerrar2(){

    overlay.classList.remove("active");
    popup.classList.remove("active")
    overlay2.classList.remove("active");
    popup2.classList.remove("active")

}
/*btnCerrarPopup.addEventListener('click',function()){
	overlay.classList.remove('active');
}*/



/*
function loop(){
  addEventListener("mousenter",function (event) {
    pintar( event.getSource().id)},false);


  addEventListener("mouseleave",function (event) {

    despintar( document.event.getcSource().id)},false);
  for (i = 0; i < materias.length; i++) {
    console.log("sale")
    if (materias[i].id === idpadre) {
      document.getElementById(materias[i].hijo).style.backgroundColor = "rgba(248,249,250,1)";
      document.getElementById(materias[i].hijo).style.boxShadow = "0px 0px 0px 0.0rem rgba(216,217,219,0.5)";
    }
  }
}
loop()

*/

idPadre = null;

for (let index = 0; index < mouseTarget.length; index++) {
 
    mouseTarget[index].addEventListener('mouseenter', event => {
        pintar(mouseTarget[index].id);
        
      })
      mouseTarget[index].addEventListener('mouseleave', event => {
        despintar(mouseTarget[index].id);
        
      })

      mouseTarget[index].addEventListener('click', event => {
        informar(mouseTarget[index].id);
        
      })
    
}



 //0
 /*
mouseTarget[0].addEventListener("mouseenter", e => {
    pintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("mouseleave", e => {
    despintar(mouseTarget[0].id);
});
mouseTarget[0].addEventListener("click", event => {
    informar(mouseTarget[0].id);
});
//1
mouseTarget[1].addEventListener("mouseenter", e => {
    pintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("mouseleave", e => {
    despintar(mouseTarget[1].id);
});
mouseTarget[1].addEventListener("click", event => {
    informar(mouseTarget[1].id);
});
//6
mouseTarget[6].addEventListener("mouseenter", e => {
    pintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("mouseleave", e => {
    despintar(mouseTarget[6].id);
});
mouseTarget[6].addEventListener("click", event => {
    informar(mouseTarget[6].id);
});
//5
mouseTarget[5].addEventListener("mouseenter", e => {
    pintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("mouseleave", e => {
    despintar(mouseTarget[5].id);
});
mouseTarget[5].addEventListener("click", event => {
    informar(mouseTarget[5].id);
});
//4
mouseTarget[4].addEventListener("mouseenter", e => {
    pintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("mouseleave", e => {
    despintar(mouseTarget[4].id);
});
mouseTarget[4].addEventListener("click", event => {
    informar(mouseTarget[4].id);
});
//2
    mouseTarget[2].addEventListener("mouseenter", e => {
        pintar(mouseTarget[2].id);
    });
    mouseTarget[2].addEventListener("mouseleave", e => {
        despintar(mouseTarget[2].id);
    });
    mouseTarget[2].addEventListener("click", event => {
        informar(mouseTarget[2].id);
    });
//3
    mouseTarget[3].addEventListener("mouseenter", e => {
        pintar(mouseTarget[3].id);
    });
    mouseTarget[3].addEventListener("mouseleave", e => {
        despintar(mouseTarget[3].id);
    });
    mouseTarget[3].addEventListener("click", event => {
        informar(mouseTarget[3].id);
    });
//7
mouseTarget[7].addEventListener("mouseenter", e => {
    pintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("mouseleave", e => {
    despintar(mouseTarget[7].id);
});
mouseTarget[7].addEventListener("click", event => {
    informar(mouseTarget[7].id);
});
//8
mouseTarget[8].addEventListener("mouseenter", e => {
    pintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("mouseleave", e => {
    despintar(mouseTarget[8].id);
});
mouseTarget[8].addEventListener("click", event => {
    informar(mouseTarget[8].id);
});
//9
mouseTarget[9].addEventListener("mouseenter", e => {
    pintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("mouseleave", e => {
    despintar(mouseTarget[9].id);
});
mouseTarget[9].addEventListener("click", event => {
    informar(mouseTarget[9].id);
});
//10
mouseTarget[10].addEventListener("mouseenter", e => {
    pintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("mouseleave", e => {
    despintar(mouseTarget[10].id);
});
mouseTarget[10].addEventListener("click", event => {
    informar(mouseTarget[10].id);
});
//11
mouseTarget[11].addEventListener("mouseenter", e => {
    pintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("mouseleave", e => {
    despintar(mouseTarget[11].id);
});
mouseTarget[11].addEventListener("click", event => {
    informar(mouseTarget[11].id);
});
//12
mouseTarget[12].addEventListener("mouseenter", e => {
    pintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("mouseleave", e => {
    despintar(mouseTarget[12].id);
});
mouseTarget[12].addEventListener("click", event => {
    informar(mouseTarget[12].id);
});
//13
mouseTarget[13].addEventListener("mouseenter", e => {
    pintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("mouseleave", e => {
    despintar(mouseTarget[13].id);
});
mouseTarget[13].addEventListener("click", event => {
    informar(mouseTarget[13].id);
});
//14
mouseTarget[14].addEventListener("mouseenter", e => {
    pintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("mouseleave", e => {
    despintar(mouseTarget[14].id);
});
mouseTarget[14].addEventListener("click", event => {
    informar(mouseTarget[14].id);
});
//15
mouseTarget[15].addEventListener("mouseenter", e => {
    pintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("mouseleave", e => {
    despintar(mouseTarget[15].id);
});
mouseTarget[15].addEventListener("click", event => {
    informar(mouseTarget[15].id);
});
//16
mouseTarget[16].addEventListener("mouseenter", e => {
    pintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("mouseleave", e => {
    despintar(mouseTarget[16].id);
});
mouseTarget[16].addEventListener("click", event => {
    informar(mouseTarget[16].id);
});
//17
mouseTarget[17].addEventListener("mouseenter", e => {
    pintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("mouseleave", e => {
    despintar(mouseTarget[17].id);
});
mouseTarget[17].addEventListener("click", event => {
    informar(mouseTarget[17].id);
});
//18
mouseTarget[18].addEventListener("mouseenter", e => {
    pintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("mouseleave", e => {
    despintar(mouseTarget[18].id);
});
mouseTarget[18].addEventListener("click", event => {
    informar(mouseTarget[18].id);
});
//19
mouseTarget[19].addEventListener("mouseenter", e => {
    pintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("mouseleave", e => {
    despintar(mouseTarget[19].id);
});
mouseTarget[19].addEventListener("click", event => {
    informar(mouseTarget[19].id);
});
//20
mouseTarget[20].addEventListener("mouseenter", e => {
    pintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("mouseleave", e => {
    despintar(mouseTarget[20].id);
});
mouseTarget[20].addEventListener("click", event => {
    informar(mouseTarget[20].id);
});
//21
mouseTarget[21].addEventListener("mouseenter", e => {
    pintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("mouseleave", e => {
    despintar(mouseTarget[21].id);
});
mouseTarget[21].addEventListener("click", event => {
    informar(mouseTarget[21].id);
});
//22
mouseTarget[22].addEventListener("mouseenter", e => {
    pintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("mouseleave", e => {
    despintar(mouseTarget[22].id);
});
mouseTarget[22].addEventListener("click", event => {
    informar(mouseTarget[22].id);
});
//23
mouseTarget[23].addEventListener("mouseenter", e => {
    pintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("mouseleave", e => {
    despintar(mouseTarget[23].id);
});
mouseTarget[23].addEventListener("click", event => {
    informar(mouseTarget[23].id);
});
//24
mouseTarget[24].addEventListener("mouseenter", e => {
    pintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("mouseleave", e => {
    despintar(mouseTarget[24].id);
});
mouseTarget[24].addEventListener("click", event => {
    informar(mouseTarget[24].id);
});
//25
mouseTarget[25].addEventListener("mouseenter", e => {
    pintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("mouseleave", e => {
    despintar(mouseTarget[25].id);
});
mouseTarget[25].addEventListener("click", event => {
    informar(mouseTarget[25].id);
});
//26
mouseTarget[26].addEventListener("mouseenter", e => {
    pintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("mouseleave", e => {
    despintar(mouseTarget[26].id);
});
mouseTarget[26].addEventListener("click", event => {
    informar(mouseTarget[26].id);
});
//27
mouseTarget[27].addEventListener("mouseenter", e => {
    pintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("mouseleave", e => {
    despintar(mouseTarget[27].id);
});
mouseTarget[27].addEventListener("click", event => {
    informar(mouseTarget[27].id);
});
//28
mouseTarget[28].addEventListener("mouseenter", e => {
    pintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("mouseleave", e => {
    despintar(mouseTarget[28].id);
});
mouseTarget[28].addEventListener("click", event => {
    informar(mouseTarget[28].id);
});
//29
mouseTarget[29].addEventListener("mouseenter", e => {
    pintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("mouseleave", e => {
    despintar(mouseTarget[29].id);
});
mouseTarget[29].addEventListener("click", event => {
    informar(mouseTarget[29].id);
});
//30
mouseTarget[30].addEventListener("mouseenter", e => {
    pintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("mouseleave", e => {
    despintar(mouseTarget[30].id);
});
mouseTarget[30].addEventListener("click", event => {
    informar(mouseTarget[30].id);
});
//31
mouseTarget[31].addEventListener("mouseenter", e => {
    pintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("mouseleave", e => {
    despintar(mouseTarget[31].id);
});
mouseTarget[31].addEventListener("click", event => {
    informar(mouseTarget[31].id);
});
//32
mouseTarget[32].addEventListener("mouseenter", e => {
    pintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("mouseleave", e => {
    despintar(mouseTarget[32].id);
});
mouseTarget[32].addEventListener("click", event => {
    informar(mouseTarget[32].id);
});
//33
mouseTarget[33].addEventListener("mouseenter", e => {
    pintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("mouseleave", e => {
    despintar(mouseTarget[33].id);
});
mouseTarget[33].addEventListener("click", event => {
    informar(mouseTarget[33].id);
});
//34
mouseTarget[34].addEventListener("mouseenter", e => {
    pintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("mouseleave", e => {
    despintar(mouseTarget[34].id);
});
mouseTarget[34].addEventListener("click", event => {
    informar(mouseTarget[34].id);
});
//35
mouseTarget[35].addEventListener("mouseenter", e => {
    pintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("mouseleave", e => {
    despintar(mouseTarget[35].id);
});
mouseTarget[35].addEventListener("click", event => {
    informar(mouseTarget[35].id);
});
//36
mouseTarget[36].addEventListener("mouseenter", e => {
    pintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("mouseleave", e => {
    despintar(mouseTarget[36].id);
});
mouseTarget[36].addEventListener("click", event => {
    informar(mouseTarget[36].id);
});
//37
mouseTarget[37].addEventListener("mouseenter", e => {
    pintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("mouseleave", e => {
    despintar(mouseTarget[37].id);
});
mouseTarget[37].addEventListener("click", event => {
    informar(mouseTarget[37].id);
});
//38
mouseTarget[38].addEventListener("mouseenter", e => {
    pintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("mouseleave", e => {
    despintar(mouseTarget[38].id);
});
mouseTarget[38].addEventListener("click", event => {
    informar(mouseTarget[38].id);
});
//39
if (materias != materiasCienciaDatos){
mouseTarget[39].addEventListener("mouseenter", e => {
    pintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("mouseleave", e => {
    despintar(mouseTarget[39].id);
});
mouseTarget[39].addEventListener("click", event => {
    informar(mouseTarget[39].id);
});

//40
mouseTarget[40].addEventListener("mouseenter", e => {
    pintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("mouseleave", e => {
    despintar(mouseTarget[40].id);
});
mouseTarget[40].addEventListener("click", event => {
    informar(mouseTarget[40].id);
});
//41
mouseTarget[41].addEventListener("mouseenter", e => {
    pintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("mouseleave", e => {
    despintar(mouseTarget[41].id);
});
mouseTarget[41].addEventListener("click", event => {
    informar(mouseTarget[41].id);
});
//42
mouseTarget[42].addEventListener("mouseenter", e => {
    pintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("mouseleave", e => {
    despintar(mouseTarget[42].id);
});
mouseTarget[42].addEventListener("click", event => {
    informar(mouseTarget[42].id);
});
//43
mouseTarget[43].addEventListener("mouseenter", e => {
    pintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("mouseleave", e => {
    despintar(mouseTarget[43].id);
});
mouseTarget[43].addEventListener("click", event => {
    informar(mouseTarget[43].id);
});
//44
mouseTarget[44].addEventListener("mouseenter", e => {
    pintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("mouseleave", e => {
    despintar(mouseTarget[44].id);
});
mouseTarget[44].addEventListener("click", event => {
    informar(mouseTarget[44].id);
});
//45
mouseTarget[45].addEventListener("mouseenter", e => {
    pintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("mouseleave", e => {
    despintar(mouseTarget[45].id);
});
mouseTarget[45].addEventListener("click", event => {
    informar(mouseTarget[45].id);
});
//46
mouseTarget[46].addEventListener("mouseenter", e => {
    pintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("mouseleave", e => {
    despintar(mouseTarget[46].id);
});
mouseTarget[46].addEventListener("click", event => {
    informar(mouseTarget[46].id);
});
//47
mouseTarget[47].addEventListener("mouseenter", e => {
    pintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("mouseleave", e => {
    despintar(mouseTarget[47].id);
});
mouseTarget[47].addEventListener("click", event => {
    informar(mouseTarget[47].id);
});
//48
mouseTarget[48].addEventListener("mouseenter", e => {
    pintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("mouseleave", e => {
    despintar(mouseTarget[48].id);
});
mouseTarget[48].addEventListener("click", event => {
    informar(mouseTarget[48].id);
});
//49
mouseTarget[49].addEventListener("mouseenter", e => {
    pintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("mouseleave", e => {
    despintar(mouseTarget[49].id);
});
mouseTarget[49].addEventListener("click", event => {
    informar(mouseTarget[49].id);
});
//50
mouseTarget[50].addEventListener("mouseenter", e => {
    pintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("mouseleave", e => {
    despintar(mouseTarget[50].id);
});
mouseTarget[50].addEventListener("click", event => {
    informar(mouseTarget[50].id);
});
//51
mouseTarget[51].addEventListener("mouseenter", e => {
    pintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("mouseleave", e => {
    despintar(mouseTarget[51].id);
});
mouseTarget[51].addEventListener("click", event => {
    informar(mouseTarget[51].id);
});
//52
mouseTarget[52].addEventListener("mouseenter", e => {
    pintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("mouseleave", e => {
    despintar(mouseTarget[52].id);
});
mouseTarget[52].addEventListener("click", event => {
    informar(mouseTarget[52].id);
});
//53
mouseTarget[53].addEventListener("mouseenter", e => {
    pintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("mouseleave", e => {
    despintar(mouseTarget[53].id);
});
mouseTarget[53].addEventListener("click", event => {
    informar(mouseTarget[53].id);
});
//54
mouseTarget[54].addEventListener("mouseenter", e => {
    pintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("mouseleave", e => {
    despintar(mouseTarget[54].id);
});
mouseTarget[54].addEventListener("click", event => {
    informar(mouseTarget[54].id);
});
//55

mouseTarget[55].addEventListener("mouseenter", e => {
    pintar(mouseTarget[55].id);
});
mouseTarget[55].addEventListener("mouseleave", e => {
    despintar(mouseTarget[55].id);
});

mouseTarget[55].addEventListener("click", event => {
    informar(mouseTarget[55].id);
});
if(htmlid=="Industrial" || htmlid =="Civil" || htmlid =="Telematica"){

//56
    mouseTarget[56].addEventListener("mouseenter", e => {
        pintar(mouseTarget[56].id);
    });
    mouseTarget[56].addEventListener("mouseleave", e => {
        despintar(mouseTarget[56].id);
    });
    mouseTarget[56].addEventListener("click", event => {
        informar(mouseTarget[56].id);
    });
//57
    if (htmlid=="Industrial" || htmlid =="Civil"){
    mouseTarget[57].addEventListener("mouseenter", e => {
        pintar(mouseTarget[57].id);
    });
    mouseTarget[57].addEventListener("mouseleave", e => {
        despintar(mouseTarget[57].id);
    });
    mouseTarget[57].addEventListener("click", event => {
        informar(mouseTarget[57].id);
    });

    //58
    mouseTarget[58].addEventListener("mouseenter", e => {
        pintar(mouseTarget[58].id);
    });
    mouseTarget[58].addEventListener("mouseleave", e => {
        despintar(mouseTarget[58].id);
    });
    mouseTarget[58].addEventListener("click", event => {
        informar(mouseTarget[58].id);
    });}


}
}*/


document.getElementById("filtroE").addEventListener("click",e=>{filtro("filtroE")})

document.getElementById("filtroG").addEventListener("click",e=>{filtro("filtroG")})

document.getElementById("filtroC").addEventListener("click",e=>{filtro("filtroC")})

document.getElementById("todos").addEventListener("click",e=>{filtro("todo")})

