function addEvent(a, b, c) {
    var d = "on" + b;
    if (a.addEventListener) {
        a.addEventListener(b, c, !1);
    } else {
        if (a.attachEvent) {
            a.attachEvent(d, c);
        } else {
            var g = a[d];
            a[d] = function() {
                var a = g.apply(this, arguments),
                    b = c.apply(this, arguments);
                return void 0 == a ? b : void 0 == b ? a : b && a;
            };
        }
    }
}

function urlParams() {
    var c = {};
    var d = window.location.search.substring(1).split("&");
    for (var b = 0; b < d.length; b++) {
        var e = d[b].split("=");
        c[e[0]] = e[1];
    }
    return c;
}
if (document.compatMode == "CSS1Compat") {
    staff = document.querySelector('.menuwrap .left .menu:nth-child(4) > a[href*="?cid="]');
} else {
    staff = document.querySelector('#left .menu:nth-child(4) > a[href*="?cid="]');
