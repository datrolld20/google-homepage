function btnVisibility() {
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

