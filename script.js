const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');
const loginBtn = document.getElementById('loginBtn');
const cadastroBtn = document.getElementById('cadastroBtn');
const text = document.getElementById('text');

// Função para exibir o formulário de login e ocultar o de cadastro
function showLoginForm() {
  loginForm.style.display = 'block';
  cadastroForm.style.display = 'none';
  cadastroBtn.style.color = 'black';
  cadastroBtn.style.backgroundColor = 'whitesmoke';
  loginBtn.style.color = 'white';
  loginBtn.style.backgroundColor = '#2ca6e2';
}

// Função para exibir o formulário de cadastro e ocultar o de login
function showCadastroForm() {
  loginForm.style.display = 'none';
  cadastroForm.style.display = 'block';
  loginBtn.style.color = 'black';
  loginBtn.style.backgroundColor = 'whitesmoke';
  cadastroBtn.style.color = 'white';
  cadastroBtn.style.backgroundColor = '#2ca6e2';
}

// Evento de clique no botão Login
loginBtn.addEventListener('click', showLoginForm,);

// Evento de clique no botão Cadastre-se
cadastroBtn.addEventListener('click', showCadastroForm);

// Inicia com o formulário de Login
showLoginForm()
