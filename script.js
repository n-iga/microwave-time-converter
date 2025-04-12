function convertTime() {
    const originalWattage = parseFloat(document.getElementById('originalWattage').value);
    const originalTime = parseFloat(document.getElementById('originalTime').value);
    const yourWattage = parseFloat(document.getElementById('yourWattage').value);

    const resultEl = document.getElementById('result');

    if (!originalWattage || !yourWattage || !originalTime ) {
        resultEl.textContent = "Please fill in all fields with valid numbers.";
        return;
    }

    const totalOriginalSeconds = originalTime;
    const adjustedSeconds = totalOriginalSeconds * (originalWattage / yourWattage);

    const adjustedMinutes = Math.floor(adjustedSeconds / 60);
    const adjustedRemainder = Math.round(adjustedSeconds % 60);

    resultEl.innerHTML =
        `Adjusted Time:<br> ${adjustedMinutes} minute(s) and ${adjustedRemainder} second(s)`;
}

document.addEventListener("DOMContentLoaded", function () {
    const timeSelect = document.getElementById("originalTime");

    for (let seconds = 10; seconds <= 600; seconds += 10) {
        const option = document.createElement("option");
        option.value = seconds;

        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        let label = "";
        if (mins > 0) label += `${mins} min${mins > 1 ? "s" : ""}`;
        if (secs > 0) label += (mins > 0 ? " " : "") + `${secs} sec${secs !== 1 ? "s" : ""}`;

        option.textContent = label;

        // Preselect 3 minutes (180 seconds)
        if (seconds === 180) {
            option.selected = true;
        }

        timeSelect.appendChild(option);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    originalWattage.addEventListener("input", function () {
        convertTime();
    });
    originalTime.addEventListener("input", function () {
        convertTime();
    });
    yourWattage.addEventListener("input", function () {
        convertTime();
    });
});
