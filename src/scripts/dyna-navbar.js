"use strict";

document.addEventListener("click", (e) => {
    const openDetails = document.querySelector(".main-nav details[open]");
    if (openDetails && !openDetails.contains(e.target)) {
        openDetails.removeAttribute("open");
    }
});
