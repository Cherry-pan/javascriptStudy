"use strict"; //严格模式

/**
 * 表格表头
 */
let tableTheadData = [
        { label: "头像" },
        { label: "姓名" },
        { label: "性别" },
        { label: "年龄" },
        { label: "手机号" },
        { label: "国籍" },
        { label: "爱好", width: 200, id: "aaa" },
        { label: "头衔" },
        { label: "操作" },
    ]
    /** 
     * 表内容列表
     */
const tabelBodyData = [{
    face: {
        gender: "boy",
        img: ""
    },
    name: {
        trueName: "琼琼",
        nickName: "便是琼天"
    },
    age: {
        number: 25
    },
    phone: {
        code: "+86",
        number: 13218009875
    },
    country: {
        National_flag: "",
        name: "中国"
    }
}]