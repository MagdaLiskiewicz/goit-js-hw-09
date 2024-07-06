const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const message = form.elements.message;
const email = form.elements.email;

function saveToLocalStorage() {
  const data = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  localStorage.setItem('localStorageKey', JSON.stringify(data));
}

function loadFromLocalStorage() {
  const savedItem = localStorage.getItem('localStorageKey');
  if (savedItem) {
    const parsedItem = JSON.parse(savedItem);
    message.value = parsedItem.message ?? '';
    email.value = parsedItem.email ?? '';
  }
}

loadFromLocalStorage();

form.addEventListener('input', evt => {
  saveToLocalStorage();
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (email.value.trim() && message.value.trim()) {
    console.log({
      email: email.value.trim(),
      message: message.value.trim(),
    });

    localStorage.removeItem(localStorageKey);
    form.reset();
  } else {
    alert('Please fill in both fields.');
  }
});
