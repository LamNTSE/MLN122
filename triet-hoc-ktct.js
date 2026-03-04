// SCROLL REVEAL
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));

// ACTIVE NAV
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      navLinks.forEach(a => a.style.color='');
      const act = document.querySelector(`.nav a[href="#${e.target.id}"]`);
      if(act) act.style.color='rgba(245,240,232,0.95)';
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => navIO.observe(s));

// CARD 3D TILT
document.querySelectorAll('.card, .cc, .fc').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - 0.5;
    const y = (e.clientY - r.top)/r.height - 0.5;
    c.style.transform = `perspective(600px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-5px)`;
  });
  c.addEventListener('mouseleave', () => { c.style.transform=''; });
});
