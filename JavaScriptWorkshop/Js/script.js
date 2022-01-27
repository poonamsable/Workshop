function clearScreen() {
 document.getElementById("result").value = "";
}
function display(value) {
 document.getElementById("result").value += value;
}
function calculate() {
    var value = document.getElementById("result").value;
    var q = eval(value);
    document.getElementById("result").value = q;
}
function backSpace() { 
    var b = document.getElementById("result").value;
    document.getElementById("result").value= b.substr(0,b.length-1);
}
function changMode() {
    document.getElementById("sq").disabled =  !document.getElementById("sq").disabled;
    document.getElementById("cube").disabled = !document.getElementById("cube").disabled ;
    document.getElementById("sqr").disabled = !document.getElementById("sqr").disabled;
    document.getElementById("sq").style.color ="cyan";
    document.getElementById("cube").style.color ="cyan";
    document.getElementById("sqr").style.color ="cyan";
}
function square() {
    var sq = document.getElementById("result").value;
    console.log(sq)
    var s = Math.pow(sq,2)
    console.log(s)
    document.getElementById("result").value=s;
    calculate()
    
}
function cube() {
   var sq = document.getElementById("result").value;
   console.log(sq)
    var s = Math.pow(sq,3)
    console.log(s)
    document.getElementById("result").value=s;  
}
function squareroot() {
     var sq = document.getElementById("result").value;
     console.log(sq)
    var s = Math.sqrt(sq)
    console.log(s)
    document.getElementById("result").value=s;
}