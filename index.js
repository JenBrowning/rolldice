let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let newNumber = document.createElement("p");
let status = document.getElementById("status");
// Correctly rolling 1 die, correctily rolling a pair of dice, displaying the counts in text.
function rollDice() {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    // let d3 = Math.floor(Math.random() * 6) + 1;
    let diceTotal = d1 + d2;
        number1.innerHTML = d1;
        number2.innerHTML = d2;
        // status.innerHTML = "You rolled " +diceTotal+"! ";
        // if (diceTotal == 12) {
        //     status.innerHTML += "Woo fucking Hoo!!";
            
}

function rollTwoDice() {
    for (let i = 0; i < 1000; i++) {
        let d1 = Math.floor(Math.random() * 6) + 1;
        let d2 = Math.floor(Math.random() * 6) + 1;
        count[d1 + d2]++;   
    }
}
 rollTwoDice() 

 function printList() {
     let destination = document.getElementById("results");
     let pairList = document.createElement("p");
     for (let i = 2; i < count.length-1; i++) {
         pairList.appendChild(document.createTextNode(i + ":" + (count[i]) + " "));
         pairList.appendChild(document.createElement("br"));

     }
     destination.appendChild(pairList);

 }
 printList()
 
 
    
    
        

    



 

// roll die 1000 times, count times rolled, store in array



