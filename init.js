document.addEventListener("DOMContentLoaded", () => {

    const nav = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">Optimus Auto Market</a>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav">
          <div class="navbar-nav ms-auto">
            <a class="nav-link" href="bilar.html">Bilar</a>
            <a class="nav-link" href="galleri.html">Galleri</a>
            <a class="nav-link" href="om.html">Om oss</a>
            <a class="nav-link" href="kontakt.html">Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
    `;


    const footer = `
    <footer class="footer text-center text-white p-4 mt-5">
        <p>© 2026 Optimus Auto Market - Vi säljer drömmar på hjul</p>
    </footer>
    `;

    document.body.insertAdjacentHTML("afterbegin", nav);
    document.body.insertAdjacentHTML("beforeend", footer);

});