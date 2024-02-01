const d = new Date();
const image = document.querySelector(".fear-img")
image.innerHTML = `<img src="https://alternative.me/images/fng/crypto-fear-and-greed-index-${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}.png" alt="">`;