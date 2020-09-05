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
  mooSound.play();
}

// Returns int from [1, max]
function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}


// Toggles the hamburger menu, toggles total overflow
function toggleHamburger() {

  const body = document.querySelectorAll('body')[0];

  if (nav.classList.contains('active')) {
    nav.classList.remove('active');

    body.style.overflowY = 'auto';
    // Restore scrolling
  } else {
    nav.classList.add('active');

    body.style.overflowY = 'hidden';
    // Prevent scrolling when the menu is active
  }

}

headroom.init();

const swup = new Swup();
