let timer;
function setAl(comp){
	let time = document.getElementById('alarmTime').valueAsNumber;
 
	let alarm = new Date(time);
	let alTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
	let dur = alTime.getTime() - (new Date()).getTime();
 
	if(dur <= 0){
		alert('Wrong input');
		return;
	}
 
	timer = setTimeout(initAl, dur);
	comp.innerHTML = "Cancel Alarm";
} 

function initAl(){
	alert("!!ALARM!!");
	document.getElementById('alarmButton').style.display = 'none';
}
  
function cancelAl(comp){
	comp.innerHTML = "Set Alarm";
	clearTimeout(timer);
}