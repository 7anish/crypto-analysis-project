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
                html = `<div class="coin-box coin-box-appear">
            <div class="coin-name">
                <h2>${data[i].name} (${data[i].symbol})</h2>
                <h4 style="color: red;">${sing}${data[i].quotes.USD.percent_change_24h}%</h4>
            </div>
            <hr>
            <div class="coin-details">
                <h2>rank - ${data[i].rank}</h2>
                <h2>price - $${(data[i].quotes.USD.price).toFixed(3)}</h2>
            </div>
        </div>`
            }

            else {
                sing = '&#9650;'
                html = `<div class="coin-box coin-box-appear">
            <div class="coin-name">
                <h2>${data[i].name} (${data[i].symbol})</h2>
                <h4 style="color: green;">${sing}${data[i].quotes.USD.percent_change_24h}%</h4>
            </div>
            <hr>
            <div class="coin-details">
                <h2>rank - ${data[i].rank}</h2>
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
    window.location.href = "https://7anish.github.io/crypto-analysis-project/market/market.html";
})


const vistitBtn1 = document.querySelector(".box1");

vistitBtn1.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/market/market.html"; 
}
)

const vistitBtn2 = document.querySelector(".box2");

vistitBtn2.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/crypto/crypto.html"; 
}
)

const showCoins = document.querySelector(".show-more-coin");

showCoins.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/crypto/crypto.html"; 
}
)

const vistitBtn3 = document.querySelector(".box3");

vistitBtn3.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/news/news.html"; 
}
)


const expmarket = document.querySelector(".explore-market");

expmarket.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/market/market.html";
    // console.log("hello");
})


// ===section2 animation=========

const secTwo = document.querySelector(".section-one");
secTwo.addEventListener("mouseleave" , ()=>{
    const boxes = document.querySelectorAll(".coin-box");
    boxes.forEach(boxes =>{
        boxes.classList.remove("coin-box-appear")
        boxes.classList.add("coin-box-animation")
    })
})

// mobile munu bar 

const screenWidth = document.body.clientWidth;
console.log(screenWidth);
const viewOfMenuBar = document.querySelector(".header-links");
if (screenWidth < 800) {
    viewOfMenuBar.innerHTML =
        `<div class="menu-bar-lines menu-bar-lines1"></div>
    <div class="menu-bar-lines menu-bar-lines2"></div>
    <div class="menu-bar-lines menu-bar-lines3"></div>
    <div class="menu-bar">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./market/market.html">Market</a></li>
            <li><a href="./crypto/crypto.html">crypto</a></li>
            <li><a href="./news/news.html">news</a></li>
            <li><a href="./contactinfo/aboutus.html">about us</a></li>
            <li><a href="./contactinfo/contactus.html">contact us</a></li>
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
if (screenWidth > 800) {
    viewOfMenuBar.innerHTML = `<ul class="nav-list">
    <li><a href="./index.html">Home</a></li>
    <li><a href="./market/market.html">Market</a></li>
    <li><a href="./crypto/crypto.html">crypto</a></li>
    <li><a href="./news/news.html">news</a></li>
    <li><a href="./contactinfo/aboutus.html">about us</a></li>
    <li><a href="./contactinfo/contactus.html">contact us</a></li>
</ul>
<button class="login-button">login</button>
<button class="light" onclick="themechnge()"><div class="sun"></div></button>`
}