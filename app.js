

//doc.body size: width: 1830px; height: 925px;

//image API: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

//alt url: https://images.unsplash.com/photo-1472214103451-9374bd1c798e…JhbmRvbXx8fHx8fHx8fDE2NzIyNjEzOTI&ixlib=rb-4.0.3&q=80&w=1080

//Crypto: base url: api.coingecko.com/api/v3
//Crypto: endpoint for current coin info: /coins/{id}

//weather API BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather

// weather API queries to include: 
// *     - lat (latitude)
// *     - lon (longitude)
// *     - units (imperial or metric)

//variables

const authorH = document.getElementById('author-h');
const cryptoH = document.getElementById('crypto-h');
const cryptoDiv = document.getElementById('crypto-div');
const timeH = document.getElementById('time-h');
const weatherH = document.getElementById('weather-h');
const weatherLoc = document.getElementById('weather-loc');
 




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
                throw Error('some error')
            }
            return res.json()
        })
        .then (data => {
            //console.log(data.market_data.current_price.usd);
            cryptoH.innerHTML = `<img src='${data.image.small}'/>
                                <span>${data.name}: ${data.market_data.current_price.usd}</span>`
           
           
        })
        .catch (err => alert(`${err}, please refresh the page`));




    
  

function showFormHours(hours, minutes) {
    let afix = '';
    if (hours > 12) {
        afix = 'PM'
        hours = hours - 12
    }   
    else {
        afix = 'AM'
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return `${hours}:${minutes} ${afix}`
}




const intervalId  = setInterval(function() {
    const timeObj = new Date(); 
    timeH.textContent = showFormHours(timeObj.getHours(), timeObj.getMinutes());
}, 1000)


navigator.geolocation.getCurrentPosition(position => {renderWeather(position)})



function renderWeather(position) {
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   fetch (`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error('weather data is not available')
        }
        else {
            return res.json()
        }
        
    })
    .then(data => {
        // console.log(data.main)
        const temp = Math.round(data.main.temp);
        const iconString = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherH.innerHTML = `<img src='${iconString}'/><span>${temp}</span>`
        weatherLoc.textContent = data.name;
    })
    .catch(err => console.error(err));
}


