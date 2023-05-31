const btnNav = document.querySelector(".btn-nav");
const mobileNav = document.querySelector(".section-nav-mobile");
const btnClose = document.querySelector(".btn-nav-close");
const linkNav = document.querySelectorAll(".link-nav-mobile");

btnNav.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});

btnClose.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});

console.log(linkNav);

linkNav.forEach((link) =>
  link.addEventListener("click", function () {
    console.log("click");
    mobileNav.classList.add("hidden");
  })
);
