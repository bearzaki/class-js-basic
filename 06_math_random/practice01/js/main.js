// 06_ループの応用とMathオブジェクト

const num = 4.6;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

console.log(Math.random() * 5);

const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);

const diceResult = document.getElementById('dice-result');
const rollDiceBtn = document.getElementById('roll-dice-btn');

rollDiceBtn.addEventListener('click', () => {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = diceNumber;
});

const omikujiList = ['大吉', '中吉', '小吉', '凶'];
const randomIndex = Math.floor(Math.random() * omikujiList.length);
console.log(omikujiList[randomIndex]);

const omikujiResult = document.getElementById('omikuji-result');
const omikujiMessage = document.getElementById('omikuji-message');
const omikujiBtn = document.getElementById('omikuji-btn');
const messages = [
    '最高の1日になります。新しいことに挑戦してみましょう。',
    '思いがけない嬉しい出来事があるかもしれません。',
    '焦らずマイペースに進むと良い結果につながります。',
    '普段通りの日常に小さな幸せが見つかりそうです。',
    '無理は禁物です。今日はゆっくり休んで体調を整えましょう。'
];

omikujiBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * omikujiList.length);

    omikujiResult.textContent = omikujiList[randomIndex];
    omikujiMessage.textContent = messages[randomIndex];
});

const cards = document.querySelectorAll('.card');
const drawCardBtn = document.getElementById('draw-card-btn');

drawCardBtn.addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('is-active');
    }
    const randomIndex = Math.floor(Math.random() * cards.length);
    cards[randomIndex].classList.add('is-active');
});
