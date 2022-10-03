const webDevelopment = 'webDev'
const digitalMarketing = 'digMark'

let serviceBtn = document.querySelectorAll(".service-btn");

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
  `;
};

const contactPage = document.getElementById('contactPage')

let setHTML = (query, data) => {
  document.querySelector(query).innerHTML = data;
};

const pickService = (content) => {
  // console.log(content);
  if (underSection.classList.contains("hide")) {
    underSection.classList.remove("hide");
  }

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
  skills(content.skills);

  setHTML(".sub-header", content.subHeader);
  setHTML(".skill-h", content.header);
  setHTML(".about-me p", content.aboutParagraph);

  fetch("/api/projects")
    .then((response) => response.json())
    .then((resData) => {
      resData.results.forEach((data) => {
        let projectData = [];
        // console.log(data.topic);
        // console.log(projectData);
        if (data.topic.includes(content.identifyer)) {
          projectData.push(data);
          // console.log(projectData);
          projectData.map((data) => {
            document.querySelector(".project-section").innerHTML += `
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
      });
    });

  setHTML("#contact", contactSection(content.contactTitle));

  const socialBtnSec = document.querySelector(".social-btns");

  const showSocials = (htmlElement) => {
    socialMediaBtns.forEach((socialBtns) => {
      htmlElement.innerHTML += `
      <a href='${socialBtns.link}' target='_blank'>
      <button>
      ${socialBtns.icon}
      </button>
      </a>
      `;
    });
  };

  showSocials(socialBtnSec);
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

let chosenSkill;

// find clicked button
serviceBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    [].forEach.call(serviceBtn, (btn) => {
      btn.classList.remove("selected");
    });
    
    let data = e.target.closest(".hero-btn");
    if (data.id.includes(webDevelopment)) {
      chosenSkill = webDevelopment;
    } else if (data.id.includes(digitalMarketing)) {
      chosenSkill = digitalMarketing;
    }
    btn.classList.add("selected");
    setPageData(chosenSkill);
    // modal.className = "";
    setTimeout(() => {
      window.location.href = "#under-section";
      // console.log(document.querySelectorAll('.cert-btn'))
      openCertBtn = document.querySelectorAll(".cert-btn");
      // console.log(openCertBtn)
    }, 400);
  });
});

// modal
let certModal = document.querySelector("#cert-modal");

const modalSection = () => {
  certModal.innerHTML = `
  <button class='close-modal-btn'>
    <ion-icon name="close-outline"></ion-icon>  
  </button>
  `;
};

modalSection();

let certModalBtn = document.querySelectorAll('.cert-btn')

certModalBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    console.log(e.target)
    certModal.classList.remove('hide')
    // certModal.classList.remove('webDev-cert')
    // certModal.classList.remove('digMark-cert')
    if(chosenSkill === webDevelopment){
      certModal.classList.add('webDev-cert')
      console.log(chosenSkill)
    } else if (chosenSkill === digitalMarketing){
      certModal.classList.add('digMark-cert')
      console.log(chosenSkill)
    }
  })
}
)

document.querySelector('.close-modal-btn').addEventListener('click', e => {
  certModal.classList.add('hide')
})