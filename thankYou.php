
<?php
$sexe = '';
$age = "";
$n_row = '';
$bleu = "";
if (isset($_POST["submit"])) {
    $sexe = $_POST["sexe"];
    $age = $_POST["age"];


    $file_open = fopen("information.csv", "a");
    $n_row = count(file("information.csv"));

    $array1 = array(
        $n_row,
        $sexe,
        $age


    );
    $array = array();
    $id[] = $n_row;
    foreach ($_POST as $name => $value) {
        if ($name == "submit" || $name == "envoyer") {
            array_push($array,"");
        }
        else { 
        
        array_push($array,$name, $value);
        }
    }
    $array3 = array_merge($id, $array);

    fputcsv($file_open, $array3);
}




?>
<html lang="en">
<head>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merci !</title>
</head>
<body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.core.min.js"></script>




    <div class="jumbotron text-center">
  <h1 class="display-3">Merci d'avoir participé !</h1>
  <p class="lead"><strong>N'oubliez pas</strong> Ce sont les derniers jours de printemps, voici de quoi égayer votre journée.</p>
  <hr>
  <p>
    Vous souhaitez refaire le questionnaire? <a href="index.html">Cliquez ici</a>
  </p>
  <p class="lead">
  <iframe width="500" height="300" src="https://www.youtube.com/embed/BYUASTjanyQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </p>
</div>

</body>
</html>