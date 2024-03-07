
// 10 oggetti 'zucchina'
const zucchina1 = {
   varietà: 'rossa',
   peso: '2Kg',
   lunghezza: '10cm'
   };

const zucchina2 = {
   varietà: 'viola',
   peso: '1Kg',
   lunghezza: '12cm'
   };

const zucchina3 = {
   varietà: 'marrone',
   peso: '2.5Kg',
   lunghezza: '14cm'
   };

const zucchina4 = {
   varietà: 'bianca',
   peso: '1.5Kg',
   lunghezza: '20cm'
   };

const zucchina5 = {
   varietà: 'verde',
   peso: '0.5Kg',
   lunghezza: '16cm'
   };

const zucchina6 = {
   varietà: 'gialla',
   peso: '1.8Kg',
   lunghezza: '8cm'
   };

const zucchina7 = {
   varietà: 'blu',
   peso: '1.2Kg',
   lunghezza: '18cm'
   };

const zucchina8 = {
   varietà: 'nera',
   peso: '1.4Kg',
   lunghezza: '17cm'
   };

const zucchina9 = {
   varietà: 'rosa',
   peso: '3.3Kg',
   lunghezza: '12cm'
   };

const zucchina10 = {
   varietà: 'azzurra',
   peso: '5.4Kg',
   lunghezza: '10cm'
   };



   let x;
   let zucchina;



for(let i = 1; i < 11; i++){

   console.log(i)
   
   x = 'zucchina' + i;

   console.log(x)

   for(proprieties of x){

      console.log(proprieties.varietà)
   }

};

