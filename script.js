// =========================
// GET THE ELEMENTS
// =========================

const cake = document.getElementById("cake");

const flames = document.querySelectorAll(".fuego");

const text = document.querySelector(".text");


// =========================
// START THE BIRTHDAY
// =========================

window.addEventListener("load", function () {

    console.log("Birthday page loaded 🎂");

    // Wait for the cake animation to finish
    setTimeout(function () {

        // Show the flames
        flames.forEach(function (flame) {
            flame.classList.add("lit");
        });

        // Show birthday message
        text.classList.add("show");

    }, 3000);

});
