

	
	var Instruments = ["Harmonica", "Tambourine", "Piccolo", "Harpsichord"];
	var Content = "";
	var Y;
	
	function for_Loop()	{
		for (Y=0; Y<Instruments.length; Y++)	{
			Content += Instruments[Y] + "<br>"; 
		}
				document.getElementById("List_Of_Instruments").innerHTML = Content;
	}
	
