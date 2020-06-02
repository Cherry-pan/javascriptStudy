"use strict"; //严格模式

// 找到table-data-wrap这个ID
const wrap = window.cherry.$("table-data-wrap");

// 获取id
console.log(window.cherry.getAttr(wrap, "id"))

//创建一个table
const tableDom = window.cherry.createEl("table");


// 设置属性
let styles = {
    "width": "100%",
    "border": "0",
    "cellpadding": "0",
    "cellspacing": "0",
    "id": "table-data-wrap"
}
window.cherry.setAttr(tableDom, styles);


// 表格头部数据
let theadHtml = `<thead><tr>`;

tableTheadData.forEach((item) => {
    // 判断是否有width
    let width = item.width ? ` width="${item.width}"` : "";
    // 判断是否有id
    let id = item.id ? ` id="${item.id}"` : "";
    // 字符串拼接
    theadHtml += `
    <th${width}${id}>${item.label}</th>
    `
})
theadHtml += `</tr></thead>`;

/** 
 * 列表数据
 */
let tboayHtml = `<tbody>`;
console.log(tabelBodyData)
tboayHtml += `</tbody>`

// 生成表头
tableDom.innerHTML = theadHtml + tboayHtml;

wrap.append(tableDom);