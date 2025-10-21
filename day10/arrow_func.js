//to declare a function in short 
const sum=(a=3,b=1)=>{
    return `the sum of result = ${a+b}`;
}
result=sum(23,5);
console.log(result);

//for example 
// function sumit(a,b){
//     return a+b
// }is converted into
const sumit=(a,b)=>{
    return a+b;
}
console.log(sumit(4,5))