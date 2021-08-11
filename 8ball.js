let userName = 'christopher';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

let userQuestion = 'Will I be rich someday?';

console.log(`${userName} asks: ` + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    console.log('Nope.');
    break;
  case 1:
    console.log('Maybe, who knows for sure?');
    break;
  case 2:
    console.log('Yes, absolutely (if today is opposite day)');
    break;
  case 3:
    console.log('Absolutely yes');
    break;
  case 4:
    console.log('Lmao not a chance');
    break;
  case 5:
    console.log('If you\'re lucky, maybe');
    break;
  case 6:
    console.log('I am bored');
    break;
  case 7:
    console.log('Yes. I mean no. I mean maybe. Actually no.');
    break;
  default:
    console.log('I don\'t understand the question, sorry');
    break;
}
