/*-- déclaration et affectation des variables contenant les données ou les options --*/

/*-- déclaration des variables globales --*/
let zone_graph1;
let graph1;
let ligne_bleu;
let ligne_rouge;
let grand1;

let zone_graph2;
let graph2;
let bleuB;
let orange;
let grand2;

let btngrand1;
let btngrand;

/*-- déclaration des fonctions classiques --*/

/*-- déclaration des fonctions de callback --*/

function zoom1 () {
    let originaltransform1=grand1.attr('transform');
    grand1.animate({
        transform: 's.0.75 0.75',
    }, 750, function () {
        grand1.animate({
            transform: originaltransform1 || '',
        }, 750);
    });
};

function zoom () {
    let originaltransform2=grand2.attr('transform');
    grand2.animate({
        transform: 's.0.75 0.75',
    }, 750, function () {
        grand2.animate({
            transform: originaltransform2 || '',
        }, 750);
    });
};

// fonction de callback pour récupérer les premiers éléments du DOM
function init () {
    //Graphique 1
    zone_graph1=Snap("#graphique1");
    graph1=Snap.load("images/graphique1.svg", function (graph1Svg){
        ligne_bleu=graph1Svg.select("#ligne_bleu");
        ligne_rouge=graph1Svg.select("#ligne_rouge");
        grand1=graph1Svg.select("svg");

        ligne_bleu.mouseover(function (){
            ligne_rouge.animate({ opacity: 0.3 }, 300 );
            ligne_bleu.animate({transform: "s1.03"}, 300);
        });

        ligne_bleu.mouseout(function (){
            ligne_rouge.animate({opacity: 1},300 );
            ligne_bleu.animate({transform: "s1"}, 300);
        });

        ligne_rouge.mouseover(function (){
            ligne_bleu.animate({ opacity: 0.3 }, 300 );
            ligne_rouge.animate({transform: "s1.03"}, 300);
        });

        ligne_rouge.mouseout(function (){
            ligne_bleu.animate({opacity: 1}, 300 );
            ligne_rouge.animate({transform: "s1"}, 300);
        });

        zone_graph1.append(graph1Svg);
    });

    //Graphique 2
    zone_graph2=Snap("#graphique");
    graph2=Snap.load("images/graphique.svg", function (graphSvg){
        bleuB = graphSvg.select ("#bleuB");
        orange = graphSvg.select ("#orange-2");
        grand2= graphSvg.select("svg");
        
        bleuB.hover(
            function () {
                orange.animate({opacity: 0.3 }, 300);
                bleuB.animate({transform: "s1.02"}, 300);
            },
            function () {
                orange.animate({opacity: 1 },300 );
                bleuB.animate({transform: "s1"}, 300);
            }
        );

        orange.hover(
            function() {
                orange.animate({transform: "s1.02"}, 300,);
                bleuB.animate({opacity: 0.3 },300);
            },
            function () {
                orange.animate({transform: "s1"}, 300);
                bleuB.animate({opacity:  1},300 );
            }
        );

        zone_graph2.append(graphSvg);
    });

    //boutons
    btngrand1=document.getElementById("btngrandgraph1");
    btngrand=document.getElementById("btngrandgraph");

    btngrand1.addEventListener("click",zoom1);
    btngrand.addEventListener("click",zoom);

    /*GSAP*/
    time_logo=gsap.timeline();
    time_logo.from ("#logo", 1, {
        y:200,
        skewy: 7,
        ease: "power4.out",
        delay: 0
    });

    time_img=gsap.timeline();
    time_img.from ("#images", 2, {
        opacity: 0,
        ease: "power4.out",
        delay: 0.5
    });
};

/*-- quand le dom à entièrement chargé, on peut appeler la fonction d'initialisation --*/
window.addEventListener("load", init);
