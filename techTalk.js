/*เรามี String 1 อันชื่อว่า text
ให้เขียน Algorithm ที่นับจำนวนครั้งที่ตัวอักษรแต่ละตัวปรากฏใน text แล้วแสดงข้อมูลนี้บนหน้าจอในรูปแบบ Object 
เช่น ถ้า text = “hello” ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น { h: 1, e: 1, l: 2, o: 1}
ถ้า text = "HeLLO" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น { h: 1, e: 1, l: 2, o: 1 }
*/

function countChar(text) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  // split loop condition
  // if already exist, +1 else set to 1
  let word = text.toLowerCase().split("");
  let sepWord = {}; //outpt
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (sepWord[char]) {
      sepWord[char] = sepWord[char] + 1;
    } else {
      sepWord[char] = 1;
    }
  }
  return sepWord;
}
console.log(countChar("heLlLo"));
