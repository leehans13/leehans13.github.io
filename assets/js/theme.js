(function () {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const nextTheme = theme === "dark" ? "light" : "dark";
    const label = `Switch to ${nextTheme} mode`;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  };

  applyTheme(document.documentElement.dataset.theme || "dark");

  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // The selected theme still applies for the current page.
    }
  });
})();
