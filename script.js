const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resrl= document.querySelector('#resrl');

form.addEventListener('submit', sumarInputValues);
function sumarInputValues(event){
    event.preventDefault();
    let a= parseInt(input1.value);
    let b= parseInt(input2.value);
    console.log('mira click')
    let c=a+b;
    resrl.innerHTML=`Resultado: ${c}`;
}