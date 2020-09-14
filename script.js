var feelingOptions = document.getElementsByClassName("wheel-option");

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
    let searchBar = document.getElementById("searchbar");

    let feelingWheel = document.getElementById('wheel-options-absolute');

    let hiddenText = document.getElementById('hidden-text');

    if(searchBar.value == "") {
        let x = Math.floor(Math.random() * feelingOptions.length);
        if(x >= 5 && x < feelingOptions.length - 1) {
            x ++;
        }

        console.log(x);
        console.log(feelingOptions[x].innerHTML);

        hiddenText.innerHTML = feelingOptions[x].innerHTML; //set hidden text and stretch button

        feelingWheel.style.transition = '0.7s ease-in-out';
        feelingWheel.style.top = (((5 - x) * 34) - 170).toString() + 'px';

        console.log(feelingWheel.style.top);
    }
}

function feelingReset() {
    let feelingWheel = document.getElementById('wheel-options-absolute');
    let hiddenText = document.getElementById('hidden-text');

    feelingWheel.style.transition = '0.2s ease-in-out';
    feelingWheel.style.top = '-170px';
    hiddenText.innerHTML = "I'm Feeling Lucky";
}