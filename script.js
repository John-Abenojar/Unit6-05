document.getElementById("submitAge").addEventListener("click", determainer);
document.getElementById("submitDay").addEventListener("click", determainer);
function determainer() {
let age = document.getElementById("age").value;
let day = document.getElementById("day").value;
if ((age <=18 && day =="Saturday") || (age >18 && day =="Sunday")){
 alert ("Relax for the weekend!")
}
else if ((age >18 && day !="Saturday") && (day !="Sunday")){
alert ("Go to work!")
}
else {alert ("You have school today!")}
}
