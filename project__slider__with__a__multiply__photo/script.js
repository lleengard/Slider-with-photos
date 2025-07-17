const FIRST_DOT_ID = "firstDot";
const SECOND_DOT_ID = "secondDot";
const THIRD_DOT_ID = "thirdDot";

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
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum",
    space: "lorem ipsum",
    repairTime: "lorem ipsum",
    repairCost: "lorem ipsum",
  },
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum2",
    space: "lorem ipsum2",
    repairTime: "lorem ipsum2",
    repairCost: "lorem ipsum2",
  },
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum3",
    space: "lorem ipsum3",
    repairTime: "lorem ipsum3",
    repairCost: "lorem ipsum3",
  },
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum4",
    space: "lorem ipsum4",
    repairTime: "lorem ipsum4",
    repairCost: "lorem ipsum4",
  },
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum5",
    space: "lorem ipsum5",
    repairTime: "lorem ipsum5",
    repairCost: "lorem ipsum5",
  },
  {
    path: "img/kitten.jpg",
    location: "lorem ipsum6",
    space: "lorem ipsum6",
    repairTime: "lorem ipsum6",
    repairCost: "lorem ipsum6",
  },
];

let activeSlide = 0;

function nextSlide(isFirstCall) {
  if (activeSlide === images.length - 1) activeSlide = 0;
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
  if (activeSlide === 0) activeSlide = images.length - 1;
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

function swipeSlide(dotIndex) {
  if (dotIndex === 0) {
    if (activeSlide !== 0) activeSlide--;
  }
  if (dotIndex === 2) {
    if (activeSlide !== images.length - 1) activeSlide++;
  }

  if (dotIndex === 1) {
    if (activeSlide === 0) {
      activeSlide++;
    }

    if (activeSlide === images.length - 1) {
      activeSlide--;
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

function selectDot(selectedElement) {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("selected__dot");
  });

  if (selectedElement === 0) {
    document.getElementById(FIRST_DOT_ID).classList.add("selected__dot");
  }
  if (selectedElement !== images.length - 1 && selectedElement !== 0) {
    document.getElementById(SECOND_DOT_ID).classList.add("selected__dot");
  }
  if (selectedElement === images.length - 1) {
    document.getElementById(THIRD_DOT_ID).classList.add("selected__dot");
  }
}
