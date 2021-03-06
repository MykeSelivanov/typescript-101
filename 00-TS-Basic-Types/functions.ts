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
console.log(combnieValues(8, 8));

// You can also use function types in callbacks
function addAndHandle(
	n1: number,
	n2: number,
	callbackFunc: (num: number) => void
) {
	const result = n1 + n2;
	callbackFunc(result);
}

addAndHandle(10, 20, (result) => {
	console.log(`result`, result);
});
