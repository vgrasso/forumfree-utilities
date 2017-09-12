function urlParams(){var c={};var d=window.location.search.substring(1).split("&");for(var b=0;b<d.length;b++){var e=d[b].split("=");c[e[0]]=e[1];}return c;}
var voteTop_code = '<li id="votaInTop" class="post voteTop box_gruppo1 box_male box_anonimo"><div class="anchor"><a id="entry387461134"></a><a id="lastpost"></a><a id="newpost"></a></div><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr class="title2 top"><td class="left Item"><div class="nick"><a href="/" rel="nofollow">Pok&eacute;mon Ultimate</a></div></td><td class="right Item Justify"><div class="lt Sub"><a href="/" rel="nofollow"><img src="http://img.forumfree.net/index_file/post.gif" width="8" height="9" alt="view post" title="view post"></a> <a href="/" rel="nofollow"><span class="when">Messaggio Automatico</span></a></div> <div class="mini_buttons rt Sub"></div><div class="Break Sub">.</div></td></tr><tr class="center"><td class="left Item"><div class="details"><a class="avatar" href="/" rel="nofollow"><img src="http://i.imgur.com/0Ar1h.png" width="150" height="149" alt="Avatar"></a><p><span class="u_title">Pok&eacute;mon Ultimate</span><br><span class="u_rank"></span></p><dl class="u_group"><dt>Gruppo</dt><dd>Bot</dd></dl><dl class="u_posts"><dt>Messaggi</dt><dd>Automatici</dd></dl><br><dl class="u_status" title="Bot"><dt>Stato</dt><dd>Bot</dd></dl></div><br></td><td class="right Item" width="100%"><table class="color" cellpadding="0" cellspacing="0"><tbody><tr><td></td></tr><tr><td><center><span id="topVoteText"><b>Per visualizzare il contenuto votare in top forum</b><br><input type=button class=forminput onclick="voteTop();" id="topVote_button" value="Vota in Top Forum"><img src="http://dumpshare.net/images/3891575ajax-loader.gif" id="topVote_loader" style="display: none;"><br>Anche se hai gi&agrave; votato il forum o ne hai votato un altro il messaggio comparir&agrave; comunque al click sul pulsante.</span></center><br><br></td></tr></tbody></table></td></tr><tr class="title2 bottom"><td class="left Item"></td><td class="right Item Justify"><div class="mini_buttons lt Sub">&copy;Script by <a href="?act=Profile&MID=5524080">Saffo&acute;</a></div> <div class="rt Sub"> </div><div class="Break Sub">.</div></td></tr></tbody></table></li>';
if(/\?t=[0-9]+/.test(location.search)) {
	$(function () {
		if(!localStorage.getItem("topVote")) { localStorage.setItem("topVote", "false"); }
		if(localStorage.getItem("topVote") != "true") {
			$(".post:eq(0)").after(voteTop_code);
			$(".post").not(".voteTop").remove();
		}
	});
}

function voteTop() {
	$("#topVote_loader").show();
	$("#topVote_button").hide();
	$.ajax({
		url: "index.php",
		type: "POST",
		data: {
			act: "Poll",
			t: "55261817",
			poll_vote: "145", // FORUM TO BE VOTED
		}
	}).done(function() {
		localStorage.setItem("topVote", "true");
		$("#topVoteText").html("<b>Voto aggiunto correttamente! Ricarico la pagina...</b>");
		setTimeout("location.reload(true)", 3000);
	}).fail(function() {
		$("#topVoteText").html("<b>Impossibile aggiungere il voto! Ricarico la pagina...</b>");
		setTimeout("location.reload(true)", 3000);
	}).always(function() {
		$("#topVote_loader").hide();
	});
}