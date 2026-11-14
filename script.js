// Cambia esta dirección por la URL pública de tu sistema POS.
const URL_SISTEMA = "https://tupuntodeventa.vercel.app/";

const iosLink = document.getElementById("ios-link");
iosLink.href = URL_SISTEMA;
iosLink.target = "_blank";
iosLink.rel = "noopener";

document.getElementById("year").textContent = new Date().getFullYear();
