document.addEventListener("DOMContentLoaded", async () => { 
  const isInPages = location.pathname.includes("/pages/"); 
  const ruta = isInPages 
  ? "../components/menu.html" 
  :"components/menu.html"; 
  const response = await fetch(ruta); 
  document.getElementById("menu-contenedor").innerHTML = await response.text(); 
});
