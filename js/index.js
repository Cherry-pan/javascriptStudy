"use strict"; //严格模式

// 找到table-data-wrap这个ID
const wrap = window.cherry.$("table-data-wrap");
// 获取id
// console.log(window.cherry.getAttr(wrap, "id"));
//创建一个table
const tableDom = window.cherry.createEl("table");
// 获取添加信息按钮对象
let addInfoButton = window.cherry.getClassName("add-info-button")[0];
// 找到对应的ID，添加类名，获取form表单弹窗对象
let infoDialog = window.cherry.$("info-dialog");
// 关闭弹窗对象
let closeDialog = window.cherry.getQuerSelect(".close-dialog");
// 获取头像的类名
let faceView = window.cherry.getClassName("face-view")[0];
// 获取头像的列表区域
let faceViewList = window.cherry.getQuerSelect(".face-view-list");

// 设置属性
let styles = {
    width: "100%",
    border: "0",
    cellpadding: "0",
    cellspacing: "0",
    id: "table-data-wrap"
};
window.cherry.setAttr(tableDom, styles);

// 表格头部数据
let theadHtml = `<thead><tr>`;

tableTheadData.forEach(item => {
    // 判断是否有width
    let width = item.width ? ` width="${item.width}"` : "";
    // 判断是否有id
    let id = item.id ? ` id="${item.id}"` : "";
    // 字符串拼接
    theadHtml += `
    <th${width}${id}>${item.label}</th>
    `;
});
theadHtml += `</tr></thead>`;

/**
 * 列表数据
 */
let tboayHtml = `<tbody>`;
tboayHtml += `${createTbody()}</tbody>`;

console.log(tboayHtml)

// 生成表头
tableDom.innerHTML = theadHtml + tboayHtml;

wrap.append(tableDom);

/**
 * ************添加信息显示/隐藏**************************************************************
/** 
 * 获取类名
 */
// 显示弹窗
window.cherry.addEvent(addInfoButton, "click", function() {
        infoDialog.classList.add("dialog-show")
    })
    // 隐藏弹窗
window.cherry.addEvent(closeDialog, "click", function() {
    infoDialog.classList.remove("dialog-show")
})

/** 
 * **************头像事件处理********************************************************
 */
window.cherry.addEvent(faceView, "click", function() {
    handlerFaceList();
})

/**
 * 事件委托机制，由父元素代替所有的子元素执行点击事件，节省空间
 */
window.cherry.addEvent(faceViewList, "click", function(e) {
    // 创建img标签
    let createImg = window.cherry.createEl("img");
    window.cherry.addChild(faceView, createImg);

    // 有可能没有点到img身上，点到了li身上
    if (e.target.nodeName.toLowerCase() === "li") {
        // 拿到li标签中的img的src
        let img = window.cherry.getChildren(e.target)[0]; //数组
        console.log(img)
        createImg.src = img.src;
    }
    if (e.target.nodeName.toLowerCase() === "img") {
        createImg.src = e.target.src;
    }

})

function handlerFaceListCallback(data) {
    // for  of
    let requestData = data.data;
    let liHtml = ``;
    for (let key of requestData) {
        liHtml += ` <li><img src="${key}" alt=""></li>`;
    }
    faceViewList.innerHTML = liHtml;
}