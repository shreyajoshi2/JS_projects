const molecontainer = document.querySelectorAll(".mole");
const startgamebtn = document.getElementById("startgame");
const scorecount = document.getElementById("scorecount");
let count = 0;
let timer = 0;
let userscore = 0;
const mole = document.createElement("IMG");
mole.src = "mole.svg";
mole.classList.add("animal");

function findhole() {
  [...molecontainer].map((item, index) => {
    if (index == count - 1) {
      item.appendChild(mole);
    }
  });
}

const startgame = function () {
  const setcounter = setInterval(() => {
    count = Math.floor(Math.random() * 6) + 1;
    timer++;
    findhole();

    if (timer === 10) {
      clearInterval(setcounter);
    }
  }, 2000);
};

const score = function () {
  userscore++;
  console.log(scorecount);
  scorecount.innerHTML = userscore;
};
mole.addEventListener("click", score);
startgamebtn.addEventListener("click", startgame);
