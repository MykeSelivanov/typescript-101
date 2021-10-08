// number return type
function add(n1: number, n2: number) {
	return n1 + n2;
}

// void return type
function printResult(num: number): void {
	console.log('Result: ' + num);
}

console.log(printResult(add(5, 7))); // undefined

// undefined return type
function printResult2(num: number): undefined {
	console.log('Result: ' + num);
	return;
}

// Function types are the types that describe a function, regarding parameters and the return value
let combnieValues: (a: number, b: number) => number;
combnieValues = add;
console.log(combnieValues(8,8));
