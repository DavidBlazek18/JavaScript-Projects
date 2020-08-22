
function Employee(Name, Age, Sex, Title, Department)	{
	this.Employee_Name = Name;
	this.Employee_Age = Age;
	this.Employee_Sex = Sex;
	this.Employee_Title = Title;
	this.Employee_Department = Department;
}
var BR549 = new Employee("David", "55", "Male", "Scientist", "Product Development");
	function onclick()	{
	document.getElementById("New_and_This").innerHTML = BR549.Employee_Name + " is a" + BR549.Employee_Age + " -year-old" + BR549.Employee_Sex + " working in" + BR549.Employee_Department + " as a " + BR549.Employee_Title + ".";
}



