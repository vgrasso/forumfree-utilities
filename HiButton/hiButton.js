if ("undefined" !== typeof hiButton && hiButton.active == true) {
    if (/\?t=[0-9]+/.test(location.search)) {
        $(function() {
            if (!localStorage.getItem("hiButton")) {
                localStorage.setItem("hiButton", JSON.stringify({
                    "init": true
                }))
            }
            if ("undefined" == typeof(JSON.parse(localStorage.getItem('hiButton'))['t' + urlParams()['t'] + 'sent'])) {
                $(".buttons:eq(0)").prepend("<a href='#' onclick='giveWelcome(); return false;' id='hiButton'><span><img src=" + hiButton.image + " alt='' width=50 height=250>" + hiButton.bMessage + "</span></a>")
            }
        })
    }

    function giveWelcome() {
        $("#hiButton").hide();
        $(".buttons:eq(0)").prepend("<img src='http://dumpshare.net/images/3891575ajax-loader.gif' id='loader_hiButton'>");
        $.ajax({
            url: "index.php",
            type: "POST",
            data: {
                st: 0,
                act: "Post",
                f: hiButton.f,
                charset: "UTF-8",
                CODE: "03",
                t: urlParams()['t'],
                Post: hiButton.message[Math.floor((Math.random() * hiButton.message.length) + 0)]
            }
        }).done(function() {
            $(".buttons:eq(0)").prepend("<div class=info>" + hiButton.done + " <a href='javascript:location.reload(true);'>Ricarica la Pagina</a></div>");
            var hiButtonLS = JSON.parse(localStorage.getItem('hiButton'));
            hiButtonLS['t' + urlParams()['t'] + 'sent'] = true;
            localStorage.setItem("hiButton", JSON.stringify(hiButtonLS))
        }).fail(function() {
            $(".buttons:eq(0)").prepend("<div class=alert>" + hiButton.error + " <a href='javascript:location.reload(true);'>Ricarica la Pagina</a></div>")
        }).always(function() {
            $("#loader_hiButton").hide()
        })
    }
}