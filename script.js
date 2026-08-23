// const flames = document.querySelectorAll(".fuego");

// const text = document.querySelector(".text");


// window.addEventListener("load", function () {

//     console.log("🎂 Birthday cake loaded!");

//     setTimeout(function () {

//         // Light all flames
//         flames.forEach(function (flame) {

//             flame.classList.add("lit");

//         });

//         // Show birthday text
//         text.classList.add("show");

//     }, 3000);

// })
const flames = document.querySelectorAll(".fuego");
const text = document.querySelector(".text");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");


// =================================
// BIRTHDAY ANIMATION
// =================================

window.addEventListener("load", function () {

    console.log("🎂 Birthday cake loaded!");

    setTimeout(function () {

        // Light all candles
        flames.forEach(function (flame) {
            flame.classList.add("lit");
        });

        // Show birthday text
        text.classList.add("show");

    }, 3000);

});


// =================================
// OPEN LETTER
// =================================

envelope.addEventListener("click", function () {

    console.log("💌 Letter opened!");

    // Hide envelope
    envelope.style.opacity = "0";
    envelope.style.pointerEvents = "none";

    // Open letter
    setTimeout(function () {
        letter.classList.add("open");
    }, 300);

});


// =================================
// CLOSE LETTER
// =================================

closeLetter.addEventListener("click", function () {

    console.log("💌 Letter closed!");

    letter.classList.remove("open");

    // Bring envelope back
    setTimeout(function () {

        envelope.style.opacity = "1";
        envelope.style.pointerEvents = "auto";

    }, 400);

});
