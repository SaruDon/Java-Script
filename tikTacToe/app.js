let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;


let winningPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    // box.innerText = "X";
    if (turn0 === true) {
      box.style.color = "black";
      box.innerHTML = "X";
      turn0 = false;
    } else {
      box.style.color = "red";
      box.innerHTML = "O";
      turn0 = true;
    }
    box.disabled = true; //o
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations winner is ${winner}`;
  msgConatiner.classList.remove("hide");
};

const disableBtn = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const restGame = () => {
  turn0 = true;
  enableBtn();
  msgConatiner.classList.add("hide");
};
// 
const checkWinner = () => {
  for (patterns of winningPatterns) {
    // console.log(
    //   boxs[patterns[0]].innerHTML,
    //   boxes[patterns[1]].innerHTML,
    //   boxs[patterns[2]].innerHTML
    // );
    let posi1Val = boxes[patterns[0]].innerHTML;
    let posi2Val = boxes[patterns[1]].innerHTML;
    let posi3Val = boxes[patterns[2]].innerHTML;
    if (posi1Val != "" && posi1Val != "" && posi3Val != "") {
      if (posi1Val === posi2Val && posi2Val === posi3Val) {
        console.log("winner", posi1Val);
        disableBtn();
        showWinner(posi1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
