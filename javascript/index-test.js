'use strict';

// use querySelectorAll for event listener instead (or in addition to) submit button?

let costItem1 = 0;
let weightItem1 = 0;
let weightTypeItem1 = "pounds";
let pricePerItem1 = 0;

let costItem2 = 0;
let weightItem2 = 0;
let weightTypeItem2 = "pounds";
let pricePerItem2 = 0;

let costItem3 = 0;
let weightItem3 = 0;
let weightTypeItem3 = "pounds";
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

    costItem1 = Number(document.getElementById("item-1-cost").value).toFixed(2); // Round the cost to 2 decimal places.
    document.getElementById("item-1-cost").value = costItem1; // Re-fill the "Price" section with this newly rounded value.
    weightItem1 = document.getElementById("item-1-weight").value;
    weightTypeItem1 = document.getElementById("item-1-weight-type").value
    pricePerItem1 = (costItem1 / weightItem1).toFixed(2);

    costItem2 = Number(document.getElementById("item-2-cost").value).toFixed(2); // Round the cost to 2 decimal places.
    document.getElementById("item-2-cost").value = costItem2; // Re-fill the "Price" section with this newly rounded value.
    weightTypeItem2 = document.getElementById("item-2-weight-type").value
    pricePerItem2 = (costItem2 / weightItem2).toFixed(2);

    costItem3 = Number(document.getElementById("item-3-cost").value).toFixed(2); // Round the cost to 2 decimal places.
    document.getElementById("item-3-cost").value = costItem3; // Re-fill the "Price" section with this newly rounded value.
    weightTypeItem3 = document.getElementById("item-3-weight-type").value
    pricePerItem3 = (costItem3 / weightItem3).toFixed(2);

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