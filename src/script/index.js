document.addEventListener("DOMContentLoaded", function() {
  var inputCheck = [false, false, false, false];
  var form = document.forms.mainForm;
  var lastName = document.getElementById('last-name');
  var firstName = document.getElementById('first-name');
  var lastNamePhonetic = document.getElementById('last-name-phonetic');
  var firstNamePhonetic = document.getElementById('first-name-phonetic');
  var tel = document.getElementById('tel');
  var email = document.getElementById('email');
  var date = document.getElementById('move-date');
  var progress = document.getElementById('progress');

  //console.log(progress.value);

  function pragressHandler(event) {
    this.classList.remove('is-error');
    this.classList.remove('is-success');
    if (this.validity.valid) {
      this.classList.add('is-success');
    } else {
      this.classList.add('is-error');
    }
  }

  //if(this.classList.contains('red') === true ){
    //処理
  //}


  function validateHandler(event) {
    this.classList.remove('is-error');
    this.classList.remove('is-success');
    if (this.validity.valid) {
      this.classList.add('is-success');
    } else {
      this.classList.add('is-error');
    }
  }

  //pattern属性で指定がある時につかえるやつ
  //最大値と最小値が設定されている場合
  tel.addEventListener('input', function(event) {
    if (tel.validity.patternMismath) {
      tel.setCustomValidity('電話番号を正しく入力してください');
    } else if(tel.validity.rangeUnderflow) {
      tel.setCustomValidity('桁数が足りていません');
    } else if(tel.validity.rangeOverflow) {
      tel.setCustomValidity('桁数が多いです');
    }
  });

  //valueMissing 要素が必須項目で空の場合　true
  //setCustomValidity() 値を検証した時に表示されるエラー文言を変更できる
  //HTML5のAPIの機能を使ってチェックできる type="email",type="url"とか
  email.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('メールアドレスを正しく入力してください');
    } else if(email.validity.valueMissing) {
      email.setCustomValidity('メールアドレスは必須項目です');
    } else {
      email.setCustomValidity('');
    }
  });

  //名前の入力検証
  lastName.addEventListener('input', validateHandler);
  lastName.addEventListener('blur', validateHandler);
  firstName.addEventListener('input', validateHandler);
  firstName.addEventListener('blur', validateHandler);

  //名前のふりがなの入力検証
  lastNamePhonetic.addEventListener('input', validateHandler);
  lastNamePhonetic.addEventListener('blur', validateHandler);
  firstNamePhonetic.addEventListener('input', validateHandler);
  firstNamePhonetic.addEventListener('blur', validateHandler);

  //電話番号の入力検証
  tel.addEventListener('input', validateHandler);
  tel.addEventListener('blur', validateHandler);

  //メールアドレスの入力検証
  email.addEventListener('input', validateHandler);
  email.addEventListener('blur', validateHandler);

});
