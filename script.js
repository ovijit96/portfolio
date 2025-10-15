// ======= QUICK CONFIG — Replace with your data =======
const DATA = {
  name: "Ovijit Kumar Dey",
  role: "Frontend Developer (HTML • CSS • JS)",
  location: "Chandpur, Bangladesh",
  email: "ovijitkd@gmail.com",
  phone: "+8801632750245",
  github: "https://github.com/ovijit96",
  linkedin: "https://www.linkedin.com/in/ovijit-dey-1073341a7/",
  website: "Working on it", // hides Website button if not a valid URL
  summary:
    "Passionate Frontend Developer skilled in semantic HTML, modern CSS, vanilla JavaScript, and the React framework. I build fast, accessible, and responsive web interfaces with clean user experiences and subtle interactive details.",
  skills: [
    "HTML5",
    "CSS3",
    "Responsive Layout",
    "Flexbox/Grid",
    "JavaScript (ES6+)",
    "React",
    "REST APIs",
    "Git/GitHub",
    "Performance Optimization"
  ],
  projects: [
    {
      title: "Penguin Fashion",
      desc: "A responsive fashion landing page built with HTML and CSS, featuring modern layout design, clean typography, and product highlights.",
      tech: ["HTML","CSS"],
      live: "https://ovijit96.github.io/penguin-fashion/",
      code: "https://github.com/ovijit96/penguin-fashion.git"
    },
    {
      title: "Flower Shop",
      desc: "A visually appealing flower shop website built using HTML and CSS, showcasing different product categories with a smooth and responsive interface.",
      tech: ["HTML","CSS"],
      live: "https://ovijit96.github.io/Flower-shop-B12A2/",
      code: "https://github.com/ovijit96/Flower-shop-B12A2.git"
    },
    {
      title: "Emergency Service",
      desc: "An interactive emergency service landing page developed with HTML, CSS, and JavaScript to display essential services and contact options.",
      tech: ["HTML","CSS","JavaScript"],
      live: "https://ovijit96.github.io/Emergency-service/",
      code: "https://github.com/ovijit96/Emergency-service.git"
    },
    {
      title: "MFS CashBee",
      desc: "A promotional web page for a mobile financial service, created with JavaScript to demonstrate UI interactivity and clean design.",
      tech: ["HTML","CSS","JavaScript"],
      live: "https://ovijit96.github.io/MFS-CashBee/",
      code: ""
    },
    {
      title: "C-S Ticket Systems",
      desc: "A ticket management system prototype built using JavaScript and React, hosted on Netlify with responsive UI and modular components.",
      tech: ["JavaScript","React"],
      live: "https://c-s-ticket-systems.netlify.app/",
      code: "https://github.com/ovijit96/cs-ticket.git"
    }
  ],
  experience: [
    {
      company: "Local Fish Wholesale Business (Arot)",
      role: "Manager – Operations & Sales",
      period: "2018 – Present (Part-time during study) | Chandpur, Bangladesh",
      points: [
        "Oversaw daily operations, supplier coordination, and customer management.",
        "Handled financial transactions, bank collections, and logistics efficiently.",
        "Developed strong leadership, negotiation, and record-keeping skills.",
        "Alongside management, began exploring web technologies and frontend design."
      ]
    },
    {
      company: "Open to Opportunities",
      role: "Frontend Developer (Trainee / Junior Level)",
      period: "Available Immediately",
      points: [
        "Motivated self-learner eager to join a professional development team and contribute to real-world projects.",
        "Able to quickly adopt and master new technologies, frameworks, and programming languages.",
        "Strong foundation in HTML, CSS, JavaScript, and React with a passion for clean, efficient code.",
        "Seeking an environment where I can grow through collaboration and hands-on experience."
      ]
    }
  ],
  education: [
    {
      school: "Chandpur Govt. College, Chandpur",
      credential: "Higher Secondary Certificate (HSC) – Science",
      period: "2014"
    },
    {
      school: "Hasan Ali Govt. High School, Chandpur",
      credential: "Secondary School Certificate (SSC) – Science",
      period: "2011"
    }
  ]
};

