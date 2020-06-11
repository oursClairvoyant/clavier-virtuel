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

    /*  $array1 = array(
        $n_row,
        $sexe,
        $age


    );
    $array = array();
    $header = array("rang");
    $id[] = $n_row;
    foreach ($_POST as $name => $value) {
        if ($name == "submit" || $name == "envoyer") {
            array_push($array, "");
        } else {
            array_push($header, $name);
            //array_push($array,$value);
        }
    }
   */



    //file_put_contents($file, $header,$array3);

    $id[] = $n_row;
    $tab = array("rang");
    $array = array();
    $final = array();
    $sortedKeys = array();
    $array1 = array("rang","sexe","age","Cesser","Boîte","Tranquille","Espèce","Voix","Bleu","Chanter","Travailler","Glisser","Heure","Choisir","Disparaître","Pareil","Difficile","Toujours","Peur","Gagner","Sauver","Merci","Ombre","Envoyer","Français");
    $content = file_get_contents("information.csv");
    $header = explode(',', $content);
 
    foreach ($_POST as $name => $value) {
        if ($name == "submit" || $name == "envoyer") {
            break;
        } else {
            $final[$name] = $value;
          /*  foreach ($array1 as $element) {
                if ($element == $name) {
                    $final[$name] = $value;
                   
                }
                
            }*/

            /*array_push($array,$value);*/
        }
    
    }
    ksort($final);
    foreach ($final as $name => $value) {
        if ($name == "submit" || $name == "envoyer") {
            break;
        } else {
           
          /*  foreach ($array1 as $element) {
                if ($element == $name) {
                    $final[$name] = $value;
                   
                }
                
            }*/
            array_push($sortedKeys, $name);
            array_push($array, $value);
        }
    }


    
    

    $array3 = array_merge($id, $array);
    $sortedKeys = array_merge($tab,$sortedKeys);



    
    fputcsv($file_open, $array3); 
    //fputcsv($file_open, $sortedKeys);
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
        <p class="lead ">
            <div class="sizer">
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/793612516&color=%238c94b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/purrplecat" title="Purrple Cat" target="_blank" style="color: #cccccc; text-decoration: none;">Purrple Cat</a> · <a href="https://soundcloud.com/purrplecat/caramellow" title="Caramellow" target="_blank" style="color: #cccccc; text-decoration: none;">Caramellow</a></div>
            </div>
        </p>
    </div>

</body>

</html>