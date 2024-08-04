// Animaciones
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.addEventListener("mouseover", () => {
    section.classList.add("active");
  });
  section.addEventListener("mouseout", () => {
    section.classList.remove("active");
  });
});

// Formulario
const form = document.querySelector(".form");
const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = nombreInput.value;
  const email = emailInput.value;
  console.log(`Nombre: ${nombre}, Email: ${email}`);
});

// Menú de navegación
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Scroll suave
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
