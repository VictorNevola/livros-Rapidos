const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.ul-horizontal ');
  const push = document.querySelector('#body2');
  burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    push.classList.toggle('body2-style');
  })
}

window.onload = function checkdate() {
  let dates = document.querySelectorAll('.dates');
  let today = Date.now();
  let incoming = document.querySelectorAll('.receitas');

  
  incoming.forEach((incom) => {
    // Trocar para quando o status tiver no banco
    if (new Date(incom.querySelector('.dates').getAttribute('value')) < new Date(today) && incoming[1].querySelector('.status').getAttribute('value') !== "Paga") {
      // console.log(new Date(date.getAttribute('value')).toString());
      incom.querySelector('.dates').classList.toggle('late');
    }
  })

  // dates.forEach((date) => {
  //   if (new Date(date.getAttribute('value')) < new Date(today)) {
  //     console.log(new Date(date.getAttribute('value')).toString());
  //     date.classList.toggle('late');
  //   }
  // })
}

navSlide();



