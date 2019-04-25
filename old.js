//Store Charge
let subtractaYear = "%PriorYr3%";

//Cast String to Integer
subtractaYear = Number(subtractaYear);

//Subtract Credit from Charge
var due = subtractaYear - 1;

//Create div element to store
var myDiv = document.createElement("div");

//Assign id MyList to the Div element
myDiv.id = "myList";

//Assign the ID to the page
document.documentElement.appendChild(myDiv);

//Create a text node to store the variable Due, then append to the myList ID
var txtNode = document.createTextNode(due);
document.getElementById('myList').appendChild(txtNode);