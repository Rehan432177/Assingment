let score = parseFloat(prompt("Enter the student's score (or percentage): "));

if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 80) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else if (score >= 0) { 
    console.log("Grade: F");
} else {
    console.log("Invalid Score. Please enter a score between 0 and 100.");
}
