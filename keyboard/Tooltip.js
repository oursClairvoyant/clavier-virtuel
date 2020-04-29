
/*Infobulles pour chaque lettre du clavier virtuel */
$(document).ready(function () {

    document.querySelectorAll('.keyboard__key').forEach(key => {
        switch (key.textContent) {
            case "a":
                document.getElementById("a").setAttribute("title", " a comme ch(at)");
            case "z":
                document.getElementById("z").setAttribute("title", " z comme (z)éro");
            case "s":
                document.getElementById("s").setAttribute("title", " s comme (s)apin");
            case "v":
                document.getElementById("v").setAttribute("title", " v comme sté(v)ia");
            case "f":
                document.getElementById("f").setAttribute("title", " f comme (ph)arynx");
            case "ʒ":
                document.getElementById("ʒ").setAttribute("title", "  j comme ré(g)ir, (j)ouer ");
            case "∫":
                document.getElementById("∫").setAttribute("title", "ch comme a(ch)eter");
            case "ʁ":
                document.getElementById("ʁ").setAttribute("title", " r comme (r)ouler");
            case "x":
                document.getElementById("x").setAttribute("title", "ch, kh  comme (ch)amsin, (kh)amsin");
            case "d":
                document.getElementById("d").setAttribute("title", " d comme (d)iner");
            case "b":
                document.getElementById("b").setAttribute("title", " b comme (b)anane");
            case "n":
                document.getElementById("n").setAttribute("title", " n comme (n)ectarine");
            case "m":
                document.getElementById("m").setAttribute("title", " m comme (m)ario");
            case "ɲ":
                document.getElementById("ɲ").setAttribute("title", " gn comme a(gn)eau");
            case "ŋ":
                document.getElementById("ŋ").setAttribute("title", " ng comme swi(ng)uer");
            case "g":
                document.getElementById("g").setAttribute("title", " gu comme (gu)erre");
            case "k":
                document.getElementById("k").setAttribute("title", " k comme (c)arte");
            case "ɥ":
                document.getElementById("ɥ").setAttribute("title", " u comme y(u)an");
            case "w":
                document.getElementById("w").setAttribute("title", " ou comme jag(u)ar");
            case "l":
                document.getElementById("l").setAttribute("title", " l comme (l)ion");
            case "j":
                document.getElementById("j").setAttribute("title", " ll comme foui(ll)er");
            case "y":
                document.getElementById("y").setAttribute("title", " u comme t(u)rlututu");
            case "i":
                document.getElementById("i").setAttribute("title", " i comme g(î)te");
            case "p":
                document.getElementById("p").setAttribute("title", " p comme (p)omme");
            case "u":
                document.getElementById("u").setAttribute("title", " ou comme s(aou)ler");
            case "œ":
                document.getElementById("œ").setAttribute("title", " e comme c(eu)illir");
            case "ē":
                document.getElementById("ē").setAttribute("title", " ey comme b(a)con");
            case "ō":
                document.getElementById("ō").setAttribute("title", " au comme p(au)se");
            case "ø":
                document.getElementById("ø").setAttribute("title", " e comme f(eu)");
            case "e":
                document.getElementById("e").setAttribute("title", " é comme n(ez)");
            case "o":
                document.getElementById("o").setAttribute("title", " o comme (o)range");
            case "ɛ":
                document.getElementById("ɛ").setAttribute("title", " ai comme resp(ect)");
            case "ɔ":
                document.getElementById("ɔ").setAttribute("title", " o comme m(o)rt");
            case "ɛ̃":
                document.getElementById("ɛ̃").setAttribute("title", " ain comme p(ain)");
            case "ã":
                document.getElementById("ã").setAttribute("title", " an comme (am)puter");
            case "ɔ̃":
                document.getElementById("ɔ̃").setAttribute("title", " on comme (omb)re");
            case "t":
                document.getElementById("t").setAttribute("title", " t comme (t)rempe");
           


        }
        $(function () {
            $('button').tooltip({
                trigger : 'hover'

            }) 
            $('[data-toggle="tooltip"]').tooltip({
                trigger : 'hover'
            })
           
        })
    });
});