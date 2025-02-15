// script.js

const seeMoreBtn = document.getElementById("see-more-btn");
const additionalContent = document.querySelector(".additional-content");

seeMoreBtn.addEventListener("click", () => {
  if (
    additionalContent.style.display === "none" ||
    additionalContent.style.display === ""
  ) {
    additionalContent.style.display = "inline";
    seeMoreBtn.textContent = "See Less";
  } else {
    additionalContent.style.display = "none";
    seeMoreBtn.textContent = "See More";
  }
});
