
function Call_Loop()	{
	var Digit = "";
	var x = 1;
	while (x < 11)	{
		Digit += "<br>" + x;
		x++;
	}
	document.getElementById("loop").innerHTML = Digit;
}
	

