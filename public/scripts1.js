(function () {
  
document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById('form');
const email = document.getElementById('email2');
const password = document.getElementById('pwd2');
const small1 = document.getElementById('small1');
const small2 = document.getElementById('small2');



function emailValidate(emailValue) {
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
  small1.textContent = isValid ? "Email válido" :  "Email inválido";
  return isValid;
}

function passwordValidate(passwordValue, minDigits) {
  const isValid = passwordValue.length >= minDigits;
  small2.textContent = isValid ? "Senha válida" : "Senha com menos de 6 caracteres";
  return isValid;
}


form.addEventListener("submit", (event) => {
  const isEmailValid = email.value === "" || !emailValidate(email.value);
  const isPasswordValid = password.value === "" || !passwordValidate(password.value, 6);

  if (isEmailValid || isPasswordValid) {
    event.preventDefault();
  }else {
    
    alert('Login realizado com sucesso!!')
     form.reset();
  }
});


email.addEventListener("input", () => emailValidate(email.value));
password.addEventListener("input", () => passwordValidate(password.value, 6));

});
})();