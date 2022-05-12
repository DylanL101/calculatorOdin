let presentNum ="";
let priorNum ="";
let operator ="";

const presentNumberDisplay = document.querySelector('.presentNumber');
const priorNumberDisplay = document.querySelector('.priorNumber');
const equal = document.querySelector('.equal');
equal.addEventListener("click", () => {
    if (presentNum != "" && priorNum != ""){
        compute();
    }
})
const decimal = document.querySelector('.decimal');
const clearDisplay = document.querySelector('.clear');
clearDisplay.addEventListener("click", clearScreen);
const buttonNumber = document.querySelectorAll('.number');
const fourOperator = document.querySelectorAll('.operator');

buttonNumber.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        getNumber(e.target.textContent)
    });
});

function getNumber(number){
    if (presentNum.length <= 11){
        presentNum += number;
        presentNumberDisplay.textContent = presentNum;
    }
}
fourOperator.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        getOperator(e.target.textContent)
    });
});
function getOperator(oper){
operator = oper;
priorNum = presentNum
priorNumberDisplay.textContent = priorNum + " " + operator;
presentNum ="";
presentNumberDisplay.textContent = "";
}

function compute() {
    priorNum =Number(priorNum)
    presentNum = Number(presentNum)
    if (operator === "+"){
        priorNum = priorNum + presentNum;
    }else if (operator === "-") {
        priorNum = priorNum - presentNum
    } else if (operator === "x"){
        priorNum = priorNum * presentNum;
    }else if (operator === "/"){
       if (presentNum <= 0){
           priorNum = "Can't divide by 0";
           priorNumberDisplay.textContent = "";
           presentNumberDisplay.textContent = priorNum;
           operator = "";
           return;

       } 
       priorNum = priorNum / presentNum;
    }
    priorNum = priorNum.toString();
    showResult();
}

function showResult(){
    priorNumberDisplay.textContent = "";
    operator = "";
    if (priorNum.length <= 11){
        presentNumberDisplay.textContent = priorNum;
    }else{
        presentNumberDisplay.textContent = presentNum.slice(0,11) + "....";
    }
}
function roundNum(){
    return Math.round(num*10000)/10000;
}
function clearScreen(){
    presentNum = "";
    priorNum = "";
    presentNumberDisplay.textContent ="0";
    priorNumberDisplay.textContent = "";

}




//let a = prompt("please choose a number ");
//let b = prompt("please choose a number ");
//let num1 = parseFloat(a)
//let num2 = parseFloat(b)


//add(num1, num2)
//subtract(num1, num2) 
//multiply(num1, num2) 
//divide(num1, num2)


//function add(num1, num2){
// let valueAdd = (num1 +num2);
 //console.log("valueAdd", valueAdd)
//}

//function subtract(num1, num2){
//    let valueSubtract = (num1 - num2);
//    console.log("valueSubtract", valueSubtract)
//   }

 //function multiply(num1, num2){
 //   let valueMultiply = (num1*num2);
  //  console.log("valueMultiply", valueMultiply)
 //  }

  // function divide(num1, num2){
  //  let valueDivide = (num1/num2);
  //  console.log("valueDivide", valueDivide)
   

  // if (valueDivide == "Infinity"){
  //     return alert ("You can't divide by zero!")
 //  } else return console.log("valueDivide", valueDivide);
//}

