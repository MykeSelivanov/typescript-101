// const person: {
//   name: string;
//   age: number;
// } = {

const person = {
  name: 'Dave',
  age: 35,
  hobbies: ['Fishing', 'Cooking'],
  role: [2, 'author'],
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
