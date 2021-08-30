(() => {
    function block() {
        if (
            window.outerHeight - window.innerHeight > 200 ||
            window.outerWidth - window.innerWidth > 200
        ) {
            document.body.innerHTML =
                "检测到非法调试,请关闭后刷新重试!";
        }
        setInterval(() => {
            (function () {
                return false;
            }
                ["constructor"]("debugger")
                ["call"]());
        }, 50);
    }
    try {
        block();
    } catch (err) {}
})();

作者：荣顶
链接：https://juejin.cn/post/7000784414858805256
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
