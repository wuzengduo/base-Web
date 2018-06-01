/********************第一部分 Number*****************/
var numA = document.getElementById("num-a");
var numB = document.getElementById("num-b");
var ratioA = document.getElementById("radio-a");
var ratioB = document.getElementById("radio-b");
var btns = document.getElementById("btns");
var result = document.getElementById("result");

btns.addEventListener('click',function(e){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		if(target.nodeName.toLocaleLowerCase() == "button"){
			// console.log(target.textContent);
			switch(target.textContent){
				case '判断当前选中的输入框输入内容是否为数字':
					if(ratioA.checked){
						if(isNaN(numA.value)){
							result.innerHTML = "不是数字";
						}else{
							result.innerHTML = "是数字";
						}
					}else if(ratioB.checked){
						if(isNaN(numB.value)){
							result.innerHTML = "不是数字";
						}else{
							result.innerHTML = "是数字";
						}
					}
					break;
				case '把 A 四舍五入为 B 个小数位数的数字':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						if(!isNaN(numA.value) && !isNaN(numB.value)){
							var res =  Number(numA.value).toFixed(numB.value);
							result.innerHTML = res;	
						}
					}
					break;
				case '当前选中数字的绝对值':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						if(ratioA.checked){
							result.innerHTML = Math.abs(numA.value);
						}else if(ratioB.checked){
							result.innerHTML = Math.abs(numB.value);
						}
					}
					break;
				case '对当前选中的数字进行上舍入':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						if(ratioA.checked){
							result.innerHTML = Math.ceil(numA.value);
						}else if(ratioB.checked){
							result.innerHTML = Math.ceil(numB.value);
						}
					}
					break;
				case '对当前选中的数字进行下舍入':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						if(ratioA.checked){
							result.innerHTML = Math.floor(numA.value);
						}else if(ratioB.checked){
							result.innerHTML = Math.floor(numB.value);
						}
					}
					break;
				case '把当前选中的数字四舍五入为最接近的整数':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						if(ratioA.checked){
							result.innerHTML = Math.round(numA.value);
						}else if(ratioB.checked){
							result.innerHTML = Math.round(numB.value);
						}
					}
					break;
				case '返回 A 和 B 中的最高值':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						result.innerHTML = Math.max(numA.value,numB.value);
					}
					break;
				case '返回 A 和 B 中的最低值':
					isNum(numA,numB);
					if(!isNaN(numA.value) && !isNaN(numB.value)){
						result.innerHTML = Math.min(numA.value,numB.value);
					}
					break;
			}
		}
	}
);
function isNum(numA,numB){
	if(isNaN(numA.value) || isNaN(numB.value)){
		result.innerHTML = "请输入数字";
		console.log('输入框只能输入数字');
	}else{
		return;
	}
}
/********************第二部分 String*****************/
var radioTwoA = document.getElementById("radioTwo-a");
var radioTwoB = document.getElementById("radioTwo-b");
var strA = document.getElementById("str-a");
var strB = document.getElementById("str-b");
var numTwoA = document.getElementById("numTwo-a");
var numTwoB = document.getElementById("numTwo-b");
var btnsTwo = document.getElementById("btnsTwo");
var resultTwo = document.getElementById("resultTwo");

