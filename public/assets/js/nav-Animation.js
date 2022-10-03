const header = document.getElementById('header')
const displaySkill = document.getElementById("displaySkill");
const underSection = document.querySelector("#under-section");
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("menu");
const clearForMenu = Array.from(document.querySelectorAll(".clear-for-menu"));
const heroSection = document.querySelector('.hero-section')

const hideElementsForAnimation = () => {
    clearForMenu.forEach((clear) => {
      clear.classList.add('hide')
        })
  }
  
  const showElementsAfterAnimation = () => {
    clearForMenu.forEach((clear) => {
      clear.classList.remove('hide')
        })
  }
  
  const showHero = () => {
    if(heroSection != null){
      heroSection.setAttribute('style', 'visibility: visible;')
    }
  }
  
  const hideHero = () => {
    if(heroSection != null){
      heroSection.setAttribute('style', 'visibility: hidden;')
    }
  }
  
  const addAnimation = () => {
    document.body.classList.add('color-slide')
  };
  
  const hideMenu = () => {
  if(!navMenu.classList.contains('hide')){
    navMenu.classList.add("hide");
    navMenu.classList.remove("flex");  
  }
  }
  
  const showMenu = () => {
    if(navMenu.classList.contains('hide')){
      navMenu.classList.remove("hide");
      navMenu.classList.add("flex");  
    }
    }
  
  const linkTo = (link) => {
    addAnimation()
    hideMenu()
      hideElementsForAnimation()
    setTimeout(() => {
      window.location.href = link;
      showHero()
      resetAnimation()
    }, 2500)
  };
  
  const loadNavBar = () => {
    navbar.innerHTML += `
    <div class="nav-left slide-in left" onclick="linkTo('/')">
              <img src="./assets/images/grifflogobold.svg" height="80" width="80" id='navbar-logo' style='margin-right: 5px;'>
              <div class="name-logo">
                  <h1>Griffin</h1>
              </div>
          </div>
          <div class="nav-right slide-in right">
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
      <button onclick="linkTo('/')">
      <h5>Resume</h5>
      </button>
      <button onclick="linkTo('/contact')">
      <h5>Contact Me</h5>
      </button>
       <button onclick="linkTo('${socialMediaBtns[0].link}')">
       <h5>${socialMediaBtns[0].icon} ${socialMediaBtns[0].name}</h5>
       </button>
       <button onclick="linkTo('${socialMediaBtns[1].link}')">
       <h5>${socialMediaBtns[1].icon} ${socialMediaBtns[1].name}</h5>
       </button>
    </div>
  
    `;
  };
  
  const resetAnimation = () => {
    document.body.classList.remove("color-slide");
  };
  
  
  const displayMenu = async () => {
    addAnimation()
    hideElementsForAnimation()
    hideHero()
    setTimeout(() => {
      showMenu()
      document.getElementById("hamburger").classList.add("hide");
      document.getElementById("close").classList.remove("hide");
      resetAnimation()
    }, 2800)
   };
  
  const goBackToPage = () => {
     hideElementsForAnimation()
    hideMenu()
    addAnimation()
    setTimeout(() => {
      showElementsAfterAnimation()
      showHero()
      document.getElementById("hamburger").classList.remove("hide");
      document.getElementById("close").classList.add("hide");
      resetAnimation()
    }, 2800)
  };
  
  loadNavBar();
  loadMenu();
  
  