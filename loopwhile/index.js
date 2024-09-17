//LOOP WHILE (ENQUANTO)
// RODA NUM LOOP INFINITO POR PADRÃO
// MAS PODEMO ESTIPULAR UMA CONIÇÃO
// DE PARADA PARA CONTROLÁ-LO
// SINTAXE: WHILE (CONDIÇÃO) {CÓDIGO}
let n = 0;
while (n < 50) {
  //conole.clear();
  if (n % 2 == 1) {
    //SE O RESTO FOR 0 (É PAR)
    //SE O RESTO FOR 1 (É IMPAR)
    console.log(n);
  }
  n = n + 1;
}
