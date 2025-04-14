let inputXButton = document.querySelector(".input-x-button-image");

inputXButton.addEventListener('mouseover', (event) => {
    event.target.src = "./assets/images/x-button-hover.svg";
});

inputXButton.addEventListener('mouseout', (event) => {
    event.target.src = "./assets/images/x-button-default.svg";
});


inputXButton.addEventListener("click", event => {
    let input = document.querySelector("input");
    input.value = "";
});

function removeElementFromList(element) {
    element.remove()
    let listElementContainer = document.querySelector(".list-element-container");
    if (!listElementContainer.hasChildNodes()) {
        listElementContainer.style.display = "none";
        let inputContainer = document.querySelector(".input-container");
        inputContainer.style.display = "flex";
    }
}

function createListElement(text) {
    let listElement = document.createElement("div");
    listElement.classList.add("list-element");
    listElement.innerHTML = `<span class="list-element-text">${text}</span>
    <img class="x-button-image x-button" src="./assets/images/x-button-default.svg" alt="x button image">`;
    return listElement;
}

let addButton = document.querySelector(".add-button")

addButton.addEventListener("click", event => {
    let input = document.querySelector("input");

    // if (input.value) {
        let listElementContainer = document.querySelector(".list-element-container");
        let newChild = createListElement(input.value);

        newChild.lastChild.addEventListener('mouseover', (event) => {
            event.target.src = "./assets/images/x-button-hover.svg";
        });
        
        newChild.lastChild.addEventListener('mouseout', (event) => {
            event.target.src = "./assets/images/x-button-default.svg";
        });

        newChild.lastChild.addEventListener("click", event => {
            event.target.parentElement.remove();
            let listElementContainer = document.querySelector(".list-element-container");
            if (!listElementContainer.hasChildNodes()) {
                listElementContainer.style.display = "none";
                let inputContainer = document.querySelector(".input-container");
                inputContainer.style.display = "flex";
            }
        });

        listElementContainer.appendChild(newChild);
        input.parentElement.style.display = "none";
        listElementContainer.style.display = "flex";
        input.value = "";
    // }
});


let newInputButton = document.querySelector(".new-input-button");

newInputButton.addEventListener("click", event => {
    let inputContainer = document.querySelector(".input-container");
    inputContainer.style.display = "flex";
});


// sort-button
let sortButton = document.querySelector(".sort-button-image");

let flag = true;

sortButton.addEventListener('click', (event) => {
    if (flag) {
        event.target.src = "./assets/images/descending-sort-button-hover.svg";
        flag = !flag;
        let listElementContainer = document.querySelector(".list-element-container");
        let children = Array.from(listElementContainer.children);
        children.sort((a, b) => a.firstChild.textContent.localeCompare(b.firstChild.textContent));
        listElementContainer.innerHTML = "";
        children.forEach(element => {
            listElementContainer.appendChild(element);
        });
    }
    else {
        event.target.src = "./assets/images/ascending-sort-button-hover.svg";
        flag = !flag;
        let listElementContainer = document.querySelector(".list-element-container");
        let children = Array.from(listElementContainer.children);
        children.sort((a, b) => b.firstChild.textContent.localeCompare(a.firstChild.textContent));
        listElementContainer.innerHTML = "";
        children.forEach(element => {
            listElementContainer.appendChild(element);
        });
    }
});

sortButton.addEventListener('mouseover', (event) => {
    event.target.src = flag ? "./assets/images/ascending-sort-button-hover.svg" :
        "./assets/images/descending-sort-button-hover.svg";
});

sortButton.addEventListener('mouseout', (event) => {
    event.target.src = flag ? "./assets/images/ascending-sort-button-default.svg" :
        "./assets/images/descending-sort-button-default.svg";
});


newInputButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#9953F1";
    event.target.parentElement.style.backgroundColor = "#833AE0";
});


newInputButton.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "#833AE0";
    event.target.parentElement.style.backgroundColor = "#9953F1";
});