
var x = 10                  // These three variables are global since
var y = 20                  // they are outside of the functions.
var z = 5

function do_math() {        
  document.write((x * y) + z + "<br>");	// All variables can be accessed since they are 
}										// global (outside) of the function. 	
do_math();								// Invokes the function.


function do_math_using_localVar() { 
    var z = 1                       		// Variable z=1 is called locally (inside) the function and
    document.write((x * y) + z + "<br>")	// overrides the z=5 from outside the function.
}
do_math_using_localVar();					// Invokes the function.

