const nav = document.querySelectorAll('nav')[0];
const htkLogo = document.getElementsByClassName('nav__logo')[0];
const navHamburger = document.getElementsByClassName('nav__hamburger')[0];
const headroom = new Headroom(nav);

navHamburger.addEventListener('click', function() {
  toggleHamburger();
})

htkLogo.addEventListener('click', function() {
  moo();
})

// Also close the hamburger if any of the links are clicked
document.querySelectorAll('.nav__link').forEach(item => {
  item.addEventListener('click', function() {
    toggleHamburger();
  });
})

function moo() {
  let num = randomInt(3);

  const mooSound = new Audio(`/audio/moo_${num}.mp3`);
  // mooSound.play();
  console.log('The sound got too annoying. So here`s a textual `moo` instead. MOOOOO!');
}

// Returns int from [1, max]
function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


// Toggles the hamburger menu, toggles total overflow
function toggleHamburger() {

  // Make DOM reference for body
  const body = document.querySelectorAll('body')[0];

  // From active to inactive:
  if (nav.classList.contains('active')) {
    // Remove the 'active state' from the NAV item
    nav.classList.remove('active');

    // Restore scrolling on the rest of the page
    body.style.overflowY = 'auto';

    // Adjust the 'tabindex' values
    document.querySelectorAll('.nav__link').forEach(item => {
      item.tabIndex = -1;
    })
  } else {
    // Add an 'active state' to the NAV item
    nav.classList.add('active');

    // Prevent scrolling when the menu is active
    body.style.overflowY = 'hidden';

    // Reset the 'tabindex' values in 'nav__link' items
    document.querySelectorAll('.nav__link').forEach(item => {
      item.tabIndex = 0;
    })
  }

}

headroom.init();

const swup = new Swup();
