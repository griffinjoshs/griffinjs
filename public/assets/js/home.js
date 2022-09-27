// const animateHomeScreen = () => {
//   document.querySelector(".nav-left").classList.add("slide-in-blurred-left");
//   document.querySelector(".nav-right").classList.add("slide-in-right");
//   document.querySelector("#myName").classList.add("tracking-in-expand");
//   document.querySelector(".hero-right img").classList.add("bounce-in-bottom");
//   document.querySelectorAll('.service-btn').forEach((btn) => {
//     btn.classList.add('roll-in-left')
//   })
//     document.querySelectorAll('.hero-btn h4').forEach((btn) => {
//       console.log(btn)
//       btn.classList.add('tracking-in-expand')
//   })
// }

// animateHomeScreen()

const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')
const rollers = document.querySelectorAll('.roll-in')
const colorChanger = document.querySelectorAll('.color-change')

console.log(sliders)

const appearOptions = {
  root: null,
  threshold: 1,
  rootMargin: "0px"
};

const appearOnScroll = new IntersectionObserver (
  (entries, appearOnScroll) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      } else {
        entry.target.classList.add('appear')
        // entry.setAttribute('style', 'border: solid white 1px')
        appearOnScroll.unobserve(entry.target)
      }
    })
  })

  faders.forEach((fader) => {
    appearOnScroll.observe(fader)
  })

  sliders.forEach((slider) => {
    appearOnScroll.observe(slider)
  })

  rollers.forEach((roll) => {
    appearOnScroll.observe(roll)
  })

  colorChanger.forEach((change) => {
    appearOnScroll.observe(change)
  })