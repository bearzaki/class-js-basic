const MAX_HP = 100;
const DAMAGE = 25;
let currentHp = MAX_HP;
const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';

const hpDisplay = document.getElementById('hp-display');
const battleMessage = document.getElementById('battle-message');
const attackBtn = document.getElementById('attack-btn');
const enemyImg = document.getElementById('enemy-img');
const resetBtn = document.getElementById('reset-btn');

attackBtn.addEventListener('click', () => {
    currentHp -= DAMAGE;

    if (currentHp < 0) {
        currentHp = 0;
    }

    hpDisplay.textContent = `HP: ${currentHp} / 100`;
    battleMessage.textContent = '効果的なダメージを与えた！';

    if (currentHp === 0) {
        battleMessage.textContent = 'モンスターをたおした！ゲームクリア！';
        hpDisplay.style.color = '#e74c3c';
        enemyImg.setAttribute('src', AFTER_IMG);
        enemyImg.setAttribute('alt', '倒れたモンスター');
        attackBtn.setAttribute('disabled');
    } else if (currentHp <= 50) {
        battleMessage.textContent = '相手はふらふらだ！あと少し！';
        hpDisplay.style.color = '#e67e22';
    } else {
        hpDisplay.style.color = '#333';
    }
});

resetBtn.addEventListener('click', () => { });
