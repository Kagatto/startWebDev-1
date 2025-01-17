"use strict";

const paragraph = document.querySelectorAll(".epic-paragraphs p");

paragraph.forEach((p) => {
    p.addEventListener("mouseover", () => {
        p.style.color = "#f00";

        setTimeout(() => {
            p.style.color = "inherit";
        }, 1000);
    });
});
