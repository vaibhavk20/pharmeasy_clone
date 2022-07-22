let testName = localStorage.getItem("testName");
let testRupee = +localStorage.getItem("testRupee");

let mycount = document.querySelector("#mycount");
mycount.addEventListener("change", getcount);

function getcount() {
  let value = +document.querySelector("#mycount").value;
  display(testName, testRupee, value);
}

function display(name, rupee, cnt) {
  let total = rupee * cnt;
  document.querySelector("#cartRupee").innerText = total;
  document.querySelector("#orderRupee").innerText = total;
  document.querySelector("#payRupee").innerText = total;
}
