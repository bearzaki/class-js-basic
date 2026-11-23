function showWelcome() {
    console.log('いらっしゃいませ。');
}
showWelcome();

const greet = function () {
    console.log('こんにちは');
}
greet();

const showGreet = () => {
    console.log('また、こんにちは');
}
showGreet();

const printLog = () => {
    console.log('-- システムチェック開始 ---')
    console.log('異常はありませんでした。')
}
printLog();
printLog();

const cartDisplay = document.getElementById('cart-display');
const addCartBtn = document.getElementById('add-cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
let itemCount = 0;

const clearCart = () => {
    itemCount = 0;
    cartDisplay.textContent = 'カートに商品はありません（0点）';
    cartDisplay.classList.remove('has-item');
};
clearCart();

addCartBtn.addEventListener('click', () => {
    itemCount++;
    cartDisplay.textContent = `現在カートに${itemCount}点 の商品が入っています`;
    cartDisplay.classList.add('has-item');
});
clearCartBtn.addEventListener('click', () => {
    clearCart();
});

const greetUser = (userName) => {
    console.log(`こんにちは、${userName}さん。`);
};

greetUser('A');

const orderDrink = (drink, size = 'M') => {
    console.log(`注文：${drink}（${size}サイズ）`);
};
orderDrink('アイスコーヒー', 'L');

const alertBanner = document.getElementById('alert-banner');
const successBtn = document.getElementById('success-btn');
const warningBtn = document.getElementById('warning-btn');
const errorBtn = document.getElementById('error-btn');

const updateBanner = (message, typeClass) => {
    alertBanner.textContent = message;
    alertBanner.classList.remove('is-success', 'is-warning', 'is-error');
    alertBanner.classList.add(typeClass);
};

successBtn.addEventListener('click', () => {
    updateBanner('データの保存が完了しました。', 'is-success');
});

warningBtn.addEventListener('click', () => {
    updateBanner('ストレージの残り容量が少なくなっています。', 'is-warning');
});

errorBtn.addEventListener('click', () => {
    updateBanner('通信エラーが発生しました。再試行してください。', 'is-error');
});

const addNumbers = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log(addNumbers(10, 20));

const buyTicket = (age) => {
    if (age < 18) {
        console.log('未成年お断り');
        return;
    }
    console.log('先に進んでください。');
};

buyTicket(20);

const calcTaxPrice = (price) => {
    const taxed = Math.floor(price * 1.1);
    return taxed;
};

console.log(calcTaxPrice(500));

//身長(cm)と体重(kg)を渡したらBMI値を計算して返す
const calcBMI = (height, weight) => {
    const heightM = height / 100;
    return weight / (heightM * heightM);
};

console.log(calcBMI(175, 60));

const priceResult = document.getElementById('price-result');
const coffeeBtn = document.getElementById('coffee-btn');
const lunchBtn = document.getElementById('lunch-btn');

coffeeBtn.addEventListener('click', () => {
    const total = calcTaxPrice(500);
    priceResult.textContent = `ブレンドコーヒー：税込 ${total}円`;
});

lunchBtn.addEventListener('click', () => {
    const total = calcTaxPrice(1200);
    priceResult.textContent = `ランチセット：税込 ${total}円`;
});
