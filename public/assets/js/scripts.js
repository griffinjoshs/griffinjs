const header = document.getElementById('header')
const displaySkill = document.getElementById("displaySkill");
const underSection = document.querySelector("#under-section");
let serviceBtn = document.querySelectorAll(".service-btn");
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("menu");
const clearForMenu = document.querySelector(".clear-for-menu");
const heroSection = document.querySelector('.hero-section')
const modal = document.querySelector("#cert-modal");
const socialMediaBtns = [
  {
    icon: "<ion-icon name='logo-github'></ion-icon>",
    link: "https://github.com/griffinjoshs",
  },
  {
    icon: "<ion-icon name='logo-linkedin'></ion-icon>",
    link: "https://www.linkedin.com/in/griffin-surett-44a13b16a/",
  },
];

const linkTo = (link) => {
  window.location.href = link;
};

const loadNavBar = () => {
  navbar.innerHTML += `
  <div class="nav-left" onclick="linkTo('/')">
            <img src="./assets/images/grifflogobold.svg" height="80" width="80" id='navbar-logo' style='margin-right: 5px;'>
            <div class="name-logo">
                <h1>Griffin</h1>
            </div>
        </div>
        <div class="nav-right">
       <button class='icon' id='hamburger' onclick='displayMenu()'>
        <ion-icon name="menu-outline"></ion-icon>
         </button>
       <button class='icon hide' id='close' onclick='goBackToPage()'>
       <ion-icon name="close-outline"></ion-icon>
       </button>
       <button class='icon hide' id='scrollTop'>
       </button>
       </div>
  `;
};

const loadMenu = () => {
  navMenu.classList.remove("flex");
  navMenu.innerHTML += `
  <div class='menu-btns'>
    <button onclick="linkTo('/')">
    <h5>Home</h5>
    </button>
    <button onclick="linkTo('/about')">
    <h5>About</h5>
    </button>
    <button onclick="linkTo('/')">
    <h5>Resume</h5>
    </button>
    <button onclick="linkTo('/contact')">
    <h5>Contact Me</h5>
    </button>
  </div>

  `;
};

const addAnimation = () => {
  document.body.classList.add('color-slide')
};

const resetAnimation = () => {
  document.body.classList.remove("color-slide");
};

const displayMenu = async () => {
  addAnimation()
  heroSection.setAttribute('style', 'visibility: hidden;')
  if(!underSection.classList.contains('hide')) {
    underSection.classList.add('hide')
  }
  setTimeout(() => {
    clearForMenu.classList.add("hide");
    navMenu.classList.remove("hide");
    navMenu.classList.add("flex");
    document.getElementById("hamburger").classList.add("hide");
    document.getElementById("close").classList.remove("hide");
    resetAnimation()
  }, 2800)
 };

const goBackToPage = () => {
  clearForMenu.classList.remove("hide");
  navMenu.classList.add("hide");
  navMenu.classList.remove("flex");  
  addAnimation()
  setTimeout(() => {
    heroSection.setAttribute('style', 'visibility: visible;')
    document.getElementById("hamburger").classList.remove("hide");
    document.getElementById("close").classList.add("hide");
    resetAnimation()
  }, 2800)
};

loadNavBar();
loadMenu();

const modalSection = () => {
  modal.innerHTML = `
  <button>
    <ion-icon name="close-outline"></ion-icon>  
  </button>
  `;
};

modalSection();

const skillSection = (subHeader, header) => {
  return `
  <div class="animated-img-container">
  <div class="top-img-area">
      <img src="./assets/images/blueliquid.jpg" />
  </div>
<section class="skill-header" id='down-page'>
<div class="skill-header-top">
<div class="top-left">
</div>
<div class="top-right">
</div>
</div>
<div class="skill-header-bottom">
<h3 class="sub-header">${subHeader}</h3>
<br />
${header}
</div>
</div>
</section>
  `;
};

const infoSection = (aboutParagraph, skill) => {
  return `
  <section class="info">
<!-- <div class="info-wrap"> -->
<div class="box-section">
</div>
<div class="about-me">
  <h4 class="sub-header">My name is <span class="emphasize-text">Griffin</span></h4>
  <p>
  ${aboutParagraph}
  </p>
  <div class="about-btns">
      <button class="square-btn transparent-btn">Hire Me</button>
      <button class="square-btn white-btn cert-btn" name='${skill}-cert'>View My Certification</button>
  </div>
  
</div>
<div class="verticle-title">
  <h3 class="section-header">About Me</h3>
</div>
<!-- </div> -->
</section>
  `;
};

const skills = (content) => {
  content.map(
    (skillData) =>
      (document.querySelector(".box-section").innerHTML += `
    <div class="info-box">
  <h3 class="box-icon">${skillData.icon}</h3>
  <div class="info-text">
      <h4>${skillData.skill}</h4>
      </div>
  </div>
</div>
    `)
  );
};

