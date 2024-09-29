/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav'),  // Changed 'nav-menu' to 'nav'
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav'); // Change 'nav-menu' to 'nav'
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD SHADOW HEADER ===============*/
// ========== CHANGE BACKGROUND HEADER ==========
const shadowHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
  }
  
  window.addEventListener('scroll', shadowHeader);
  

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
    // Get the scrollup element
    const scrollup = document.getElementById('scroll-up');
  
    // If the scroll is higher than 35 viewport height, add the show-scroll class to the tag with the scrollup class
    if (this.scrollY >= 350) {
      scrollup.classList.add('show-scroll');
    } else {
      scrollup.classList.remove('show-scroll');
    }
  };
  
  // Add event listener to window to call scrollup function on scroll
  window.addEventListener('scroll', scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay:300,
  //reset:true,//animation repeat
})
sr.reveal('.home__data, footer');
sr.reveal('.home__dish', { delay: 500, distance: '100px', origin: 'bottom' });
sr.reveal('.home__burger', { delay: 1200, distance: '100px', duration: 1500 });
sr.reveal('.home__ingredient', { delay: 1600, interval: 100 });
sr.reveal('.recipe__img, .delivery__img, .contact_image', { origin: 'left' });
sr.reveal('.recipe_data, .delivery_data, .contact_data', { origin: 'right' });
sr.reveal('.popular_card', { interval: 100 });