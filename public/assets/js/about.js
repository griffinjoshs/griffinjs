const aboutPage = document.getElementById('about-page')

aboutPageData.forEach((data) => {
    aboutPage.innerHTML = '',
    aboutPage.innerHTML += `
    ${skillSection(data.subHeader, data.header)}
    <div class="about-paragraph">
      I am A Rutgers certified Full-Stack Web Developer. However i'm much more sharp on the front-end side, but I know enough of the back end to build almost any type of website you may need! <br/><br/> I have been building websites for many years, first thru Wix and Weebly, and eventually Wordpress which took my site building skills to the next level. But it was during COVID lockdown when I signed up for the Rutgers Full-Stack bootcamp which is when it all changed! Learning how to code took my web development skills to the next level! I can now build any kind of application or website needed as well as being able to go into existing ones and make crazy changes! It’s even enhanced my Wordpress abilities! <br/><br/> I am currently open to all different kinds of work. From freelancing as well as being hired into a large company! I am extremely excited for whatever opportunities come my way and happy to take web development to another level! So don’t be shy! Whether you want me to build your small business a website, or want me to join your team as a developer. Make sure to Contact me below!
    </div>
    <div class='about-btn-sec'>
    <button class="square-btn white-btn about-btn-1 cert-btn">View Web Development Certificate</button>
    <button class="square-btn white-btn about-btn-2 cert-btn">View Digital Marketing Certificate</button>
    </div>
    `
  })