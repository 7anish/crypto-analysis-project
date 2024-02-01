const sumbit = document.querySelector('.sumbit-btn');
sumbit.addEventListener('click' , ()=>{
    setTimeout(() => {
        document.querySelector('.cotact-form').innerHTML =`<h2>submit..&#9989;</h2>`
    }, 2000);
    document.querySelector('.cotact-form').innerHTML = `<h1><i class="fa fa-envelope"></i></h1>
            <h1 class="truck"><i class="fa fa-truck"></i></h1>`;
})