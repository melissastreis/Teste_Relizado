const { cadastrarUsuario } = require("./sistema");

console.log("Teste de desempenho iniciado...");

const inicio = Date.now();

for (let i = 0; i < 1000; i++) {
  cadastrarUsuario(`User${i}`, `user${i}@email.com`);
}

const fim = Date.now();

console.log(`Tempo para cadastrar 1000 usuários: ${fim - inicio} ms`);