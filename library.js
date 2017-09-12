 if (!document.querySelector("body aside#Left") && !document.querySelector(".menuwrap .icon a[href='/m/']")) {
     if (document.querySelector('script[src="http://ffb.forumfree.net/js/credits.js"]') == null) {
         var a = document.createElement("script");
         a.setAttribute("type", "text/javascript");
         a.setAttribute("src", "http://ffb.forumfree.net/js/credits.js");
         document.getElementsByTagName("head")[0].appendChild(a);
     }
 }

 function addEvent(f, e, j) {
     var i = "on" + e;
     if (f.addEventListener) {
         f.addEventListener(e, j, !1)
     } else {
         if (f.attachEvent) {
             f.attachEvent(i, j)
         } else {
             var h = f[i];
             f[i] = function() {
                 var d = h.apply(this, arguments),
                     c = j.apply(this, arguments);
                 return void 0 == d ? c : void 0 == c ? d : c && d
             }
         }
     }
 }

 function urlParams() {
     var h = {};
     var g = window.location.search.substring(1).split("&");
     for (var a = 0; a < g.length; a++) {
         var f = g[a].split("=");
         h[f[0]] = f[1]
     }
     return h
 }
 if (document.compatMode == "CSS1Compat") {
     staff = document.querySelector('.menuwrap .left .menu:nth-child(4) > a[href*="?cid="]')
 } else {
     staff = document.querySelector('#left .menu:nth-child(4) > a[href*="?cid="]')
 }
 if ("undefined" !== typeof dfAvatar && dfAvatar.active == true) {
     var defaultAvatar = dfAvatar.avatar;
     $(function() {
         $(".details").each(function() {
             $(this).not(":has(.avatar)").prepend('<a class="avatar" href="#" rel="nofollow"><img src="' + defaultAvatar + '" width="100" height="100" alt="Avatar"></a>')
         });
         if (location.href.indexOf("?act=Profile") > -1) {
             $(".left.Sub.Item > h2").not(":has(.avatar)").prepend('<span class="avatar"><img src="' + defaultAvatar + '" width="100" height="100" alt="Avatar"></span>')
         }
     })
 }
 if ("undefined" !== typeof hiButton && hiButton.active == true) {
     if (/\?t=[0-9]+/.test(location.search)) {
         $(function() {
             if (!localStorage.getItem("hiButton")) {
                 localStorage.setItem("hiButton", JSON.stringify({
                     init: true
                 }))
             }
             if ("undefined" == typeof(JSON.parse(localStorage.getItem("hiButton"))["t" + urlParams()["t"] + "sent"])) {
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
                 t: urlParams()["t"],
                 Post: hiButton.message[Math.floor((Math.random() * hiButton.message.length) + 0)]
             }
         }).done(function() {
             $(".buttons:eq(0)").prepend("<div class=info>" + hiButton.done + " <a href='javascript:location.reload(true);'>Ricarica la Pagina</a></div>");
             var a = JSON.parse(localStorage.getItem("hiButton"));
             a["t" + urlParams()["t"] + "sent"] = true;
             localStorage.setItem("hiButton", JSON.stringify(a))
         }).fail(function() {
             $(".buttons:eq(0)").prepend("<div class=alert>" + hiButton.error + " <a href='javascript:location.reload(true);'>Ricarica la Pagina</a></div>")
         }).always(function() {
             $("#loader_hiButton").hide()
         })
     }
 }
 if ("undefined" !== typeof fastNotification && fastNotification.active == true) {
     var postCache = 0;
     if (/\?t=[0-9]+/.test(location.search)) {
         $(function() {
             cachePost("cache");
             $(".right.Sub > input").before("<input type='button' value='Controlla Messaggi' onclick='cachePost(\"take\");return false;' class='forminput' id='postCacher'>&nbsp;")
         })
     }

     function cachePost(a) {
         if (a == "cache") {
             $.getJSON("http://" + location.host + "/api.php" + location.search + "&cookie=1").done(function(b) {
                 postCache = b.messages.length
             })
         } else {
             if (a == "take") {
                 $.getJSON("http://" + location.host + "/api.php" + location.search + "&cookie=1").done(function(e) {
                     var f = e.messages.length - 1;
                     if (e.messages.length > postCache) {
                         var b = postCache;
                         for (; f >= b; b++) {
                             var g = new Date(e.messages[b].info.date);
                             var c = g.getDate() + "/" + (g.getMonth() + 1) + "/" + g.getFullYear() + ", " + g.getHours() + ":" + g.getMinutes();
                             $(".post:last").after('<li class="post box_utente box_male box_anonimo"><div class="anchor"></div><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr class="title2 top"><td class="left Item"><div class="nick"><a href="http://forumcommunity.net/?act=Profile&MID=' + e.messages[b].user.id + '" rel="nofollow">' + e.messages[b].user.name + '</a></div></td><td class="right Item Justify"><div class="lt Sub"><a href="#" rel="nofollow"><img src="http://png-5.findicons.com/files/icons/2564/max_mini_icon/16/file.png" width="8" height="9" alt="view post" title="view post"></a> <a href="#" rel="nofollow"><span class="when"><span>Inviato il</span> ' + c + '</span></a> &nbsp; &nbsp; </div> <div class="mini_buttons rt Sub"></div><div class="Break Sub">.</div></td></tr><tr class="center"><td class="left Item"><div class="details"><br><b>FastNotification</b><br>Per visualizzare la discussione completa<br><b><a href="javascript:location.reload(true);">Aggiorna la Pagina</a></b><br><br></div><br></td><td class="right Item" width="100%"><table class="color" cellpadding="0" cellspacing="0"><tbody><tr><td></td></tr><tr><td>' + e.messages[b].content + '</td></tr></tbody></table></td></tr><tr class="title2 bottom"><td class="left Item"></td></tr></tbody></table></li>')
                         }
                         postCache = e.messages.length
                     } else {
                         if (confirm("Non sono presenti nuovi messaggi! Inviare il nuovo post?")) {
                             $(".right.Sub > input").click()
                         }
                     }
                 })
             }
         }
     }
 };
 var countDown = 20;
 $(function() {
     $(".up_buttons").click(function() {
         sendUp($(this))
     });
     $(".up_buttons").after("<b><span class='autoUp_done' style='display:none;'>Antiflood: 20</span></b>")
 });

 function sendUp(e) {
     var _f = !$(e).attr("f") ? null : $(e).attr("f");
     var _t = !$(e).attr("t") ? null : $(e).attr("t");
     var _text = !$(e).attr("text") ? null : $(e).attr("text");
     if (!_f || !_t || !_text) {
         alert("Impossibile inviare il messaggio se il pulsante non Ã¨ impostato correttamente!")
     } else {
         $(e).after("<img src='http://dumpshare.net/images/3891575ajax-loader.gif' id='loader_autoUp'>");
         $(e).hide();
         $(".up_buttons").attr("disabled", "0");
         $.ajax({
             url: "index.php",
             type: "POST",
             data: {
                 st: 0,
                 act: "Post",
                 charset: "UTF-8",
                 f: _f,
                 CODE: "03",
                 t: _t,
                 Post: _text
             }
         }).done(function() {
             $(e).after("<b class='autoUp_send'>Inviato!</b>");
             setTimeout(function() {
                 $(".up_buttons").hide();
                 $(".autoUp_send").remove();
                 $(".autoUp_done").show();
                 countdown()
             }, 2000)
         }).fail(function() {
             $(e).after("<span class='autoUp_fail'><b>Errore!</b></span>");
             $(e).remove()
         }).always(function() {
             $("#loader_autoUp").remove()
         })
     }
 }

 function countdown() {
     if (countDown == 0) {
         $(".up_buttons").show();
         $(".up_buttons").removeAttr("disabled");
         $(".autoUp_done").hide();
         countDown = 20
     } else {
         --countDown;
         $(".autoUp_done").html("Antiflood: " + countDown);
         setTimeout("countdown();", 1000)
     }
 }
