const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function() {
    const filter = this.value.toLowerCase();
    const cars = document.querySelectorAll(".car");
    let visibleCount = 0;

    cars.forEach(car => {
       
        const name = car.querySelector("h5").textContent.toLowerCase();

        if (name.includes(filter)) {
            car.style.display = "";
            visibleCount++;
        } else {
            car.style.display = "none";
        }
    });

    const noResult = document.getElementById("no-result");
    if (!noResult) {
        const msg = document.createElement("p");
        msg.id = "no-result";
        msg.className = "text-center mt-3";
        msg.textContent = "Inga bilar hittades.";
        document.getElementById("cars").appendChild(msg);
    }

    if (visibleCount > 0) {
        document.getElementById("no-result").style.display = "none";
    } else {
        document.getElementById("no-result").style.display = "block";
    }
});