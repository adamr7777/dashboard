

//doc.body size: width: 1830px; height: 925px;

//image API: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

//alt url: https://images.unsplash.com/photo-1472214103451-9374bd1c798e…JhbmRvbXx8fHx8fHx8fDE2NzIyNjEzOTI&ixlib=rb-4.0.3&q=80&w=1080

//Crypto: base url: api.coingecko.com/api/v3
//Crypto: endpoint for current coin info: /coins/{id}

//variables

const authorH = document.getElementById('author-h');
const cryptoH = document.getElementById('crypto-h');
const cryptoDiv = document.getElementById('crypto-div');



    fetch ('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then (res => res.json())
    .then (data => {
        //console.log(data)
        document.body.style.backgroundImage = `url('${data.urls.regular}')`;
        authorH.textContent = `By: ${data.user.first_name} ${data.user.last_name}`;
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1544084944-15269ec7b5a0?cr…JhbmRvbXx8fHx8fHx8fDE2NzIyNjIyNjM&ixlib=rb-4.0.3&q=80&w=1080)`
    });



    fetch ('https://api.coingecko.com/api/v3/coins/dogecoin ')
        .then (res => {
            if (!res.ok) {
                throw error('some error')
            }
            return res.json()
        })
        .then (data => {
            console.log(data.market_data.current_price.usd);
            cryptoH.innerHTML = `<img src='${data.image.small}'/>
                                <span>${data.name}: ${data.market_data.current_price.usd}</span>`
           
           
        })
        .catch (err => alert(`${err}, please refresh the page`));

        //data.name


    