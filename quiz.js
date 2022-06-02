/*--------------OPEN ID QUIZ IN NEW CARD--------------*/

var storageIdList = localStorage.getItem("x"); //getter
console.log(storageIdList);

/*--------------QUIZ DATA--------------*/
const quizData = [
    {
      question: "Ile mamy miesięcy w roku?",
      a: "16",
      b: "12",
      c: "11",
      d: "17",
      correct: "b",
    },
    {
      question: "Ile gdzin trwa doba?",
      a: "48",
      b: "12",
      c: "22",
      d: "24",
      correct: "d",
    },
    {
      question: "Robert Lewandowski jest...?",
      a: "Trenerem",
      b: "Kucharzem",
      c: "Premierem",
      d: "Piłkarzem",
      correct: "d",
    },
    {
      question: "Elon Musk jest właścicielem...?",
      a: "Tesli",
      b: "Forda",
      c: "Citroena",
      d: "Audia",
      correct: "a",
    },
    {
      question: "Tło strony jest koloru...?",
      a: "Czarnego",
      b: "Czerwonego",
      c: "Niebieskiego",
      d: "Białego",
      correct: "d",
    },
    {
      question: "Leo...?",
      a: "Messi",
      b: "Maradona",
      c: "Ronaldo",
      d: "Lewandowski",
      correct: "a",
    },
    {
      question: "Lubię grać w...?",
      a: "Kosza",
      b: "Siate",
      c: "Hokej",
      d: "Piłkę",
      correct: "d",
    },
    {
      question: "Lewy gra w...?",
      a: "Kosza",
      b: "Siate",
      c: "Hokej",
      d: "Piłkę",
      correct: "d",
    },
    {
      question: "Nie lubię grać w...?",
      a: "Kosza",
      b: "Siate",
      c: "Hokej",
      d: "Piłkę",
      correct: "a",
    },
  ];
  
  const lenghtOfQuiz = [3,2,4]


  /*--------------QUIZ--------------*/




  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  let currentQuizData;
  let idNow;
  let valueX = 0;

  for (let index = 0; index <= storageIdList; index++){
    if(index == 0){
      idNow = lenghtOfQuiz[index];
      lenghtQuestions = lenghtOfQuiz[index];
    }
    if(index>0){
      idNow += lenghtOfQuiz[index];
      lenghtQuestions = lenghtOfQuiz[index];
      if(valueX >= 0)
      {
        //let valueAdd = 0;
        currentQuiz += lenghtOfQuiz[valueX];
        valueX++;
      }
      
    }
    console.log("test idNow " + idNow);//do testów
    console.log("test currentQuiz " + currentQuiz);//do testów
  }

  loadQuiz();
  function loadQuiz() {
  deselectAnswers();
  currentQuizData = quizData[currentQuiz];
  
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  }
  function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
  if (answerEl.checked) {
  answer = answerEl.id;
  }});
  return answer;
  }
  function deselectAnswers() {
  answerEls.forEach((answerEl) => {
  answerEl.checked = false;
  });
  }
  submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
  if (answer === quizData[currentQuiz].correct) {
  score++;
  }
  currentQuiz++;
  // if(storageIdList == 0){
  //   var idNow = numberOfQuiz[0]; 
  // }
  // if(storageIdList == 1){
  //   var idNow = numberOfQuiz[1]; 
  // }
  if (currentQuiz < idNow) {
  loadQuiz();
  } else {
  quiz.innerHTML = `
  <h2>Odpowiedziałeś/aś poprawnie ${score}/${lenghtQuestions} razy.</h2>
  <button onclick="location.reload()">Od nowa</button>
  <button class="buttonHome"><a href="index.html">Strona Główna</a></button>`;
  }}});