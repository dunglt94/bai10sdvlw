let num = +prompt("Enter your number: ");
let total = 0;
while (num != -1) {
    num = +prompt("Enter your number: ")
    alert(num);
    total += num;
}
alert(total);