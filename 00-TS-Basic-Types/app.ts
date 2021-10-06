function combine(input1: number | string, input2: number | string | boolean) {
	let result;

	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(30, 26);
console.log(`combineAges`, combinedAges);

const combinedNames = combine('Pete', 'Pen');
console.log(`combinedNames`, combinedNames);

// Literal types are the types, which are based on the core types, but you then have a specific version of that type
function combine2(
	input1: number | string,
	input2: number | string,
	resultConversion: 'as-number' | 'as-text'
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

// Type Aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine3(
	input1: Combinable,
	input2: Combinable,
	resultConversion: ConversionDescriptor
) {
	let result;
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultConversion === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

// You can also provide an alias to a possible complex object type, for eg
// type User = { name: string, age: number };
// const user1: User = { name: 'Max', age: 30 };
function greet(user: { name: string; age: number }) {
	console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
	return checkAge > user.age;
}
// with aliases
type User = { name: string; age: number };

function greetAlias(user: User) {
	console.log('Hi, I am ' + user.name);
}

function isOlderAlias(user: User, checkAge: number) {
	return checkAge > user.age;
}
