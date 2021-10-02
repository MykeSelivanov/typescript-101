const person: {
  name: string;
  age: number;
  hobbies: string[];
  // tuple is a special construct typescript understands: special array with defined length and strict types for each element
  role: [number, string];
} = {
  name: 'Dave',
  age: 35,
  hobbies: ['Fishing', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
