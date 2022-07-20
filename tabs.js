let tabsArr = [
  {
    heading: "Order Medicines",
    image: "https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png",
    btn: "Order Now",
    id: "gray",
  },
  {
    heading: "HealthCare Products",
    image:
      "https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1&q=100",
    btn: "Order Now",
    id: "orange",
  },
  {
    heading: "Lab Tests",
    image:
      "https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=1&q=100",
    btn: "Book Now",
    id: "blue",
  },
];

tabsArr.forEach(function (ele) {
  let div = document.createElement("div");

  let div1 = document.createElement("div");

  let div2 = document.createElement("div");

  let heading = document.createElement("h2");
  heading.innerText = ele.heading;

  let image = document.createElement("img");
  image.src = ele.image;

  let btn = document.createElement("button");
  btn.innerText = ele.btn;
  btn.setAttribute("id", ele.id);

  div1.append(heading, btn);
  div2.append(image);

  div.append(div1, div2);

  document.querySelector("#serviceTab").append(div);
});
