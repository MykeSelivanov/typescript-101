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

let combnieValues: any;
combnieValues = add;
