const getdata = async () => {
    try {
        const res = await fetch("https://api.coinpaprika.com/v1/tickers")
        const data = await res.json()
        // console.log(data)
        let sing = ''
        let totalhtml = '';
        for (i = 0; i <= 5; i++) {
            let html = ``;
            if (data[i].quotes.USD.percent_change_24h < 0) {
                sing = '&#9660;'
                html = `<div class="coin-box">
            <div class="coin-name">
                <h2>${data[i].name} (${data[i].symbol})</h2>
                <h4 style="color: red;">${sing}${data[i].quotes.USD.percent_change_24h}%</h4>
            </div>
            <hr>
            <div class="coin-details">
                <h2>rank - ${data[i].rank}<sup>st</sup></h2>
                <h2>price - $${(data[i].quotes.USD.price).toFixed(3)}</h2>
            </div>
        </div>`
            }

            else {
                sing = '&#9650;'
                html = `<div class="coin-box">
            <div class="coin-name">
                <h2>${data[i].name} (${data[i].symbol})</h2>
                <h4 style="color: green;">${sing}${data[i].quotes.USD.percent_change_24h}%</h4>
            </div>
            <hr>
            <div class="coin-details">
                <h2>rank - ${data[i].rank}<sup>st</sup></h2>
                <h2>price - $${(data[i].quotes.USD.price).toFixed(3)}</h2>
            </div>
        </div>`
            }

            totalhtml += html;
        }

        // console.log(totalhtml);
        document.querySelector(".coin-list").innerHTML = totalhtml;
    }
    catch (err) {
        document.querySelector(".coin-list").innerHTML = err;
        console.log(err)
    }

}

getdata();


const vistitBtn = document.querySelector(".one-button");

vistitBtn.addEventListener('click' , ()=>{
    window.location.href = "/market/market.html";
})


const vistitBtn1 = document.querySelector(".box1");

vistitBtn1.addEventListener('click' , ()=>{
    window.location.href = "/market/market.html"; 
}
)

const vistitBtn2 = document.querySelector(".box2");

vistitBtn2.addEventListener('click' , ()=>{
    window.location.href = "/crypto/crypto.html"; 
}
)

const showCoins = document.querySelector(".show-more-coin");

showCoins.addEventListener('click' , ()=>{
    window.location.href = "/crypto/crypto.html"; 
}
)

const vistitBtn3 = document.querySelector(".box3");

vistitBtn3.addEventListener('click' , ()=>{
    window.location.href = "/news/news.html"; 
}
)


const expmarket = document.querySelector(".explore-market");

expmarket.addEventListener('click' , ()=>{
    window.location.href = "/market/market.html";
    // console.log("hello");
})