const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'de2fbaa3a8msh91275c94d673be1p18d46cjsn952f2a79dde1',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function weather_data() {

    var cityname = document.getElementById("cityname").value;
    console.log(cityname);

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityname, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var temp2 = document.getElementById("temp").innerHTML = response.temp;
            var humidity2 = document.getElementById("humidity").innerHTML = response.humidity;
            var wind_speed2 = document.getElementById("wind_speed").innerHTML = response.wind_speed;
            document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
            document.getElementById("min_temp").innerHTML = response.min_temp;
            document.getElementById("max_temp").innerHTML = response.max_temp;
            document.getElementById("sunset").innerHTML = response.sunset;
            document.getElementById("sunrise").innerHTML = response.sunrise;
            document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
            document.getElementById("temp2").innerHTML = temp2;
            document.getElementById("wind_speed2").innerHTML = wind_speed2;
            document.getElementById("humidity2").innerHTML = humidity2;
        })
        .catch(err => console.error(err));

}