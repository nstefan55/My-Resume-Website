const savedScrollPosition = sessionStorage.getItem("scrollPosition");

if (savedScrollPosition) {
  window.scrollTo(0, savedScrollPosition);
}

window.addEventListener("scroll", () => {
  const currentScrolPosition = window.scrollY;
  sessionStorage.setItem("scrollPosition", currentScrolPosition);
});
