class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

let usuarios = [];

function cadastrarUsuario(nome, email) {
  // validação (qualidade)
  if (!nome || !email) {
    return "Erro: Dados inválidos";
  }

  // validação simples de email
  if (!email.includes("@")) {
    return "Erro: Email inválido";
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