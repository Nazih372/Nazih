/*javascript page!!!!!;33333*/
function Shut_up(){
	alert("shut up");
	
}

	

function guess_number(){
  var secret = 69;
  var guess;
  while(guess != secret){ 
    guess = prompt("Guess a number between 1 and 100");
   
    if(guess == secret){
       alert("Congratulations!");
    }
    else if(guess < secret){
        alert("guess higher");        
    }
    else if(guess > secret){
      alert("guess lower");
    }
    else if(guess == "lovelife"){
    	break;
    }
    else{
      alert("that's not a number");
    }
  }
}



function password(){
  let pwd = "Arthur";
  let user = prompt("Enter the password to the funhouse. You have 5 guesses");
  for ( let i=0; i<4; i++){
    user = prompt("Wrong. Enter the password:");
  }
}

function secondone(){
  let pwd = "123abc";
  let user = prompt("Enter the password. There is no limit on the number of attempts");
  while (user != pwd){
    user = prompt("Incorrect password. Enter the password:");
  alert("Welcome");
  }  
}



function brov(){
	var year = prompt("Give me a year and I will give you a century");
	var century = year/100 + 1;
	console.log (century);
	prompt("That year is the " + Math.floor (century) + "century");
}


function triangle(){
	var a = prompt("Enter an angle belonging to a triangle(Just the number)");
	var b = prompt("Enter the other angle belonging to the triangle");
	var z = 180 - (parseint(x) + parseint(y));
	alert(c + "degree is Le Third of the triangle");

}

function fallout76(){
	var b = 1;
	alert("Check console for results")
	while (b <= 100)
	{
		if(b & 4 == 0 && b % 10 == 0){
		console.log("Fourteen");
	    }
	    else if (b & 10 == 0){
		console.log("Ten");
	    }
	    else if (b % 4 == 0){
		console.log("Four");
	    }
	    else{
		 console.log(b);
	    }
	    b = b + 1;
    }
}


function ahh(sentence){ //Made by fupuchu@repl.it

    sentence = prompt("Please enter a string")

    if(typeof(sentence)!=='string'){
      alert('You must enter a valid string. The value you entered is not a string');
      return false;
    }
    
    else{
    //split the sentence into an array of words
    var words = sentence.split(" ");
    
    //create an array to hold the new pigLatin sentence
    var pigLatinSentence = [];
    //loop through each word in the new array and split it to an array of characters
    for(var i=0;i<words.length;i++){
      letters = words[i].split("");
      
      //extract the first element of the array, concantenate with "ay" and push it to the array of letters
      letters.push(letters.splice(0,1)+"ay");
      
      //join the letters to form a new word
      word = letters.join('');
      
      //if it is the first word of the sentence, convert the first letter to UpperCase
      if(i===0){
        word = word.slice(0,1).toUpperCase() + word.slice(1);
      }
      
      //push the newly formed words to the pigLatinSentence array
      pigLatinSentence.push(word);
    }
    
    //join the words to form a new sentence
    pigLatinSentence = pigLatinSentence.join(" ");
    return alert(pigLatinSentence);
  }
}