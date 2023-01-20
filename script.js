//Récupération des touches de la calculette et transformation en tableau:
let btnCalc = [...document.querySelectorAll('.btn')];
console.log(btnCalc);
//const btnCalc = document.getElementsByClassName('btn');
//console.log(btnCalc);

//récupération de la data-key attribuée au bouton:
let listKeycode = btnCalc.map(bouton => bouton.dataset.key);
console.log(listKeycode);

let ecran = document.querySelector('.ecran');
//const ecran = document.getElementsByClassName('ecran');
console.log(ecran);

//évènement sur la touche, transformation du type number en string 
document.addEventListener('keydown', (e) => {
    const valeur = e.key.toString();
    ;
});

//évènement au click on met dans une variable valeur au click la dataset définie
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    console.log(valeur, typeof valeur)
})

let calculer = (valeur) => {
    if(listKeycode.includes(valeur)){
        switch(valeur) {
            case '46':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
            const indexKeycode = listKeycode.indexOf(valeur);
            const bouton = btnCalc[indexKeycode];
            ecran.textContent += bouton.innerHTML;
        }
    }
}



