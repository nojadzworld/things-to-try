
    function yourname(){
let userName = prompt('What is your name?');
    document.write ('Hello.. ' +  userName +'!')
    
    }
    
function movie(){
let movieAnswer =prompt('What is my favorite movie?');

if (movieAnswer == 'Home Alone'){
    document.write(' You got it!   ')
}
else {document.write(' Nope. It is Home Alone');
} 
}

function age(){
let myage =prompt('How old do I look based on my profile picture');

let myageanswer = 23;

if (myage == myageanswer) {
    document.write('   Wow you are correct!')
}

else if (myage > myageanswer) {
    document.write('   Chill!! Im not that old')
}
else if (myage < myageanswer){
    document.write('   Do i look like a baby?')
}

else {
    document.write ('  How? Impossible...')
}
}
 
yourname(); 
movie();
age();

let myNum =prompt('How many pics would you like? 1-5')
myNum = parseInt(myNum)
for (let i = 0; i < myNum; i++){
    document.write('<img src="SOT.jpg" />')   
}


let userInput = prompt("Type 'xbox' or 'pc' or 'ps'");
userInput = userInput.toLowerCase();

function platformQ(userInput) {
 
let answerA = false;
while (!answerA) {

if (userInput == 'xbox') {
    alert('Nice you can play both gmaes!')
    answerA= true
}
else if (userInput == 'ps') {
alert('You can only play DEEP ROCK')
answerA=true
}

else if (userInput == 'pc') {
    alert('Nice you can play both gmaes!')
    answerA=true
    }

    else {userInput = prompt("Type 'xbox' or 'pc' or 'ps'"
    )
}


}


}

platformQ(userInput)

