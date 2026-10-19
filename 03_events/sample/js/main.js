const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'クリックされました';
    mainTitle.style.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    console.log(`現在のスクロール量：${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

/*
window.addEventListener('DOMContentLoaded', () => {});
DOMツリーが完成したら実行する（ブラウザにはまだ表示されてない）
*/

window.addEventListener('lord', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidth = document.getElementById('window-width');
windowWidth.textContent = window.innerWidth;

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
});

const windowHeight = document.getElementById('window-height');
windowHeight.textContent = window.innerHeight;

window.addEventListener('resize', () => {
    windowHeight.textContent = window.innerHeight;
});

btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ';
    } else {
        btn.textContent = '通常';
    }
});
