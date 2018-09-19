document.addEventListener("DOMContentLoaded", function() {
  var form = document.forms.mainForm;
  var lastName = document.getElementById('last-name');
  var firstName = document.getElementById('first-name');
  var lastNamePhonetic = document.getElementById('last-name-phonetic');
  var firstNamePhonetic = document.getElementById('first-name-phonetic');
  var tel = document.getElementById('tel');
  var email = document.getElementById('email');
  var date = document.getElementById('move-date');


  function validateHandler(event) {
    this.classList.remove('is-error');
    this.classList.remove('is-success');
    if (this.validity.valid) {
      this.classList.add('is-success');
    } else {
      this.classList.add('is-error');
    }
  }

  //setCustomValidity() 値を検証した時に表示されるエラー文言を変更できる
  email.addEventListener('input', function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('メールアドレスを正しく入力してください');
    } else {
      email.setCustomValidity('メールアドレスは必須項目です');
    }
  });

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
