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

let submissionWeightType = "ounce";

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

function getSubmissionWeightType() {
    submissionWeightType = document.getElementById("submission-weight-type").value;
}

function calculateComparison() {
    getSubmissionWeightType();

    costItem1 = document.getElementById("item-1-cost").value;
    weightItem1 = document.getElementById("item-1-weight").value;
    weightTypeItem1 = document.getElementById("item-1-weight-type").value

    if (submissionWeightType === "ounce") { // Convert to ounces
        if (weightTypeItem1 === "ounce") {
            pricePerItem1 = (costItem1 / weightItem1).toFixed(2);
        } else if (weightTypeItem1 === "pound") {
            pricePerItem1 = ((costItem1 / weightItem1) / 16).toFixed(2);
        } else if (weightTypeItem1 === "gram") {
            pricePerItem1 = ((costItem1 / weightItem1) * 28.35).toFixed(2);
        }
    } else if (submissionWeightType === "pound") { // Convert to pounds
        if (weightTypeItem1 === "ounce") {
            pricePerItem1 = ((costItem1 / weightItem1) * 16).toFixed(2);
        } else if (weightTypeItem1 === "pound") {
            pricePerItem1 = (costItem1 / weightItem1).toFixed(2);
        } else if (weightTypeItem1 === "gram") {
            pricePerItem1 = ((costItem1 / weightItem1) * 453.6).toFixed(2);
        }
    } else if (submissionWeightType === "gram") { // Convert to grams
        if (weightTypeItem1 === "ounce") {
            pricePerItem1 = ((costItem1 / weightItem1) / 28.35).toFixed(2);
        } else if (weightTypeItem1 === "pound") {
            pricePerItem1 = ((costItem1 / weightItem1) / 453.6).toFixed(2);
        } else if (weightTypeItem1 === "gram") {
            pricePerItem1 = (costItem1 / weightItem1).toFixed(2);
        }
    }


    costItem2 = document.getElementById("item-2-cost").value;
    weightItem2 = document.getElementById("item-2-weight").value;
    weightTypeItem2 = document.getElementById("item-2-weight-type").value

    if (submissionWeightType === "ounce") { // Convert to ounces
        if (weightTypeItem2 === "ounce") {
            pricePerItem2 = (costItem2 / weightItem2).toFixed(2);
        } else if (weightTypeItem2 === "pound") {
            pricePerItem2 = ((costItem2 / weightItem2) / 16).toFixed(2);
        } else if (weightTypeItem2 === "gram") {
            pricePerItem2 = ((costItem2 / weightItem2) * 28.35).toFixed(2);
        }
    } else if (submissionWeightType === "pound") { // Convert to pounds
        if (weightTypeItem2 === "ounce") {
            pricePerItem2 = ((costItem2 / weightItem2) * 16).toFixed(2);
        } else if (weightTypeItem2 === "pound") {
            pricePerItem2 = (costItem2 / weightItem2).toFixed(2);
        } else if (weightTypeItem2 === "gram") {
            pricePerItem2 = ((costItem2 / weightItem2) * 453.6).toFixed(2);
        }
    } else if (submissionWeightType === "gram") { // Convert to grams
        if (weightTypeItem2 === "ounce") {
            pricePerItem2 = ((costItem2 / weightItem2) / 28.35).toFixed(2);
        } else if (weightTypeItem2 === "pound") {
            pricePerItem2 = ((costItem2 / weightItem2) / 453.6).toFixed(2);
        } else if (weightTypeItem2 === "gram") {
            pricePerItem2 = (costItem2 / weightItem2).toFixed(2);
        }
    }



    costItem3 = document.getElementById("item-3-cost").value;
    weightItem3 = document.getElementById("item-3-weight").value;
    weightTypeItem3 = document.getElementById("item-3-weight-type").value

    if (submissionWeightType === "ounce") { // Convert to ounces
        if (weightTypeItem3 === "ounce") {
            pricePerItem3 = (costItem3 / weightItem3).toFixed(2);
        } else if (weightTypeItem3 === "pound") {
            pricePerItem3 = ((costItem3 / weightItem3) / 16).toFixed(2);
        } else if (weightTypeItem3 === "gram") {
            pricePerItem3 = ((costItem3 / weightItem3) * 28.35).toFixed(2);
        }
    } else if (submissionWeightType === "pound") { // Convert to pounds
        if (weightTypeItem3 === "ounce") {
            pricePerItem3 = ((costItem3 / weightItem3) * 16).toFixed(2);
        } else if (weightTypeItem3 === "pound") {
            pricePerItem3 = (costItem3 / weightItem3).toFixed(2);
        } else if (weightTypeItem3 === "gram") {
            pricePerItem3 = ((costItem3 / weightItem3) * 453.6).toFixed(2);
        }
    } else if (submissionWeightType === "gram") { // Convert to grams
        if (weightTypeItem3 === "ounce") {
            pricePerItem3 = ((costItem3 / weightItem3) / 28.35).toFixed(2);
        } else if (weightTypeItem3 === "pound") {
            pricePerItem3 = ((costItem3 / weightItem3) / 453.6).toFixed(2);
        } else if (weightTypeItem3 === "gram") {
            pricePerItem3 = (costItem3 / weightItem3).toFixed(2);
        }
    }


    // Print out values only if price per item is => 0 without any NaN or Infinity values.
    if ((pricePerItem1 => 0) && !(isNaN(pricePerItem1) || (weightItem1 <= 0))) {
        // document.getElementById("item-1-header").innerText = `Item #1's cost is $${pricePerItem1} per ${weightTypeItem1}.`
        document.getElementById("item-1-header").innerText = `Item #1's cost is $${pricePerItem1} per ${submissionWeightType}.`
    }

    if ((pricePerItem2 => 0) && !(isNaN(pricePerItem2) || (weightItem2 <= 0))) {
        // document.getElementById("item-2-header").innerText = `Item #2's cost is $${pricePerItem2} per ${weightTypeItem2}.`
        document.getElementById("item-2-header").innerText = `Item #2's cost is $${pricePerItem2} per ${submissionWeightType}.`
    }

    if ((pricePerItem3 => 0) && !(isNaN(pricePerItem3) || (weightItem3 <= 0))) {
        // document.getElementById("item-3-header").innerText = `Item #3's cost is $${pricePerItem3} per ${weightTypeItem3}.`
        document.getElementById("item-3-header").innerText = `Item #3's cost is $${pricePerItem3} per ${submissionWeightType}.`
    }
}