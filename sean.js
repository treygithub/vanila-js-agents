//It works

let paidOneA = Number('%PaidOneA%');
let paidOneB = Number('%PaidOneB%');
let paidTwo = Number('%PaidTwo%');
let baseOne = Number('%Inst1BaseAmt%');
let baseTwo = Number('%Inst2BaseAmt%');

privateData = ( () => {
    return container={
        paidOne: function(){
            return paidOneA + paidOneB;
        },
        paidTwo: paidTwo,
        baseOne: baseOne,
        baseTwo: baseTwo,
        dueOne: function(){
            return this.baseOne - this.paidOne();
        },
        dueTwo: function(){
            return this.baseTwo - this.paidTwo;
        }
    }
} )();

//ES5 Old syntax - ok to use for now, but start learning arrow functions as show below!!!
function myFunctionES5(){
    let myDiv = document.createElement("div");
    myDiv.setAttribute("id", "dueOne");
    document.documentElement.appendChild(myDiv);
    let txtNode = document.createTextNode(container.dueOne());
    document.getElementById('dueOne').appendChild(txtNode);
};

myFunctionES5();

//ES6 syntax - best practice 
myFunctionES6 = ( () => {
    let myDiv2 = document.createElement("div");
    myDiv2.setAttribute("id", "dueTwo");
    document.documentElement.appendChild(myDiv2);
    let txtNode2 = document.createTextNode(container.dueTwo());
    document.getElementById('dueTwo').appendChild(txtNode2);
})();