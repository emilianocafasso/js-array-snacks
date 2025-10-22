// Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. Infine stampa separatamente i 3 array.

const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
]

// metodo con for

// const benzinacars = []
// const dieselcars = []
// const othercars = []

// for(let i=0; i<cars.length; i++) {
//     currentcar = cars[i]
//     if(currentcar.fuel==='benzina') {
//         benzinacars.push(currentcar)
//     }
//     else if (currentcar.fuel==='diesel'){
//         dieselcars.push(currentcar)
//     }
//     else {
//         othercars.push(currentcar)
//     }
// }
// console.log("Auto a benzina: ", benzinacars)
// console.log("Auto a diesel: ", dieselcars)
// console.log("Altre auto : ", othercars)


// metodo con foreach

// const benzina = []
// const diesel = []
// const other = []

// cars.forEach(car => {
//     if(car.fuel === "benzina") {
//         benzina.push(car)
//     } else if(car.fuel === "diesel") {
//         diesel.push(car)
//     } else {
//         other.push(car)
//     }
// })
// console.log("Auto a benzina: ", benzina)
// console.log("Auto a diesel: ", diesel)
// console.log("Altre auto : ", other)

