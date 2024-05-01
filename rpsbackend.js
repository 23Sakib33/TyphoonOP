function play(playerChoice) {
    const choices = ['👊', '✋', '✌'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === '👊' && computerChoice === '✌') ||
      (playerChoice === '✋' && computerChoice === '👊') ||
      (playerChoice === '✌' && computerChoice === '✋')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
    
    document.getElementById('result').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  }