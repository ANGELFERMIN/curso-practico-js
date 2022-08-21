const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resrl= document.querySelector('#resrl');


function btnOnClick(){
    let a= parseInt(input1.value);
    let b= parseInt(input2.value);

    console.log('mira click')

    let c=a+b;
    resrl.innerHTML=`Resultado: ${c}`;


}

