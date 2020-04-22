
/*Infobulles pour chaque lettre du clavier virtuel */
$(document).ready(function () {
    document.querySelectorAll('.keyboard__key').forEach(key => {
        switch (key.textContent) {
            case "a":
                document.getElementById("a").setAttribute("title", "a comme chat");
            case "z":
                document.getElementById("z").setAttribute("title", " z comme zéro");
            case "s":
                document.getElementById("s").setAttribute("title", " s comme sapin");
            case "v":
                document.getElementById("v").setAttribute("title", " v comme stévia");
            case "f":
                document.getElementById("f").setAttribute("title", " f comme pharynx");
            case "ʒ":
                document.getElementById("ʒ").setAttribute("title", "  j comme régir, jouer ");
            case "∫":
                document.getElementById("∫").setAttribute("title", "ch comme acheter");
            case "ʁ":
                document.getElementById("ʁ").setAttribute("title", " r comme rouler");
            case "x":
                document.getElementById("x").setAttribute("title", "ch, kh  comme chamsin, khamsin");
            case "d":
                document.getElementById("d").setAttribute("title", " d comme diner");
            case "b":
                document.getElementById("b").setAttribute("title", " b comme banane");
            case "n":
                document.getElementById("n").setAttribute("title", " n comme nectarine");
            case "m":
                document.getElementById("m").setAttribute("title", " m comme mario");
            case "ɲ":
                document.getElementById("ɲ").setAttribute("title", " gn comme agneau");
            case "ŋ":
                document.getElementById("ŋ").setAttribute("title", " ng comme swinguer");
            case "g":
                document.getElementById("g").setAttribute("title", " gu comme seconder");
            case "k":
                document.getElementById("k").setAttribute("title", " k comme carte");
            case "ɥ":
                document.getElementById("ɥ").setAttribute("title", " u comme yuan");
            case "w":
                document.getElementById("w").setAttribute("title", " ou comme jaguar");
            case "l":
                document.getElementById("l").setAttribute("title", " l comme lion");
            case "j":
                document.getElementById("j").setAttribute("title", " ll comme fouiller");
            case "y":
                document.getElementById("y").setAttribute("title", " u comme turlututu");
            case "i":
                document.getElementById("i").setAttribute("title", " i comme gîte");
            case "p":
                document.getElementById("p").setAttribute("title", " p comme pomme");
            case "u":
                document.getElementById("u").setAttribute("title", " ou comme saouler");
            case "œ":
                document.getElementById("œ").setAttribute("title", " e comme ceuillir");
            case "ē":
                document.getElementById("ē").setAttribute("title", " ey comme bacon");
            case "ō":
                document.getElementById("ō").setAttribute("title", " au comme pauser");
            case "ø":
                document.getElementById("ø").setAttribute("title", " e comme feu");
            case "e":
                document.getElementById("e").setAttribute("title", " é comme nez");
            case "o":
                document.getElementById("o").setAttribute("title", " o comme orange");
            case "ɛ":
                document.getElementById("ɛ").setAttribute("title", " ai comme respect");
            case "ɛ":
                document.getElementById("ɛ").setAttribute("title", " ai comme respect");
            case "ɔ":
                document.getElementById("ɔ").setAttribute("title", " o comme mort");
            case "~ɛ":
                document.getElementById("~ɛ").setAttribute("title", " ain comme pain");
            case "ã":
                document.getElementById("ã").setAttribute("title", " an comme amputer");
            case "~ɔ":
                document.getElementById("~ɔ").setAttribute("title", " on comme ombre");

        }
    });
});