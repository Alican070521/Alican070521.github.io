document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let cars = document.querySelectorAll(".car");

    cars.forEach(car => {
        let text = car.textContent.toLowerCase();

        if (text.includes(filter)) {
            car.style.display = "";
        } else {
            car.style.display = "none";
        }
    });
});