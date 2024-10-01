//OPERADOR TERNARIO SERVE PARA 
//DESVIO CONDICIONAL, ASSIM COMO O IF/ELSE, PORÉM SUA SINTAXE SIMPLIFICADA
//PODEMOS UTILIZAR O OPERADOR TERNARIO ANINHADO 
// EXEMPLO: <VARIAVEL> = <CONDIÇÃO> ? <VALOR_TRUE> : <VALOR_FALSE>

const idade = 18

const cnh = idade >= 18 ? "Maiores podem dirigir": "Proibido dirigir"
console.log(cnh)

let pessoas = [
  {nome: "Ana", sexo: "F", idade: 15},
  {nome: "Joana", sexo: "F", idade: 35},
  {nome: "Paulo", sexo: "M", idade: 17},
  {nome: "Jonas", sexo: "M", idade: 25}
]
let meninas = []
let meninos = []
for (let nome of pessoas){
  nome.sexo == "F" ? meninas.push(nome) :
    meninos.push(nome)
}
console.table(meninas)
console.table(meninos)