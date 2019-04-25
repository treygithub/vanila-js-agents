//Store Charge
const year = "%PriorYr3%";

//Cast String to Integer
const subtractYear = Number(year);

//Subtract Credit from Charge
const due = subtractYear - 1;

//Create div element to store
const myDiv = document.createElement("div");

//Assign id MyList to the Div element
myDiv.setAttribute("id", "myList");

//Create a text node to store the variable Due, then append to the myList ID
const txtNode = document.createTextNode(due);
myDiv.appendChild(textNode);
document.getElementById('myList').appendChild(txtNode);



myFunction = ( () => {
    let year = "%PriorYr3%";
    let subtractYear = parseInt(year);
    let due = subtractYear - 1;
    let myDiv = document.createElement("div");
    myDiv.setAttribute("id", "myList");
    document.documentElement.appendChild(myDiv);
    let txtNode = document.createTextNode(due);
    document.getElementById('myList').appendChild(txtNode);
  })();

