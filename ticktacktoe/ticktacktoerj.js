let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#new-btn");
let hi=document.querySelector(".hi");
let turnO=0;
const winPatterns = [
    [0, 1, 2],  
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  
    [2, 4, 6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==0){
          
            box.innerText = "O";
            turnO=1;
        }
        else{
            box.innerText="X";
            turnO=0;
        }
        box.disabled=true;
        checkwinner();
    });
});

resetbtn.addEventListener("click",()=>
    {boxes.forEach((box)=>{
        box.innerText="";
        turnO=0;
        box.disabled=false;
})});
function checkwinner(){
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
              console.log("winner is ",pos1val);
              showwinner(pos1val);
            }
           
    }

}
}
function showwinner(pos1val){
    hi.classList.add("alp");
    msgcontainer.classList.remove("alp");
    msg.innerText=`Congratulation The winner is ${pos1val}`;
    msg.style.color="purple";
    

}
newgame.addEventListener("click",()=>
    {boxes.forEach((box)=>{
        box.innerText="";
        turnO=0;
        box.disabled=false;
        msgcontainer.classList.add("alp");
        hi.classList.remove("alp");
})});
