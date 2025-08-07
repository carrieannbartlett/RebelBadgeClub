const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupCaption = document.getElementById("popupCaption");

function showPopup() {
    popup.classList.add("popupVisible");
    popup.classList.remove("popupHidden");
}

function hidePopup() {
    console.log("hide triggered");
  popup.classList.remove("popupVisible");
  popup.classList.add("popupHidden")
}

document.querySelectorAll("section").forEach(section => {
    section.addEventListener("click", () => {
        const imgSrc = section.getAttribute("data-image");
        const caption = section.getAttribute("data-caption");
        console.log(imgSrc);
        if (imgSrc) {
            popupImage.src = imgSrc;
            popupCaption.textContent = caption || "";
            showPopup();
        }
    });
});

popupImage.addEventListener("click", (e) => {
    e.stopPropagation();
    hidePopup();
});


