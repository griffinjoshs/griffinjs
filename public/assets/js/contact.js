const contactPage = document.getElementById('contactPage')

contactPageData.forEach((data) => {
    contactPage.innerHTML = '',
    contactPage.innerHTML += `
    ${skillSection(data.subHeader, data.header)}
    ${contactSection(data.contactTitle)}
    `
  })