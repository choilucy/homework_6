const bag = document.querySelector(".bag-count");

bag.textContent = localStorage.getItem("bag-count") || 0;
