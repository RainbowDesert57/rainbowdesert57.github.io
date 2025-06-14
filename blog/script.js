document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Optional: remove class if you want animation on scroll back
          entry.target.classList.remove("visible");
        }
      });
    }, 
    {
      threshold: 0.4 // Adjust this to control how much of element must be visible
    }
  );

  lines.forEach(line => observer.observe(line));
});