document.addEventListener("DOMContentLoaded", function() {
  var lastName = document.getElementById('last-name');
  var firstName = document.getElementById('first-name');
  var lastNamePhonetic = document.getElementById('last-name-phonetic');
  var firstNamePhonetic = document.getElementById('first-name-phonetic');
  var tel = document.getElementById('tel');
  var email = document.getElementById('email');

  function validateHandler(event) {
    this.classList.remove('is-error');
    this.classList.remove('is-success');
    if (this.validity.valid) {
      this.classList.add('is-success');
    } else {
      this.classList.add('is-error');
    }
  }

  lastName.addEventListener('input', validateHandler);
  lastName.addEventListener('blur', validateHandler);
  firstName.addEventListener('input', validateHandler);
  firstName.addEventListener('blur', validateHandler);
  lastNamePhonetic.addEventListener('input', validateHandler);
  lastNamePhonetic.addEventListener('blur', validateHandler);
  firstNamePhonetic.addEventListener('input', validateHandler);
  firstNamePhonetic.addEventListener('blur', validateHandler);
  tel.addEventListener('input', validateHandler);
  tel.addEventListener('blur', validateHandler);
  email.addEventListener('input', validateHandler);
  email.addEventListener('blur', validateHandler);

});
