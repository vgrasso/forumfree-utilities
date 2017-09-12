var countDown = 20;
$(function() {
	$(".up_buttons").click(function() {
		sendUp($(this));
	});
	$(".up_buttons").after("<b><span class='autoUp_done' style='display:none;'>Antiflood: 20</span></b>");
});

function sendUp(e) {
	var _f = !$(e).attr("f") ? null : $(e).attr("f");
	var _t = !$(e).attr("t") ? null : $(e).attr("t");
	var _text = !$(e).attr("text") ? null : $(e).attr("text");
	if(!_f || !_t || !_text) { alert("Impossibile inviare il messaggio se il pulsante non è impostato correttamente!"); } else {
		$(e).after("<img src='http://dumpshare.net/images/3891575ajax-loader.gif' id='loader_autoUp'>");
		$(e).hide();
		$(".up_buttons").attr("disabled","0");
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
				countdown();
			}, 2000);
		}).fail(function() {
			$(e).after("<span class='autoUp_fail'><b>Errore!</b></span>");
			$(e).remove();
		}).always(function() {
			$("#loader_autoUp").remove();
		});
	}
}
	
function countdown() {
	if(countDown == 0) {
		$(".up_buttons").show();
		$(".up_buttons").removeAttr("disabled");
		$(".autoUp_done").hide();
		countDown = 20;
	}
	else {
		--countDown;
		$(".autoUp_done").html("Antiflood: "+countDown);
		setTimeout("countdown();", 1000);
	}
}