

//doc.body size: width: 1830px; height: 925px;

//image API: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature


//variables

const authorH = document.getElementById('author-h');


fetch ('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then (res => res.json())
    .then (data => {
        console.log(data.user.first_name, data.user.last_name )
        document.body.style.backgroundImage = `url('${data.urls.regular}')`;
        authorH.textContent = `By: ${data.user.first_name} ${data.user.last_name}`;
    });




