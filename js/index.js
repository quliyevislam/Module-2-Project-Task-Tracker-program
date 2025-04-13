let sortButton = document.querySelector(".sort-button-image");

let flag = true;

sortButton.addEventListener('click', (event) => {
    if (flag) {
        event.target.src = "./assets/images/descending-sort-button-hover.svg";
        flag = !flag;
    }
    else {
        event.target.src = "./assets/images/ascending-sort-button-hover.svg";
        flag = !flag;
    }
});

sortButton.addEventListener('mouseover', (event) => {
    if (flag) {
        event.target.src = "./assets/images/ascending-sort-button-hover.svg";
    }
    else {
        event.target.src = "./assets/images/descending-sort-button-hover.svg";
    }
});

sortButton.addEventListener('mouseout', (event) => {
    if (flag) {
        event.target.src = "./assets/images/ascending-sort-button-default.svg";
    }
    else {
        event.target.src = "./assets/images/descending-sort-button-default.svg";
    }
});
