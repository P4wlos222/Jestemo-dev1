//------------Pogoda------------
if(document.getElementById("weather-main") != null)
{
    //data
    var pogoda = 
    [
        ["Warszawa",10],
        ["Kołobrzeg",13]
    ];
    //weather-main
    var weather = pogoda[0][0] + " " + pogoda[0][1] + "&deg;" + "C"; 
    document.getElementById("weather-value").innerHTML = weather;
    //weather-select
    var weatherList = "";
    if(pogoda.length > 0)
    {
        for(let i = 0 ; i < pogoda.length;i++)
        {
            weatherList += '<li onclick="setWeather(';
            weatherList += "'" + pogoda[i][0];
            weatherList += "')";
            weatherList += '">' + pogoda[i][0] + "</li>";
        }
        document.getElementById("weather-select").innerHTML = weatherList;
    }
}
//Zmiana pogody
function setWeather(city)
{
    for (let i = 0; i < pogoda.length; i++)
    {
        if(pogoda[i][0] == city)
        {
            weather = pogoda[i][0] + " " + pogoda[i][1] + "&deg;" + "C";
        }
    }
    document.getElementById("weather-value").innerHTML = weather;
    document.getElementById("weather-select").style.visibility = "hidden";
}
//Zmiana wyświetlania listy pogodowej
var weatherListVisibility = 1;
function changeWeatherListVisibility()
{
    if (weatherListVisibility == 0)
    {
        document.getElementById("weather-select").style.visibility = "visible";
        weatherListVisibility = 1;
    }
    else{
        document.getElementById("weather-select").style.visibility = "hidden";
        weatherListVisibility = 0;
    }
}


