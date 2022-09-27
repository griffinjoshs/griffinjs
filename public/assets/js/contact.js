contactPageData.forEach((data) => {
  contactPage.innerHTML = '',
  contactPage.innerHTML += `
  ${contactSection(data.contactTitle)}
  `
})