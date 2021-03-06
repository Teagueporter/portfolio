document.getElementById("weatherSubmit").addEventListener("click", function (event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=09ede05bd3f1d4b48edad7b501a80f07";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += "<h2 id='firstResult'>Weather in " + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=09ede05bd3f1d4b48edad7b501a80f07";
fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let forecast = "";

for (let i=0; i < json.list.length; i++) {
forecast += "<h2 class='dateformat'>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
forecast += "<p>Feels like: " + json.list[i].main.feels_like + "</p>";
forecast += "<p>Pressure: " + json.list[i].main.pressure + "</p>";
forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
}
document.getElementById("forecastResults").innerHTML = forecast;
  });
});
