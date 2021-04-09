// Cart Back Button
const backButton = document.querySelector(".backarrow");

backButton.addEventListener("click", function() {
    window.history.back();
});

// Items Data Structure
const items = JSON.parse(localStorage.getItem("items"));

const itemMap = {
    "bun.png": {
        image: "bun.png",
        quantity: 1,
        price: "$2.00",
        value: 2,
    },
    "3buns.png": {
        image: "3buns.png",
        quantity: 3,
        price: "$6.00",
        value: 6,
    },
    "6buns.png": {
        image: "6buns.png",
        quantity: 6,
        price: "$11.00",
        value: 11,
    },
    "12buns.png": {
        image: "12buns.png",
        quantity: 12,
        price: "$20.00",
        value: 20,
    },
};

// Render Items in Cart
const content = document.querySelector(".Content");

const imagePaths = Object.keys(items);

items.forEach((item, index) => {
    const container = document.createElement("div");
    container.classList.add("cartview")

    const imageContainer = document.createElement("div");
    container.appendChild(imageContainer);
    imageContainer.classList.add("imageContainer");

    const image = document.createElement("img");
    image.src = itemMap[item.price].image;
    imageContainer.appendChild(image);
    
    const leftContent= document.createElement("div");
    imageContainer.appendChild(leftContent);
    leftContent.classList.add("leftContent");

    const rightContent= document.createElement("div");
    container.appendChild(rightContent);
    rightContent.classList.add("rightContent")

    const xImage = document.createElement("img");
    xImage.src = "X.png";
    xImage.alt = "Remove Icon";
    xImage.dataset.id = item.id;
    rightContent.appendChild(xImage);
    xImage.addEventListener("click", function(event) {
        let newItems = localStorage.getItem("items");
        newItems = JSON.parse(newItems);
        newItems = newItems.filter((item) => item.id !== event.target.dataset.id);
        localStorage.setItem("items", JSON.stringify(newItems));

        const bagCount = localStorage.getItem("bag-count");
        localStorage.setItem("bag-count", parseInt(bagCount) - 1);

        const bagCountElem = document.querySelector(".bag-count");
        bagCountElem.textContent = parseInt(bagCount) - 1;
        event.target.parentNode.parentNode.remove();
    })

    const priceContent= document.createElement("div");
    rightContent.appendChild(priceContent);
    priceContent.classList.add("priceContent")
    
    const flavor = document.createElement("p");
    flavor.textContent = "ORIGINAL";
    leftContent.appendChild(flavor);

    const quantity = document.createElement("p");
    quantity.textContent = "Quantity: " + itemMap[item.price].quantity;
    leftContent.appendChild(quantity);

    const glazing = document.createElement("p");
    glazing.textContent = "Glazing: " + item.glazing;
    leftContent.appendChild(glazing);

    const cost = document.createElement("p");
    cost.textContent = itemMap[item.price].price;
    priceContent.appendChild(cost);

    content.appendChild(container);
});

// Calculate and Render Total Price
let total = 0;
items.forEach((item) => {
    total += itemMap[item.price].value;
});

const totalPrice = document.querySelector("#totalPrice");

totalPrice.textContent = "$" + total + ".00"




