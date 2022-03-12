/*Coding Challenge 1

There are two students 'ali' and 'Shan'.
The marks of each student are as below:
Ali's Marks:
    - English:  90
    - Urdu:     60
    - Pashto:   85
    - Maths:    30
    - Science:  70

Shan's Marks:
    - English:  70
    - Urdu:     40
    - Pashto:   35
    - Maths:    30
    - Science:  20
Create variables for each subject marks. (aliEnglishMarks)

1) Calculate the total marks of each student and save in two variables, 'aliTotalMarks' and 'shanTotalMarks'.
2) Also find average marks of each student and store in variables 'aliAverageMarks' and 'shanAverageMarks'.
   Average = (English + Urdu + Pashto + Maths + Science) / 5
3) Create boolean variable 'isShanPassed' and stored result of the statement 'Shan average marks is greater than 45';
4) Compare both students total marks and do not store it in variable, directly print it on console.
5) Print all results to console.
*/

const aliEnglish = 90,
  aliUrdu = 60,
  aliPashto = 85,
  aliMaths = 30,
  aliScience = 70,
  shanEnglish = 70,
  shanUrdu = 40,
  shanPashto = 35,
  shanMaths = 30,
  shanScience = 20;

const aliTotalMarks = aliEnglish + aliUrdu + aliMaths + aliPashto + aliScience;

const shanTotalMarks =
  shanEnglish + shanUrdu + shanPashto + shanMaths + shanScience;

const aliAverageMarks = aliTotalMarks / 5;

const shanAverageMarks = shanTotalMarks / 5;

const isShanPassed = shanAverageMarks > 45;

console.log(aliTotalMarks > shanTotalMarks);

console.log("Ali Total Marks", aliTotalMarks);

console.log("Shan Total Makrs", shanTotalMarks);

console.log("Ali Average", aliAverageMarks);
console.log("Shan Average", shanAverageMarks);
console.log("Shan Passed", isShanPassed);
