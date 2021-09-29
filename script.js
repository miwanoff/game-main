let n = 13;
document.write(n);
let str = " ";
for (let i = 0; i < n; i++) {
  str += "| ";
}
alert(n + str);
while (n > 0) {
  alert("Your turn!");
  let m = prompt("Get the matches!");
  if (isNaN(m) || m < 0 || m > 3) {
    break;
  }
  n -= m;
  let str = " ";
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
  alert(n + str);
	alert("my turn!");
  let rand = Math.floor(Math.random() * 3) + 1;
	alert(rand);
n -= rand;
   str = " ";
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
	if (n <= 0) {
    alert("You win!");
    break;
  } else if (n <= rand){
    alert("I win!");
    break;
  }
	}