btnsTwo.addEventListener('click',function(e){
	var e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName.toLocaleLowerCase() == "button"){
		switch(target.textContent){
			case '获取当前选中输入的内容长度':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.length;
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.length;
				}
				break;
			case '当前选中输入中的第3个字符':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.charAt(2);
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.charAt(2);
				}
				break;
			case '把两个输入框的文字连接在一起输出（concat）':
				resultTwo.innerHTML = strA.value.concat(strB.value);
				break;
			case '输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）':
				resultTwo.innerHTML = strA.value.indexOf(strB.value);
				break;
			case '输入A中的内容，在输入B的内容中最后一次出现的位置（lastIndexOf）':
				resultTwo.innerHTML = strB.value.lastIndexOf(strA.value);
				break;
			case '使用slice获取选中输入框内容的部分内容，参数为num-a及num-b':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.slice(numTwoA.value,numTwoB.value);
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.slice(numTwoA.value,numTwoB.value);
				}
				break;
			case '当前选中输入框的行数':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.rows;
					// console.log(strA.rows);
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.rows;
				}
				break;
			case '使用substr获取选中输入框内容的子字符串，参数为num-a及num-b':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.substr(numTwoA.value,numTwoB.value);
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.substr(numTwoA.value,numTwoB.value);
				}
				break;
			case '把所选输入框中的内容全部转为大写':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.toLocaleUpperCase();
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.toLocaleUpperCase();
				}
				break;
			case '把所选输入框中的内容全部转为小写':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.toLocaleLowerCase();
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.toLocaleLowerCase();
				}
				break;
			case '把所选输入框中内容的半角空格全部去除':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.replace(/\s+/g,"");
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.replace(/\s+/g,"");
				}
				break;
			case '把所选输入框中内容的a全部替换成另外一个输入框中的内容':
				if(radioTwoA.checked){
					resultTwo.innerHTML = strA.value.replace(/a/g,strB.value);
				}else if(radioTwoB.checked){
					resultTwo.innerHTML = strB.value.replace(/a/g,strA.value);
				}
				break;
		}
	}
});
/********************第三部分*****************/
/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
console.log('第三部分:');
function diyTrim(str) {
    var result = "";
    result = str.replace(/(^\s*)|(\s*$)/g,"");
    return result;
}
// 测试用例
console.log(diyTrim('　  　 a f b   　 ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->
/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    for(let i = 0;i<str.length;i++){
    	 if(str.split("")[i] != str.split("")[i+1]){
    	 	 result += str.split("")[i];
		}
    }
    return result;
}
// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc
/********************第四部分 对象*****************/
var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

var objNameFour = document.getElementById("objNameOrIdFour");
var resultFour = document.getElementById("resultFour");
var btnsFour = document.getElementById("btnsFour");
var DLR = document.getElementById("DLR");
var LDR = document.getElementById("LDR");
var LRD = document.getElementById("LRD");

btnsFour.addEventListener('click',function(e){
	var e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName.toLocaleLowerCase() == "button"){
		switch(target.textContent){
			case '假设id和name均不会重复，根据输入name找到对应的id':
				if(objNameFour.value == ""){
					resultFour.innerHTML = "请输入Id";
				}else if(findIdByName(objNameFour.value) != undefined){
					resultFour.innerHTML = findIdByName(objNameFour.value);
				}else{
					resultFour.innerHTML = "找不到对应的id";
				}
				break;
			case '假设id和name均不会重复，根据输入id找到对应的name':
				if(objNameFour.value == ""){
					resultFour.innerHTML = "请输入Name";
				}else if(findNameById(objNameFour.value) != undefined){
					resultFour.innerHTML = findNameById(objNameFour.value);
				}else{
					resultFour.innerHTML = "找不到对应的Name";
				}
				break;
				
		}
	}
});

