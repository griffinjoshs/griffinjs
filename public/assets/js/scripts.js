const webDevelopment = "webDev";
const digitalMarketing = "digMark";

let serviceBtn = document.querySelectorAll(".service-btn");

// load
let loadBoxes = []
const loadBoxContainer = document.querySelector('.load-box-container')

loadBoxes.push('<div class="box"></div>'.repeat(100))

console.log(loadBoxes)

loadBoxContainer.innerHTML = loadBoxes

setTimeout(() => {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.add('after')
    }
)
}, 1000);


// animations
const animate = (classes) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry.target);
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        // entry.setAttribute('style', 'border: solid white 1px')
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(classes);
};

const appearOptions = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

// const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
//   entries.forEach((entry) => {
//     console.log(entry.target);
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       // entry.setAttribute('style', 'border: solid white 1px')
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// });

document.querySelectorAll(".fade-in").forEach((fader) => {
  animate(fader);
});

document.querySelectorAll(".slide-in").forEach((slider) => {
  animate(slider);
});

document.querySelectorAll(".roll-in").forEach((roll) => {
  animate(roll);
});

document.querySelectorAll(".color-change").forEach((change) => {
  animate(change);
});

// content spawning

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
  document.querySelectorAll(".info-box").forEach((info) => {
    animate(info);
  });
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

const contactPage = document.getElementById("contactPage");

let setHTML = (query, data) => {
  document.querySelector(query).innerHTML = data;
};

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

const isEven = (num) => {
  return num % 2 == 0;
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
    <div class="type-of-work slide-in left">
    <h3>${work.optionIcon}</h3>
    <h5>${work.optionName}</h5>
    </div>
    `)
    );
  document.querySelectorAll(".type-of-work").forEach((info) => {
    animate(info);
  });
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
          let iterator = 1;
          projectData.forEach((data) => {
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

            iterator++;
            console.log(iterator);
          });
        }
      });
    });

  setHTML("#contact", contactSection(content.contactTitle));

  const socialBtnSec = document.querySelector(".social-btns");

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

const modalSection = () => {
  document.querySelector("#cert-modal").innerHTML = `
  <button class='close-modal-btn'>
    <ion-icon name="close-outline"></ion-icon>  
  </button>
  `;
};

modalSection();

document.querySelectorAll(".cert-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openCertModal();
  });
});

const openCertModal = () => {
  console.log(document.querySelector("#cert-modal"));
  // console.log(e.target);
  document.querySelector(".cert-modal-container").classList.remove("hide");
  document.querySelector(".cert-modal-container").classList.add("flex");
  // document.querySelector("#cert-modal").classList.remove('webDev-cert')
  // document.querySelector("#cert-modal").classList.remove('digMark-cert')
  if (chosenSkill === webDevelopment) {
    document.querySelector("#cert-modal").classList.add("webDev-cert");
    // console.log(chosenSkill);
  } else if (chosenSkill === digitalMarketing) {
    document.querySelector("#cert-modal").classList.add("digMark-cert");
    // console.log(chosenSkill);
  }
};

document.querySelector(".close-modal-btn").addEventListener("click", (e) => {
  document.querySelector(".cert-modal-container").classList.add("hide");
  document.querySelector(".cert-modal-container").classList.remove("flex");
});
