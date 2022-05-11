let a = prompt("please choose a number ");
let b = prompt("please choose a number ");
let num1 = parseFloat(a)
let num2 = parseFloat(b)

add(num1, num2)
subtract(num1, num2) 
multiply(num1, num2) 
divide(num1, num2)


function add(num1, num2){
 let valueAdd = (num1 +num2);
 console.log("valueAdd", valueAdd)
}

function subtract(num1, num2){
    let valueSubtract = (num1 - num2);
    console.log("valueSubtract", valueSubtract)
   }

 function multiply(num1, num2){
    let valueMultiply = (num1*num2);
    console.log("valueMultiply", valueMultiply)
   }

   function divide(num1, num2){
    let valueDivide = (num1/num2);
    console.log("valueDivide", valueDivide)
   }

