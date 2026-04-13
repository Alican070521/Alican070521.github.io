const images = document.querySelectorAll("#gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const modal = document.createElement("div");
        modal.classList.add("modal-img");

   
        const modalImg = document.createElement("img");
        modalImg.src = img.src;

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener("click", (e) => {
            if (e.target !== modalImg) {
                modal.remove();
            }
        });


        document.addEventListener("keydown", function escClose(e) {
            if (e.key === "Escape") {
                modal.remove();
                document.removeEventListener("keydown", escClose);
            }
        });

    });
});