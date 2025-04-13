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
        event.target.src = flag ? "./assets/images/ascending-sort-button-hover.svg":
        "./assets/images/descending-sort-button-hover.svg";
});

sortButton.addEventListener('mouseout', (event) => {
    event.target.src = flag ? "./assets/images/ascending-sort-button-default.svg":
    "./assets/images/descending-sort-button-default.svg";
});

