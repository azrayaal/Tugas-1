let hamburgerOpen = false;

function openHamburger() {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const effectOnNavbar = document.getElementById("effect-on-navbar");
  const effectOffNavbar = document.getElementById("effect-off-navbar");

  if (!hamburgerOpen) {
    hamburgerMenu.style.display = "block";
    effectOnNavbar.style.display = "block";
    effectOffNavbar.style.display = "none";
    hamburgerOpen = true;
  } else {
    effectOnNavbar.style.display = "none";
    effectOffNavbar.style.display = "block";
    hamburgerMenu.style.display = "none";
    hamburgerOpen = false;
  }
}
