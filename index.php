<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Главная страница</title>

    <!-- Bootstrap core CSS -->
    <link href="static/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/css/bootstrap-theme.min.css" rel="stylesheet">
  </head>
  <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
  </style>

  <body>

    <?php
  		require_once "static/menu.php";
  		?>

    <div class="container">
        <h1>Adapt. Consume. Play hard.</h1>
        <p class="lead">Сайт предназначен только для личного использования и может содержать не достоверную информацию.<br> Рекомендации, указанные на сайте, Вы будете использовать на свой "страх и риск".</p>
    <?php
       	require_once "static/new.php";
       	?>
    </div><!-- /.container -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="static/js/bootstrap.min.js"></script>
  </body>
</html>