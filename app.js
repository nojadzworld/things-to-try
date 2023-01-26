
    function yourname(){
let userName = prompt('What is your name?');
    document.write ('Hello.. ' +  userName +'!' 

    )}
function movie(){
let movieAnswer =prompt('What is my favorite movie?');

if (movieAnswer == 'Home Alone'){
    document.write(' You got it!   ')
}
else {document.write(" Nope. It is  " + mymovieanswer)}
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


 