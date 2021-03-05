var input = document.querySelector("#input");
var searchBtn = document.querySelector("#search");

var cityName = document.querySelector("#city-date");
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

    console.log(city)

    // fetch weather api to get city name
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=0cff65797cba31097493b2ee802ba069`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
                //fetch other api to turn city name into coordinates to access better data field
            var requestTwoUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&units=imperial&appid=0cff65797cba31097493b2ee802ba069`;

            fetch(requestTwoUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (dataTwo) {
                    console.log(dataTwo);

                        //todays weather forecast through  line 116
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
                    date.textContent = d.toLocaleDateString();
                    temp.textContent = data.list[0].main.temp + " °F";
                    humid.textContent = data.list[0].main.humidity;
                    wind.textContent = data.list[0].wind.speed;
                    uv.textContent = dataTwo.current.uvi;

                    cityName.innerHTML = "";
                    cityName.append(city);
                    var space = " (";
                    var par = ")"
                    cityName.append(space);
                    cityName.append(date);
                    cityName.append(par);

                    iconHtml.innerHTML = "";
                    iconHtml.append(weatherIcon);

                    temperature.innerHTML = "Temp: ";
                    temperature.append(temp);

                    humidity.innerHTML = "Humidity: ";
                    humidity.append(humid);
                    humidity.append("%")

                    windSpeed.innerHTML = "Wind Speed: ";
                    windSpeed.append(wind);
                    windSpeed.append(" MPH");

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
                    
                    //5 days weather forecast boxes
                    var dOne = new Date(dataTwo.daily[1].dt * 1000);
                    var dateOneCr = document.createElement("h3");
                    dateOne.innerHTML = "";
                    dateOneCr.textContent = dOne.toLocaleDateString();
                    dateOne.append(dateOneCr);

                    var dTwo = new Date(dataTwo.daily[2].dt * 1000);
                    var dateTwoCr = document.createElement("h3");
                    dateTwo.innerHTML = "";
                    dateTwoCr.textContent = dTwo.toLocaleDateString();
                    dateTwo.append(dateTwoCr);

                    var dThree = new Date(dataTwo.daily[3].dt * 1000);
                    var dateThreeCr = document.createElement("h3");
                    dateThree.innerHTML = "";
                    dateThreeCr.textContent = dThree.toLocaleDateString();
                    dateThree.append(dateThreeCr);

                    var dFour = new Date(dataTwo.daily[4].dt * 1000);
                    var dateFourCr = document.createElement("h3");
                    dateFour.innerHTML = "";
                    dateFourCr.textContent = dFour.toLocaleDateString();
                    dateFour.append(dateFourCr);

                    var dFive = new Date(dataTwo.daily[5].dt * 1000);
                    var dateFiveCr = document.createElement("h3");
                    dateFive.innerHTML = "";
                    dateFiveCr.textContent = dFive.toLocaleDateString();
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

                    var tempOneCr = document.createElement("span");
                    tempOne.innerHTML = "Temp: ";
                    tempOneCr.textContent = dataTwo.daily[1].temp.day + " °F";;
                    tempOne.append(tempOneCr);

                    var tempTwoCr = document.createElement("span");
                    tempTwo.innerHTML = "Temp: ";
                    tempTwoCr.textContent = dataTwo.daily[2].temp.day + " °F";;
                    tempTwo.append(tempTwoCr);

                    var tempThreeCr = document.createElement("span");
                    tempThree.innerHTML = "Temp: ";
                    tempThreeCr.textContent = dataTwo.daily[3].temp.day + " °F";;
                    tempThree.append(tempThreeCr);

                    var tempFourCr = document.createElement("span");
                    tempFour.innerHTML = "Temp: ";
                    tempFourCr.textContent = dataTwo.daily[4].temp.day + " °F";;
                    tempFour.append(tempFourCr);

                    var tempFiveCr = document.createElement("span");
                    tempFive.innerHTML = "Temp: ";
                    tempFiveCr.textContent = dataTwo.daily[5].temp.day + " °F";;
                    tempFive.append(tempFiveCr);

                    //------------------------------

                    var humidOneCr = document.createElement("span");
                    humidOne.innerHTML = "Humidity: ";
                    humidOneCr.textContent = dataTwo.daily[1].humidity;
                    humidOne.append(humidOneCr);
                    humidOne.append("%");

                    var humidTwoCr = document.createElement("span");
                    humidTwo.innerHTML = "Humidity: ";
                    humidTwoCr.textContent = dataTwo.daily[2].humidity;
                    humidTwo.append(humidTwoCr);
                    humidTwo.append("%");

                    var humidThreeCr = document.createElement("span");
                    humidThree.innerHTML = "Humidity: ";
                    humidThreeCr.textContent = dataTwo.daily[3].humidity;
                    humidThree.append(humidThreeCr);
                    humidThree.append("%");

                    var humidFourCr = document.createElement("span");
                    humidFour.innerHTML = "Humidity: ";
                    humidFourCr.textContent = dataTwo.daily[4].humidity;
                    humidFour.append(humidFourCr);
                    humidFour.append("%");

                    var humidFiveCr = document.createElement("span");
                    humidFive.innerHTML = "Humidity: ";
                    humidFiveCr.textContent = dataTwo.daily[5].humidity;
                    humidFive.append(humidFiveCr);
                    humidFive.append("%");


                })
        })

}

cityButtonList = document.querySelector("#city-list");


//these cities show up as a default list on the left
var cityArray = JSON.parse(window.localStorage.getItem("city")) || ["Paris", "Charlotte", "Africa", "Atlanta", "California", "Canada", "China", "Japan", "South Carolina", "New York"];


searchBtn.addEventListener("click", searchClickHandler);
//use the input to from search box then call api function
function searchClickHandler(event) {
    var searchCity = input.value;
     if(searchCity === ""){
        return;
    }

    cityArray.unshift(searchCity);

    getApi(searchCity);   
    setLocalStorage(cityArray);
    renderCities();

}

//setting local storage of searched cities
function setLocalStorage(arr) {
    localStorage.setItem("city", JSON.stringify(arr));
}

//rendering cities to show in the history box/ last views forecats
function renderCities() {

    cityButtonList.innerHTML = "";

    for (var i = 0; i < 10; i++) {

        var button = document.createElement("button");
        button.textContent = cityArray[i];
        button.value = cityArray[i];
        button.setAttribute("data-index", i);

        cityButtonList.appendChild(button);


        button.addEventListener("click", function() {
            getApi(event.target.value);
        });

    }
}
renderCities();
