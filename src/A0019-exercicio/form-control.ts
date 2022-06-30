import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(this)) console.log('FORMULÁRIO ENVIADO');
});

// Validação de campo vazio
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas precisam ser iguais');
    showErrorMessage(password2, 'As senhas precisam ser iguais');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement; // Seleciona o pai do input e o joga em uma constante
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement; // Seleciona tag span da formField
  errorMessage.innerHTML = msg; // Insere a mensagem dentro da span do formFields
  formFields.classList.add(SHOW_ERROR_MESSSAGES); // Adiciona a class show-error-message na div onde possui a formFields
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSSAGES).forEach(() => (send = false));
  return send;
}
