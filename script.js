let count = document.querySelector('#count');

let value = Number(count.innerHTML);

function checkValue() {
  if(value > 0) {
  count.style.color = "green";
} else if(value < 0) {
    count.style.color = "red";
} else {
      count.style.color = "black";
}
}

document.querySelector("#increase").addEventListener("click", () => {
  value++;
  count.innerHTML = value;
  checkValue()
})

let decrease = document.querySelector("#decrease");

decrease.addEventListener("click", function(){
  value--;
  count.innerHTML = value;
  checkValue()
})
