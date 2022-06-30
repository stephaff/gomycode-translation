let btnEnter = document.querySelector('.button-enter');

btnEnter.addEventListener('click', changer)

function changer(){
    let containerGauche = document.querySelector('.container-left');
    containerGauche.classList.toggle('gauche');
    let containerDroite = document.querySelector('.container-right');
    containerDroite.classList.toggle('droite');
}
