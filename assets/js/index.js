//Add
const addAPick = document.querySelector("#add-a");
const addBPick = document.querySelector("#add-b");
const addResultPick = document.querySelector("#add-result");
const addSolvePick = document.querySelector("#add-solve");

//Subtract

const subtractAPick = document.querySelector("#subtract-a");
const subtractBPick = document.querySelector("#subtract-b");
const subtractResultPick = document.querySelector("#subtract-result");
const subtractSolvePick = document.querySelector("#subtract-solve");

//Multiply
const multiplyAPick = document.querySelector("#multiply-a");
const multiplyBPick = document.querySelector("#multiply-b");
const multiplyResultPick = document.querySelector("#multiply-result");
const multiplySolvePick = document.querySelector("#multiply-solve");

//Divide

const divideAPick = document.querySelector("#divide-a");
const divideBPick = document.querySelector("#divide-b");
const divideResultPick = document.querySelector("#divide-result");
const divideSolvePick = document.querySelector("#divide-solve");



// Functions
//Add
function clickAddSolve() {
    let addA = addAPick.value
    addA = parseInt(addA, 10);
    let addB = addBPick.value
    addB = parseInt(addB, 10);

    let addResult = addA + addB;
    addResultPick.value = addResult;
}

//Subtract
function clickSubtractSolve() {
    let subtractA = subtractAPick.value
    subtractA = parseInt(subtractA, 10);
    let subtractB = subtractBPick.value
    subtractB = parseInt(subtractB, 10);

    let subtractResult = subtractA - subtractB;
    subtractResultPick.value = subtractResult;
}

//Multiply
function clickMultiplySolve() {
    let multiplyA = multiplyAPick.value
    multiplyA = parseInt(multiplyA, 10);
    let multiplyB = multiplyBPick.value
    multiplyB = parseInt(multiplyB, 10);

    let multiplyResult = multiplyA * multiplyB;
    multiplyResultPick.value = multiplyResult;
}

//Divide
function clickDivideSolve() {
    let divideA = divideAPick.value
    divideA = parseInt(divideA, 10);
    let divideB = divideBPick.value
    divideB = parseInt(divideB, 10);

    let divideResult = divideA / divideB;
    divideResultPick.value = divideResult;
}


// Listeners
// Add
addSolvePick.addEventListener("click", clickAddSolve);

// Subtract
subtractSolvePick.addEventListener("click", clickSubtractSolve);


// Multiply
multiplySolvePick.addEventListener("click", clickMultiplySolve);

// Divide
divideSolvePick.addEventListener("click", clickDivideSolve);
