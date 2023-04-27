function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getUserChoice(userChoice) {
  switch(userChoice.toLowerCase()) {
    case 'rock':
      return 1;
      break;
    case 'paper':
      return 2;
      break;
    default: 
      return 3;
  }
}

function playRound(user, computer) {
  if ((user == 1 && computer == 2) || (user == 2 && computer == 3) || (user == 3 && computer == 1)){
    return 2;
  } else if ((user == 2 && computer == 1) || (user == 3 && computer == 2) || (user == 1 && computer == 3)) {
    return 1;
  } else {
    return 0;
  }
}

const btn = document.querySelector('.start-btn');
const choices = document.querySelector('.choices');
const results = document.querySelector('.rps-result');
const roundBlk = document.querySelector('.rps-rd');
const winner = document.querySelector('.winner-announcement');
const uscore_element = document.querySelector('.user-score strong');
const cscore_element = document.querySelector('.computer-score strong');
const finalresBlk = document.querySelector('.results');
const mainBlk = document.querySelector('main');
const res_img = document.querySelector('.results img');
const res_txt = document.querySelector('.results .rs-title');
let uscore = 0;
let cscore = 0;

btn.addEventListener('click', (e) => {


  //hide self
  btn.classList.toggle('hide');
  //show choices and results block
  choices.classList.toggle('hide');
  results.classList.toggle('hide');
  // Display Round 1
  let roundhtml = "<h3>Round <strong class='rd-number'>1</strong>! Your move</h3>"
  roundBlk.innerHTML = roundhtml;
  const rdnum = document.querySelector('.rd-number');

  //Add listener to every choice
  for(const choice of choices.children) {
    choice.addEventListener('click', (e) => {
      // update round number
      rdnum.textContent = (parseInt(rdnum.innerHTML) + 1);
      // compare choices
      let res = playRound(getUserChoice(choice.className.toString()), getComputerChoice());
      
      if(res == 1) {
        winner.textContent = 'YOU WON! Nice';
        uscore_element.textContent = ++uscore;
      }
      else if(res == 2) {
        winner.textContent = 'AI WON! You Bastard';
        cscore_element.textContent = ++cscore;
      }
      else {
        winner.textContent = 'BOTH OF YOU CHOOSE THE SAME POISON!!';
      }

      // Display winner when score is 5
      if (uscore == 5) {
        console.log(uscore);
        finalresBlk.classList.toggle('hide');
        mainBlk.classList.toggle('hide');
        res_img.setAttribute('src', 'images/won.svg');
        res_txt.textContent = 'YOU WON! THANK YOU FOR SAVING THE WORLD!';
      }
      else if(cscore == 5) {
        console.log(cscore);
        finalresBlk.classList.toggle('hide');
        mainBlk.classList.toggle('hide');
        res_img.setAttribute('src', 'images/lost.svg');
        document.querySelector('body').style = 'background-color: red !important;';
      }
    });
  }


});