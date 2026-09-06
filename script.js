const navigationToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav-links");

if (navigationToggle && navigation) {
  const closeNavigation = () => {
    navigationToggle.setAttribute("aria-expanded", "false");
    navigation.removeAttribute("data-open");
  };

  navigationToggle.addEventListener("click", () => {
    const isOpen = navigationToggle.getAttribute("aria-expanded") === "true";
    navigationToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.toggleAttribute("data-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navigationToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeNavigation();
    }
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
