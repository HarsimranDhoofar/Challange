//Challange 1: Your Age in Days

function ageToDays() {
    var yearBorn = prompt('Whay year you were born?');
    var yearOldInDays = (2020 - yearBorn) * 365;
    document.getElementById('displayAgeInDays').innerHTML = ' You are ' + yearOldInDays + ' old!'
}

function reset() {
    document.getElementById('displayAgeInDays').remove();
}

//Challange 2: Generate Cat
function generateCat() {

    var img = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    img.src = 'https://www.letstalkabout.co.uk/wp-content/uploads/2014/01/reaction-gif-sleepy-cute-cat.gif';
    div.appendChild(img);
}
//Challange 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(rpsToRpsInt());
    console.log('Computer choice', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    // botChoice =

    // result = decideWinner(humanChoice,botChoice);
    // 
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function rpsToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {

    if (yourScore === 0) {
        return { 'message': 'Youlost!', 'color': 'red' };

    } else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You won!', 'color': 'green' }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabse = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabse[humanImageChoice] + "'height=150px, width=150px>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabse[botImageChoice] + "'height=150px, width=150px>";
    document.getElementById('lex-box-rps-div').appendChild(humanDiv);
    document.getElementById('lex-box-rps-div').appendChild(messageDiv);
    document.getElementById('lex-box-rps-div').appendChild(botDiv);
}