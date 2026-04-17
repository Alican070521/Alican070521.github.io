document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {

        const modal = document.createElement("div");
        modal.classList.add("modal-img");

        const big = document.createElement("img");
        big.src = img.src;

        modal.appendChild(big);
        document.body.appendChild(modal);

        modal.onclick = () => modal.remove();
    });
});