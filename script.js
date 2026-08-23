const flames = document.querySelectorAll(".fuego");

const text = document.querySelector(".text");


window.addEventListener("load", function () {

    console.log("🎂 Birthday cake loaded!");

    setTimeout(function () {

        // Light all flames
        flames.forEach(function (flame) {

            flame.classList.add("lit");

        });

        // Show birthday text
        text.classList.add("show");

    }, 3000);

});
