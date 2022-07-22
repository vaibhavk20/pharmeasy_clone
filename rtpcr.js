let selectBtn = document.querySelector("#select");
selectBtn.addEventListener("click", addToCart);

let cartArr = [];

document.querySelector("#cart").addEventListener("click",mycart)

function mycart(){
  location.href = "cart.html"
}

function addToCart() {
  // console.log("added")
  let testId = document.querySelector("#testId").innerText;
  let rupee = document.querySelector("#rupee").innerText;

  document.querySelector("#testName").innerText = testId;
  document.querySelector("#testRupee").innerText = "₹" + rupee;

  localStorage.setItem("testName", testId);
  localStorage.setItem("testRupee", rupee);
}
