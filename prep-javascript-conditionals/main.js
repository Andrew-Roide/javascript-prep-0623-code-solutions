const age = 30;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

const student1Score = 98;

function didStudentPass(student1Score) {
  if (student1Score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

const student2Score = 101;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'Summer';

function seasonMessenger(season) {
  if (season === 'Summer') {
    return "It's hot today";
  } else if (season === 'Spring') {
    return 'The flowers are blooming';
  } else if (season === 'Autumn') {
    return 'The leaves are changing colors';
  } else if (season === 'Winter') {
    return "It's cold today";
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'Saturday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a good weekend!';
  } else {
    return "It's a weekday";
  }
}
console.log(dayDetector(dayOfTheWeek));
