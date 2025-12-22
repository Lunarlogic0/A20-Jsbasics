// const arr = ["ritu","manish","aman","anusha","auram"];

// const printNames=()=>{
//     arr.map((name)=>{
//         console.log(`Hello my name is ${name}`)
//     })
// }
// printNames()

const arr = ["ritu","manish","aman","anusha","auram"];

const printNames=(name)=>{
    // arr.map((name)=>{
        if(arr.includes("aman")){ 
            console.log("Hello my name is " + name);
        }
        
    // })
}
printNames("aman")


// .filter
const numb=[9,9,9,8]
console.log(numb.filter((num)=>num ===2))
console.log(numb.find((num)=>num ===2))
console.log(numb.includes(9))
console.log(numb.every(num=>num%2!=0))
console.log(numb.some(num=>num%2==0))



