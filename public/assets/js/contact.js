contactPageData.forEach((data) => {
  contactPage.innerHTML = '',
  contactPage.innerHTML += `
  <section class="contact-options slide-in bottom" id='contact'>
  ${contactSection(data.contactTitle)}
  </section>
  `
})