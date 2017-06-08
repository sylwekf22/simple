function menu() {
    const ejected = document.querySelector("#ejected"),
          eject = document.querySelector("#eject"),
          navHideBtn = document.querySelector("#navHide"),
          navShowBtn = document.querySelector("#navShow");

    navHideBtn.onclick = function () {
        ejected.style.display = "none";
        eject.style.display = "block";
    }

    navShowBtn.onclick = function () {
        ejected.style.display = "block";
        eject.style.display = "none";
    }
}
/*TODO:This is to do*/


function showSearchField() {
    const magnifier = document.querySelector("#magnifier"),
          enterText = document.querySelector(".enterText");

    let clicked = false;

    magnifier.onclick = function () {
        if (clicked == false) {
            enterText.style.width = "130px";
            enterText.style.padding = "3px";
            clicked = true;
        } else {
            enterText.style.width = "0";
            enterText.style.padding = "0";
            clicked = false;
        }
    }
}