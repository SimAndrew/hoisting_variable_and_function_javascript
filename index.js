//Variable hoisting works in javascript
console.log(color);
var color;
console.log(color);
var color = 'red';
console.log(color);
//Function hoisting works in javascript (function expression)
//console.log(getProduct(2, 3));//not work
var getProduct;
getProduct = function (num1, num2) {
    return num1 * num2;
};
console.log(getProduct(2, 3));
//Function declaration
console.log(getItem(2, 3));//work
function getItem (num1, num2) {
    return num1 + num2;
};
console.log(getItem(2, 3));
//Variable and function hoisting is process in which the javascript interpreter,
//looks ahead in the code to find all of the variable and function declarations
//and then hoists those declarations to the top of the file.
