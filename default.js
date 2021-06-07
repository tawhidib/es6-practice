// ES6 introduced default parameter for function arguments

function add(num1 = 10, num2 = 20) {
	return num1 + num2;
}

// const result = add(70, 45); *** Output is - 115
const result = add();
// now output is 30,
// code default values are 10 and 20
console.log(result);
