// 邮箱后缀List参考
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var inputEmail = document.getElementById("email-input");
var emailSugWrapper = document.getElementById("email-sug-wrapper");
window.onload = function(){
		inputEmail.focus();
	}
// inputEmail.addEventListener("keyup", function() {
//     // 获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
//     // 控制email-sug-wrapper的显示/隐藏状态
//     console.log('event handle');
// });
// inputEmail.addEventListener("keydown", function() {
//     console.log('event handle');
// });
// // keypress   Esc,上下左右键,删除键无效
// inputEmail.addEventListener("keypress", function() {
//     console.log('event handle');
// });
// input   Esc,上下左右键无效； oninput 事件在元素值发生变化时立即触发
inputEmail.addEventListener("input", function() {
    // console.log('event handle');
    // 获取用户输入，生成提示框中的提示内容，将提示内容添加到email-sug-wrapper中
	var getInputEmailValue = getInputEmail();
	// 清除原先的内容
	
	// 生成提示框中的提示内容
    var liArr = createTipContent(getInputEmailValue);
    removeLi();
    	// console.log(liArr);
    // 将提示内容添加到email-sug-wrapper中
    addLitoWrapper(liArr);

    // 控制email-sug-wrapper的显示/隐藏状态
    wrapperControl();
    // 键盘事件
    keyControl();
});

// 通过原型创建字符串的trim()
String.prototype.trim=function(){
　　return this.replace(/(^\s*)|(\s*$)/g, "");
}

function getInputEmail() {
    // 拿到input输入框的输入内容trim后返回    
    	var inputEmailValue = inputEmail.value.trim();
    	// console.log(inputEmailValue);
    	return inputEmailValue;
}

function createTipContent(inputEmailValue) {
    // 获取用户输入
    	// console.log(inputEmailValue);
    // 遍历postfixList {
    //     把用户输入和每一个postfix进行结合成为每一个Li
    // }
    var newList = [];
    var strinput = inputEmailValue.split("");
    // console.log(strinput);
    var splitListArr = [];
    var splitListAfterArr = [];
    //用来拼接的用户输入内容 = 只使用@之前的字符串
    for(x in strinput ){
    	if(strinput[x]=="@"){
    		break;
    	}else{
			splitListArr.push(strinput[x]);
    	}
    }
    var splitList = splitListArr.join("");	
    // console.log(splitList);
    // 用来前缀匹配的用户输入内容 = @之后的字符串
	for(let i=splitList.length+1;i<strinput.length;i++){
		splitListAfterArr.push(strinput[i]);
		// console.log(splitListAfterArr);
	}
	var splitListAfter = splitListAfterArr.join("");
	// console.log(splitListAfter);
	for(let j=0;j<postfixList.length;j++){
		var postfixListArr = postfixList[j].split("");
		var postfixListStr = postfixListArr.join("");
		// console.log(postfixListStr);
		if(inputEmailValue!="" && splitListAfter != ""){
			var re = new RegExp("^"+splitListAfter);
			
			// console.log(re.test(postfixListStr));

			if(re.test(postfixListStr)){
			
				// console.log(postfixListStr);
			
				var li = splitList + "@" + postfixListStr;
				newList.push(li);
			}else if(j == (postfixList.length-1) && newList.length == 0){
				// var newList = [];
		    	for( key in postfixList){
		    		// console.log(key+":"+postfixList[key]);
					var li = splitList + "@" + postfixList[key];
		    		newList.push(li);
		    	}
			}
		}
	}

    if(inputEmailValue!="" && splitListAfter == ""){  //判断是否有输入
    	for( key in postfixList){
    		// console.log(key+":"+postfixList[key]);
			var li = splitList + "@" + postfixList[key];
    		newList.push(li);
    	}
    }

	// 返回生成的提示内容
    if(newList.length>0){
    	// console.log(newList);
    	return newList;
    }
}
function addLitoWrapper(liArr) {
    if(emailSugWrapper.childNodes.length>0){
    	if(liArr.length>0){
    		for(let i = 0;i<liArr.length;i++){
    			emailSugWrapper.removeChild(emailSugWrapper.childNodes[0]);
    		}
    	}
    }
    // 获取生成提示框中的提示内容
    for(key in liArr){
    	var li = document.createElement("li");
    	var nodeText = document.createTextNode(liArr[key]);
    	var newLi = li.appendChild(nodeText);
    	emailSugWrapper.appendChild(li);// 将内容添加到email-sug-wrapper中
    }
    
}

function wrapperControl() {
	var inputEmailValue = inputEmail.value.trim();
	// console.log(Boolean(inputEmailValue));
    if (!inputEmailValue) {
        hideWrapper();
    } else {
        showWrapper();
    }
}

function hideWrapper() {
    // 做具体隐藏提示框的操作
    emailSugWrapper.style.display = "none";
}

function showWrapper() {
    // 做具体显示提示框的操作
    emailSugWrapper.style.display = "block";
    emailSugWrapper.style.border = "1px solid #DFDFDF";
}

function removeLi(){
	if(emailSugWrapper.childNodes.length>0){
		// console.log(typeof emailSugWrapper.childNodes[0]);
		for(let i = 0;i<5;i++){
			if(typeof emailSugWrapper.childNodes[0]=="object"){	//不判断会报错
				emailSugWrapper.removeChild(emailSugWrapper.childNodes[0]);
			}
			
		}
	}
}


// 鼠标如果点击某个提示，则提示内容进入输入框，同时提示框消失
emailSugWrapper.addEventListener('click',function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName.toLocaleLowerCase() == "li"){
			// inputEmail.value = target.innerHTML;//需要编码解码
			inputEmail.value = target.textContent;
			hideWrapper();
			inputEmail.focus();
		}
});

// 键盘事件
function keyControl(){
	// 增加一个变量，用于存储当前选中的提示Li的序号
	var nowSelectTipIndex = 0;
	var li = emailSugWrapper.querySelectorAll("li");

	if(emailSugWrapper.style.display == "block"){
		document.onkeydown = function(e){
			var event = e || window.event;
			var target = e.target || e.srcElement;
			// console.log(event.keyCode);
			// 键盘向下键值等于40，向上等于38，回车等于13,esc等于27
			if(event.keyCode == 40){
            	nowSelectTipIndex++;
	            if(nowSelectTipIndex >= li.length){
	                nowSelectTipIndex = 0;
	            }
	            for(let i = 0 ; i < li.length ; i++){
	                li[i].style.background = "#ffffff";
	            }
	            li[nowSelectTipIndex].style.background = "#FDB5B5";
            }
            if(event.keyCode == 38){
                nowSelectTipIndex--;
                if(nowSelectTipIndex < 0){
                    nowSelectTipIndex = li.length-1;
                }
                for(let i = 0 ; i < li.length ; i++){
                    li[i].style.background = "#ffffff";
                }
                li[nowSelectTipIndex].style.background = "#FDB5B5";
            }
            if(event.keyCode == 13){
            	console.log(target.textContent);
                inputEmail.value = li[nowSelectTipIndex].textContent;
                hideWrapper();
            }
            if(event.keyCode == 27){
            	inputEmail.select();
            }
		}
		// 鼠标滑过滑过、离开、点击每个选项时
		for(let i = 0;i<li.length;i++){
		    li[i].onmouseover = function(){
		        this.style.background = "#8AC9D3";
		    }
		    li[i].onmouseout = function(){
		        this.style.background = "#ffffff";
		    }
		}
	}
}

// 点击页面空白处时，隐藏提示框
document.onclick=function(){
    hideWrapper();
}
