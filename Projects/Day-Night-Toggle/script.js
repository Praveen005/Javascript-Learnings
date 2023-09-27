const switchBox = document.querySelector(".sun-moon");

// const nightTime= true;
document.querySelector("input").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("move");
        document.body.style.background= '#fff';
    } else {
        switchBox.classList.remove("move");
        document.body.style.background= '#000';

    }
});