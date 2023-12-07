function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = "none";
};
function resizeImage() {
    var image = document.querySelector(".background-image");
    var width = window.innerWidth;
    var height = window.innerHeight;
    image.style.width = width;
    image.style.height = height;
  }
  
  window.addEventListener("resize", resizeImage);