const input = document.querySelector('.login-form');

const onInput = (event) => {
  event.preventDefault();

  const email = input.elements.email.value;
  const password = input.elements.password.value;

  if (!email || !password) return alert('Все поля должны быть заполнены');
  console.log({ email, password, });

  input.reset();
};

input.addEventListener('submit', onInput);