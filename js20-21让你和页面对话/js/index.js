/*******************第一部分******************************/
var partOneBtn = document.getElementById("submit-btn");
var partOneName = document.getElementById("name");
partOneBtn.addEventListener("click",function(){
	console.log('partOne 部分:');
	console.log(partOneName.value);
});
partOneName.addEventListener("keydown",function(e){
	// console.log(e.keyCode);
	if(e.keyCode == 13){		//回车键盘符是13
		console.log(partOneName.value);	
	}else if(e.keyCode == 27){	//esc键盘符是27
		partOneName.value = "";
	}
});
/*******************第二部分******************************/
var partTwoSchoolRatio = document.getElementById("school");
var partTwoCompanyRatio = document.getElementById("company");
var partTwoSchoolSelect = document.getElementById("school-select");
var partTwoCompanySelect = document.getElementById("company-select");
partTwoSchoolRatio.addEventListener("click",function(){
	console.log(partTwoSchoolRatio.checked);
	if(partTwoSchoolRatio.checked){
		partTwoSchoolSelect.style.display = "inline-block";
		partTwoCompanySelect.style.display = "none";
	}
});
partTwoCompanyRatio.addEventListener("click",function(){
	if(partTwoCompanyRatio.checked){
		partTwoCompanySelect.style.display = "inline-block";
		partTwoSchoolSelect.style.display = "none";
	}
});
/*******************第三部分 不使用事件委托******************************/
var list = document.querySelectorAll("li");
for (var i = 0, len = list.length; i < len; i++) {
    list[i].onclick = function(e) {
        var e = e || window.event;
		var t = e.target || e.srcElement;
        var c = t.style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0];
        p.innerHTML = c;
        p.style.color = c;

    }
}
/*******************第四部分 使用事件委托******************************/
var oul = document.getElementsByClassName("palette")[0];
oul.onclick = function(e) {
    var e = e || window.event;
	var t = e.target || e.srcElement;
    var c = t.style.backgroundColor;
    var p = document.getElementsByClassName("color-picker")[0];
    p.innerHTML = c;
    p.style.color = c;
}
/*******************第五部分******************************/
var fadeObj = document.getElementById("fade-obj");
var fadeBtn = document.getElementById("fade-btn");
fadeBtn.addEventListener("click",function(){
	console.log('partFive 部分:');
	if(fadeBtn.textContent == "淡出"){
		var opacity = 1;
		var fadeOut = setInterval(function(){
			fadeObj.style.opacity = opacity;
			opacity -= 0.20;
			fadeBtn.disabled = true;
			console.log(fadeObj.style.opacity);
			if(fadeObj.style.opacity <= 0){
				clearInterval(fadeOut);
				fadeBtn.innerHTML = "淡入";
				fadeBtn.disabled = false;
			}
		},100);
	}else if(fadeBtn.textContent >= "淡入"){
		var opacity=0;
		var fadeIn = setInterval(function(){
			fadeObj.style.opacity = opacity;
			opacity += 0.20;
			// console.log("opacity"+opacity);
			console.log(fadeObj.style.opacity);
			fadeBtn.disabled = true;
			if(fadeObj.style.opacity == 1){
				clearInterval(fadeIn);
				fadeBtn.innerHTML = "淡出";
				fadeBtn.disabled = false;
			}
		},100);
	}
});
/*******************第六部分******************************/
var sprite = document.getElementById("sprite");
var position = 0;
var dong = setInterval(function(){
	position += 480;
	// console.log(position);
	sprite.style.background = "url(./image/erik_ce.jpg) 0px -"+position+"px no-repeat";
	if(position == 7680){
		position = 0;
	}
},100);


