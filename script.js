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


/* AVVYA premium motion */
(() => {
  const glow = document.getElementById('cursorGlow');
  if (glow) {
    window.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, {passive:true});
  }
  const selectors = [
    '.service-card','.work-card','.process-card','.stat-card','.review-card',
    '.section-title','.section-head','.contact-card'
  ];
  const els = document.querySelectorAll(selectors.join(','));
  els.forEach((el,i) => {
    el.classList.add('reveal-rich');
    el.style.transitionDelay = Math.min((i % 5) * 70, 280) + 'ms';
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  els.forEach(el => io.observe(el));
})();
