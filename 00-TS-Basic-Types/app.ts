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

// Unknow type
function generateError(message: string, code: number) {
	throw { message: message, errorCode: code };
}
