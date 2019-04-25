let paidOne = parseFloat('%Inst1AmtPaid%');
let paidTwo = parseFloat('%Inst2AmtPaid%');
let baseOne = parseFloat('%Inst1BaseAmt%');
let baseTwo = parseFloat('%Inst2BaseAmt%');

let dueOne = baseOne - paidOne;
let dueTwo = baseTwo - paidTwo;

let myDiv = document.createElement("div");
myDiv.setAttribute("id", "dueOne");
document.documentElement.appendChild(myDiv);
let txtNode = document.createTextNode(dueOne);
document.getElementById('dueOne').appendChild(txtNode);

let myDiv2 = document.createElement("div");
myDiv2.setAttribute("id", "dueTwo");
document.documentElement.appendChild(myDiv2);
let txtNode2 = document.createTextNode(dueTwo);
document.getElementById('dueTwo').appendChild(txtNode2);

