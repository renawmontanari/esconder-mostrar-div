
'use strict'

const button = document.querySelector("#action-btn");

button.addEventListener("click", function() {
    const container = document.querySelector(".container");

    container.classList.toggle("hide");
});

