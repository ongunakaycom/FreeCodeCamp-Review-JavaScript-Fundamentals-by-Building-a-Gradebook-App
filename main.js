function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(53));  // false
console.log(hasPassingGrade(87));  // true
