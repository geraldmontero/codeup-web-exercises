


$.get("https://api.openweathermap.org/data/2.5/onecall?", {
    APPID: weathermap,
    lat: '29.5641',
    lon:'-95.11685',
    units: "imperial",

    exclude:'current,minutely,hourly,alerts',


})
    .done(function (data){
    console.log(data);
    let dt_txt = '';
    let wIcon = '';
    let desc = '';
    let feels = '';
    let wind = '';
    let pres = '';
    let sliced = data.daily.slice(0,5)
    sliced.forEach(function (date) {
        dt_txt = new Date (date.dt * 1000).toLocaleDateString("en",{
            weekday:"long"
        });
        wIcon = date.weather[0].icon;
        desc = date.weather[0].description;
        feels = date.feels_like.day
        wind = date.wind_speed
        pres = date.temp.night
        console.log(wIcon)


    $('.newCard').append(` <div class="col-sm-3">
        <div class="card ">
            <h5 class="headings text-center card-title">${dt_txt}</h5>
            
            <div class="card-body bgsand ">
                <ul class="list-group list-group-flush">
                <span ><img src="https://openweathermap.org/img/wn/${wIcon}.png" class="card-img-top rounded-circle" style = "height: 4em; width: 4em;" alt=".ICONS FROM WEATHER API.."></span>
                    <p  class="card-text">${desc}</p>
                    <p  class="card-text"> Feels Like   ${feels} </p>
                    <p  class="card-text">Wind ${wind} mph</p>
                    <p class="card-text">Evening Low ${pres}</p>
                </ul>

            </div>
        </div>


    </div>`);

});
})
// MAP//
mapboxgl.accessToken = mapkey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-95.11685, 29.5641]
});
// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }))



map.on("click",function mapclick(e) {
    let weather = e.lngLat
    let markers = document.querySelectorAll('.mapboxgl-marker');
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([weather.lng,weather.lat])
    .addTo(map);
markers[0].remove();

// function onDragEnd() {
//     const lngLat = marker.getLngLat();
//     console.log(lngLat)
// }

// marker.on('dragend', onDragEnd);

    $.get("https://api.openweathermap.org/data/2.5/onecall?", {
        APPID: weathermap,
        lat: weather.lat,
        lon:weather.lng,
        units: "imperial",

        exclude:'current,minutely,hourly,alerts',


    })
        .done(function (data){
            console.log(data); console.log(weather.lng);
            $('.newCard').html('')
            let dt_txt = '';
            let wIcon = '';
            let desc = '';
            let feels = '';
            let wind = '';
            let pres = '';
            let sliced = data.daily.slice(0,5)
            sliced.forEach(function (date) {
                dt_txt = new Date (date.dt * 1000).toLocaleDateString("en",{
                    weekday:"long"
                });
                wIcon = date.weather[0].icon;
                desc = date.weather[0].description;
                feels = date.feels_like.day
                wind = date.wind_speed
                pres = date.temp.night
                console.log(wIcon)

                $('.newCard').append(` <div class="col-sm-3">
        <div class="card  ">
            <h5 class="  headings text-center card-title">${dt_txt}</h5>
            
            <div class="card-body bgsand ">
                <ul class="list-group list-group-flush">
                <p><img src="https://openweathermap.org/img/wn/${wIcon}.png" class="card-img-top" alt=".ICONS FROM WEATHER API.." style = "height: 4em; width: 4em;" ></p>
                    <p  class="card-text">${desc}</p>
                    <p  class="card-text">Feels Like   ${feels}</p>
                    <p  class="card-text">Wind ${wind} mph</p>
                    <p class="card-text">Evening Low ${pres}</p>
                </ul>

            </div>
        </div>


    </div>`);

            });
        })





})