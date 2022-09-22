const animateHomeScreen = () => {
  document.querySelector(".nav-left").classList.add("slide-in-blurred-left");
  document.querySelector(".nav-right").classList.add("slide-in-right");
  document.querySelector("#myName").classList.add("tracking-in-expand");
  document.querySelector(".hero-right img").classList.add("bounce-in-bottom");
  document.querySelectorAll('.service-btn').forEach((btn) => {
    btn.classList.add('roll-in-left')
  })
    document.querySelectorAll('.hero-btn h4').forEach((btn) => {
      console.log(btn)
      btn.classList.add('tracking-in-expand')
  })
}

animateHomeScreen()