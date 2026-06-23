const currentYear = document.getElementById("currentYear");
const pageLinks = document.querySelectorAll('a[href^="#"]');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
