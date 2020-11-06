

function Rise_and_Shine() 	{				// The function Rise_and_Shine gets called when button in .html is clicked.
	if (new Date().getHours() > 6)	{		// Returns boolean True if at the instance of time that the time is after 6am.
		document.getElementById("Wake_up").innerHTML = "Wake up and get to work";	//	Returns to id="Wake_up" in the .html document the message if after 6am.
	}
}