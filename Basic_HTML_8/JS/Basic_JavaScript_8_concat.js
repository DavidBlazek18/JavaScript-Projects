
function All_Letters()	{
	var Part_1 = "The quick ";
	var Part_2 = "brown fox ";
	var Part_3 = "jumped over ";
	var Part_4 = "the lazy ";
	var Part_5 = "dog.";
	var All_Letters_In_Sentence = Part_1.concat(Part_2 + Part_3 + Part_4 + Part_5);
	document.getElementById("Concatenate").innerHTML = All_Letters_In_Sentence;
}
