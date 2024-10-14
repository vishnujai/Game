let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //plaerX,palerO;
const winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
  const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            box.style.color = "red"; 
            turnO = false;
            box.disabled = "true";
        } else {
            box.innerText = "X";
            box.style.color = "grey"; 
            turnO = true;
            box.disabled = "true";
        }
        // box.disabled = "true";
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        //  console.log(pattern[0],pattern[1],pattern[2]);
        //  console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        //  );
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "", pos2val != "", pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {

                showWinner(pos1val);
                // console.log("",alert`You are winner in this time! :- ${pos1val}`);
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);