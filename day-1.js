// PRINT NUMBERS FROM 1 TO N
// Method 1
let limit = 5;
for (let i = 1; i <= limit; i++) {
  console.log(limit);
}
// Method 2
// Take input from user using dom manipulation
const input = document.querySelector("#input");
const enterButton = document.querySelector("#button");
enterButton.addEventListener("click", () => {
  const num = parseInt(input.value);
  if (num) {
    for (let i = 1; i <= num; i++) {
      let li = document.createElement("li");
      li.innerText = i;
      document.body.appendChild(li);
    }
  }
});



// 
