var mathInput = document.getElementById("mathInput");
var englishInput = document.getElementById("englishInput");
var submit = document.getElementById("submit"); 
var gradeBody = document.getElementById("gradeBody");

var avgMath = document.getElementById("avgMath");
var avgEnglish = document.getElementById("avgEnglish");
var avgOverall = document.getElementById("avgOverall");

submit.addEventListener("click", function() {
    var math = parseFloat(mathInput.value);
    var english = parseFloat(englishInput.value);

    if (isNaN(math) || isNaN(english)) {
        alert("Please enter valid numbers for both subjects.");
        return;
    }

    var rowAvg = (math + english) / 2;
    var newRow = document.createElement("tr");
    var rowNum = gradeBody.rows.length + 1;

    newRow.innerHTML = "<td>" + rowNum + "</td><td>" + math + "</td><td>" + english + "</td><td>" + rowAvg.toFixed(2) + "</td>";
    gradeBody.appendChild(newRow);

    updateAverages();
    mathInput.value = "";
    englishInput.value = "";
});

function updateAverages() {
    var totalMath = 0;
    var totalEnglish = 0;
    var rowCount = gradeBody.rows.length;

    if (rowCount === 0) {
        avgMath.textContent = "0.00";
        avgEnglish.textContent = "0.00";
        avgOverall.textContent = "0.00";
        return;
    }

    for (var i = 0; i < rowCount; i++) {
        totalMath += parseFloat(gradeBody.rows[i].cells[1].textContent);
        totalEnglish += parseFloat(gradeBody.rows[i].cells[2].textContent);
    }

   
    var mathResult = (totalMath / rowCount).toFixed(2);
    var englishResult = (totalEnglish / rowCount).toFixed(2);
    var overallResult = ((totalMath + totalEnglish) / (rowCount * 2)).toFixed(2);


    avgMath.textContent = mathResult;
    avgEnglish.textContent = englishResult;
    avgOverall.textContent = overallResult;
}

