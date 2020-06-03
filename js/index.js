"use strict"; //严格模式

// 找到table-data-wrap这个ID
const wrap = window.cherry.$("table-data-wrap");

// 获取id
console.log(window.cherry.getAttr(wrap, "id"));

//创建一个table
const tableDom = window.cherry.createEl("table");

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
let trHtml = ``;
for (let i = 0; i < tabelBodyData.length; i++) {
  const data = tabelBodyData[i];
  console.log(data);
  // 开始标签
   trHtml += `<tr>`;
  // 头像
   trHtml += `<td>
                <div class="face">
                    <span class="gender icon-${data.face.gender}"></span>
                    <img src="${data.face.img}" alt="">
                </div>
                </td>`;
  // 姓名
   trHtml += `<td>
                <div class="people-name">
                    <h4 class="name">${data.name.trueName}</h4>
                    <span class="nickname option-05 fs-12">昵称：${data.name.nickName}</span>
                </div>
                </td>`;
    // 性别
    trHtml += ` <td>
                <div class="gender-wrap">
                    <span class="gender icon-girl ${data.face.gender==='girl'?'':'option-05'}"></span>
                    <span class="gender icon-boy ${data.face.gender==='boy'?'':'option-05'}"></span>
                </div>
            </td>`;
    // 年龄
    trHtml += ` <td>
                    <div class="age text-center">
                            <p>${data.age.number}</p>
                            <span class="option-05 fs-12">（单身狗）</span>
                        </div>
                 </tr>`;
    trHtml += `</tr>`;
}
tboayHtml += `${trHtml}</tbody>`;

// 生成表头
tableDom.innerHTML = theadHtml + tboayHtml;

wrap.append(tableDom);
