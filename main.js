const days = document.querySelector(".days");
const date = document.querySelector("#date");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentDate = new Date(2025, 6);

function renderMonth() {

    days.innerHTML = "";

    const months = [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December"
    ];

    date.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear();

    const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );

    const numberOfDays = lastDayOfMonth.getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );

    let firstDayOfMonthDay = firstDayOfMonth.getDay();

    if (firstDayOfMonthDay == 0) {
        firstDayOfMonthDay = 7;
    }

    for (let i = 1; i < firstDayOfMonthDay; i++) {
        const emptyDay = document.createElement("li");
        emptyDay.classList.add("empty");
        days.appendChild(emptyDay);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = i;
        days.appendChild(day);
    }
}

function nextMonth() {
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
    );

    renderMonth();
}

function prevMonth() {
    currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1
    );

    renderMonth();
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

renderMonth();