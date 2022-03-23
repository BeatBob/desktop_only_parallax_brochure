const container = document.querySelector(".container");
// carousel item
const carouselSlide = document.querySelectorAll(".carousel-slide");
//Buttons
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
// animation
const itemDetail = document.querySelector(".item-detail");
const purchaseContainer = document.querySelector(".purchase-container");
const heroTitle = document.querySelector(".hero-title");
const women1 = document.querySelector(".women-img1");
const women2 = document.querySelector(".women-img2");
const women3 = document.querySelector(".women-img3");
//item index
let i = 0;

nextBtn.addEventListener("click", function () {
  if (i == carouselSlide.length - 1) {
    i = 0;
  } else {
    i++;
  }
  window.location.href = `#hero${i}`;
  console.log(i);

  anime();
});

previousBtn.addEventListener("click", function () {
  if (i == 0) {
    i = carouselSlide.length - 1;
  } else {
    i--;
  }
  window.location.href = `#hero${i}`;
  console.log(i);

  anime();
});

function anime() {
  switch (i) {
    case 0:
      heroTitle.style.left = "300px";
      heroTitle.style.transition = "0.7s";
      itemDetail.style.transform = "translateX(500px)";
      itemDetail.style.transition = "1s";
      purchaseContainer.style.transform =
        "rotate(90deg) translate(100px, 200px)";
      women2.style.transform = "translateX(0)";
      women2.style.transition = "2s";
      women3.style.transform = "translateX(0)";
      women3.style.transition = "2s";
      break;
    case 1:
      heroTitle.style.left = "-50px";
      heroTitle.style.transition = "0.7s";
      itemDetail.style.transform = "translateX(-200px)";
      itemDetail.style.transition = "1s";
      itemDetail.style.transitionDelay = "0.3s";
      purchaseContainer.style.transform =
        "rotate(90deg) translate(100px, 200px)";
      women2.style.transform = "translateX(100px)";
      women2.style.transition = "2s";
      women3.style.transform = "translateX(0)";
      women3.style.transition = "2s";
      break;
    case 2:
      heroTitle.style.left = "-300px";
      heroTitle.style.transition = "1s";
      itemDetail.style.transform = "translateX(-200px)";
      purchaseContainer.style.transform = "rotate(0) translate(0, 0)";
      purchaseContainer.style.transition = "1.1s";
      women3.style.transform = "translateX(300px)";
      women3.style.transition = "2s";
      break;
  }
}
