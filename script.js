const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
document.addEventListener("pointermove", e => {
  if (window.innerWidth > 900) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

const hero = document.querySelector(".hero");
const orb = document.querySelector(".orb-one");
if (hero && orb && window.innerWidth > 900) {
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    orb.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
  });
}
