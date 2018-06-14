let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];

// /*
// 根据select选项获取数据
// region-select的change事件 = function() {
//      渲染新的表格()
// }
// */
// var regionSelect = document.getElementsByName("region-select");
// var productSelect = document.getElementsByName("product-select");
// var table = document.getElementById("table");
// var tbody = document.getElementById("tbody");

// for (var i = 0; i < regionSelect.length; i++) {
//     regionSelect[i].onchange = function(){
//         var data = getData();
//         // console.log(data);
        
//         createTable(data);
//         removeTable();
//     }
// }
// for (var i = 0; i < productSelect.length; i++) {
//     productSelect[i].onchange = function(){
//         var data = getData();
//         // console.log(data);
        
//         createTable(data);
//         removeTable();
//     }
// }
// /*
// function 根据select选项获取数据() {
//     遍历数据 {
//         向要返回的数据list中添加符合表单所选项的数据
//     }
//     返回数据
// }
// */
// function getData(select){
//     var arrData = [];
//     for(key in sourceData){
//         // console.log(key+":"+sourceData[key]);
    
//         if(typeof sourceData[key] == "object"){
//             // console.log(sourceData[key].region);
//             for (var i = 0; i < select.length; i++) {
//                 if (select[i].checked == true) {    
//                     // console.log(regionSelect[i].value);
                    
//                     if(sourceData[key].region == regionSelect[i].value){
//                         // console.log(key+":"+sourceData[key].product);   //商品
//                         // console.log(key+":"+sourceData[key].sale);  //销售情况
//                         arrData.push(sourceData[key].product,regionSelect[i].value);
//                         for(x in sourceData[key].sale){
//                             // console.log(x+":"+sourceData[key].sale[x]);
//                             arrData.push(sourceData[key].sale[x]);
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     // console.log(arrData);
//     return arrData;
// }
// /*
// function 渲染新的表格() {
//     根据表单选项获取数据
//     渲染表格
// }
// */
// function createTable(arr){
//     // console.log(arr);
//     var newarr = [];
//     var newtext = [];
//     var tr = [];
//     var td = [];
//     var count = 0;
//     table.appendChild(tbody);
//     // console.log(tbody);
//     for(let i=0;i<(arr.length/14);i++){
//         var tr = document.createElement("tr");
//         if(count%14 == 0){
//             newarr[i]=arr.slice(count,count+14);
//             count+=14;
//         }
//     }
//     // console.log(newarr);
//     // console.log(newarr.length);
//     for(let n=0;n<newarr.length;n++){
//         tr[n] = document.createElement("tr");
//         tbody.appendChild(tr[n]);
//         // console.log(n+":"+tr[n]);
//         for(k in newarr[n]){
//             // console.log(k+":"+newarr[n][k]);
//             td[k] = document.createElement("td");
//             // console.log(k+":"+td[k]);
//             tr[n].appendChild(td[k]);
//             newtext[k] = document.createTextNode(newarr[n][k]);
//             td[k].appendChild(newtext[k]);
//             // console.log(k+":"+newtext[k]);
//             // console.log(k+":"+newtext[k].textContent);
//         }
//     }

// }
    

// function removeTable(){
//     console.log(tbody.children.length);
//     if(tbody.children.length){
//         for(let i=0;i<tbody.children.length;i++){
//             if(typeof tbody.childNodes[0]=="object"){
//                 tbody.removeChild(tbody.childNodes[0]);    
//             }
//         }    
//     }
// }
