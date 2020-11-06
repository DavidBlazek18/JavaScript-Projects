
var z = 5       				// This global variable is outside the function.


function show_consoleError1() { // 
    var a = 2                   // Variable "a" is inside this function but outside
    document.write(a + z);      // the function below. Use console.log to find the error.
    console.log()            
}                              

function show_consoleError2() {
    document.write(a + z);      // Variable "a" is only local to the above function but
    console.log()    			// variable "z" is accessable since it is global (outside).
}
show_consoleError1();		// This function is OK, says the sum of a + z = 7.
show_consoleError2();     	// This function returns error, if press ctrl-shft-I says variable "a" is not defined.