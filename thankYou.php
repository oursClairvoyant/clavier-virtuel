
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
<link rel="stylesheet" href="style/Style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merci !</title>
</head>
<body>
    <div class = "container2">
    <h1> MERCI D'AVOIR PARTICIPE !</h1>
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.3/howler.core.min.js"></script>



</script>
<iframe width="500" height="500" src="https://www.youtube.com/embed/AQx_KMoCgJU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</body>
</html>