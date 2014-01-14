//know which one is clicked and change the background with loop
// for (i=1; i<10; i++){}



//make i=1 when i clicked "box1"

	function boxClicked(num) {
		console.log(num);
		document.getElementById("box"+num).style.background="url('http://i.imgur.com/jJT1Buv.jpg?1')";
}


// Switch between X and O after each click 

// Restrict clicking after the box has been clicked 