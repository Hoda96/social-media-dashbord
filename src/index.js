const toggle = document.querySelector(".toggle-checkbox");

toggle.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    handler(false);
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    handler(true);
  }
});
