const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const pills = document.querySelectorAll(".nav-pills a");
  const tables = document.querySelectorAll(".responsive-table");

  pills.forEach((pill, index) => {
    pill.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all pills and hide all tables
      pills.forEach((p) => p.classList.remove("active"));
      tables.forEach((table) => table.classList.remove("active"));

      // Add active class to the clicked pill and display the corresponding table
      this.classList.add("active");
      tables[index].classList.add("active");
    });
  });
});


// Get the button element
var mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