// ======= INIT RENDER =======
function render(){
  const $ = (sel)=>document.querySelector(sel);

  $('#name-bar').textContent = DATA.name;
  $('#name').textContent = DATA.name;
  $('.brand .role').textContent = DATA.role;
  $('#location').textContent = DATA.location;
  $('#summary').textContent = DATA.summary;

  // Social buttons
  $('#github').href = DATA.github;
  $('#linkedin').href = DATA.linkedin;
  const websiteBtn = document.getElementById('website');
  if (/^https?:\/\//.test(DATA.website)) {
    websiteBtn.href = DATA.website;
    websiteBtn.style.display = '';
  } else {
    websiteBtn.style.display = 'none';
  }

  $('#email').href = `mailto:${DATA.email}`;
  $('#email').textContent = DATA.email;
  $('#emailBtn').href = `mailto:${DATA.email}`;
  $('#phone').textContent = DATA.phone;

  document.title = `${DATA.name} — Frontend Developer`;

  // skills
  const skillsWrap = document.getElementById('skills');
  skillsWrap.innerHTML = '';
  DATA.skills.forEach(s=>{
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = s;
    skillsWrap.appendChild(span);
  });

  // projects
  const projWrap = document.getElementById('projects');
  projWrap.innerHTML = '';
  DATA.projects.forEach(p=>{
    const art = document.createElement('article');
    art.className = 'card project';
    art.innerHTML = `
      <h4 style="margin:0 0 6px">${p.title}</h4>
      <p class="muted" style="margin:0 0 10px">${p.desc}</p>
      <div class="chips" style="margin-bottom:10px">${p.tech.map(t=>`<span class='chip'>${t}</span>`).join('')}</div>
      <div class="links row">
        ${p.live ? `<a href='${p.live}' target='_blank' rel='noopener'>Live</a>`:''}
        ${p.code ? `<a href='${p.code}' target='_blank' rel='noopener'>Code</a>`:''}
      </div>`;
    projWrap.appendChild(art);
  });

  // experience
  const expWrap = document.getElementById('experience');
  expWrap.innerHTML = '';
  DATA.experience.forEach(e=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="row" style="justify-content:space-between">
        <strong>${e.role}</strong>
        <span class="muted" style="font-size:12px">${e.period}</span>
      </div>
      <div class="muted" style="margin:4px 0 6px">${e.company}</div>
      <ul style="margin:0; padding-left:18px">${e.points.map(pt=>`<li>${pt}</li>`).join('')}</ul>`;
    expWrap.appendChild(div);
  });

  // education
  const eduWrap = document.getElementById('education');
  eduWrap.innerHTML = '';
  DATA.education.forEach(ed=>{
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <strong>${ed.school}</strong>
      <div class="muted">${ed.credential}</div>
      <div class="muted" style="font-size:12px">${ed.period}</div>`;
    eduWrap.appendChild(div);
  });

  // year
  document.getElementById('year').textContent = new Date().getFullYear();
}

// ======= THEME =======
const themeToggle = document.getElementById('themeToggle');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const savedTheme = localStorage.getItem('resume-theme');

function applyTheme(mode){
  if(mode==='light') document.body.classList.add('light');
  else document.body.classList.remove('light');
}
function currentTheme(){
  return document.body.classList.contains('light') ? 'light' : 'dark';
}

themeToggle.addEventListener('click',()=>{
  const next = currentTheme()==='light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('resume-theme', next);
});

// Initialize theme & render
applyTheme(savedTheme || (prefersLight ? 'light' : 'dark'));
render();

// (Optional) If you ever bring back a print button with id="printBtn":
const printBtn = document.getElementById('printBtn');
if (printBtn) {
  printBtn.addEventListener('click',()=> window.print());
}
