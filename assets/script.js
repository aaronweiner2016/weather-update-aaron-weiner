var input = document.querySelector("#input");
var searchBtn = document.querySelector("#search");

var cityName = document.querySelector("#city-date");
var cityDate = document.querySelector("#date");
var iconHtml = document.querySelector("#icon");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#wind-speed");
var uvWatch = document.querySelector("#uv");
var uvBox = document.querySelector("#uv-box");

var dateOne = document.querySelector("#date-one");
var dateTwo = document.querySelector("#date-two");
var dateThree = document.querySelector("#date-three");
var dateFour = document.querySelector("#date-four");
var dateFive = document.querySelector("#date-five");

var iconOne = document.querySelector("#icon-one");
var iconTwo = document.querySelector("#icon-two");
var iconThree = document.querySelector("#icon-three");
var iconFour = document.querySelector("#icon-four");
var iconFive = document.querySelector("#icon-five");

getApi("charlotte")

function getApi(city) {



    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=0cff65797cba31097493b2ee802ba069`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var requestTwoUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&appid=0cff65797cba31097493b2ee802ba069`;

            fetch(requestTwoUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (dataTwo) {
                    console.log(dataTwo);

                    var weatherIcon = document.createElement("img");
                    weatherIcon.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.current.weather[0].icon}@2x.png`)

                    var city = document.createElement("span");
                    var date = document.createElement("span");
                    var temp = document.createElement("span");
                    var humid = document.createElement("span");
                    var wind = document.createElement("span");
                    var uv = document.createElement("span");


                    var d = new Date(dataTwo.current.dt * 1000);

                    city.textContent = data.city.name;
                    date.textContent = d.toDateString();
                    temp.textContent = data.list[0].main.temp;
                    humid.textContent = data.list[0].main.humidity;
                    wind.textContent = data.list[0].wind.speed;
                    uv.textContent = dataTwo.current.uvi;

                    cityName.innerHTML = "";
                    cityName.append(city);

                    cityDate.innerHTML = "";
                    cityDate.append(date);

                    iconHtml.innerHTML = "";
                    iconHtml.append(weatherIcon);

                    temperature.innerHTML = "Temperature: ";
                    temperature.append(temp);

                    humidity.innerHTML = "Humidity: ";
                    humidity.append(humid);

                    windSpeed.innerHTML = "Wind Speed:";
                    windSpeed.append(wind);

                    uvBox.innerHTML = "";
                    uvBox.append(uv);


                    if (uv.textContent <= 2) {
                        uvBox.setAttribute("style", "background-color: green;")
                    } else if (uv.textContent > 2 && uv.textContent <= 5) {
                        uvBox.setAttribute("style", "background-color: yellow;")
                    } else if (uv > 5 && uv <= 8) {
                        uvBox.setAttribute("style", "background-color: orange;")
                    } else {
                        uvBox.setAttribute("style", "background-color: red;")
                    }

                    var dOne = new Date(dataTwo.daily[1].dt * 1000);
                    var dateOneCr = document.createElement("h3");
                    dateOneCr.textContent = dOne.toDateString();
                    dateOne.append(dateOneCr);

                    var dTwo = new Date(dataTwo.daily[2].dt * 1000);
                    var dateTwoCr = document.createElement("h3");
                    dateTwoCr.textContent = dTwo.toDateString();
                    dateTwo.append(dateTwoCr);

                    var dThree = new Date(dataTwo.daily[3].dt * 1000);
                    var dateThreeCr = document.createElement("h3");
                    dateThreeCr.textContent = dThree.toDateString();
                    dateThree.append(dateThreeCr);

                    var dFour = new Date(dataTwo.daily[4].dt * 1000);
                    var dateFourCr = document.createElement("h3");
                    dateFourCr.textContent = dFour.toDateString();
                    dateFour.append(dateFourCr);

                    var dFive = new Date(dataTwo.daily[5].dt * 1000);
                    var dateFiveCr = document.createElement("h3");
                    dateFiveCr.textContent = dFive.toDateString();
                    dateFive.append(dateFiveCr);

                    var weatherIconOne = document.createElement("img");
                    weatherIconOne.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.daily[1].weather[0].icon}@2x.png`)
                    iconOne.innerHTML = "";
                    iconOne.append(weatherIconOne);

                    var weatherIconTwo = document.createElement("img");
                    weatherIconTwo.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.daily[2].weather[0].icon}@2x.png`)
                    iconTwo.innerHTML = "";
                    iconTwo.append(weatherIconTwo);

                    var weatherIconThree = document.createElement("img");
                    weatherIconThree.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.daily[3].weather[0].icon}@2x.png`)
                    iconThree.innerHTML = "";
                    iconThree.append(weatherIconThree);

                    var weatherIconFour = document.createElement("img");
                    weatherIconFour.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.daily[4].weather[0].icon}@2x.png`)
                    iconFour.innerHTML = "";
                    iconFour.append(weatherIconFour);
                    
                    var weatherIconFive = document.createElement("img");
                    weatherIconFive.setAttribute("src", `http://openweathermap.org/img/wn/${dataTwo.daily[4].weather[0].icon}@2x.png`)
                    iconFive.innerHTML = "";
                    iconFive.append(weatherIconFive);

                })
        })

}


searchBtn.addEventListener("click", searchClickHandler);


function searchClickHandler(event) {
    var searchCity = input.value;
    console.log(searchCity);
    getApi(searchCity);
}

