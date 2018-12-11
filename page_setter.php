
<?php


$valid_pages = array(
	'Home'=>'home.php', 
	'Play'=>'play.php',
	'How To Play'=>'how_to_play.php', 
	'Contact'=>'contact.php',
	'About'=>'about.php',
	);


$page_arg=(isset($_GET['page']))?$_GET['page']:"home.php";

$active_page=is_valid_page($page_arg) ? $page_arg: '404.php';

$title=get_title($active_page);

$nav_li=get_nav_li($active_page);

function is_valid_page($page_arg){
	global $valid_pages;
	foreach($valid_pages as $title=>$link){
		if ($page_arg == $link){
			return true;
		}
	}
	return false;
}

function get_title($active_page){
	global $valid_pages;
	foreach($valid_pages as $title=>$link){
		if($active_page==$link){
			return $title." | Callbreak";
		}
	}
	return "File Not Found!"." | Callbreak";
}

function get_nav_li($active_page){
	global $valid_pages;
	$nav_list_str="";
	foreach($valid_pages as $title=>$link){
		if ($link==$active_page){
			$nav_list_str.= "<li class=\"active\">";
		}else{
			$nav_list_str.="<li>";
		}
		$nav_list_str.="<a href=?page=".$link.">".$title."</a>";
		$nav_list_str.="</li>";
	}
	return $nav_list_str;
}

?>
