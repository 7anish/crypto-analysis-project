const prinfCoin = async (num) => {
    try {
        const table = document.querySelector(".table");
        const res = await fetch("https://api.coinpaprika.com/v1/tickers");
        const data = await res.json();
        // console.log(data)
        let i = num;
        console.log(i);
        let a = i + 50;
        for (i; i < a; i++) {
            let oneHrChange = ``;
            let oneDayChange = ``;
            let sevenDayChange = ``;
            (data[i].quotes.USD.percent_change_1h >= 0) ? oneHrChange = `<td class="hidden" style="color: green;">&#9650;${data[i].quotes.USD.percent_change_1h} %</td>` : oneHrChange = `<td class="hidden" style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_1h} %</td>`;

            (data[i].quotes.USD.percent_change_24h >= 0) ? oneDayChange = `<td style="color: green;">&#9650;${data[i].quotes.USD.percent_change_24h} %</td>` : oneDayChange = `<td style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_24h} %</td>`;

            (data[i].quotes.USD.percent_change_7d >= 0) ? sevenDayChange = `<td class="hidden" style="color: green;">&#9650;${data[i].quotes.USD.percent_change_7d} %</td>` : sevenDayChange = `<td class="hidden" style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_7d} %</td>`;

            let html = `<tr>
            <td>${data[i].rank}</td>
            <td>${data[i].name} (${data[i].symbol})</td>
            <td>$${(data[i].quotes.USD.price).toFixed(3)}</td>
            ${oneHrChange}
            ${oneDayChange}
            ${sevenDayChange}
            <td class="hidden">$ ${data[i].quotes.USD.market_cap}</td>
            <td class="hidden">$ ${(data[i].quotes.USD.volume_24h).toFixed(2)}</td>
        </tr>`

            table.insertAdjacentHTML('beforeend', html)
        }
        // console.log(document.querySelector(".table").innerHTML)
    } catch (err) {
        console.log(err);
    }
}

const next = document.querySelector(".next");
let number = 0;
console.log(number)
next.addEventListener('click', () => {
    next.innerHTML = "loading...";
    setTimeout(() => {
        number += 50;
        console.log(number);
        prinfCoin(number);
        next.innerHTML = "show more coins";
    }, 1000)
});

prinfCoin(number);

const screenWidth = document.body.clientWidth;
console.log(screenWidth);
const viewOfMenuBar = document.querySelector(".header-links");
if (screenWidth < 450) {
    viewOfMenuBar.innerHTML =
        `<div class="menu-bar-lines menu-bar-lines1"></div>
    <div class="menu-bar-lines menu-bar-lines2"></div>
    <div class="menu-bar-lines menu-bar-lines3"></div>
    <div class="menu-bar">
        <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../market/market.html">Market</a></li>
        <li><a href="../crypto/crypto.html">crypto</a></li>
        <li><a href="../news/news.html">news</a></li>
        <li><a href="../contactinfo/aboutus.html">about us</a></li>
        <li><a href="../contactinfo/contactus.html">contact us</a></li>
        </ul>
        <button class="login-button">login</button>
        <button class="light" onclick="themechnge()"><div class="sun"></div></button>
    </div>
    `
    document.querySelector(".menu-bar").addEventListener('click' , (event)=>{
        event.stopPropagation();
    })
    viewOfMenuBar.addEventListener('click', () => {
        document.querySelector(".menu-bar-lines1").classList.toggle("menu-bar-lines10");
        document.querySelector(".menu-bar-lines2").classList.toggle("menu-bar-lines20");
        document.querySelector(".menu-bar-lines3").classList.toggle("menu-bar-lines30");
        document.querySelector(".menu-bar").classList.toggle("menu-bar1")
    })

}
if (screenWidth > 450) {
    viewOfMenuBar.innerHTML = `<ul class="nav-list">
    <li><a href="../index.html">Home</a></li>
        <li><a href="../market/market.html">Market</a></li>
        <li><a href="../crypto/crypto.html">crypto</a></li>
        <li><a href="../news/news.html">news</a></li>
        <li><a href="../contactinfo/aboutus.html">about us</a></li>
        <li><a href="../contactinfo/contactus.html">contact us</a></li>
</ul>
<button class="login-button">login</button>
<button class="light" onclick="themechnge()"><div class="sun"></div></button>`
}