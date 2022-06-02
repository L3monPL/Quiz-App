var tasks = [
  {
  id: "0",
  "title": "Programowanie",
  url: "https://data.1freewallpapers.com/download/code-symbols-programming-1920x1080.jpg",
},
{
  id: "1",
  "title": "Wirtualni",
  url: "https://www.zyjmocno.com/wp-content/uploads/753396-blackboard-wallpaper.jpg",
},
{
  id: "2",
  "title": "Zwierzęta",
  url: "https://www.tapeteos.pl/data/media/384/big/zwierzeta_1920x1080_065_kroliczek.jpg",
},
];




/*--------------LIST GENERATE OF QUIZ--------------*/

let cardContainer;

let createTaskCard = (task) => {

    let card = document.createElement('div');
    card.className = 'leftContainer';

    let cardBody = document.createElement('div');
    cardBody.className = 'quizBox';

    let title = document.createElement('a');
    //title.href = 'quiz.html';
    title.id = task.id;
    title.onclick = function () {
      var showId = task.id;
      console.log(showId);
      localStorage.setItem("x", showId); //setter
  };
    title.href = 'quiz.html';


    let imageCard = document.createElement('img');
    imageCard.className = 'imgBoxQuiz';
    imageCard.src = task.url;

    let color = document.createElement('h2');
    color.innerText = task.title;

    title.appendChild(imageCard);
    title.appendChild(color);
    cardBody.appendChild(title);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);

}





let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
      // task = tasks.filter(task => task.id.indexOf('1') !== -1);
      // console.log(task);
        createTaskCard(task);
    });
};

initListOfTasks();





function clickId(clickedId){
  console.log(clickedId);
  alert(clickedId);
}



function loadQuizFromList(){
  for (let valueList = 0; valueList < tasks.length; valueList++) {
    const element = document.getElementById[valueList];
    console.log("siema " + valueList);
  }
}
//loadQuizFromList();




