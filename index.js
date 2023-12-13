fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})` 
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        console.log(err)
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1422493757035-1e5e03968f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDI1MDIwNDJ8&ixlib=rb-4.0.3&q=80&w=1080)`
    }) 


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong")
        }

        return res.json()
    })
    .then(data => {
        console.log(data)
        document.getElementById("crypto-top").innerHTML = `
            <img src="${data.image.small}" alt="" id="crypto-img">
            <span id="crypto-name">${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
            <p id="crypto-price"> 🎯: ${data.market_data.current_price.usd}</p>
            <p id="crypto-highprice">👆: ${data.market_data.high_24h.usd}</p>
            <p id="crypto-lowprice">👇: ${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => {
        console.log(err)
    })

    function getTime(){
        let currentDate = new Date();
        let am_pm = currentDate.toLocaleTimeString("en-us", {timeStyle: "short"});
        document.getElementById("time").textContent = `
            ${am_pm}
        `
    }

    setInterval(getTime,1000);

navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
})