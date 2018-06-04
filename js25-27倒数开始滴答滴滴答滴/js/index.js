/*****************************partOne*********************************/
var gosteps = document.getElementById("gosteps");
var gobtn = document.getElementById("gobtn");
gobtn.onclick = function(){
	GoSteps(gosteps.value);	
}

function Go() {
    console.log("Go");
}
function GoSteps(n) {
	if(n=="" || n == "true"){
		Go();
	}else if(Number(n)>0){
		while(Math.floor(n--)){
			Go();
		}	
	}else{
		// console.log('0次');
	}
}

/*****************************partTwo*********************************/
var nowTimeOne = document.getElementById("nowTimeOne");
var nowTimeTwo = document.getElementById("nowTimeTwo");

function startTime(){
	var today = new Date();
	var y = today.getFullYear();
	var month = today.getMonth()+1;
	var date = today.getDate();
	var day = today.getDay();
	var week = weekFunc(day);
	var weekEng = weekEngFunc(day);
	var h = today.getHours();
	var minutes = today.getMinutes();
	var s = today.getSeconds();
	
	month = checkTime(month);
	date = checkTime(date);
	h = checkHours(h);
	h = checkTime(h);
	minutes = checkTime(minutes);
	s = checkTime(s);

	nowTimeOne.innerHTML = "当前时间(格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss)：" + y + " 年 " + month + "月" + date + "日 星期" + week + " " + h +":" + minutes + ":" + s;
	nowTimeTwo.innerHTML = "当前时间(输出格式变为：2008-10-10 Monday 07:10:30 PM)：" + y + "-" + month + "-" + date + " " + weekEng + " " + h +":" + minutes + ":" + s + " " + flag;
	t = setTimeout('startTime()',1000);
}
startTime();

function checkTime(i){
	if (i < 10){
		i = "0" + i;
	}
  return i;
}

function weekFunc(d){
	var weekday=new Array(7);
	weekday[0]="日";
	weekday[1]="一";
	weekday[2]="二";
	weekday[3]="三";
	weekday[4]="四";
	weekday[5]="五";
	weekday[6]="六";
	return weekday[d];
}

function weekEngFunc(d){
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";
	return weekday[d];
}

function checkHours(h){
	if(h>12){
		h = h - 12;
		flag = "PM";
	}else{
		flag = "AM";
	}
	return h;
}

/*****************************partThree*********************************/
var partThree =document.getElementById("partThree");
var yearSelect = document.getElementById("year-select");
var monthSelect = document.getElementById("month-select");
var daySelect = document.getElementById("day-select");
var hourSelect = document.getElementById("hour-select");
var miniteSelect = document.getElementById("minite-select");
var secondSelect = document.getElementById("second-select");
var d = 31;
daySelectOptFunc(d);


partThree.addEventListener('click',function(e){
	var e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName.toLocaleLowerCase() == "select"){
		// console.log(monthSelect.options[monthSelect.selectedIndex].value);
		// console.log(yearSelect.options[yearSelect.selectedIndex].value);
		var yearSelectValue = yearSelect.options[yearSelect.selectedIndex].value;
		var monthSelectValue = monthSelect.options[monthSelect.selectedIndex].value;

		if(monthSelectValue == 2 && yearSelectValue % 4 == 0){
			d = 29;
		}else if(monthSelectValue == 2 && yearSelectValue % 4 != 0){
			d = 28;
		}else if(monthSelectValue==1 || monthSelectValue==3 || monthSelectValue==5 || monthSelectValue==7 || monthSelectValue==8 || monthSelectValue==10 || monthSelectValue==12){
			d =31;
		}else{
			d = 30;
		}
		daySelectOptFunc(d);
	}
});


