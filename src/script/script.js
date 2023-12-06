let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const navMenu = document.querySelector(".navmenu");
  const body = document.body;

  if (isMenuOpen) {
    navMenu.style.display = "flex";
    // Triggering a reflow before changing the transform for the transition to work
    void navMenu.offsetHeight;
    navMenu.style.transform = "translateY(0)";
    body.style.overflow = "hidden";
  } else {
    navMenu.style.transform = "translateY(-100%)";
    body.style.overflow = "visible";
    // After the transition duration, hide the navMenu
    setTimeout(() => {
      navMenu.style.display = "none";
    }, 500); // Adjust the duration to match your CSS transition
  }

  console.log(navMenu);
}
