function xBtnVisibility() {
    let searchBar = document.getElementById("searchbar");
    let xBtn = document.getElementById("x-btn");

    if (searchBar.value != "") {
        xBtn.style.visibility = 'visible';
    } else {
        xBtn.style.visibility = 'hidden';
    }
}

function clearInput() {
    let searchBar = document.getElementById("searchbar");
    let xBtn = document.getElementById("x-btn");

    searchBar.value = "";
    xBtn.style.visibility = 'hidden';
}

function resizeRandom() {
    let feelingLucky = document.getElementById('feeling-lucky');
    let hiddenText = document.getElementById('hidden-text');

    let rand = Math.floor(Math.random() * 50);
    let str = "";

    for(let i = 0; i < rand; i++) {
        str = str.concat('x');
    }

    hiddenText.innerHTML = str;
    console.log(hiddenText.innerHTML);
}

function feelingWheel() {
    let feelingLucky = document.getElementById('feeling-lucky');
    let feelingWheel = document.getElementById('wheel-options-absolute');
    let feelingOptions = [];
    let hiddenText = document.getElementById('hidden-text');

}

function feelingReset() {
    console.log("mousout");
}