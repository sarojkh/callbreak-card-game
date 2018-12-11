<?php 
require_once("page_setter.php");
?>


<!DOCTYPE html>
<html>

<head>
  <link rel="shortcut icon" href="favicon.png" type="image/png">

  <title>
    <?
    echo $title;
    ?>
  </title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
  <link href="css/index.css" rel="stylesheet" media="screen">

</head>

<body>

	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="brand" href="?page=home.php">Callbreak</a>
				<div class="nav-collapse collapse">
					<ul class="nav">
            <?
            echo $nav_li;
            ?>
          </ul>
          <form class="navbar-search pull-left" style="margin-left:10em">
            <input type="text" class="search-query span2" placeholder="Search">
          </form>
        </div><!--/.nav-collapse -->
      </div>
    </div>
  </div>

  <div class="container">

    <!-- Main hero unit for a primary marketing message or call to action -->
    <div class="hero-unit">
     <? 
     require_once($active_page);
     ?>
   </div>

   <hr>

   <footer>
    <div id="footer_container">
      <div class="row">
        <div class="span4 offset0">
        </div>
        <div class="span4 offset0">
         <p class="text-left" style="margin-bottom:0; display:inline-block">Callbreak &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; </p>
         <p class="text-left" style="margin-bottom:0; display:inline-block">&copy; Saroj Khatiwada, 2013</p>
       </div>
    </div>
    

    
  </div>
</footer>

</div> <!-- /container -->

</body>
</html>
