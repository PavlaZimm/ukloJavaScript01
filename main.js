// tady je místo pro náš program

/*

let nadpis= document.querySelector('h1');

console.log( nadpis )


*/

document.querySelector("h1").style.color="blue";
document.querySelector("p").style.fontSize="26px";
document.querySelector(".kocka").style.marginLeft = "50px";
document.querySelector(".ctverecek").style.marginLeft = "150px";


let kocka = document.querySelector('.kocka');
kocka.src = 'pes.jpg';

function posunKostku(){
    let ctverecek = document.querySelector('.ctverecek');
    ctverecek.style.marginLeft = "50px";
}

