// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// Hello Button

const helloBtn = document.getElementById("helloBtn");

helloBtn.addEventListener("click", function () {

    alert("Hello! 💕 Thank you for visiting my website.");

});