const fruits = ['りんご', 'バナナ', 'みかん'];
fruits[3] = 'いちご';
fruits.push('ぶどう');
console.log(fruits);

const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];
let currentIndex = 0;
const stepMessage = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');
const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');

stepMessage.textContent = steps[currentIndex];
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }
    stepMessage.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});

addBtn.addEventListener('click', () => {
    if (newStepInput.value !== '') {
        steps.push(newStepInput.value);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

        newStepInput.value = '';
    }
});

removeBtn.addEventListener('click', () => {
    steps.pop();
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});

for (let i = 0; i < 5; i++) {
    console.log(`${i}回目の処理です。`);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let toral = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目：${fruits[i]}`);
}

const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
const menuList = document.getElementById('menu-list');
let text = '';

for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}</li>`;
}

menuList.innerHTML = text;
