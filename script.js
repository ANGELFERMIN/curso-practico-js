const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parafito,
    pid,
    input});
//h1.innerHTML='Caballo <br> feo';
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));
//console.log(h1.setAttribute('class', 'camote'));
h1.classList.add('habichuela');
//h1.classList.remove('camote');
input.value=123;
const img =document.createElement('img');
img.setAttribute('src', 
'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc');
console.log(img);
pid.innerHTML="";
pid.append(img);





