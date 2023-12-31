let x = 1;
const cubebox = document.getElementById("cube");

while (x <= 5) {
  const element = document.createElement("DIV");
  element.className = "boxes";
  cubebox.appendChild(element);
  console.log(x);
  x++;
}
let tempset = new Set();
const clickbox = document.querySelectorAll(".boxes");
console.log(clickbox);
[...clickbox].map((item, index) => {
  item.addEventListener("click", (e) => {
    item.classList.add("green");
    tempset.add(index);
    console.log(tempset);
    if (tempset.size == 5) {
      setimer();
    }
  });
});

function setimer() {
  if (tempset !== 0) {
    const item = tempset.values().next().value;
    setTimeout(() => {
      clickbox[item].classList.remove("green");
      tempset.delete(item);
      setimer();
    }, 1000);
  }
}
