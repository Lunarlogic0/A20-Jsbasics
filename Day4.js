// // console.log(typeof +"1")
// // console.log("b"+"a"+ +"a"+"a")
// // console.log("1"+ +"1")

// const apiResponse={
//     data:[
//         {
//             id:1,
//             name:"Aryan",
//             isAdmin:false,
//             hasUserManagementAccess:false
//         },
//         {
//             id:2,
//             name:"Kumari",
//             isAdmin:true,
//             hasUserManagementAccess:false
//         },
//         {
//             id:3,
//             name:"Diya",
//             isAdmin:true,
//             hasUserManagementAccess:true
//         }
//     ],
//     responseCode:200,
//     responseMessage:"User fetch successfully"

// }



//Loops of javaScript

// const numbers = [1,2,3,4,5]
// const loopNumber = () => {
//     numbers.map((num) => {
//         if(num % 2===0) {
//             console.log(num)
//         }

//     })
// };
// loopNumber();

// const loopNumber=() => {
//     numbers.filter((num) => num%2==0).map((num)=>{})
//     console.log(num);
// };
// loopNumber();


// in javascript


// const numbers = [1,2,3,4,5,7,8,9]

// const loopNumber=() => {
//     const result=numbers
//     .filter((num) => num % 2 == 0)
//     .map((num)=>{
//     console.log(num);
//     })
//     return result
// };
// loopNumber();

// const numbers = [1,5,2,3,4,5,5];
// const loopNumbersV2 = () => {
//     const result =numbers.filter((num) => num!==5).map((num)=>num*3)

//     return result
// };
// console.log(loopNumbersV2());

//     const result=numbers
//     .filter((num) => num % 2 == 0)
//     .find((num)=>{
//     console.log(num);
//     })
//     return result
// };
// loopNumbersV2();

const numbers = [1,5,2,3,4,5,5];

const loopNumber = () =>{
  const findNumber = numbers
  .find((num)=> num % 2 == 0)

  const result =[findNumber].map((num)=>(num*2));
  return result 
};
console.log(loopNumber());




//.map

//   const fruits = ["Apple", "Banana", "Mango"];

//   return (
//     <div>
//       {fruits.map((fruit, index) => (
//         <p key={index}>{fruit}</p>
//       ))}
//     </div>
//   );




// //.filters
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       {numbers
//         .filter(num => num > 3)
//         .map((num, index) => (
//           <p key={index}>{num}</p>
//         ))}
//     </div>
//   );





