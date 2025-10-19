const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

const togglebtn = document.getElementById('toggle-btn');
const body = document.body;

togglebtn.addEventListener('click', () => {
  body.classList.toggle('dark')
})
