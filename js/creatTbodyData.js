/** 
 * 主体数据
 * 
 */
function createTbody() {
    let trHtml = ``;
    for (let i = 0; i < tabelBodyData.length; i++) {
        // 可中止，break
        // 可跳过此次循环，continue
        const data = tabelBodyData[i];
        // 开始标签
        trHtml += `<tr>`;
        // 头像
        trHtml += createFace(data);
        // 姓名
        trHtml += creatName(data);
        // 性别
        trHtml += creatGender(data);
        // 年龄
        trHtml += creatAge(data);
        // 手机号
        trHtml += creatPhoneNumber(data);
        // 国籍
        trHtml += createNaTional(data);
        // 爱好
        trHtml += createHobby(data.hobby);
        // 头衔
        trHtml += createTouxian(data, 12);
        // 操作
        trHtml += createoOperation(data);
    }
    trHtml += `</tr>`;
    return trHtml;
};

/**
 * 生成头像 
 * 
 *  */
function createFace(data) {
    let html = `<td>
                  <div class="face">
                      <span class="gender icon-${data.face.gender}"></span>
                      <img src="${data.face.img}" alt="">
                  </div>
                  </td>`;
    return html;
};
/**
 * 生成姓名
 */
function creatName(data) {
    let html = `<td>
                <div class="people-name">
                    <h4 class="name">${data.name.trueName}</h4>
                    <span class="nickname option-05 fs-12">昵称：${data.name.nickName}</span>
                </div>
                </td>`;
    return html;
}
/** 
 * 生成性别
 */
function creatGender(data) {
    let html = ` <td>
                  <div class="gender-wrap">
                      <span class="gender icon-girl ${
                        data.face.gender === "girl" ? "" : "option-05"
                      }"></span>
                      <span class="gender icon-boy ${
                        data.face.gender === "boy" ? "" : "option-05"
                      }"></span>
                  </div>
                </td>`;
    return html;
};

/**
 * 生成年龄
 */
function creatAge(data) {
    let html = ` <td>
                <div class="age text-center">
                        <p>${data.age.number}</p>
                        <span class="option-05 fs-12">（${data.age.dec}）</span>
                    </div>
              </td>`;
    return html;
}
/** 
 * 生成手机号
 */
function creatPhoneNumber(data) {
    let html = `<td>
                <div class="phone">
                    +${data.phone.code}<span class="option-05">（中国）</span><br />
                    ${data.phone.number}
                </div>
              </td>`;
    return html;
};
/**
 * 生成国籍
 * 
 *  */
function createNaTional(data) {
    let html = `<td>
                <div>
                    <img src="${data.country.National_flag}" alt="${data.country.name}">
                    <p class="country-name" style="color: red;">${data.country.name}</p>
                </div>
              </td>`;
    return html;
};
/** 
 * 生成爱好
 */
function createHobby(data) {
    // 循环生成span
    let likeHtml = ``;
    data.forEach(item => {
        likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`;
    });
    let html = ` <td><div class="likes">${likeHtml}</div></td>`;
    return html;
};
/** 
 * 生成头衔
 */
function createTouxian(data, number = "") {
    let num = number == "" ? 16.66666 : number;
    let html = `<td>
                <div class="grade">
                  <span class="role-name">${data.touxian.name}</span>
                  <div class="grade-wrap icon-grade">
                    <div class="grade-high icon-grade" style="width: ${data.touxian.level*num}%;"></div>
                  </div>
                </div>
              </td>`;
    return html;
};
/**
 * 生成操作
 * 
 *  */
function createoOperation(data) {
    let html = `<td>
                <div class="operation">
                  <a href="javascript: void(0);" class="operation-btn">设置</a>
                    <ul class="links">
                      <a href="javascript: void(0);">编辑</a>
                      <a href="javascript: void(0);">删除</a>
                      <a href="javascript: void(0);">锁定</a>
                      <a href="javascript: void(0);">收起</a>
                    </ul>
                </div>
              </td>`;
    return html;
};