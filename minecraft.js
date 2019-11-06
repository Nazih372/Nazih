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

	

