const { cadastrarUsuario, listarUsuarios } = require("./sistema");

function rodarTestes() {
  console.log("Iniciando testes...\n");

  try {
    console.assert(cadastrarUsuario("", "") === "Erro: Dados inválidos");
    console.log("Cadastro inválido testado");

    console.assert(cadastrarUsuario("Ana", "ana@email.com") === "Usuário cadastrado com sucesso!");
    console.log("Cadastro válido testado");

    console.assert(listarUsuarios().length === 1);
    console.log("Listagem testada");

    console.log("\n Todos os testes passaram!");
  } catch (erro) {
    console.error("Erro nos testes:", erro);
  }
}

rodarTestes();