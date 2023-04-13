function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getUserChoice() {
  userChoice = prompt("Enter your choice(Rock, Paper or Scissor):__") 
  switch(userChoice.toLowerCase()) {
    case 'rock':
      return 1;
      break;
    case 'paper':
      return 2;
      break;
    case 'scissor': 
      return 3;
      break;
    default:
      console.warn('Invalid User Input');
      return getUserChoice();
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

function game(){
  let u_score = 0;
  let c_score = 0; 
  let draw = 0;

  for (let i = 0; i < 5; i++) {
    res = playRound(getUserChoice(), getComputerChoice());
    //diplay winner
    //store score
    if (res == 0) {
      console.info('Round is DRAW!');
      draw++;
    } else if ( res == 1 ) {
      console.info(`User Won RD ${i + 1}`);
      u_score++;
    } else {
      console.info(`Computer Won RD ${i + 1}`);
      c_score++;
    }
  }
  console.info(`User Score is ${u_score}`);
  console.info(`Computer Score is ${c_score}`);
  console.info(`DRAW: ${draw}`);
  // declare winner
  points = u_score - c_score;
  if (points == 0) {
    console.log('YOU ARE DRAW WITH AI');
  } else if (points > 1) {
    console.log(`YOU WON BY ${points} POINT! CONGRATULATIONS!`);
  } else {
    console.log(`YOU LOST BY ${points * -1} POINT! BETTER LUCK NEXT TIME.`);
  }
}

game();