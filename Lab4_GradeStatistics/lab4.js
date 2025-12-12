const mathInput = document.getElementById("mathInput");
const engInput = document.getElementById("engInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const eng = Number(engInput.value);

    if (isNaN(math) || isNaN(eng)) {
        alert("請輸入有效數字");
        return;
    }

    // 計算平均
    const avg = ((math + eng) / 2).toFixed(2);

    // 自動編號：目前已有幾列 +1
    const rowNumber = tableBody.getElementsByTagName("tr").length + 1;

    // 新增一列（含編號）
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowNumber}</td>
        <td>${math}</td>
        <td>${eng}</td>
        <td>${avg}</td>
    `;
    tableBody.appendChild(row);

    updateColumnAverages();
});

// 計算欄位平均 + 總平均
function updateColumnAverages() {
    const rows = tableBody.getElementsByTagName("tr");

    let mathSum = 0;
    let engSum = 0;
    let avgSum = 0;
    let count = rows.length;

    for (let row of rows) {
        mathSum += Number(row.children[1].textContent); // Math 在第 2 欄
        engSum += Number(row.children[2].textContent);  // English 在第 3 欄
        avgSum += Number(row.children[3].textContent);  // Average 在第 4 欄
    }

    document.getElementById("mathAvg").textContent = (mathSum / count).toFixed(2);
    document.getElementById("engAvg").textContent = (engSum / count).toFixed(2);
    document.getElementById("overallAvg").textContent = (avgSum / count).toFixed(2);
}

