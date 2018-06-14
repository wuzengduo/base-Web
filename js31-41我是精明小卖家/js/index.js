/*********************生成表单*********************************/

let regionCheck = document.querySelector("#region-wrapper");
let productCheck = document.querySelector("#product-wrapper");
let items1 = [];
let items2 = [];

// 以sourceData中每一项的k属性创建数组并去重
function getItem(items, k) {
    for (let i = 0; i < sourceData.length; i++) {
        console.log(sourceData[i][k]);
        console.log(items.indexOf(sourceData[i][k]));
        if (items.indexOf(sourceData[i][k]) === -1) {
            items.push(sourceData[i][k])
        }
    }
    return items;
}

items1 = getItem(items1, "region"); // ["华东", "华北", "华南"]
items2 = getItem(items2, "product"); // ["手机", "笔记本", "智能音箱"]
// console.log(items2);

// 创建CheckBox
function createCheckbox(items, el, id) {
    // 创建全选checkbox, 添加id是为了利用事件委托时方便与其他单选框区分
    let ipt = document.createElement("input");
    ipt.setAttribute("type", "checkbox");
    ipt.setAttribute("id", id);
    ipt.checked = true;
    let txt = document.createTextNode("全选");
    // 对数组items进行遍历，创建checkbox
    for (let i = 0; i < items.length; i++) {
        let ipt = document.createElement("input");
        ipt.setAttribute("type", "checkbox");
        ipt.value = items[i];
        ipt.checked = true;
        let text = document.createTextNode(items[i]);
        el.appendChild(ipt);
        el.appendChild(text);
    }
    el.appendChild(ipt);
    el.appendChild(txt);
}

// 点击交互，添加click事件监听
function choose(el, id) {
    el.addEventListener("click", function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let allIpt = document.getElementById(id);
        let ipts = el.querySelectorAll("input");
        switch (target.id) {
            // 当id存在的情况，也就是全选时，点击将所有checkbox都选上
            case id:
                for (let i = 0; i < ipts.length; i++) {
                    ipts[i].checked = true;
                }
                break;
            // 默认情况
            default:
                // 临时创建一个数组，然后对除全选外的checkbox遍历，如果是选中状态，则添加到数组
                let checkedArr = [];
                for (let i = 0; i < ipts.length - 1; i++) {
                    if (ipts[i].checked === true) {
                        checkedArr.push(ipts[i]);
                    }
                }
                // console.log(checkedArr);
                // 如果点击后checkArr长度是3说明全都选上了，将全选的checked设为true
                if (checkedArr.length === 3) {
                    allIpt.checked = true;
                } else if (checkedArr.length === 0) {
                    // 如果点击后数组的长度为0，说明当前点击是最后一个，那么再将其checked设为true
                    target.checked = true;
                } else {
                    // 全选checked设为false
                    allIpt.checked = false;
                }
        }
    }, true);
}
/*******************获取选中CheckBox的数据********************/
let list = [];

function getData() {
    let ipts = document.querySelectorAll("input[type=checkbox]:checked");
    let arr = [];
    list = [];

    for (let i = 0; i < ipts.length; i++) {
        if (!ipts[i].id) {
            arr.push(ipts[i].value);
        }
    }
    // console.log(arr);

    for (let i = 0; i < sourceData.length; i++) {
        if (arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1) {
            list.push(sourceData[i]);
        }
    }
    // console.log(list);
    return list;
}
/**************生成表格***************/
let wrapper = document.querySelector("#table-wrapper");
let table = document.createElement("table");
table.setAttribute("id", "table");

function createTable() {
    table.innerHTML = "";
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th>商品</th>
        <th>地区</th>
        <th>1月</th>
        <th>2月</th>
        <th>3月</th>
        <th>4月</th>
        <th>5月</th>
        <th>6月</th>
        <th>7月</th>
        <th>8月</th>
        <th>9月</th>
        <th>10月</th>
        <th>12月</th>
        <th>12月</th>
    `;
    table.appendChild(tr);
    wrapper.appendChild(table);
    // console.log(list);
    // 遍历拿到的数据数组list
    for (let i = 0; i < list.length; i++) {
        let tr = document.createElement("tr");
        // 遍历数组中每一个对象
        for (let key in list[i]) {
            if (list[i].hasOwnProperty(key)) {
                // 判断list[i]的value是否是数组，非数组则直接添加到td里
                if (!Array.isArray(list[i][key])) {
                    let td = document.createElement("td");
                    td.innerHTML = list[i][key];
                    tr.appendChild(td);
                } else {
                    // 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
                    for (let k = 0; k < list[i][key].length; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = list[i][key][k];
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
    wrapper.appendChild(table);
}
/*****************交换第一列第二列顺序***************/

function changeTd() {
    let ipts1 = regionCheck.querySelectorAll("input[type=checkbox]:checked");
    let ipts2 = productCheck.querySelectorAll("input[type=checkbox]:checked");
    let tab = document.querySelector("#table");
    // 当地区选择了一个，商品选择了多个的时候，第一列第二列交换
    if (ipts1.length === 1 && ipts2.length !== 1) {
        for (let i = 0; i < tab.rows.length; i++) {
            let temp = tab.rows[i].cells[0].innerHTML;
            tab.rows[i].cells[0].innerHTML = tab.rows[i].cells[1].innerHTML;
            tab.rows[i].cells[1].innerHTML = temp;
        }
    }
}
/******合并单元格******/
function mergeCell(startrow, col) {
    let tab = document.querySelector("#table");
    for (let i = startrow; i < tab.rows.length - 1; i++) {
        // 如果第i行和第i+1行内容相同则隐藏第i+1行，同时第i行的rowSpan+1
        if (tab.rows[startrow].cells[col].innerHTML === tab.rows[i + 1].cells[col].innerHTML) {
            tab.rows[i + 1].cells[col].style.display = "none";
            tab.rows[startrow].cells[col].rowSpan += 1;
        }
        // 不相等的时候从第i+1行再次执行次函数
        else {
            mergeCell(i + 1, 0)
        }
    }
}
// 初始化页面
createCheckbox(items1, regionCheck, "regall");
createCheckbox(items2, productCheck, "proall");
getData();
createTable();
mergeCell(1, 0);
choose(regionCheck, "regall");
choose(productCheck, "proall");

// 添加事件监听
regionCheck.addEventListener("click", getData, false);
regionCheck.addEventListener("click", createTable, false);
regionCheck.addEventListener("click", changeTd, false);
regionCheck.addEventListener("click", function () {
    mergeCell(1, 0);
}, false);
productCheck.addEventListener("click", getData, false);
productCheck.addEventListener("click", createTable, false);
productCheck.addEventListener("click", changeTd, false);
productCheck.addEventListener("click", function () {
    mergeCell(1, 0)
}, false);