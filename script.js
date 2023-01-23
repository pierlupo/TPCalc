"use strict";
//Récupération des touches de la calculette et transformation en tableau:
//let btnCalc = document.querySelectorAll('.btn');
let btnCalc = [...document.querySelectorAll('.btn')];
//console.log(btnCalc);

//let btnCalc = document.getElementsByClassName('btn');
//console.log(btnCalc);
//let tab1 = Array.from(btnCalc);
//let tab2 = [...btnCalc];
//console.log(tab1);
//console.log(tab2);

//récupération de la data-key attribuée au bouton:
let listKeycode = btnCalc.map(bouton => bouton.dataset.key);
//console.log(listKeycode);

let screen = document.querySelector('.ecran');
//const ecran = document.getElementsByClassName('ecran');
//console.log(screen);

//évènement sur la touche et transformation du type number en string 
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
    //console.log(e);
});

//évènement au click on met dans une variable valeur au click la dataset définie
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
    //on vérifie ici son type
    //console.log(e, typeof valeur)
});

//console.clear();

let calculer = (valeur) => {
    if(listKeycode.includes(valeur)){
        switch(valeur) {
            case '46':
                screen.textContent = "";
                break;
            case '13':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                console.log(calcul);
                break;
            default:
            const indexKeycode = listKeycode.indexOf(valeur);
            const bouton = btnCalc[indexKeycode];
            screen.textContent += bouton.innerHTML;
        }
    }
}



window.addEventListener('error', (e)=> {
    alert('Une erreur est survenue : '+ e.message);
})



