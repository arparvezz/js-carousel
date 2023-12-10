let sliderImges = document.querySelectorAll(".slider__img");
let leftIndicator = document.querySelector(".left__ind");
let righttIndicator = document.querySelector(".right__ind");
let activeImg = 0;
let dotWrapper = document.querySelector(".dot__wrapper");
let dots = document.querySelectorAll(".dot");

// default image - active first image
changeImg(0);

// print dots by image count - dynamic
function printDots(num) {
  for (let i = 0; i < num; i++) {
    let span = document.createElement("span");
    span.classList.add("dot");
    dotWrapper.appendChild(span);
  }
}
printDots(sliderImges.length);
// change image by clicking dots
dots.forEach((value, ind) => {
  value.addEventListener("click", function (event) {
    changeImg(ind);
  });
});

// left arrow click function
leftIndicator.addEventListener("click", function (event) {
  if (activeImg > 0) {
    activeImg -= 1;
    changeImg(activeImg);
    activeDots(activeImg);
  } else {
    activeImg = sliderImges.length - 1;
    changeImg(activeImg);
    activeDots(activeImg);
  }
});

// right arrow click function
righttIndicator.addEventListener("click", function (event) {
  if (activeImg < sliderImges.length - 1) {
    activeImg += 1;
    changeImg(activeImg);
    activeDots(activeImg);
  } else {
    activeImg = 0;
    changeImg(activeImg);
    activeDots(activeImg);
  }
});

// Change image by index
function changeImg(showNumber) {
  sliderImges.forEach((value, ind) => {
    if (ind != showNumber) {
      value.style.display = "none";
    } else {
      value.style.display = "";
    }
  });
}

// active dot and color by image index function
function activeDots(indexNumber) {
  let childs = dotWrapper.children;
  [...childs].forEach((val, ind) => {
    if (ind == indexNumber) {
      val.style.backgroundColor = "black";
    } else {
      val.style.backgroundColor = "rgb(198, 198, 198)";
    }
  });
}

// Default active dot when load the content - dynamic 
document.addEventListener("DOMContentLoaded", function () {
  // dot indicator
  activeDots(0);
});
