if ("undefined" !== typeof dfAvatar && dfAvatar.active == true) {
    var defaultAvatar = dfAvatar.avatar;
    $(function() {
        $(".details").each(function() {
            $(this).not(":has(.avatar)").prepend('<a class="avatar" href="#" rel="nofollow"><img src="' + defaultAvatar + '" width="100" height="100" alt="Avatar"></a>')
        });
        if (location.href.indexOf("?act=Profile") > -1) {
            $(".left.Sub.Item > h2").not(":has(.avatar)").prepend('<span class="avatar"><img src="' + defaultAvatar + '" width="100" height="100" alt="Avatar"></span>')
        }
    });
}