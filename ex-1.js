// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let rowResult = " ";
    for (let j = 1; j <= i; j++) {
      rowResult += j + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}
console.group(printPattern(5));
