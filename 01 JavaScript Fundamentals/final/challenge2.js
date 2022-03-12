/*
+++++++++++++++++++
+++++++++++++++++++
Coding Challenge 2
+++++++++++++++++++
+++++++++++++++++++
Use your previous Ali and Shan results example and solve the given problems
1) Check if shan's marks is greater than ali's marks print "Shan marks is greater and total marks = (shan's marks)", else print "Ali Marks is greater and total marks = (ali's marks)" to console.
2) Print both students average marks to console with template literals as : 
    "Ali average marks = 'aliAverageMarks' and Shan average marks = 'shanAverageMarks'".
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

// 1
if (shanTotalMarks > aliTotalMarks) {
  console.log(`Shan marks is greater and total marks = ${shanTotalMarks}`);
} else {
  console.log(`Ali Marks is greater and total marks = ${aliTotalMarks}`);
}

// 2
console.log(
  `Ali average marks = ${aliAverageMarks} and Shan average marks = ${shanAverageMarks}`
);
