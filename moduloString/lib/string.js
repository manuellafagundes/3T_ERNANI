// DECLARANDO FUNÇÕES (MÓDULOS)

const nome = "Manu";

function olaPessoa() {
  console.log(`ola, ${nome}`);
}
// EXPORTAÇÃO INLINE
export function textoMaiusculas(texto) {
  console.log(texto.toUpperCase());
}
function textoMinusculas(texto) {
  console.log(texto.toLowerCase());
}
// EXPORTAÇÃO PADRÃO (DEFAULT)
export default textoMinusculas;
// EXPORTAÇAÕ POSTERIOR
export { nome, olaPessoa };
