// max score is between 0 to 11.

// if score >= 5 return true
// if score >= 8 print("Excellent")
// if score === 11 print("Perfect")

const rubricGrading = (score) => {
    if (score > 11 || score < 0) return false;

    if (score === 11) {
        console.log("Perfect");
    } else if (score >= 8) {
        console.log("Excellent");
    } else {
        return true;
    }
}

let studentScore = 8;
rubricGrading(studentScore);

