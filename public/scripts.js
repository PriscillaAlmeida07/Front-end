(function () {
  
document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById('formulario');
const nome = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const small4 = document.getElementById('small4');
const small5 = document.getElementById('small5');
const small6 = document.getElementById('small6');


function emailValidate(emailValue) {
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
  small5.textContent = isValid ? "Email válido" :  "Email inválido";
  return isValid;
}

function passwordValidate(passwordValue, minDigits) {
  const isValid = passwordValue.length >= minDigits;
  small6.textContent = isValid ? "Senha válida" : "Senha com menos de 6 caracteres";
  return isValid;
}


form.addEventListener("submit", (event) => {
  validateNome();
  const isEmailValid = email.value === "" || !emailValidate(email.value);
  const isPasswordValid = password.value === "" || !passwordValidate(password.value, 6);

  if (isEmailValid || isPasswordValid ) {
    event.preventDefault();
  }else {
    
    alert('Cadastro realizado com sucesso!!')
     form.reset();
  }
});

function validateNome() {
  small4.textContent = nome.value === "" ? "Insira seu nome" : "Nome válido";
}


nome.addEventListener("input", validateNome);
email.addEventListener("input", () => emailValidate(email.value));
password.addEventListener("input", () => passwordValidate(password.value, 6));

});
})();