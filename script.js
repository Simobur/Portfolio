const btnNav = document.querySelector(".btn-nav");
const mobileNav = document.querySelector(".section-nav-mobile");
const btnClose = document.querySelector(".btn-nav-close");
const linkNav = document.querySelectorAll(".link-nav-mobile");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const slides = document.querySelectorAll(".slide");
const sectionPortfolio = document.querySelector(".project--main");

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

let touchStart, touchEnd;

sectionPortfolio.addEventListener("touchstart", function (e) {
  touchStart = e.changedTouches[0].screenX;
});

sectionPortfolio.addEventListener("touchend", function (e) {
  touchEnd = e.changedTouches[0].screenX;
  if (touchStart > 1.05 * touchEnd) nextSlide();
  if (1.05 * touchStart < touchEnd) prevSlide();
});

btnRight.addEventListener("click", function () {
  nextSlide();
});

btnLeft.addEventListener("click", function () {
  prevSlide();
});
