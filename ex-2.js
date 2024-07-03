// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let rowResult = " ";
    for (let j = 1; j <= i; j++) {
      rowResult += "*" + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}
console.group(printStar(5));
