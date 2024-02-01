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
            (data[i].quotes.USD.percent_change_1h >= 0) ? oneHrChange = `<td style="color: green;">&#9650;${data[i].quotes.USD.percent_change_1h} %</td>` : oneHrChange = `<td style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_1h} %</td>`;

            (data[i].quotes.USD.percent_change_24h >= 0) ? oneDayChange = `<td style="color: green;">&#9650;${data[i].quotes.USD.percent_change_1h} %</td>` : oneDayChange = `<td style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_1h} %</td>`;

            (data[i].quotes.USD.percent_change_7d >= 0) ? sevenDayChange = `<td style="color: green;">&#9650;${data[i].quotes.USD.percent_change_1h} %</td>` : sevenDayChange = `<td style="color: rgba(255, 0, 0, 0.7);">&#9660;${data[i].quotes.USD.percent_change_1h} %</td>`;

            let html = `<tr>
            <td>${data[i].rank}</td>
            <td>${data[i].name} (${data[i].symbol})</td>
            <td>$${(data[i].quotes.USD.price).toFixed(3)}</td>
            ${oneHrChange}
            ${oneDayChange}
            ${sevenDayChange}
            <td>$ ${data[i].quotes.USD.market_cap}</td>
            <td>$ ${(data[i].quotes.USD.volume_24h).toFixed(2)}</td>
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
    next.innerHTML = "loding...";
    setTimeout(() => {
        number += 50;
        console.log(number);
        prinfCoin(number);
        next.innerHTML = "show more coins";
    }, 1000)
});

prinfCoin(number);