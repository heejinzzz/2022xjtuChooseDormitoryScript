setInterval(function () {
    var targets = document.getElementsByTagName("span")
    for(var i = 0; i < targets.length; i++) {
        var target = targets.item(i)
        if(target.textContent.match("确定")) {
            target.click()
        }
    }
}, 1)
setInterval(function () {
    var rows = document.getElementsByClassName("el-table__row")
    for(var i = 0; i < rows.length; i++) {
        var row = rows.item(i)
        var btns = row.getElementsByTagName("button")
        for(var j = 0; j < btns.length; j++) {
            var btn = btns.item(j)
            if(btn.className.match("el-button--primary")) {
                btn.click()
            }
        }
    }
}, 20)