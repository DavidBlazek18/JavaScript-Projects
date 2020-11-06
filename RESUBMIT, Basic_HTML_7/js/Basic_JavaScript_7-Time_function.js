

function Time_function() {					// This Time_function gets called when button in .html is clicked.
	var Time = new Date().getHours();		// Instantiate the variable Time with the method Date.getHours
	var Reply;								// Use the variable Reply for the "if" loop
	if (Time < 12 == Time > 0) {			// Returns boolean True if at the instance of time that time is both 
		Reply = "It is morning time!";		// less than noon and greater than midnight.
	}
	else if (Time > 12 == Time < 18) {		// Returns boolean True if at the instance of time that time is both
		Reply = "It is the afternoon.";		// greater than noon and less than 6pm.
	}
	else {
		Reply = "It is evening time.";		// If neither of the two conditions above is true, the time is between
	}										// 6pm and midnight.
	document.getElementById("Time_of_day").innerHTML = Reply;	//	Returns the variable Reply to .html document for the id "Time_of_Day".
}