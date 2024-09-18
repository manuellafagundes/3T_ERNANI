/** CRIE UM ARRAY DE OBJETO => PESSOAS
 * COM OS SEGUINTES ATRIBUTOS: NOME/SOBRENOME
 * CRIE UMA FUNÇÃO QUE ITERE SOBRE O ARRAY
 * E RETIRE NOMES E SOBRENOMES
 * CRIE UMA VARIÁVEL COM O CONTEÚDo:
       -> const emailBase = "@escola.com.br"
 *A PARTIR DESSES DADOS FORME UM @escola com
 * NOME.SOBRE+EMAILBASE
 * EXECUTE A FUNÇÃO...
 */
const pessoas = [];
// CRIAR EMAIL BASE
const emailBase = "@escola.pr.gov.br";

// FUNÇÃO DE CONSTRUÇÃO E IMPRESSÃO
function gerarEmail() {
       if (pessoas.length == 0) {
        console.log("Nenhum aluno cadastro");
} else {
for (pessoa of pessoas) {
       const nome = pessoa.nome;
       const sobrenome = pessoa.sobrenome;
       const email = `${nome}.${sobrenome}${emailBase}`;
       console.log(email.toLowerCase()); // CAIXA BAIXA OU MINÚSCULAS)
    }
  }
}
//FUNÇÃO DE CADASTRO
function cadastrarAluno(nome, sobrenome) {
       pessoas.push({ nome: nome, sobrenome: sobrenome });
}
//CADASTRE 5 ALUNOS
cadastrarAluno("João", "Silva");
cadastrarAluno("Manuella", "Fagundes");
cadastrarAluno("Halan", "Silveira");
cadastrarAluno("Felipe", "Michetti");
cadastrarAluno("Maria", "Souza");

gerarEmail(); //IVOCANDO A FUNÇÃO
// CONVERTAM O CÓDIGO ACIMA EM UMA FUNÇÃO INVOCÁVEL 

  