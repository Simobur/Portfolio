const btnNav = document.querySelector(".btn-nav");
const mobileNav = document.querySelector(".section-nav-mobile");
const btnClose = document.querySelector(".btn-nav-close");
const linkNav = document.querySelectorAll(".link-nav-mobile");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const slides = document.querySelectorAll(".slide");
const sectionPortfolio = document.querySelector(".section-portfolio");

btnNav.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
  btnNav.classList.toggle("hidden");
});

btnClose.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
  btnNav.classList.toggle("hidden");
});

linkNav.forEach((link) =>
  link.addEventListener("click", function () {
    console.log("click");
    mobileNav.classList.add("hidden");
    btnNav.classList.remove("hidden");
  })
);

let currSlide = 1;

const nextSlide = function () {
  currSlide++;
  if (currSlide === slides.length + 1) currSlide = 1;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currSlide + 1)}%)`;
  });
};

const prevSlide = function () {
  currSlide--;
  if (currSlide < 1) currSlide = slides.length;
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currSlide + 1)}%)`)
  );
};

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

sectionPortfolio.addEventListener("swiped-left", function () {
  nextSlide();
});
sectionPortfolio.addEventListener("swiped-right", function () {
  prevSlide();
});

btnRight.addEventListener("click", function () {
  nextSlide();
});

btnLeft.addEventListener("click", function () {
  prevSlide();
});