
layui.use('element', function () {
    var element = layui.element,
        layer = layui.layer;
    var index = layer.load(1, {
        shade: [0.5, '#fff']
    }); //0.1透明度的白色背景
    window.onload = function () {
        layer.close(index)
    };
    //欢迎信息
    layer.msg('hello,你好，欢迎来到CCW反挂扫黑协会官网')
    //一些事件触发
});



function messagebox(url) {
    layui.use('layer', function () {
        var layer = layui.layer;
        //欢迎信息
        //一些事件触发


        layer.full(layer.open({
            type: 2,
            fixed: false, //不固定
            content: url
        }))
    });
};
function xhr(theUrl, body, method) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open(method, theUrl, false); // false 为同步请求 true 异步请求
    xmlHttp.send(body);
    return xmlHttp.responseText;
}
