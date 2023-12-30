const billAmount=document.getElementById("billAmount");
const cashGiven = document.getElementById("cashGiven");
const checkButton = document.querySelector("#checkButton");
const errorMessage = document.getElementById("errorMessage");
const nextButton = document.getElementById("nextButton");
const cashContainer = document.getElementById("cash-container");
const notesContainer =  document.getElementById("notes-container");
const notes = document.querySelectorAll(".notes");

const availableNotes = [2000 , 500 , 100 , 20 , 10 , 5 , 1];

nextButton.addEventListener("click",function(){
    hideMessage();
    if(+billAmount.value>0){
        cashContainer.style.display="block";
        nextButton.style.display="none";
    }
    else{
        error("Invalid Bill Amount");
    }
});

checkButton.addEventListener("click",function(){
    hideMessage();
    if(+cashGiven.value >= +billAmount.value){
        clearNotes();
        notesContainer.style.display="block";
        var balanceAmount = +cashGiven.value - +billAmount.value;
        returnChange(balanceAmount);
    }
    else{
        notesContainer.style.display="none";
        error("Cash given should be atleast equal to the bill amount.")
    }
});

function clearNotes(){
    for(let note of notes){
        note.textContent="";
    }
}

function hideMessage(){
    errorMessage.style.display="none";
}

function error(msg){
    errorMessage.style.display="block";
    errorMessage.textContent=msg;
}

function returnChange(balance){
    document.querySelector("caption").innerText=`Return Change : Rs ${balance}`;
    for(let i=0;i<availableNotes.length;i++){
        let numberOfNotes = Math.floor(balance/availableNotes[i]);
        if(numberOfNotes>0){
            notes[i].textContent = numberOfNotes;
        }
        balance = balance % availableNotes[i];
    }
}
