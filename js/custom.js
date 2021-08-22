const nextbtns = document.querySelectorAll('.next__btn');
const btns = document.querySelectorAll('.answer__btn');
const block1 = document.querySelector('.block-1');
const block2 = document.querySelector('.block-2');
const block3 = document.querySelector('.block-3');
const block4 = document.querySelector('.block-4');

btns.forEach(a => {

  a.addEventListener('click', (e) => {
    e.preventDefault();
    const answ = e.target.getAttribute('data-answ');
    const infernal = document.querySelector('.infernal-asnwer');
    const panda = document.querySelector('.panda-asnwer');
    const lil = document.querySelector('.lil-asnwer');


    if(answ == 1) {
      infernal.innerHTML = "Пошел нахуй пидарас!! ты ахуел сука блять??";
      lil.innerHTML = "Зарежууу нахоооойй!!1";
      panda.innerHTML = "Ты на себя посмотри! Еблан, вчера умер!!";
    }
    if(answ == 2) {
      infernal.innerHTML = "Завали ебало!! Ты забыла как ты вчера плакала ?";
      panda.innerHTML = "Вы не можете по одному.. Я вас всех ебала **гав гав**";
    }
    if(answ == 3) {
      infernal.innerHTML = "Небыло такого, пидарас!! ты забыл как вчера тебя убили ?";
      panda.innerHTML = "Ой, так нравится, долбиться в задницууу";
      lil.innerHTML = "Итааа тыы!1 Он меня с детдома забрал";
    }
    if(answ == 4) {
      infernal.innerHTML = "**Молчит и впитывает как тряпка**";
      panda.innerHTML = "Иди нахуй, сын шлюхи!! Я тебе завалю **пиздит по детски**";
      lil.innerHTML = "**Пахую. Слушает свои гавно треки**";
      lil.previousElementSibling.innerHTML = 'LiL Peep';
    }
    if(answ == 5) {
      infernal.innerHTML = "Завидуйте молча!! Вы все пидарасы, я свою армию соберу и покажу вам!!";
      panda.innerHTML = "**Думает как заглатывает у Лил Пипа его 7см-й болт**";
      lil.innerHTML = "**Ващее похую. Меняю людей как перчатки**";
      lil.previousElementSibling.innerHTML = 'LiL Peep';
    }

    block3.style.display = 'none';
    block4.style.display = 'block';


  });
});


nextbtns.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    const parent = target.parentNode;
    const step = parseInt(target.getAttribute('data-step'));
    const next = document.querySelector(`.block-${step+1}`);
    // return console.log(target.parentNode);

    next.style.display = 'block';
    parent.style.display = 'none';
  })
});