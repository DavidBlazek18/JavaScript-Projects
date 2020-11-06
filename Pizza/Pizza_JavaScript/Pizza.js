function getReceipt()	{
//This initializes our string so it can get passed from
//function by function, growing into a full receipt
var text1 = "<h3>You ordered:</h3>";
var runningTotal = 0;
var sizeTotal = 0;
var sizeArray = document.getElementsByClassName("size");
for (var i=0; i < sizeArray.length; i++)	{
if (sizeArray[i].checked)	{
var selectedSize = sizeArray[i].value;
text1 = text1+selectedSize+"<br>";
}
}
if (selectedSize === "Personal Pizza")	{
sizeTotal = 6;
} else if (selectedSize === "Small Pizza") {
sizeTotal = 8;
} else if (selectedSize === "Medium Pizza") {
sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
sizeTotal = 16;
}
runningTotal = sizeTotal;
console.log(selectedSize+" = $"+sizeTotal+".00");	// Console.log keeps a record of the receipt.
console.log("size text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
//These variables will get passed on to each function
getTopping(runningTotal,text1);
};
function getTopping(runningTotal,text1)	{
var toppingTotal = 0;
var selectedTopping = [];
var toppingArray = document.getElementsByClassName("toppings");
for (var j = 0; j < toppingArray.length; j++) {		// Locates the index in the topping array...
if (toppingArray[j].checked) {						// ...and prints its value. The push() method 
selectedTopping.push(toppingArray[j].value);		// adds new items to the end of an array.
console.log("selected topping item: ("+toppingArray[j].value+")");
text1 = text1+toppingArray[j].value+"<br>";
}
}
var toppingCount = selectedTopping.length;
if (toppingCount > 1) {								// Allows for one free topping
toppingTotal = (toppingCount - 1);					
} else {
toppingTotal = 0;
}
runningTotal = (runningTotal + toppingTotal);
console.log("total selected topping items: "+toppingCount);
console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
console.log("topping text1: "+text1);
console.log("Purchase Total: "+"$"+runningTotal+".00");
document.getElementById("showText").innerHTML=text1;
document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
runningTotal+".00"+"</strong></h3>";
};
