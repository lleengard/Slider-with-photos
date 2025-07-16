let images = [
  {
    path: "img/image__rostov.png",
    location: "Rostov-on-Don\nLCD admiral",
    space: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
  },
  {
    path: "img/image_sochi.png",
    location: "Sochi \nThieves",
    space: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
  },
  {
    path: "img/image__rostov2.png",
    location: "Rostov-on-Don\nPatriotic",
    space: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
  },
];

let activeSlide = 0;

function nextSlide(isFirstCall) {
  if (activeSlide === 2) activeSlide = 0;
  else {
    if (isFirstCall === true) {
    } else {
      activeSlide++;
    }
  }
  selectDot(activeSlide);
  document.getElementById("photo").src = images[activeSlide].path;
  document.getElementById("location").textContent =
    images[activeSlide].location;
  document.getElementById("space").textContent = images[activeSlide].space;
  document.getElementById("repairTime").textContent =
    images[activeSlide].repairTime;
  document.getElementById("repairCost").textContent =
    images[activeSlide].repairCost;
}
nextSlide(true);

function prevSlide() {
  if (activeSlide === 0) activeSlide = 2;
  else activeSlide--;
  selectDot(activeSlide);
  document.getElementById("photo").src = images[activeSlide].path;
  document.getElementById("location").textContent =
    images[activeSlide].location;
  document.getElementById("space").textContent = images[activeSlide].space;
  document.getElementById("repairTime").textContent =
    images[activeSlide].repairTime;
  document.getElementById("repairCost").textContent =
    images[activeSlide].repairCost;
}

function changeSlideByLink(indexElement) {
  selectDot(indexElement);
  activeSlide = indexElement;
  document.getElementById("photo").src = images[activeSlide].path;
  document.getElementById("location").textContent =
    images[activeSlide].location;
  document.getElementById("space").textContent = images[activeSlide].space;
  document.getElementById("repairTime").textContent =
    images[activeSlide].repairTime;
  document.getElementById("repairCost").textContent =
    images[activeSlide].repairCost;
}

function swipeSlide(indexElement) {
  selectDot(indexElement);
  activeSlide = indexElement;
  document.getElementById("photo").src = images[activeSlide].path;
  document.getElementById("location").textContent =
    images[activeSlide].location;
  document.getElementById("space").textContent = images[activeSlide].space;
  document.getElementById("repairTime").textContent =
    images[activeSlide].repairTime;
  document.getElementById("repairCost").textContent =
    images[activeSlide].repairCost;
}

function selectDot(selectedElement) {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("selected__dot");
  });

  const dotsIds = {
    0: "firstDot",
    1: "secondDot",
    2: "thirdDot",
  };

  const dotId = dotsIds[selectedElement];
  document.getElementById(dotId).classList.add("selected__dot");
}
