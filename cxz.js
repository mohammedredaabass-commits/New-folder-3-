let button = document.getElementById("CalculateBtn");
let reselt = document.getElementById("result");

const display = document.getElementById("display");
const btnC = document.getElementById("btnC");
const btnPercent = document.getElementById("btnPercent");
const btnDEL = document.getElementById("btnDLE");
const btndivide = document.getElementById("btndivide");

const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnmultiply = document.getElementById("btnmultiply");

const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnminus = document.getElementById("btnminus");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnplus = document.getElementById("btnplus");

const btn0 = document.getElementById("btn0");
const btnDot = document.getElementById("btnDot");
const btnEqual = document.getElementById("btnEqual");



btnC .onclick = function (){
    display.value ="";
};
btnPercent .onclick = function (){
    display.value +="/100";
};
btnDEL .onclick = function (){
    display.value = display.value.slice(0, -1);
};
btndivide .onclick = function (){
    display.value +="/";
};
btn7 .onclick = function (){
    display.value +="7";
};
btn8 .onclick = function (){
    display.value +="8";
};
btn9 .onclick = function (){
    display.value +="9";
};
btnmultiply .onclick = function (){
    display.value +="*";
};
btn4 .onclick = function (){
    display.value +="4";
};
btn5 .onclick = function (){
    display.value +="5";
};
btn6 .onclick = function (){
    display.value +="6";
};
btnminus .onclick = function (){
    display.value +="-";
};
btn1 .onclick = function (){
    display.value +="1";
};
btn2 .onclick = function (){
    display.value +="2";
};
btn3 .onclick = function (){
    display.value +="3";
};
btnplus .onclick = function (){
    display.value +="+";
};
btn0 .onclick = function (){
    display.value +="0";
};
btnDot .onclick = function (){
    display.value +=".";
};
btnEqual .onclick = function (){
    display.value = eval(display.value);
};
