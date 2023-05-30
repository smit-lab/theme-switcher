let toggle = document.getElementById("toggle");

toggle.addEventListener("click", darkTheme);

function darkTheme() {
  if (toggle.checked == true) {
    document.body.classList.add("dark-theme");
    document.body.classList.add("transition");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

window.addEventListener('load', () => {
  toggle.checked == false;
})