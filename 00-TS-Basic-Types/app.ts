const person: {
  name: string;
  age: number;
  hobbies: string[];
  // tuple is a special construct typescript understands: special array with defined length and strict types for each element
  role: [number, string, boolean];
} = {
  name: 'Dave',
  age: 35,
  hobbies: ['Fishing', 'Cooking'],
  role: [2, 'author', true],
};

// person.role[1] = 10; // this line will complain, since it expects a string
// person.role = []; // this line will complain as well, since expected length should be 3
// person.role.push('admin'); // unfortunately push() is an exception, which is allowed in tuples, so this line will not complain
// length is enforced with explicit assignments, except the push() exception

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: 'Ted',
  age: 25,
  hobbies: ['Cooking', 'Sports'],
  role: Role.ADMIN,
};

if (person2.role === Role.ADMIN) {
    console.log('Is ADMIN');
}


