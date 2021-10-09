// unknown is more restrictive than 'any' type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Peter';

// this one would work, if userInput was of type 'any'
// userName = userInput;
// so we need to do an extra type check for unkonw types
if (typeof userInput === 'string') {
	userName = userInput;
}

// Never type
// function never returns anything, for ex in cases, when you want to have functions to throw some errors
// for those cases you can assign never return type
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('An Error occurred!', 500);