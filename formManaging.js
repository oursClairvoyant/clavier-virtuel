$(document).ready(function () {
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
    }
    const array = ["Bleu", "Sauver",
        "Français",
        "Difficile",
        "Merci",
        "Ombre",
        "Travailler",
        "Cesser",
        "Tranquille",
        "Pareil",
        "Chanter",
        "Toujours",
        "Voix",
        "Boîte",
        "Espèce",
        "Heure",
        "Peur",
        "Choisir",
        "Disparaître",
        "Envoyer",
        "Glisser",
        "Gagner"];

   shuffle(array)
   
        


 
    $(".contact-form-text").each(function (i) {
        
        $(this).attr('name', array[i]);
        $(this).attr('placeholder', array[i]);
        $(this).attr('title', array[i]);

    });

});
