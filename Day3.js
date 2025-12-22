// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// console.log(arr1 + arr2);

// // spread operator ... ( copy gardinxa ... le arry lai)

// const mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// const mergedArr = (a,b) => {
//     const result =[...a, ...b];
//     return result;
// };

// const mergedArray = (a,b) => [...a, ...b]
// console.log(mergedArray(arr1,arr2, arr1, arr2));

// adding new object

// const person = {
//     name: "saru",
//     age: 18,

// };
// const newPerson = {
//     ...person,
//     age:21,

// };
// console.log(newPerson);

// const personDetail = (name, age)=>{
//     const person = {
//         name:name,
//         age:age,
//     };
//     return person;
// };

// ek line ko code yo chai🤣🤣
const personDetail = (name, age) => ({ name, age });
console.log(personDetail("Saru", 21));
