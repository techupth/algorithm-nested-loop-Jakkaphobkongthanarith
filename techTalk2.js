/* เรามีข้อมูลนักเรียนเก็บอยู่ใน Object 
ให้เขียน Algorithm เพื่อหาคะแนนเฉลี่ยของนักเรียนแต่ละคน แล้วแสดงข้อมูลบนหน้าจอในรูปแบบ Object
เช่น ถ้าข้อมูลนักเรียนมีดังนี้ 
const students = {
    "Alice": [85, 90, 92],
    "Bob": [78, 81, 85],
    "Charlie": [88, 87, 91]
};
ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 
{ Alice: 89, Bob: 81.33333333333333, Charlie: 88.66666666666667 }
โดย 89 มาจากการนำคะแนนทั้งหมดของ Alice มาบวกกันแล้วนำไปหาค่าเฉลี่ย จะได้ (85 + 90 + 92) /3
81.33333333333333 มาจากการนำคะแนนทั้งหมดของ Bob มาบวกกันแล้วนำไปหาค่าเฉลี่ย จะได้ (78 + 81 + 85) /3
*/
const students = {
  Alice: [85, 90, 92],
  Bob: [78, 81, 85],
  Charlie: [88, 87, 91],
};

function getAvgScore(students) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let name in students) {
    let scores = students[name];
    console.log("scores of each students: ", scores);
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum = sum + scores[i];
    }
    let avg = sum / scores.length;
    console.log(`${name}: Average score = ${avg}`);
  }
}

getAvgScore(students);
