let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#again");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

 const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [0,4,8],
    [0,3,6],
    [2,4,6],
    [2,5,8],
];
const resetGame =() =>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach ((box) => {
    box.addEventListener( "click",() =>{
        console.log("button was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    }
     
);
}    
);

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText=`congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner =()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText

        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos2val);
                showwinner(pos2val);
            }
        }

    }
  
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


