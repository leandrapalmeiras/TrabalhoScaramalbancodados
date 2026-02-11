
    function inserir() { // Função para adicionar um novo usuário
      const nome = document.getElementById("nome").value; // Pega o valor digitado no campo nome
      const email = document.getElementById("email").value; // Pega o valor digitado no campo email 
      //

      function inserir() { 
  // Função para adicionar um novo usuário
  // Essa mesma estrutura pode ser usada em QUALQUER sistema que precise capturar dados digitados

  const nome = document.getElementById("nome").value; 
  // document.getElementById("nome") → busca no HTML o elemento com id="nome"
  // .value → pega o que foi digitado dentro do campo
  // Pode ser usado em:
  // - Sistema de login (pegar usuário)
  // - Cadastro de produtos
  // - Formulário de contato
  // - Sistema escolar (nome do aluno)
  // - Qualquer formulário HTML

  const email = document.getElementById("email").value; 
  // Mesma lógica acima
  // Busca o campo com id="email" e pega o valor digitado
  // Pode ser usado em:
  // - Recuperação de senha
  // - Newsletter
  // - Cadastro em site
  // - Envio de dados para API
}
