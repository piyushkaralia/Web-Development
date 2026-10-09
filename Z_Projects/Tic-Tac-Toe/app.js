let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetButton"); 
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((BOX)=>{
    BOX.addEventListener("click",()=>{
       if(turn0){
        BOX.innerText="O";
        turn0=false;
        count++;
       }
       else{
        BOX.innerText="X";
        turn0=true;
        count++;
       }
       BOX.disabled=true;
       checkWinner();
    });
});

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
    
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw=()=>{
    msg.innerText="The Game Was A Draw";
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    for(let Pattern of winPatterns){
        let pos1Value=boxes[Pattern[0]].innerText;
        let pos2Value=boxes[Pattern[1]].innerText;
        let pos3Value=boxes[Pattern[2]].innerText;
        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
            if(pos1Value==pos2Value && pos2Value==pos3Value){
                showWinner(pos1Value);
                return;
            }
        }
    }
if(count==9){
    showDraw();
}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

