/* =========================================================
   Shreya L Naik — Portfolio JavaScript
   ========================================================= */

// ---- DATA ----
const technicalSkills = [
  "C", "C++", "Python", "JavaScript", "HTML", "CSS",
  "React", "Node.js", "SQL", "Data Structures", "Algorithms", "OOP"
];

const tools = ["VS Code", "Git", "GitHub", "MySQL", "Figma", "Postman"];

const projects = [
  {
    title: "Smart Vehicle Affordability and expense tracker",
    desc: "A Smart Vehicle Affordability and Expense Tracker system helps users calculate their monthly expenses (EMI, grocers, insurance, etc.) and determines how much they can afford to spend on a vehicle without financial strain. .",
    tags: ["HTML", "CSS", "JavaScript","Python"]
  },
  {
    title: "E-Commerce Website",
    desc: "Developed a responsive e-commerce frontend using HTML, CSS, and JavaScript with interactive product pages, navigation, and cart features.Focused on clean UI/ UX, cross-device compatibility, and performance optimization to enhance user experience.",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: " AI-DRIVEN MEDICAL IMAGE ANALYSIS (Ongoing)",
    desc: "Medical imaging relies on expert radiologists. AI can assist by automating detection of conditions (tumors, fractures) from X-rays, CT scans, or MRIs, improving accuracy and speed.",
    tags: ["Python", "HTML", "CSS", "JavaScript","CNN"]
  }
];

const timeline = [
  {
    date: "2022 — Present",
    title: "B.E. in Computer Science & Engineering",
    place: "Tontadarya College of Engineering, Gadag ",
    desc: "Pursuing undergraduate degree with focus on software development, data structures, and modern web technologies."
  },
  {
    date: "2020 — 2022",
    title: "Pre-University (PCMB)",
    place: "Sanmarg Pre University College, Gadag ",
    desc: "Completed pre-university with strong foundation in mathematics, physics, and computer science."
  },
  {
    date: "Up to 2020",
    title: "SSLC",
    place: "Basaveshwar English Medium High School Gadag",
    desc: "Completed schooling with distinction, building the academic foundation for engineering studies."
  }
];

const certifications = [
  "Basic C Programming",
  "Data Structures & Algorithms",
  "Introduction to Machine Learning",
  "Introduction To Cyber Security",
  "Introduction to Digital Marketing"
];

// ---- RENDER ----
const $ = (sel) => document.querySelector(sel);

$("#technicalSkills").innerHTML = technicalSkills
  .map((s) => `<span class="skill-chip">${s}</span>`).join("");

$("#toolsGrid").innerHTML = tools
  .map((t) => `<div class="tool-item">${t}</div>`).join("");

$("#projectsGrid").innerHTML = projects
  .map((p, i) => `
    <article class="project-card reveal">
      <div class="project-number">0${i + 1}</div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

$("#timeline").innerHTML = timeline
  .map((t) => `
    <div class="timeline-item reveal">
      <div class="timeline-date">${t.date}</div>
      <h4 class="timeline-title">${t.title}</h4>
      <p class="timeline-place">${t.place}</p>
      <p class="timeline-desc">${t.desc}</p>
    </div>
  `).join("");

$("#certGrid").innerHTML = certifications
  .map((c) => `<div class="cert-item reveal">🏆 ${c}</div>`).join("");

$("#year").textContent = new Date().getFullYear();

// ---- NAVBAR SCROLL ----
const navbar = $("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ---- MOBILE MENU ----
const hamburger = $("#hamburger");
const navLinks = $(".nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---- REVEAL ON SCROLL ----
document.body.classList.add("js-ready");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
