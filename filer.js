document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".car").forEach(car => {
        car.style.display = car.textContent.toLowerCase().includes(value) ? "" : "none";
    });
});