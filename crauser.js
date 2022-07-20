let imageArr = [
  "https://cms-contents.pharmeasy.in/banner/c414a98e027-dwebjpg.jpg?dim=1440x0&dpr=1&q=100",

  "https://cms-contents.pharmeasy.in/banner/3f636edf697-GRAND1000_Dweb.jpg?dim=1440x0&dpr=1&q=100",

  "https://cms-contents.pharmeasy.in/banner/4a92d1f76bf-Get_end_to_end.jpg?dim=1440x0&dpr=1&q=100",

  "https://cms-contents.pharmeasy.in/banner/31e6940d27f-WP.jpg?dim=1440x0&dpr=1&q=100",
];

let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");

let imageState = 0;

let crauserImg = document.querySelector("#crauserImg");

rightBtn.addEventListener("click", function () {
  imageState++;
  if (imageState === imageArr.length) {
    imageState = 0;
  }
  crauserImg.src = imageArr[imageState];
  console.log(imageState);
});

leftBtn.addEventListener("click", function () {
  imageState--;
  if (imageState < 0) {
    imageState = imageArr.length - 1;
  }
  crauserImg.src = imageArr[imageState];
  console.log(imageState);
});
