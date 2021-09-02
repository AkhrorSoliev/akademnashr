// selectors
const navButton = document.getElementById('nav-button')
const miniNavbar = document.getElementById('mini-navbar')
// listeners
navButton.addEventListener('click', openNavbar)

// functions
function openNavbar() {
  miniNavbar.classList.toggle('hidden')
  miniNavbar.classList.toggle('open')
}