// 遍历tree
// function traverse(tree) {
//     var type = typeof tree;
//     if (type == "object") {
//         for (var key in tree) {
//             console.log("key: ", key);
//             traverse(tree[key]);
//         }
//     } else {
//         console.log(tree);
//     }
// }
// traverse(tree);

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
	var id;
    function node(tree) {
        if (tree) {
            if (tree.name == name) {
                id = tree.id;
            }
		    node(tree.left);
		    node(tree.right);
        }
    }
    node(tree);
    return id;
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
	var name;
    function node(tree) {
        if (tree) {
            if (tree.id == id) {
                name = tree.name;
            }
		    node(tree.left);
		    node(tree.right);
        }
    }
    node(tree);
    return name;
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
var dlr = [];
function getListWithDLR() {
    function node(tree) {
    	if(tree){
		    dlr.push(tree.name);
	        node(tree.left);
	        node(tree.right);
    	}  
    }
    node(tree);
}
getListWithDLR();
DLR.innerHTML =  dlr;
// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
var ldr = [];
function getListWithLDR() {
	function node(tree) {
		if(tree){
	        node(tree.left);
	        ldr.push(tree.name);
	        node(tree.right);
		}
	}
	node(tree);
}
getListWithLDR();
LDR.innerHTML =  ldr;
// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
var lrd = [];
function getListWithLRD() {
	function node(tree) {
		if(tree){
			node(tree.left);
	        node(tree.right);
	        lrd.push(tree.name);
		}
	}
	node(tree);
}
getListWithLRD();
LRD.innerHTML =  lrd;

/********************第五部分 数组 队列*****************/
var queue = ["apple", "pear"];
var queueInput= document.querySelector('#queue-input');
var queueCont= document.querySelector('#queue-cont');
var inBtn= document.querySelector('#in-btn');
var outBtn= document.querySelector('#out-btn');
var fontBtnRight= document.querySelector('#font-btn-right');
var fontBtnLeft= document.querySelector('#font-btn-left');
var emptyBtn= document.querySelector('#empty-btn');

inBtn.onclick=function(){
  if(queueInput.value != ""){
  	queue.push(queueInput.value);
  	queueCont.innerHTML = "队列内容："+queue.join('->');
  }else if(queueInput.value == ""){
  	queueCont.innerHTML = "入队内容不为空";
  }
}

outBtn.onclick = function(){
  queue.shift();
  // console.log(queue);
  queueCont.innerHTML = "队列内容："+queue.join('->');
}

fontBtnRight.onclick = function(){
  var font = queue.pop();
  if(font !== undefined ){
  	queue.push(font);
  	queueCont.innerHTML = "队头："+ font ;
  }else{
  	queueCont.innerHTML = "队列是空的";
  }
}

fontBtnLeft.onclick = function(){
  var font = queue.shift();
  if(font !== undefined ){
  	queue.unshift(font);
  	queueCont.innerHTML = "队头："+ font ;
  }else{
  	queueCont.innerHTML = "队列是空的";
  }
}

emptyBtn.onclick =function(){
  if(queue.length===0){
    queueCont.innerHTML = "队列为空";
  }else{
    queueCont.innerHTML = "队列不为空";
  }
}
/********************第六部分 数组 栈*****************/
var stack = ["apple", "pear"];

var stackInput= document.querySelector('#stack-input');
var stackCont= document.querySelector('#stack-cont');
var pushBtn= document.querySelector('#push-btn');
var popBtn= document.querySelector('#pop-btn');
var stakFontBtnRight= document.querySelector('#stak-font-btn-right');
var stakFontBtnLeft= document.querySelector('#stak-font-btn-left');
var stakEmptyBtn= document.querySelector('#stak-empty-btn');

var stack = ["apple", "pear"];

pushBtn.onclick=function(){
  if(stackInput.value!=""){
  	stack.push(stackInput.value);
  	stackCont.innerHTML = "栈内容："+stack.join('->');
  }else if(stackInput.value == ""){
  	stackCont.innerHTML = "进栈内容不为空";
  }
  
}

popBtn.onclick = function(){
  stack.pop();
  stackCont.innerHTML = "栈内容："+stack.join('->');
}

stakFontBtnRight.onclick = function(){
  var font=stack.pop();
  if(font!==undefined ){
  	stack.push(font);
  	stackCont.innerHTML = "栈顶："+ font ;
  }else{
  	stackCont.innerHTML = "栈是空的";
  }
  
}

stakFontBtnLeft.onclick = function(){
  var font=stack.shift();
  if(font!==undefined ){
  	stack.unshift(font);
  	stackCont.innerHTML = "栈顶："+ font ;
  }else{
  	stackCont.innerHTML = "栈是空的";
  }
  
}

