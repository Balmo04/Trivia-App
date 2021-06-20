const createQuestion = (questionList, answerList, goodAnswerList) =>{
    const structure ={
        questions: questionList,
        answers: answerList,    
        correctAnswers: goodAnswerList,
    }
    return structure;
}

/*Modo facil*/
const arrayQuestionE=[
    "¿Cuándo empezó la Primera Guerra Mundial?",
    "¿Cuánto vale el número pi?",
    "¿Cuántas patas tiene la araña?",
    "¿Cual es país más poblado de la Tierra?",
    "¿Cuál es el metal más caro del mundo?",
    "¿En qué año comenzó la II Guerra Mundial?",
    "El triángulo que tiene sus tres lados iguales", 
    "¿Cuántos corazones tienen los pulpos?",
    "¿Quién ganó el mundial de 2014?",
    "¿Dónde se encuentra la famosa Torre Eiffel?",
];
const arrrayGoodAnswerE=[
    "1914",
    "3.1416",
    "8",
    "China",
    "Rodio",
    "1939",
    "Equilatero",
    "3",
    "Brazil",
    "Francia",
];
const arrayAnswerE=[
    ["1914","1916", "1920", "1917"],
    ["3.1817","3.1415","3.1416","3.1516"],
    ["6","8", "12", "10"],
    ["Japón","EE.UU","España","China"],
    ["Oro","Rodio","Plata","Cobre"],
    ["1939","1932","1949","1930"],
    ["Cuadrilátero","Equilatero","Isosceles","Escaleno"],
    ["1","2","4","3"],
    ["Colombia","Argentina","Chile","Brazil"],
    ["Francia","Ecuador","Perú","España"],
    /*

    
    */
];

/*Modo dificil*/
const arrayQuestionH=[
    "¿Quién pintó “la última cena”?",
    "¿Qué año llegó Cristóbal Colón a América?",
    "¿Cuántos años tiene un lustro?",
    "¿Cuál es el lugar más frío de la tierra?",
    "¿Cuál es el metal más caro del mundo?",
    "¿Cuál es el río más largo del mundo?",
    "¿Quién escribió La Odisea?", 
    "¿Cuál es la escritura utilizada por las personas con discapacidad visual ?",
    "¿Mozart era un genio del mundo de...?",
    "¿Cuál es el quinto planeta en el sistema solar?",
];
const arrrayGoodAnswerH=[
    "Leonardo da Vinci",
    "1492",
    "5 años",
    "La Antártida",
    "Rodio",
    "El Nilo",
    "Homero",
    "Braile",
    "LA música",
    "Júpiter",
];
const arrayAnswerH=[
    ["Miguel Angel","Rafael Sanzio", "Leonardo da Vinci", "Vincent van Gogh"],
    ["1522","1492", "1942", "1512"],
    ["100 años","10 años", "5 años", "50 años"],
    ["La Antártida","La Patagonia","El Polo Norte","Rusia"],
    ["Rodio","Oro","Plata","Cobre"],
    ["El amazonas","El Nilo","El Éufrates","Misisipi"],
    ["Pláton","Homero","Virgilio","Sócrates"],
    ["Jeroglifico","Castellano","Morce","Braile"],
    ["La música","La opera","El deporte","La medicina"],
    ["Saturno","Marte","Júpiter","Urano"],
];

const easyMode= createQuestion(arrayQuestionE, arrayAnswerE, arrrayGoodAnswerE);
const hardMode= createQuestion(arrayQuestionH, arrayAnswerH, arrrayGoodAnswerH);
