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

// Only add listener if the button exists
if (togglebtn) {
  togglebtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
}

  // Guaranteed, robust IntersectionObserver implementation with logging + fallback
      document.addEventListener("DOMContentLoaded", () => {
        const items = document.querySelectorAll(".scroll-reveal");
        console.log("scroll-reveal elements found:", items.length);

        // If no elements, stop (helps debugging)
        if (!items.length)
          return console.warn("No .scroll-reveal elements found in DOM.");

        // Fallback: If IntersectionObserver not supported, reveal everything
        if (!("IntersectionObserver" in window)) {
          console.warn(
            "IntersectionObserver not supported — revealing all items as fallback."
          );
          items.forEach((el) => el.classList.add("active"));
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Debug log so you can see when items intersect
              // Remove/comment console.log if you dislike logs
              console.log(
                `Entry for #${entry.target.id}: isIntersecting=${entry.isIntersecting}, intersectionRatio=${entry.intersectionRatio}`
              );
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              } else {
                // If you want reveal only once, comment out next line
                entry.target.classList.remove("active");
              }
            });
          },
          { threshold: 0.12 }
        ); // 12% visibility to trigger

        items.forEach((el) => observer.observe(el));

        // Trigger a manual check on load (useful if page loaded scrolled down)
        // Not strictly necessary with IntersectionObserver but safe.
        window.requestAnimationFrame(() => {
          console.log("Initial visibility check complete.");
        });
      });
      console.log("Scroll reveal JS loaded!");
