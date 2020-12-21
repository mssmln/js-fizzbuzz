// FizzBuzz (senza usare le funzioni)
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?


// for (var i = 1; i <= 100; i++) {
//
//
//   if ( (i % 3 == 0) && (i % 5 == 0) ) { // mettendolo in ultima posizione nel ciclo il numero 15 per esempio sarebbe stato solo Fizz e non FizzBuzz come deve essere
//     console.log('FizzBuzz');
//   } else if (i % 3 == 0) {
//     console.log('Fizz');
//   } else if (i % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }



// while program version
var i = 1;

while (i <= 100) {


  if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }


  i++;
}
