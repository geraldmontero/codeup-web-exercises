// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.5641}&lon=139&appid=${weathermap}`).done(function (weather) {
//     console.log(weather);
$.get("https://api.openweathermap.org/data/2.5/onecall?", {
    APPID: weathermap,
    lat: '29.53918',
    lon:'-95.11685',
    units: "imperial",

    exclude:'current,minutely,hourly,alerts',


})
    .done(function (data){
    console.log(data);
    let dt_txt = '';
    let wIcon = '';
    let desc = '';
    let hum = '';
    let wind = '';
    let pres = '';
    let sliced = data.daily.slice(0,5)
    sliced.forEach(function (date) {
        dt_txt = new Date (date.dt * 1000).toLocaleDateString("en",{
            weekday:"long"
        });
        wIcon = date.weather[0].icon;
        desc = date.weather[0].description;
        hum = date.humidity
        wind = date.wind_speed
        pres = date.pressure
        console.log(wIcon)

    $('.newCard').append(` <div class="col-sm-3">
        <div class="card mb-3">
            <h5 class="card-title">${dt_txt}</h5>
            
            <div class="card-body">
                <ul class="list-group list-group-flush">
                <p><img src="https://openweathermap.org/img/wn/${wIcon}.png" class="card-img-top" alt=".ICONS FROM WEATHER API.."></p>
                    <p  class="card-text">${desc}</p>
                    <p  class="card-text"> Humidity  ${hum} % </p>
                    <p  class="card-text">Wind ${wind}</p>
                    <p class="card-text">Pressure ${pres}</p>
                </ul>

            </div>
        </div>


    </div>`);

});
})
mapboxgl.accessToken = mapkey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-95.11685, 29.53918]
});

