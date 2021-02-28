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

var tempOne = document.querySelector("#temp-one");
var tempTwo = document.querySelector("#temp-two");
var tempThree = document.querySelector("#temp-three");
var tempFour = document.querySelector("#temp-four");
var tempFive = document.querySelector("#temp-five");

var humidOne = document.querySelector("#humid-one");
var humidTwo = document.querySelector("#humid-two");
var humidThree = document.querySelector("#humid-three");
var humidFour = document.querySelector("#humid-four");
var humidFive = document.querySelector("#humid-five");

getApi("charlotte")

function getApi(city) {



    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=0cff65797cba31097493b2ee802ba069`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var requestTwoUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=0cff65797cba31097493b2ee802ba069`;

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
                    dateOne.innerHTML = "";
                    dateOneCr.textContent = dOne.toDateString();
                    dateOne.append(dateOneCr);

                    var dTwo = new Date(dataTwo.daily[2].dt * 1000);
                    var dateTwoCr = document.createElement("h3");
                    dateTwo.innerHTML = "";
                    dateTwoCr.textContent = dTwo.toDateString();
                    dateTwo.append(dateTwoCr);

                    var dThree = new Date(dataTwo.daily[3].dt * 1000);
                    var dateThreeCr = document.createElement("h3");
                    dateThree.innerHTML = "";
                    dateThreeCr.textContent = dThree.toDateString();
                    dateThree.append(dateThreeCr);

                    var dFour = new Date(dataTwo.daily[4].dt * 1000);
                    var dateFourCr = document.createElement("h3");
                    dateFour.innerHTML = "";
                    dateFourCr.textContent = dFour.toDateString();
                    dateFour.append(dateFourCr);

                    var dFive = new Date(dataTwo.daily[5].dt * 1000);
                    var dateFiveCr = document.createElement("h3");
                    dateFive.innerHTML = "";
                    dateFiveCr.textContent = dFive.toDateString();
                    dateFive.append(dateFiveCr);

                    //--------------------------

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

                    //----------------------------------

                    var tempOneCr = document.createElement("h5");
                    tempOne.innerHTML = "Temperature: ";
                    tempOneCr.textContent = dataTwo.daily[1].temp.day;
                    tempOne.append(tempOneCr);

                    var tempTwoCr = document.createElement("h5");
                    tempTwo.innerHTML = "Temperature: ";
                    tempTwoCr.textContent = dataTwo.daily[2].temp.day;
                    tempTwo.append(tempTwoCr);

                    var tempThreeCr = document.createElement("h5");
                    tempThree.innerHTML = "Temperature: ";
                    tempThreeCr.textContent = dataTwo.daily[3].temp.day;
                    tempThree.append(tempThreeCr);

                    var tempFourCr = document.createElement("h5");
                    tempFour.innerHTML = "Temperature: ";
                    tempFourCr.textContent = dataTwo.daily[4].temp.day;
                    tempFour.append(tempFourCr);

                    var tempFiveCr = document.createElement("h5");
                    tempFive.innerHTML = "Temperature: ";
                    tempFiveCr.textContent = dataTwo.daily[5].temp.day;
                    tempFive.append(tempFiveCr);

                    //------------------------------

                    var humidOneCr = document.createElement("h5");
                    humidOne.innerHTML = "Humidity: ";
                    humidOneCr.textContent = dataTwo.daily[1].humidity;
                    humidOne.append(humidOneCr);

                    var humidTwoCr = document.createElement("h5");
                    humidTwo.innerHTML = "Humidity: ";
                    humidTwoCr.textContent = dataTwo.daily[2].humidity;
                    humidTwo.append(humidTwoCr);

                    var humidThreeCr = document.createElement("h5");
                    humidThree.innerHTML = "Humidity: ";
                    humidThreeCr.textContent = dataTwo.daily[3].humidity;
                    humidThree.append(humidThreeCr);

                    var humidFourCr = document.createElement("h5");
                    humidFour.innerHTML = "Humidity: ";
                    humidFourCr.textContent = dataTwo.daily[4].humidity;
                    humidFour.append(humidFourCr);

                    var humidFiveCr = document.createElement("h5");
                    humidFive.innerHTML = "Humidity: ";
                    humidFiveCr.textContent = dataTwo.daily[5].humidity;
                    humidFive.append(humidFiveCr);


                })
        })

}


searchBtn.addEventListener("click", searchClickHandler);


function searchClickHandler(event) {
    var searchCity = input.value;
    console.log(searchCity);
    getApi(searchCity);
}

