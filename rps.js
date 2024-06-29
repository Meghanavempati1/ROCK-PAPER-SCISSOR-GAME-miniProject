
let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");

let usc=document.querySelector("#user-score");
let csc=document.querySelector("#comp-score");

choices.forEach((choice) =>{
    
   choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id");
  //console.log("choice was clicked",choiceId);
  
    playgame(userChoice);
    
});

});

const genCompChoice=()=>{
   const options=["rock","paper","scissors"];

   const randIdx= Math.floor(Math.random()*3);
  
   return options[randIdx];
   
};

const draw=()=>{
 
console.log("its a draw");
msg.innerText=`game was draw. play again!!`;
msg.style.backgroundColor="blue";
};

const playgame=(userChoice)=>{
   
   console.log("user clicked ", userChoice);
  const compChoice=genCompChoice();
    
  console.log("computer clicked ", compChoice);

 if(userChoice==compChoice){
    draw();

 }
 else{
  
   let userWin=true;

      if(userChoice=="rock"){ //comp choice can be paper | scissors
         userWin= (compChoice=="paper")? false: true;
      }
     else if(userChoice=="paper"){ // rock or scissors
      userWin= (compChoice=="scissors") ? false: true ;
     }

     else{  //userchoice ==scissors   //comp choice can be   paper ,rock
       userWin = (compChoice=="rock")? false : true ;
     }

   ShowWinner(userWin,userChoice,compChoice);

 }



};

const ShowWinner=(userWin,userChoice,compChoice)=>{
 
   if(userWin==true){
    userScore++;
    usc.innerText=userScore ;
    console.log("you WON  !!!!!");
    msg.innerText=`You Won!!. ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    
    
   }
   else{
      compScore++;
      csc.innerText=compScore ;
    console.log("you LOSE !!!!");
    msg.innerText=`You Lose!!.${compChoice} beats ${userChoice}`;
   
    msg.style.backgroundColor="red";
   }

};

