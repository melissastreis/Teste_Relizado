const { cadastrarUsuario, listarUsuarios } = require("./sistema");

function rodarTestes() {
  console.log("Iniciando testes...\n");

  // Teste 1: dados vazios
  console.assert(
    cadastrarUsuario("", "") === "Erro: Dados inválidos",
    "Erro no teste de dados vazios"
  );
  console.log("Teste 1: validação de campos");

  // Teste 2: email inválido
  console.assert(
    cadastrarUsuario("Ana", "anaemail.com") === "Erro: Email inválido",
    "Erro no teste de email inválido"
  );
  console.log("Teste 2: validação de email");

  // Teste 3: cadastro válido
  console.assert(
    cadastrarUsuario("Ana", "ana@email.com") === "Usuário cadastrado com sucesso!",
    "Erro no cadastro válido"
  );
  console.log("Teste 3: cadastro válido");

  // Teste 4: listagem
  console.assert(
    listarUsuarios().length === 1,
    "Erro na listagem"
  );
  console.log("Teste 4: listagem");

  console.log("\nTodos os testes passaram!");
}

rodarTestes();