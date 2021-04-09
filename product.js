const radioElements = document.querySelectorAll(".radio"); 
const CinnamonBuns = document.querySelector(".CinnamonBun");

for (radioElement of radioElements) {
    radioElement.addEventListener("click", function(event) {
        CinnamonBuns.src = event.target.value
    });
}

const addtoBag = document.querySelector("#addtobag");
const bag = document.querySelector(".bag-count");

bag.textContent = localStorage.getItem("bag-count") || 0;

addtoBag.addEventListener("click",function(){
    const bagCount = localStorage.getItem("bag-count")
    if (bagCount) {
        localStorage.setItem("bag-count", parseInt(bagCount) + 1)
    } else { 
        localStorage.setItem("bag-count", 1)
    }
    bag.textContent = localStorage.getItem("bag-count") || 0;
});

const productForm = document.querySelector("#productForm");

productForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData = [...formData];
    const items = localStorage.getItem("items");
    if (items) {
        localStorage.setItem("items", JSON.stringify([...JSON.parse(items), {
            id: Math.random().toString(16).slice(2),
            [formData[0][0]]: formData[0][1],
            [formData[1][0]]: formData[1][1],
        }]));
    } else {
        localStorage.setItem("items", JSON.stringify([{
            id: Math.random().toString(16).slice(2),
            [formData[0][0]]: formData[0][1],
            [formData[1][0]]: formData[1][1],
        }]));
    }
});
