<?php
$api = "/api.php";
$forum = $_GET['f'];
$groups = $_GET['g'];

header('Content-Type: text/javascript');
if($forum == "" || $groups == "") { print("$('#staffTable').html('Inserire tutti i campi!');"); exit(); }

$staffGr = json_decode(utf8_encode(file_get_contents("http://".$forum.$api."?g=".$groups)), true);
if($staffGr == null) { print("$('#staffTable').html('Impossibile caricare i dati dal server!');"); exit(); }
$staffersMID = "";
foreach($staffGr as $gr) {
	foreach($gr['users'] as $staffMID) {
		$staffersMID .= $staffMID.",";
	}
}
$staffersMID = substr($staffersMID,0,-1);

$staffersInfo = json_decode(utf8_encode(file_get_contents("http://".$forum.$api."?mid=".$staffersMID)), true);
$staffersMID = explode(",",$staffersMID);
if($staffersInfo == null) { print("$('#staffTable').html('Impossibile caricare i dati dal server!');"); exit(); }
$staffDiv = "";
$i = 0;
foreach($staffersInfo as $key => $staffer) {
	$staffDiv .= "<a href=\"http://".$forum."/?act=Profile&MID=".str_replace("m","",$key)."\" class=\"thumbnail\"><img src=\"".$staffer['avatar']."\" class=\"staff_pic\" /><span><img src=\"".$staffer['avatar']."\" class=\"staff_pic2\" /><br /><label class=\"staff_nick\">".htmlentities($staffer['nickname'])."<br /></label><label class=\"staff_group ".$staffer['group']['class']."\">".htmlentities($staffer['group']['name'])."<br /></label><label class=\"staff_mex\"><i>Messaggi:</i> ".$staffer['messages']."<br></label><label class=\"staff_status\"><i>Stato: </i>".$staffer['status']."</label></span></a>&nbsp;";$i++;
}
print("function printStaffTable() {\ndocument.getElementById('staffTable').innerHTML = '".$staffDiv."'; \n}");

/*
	* Classi per personalizzare
	* thumbnail
	* staff_pic
	* staff_pic2
	* staff_nickx	
	* staff_group
	* staff_mex
	* staff_status
*/
// @Todo riscrivere codice foreach usando $stafferInfo as $key => $staffer
?>