stakEmptyBtn.onclick =function(){
  if(stack.length===0){
    stackCont.innerHTML = "栈为空";
  }else{
    stackCont.innerHTML = "栈不为空";
  }
}
/********************第七部分 排序*****************/
var bigToSmall = document.getElementById("bigToSmall");
var smallToBig = document.getElementById("smallToBig");
var arrNum = [43, 54, 4, -4, 84, 100, 58, 27, 140];
function bigToSmallFunc(a,b){
	return b-a;
}
function smallToBigFunc(a,b){
	return a-b;
}
bigToSmall.innerHTML = "从大到小："+arrNum.sort(bigToSmallFunc);
smallToBig.innerHTML = "从小到大："+arrNum.sort(smallToBigFunc);


var aToZ = document.getElementById("aToZ");
var zToA = document.getElementById("zToA");
var arrStr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
aToZ.innerHTML = "从a到z:"+arrStr.sort();
zToA.innerHTML = "从z到a:"+arrStr.reverse();//注意要先将数组升序排序后再用reverse()是降序排序，否则是把数组倒过来。


var arrTwo = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var twoBigToSmall = document.getElementById("twoBigToSmall");
var result = arrTwo.sort(twoBigToSmallFunc);
function twoBigToSmallFunc(x, y){
  return y[1]-x[1];
}
var txt="";
for(let i=0;i<result.length;i++){
	// console.log(result[i]);
	txt += "[" + result[i] + "]";
}
twoBigToSmall.innerHTML = "[" + txt + "]";



var arrObj = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
var objSmallToBig = document.getElementById("objSmallToBig");

function objSmallToBigFunc(a,b){
	return a.value - b.value;
}
objSmallToBig.innerHTML = JSON.stringify(arrObj.sort(objSmallToBigFunc));
/********************第八部分 数组转对象，对象转数组*****************/

/*对象转数组*/
var objToArray = document.getElementById("objToArray");
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}

function objToarr(obj){
    var arr = [];
    for (var i in obj) {
        var o = [];
        o = Object.values(obj[i]);
        // console.log(i);
        // console.log(o);
        o.unshift(i);//将名字加入数组中
        arr.push(o);//将数组加入到arr数组中,形成二维数组
    }
    return arr;
}
console.log('对象转数组');
console.log(objToarr(scoreObject));
objToArray.innerHTML = JSON.stringify(objToarr(scoreObject));

/*数组转对象*/
var arrayToobj = document.getElementById("arrayToobj");
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
// 遍历数组组装对象，不处理数据异常情况
var menuObject = {};

// 循环查找父级元素
var objectLoop = function(obj, id) {
  // 存放元素
  var parent = null;
  // 根据id查找key
  for(key in obj) {
    if (key === id) {
      // 存在key但并非对象，需先处理成对象
      if (!obj[key]) obj[key] = {};
      // 找到后退出循环
      parent = obj[key];
      break;
    } else if (obj[key].subMenu) {
      // 继续查找子级
      parent = objectLoop(obj[key].subMenu, id);
      // 找到后退出循环
      if (parent) break;
    }
  }
  return parent;
}
menuArr.map(function(item) {
	  // key转化为字符串
	  var keyP = item[2].toString(); // 父级key
	  var keyC = item[0].toString(); // 数据对应key值
	  // 查找父级
	  var parentObj = objectLoop(menuObject, keyP);
	  // 无父级时，父级为根对象
	  if (!parentObj) {
	    menuObject[keyC] = { name: item[1] };
	  } else {
	    // 若subMenu非对象，需先处理成对象
	    if (!parentObj.subMenu) parentObj.subMenu = {};
	    parentObj.subMenu[keyC] = { name: item[1] };
	  }
})
console.log('数组转对象');
console.log(menuObject);
arrayToobj.innerHTML = JSON.stringify(menuObject);