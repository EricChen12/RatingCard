const submitBtn = document.querySelector("#submit-btn");
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const btns = document.querySelectorAll(".rating-btn");
const selectedRate = document.querySelector("#selected-rate");

for (let btn of btns) {
    btn.addEventListener("click", function () {
        selectedRate.innerText = btn.innerText;
    })
}

submitBtn.addEventListener("click", function () {
    card1.style.display = "none";
    card2.style.display = "block";
})
