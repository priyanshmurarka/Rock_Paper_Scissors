let us=0,cs=0;

const choices = document.querySelectorAll(".choice");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  const compChoice = genComputerChoice();
  console.log("Computer choice = ", compChoice);
  let userWin;
  if (userChoice === compChoice) {
    let mg = document.querySelector("#msg");
    mg.innerText = "Draw";
    mg.style.backgroundColor = "blue";
  } 
  else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
    if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }

    if (userWin) {
        us++;
        userScore.innerText=us;
      let mg = document.querySelector("#msg");
      mg.innerText = "Winner";
      mg.style.backgroundColor = "green";
    }
    if (!userWin) {
        cs++;
        compScore.innerText=cs;
      let mg = document.querySelector("#msg");
      mg.innerText = "Loser";
      mg.style.backgroundColor = "red";
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
