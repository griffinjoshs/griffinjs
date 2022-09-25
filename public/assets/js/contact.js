const contactPage = document.getElementById('contactPage')

contactPageData.forEach((data) => {
    contactPage.innerHTML = '',
    contactPage.innerHTML += `
    ${setHTML("#contact", contactSection(data.contactTitle))}
    `
  })