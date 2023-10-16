// //Re-declaration of variables
//Declariation is "x1"

// var x1 = 42;
// var x1 = 666;

// let x2 = 42;
// let x2 = 666; //error, it can't be re-declared

// const x3 = 42;
// const x3 = 666; //error, it can't be re-declared

// //Re-assigment of variables
//Przypisanie nowej wartośći do istniejącej zmiennej

// var x1 = 42;
// x1 = 666;

// let x2 = 42;
// x2 = 666;

// const x3 = 42;
// x3 = 666; //error, it can't be re-assigned

//Hoisting
//Przenoszenie deklaracji zmiennych var, deklaracji funkcji nazwanych, klas na górę aktualnie przetwarzanego zasięgu. TDZ- Temporary Dead Zone

// function DoSmthAmeswome(){
//     var z1;
//     console.log(z1);
//     z1 = 42;
// }

//Scope
//Widoczność dostępnych identyfikatorów (nazwy zmiennych, funkcji i klas) - globa; - local (dostępny tylko w aktualnym zasięgu)
//function scope (tworzony przez ciało funkcji)
//block scope (tworzony przez blok, dowolna para 2 klamerek(curly b))

// function doSmth() {
//     var x1 = 42;
//     let x2 = 42;
//     const x3 = 42;
// }

// doSmth();
// console.log(x1, x2, x3);

// doSmth()
// //console.log(x1, x2, x3) są niedostępne w aktualnym scopie, bo są zadeklarowaner wew. funckji

// if(true) {
// var x1 = 42;
// let x2 = 42;
// const x3 = 42;
// }

// console.log(x1, x2, x3); //wyświetli tylko vara

// let x = 42;

// funtion DoSmthMagic(){
//     x = 666; //kiedy nie ma deklaracj zmiennej, to szuka w zasięgu wyżej
//     let x = 66 //kiedy jest deklara, to ta wyżej nie jest używana
//     console.log(x);

// }
// doSmthMagic();
// console.log(x);

// for (i = 0; i < 10; i++) {
//     setTimeout(function) {
//         console.log(i);
//     }, 0) //kod asynchroniczny
// }