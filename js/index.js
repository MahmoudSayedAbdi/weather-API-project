// col 1
var dayNow  = document.querySelector("#dayNow")
var monthNow = document.querySelector("#monthNow")
var city = document.querySelector("#city")
var degree = document.querySelector("#degree")
var iconNow = document.querySelector("#iconNow")
var customNow = document.querySelector("#customNow")
// col 2    next_1
var dayNext_1 = document.querySelector(".next_1 #dayNext")
var iconNext_1 = document.querySelector(".next_1 #iconNext")
var dergeeMax_1 = document.querySelector(".next_1 #dergeeMax")
var dergeeMin_1 = document.querySelector(".next_1 #dergeeMin")
var custom_1 = document.querySelector(".next_1 #custom")
// col 3 but add .next_2
var dayNext_2 = document.querySelector(".next_2 #dayNext")
var iconNext_2 = document.querySelector(".next_2 #iconNext")
var dergeeMax_2 = document.querySelector(".next_2 #dergeeMax")
var dergeeMin_2 = document.querySelector(".next_2 #dergeeMin")
var custom_2 = document.querySelector(".next_2 #custom")
// global
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
// input search 
var  searchInput = document.querySelector("#searchInput")

searchInput.addEventListener("input",function(){
    getData(searchInput.value)
})



var weatherList = []
async function getData(searchInput = "cairo") {
    var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=240dd1720ec84f58b4f181541241512&q=${searchInput}&days=3`)
    var data = await res.json()
    weatherList = data
    // console.log(weatherList)
    display()
}

getData()


async function search() {
    var res = await fetch("https://api.weatherapi.com/v1/search.json?key=240dd1720ec84f58b4f181541241512&q=cairo%20XML:%20")
    var data = await res.json()

}



function display(){
    // col_1
    let dateNow = new Date();
    dayNow.innerHTML  =  weekday[dateNow.getDay()];
    monthNow.innerHTML = dateNow.getDate() + " " +month[dateNow.getMonth()]
    city.innerHTML = weatherList.location.region ; 
    degree.innerHTML = weatherList.forecast.forecastday[0].day.maxtemp_c + " " + '<span class="align-text-top fs-1">o</span>C';
    iconNow.setAttribute("src",weatherList.forecast.forecastday[0].day.condition.icon)
    customNow.innerHTML =  weatherList.forecast.forecastday[0].day.condition.text;
    // col_2
    dayNext_1.innerHTML = weekday[dateNow.getDay()+1]
    iconNext_1.setAttribute("src" , weatherList.forecast.forecastday[1].day.condition.icon)
    dergeeMax_1.innerHTML = weatherList.forecast.forecastday[1].day.maxtemp_c  + " " + '<span class="align-text-top fs-5"> o </span>C'
    dergeeMin_1.innerHTML = weatherList.forecast.forecastday[1].day.mintemp_c + " " + '<span class="align-text-top fs-6"> o </span>C'
    custom_1.innerHTML = weatherList.forecast.forecastday[1].day.condition.text
    // col_3
    dayNext_2.innerHTML = weekday[dateNow.getDay()+2]
    iconNext_2.setAttribute("src" , weatherList.forecast.forecastday[2].day.condition.icon)
    dergeeMax_2.innerHTML = weatherList.forecast.forecastday[2].day.maxtemp_c  + " " + '<span class="align-text-top fs-5"> o </span>C'
    dergeeMin_2.innerHTML = weatherList.forecast.forecastday[2].day.mintemp_c + " " + '<span class="align-text-top fs-6"> o </span>C'
    custom_2.innerHTML = weatherList.forecast.forecastday[2].day.condition.text

    console.log(weatherList.forecast.forecastday[1].day.maxtemp_c)
}

// display()