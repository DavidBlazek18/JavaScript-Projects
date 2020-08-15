

function exampleDictionary() {
	var beer = {
		type:"Lager",
		type:"Bock",
		alcoholContent:"5.9%",
		packageType:"12-pack",
		packageMaterial:"aluminum",
		cost:"$16.99"
		};
	document.getElementById("Dictionary").innerHTML = beer.type;
}
//The getElementById() method returns the element 
//that has the ID attribute with the specified value. 
//This method is one of the most common methods in the 
//HTML DOM, and is used almost every time you want to 
//manipulate, or get info from, an element on your document.

//As a note: innerHTML modifies the content of an HTML element.
//innerHTML is a property of every element. 
//It tells you what is between the starting 
//and ending tags of the element, and it 
//also let you sets the content of the 
//element. ... Each HTML element has an 
//innerHTML property that defines both 
//the HTML code and the text that occurs 
//between that element's opening and closing tag.