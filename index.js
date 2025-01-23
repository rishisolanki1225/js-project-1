let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newgame =document.querySelector('#new-game');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#message');

let turn0 = true;//player x, playero

const winpatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    turn0 =true;
    enabledbtns();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if( turn0){
            box.innerText = '0';
            turn0 = false;
        }else {
            box.innerText= 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledbtns = () => {
    for(let box of boxes) {
        box.disabled = true;
    } 
};

const enabledbtns = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    } 
};
const showwinner = (winner) => {
msg.innerText = `congratulations,winner is ${winner}`;    
msgcontainer.classList.remove("hide");
 disabledbtns();
};


const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner', pos1Val);
                showwinner( pos1Val);
            }
                
        }
    }
};

newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
