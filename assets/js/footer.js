document.addEventListener("DOMContentLoaded", async () => {
    const isInPages = location.pathname.includes("/pages/");

    const ruta = isInPages
        ? "../components/footer.html"
        : "components/footer.html";

    const response = await fetch(ruta);
    document.getElementById("footer-contenedor").innerHTML =
        await response.text();
});