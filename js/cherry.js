(function() {
    "use strict"; //严格模

    //cherry属于命名空间
    if (!window.cherry) { //如果cherry不存在，就赋值
        window.cherry = {};
    }

    /**
     * 1、封装获取id方法【会变量提升到最顶部】，具名函数
     * 获取ID的DOM元素
     * @param {string} id 
     */
    function $(id) {
        if (typeof id !== "string") {
            throw new Error("参数ID必须是一个字符串")
        }
        // dom对象传错，未找到的情况
        let dom = document.getElementById(id);
        if (!dom) {
            throw new Error("dom对象未找到");
        }
        return dom;
        // 谁调用了方法，值就返回给谁，这里不包含闭包的概念

    };
    window.cherry.$ = $;

    /**
     * 创建元素
     */
    function createEl(node) {
        return document.createElement(node);
    }
    window.cherry.createEl = createEl;

    /**
     * 设置节点属性
     */
    function setAttr(node, styles) {
        // 不需要返回值
        for (const key in styles) {
            // 每次只能设置一个属性，需要遍历
            node.setAttribute(key, styles[key]);
        }
    }
    window.cherry.setAttr = setAttr;

    /**
     * 获取节点属性
     */
    function getAttr(node, value) {
        return node.getAttribute(value);
    }
    window.cherry.getAttr = getAttr;

})()

// window 全局

// 作用域，在作用域外部是无法访问作用域内部的一些方法和变量

/**
 *  自动执行函数
 * 1、防止变量和方法，不会对全局环境造成污染
 * 2、防止与第三方库冲突
 */

/**
 * 2、 函数表达式方式封装【先定义再使用，没有函数提升】
 * @param {*} id 
 * const $ = function(id) {
 *  return document.getElementById(id);
 *  };
 */

/**
 * json对象删除
 * delete jsonObj.name
 */