const items = [
    { icon: "fa-bitcoin", icon_b: "fa-brands", icon_color: "#FFD700", nameFA: "بیت کوین", nameEN: "BTC", price: "$29,865.89", percent: "0.48%-", result: " &#xe0b4; &nbsp;", value: "BTC", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-rust", icon_b: "fa-brands", icon_color: "blue", nameFA: "تتر", nameEN: "USDT", price: "$1.0", percent: "0.21%+", result: "up", value: "USDT", icon2: "fa-solid", icon2_b: "fa-arrow-trend-up", color: "#0dc522" },
    { icon: "fa-ethereum", icon_b: "fa-brands", icon_color: "#2ea4cc", nameFA: "اتریوم", nameEN: "ETH", price: "$1.868", percent: "0.08%-", result: "up", value: "ETH", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-shirtsinbulk", icon_b: "fa-brands", icon_color: "#367d31", nameFA: "هزار شیبا", nameEN: "SHIB", price: "$ 0.0000077", percent: "0.26%-", result: "up", value: "SHIB", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-shield-dog", icon_b: "fa-solid", icon_color: "#1715a2", nameFA: "دوج کوین", nameEN: "DOGE", price: "$ 0.74", percent: "1.79%+", result: "up", value: "DOGE", icon2: "fa-solid", icon2_b: "fa-arrow-trend-up", color: "#0dc522" },
    { icon: "fa-litecoin-sign", icon_b: "fa-solid", icon_color: "#df1616", nameFA: "لایت کوین", nameEN: "LTC", price: "$ 0.081", percent: "3.36%-", value: "LTC", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-money-bill-transfer", icon_b: "fa-solid", icon_color: "#1f7028", nameFA: "ترون", nameEN: "TRX", price: "$ 89.51", percent: "2.68-", value: "TRX", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-stroopwafel", icon_b: "fa-solid", icon_color: "#0b43a2", nameFA: "کاردانو", nameEN: "ADA", price: "$ 0.307", percent: "1.97%-", result: "up", value: "ADA", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-coins", icon_b: "fa-solid", icon_color: "#FFD700", nameFA: "بایننس کوین", nameEN: "BNB", price: "$ 239.17", percent: "1.31%-", result: "up", value: "BNB", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-airbnb", icon_b: "fa-brands", icon_color: "#57595b", nameFA: "ایاس", nameEN: "EOS", price: "$ 0.75", percent: "2.89%-", result: "up", value: "EOS", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-dailymotion", icon_b: "fa-brands", icon_color: "#e9e33f", nameFA: "دای", nameEN: "DAI", price: "$ 1.0", percent: "0.58%+", result: "up", value: "DAI", icon2: "fa-solid", icon2_b: "fa-arrow-trend-up", color: "#0dc522" },
    { icon: "fa-xing", icon_b: "fa-brands", icon_color: "#070709", nameFA: "استرلا", nameEN: "XRP", price: "$ 0.14708", percent: "5.46%-", result: "up", value: "XRP", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-cubes", icon_b: "fa-solid", icon_color: "#3169c9", nameFA: "فانتوم", nameEN: "FTM", price: "$  0.244", percent: "3.48%-", value: "FTM", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" },
    { icon: "fa-sack-dollar", icon_b: "fa-solid", icon_color: "#1f702f", nameFA: "یواس دی کوین", nameEN: "USDC", price: "$ 1.0", percent: "0.12%+", value: "USDC", icon2: "fa-solid", icon2_b: "fa-arrow-trend-up", color: "#0dc522" },
    { icon: "fa-layer-group", icon_b: "fa-solid", icon_color: "#264c8c", nameFA: "سولنا", nameEN: "SOL", price: "$  23.714", percent: "2.92%-", value: "SOL", icon2: "fa-solid", icon2_b: "fa-arrow-trend-down", color: "#8f0c11" }]

const options = [
    { text: "پیشفرض", id: 0, icon:"&#xf039; &nbsp;"  },
    { text: "BTC", id: 1 , icon:"&#xe0b4; &nbsp;",price: "$29,865.89" },
    { text: "USDT", id: 2 , icon:"&#xe07a; &nbsp;",price: "$1.0" },
    { text: "ETH", id: 3 , icon:"&#xf42e; &nbsp;" , price: "$1.868"},
    { text: "SHIB", id: 4 , icon:"&#xf214; &nbsp;" , price: "$ 0.0000077"},
    { text: "DOGE", id: 5 , icon:"&#xe573; &nbsp;" , price: "$ 0.74"},
    { text: "LTC", id: 6 , icon:"&#xe1d3; &nbsp;" , price: "$ 0.081"},
    { text: "TRX", id: 7 , icon:"&#xe528; &nbsp;" , price: "$ 89.51"},
    { text: "ADA", id: 8 , icon:"&#xf551; &nbsp;", price: "$ 0.307"},
    { text: "BNB", id: 9 , icon:"&#xf51e; &nbsp;", price: "$ 239.17" },
    { text: "EOS", id: 10 , icon:"&#xf834; &nbsp;" , price: "$ 0.75"},
    { text: "DAI", id: 11 , icon:" &#xe052; &nbsp;" , price: "$ 1.0"},
    { text: "XRP", id: 12 , icon:"&#xf168; &nbsp;" , price: "$ 0.14708"},
    { text: "FTM", id: 13 , icon:"&#xf1b3; &nbsp;" , price: "$  0.244"},
    { text: "USDC", id: 14 , icon:"&#xf81d; &nbsp;" , price: "$ 1.0"},
    { text: "SOL", id: 15, icon:" &#xf5fd; &nbsp;", price: "$  23.714"}
];

function addKharidOptionItems(selectName) {
    const parent = document.getElementById("kharid");
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    options.sort((a, b) => a.id - b.id).forEach((e) => {

        const option = document.createElement('option');
        
        option.innerHTML = e.icon + " " + e.text;
        option.setAttribute("direction", "ltr");
        if (e.id == 0) {
            if (!selectName)
                option.setAttribute("selected", true);
            option.setAttribute("disabled", true);
            option.setAttribute("hidden", true);
        }
        if (e.text === selectName)
            option.setAttribute("selected", true);
        parent.appendChild(option);
        
    });
}

function addForoshOptionItems(selectName) {
    const parent = document.getElementById("forosh");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    options.sort((a, b) => a.id - b.id).forEach((e) => {

        const option = document.createElement('option');
        
        option.innerHTML = e.icon + " " + e.text;
        if (e.id == 0) {
            if (!selectName)
                option.setAttribute("selected", true);
            option.setAttribute("disabled", true);
            option.setAttribute("hidden", true);
        }
        if (e.text === selectName)
            option.setAttribute("selected", true);
        parent.appendChild(option);
       
    });
}
let x = options;
document.getElementById("kharid").addEventListener('change', (event) => {
    const text = document.getElementById("info");
   items.forEach(e => {
    if(event.target.prise == e.price)
    {
        text.value = e.price;
    }
   });
});


document.getElementById("forosh").addEventListener('change', () => {
    const text = document.getElementById("info2");
    text.value = e.price;
});


let showLenght = 4;

var btn = document.getElementById("btn-showAll");
btn.addEventListener("click", () => {
    if (showLenght === 4) {
        showLenght = items.length - 1;
        addItems(showLenght);
    } else {
        showLenght = 4;
        addItems(showLenght);
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function addItems(lenght) {
    const parent = document.getElementById("items-parent");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    items.forEach((e, index) => {
        if (index <= lenght) {

            const tr = document.createElement('tr');
            tr.classList.add();


            const td1 = document.createElement('td');
            tr.appendChild(td1);


            const link = document.createElement('a');
            link.href = '#';
            td1.appendChild(link);


            const div1 = document.createElement('div');
            div1.classList.add('table-item');
            link.appendChild(div1);


            const i = document.createElement('i');
            i.classList.add(e.icon, e.icon_b);
            i.style.color = e.icon_color;
            div1.appendChild(i);


            const div2 = document.createElement('div');
            div2.classList.add('table-item-name');
            div1.appendChild(div2);


            const b = document.createElement('b');
            b.textContent = e.nameEN;
            div2.appendChild(b);


            const p = document.createElement('p');
            p.textContent = e.nameFA;
            div2.appendChild(p);


            const td2 = document.createElement('td');
            tr.appendChild(td2);


            const div3 = document.createElement('div');
            div3.classList.add('table-item');
            td2.appendChild(div3);


            const div4 = document.createElement('div');
            div4.classList.add('table-item-price');
            div3.appendChild(div4);


            const p2 = document.createElement('p');
            p2.textContent = e.price;
            div4.appendChild(p2);


            const td3 = document.createElement('td');
            tr.appendChild(td3);

            
            const div5 = document.createElement('div');
            div5.classList.add('table-item');
            td3.appendChild(div5);

            const div6 = document.createElement('div');
            div6.classList.add('table-item-change');
            div5.appendChild(div6);

            
            const p3 = document.createElement('p');
            p3.textContent = e.percent;
            p3.style.color = e.color;
            div6.appendChild(p3);

           
            const td4 = document.createElement('td');
            tr.appendChild(td4);

            
            const div7 = document.createElement('div');
            td4.appendChild(div7);

            
            const i2 = document.createElement('i');
            i2.classList.add(e.icon2, e.icon2_b);
            i2.style.color = e.color;
            i2.style.marginRight = '20px';
            div7.appendChild(i2);

            
            const td5 = document.createElement('td');
            tr.appendChild(td5);

           
            const div8 = document.createElement('div');
            div8.classList.add('table-item');
            td5.appendChild(div8);

            
            const div9 = document.createElement('div');
            div9.classList.add('table-item-buy-sell');
            div8.appendChild(div9);

            
            const anchor = document.createElement('a');
            div9.appendChild(anchor);

            
            const button = document.createElement('button');
            anchor.appendChild(button);
            const p4 = document.createElement('p');
            p4.textContent = 'خرید';
            button.appendChild(p4);
            button.addEventListener("click", () => {
                addKharidOptionItems(e.nameEN);
                const text1 = document.getElementById("info-c");
                text1.value = e.nameEN;
                const text2 = document.getElementById("info-b");
                text2.value =  e.price;
            })
            const button2 = document.createElement('button');
            anchor.appendChild(button2);
            const p5 = document.createElement('p');
            p5.textContent = 'فروش';
            button2.appendChild(p5);
            button2.addEventListener("click", () => {
                addForoshOptionItems(e.nameEN);
                const text1 = document.getElementById("info2-c");
                text1.value = e.nameEN;
                const text2 = document.getElementById("info2-b");
                text2.value = e.price;

            })
            parent.appendChild(tr);
        }
    });
}
addItems(showLenght);
addKharidOptionItems();
addForoshOptionItems();



