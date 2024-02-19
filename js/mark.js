const markbtn2 = document.querySelector(".mark-card2");

markbtn2.addEventListener('click' , ()=>{
    window.location.href = "https://7anish.github.io/crypto-analysis-project/market/fear-greed.html"; 
    console.log("hello")
}
)

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
if (screenWidth > 800) {
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