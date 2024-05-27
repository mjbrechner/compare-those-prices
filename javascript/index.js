'use strict';

// use querySelectorAll for event listener instead (or in addition to) submit button?

let costItem1 = 0;
let weightItem1 = 0;
let weightTypeItem1 = "pound";
let pricePerItem1 = 0;

let costItem2 = 0;
let weightItem2 = 0;
let weightTypeItem2 = "pound";
let pricePerItem2 = 0;

let costItem3 = 0;
let weightItem3 = 0;
let weightTypeItem3 = "pound";
let pricePerItem3 = 0;

// Round the price values to two decimal places.
function cost1Cleaner() {
    document.getElementById("item-1-cost").value = Number(document.getElementById("item-1-cost").value).toFixed(2);
}
function cost2Cleaner() {
    document.getElementById("item-2-cost").value = Number(document.getElementById("item-2-cost").value).toFixed(2);
}
function cost3Cleaner() {
    document.getElementById("item-3-cost").value = Number(document.getElementById("item-3-cost").value).toFixed(2);
}

function calculateComparison() {
costItem1 = document.getElementById("item-1-cost").value;
weightItem1 = document.getElementById("item-1-weight").value;
weightTypeItem1 = document.getElementById("item-1-weight-type").value
pricePerItem1 = (costItem1/weightItem1).toFixed(2);

costItem2 = document.getElementById("item-2-cost").value;
weightItem2 = document.getElementById("item-2-weight").value;
weightTypeItem2 = document.getElementById("item-2-weight-type").value
pricePerItem2 = (costItem2/weightItem2).toFixed(2);

costItem3 = document.getElementById("item-3-cost").value;
weightItem3 = document.getElementById("item-3-weight").value;
weightTypeItem3 = document.getElementById("item-3-weight-type").value
pricePerItem3 = (costItem3/weightItem3).toFixed(2);

// document.getElementById("results").innerText = `Item #1 Value: ${pricePerItem1}.   Item #2 Value: ${pricePerItem2}.   Item #3 Value: ${pricePerItem3}.`;

if (pricePerItem1 => 0) {
    document.getElementById("item-1-header").innerText = `Item #1's cost is $${pricePerItem1} per ${weightTypeItem1}.`
}

if (pricePerItem2 => 0) {
    document.getElementById("item-2-header").innerText = `Item #2's cost is $${pricePerItem2} per ${weightTypeItem2}.`
}

if (pricePerItem3 => 0) {
    document.getElementById("item-3-header").innerText = `Item #3's cost is $${pricePerItem3} per ${weightTypeItem3}.`
}
}