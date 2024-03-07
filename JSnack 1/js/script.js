
// array di oggetti
const elencoZucchine = [
   {
      varietà: 'rossa',
      peso: '2Kg',
      lunghezza: '10cm'
   },
   {
      varietà: 'viola',
      peso: '1Kg',
      lunghezza: '12cm'
   },
   {
      varietà: 'marrone',
      peso: '2.5Kg',
      lunghezza: '15cm'
   },
   {
      varietà: 'bianca',
      peso: '1.5Kg',
      lunghezza: '20cm'
   },
   {
      varietà: 'verde',
      peso: '0.5Kg',
      lunghezza: '16cm'
   },
   {
      varietà: 'gialla',
      peso: '1.8Kg',
      lunghezza: '8cm'
   },
   {
      varietà: 'blu',
      peso: '1.2Kg',
      lunghezza: '15cm'
   },
   {
      varietà: 'nera',
      peso: '1.4Kg',
      lunghezza: '17cm'
   },
   {
      varietà: 'rosa',
      peso: '3.3Kg',
      lunghezza: '12cm'
   },
   {
      varietà: 'azzurra',
      peso: '5.4Kg',
      lunghezza: '10cm'
   },
];


const output = document.querySelector('._output');


let totale = 0;


// ciclo gli oggetti dell'array e prendo solo il peso per poi trasformarlo in numero e sommarlo
// 'parseFloat()' serve per mantenere i numeri decimali
elencoZucchine.forEach(zucchina => totale = totale + parseFloat(zucchina.peso));

output.innerHTML += `${totale} Kg`;

console.log(totale);