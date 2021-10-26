var timer;

function setAlarm(elem) {
    var time = document.getElementById('alarmTime').valueAsNumber;
    if (isNaN(time)) {
        alert("Invalid DateTime");
        return;
    }

    var alarm = new Date(time);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    var duration = alarmTime.getTime() - (new Date()).getTime();

    if (duration < 0) {
        alert('Time is already passed');
        return;
    }

    timer = setTimeout(initAlarm, duration);
    elem.innerHTML = "Cancel Alarm";
    elem.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(elem) {
    elem.innerHTML = "Set Alarm";
    elem.setAttribute('onclick', 'setAlarm(this);');
    clearTimeout(timer);
}

function initAlarm() {
    alert("Alert");
}