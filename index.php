
<!DOCTYPE html>

<head>
    <title>Questionnaire Clavier Phonétique</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/Style.css">
    <link rel="stylesheet" href="keyboard/Keyboard.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Arimo:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


</head>

<body>









    <div class="container">



        <h1>Écriture Phonétique</h1>

        <p>Ce questionnaire a pour but de récupérer la manière dont les gens retranscrivent des mots français par
            leur équivalent phonétique,
            pour plus d'informations sur quels phonèmes correspondent à quels sons nous vous invitons à regarder ce
            <a href="https://docs.google.com/spreadsheets/d/1GSqopU4dmIyM18rh0L7FjZD2hds0OjLwDu4N09YGFCY/edit?usp=sharing">google
                sheets</a> ou passez votre curseur sur les lettres du clavier virtuel (hors mobile).</p>


        <form class="contact-form" action="thankYou.php" method="post">
            <div class="selectF">
                <h4> Vous êtes ?</h4>
                <select name="sexe">
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                    <option value="Autre">Autre</option>
                </select>
                <h4> Votre Age ?</h4>
                <input type="number" placeholder=Age name=age title="Utilisez le clavier virtuel!" required />
            </div>

            <h4> Remplissez le formulaire à l'aide du <span>clavier virtuel</span></h4>
            <input type="text" class="contact-form-text" name="Bleu" data-toggle="tooltip" data-placement="top" placeholder="Bleu" title="Bleu" required>
            <input type="text" class="contact-form-text" name="Sauver" data-toggle="tooltip" data-placement="top" title="Sauver" placeholder="Sauver" required>
            <input type="text" class="contact-form-text" name="Français" data-toggle="tooltip" data-placement="top" title="Français" placeholder="Français" required>
            <input type="text" class="contact-form-text" name="Difficile" data-toggle="tooltip" data-placement="top" title="Difficile" placeholder="Difficile">
            <input type="text" class="contact-form-text" name="Merci" data-toggle="tooltip" data-placement="top" title="Merci" placeholder="Merci">
            <input type="text" class="contact-form-text" name="Ombre" data-toggle="tooltip" data-placement="top" title="Ombre" placeholder="Ombre">
            <input type="text" class="contact-form-text" name="Gueule" data-toggle="tooltip" data-placement="top" title="Gueule" placeholder="Gueule">
            <input type="text" class="contact-form-text" name="Travailler" data-toggle="tooltip" data-placement="top" title="Travailler" placeholder="Travailler">
            <input type="text" class="contact-form-text" name="Cesser" data-toggle="tooltip" data-placement="top" title="Cesser" placeholder="Cesser">
            <input type="text" class="contact-form-text" name="Tranquille" data-toggle="tooltip" data-placement="top" title="Tranquille" placeholder="Tranquille">
            <input type="text" class="contact-form-text" name="Pareil" data-toggle="tooltip" data-placement="top" title="Pareil" placeholder="Pareil">
            <input type="text" class="contact-form-text" name="Chanter" data-toggle="tooltip" data-placement="top" title="Chanter" placeholder="Chanter">
            <input type="text" class="contact-form-text" name="Toujours" data-toggle="tooltip" data-placement="top" title="Toujours"placeholder="Toujours">
            <input type="text" class="contact-form-text" name="Voix" data-toggle="tooltip" data-placement="top" title="Voix" placeholder="Voix">
            <input type="text" class="contact-form-text" name="Boîte" data-toggle="tooltip" data-placement="top" title="Boîte"  placeholder="Boîte">
            <input type="text" class="contact-form-text" name="Espèce" data-toggle="tooltip" data-placement="top" title="Espèce" placeholder="Espèce">
            <input type="text" class="contact-form-text" name="Heure" data-toggle="tooltip" data-placement="top" title="Heure"placeholder="Heure">
            <input type="text" class="contact-form-text" name="Peur" data-toggle="tooltip" data-placement="top" title="Peur"  placeholder="Peur">
            <input type="text" class="contact-form-text" name="Choisir" data-toggle="tooltip" data-placement="top" title="Choisir" placeholder="Choisir">
            <input type="text" class="contact-form-text" name="Disparaître" data-toggle="tooltip" data-placement="top" title="Disparaître" placeholder="Disparaître">
            <input type="text" class="contact-form-text" name="Envoyer" data-toggle="tooltip" data-placement="top" title="Envoyer" placeholder="Envoyer">
            <input type="text" class="contact-form-text" name="Glisser" data-toggle="tooltip" data-placement="top" title="Glisser" placeholder="Glisser">
            <input type="text" class="contact-form-text" name="Gagner" data-toggle="tooltip" data-placement="top" title="Gagner" placeholder="Gagner">
            <input type="submit" name="submit" class="contact-form-btn"  value="Envoyer">
        </form>


    </div>




    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



    <script src="formManaging.js"></script>
    <script src="keyboard/Keyboard.js"></script>
    <script src="keyboard/Tooltip.js"></script>



</body>