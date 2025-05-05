
document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("start-btn");
    const choiceList = document.getElementById("choices-list");
    const questionText = document.getElementById("question-text");
    const questionContainer = document.getElementById("question-container");
    const nextBtn = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const restartBtn = document.getElementById("restart-btn");


    const questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          question: "Which planet is known as the Red Planet?",
          choices: ["Mars", "Venus", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          question: "Who wrote 'Hamlet'?",
          choices: [
            "Charles Dickens",
            "Jane Austen",
            "William Shakespeare",
            "Mark Twain",
          ],
          answer: "William Shakespeare",
        },
      ];

      
      let questionIndex = 0;
      let score = 0;

      startBtn.addEventListener("click", render);


      function render(){
            questionContainer.classList.remove("hidden");
            startBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            choiceList.innerHTML = "";
           if(questionIndex >= questions.length){
            questionContainer.classList.add("hidden");
            resultContainer.classList.remove("hidden");
            scoreDisplay.textContent = `${score} out of 3`;
            restartBtn.addEventListener("click", () => {
                questionIndex = 0;
                score = 0;
                render();
                resultContainer.classList.add("hidden");
            })
           }
           else {
            questionText.textContent = `${questions[questionIndex].question}`
            questions[questionIndex].choices.forEach(choice => {
                const li = document.createElement("li");
                li.innerHTML = `${choice}`;
                li.addEventListener("click", () => answer(choice));
                choiceList.appendChild(li);
    
            })
           }
            
      }
      function answer(choice){

        nextBtn.classList.remove('hidden');
          let answer = questions[questionIndex].answer;
          if(choice === answer){
            score++;
          }
        }

    nextBtn.addEventListener("click", () => {
        questionIndex++;
        render();

    })

   



})