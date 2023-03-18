let input = document.querySelector(`.form-control`);
let cards = document.querySelectorAll(`.c`);
let row = document.querySelector(`.row`);
let buybutton = document.querySelectorAll(`.btn-buy`);
let buy = document.querySelectorAll(`.buy`);
let basket = document.querySelector(`.position-relative`);
let goods = document.querySelector(`.d-none`);
let buyplus = document.querySelectorAll(`.buyplus`);
let plus = document.querySelectorAll(`.plus`);
let minus = document.querySelectorAll(`.minus`);
let item = document.querySelectorAll(`.item`);
let goodsbasket = document.querySelector(`.list`);
let cardtitle = document.querySelectorAll(`.name`);
let price = document.querySelectorAll(`.price`);
let all = document.querySelector(`.list-group-item`);
let allprice = document.querySelector(`.allprice`);
let main = document.querySelector(`.main`);
let money = document.querySelector(`.money`);
let badge = document.querySelector(`.num`);
let oops = document.querySelector(`.oops`);

let prices = 0;


input.addEventListener(`input`, function () {
    let value = input.value;
    if (value != '') {
        let op = 0;
        oops.classList.add(`d-none`);
        for (let i = 0; i < cards.length; i++) {
            let title = cardtitle[i].innerHTML.toLowerCase();
            if (title.includes(value.toLowerCase())) {
                cards[i].classList.remove(`d-none`);
            } else {
                cards[i].classList.add(`d-none`);
                op++;
            }
        }
        if (op == cards.length) {
            oops.classList.remove(`d-none`);
        }
    } else {
        oops.classList.add(`d-none`);
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove(`d-none`);
        }
    }
});

for (let i = 0; i < buybutton.length; i++) {
    buybutton[i].addEventListener(`click`, function () {
        goods.classList.remove(`d-none`);
        goods.innerHTML++;
        buyplus[i].classList.remove(`d-none`);
        buybutton[i].classList.add(`d-none`);
        item[i].innerHTML++;
        all.classList.remove(`d-none`);
        goodsbasket.innerHTML += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 class="my-0">${cardtitle[i].innerHTML}</h6>
            </div>
            <span class="text-muted">${price[i].innerHTML}₽</span>
        </li>
        `;
        prices = prices + Number(price[i].innerHTML);
        allprice.innerHTML = prices + `₽`;
    });
}

for (let i = 0; i < item.length; i++) {
    minus[i].addEventListener(`click`, function () {
        item[i].innerHTML--;
        goods.innerHTML--;
        let baskettitle = document.querySelectorAll(`.my-0`);
        let list = document.querySelectorAll(`.list-group-item`);
        prices = prices - Number(price[i].innerHTML);
        allprice.innerHTML = prices + `₽`;
        for (let g = 0; g < baskettitle.length; g++) {
            if (baskettitle[g].innerHTML == cardtitle[i].innerHTML) {
                list[g].remove();
                break;
            }
        }
        if (goods.innerHTML == 0) {
            buyplus[i].classList.add(`d-none`);
            buybutton[i].classList.remove(`d-none`);
            goods.classList.add(`d-none`);
            all.classList.add(`d-none`);
            goodsbasket.innerHTML = ``;
        }
        if (item[i].innerHTML == 0) {
            buyplus[i].classList.add(`d-none`);
            buybutton[i].classList.remove(`d-none`);
        }
    });
}

for (let i = 0; i < item.length; i++) {
    plus[i].addEventListener(`click`, function () {
        item[i].innerHTML++;
        goods.innerHTML++;
        goodsbasket.innerHTML += `
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
                <h6 class="my-0">${cardtitle[i].innerHTML}</h6>
            </div>
            <span class="text-muted">${price[i].innerHTML}₽</span>
        </li>
        `;
        prices = prices + Number(price[i].innerHTML);
        allprice.innerHTML = prices + `₽`;
    });
}

basket.addEventListener(`click`, function () {
    if (goodsbasket.innerHTML != ``) {
        money.classList.remove(`d-none`);
        main.remove();
        badge.innerHTML = goods.innerHTML;
    }
})