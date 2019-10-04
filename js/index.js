function getMonthName() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();

    return monthNames[d.getMonth()]
}

function getWeekdayToday() {
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();

    return weekday[d.getDay()];
}

function getDate() {
    return `${getWeekdayToday()}, ${getMonthName()} ${(new Date()).getDate()}`
}

function getTime() {
    let d = new Date(),
        hours = `0${d.getHours()}`.slice(-2),
        minutes = `0${d.getMinutes()}`.slice(-2),
        seconds = `0${d.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

$(document).ready(function () {
    $("#calendar").fullCalendar();

    setInterval(() => {
        $('.today-date .time').html(`${getTime()}`)
        $('.today-date .date').html(`${getDate()}`)
    });
});
