let paidOneA = parseFloat('%PaidOneA%');
let paidOneB = parseFloat('%PaidOneB%');
let paidTwo = parseFloat('%PaidTwo%');
let baseOne = parseFloat('%Inst1BaseAmt%');
let baseTwo = parseFloat('%Inst2BaseAmt%');

/*if (paidOneB != '' || null)
{
    let dueOne = (baseOne - (paidOneA + paidOneB));
    if (dueOne < 0)
    {
        dueOne = 0
    }
}
else*/
{
    let dueOne = (baseOne - paidOneA);
    if (dueOne < 0)
    {
        dueOne = 0
    }
}

let dueTwo = (baseTwo - paidTwo).toFixed(2);
    if (dueTwo < 0)
    {
    dueTwo = 0
    }

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

