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
function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// Type Aliases
type Combinable = number;
function combine3(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}