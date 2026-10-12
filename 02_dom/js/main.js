// console.log('success!');

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle);

// const title = document.querySelector('#main-title');
// console.dir(title);

// console.log(document.body);
// console.log(document.documentElement);

// const introText = document.querySelector('intro');
// console.log(introText);

// const changeBtn = document.querySelector('#change-btn');
// console.dir(changeBtn);

// const mainTitle = document.getElementById('main-title');
// console.log(mainTitle.textContent);

// const day = 12;
// const week = '月曜日';
// mainTitle.textContent = `今日は${day}日の${week}です。`;

// const introText = document.querySelector('#intro');
// console.log(introText.innerHTML);

// introText.innerHTML = `ようこそ！<strong>JS</strong>の正解へ！`;

// console.log(document.body.textContent);
// console.log(document.body.innerHTML);

// introText.textContent = `ようこそ！<strong>JS</strong>の正解へ！`;

// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = `熊崎`;

// const introText = document.getElementById('intro');
// introText.innerHTML = `途中で<br>改行がある文章です。`;

// const changeBtn = document.getElementById('change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`;

// let newSize = 50;
// mainTitle.style.fontSize = `${newSize}px`;

// changeBtn.addEventListener('click', () => {
//     mainTitle.style.color = '#ff3366';
//     mainTitle.style.backgroundColor = '#333333';
//     introText.style.letterSpacing = `1em`;
//     introText.style.borderBottom = `solid 1px`;
//     introText.style.fontStyle = `italic`;
// });

// 課題

const themeTitle = document.getElementById('theme-title');

const themeDesc = document.getElementById('theme-desc');

const domBody = document.getElementById('dom-body');

const btnLight = document.getElementById('btn-light');

const btnDark = document.getElementById('btn-dark');

const btnPank = document.getElementById('btn-pank');

btnLight.addEventListener('click', () => {
    domBody.style.color = '#000000';
    domBody.style.backgroundColor = '#ffffff';
    themeTitle.textContent = `今のテーマ：☀️ ライトモード`;
});

btnDark.addEventListener('click', () => {
    domBody.style.color = '#ffffff';
    domBody.style.backgroundColor = '#000033';
    themeTitle.textContent = `今のテーマ：🌙 ダークモード`;
});

btnPank.addEventListener('click', () => {
    domBody.style.color = '#ffff00'
    domBody.style.backgroundColor = '#000000';
    themeTitle.textContent = `今のテーマ：⚡ パンク`;
});
