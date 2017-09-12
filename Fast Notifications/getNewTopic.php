<?php
header("Access-Control-Allow-Origin: *");
error_reporting(0);
$t = $_GET['t'];
$f = $_GET['f'];
@$st = $_GET['st'];
@$c = $_GET['c'];

if($_GET['act'] == "cache") {
	$topic = json_decode(utf8_encode(file_get_contents("http://".$f."/api.php?t=".$t."&st=".$st)), true);
	print(count($topic['messages']));
}
elseif($_GET['act'] == "compare") {
	$topic = json_decode(utf8_encode(file_get_contents("http://".$f."/api.php?t=".$t."&st=".$st)), true);
	$i = (int)$c-1;
	$y = count($topic['messages'])-1;
	if($i < $c) {
		++$i;
		while($i <= $y) {
			print('<li id="fast_responde'.rand(rand(1,500),rand(1000,5000)).'" class="post box_utente box_male box_anonimo"><div class="anchor"><a id="entryFast'.rand(rand(1,500),rand(1000,5000)).'"></a></div><table width="100%" cellpadding="0" cellspacing="0"><tbody><tr class="title2 top"><td class="left Item"><div class="nick"><a href="http://forumcommunity.net/?act=Profile&MID='.$topic['messages'][$i]['user']['id'].'" rel="nofollow">'.$topic['messages'][$i]['user']['name'].'</a></div></td><td class="right Item Justify"><div class="lt Sub"><a href="#" rel="nofollow"><img src="http://png-5.findicons.com/files/icons/2564/max_mini_icon/16/file.png" width="8" height="9" alt="view post" title="view post"></a> <a href="#" rel="nofollow"><span class="when"><span>Inviato il</span> '.$topic['messages'][$i]['info']['date'].'</span></a> &nbsp; &nbsp; </div> <div class="mini_buttons rt Sub"></div><div class="Break Sub">.</div></td></tr><tr class="center"><td class="left Item"><div class="details"><br><b>FastNotification</b><br>Per visualizzare la discussione completa<br><b><a href="javascript:location.reload(true);">Aggiorna la Pagina</a></b><br><br></div><br></td><td class="right Item" width="100%"><table class="color" cellpadding="0" cellspacing="0"><tbody><tr><td></td></tr><tr><td>'.$topic['messages'][$i]['content'].'</td></tr></tbody></table></td></tr><tr class="title2 bottom"><td class="left Item"></td></tr></tbody></table></li>');
			$i++;
		}
	}
}
// @Todo riscrivere.
?>