
window.addEventListener('load', () => {
  
})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateEmail2() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById('email').value;
  if (re.test(email) === true) {
    console.log('email2 certo');
    document.getElementById('submit').classList = '';
    return true;
  }
  else {
    console.log('email2 errado');
    document.getElementById('submit').classList = 'no-click';
  }
}

function phonenumber(inputtxt) {
  let regex = /(\(?\d{2}\)?\s)?(\d{4,5})?-?(\d{4})/gm;
  let tellphone = document.getElementById('clientTellphone').value;
  if (regex.test(tellphone) === true) {
    console.log('vai','telefone certo');
    return true;
  }
  else {
    // document.getElementById('telefone-errado').classList.toggle('hide');
    console.log('telefone errado pra krl')
  }
}

function phonenumber2() {
  // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  // let regex = new RegExp('^\\([0-9]{2}\\)(([0-9]{3}-[0-9]{5})|(9[0-9]{3}-[0-9]{4}))$');
  // let regex = new RegExp('(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})');
  let regex = /(\(?\d{2}\)?\s)?(\d{4,5})?-?(\d{4})/gm;
  let tellphone = document.getElementById('clientTellphone').value;
  if (regex.test(tellphone) === true) {
    console.log('telefone number2 certo');
  }
  else {
    // document.getElementById('telefone-errado').classList.toggle('hide');
    console.log('telefone number2 errado');
  }
}

function executeTelefone(number) {
  mascaraDeTelefone(number);
  phonenumber2();
}

