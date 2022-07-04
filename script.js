window.addEventListener("scroll", e => {
    const headerNav = document.querySelector(".header-nav");
    headerNav.classList.toggle("sticky", window.scrollY > 0)
  })