function daySelectOptFunc(d){
	for(let i=1;i<=d;i++){
		var dayOption = document.createElement("option");
		var node = document.createTextNode(i);
		dayOption.setAttribute("value",i);
		dayOption.appendChild(node);
		daySelect.appendChild(dayOption);
	}	
}
function hourSelectOptFunc(){
	for(let i=0;i<=23;i++){
		i = checkTime(i);
		var hourOption = document.createElement("option");
		var node = document.createTextNode(i);
		hourOption.setAttribute("value",i);
		hourOption.appendChild(node);
		hourSelect.appendChild(hourOption);
	}	
}
function miniteSelectOptFunc(){
	for(let i=0;i<=59;i++){
		i = checkTime(i);
		var miniteOption = document.createElement("option");
		var node = document.createTextNode(i);
		miniteOption.setAttribute("value",i);
		miniteOption.appendChild(node);
		miniteSelect.appendChild(miniteOption);
	}	
}
function secondSelectOptFunc(){
	for(let i=0;i<=59;i++){
		i = checkTime(i);
		var secondOption = document.createElement("option");
		var node = document.createTextNode(i);
		secondOption.setAttribute("value",i);
		secondOption.appendChild(node);
		secondSelect.appendChild(secondOption);
	}	
}
hourSelectOptFunc();
miniteSelectOptFunc();
secondSelectOptFunc();
		

var selectBtn = document.getElementById("selectBtn");
var resultWrapper =document.getElementById("result-wrapper");
selectBtn.onclick = function(){

	var yearSelectValue = yearSelect.options[yearSelect.selectedIndex].value;
	var monthSelectValue = monthSelect.options[monthSelect.selectedIndex].value;
	var daySelectValue = daySelect.options[daySelect.selectedIndex].value;
	var hourSelectValue = hourSelect.options[hourSelect.selectedIndex].value;
	var miniteSelectValue = miniteSelect.options[miniteSelect.selectedIndex].value;
	var secondSelectValue = secondSelect.options[secondSelect.selectedIndex].value;

	var today=new Date();
	var nowYear = today.getFullYear();
	var nowMonth = today.getMonth()+1;
	var nowDate = today.getDate();
	var nowHours = today.getHours();
	var nowMinutes = today.getMinutes();
	var nowSeconds = today.getSeconds();

	var diffYear = yearSelectValue - nowYear;
	var diffMonth = monthSelectValue - nowMonth;
	var diffDate = daySelectValue - nowDate;
	var diffHours = hourSelectValue - nowHours;
	var diffMinutes = miniteSelectValue - nowMinutes;
	var diffSeconds = secondSelectValue - nowSeconds;

	var diffDayLeft = diffYear*365+diffYear%4+diffMonth*30+diffDate;
		// console.log(diffDayLeft);
	var diffTotal = diffDayLeft*24*60*60+diffHours*60*60+diffMinutes*60+diffSeconds;
	// console.log(diffTotal);
	if(diffTotal>=0){
		diffDayLeft = Math.floor(diffTotal/60/60/24);
		// console.log(diffDayLeft);
		diffHoursLeft = Math.floor((diffTotal-diffDayLeft*24*60*60)/60/60);
		diffMinutesLeft = Math.floor((diffTotal-diffDayLeft*24*60*60-diffHoursLeft*60*60)/60);
		diffSecondsLeft = Math.floor(diffTotal-diffDayLeft*24*60*60-diffHoursLeft*60*60-diffMinutesLeft*60);
		resultWrapper.innerHTML = "现在"+"距离 "+yearSelectValue+"年"+monthSelectValue+"月"+daySelectValue+"日 "+hourSelectValue+":"+miniteSelectValue+":"+secondSelectValue+" 还有"+diffDayLeft+"天"+diffHoursLeft+"小时"+diffMinutesLeft+"分"+diffSecondsLeft+"秒";
	}else{
		var diffSecondsLeft = diffSeconds;
		var diffMinutesLeft = diffMinutes;
		var diffHoursLeft = diffHours;
		diffDayLeft+=diffDate;
		resultWrapper.innerHTML = "现在"+"距离 "+yearSelectValue+"年"+monthSelectValue+"月"+daySelectValue+"日 "+hourSelectValue+":"+miniteSelectValue+":"+secondSelectValue+" 已经过去"+Math.abs(diffDayLeft)+"天"+Math.abs(diffHoursLeft)+"小时"+Math.abs(diffMinutesLeft)+"分"+Math.abs(diffSecondsLeft)+"秒";
	}
}

