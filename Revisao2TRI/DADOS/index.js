// ARRAYS SÃO INDEXADOS
// POSSUEM MÉTODOS

const { log } = require("console")
const { TIMEOUT } = require("dns")

// PODEM SER ITERADOS
const nome = "Manuella"
const time = ['Marcos', 'Raimundo', 'Jose', 'Luis', ]
// (PARENTESES), [COLCHETES], {CHAVES}
time.push("Chaves") // SEMPRE NO FINAL DA LISTA
time.shift() // Remove alguem no inicio
console.log(time)
console.log(time[2]) // Jose
console.log(time[15]) // undefined
time[15] = 'Neymar'
console.log(time[15]) // Neymar
// ITERAR - LOOP ATÉ O ESGOTAMENTO (FOR, FOREACH, WHILE, FOR IN, FOR OF)
for(var i = 0; i <= 4; i++) {
  console.log(time[i])
}
