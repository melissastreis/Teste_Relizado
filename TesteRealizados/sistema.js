class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

let usuarios = [];

function cadastrarUsuario(nome, email) {
  if (!nome || !email) {
    return "Erro: Dados inválidos";
  }

  const usuario = new Usuario(nome, email);
  usuarios.push(usuario);
  return "Usuário cadastrado com sucesso!";
}

function listarUsuarios() {
  return usuarios;
}

module.exports = {
  cadastrarUsuario,
  listarUsuarios
};