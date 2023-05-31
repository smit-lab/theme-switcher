let toggle = document.getElementById("toggle");
let bodyTheme = document.getElementById("body");
toggle.addEventListener("click", () => {
  darkTheme(bodyTheme);
});

function darkTheme(bodyTheme) {
  if (toggle.checked == true) {
    bodyTheme.setAttribute("dark-theme", "dark");
    bodyTheme.classList.add("transition");
  } else {
    bodyTheme.removeAttribute("dark-theme", "dark");
  }
}

window.addEventListener("load", () => {
  toggle.checked = false;
});

window.addEventListener("beforeunload", () => {
  toggle.checked = false;
});
