window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-button").addEventListener('click', function() {
    if (document.querySelector('.nav-links').classList.contains("hide")) {
      document.querySelector('.nav-links').style.display = 'flex';
      document.querySelector('.nav-links').classList.remove("hide");
      document.querySelector('.nav-links').classList.add("show");
    }
    else {
      document.querySelector('.nav-links').classList.remove("show");
      document.querySelector('.nav-links').classList.add("hide");
    }
});
});