const contactSection = (title) => {
  return `
  <section class="contact-options" id='contact'>
<div class="contact-area">
<div class="contact-details">
    <div class="addresses">
    <div class="way-of-contact">
    <a href = "mailto: griffin@toksecretformula.com">
        <h4><ion-icon name="mail-outline"></ion-icon></h4>
        <h5>griffin@toksecretformula.com</h5>
    </div>
    </a>
    <a href="tel:+732-939-1309">
    <div class="way-of-contact">
      <h4><ion-icon name="phone-portrait-outline"></ion-icon></h4>
      <h5>732-939-1309</h5>
  </div>
  </a>
</div>
<div class="divider"></div>
<div class="social-btns">

</div>
<div class="divider"></div>
<h4 class="footer-text">© 2022 Griffins Web Services.</h4>
</div>
<div class="contact-form">
    <div class='mobile-title'>
    <h3>Contact Form</h3>
    </div>
    <form action="/api/subscribe" method="POST">
      <div class="form-name-section">
          <input type="text" class='contact-input input-field name-input' name="firstName" placeholder="First Name">
          <input type="text" class='contact-input input-field name-input' name="lastName" placeholder="Last Name">
      </div>
      <input type="email" class='contact-input input-field email' name="email" placeholder="Email Address">
      <input type="text" class='contact-input input-field subject' name="subject" placeholder="Subject">
      <textarea class='contact-input textarea' name="message" placeholder="Message"></textarea>
      <button type="submit" class="square-btn transparent-btn">Send</button>
    </form>
</div>
</div>
<div class="verticle-title">
  <h3 class="section-header">${title}</h3>
</div>
</section>
  `;
};

const pickService = (content) => {
  // console.log(content);
  if (underSection.classList.contains("hide")) {
    underSection.classList.remove("hide");
  }
  underSection.innerHTML = "";
  underSection.innerHTML += `
  ${skillSection(content.subHeader, content.header)}
${infoSection(content.aboutParagraph, content.identifyer)}
<section class="work-section">
<div class="typeOfWork-section">
</div>
<div class="space-section"></div>
<div class="circle-wrap">
  <div class="circle"></div>
</div>
</section>
<section class="projects">
<div class="verticle-title">
<h3 class="section-header">My Projects</h3>
</div>
<div class="project-section" id='project-section'></div>
</section>
${contactSection(content.contactTitle)}
  `;
  (document.querySelector(".typeOfWork-section").innerHTML = ""),
    (document.querySelector(".box-section").innerHTML = ""),
    content.workOptions.map(
      (work) =>
        (document.querySelector(".typeOfWork-section").innerHTML += `
    <div class="type-of-work">
    <h3>${work.optionIcon}</h3>
    <h5>${work.optionName}</h5>
    </div>
    `)
    );

    // console.log(document.getElementById('project-section'))

  skills(content.skills);

  const socialBtnSec = document.querySelector(".social-btns");

  socialMediaBtns.map((socialBtns) => {
    socialBtnSec.innerHTML += `
    <a href='${socialBtns.link}' target='_blank'>
    <button>
    ${socialBtns.icon}
    </button>
    </a>
    `;
  });
};

// set specific skill's data to page
const setPageData = (chosenSkill) => {
  // console.log(chosenSkill);
  // let chosenSkillData;
  skillData.forEach((skill) => {
    if (chosenSkill === skill.identifyer)
      // console.log(skill)
      pickService(skill);
  });
};

// modal
let openCertBtn = document.querySelectorAll(".cert-btn");

modal.addEventListener("click", (e) => {
  let closedModal = e.target.closest("#cert-modal");
  // console.log(closedModal);
  closedModal.classList.add("hide");
});

// find clicked button
serviceBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    [].forEach.call(serviceBtn, (btn) => {
      btn.classList.remove('selected')
    })
    let data = e.target.closest(".hero-btn");
    let chosenSkill;
    if (data.id.includes("webDev")) {
      chosenSkill = "webDev";
    } else if (data.id.includes("digMark")) {
      chosenSkill = "digMark";
    }
    btn.classList.add("selected");
    setPageData(chosenSkill);
    // modal.className = "";
    setTimeout(() => {
      window.location.href = "#under-section";
      // console.log(document.querySelectorAll('.cert-btn'))
      openCertBtn = document.querySelectorAll(".cert-btn");
      // console.log(openCertBtn)
      afterPageOpen(chosenSkill);
    }, 400);
  });
});

const afterPageOpen = (skill) => {
  const projects = document.getElementById("project-section");

fetch("/api/projects")
  .then((response) => response.json())
  .then((resData) => {
    resData.results.forEach((data) => {
      // console.log(data.topic)
      // console.log(skill)
      let projectData = [];
      if(data.topic.includes(skill)){
        projectData.push(data)
        console.log(projectData)
        projectData.forEach((data) => {
          projects.innerHTML += `
    <div class="project-item">
            <div class="project-img" style="background: url(${data.image});"> </div>
            <div class='project-text'>
            <h5>${data.projectName}</h5>
            <p>${data.projectDescription}</p>
            <button class="project-btn square-btn transparent-btn">View Project</button>
            </div>
    </div>
    `;
        });
      }
    })
  });
};

openCertBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openModal(e);
  });
});

const openModal = (e) => {
  // console.log(e.target.name)
  let skill = e.target.name;
  let openedModal = document.querySelector("#cert-modal");
  // console.log(openedModal)
  openedModal.classList.remove("hide");
  if (skill.includes("webDev")) {
    openedModal.classList.add("webdev-Bg");
  } else if (skill.includes("digMark")) {
    openedModal.classList.add("digmark-Bg");
  }
};

