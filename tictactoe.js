
var boy = true;
// Array of spaces that will change/moves
var moves = [[null,null,null],[null,null,null],[null,null,null]];
// for loop, loops through each cell (9 of them) by name
for(var i = 1; i<10; i++) {
  // when you click, finds cell by name and makes it clickable and calls the clickstuff function
	cell = document.getElementById("box"+i)
	cell.onclick = clickstuff;
}

if (!window.console) console = {};
console.log = console.log || function(){};
console.warn = console.warn || function(){};
console.error = console.error || function(){};
console.info = console.info || function(){};

// defines function
function clickstuff(){

  	if (this.innerHTML[0]!= "<"){ 
	  	//boxnum is range from 0-8
		boxnum=this.id[3]-1
		// checks each variable in nums to see which one was clicked
		row=Math.floor(boxnum / 3)
		column=boxnum % 3
    	if (boy)
   		{

  			this.innerHTML='<img src="http://i.imgur.com/jJT1Buv.jpg?1" />';
   		   // figures out which row and column [][], referencing the var moves and saves as x
     		moves [row][column] = "x";
    
			// after putting image to olive, switches to mushroom
  			boy = false;
		}
  // if not olive, then mushroom
		else {
			this.innerHTML='<img src="http://i.imgur.com/H836SYh.jpg?1" />';
     		moves [row][column] = "o";
    
			// after putting image to olive, switches to mushroom
  			boy = true;
  		}
   	}
	else {
	alert("taken")
	}
	// checkWin function is called
	checkWin();
}

function checkWin(){
  if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x")
    alert("X wins!")
  if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x")
    alert("X wins!")
  if (moves [0][2]=="x" && moves [1][2]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o")
    alert("O wins!")
  if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o")
    alert("O wins!")
  if (moves [0][2]=="o" && moves [1][2]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x")
    alert("X wins!")
  if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x")
    alert("X wins!")
  if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [0][1]=="o" && moves [0][2]=="o")
    alert("O wins!")
  if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o")
    alert("O wins!")


}


function resetbutton()

{
  if (confirm("Reset?"))
    location.reload();
}



