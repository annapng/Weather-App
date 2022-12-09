// https://openweathermap.org/forecast5


var APIkey = "6bce6205a22e9e00bee095bc59def9ca";
var response;
var weatherSearch = document.getElementById("weatherSearch");
weatherSearch.addEventListener("submit", search, false);
var prevSearchedDiv = document.getElementById("prevSearched");
var prevCityDiv = document.getElementsByClassName("prevCityDiv");

var div1 = document.getElementById("futureDiv1");
var div2 = document.getElementById("futureDiv2");
var div3 = document.getElementById("futureDiv3");
var div4 = document.getElementById("futureDiv4");
var div5 = document.getElementById("futureDiv5");

/*
function clearDivs(){
document.getElementById("searchBtn").addEventListener("click", function() {
    document.getElementById("mainDiv").innerHTML = "";


})}
*/
//var city = document.getElementById("textboxSearch").onSubmit;
//var cityValue = textboxSearch.value;
//console.log(city);

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://www.geeksforgeeks.org/how-to-insert-a-javascript-variable-inside-href-attribute/

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=6bce6205a22e9e00bee095bc59def9ca


function search() {
    event.preventDefault();
var cityValue = textboxSearch.value;
console.log(cityValue);
weatherFunction(cityValue);
}


function weatherFunction(cityValue) {
  //  event.preventDefault();
   // clearDivs();
//    var cityValue = textboxSearch.value;
    console.log(cityValue);
    cityDivs(cityValue);

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityValue+"&limit=1&units=imperial&appid="+APIkey;
    console.log(url);
    let response = fetch(url)
         .then(response => response.text())
         .then((data) => { data = JSON.parse(data);
                           console.log(data);
                        
                          currentDiv(data);});

    console.log(response);

    var futureUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+cityValue+"&limit=1&cnt=40&units=imperial&appid="+APIkey+"&cnt=5&list.dt=12:00:00";
    let futureResponse = fetch(futureUrl)
    .then(futureResponse => futureResponse.text())
    .then((futureData) => {
        futureData = JSON.parse(futureData);
        console.log(futureData);
        futureDivs(futureData);
    });
}



function weatherFunction2(cityValue) {
    //  event.preventDefault();
     // clearDivs();
  //    var cityValue = textboxSearch.value;
      console.log(cityValue);
  
      var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityValue+"&limit=1&units=imperial&appid="+APIkey;
      console.log(url);
      let response = fetch(url)
           .then(response => response.text())
           .then((data) => { data = JSON.parse(data);
                             console.log(data);
                          
                            currentDiv(data);});
  
      console.log(response);
  
      var futureUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+cityValue+"&limit=1&cnt=40&units=imperial&appid="+APIkey+"&cnt=5&list.dt=12:00:00";
      let futureResponse = fetch(futureUrl)
      .then(futureResponse => futureResponse.text())
      .then((futureData) => {
          futureData = JSON.parse(futureData);
          console.log(futureData);
          futureDivs2(futureData);
      });
  }


function currentDiv(data) {

    var city = data.name;
    console.log(city);
    document.getElementById("todaysMain").innerHTML = "<h2>" + city + "</h2>";

    var icon = data.weather[0].icon;
    console.log(icon);
    var iconURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
    console.log(iconURL);
    document.getElementById("todaysIcon").innerHTML = "<img src='" + iconURL + "' />";

    var temp = data.main.temp;
    document.getElementById("todaysTemp").innerHTML = temp;


    var wind = data.wind.speed;
    document.getElementById("todaysWind").innerHTML = wind;

    var humidity = data.main.humidity;
    document.getElementById("todaysHumidity").innerHTML = humidity;

}


function futureDivs (futureData){


    document.getElementsByClassName("futureForecastDivs").innerHTML = " ";
    div1.innerHTML = " ";
    div2.innerHTML = " ";
    div3.innerHTML = " ";
    div4.innerHTML = " ";
    div5.innerHTML = " ";


    var humidity1 = futureData.list[3].main.humidity;
        div1.insertAdjacentHTML('afterBegin', "<br>" + humidity1 + "<p>");
    var wind1 = futureData.list[3].wind.speed;
        div1.insertAdjacentHTML('afterBegin', "<br>" + wind1);
    var temp1 = futureData.list[3].main.temp;
        div1.insertAdjacentHTML('afterBegin', "<br>" + temp1);
    var icon1 = futureData.list[3].weather[0].icon;
    var iconURL1 = "http://openweathermap.org/img/wn/" + icon1 +"@2x.png";
        div1.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL1 + "' />");
    var date1 = futureData.list[3].dt_txt;
        div1.insertAdjacentText('afterBegin', date1);

    var humidity2 = futureData.list[11].main.humidity;
        div2.insertAdjacentHTML('afterBegin', "<br>" + humidity2 + "<p>");
    var wind2 = futureData.list[11].wind.speed;
        div2.insertAdjacentHTML('afterBegin', "<br>" + wind2);
    var temp2 = futureData.list[11].main.temp;
        div2.insertAdjacentHTML('afterBegin', "<br>" + temp2);
    var icon2 = futureData.list[11].weather[0].icon;
    var iconURL2 = "http://openweathermap.org/img/wn/" + icon2 +"@2x.png";
        div2.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL2 + "' />");
    var date2 = futureData.list[11].dt_txt;
        div2.insertAdjacentText('afterBegin', date2);

    var humidity3 = futureData.list[19].main.humidity;
        div3.insertAdjacentHTML('afterBegin', "<br>" + humidity3 + "<p>");
    var wind3 = futureData.list[19].wind.speed;
        div3.insertAdjacentHTML('afterBegin', "<br>" + wind3);
    var temp3 = futureData.list[19].main.temp;
        div3.insertAdjacentHTML('afterBegin', "<br>" + temp3);
    var icon3 = futureData.list[19].weather[0].icon;
    var iconURL3 = "http://openweathermap.org/img/wn/" + icon3 +"@2x.png";
            div3.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL3 + "' />");
    var date3 = futureData.list[19].dt_txt;
        div3.insertAdjacentText('afterBegin', date3);

    var humidity4 = futureData.list[27].main.humidity;
        div4.insertAdjacentHTML('afterBegin', "<br>" + humidity4 + "<p>");
    var wind4 = futureData.list[27].wind.speed;
        div4.insertAdjacentHTML('afterBegin', "<br>" + wind4);
    var temp4 = futureData.list[27].main.temp;
        div4.insertAdjacentHTML('afterBegin', "<br>" + temp4);
    var icon4 = futureData.list[27].weather[0].icon;
    var iconURL4 = "http://openweathermap.org/img/wn/" + icon4 +"@2x.png";
            div4.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL4 + "' />");
    var date4 = futureData.list[27].dt_txt;
        div4.insertAdjacentText('afterBegin', date4);

    var humidity5 = futureData.list[35].main.humidity;
        div5.insertAdjacentHTML('afterBegin', "<br>" + humidity5 + "<p>");
    var wind5 = futureData.list[35].wind.speed;
        div5.insertAdjacentHTML('afterBegin', "<br>" + wind5);
    var temp5 = futureData.list[35].main.temp;
        div5.insertAdjacentHTML('afterBegin', "<br>" + temp5);
    var icon5 = futureData.list[35].weather[0].icon;
    var iconURL5 = "http://openweathermap.org/img/wn/" + icon5 +"@2x.png";
            div5.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL5 + "' />");
    var date5 = futureData.list[35].dt_txt;
        div5.insertAdjacentText('afterBegin', date5);

}

function futureDivs2 (futureData){

    document.getElementsByClassName("futureForecastDivs").innerHTML = " ";
    div1.innerHTML = " ";
    div2.innerHTML = " ";
    div3.innerHTML = " ";
    div4.innerHTML = " ";
    div5.innerHTML = " ";


    var humidity1 = futureData.list[3].main.humidity;
        div1.insertAdjacentHTML('afterBegin', "<br>" + humidity1 + "<p>");
    var wind1 = futureData.list[3].wind.speed;
        div1.insertAdjacentHTML('afterBegin', "<br>" + wind1);
    var temp1 = futureData.list[3].main.temp;
        div1.insertAdjacentHTML('afterBegin', "<br>" + temp1);
    var icon1 = futureData.list[3].weather[0].icon;
    var iconURL1 = "http://openweathermap.org/img/wn/" + icon1 +"@2x.png";
        div1.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL1 + "' />");
    var date1 = futureData.list[3].dt_txt;
        div1.insertAdjacentText('afterBegin', date1);

    var humidity2 = futureData.list[11].main.humidity;
        div2.insertAdjacentHTML('afterBegin', "<br>" + humidity2 + "<p>");
    var wind2 = futureData.list[11].wind.speed;
        div2.insertAdjacentHTML('afterBegin', "<br>" + wind2);
    var temp2 = futureData.list[11].main.temp;
        div2.insertAdjacentHTML('afterBegin', "<br>" + temp2);
    var icon2 = futureData.list[11].weather[0].icon;
    var iconURL2 = "http://openweathermap.org/img/wn/" + icon2 +"@2x.png";
        div2.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL2 + "' />");
    var date2 = futureData.list[11].dt_txt;
        div2.insertAdjacentText('afterBegin', date2);

    var humidity3 = futureData.list[19].main.humidity;
        div3.insertAdjacentHTML('afterBegin', "<br>" + humidity3 + "<p>");
    var wind3 = futureData.list[19].wind.speed;
        div3.insertAdjacentHTML('afterBegin', "<br>" + wind3);
    var temp3 = futureData.list[19].main.temp;
        div3.insertAdjacentHTML('afterBegin', "<br>" + temp3);
    var icon3 = futureData.list[19].weather[0].icon;
    var iconURL3 = "http://openweathermap.org/img/wn/" + icon3 +"@2x.png";
            div3.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL3 + "' />");
    var date3 = futureData.list[19].dt_txt;
        div3.insertAdjacentText('afterBegin', date3);

    var humidity4 = futureData.list[27].main.humidity;
        div4.insertAdjacentHTML('afterBegin', "<br>" + humidity4 + "<p>");
    var wind4 = futureData.list[27].wind.speed;
        div4.insertAdjacentHTML('afterBegin', "<br>" + wind4);
    var temp4 = futureData.list[27].main.temp;
        div4.insertAdjacentHTML('afterBegin', "<br>" + temp4);
    var icon4 = futureData.list[27].weather[0].icon;
    var iconURL4 = "http://openweathermap.org/img/wn/" + icon4 +"@2x.png";
            div4.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL4 + "' />");
    var date4 = futureData.list[27].dt_txt;
        div4.insertAdjacentText('afterBegin', date4);

    var humidity5 = futureData.list[35].main.humidity;
        div5.insertAdjacentHTML('afterBegin', "<br>" + humidity5 + "<p>");
    var wind5 = futureData.list[35].wind.speed;
        div5.insertAdjacentHTML('afterBegin', "<br>" + wind5);
    var temp5 = futureData.list[35].main.temp;
        div5.insertAdjacentHTML('afterBegin', "<br>" + temp5);
    var icon5 = futureData.list[35].weather[0].icon;
    var iconURL5 = "http://openweathermap.org/img/wn/" + icon5 +"@2x.png";
            div5.insertAdjacentHTML('afterBegin', "<br><img src='" + iconURL5 + "' />");
    var date5 = futureData.list[35].dt_txt;
        div5.insertAdjacentText('afterBegin', date5);

}

function cityDivs (cityValue) {
    window.localStorage.setItem(cityValue, JSON.stringify(cityValue));
    prevSearchedDiv.insertAdjacentHTML('afterbegin', '<button class="prevCityDiv" class="' + cityValue + ' ">' + cityValue + '</button><p>');
}


window.onload = function() {
    Object.keys(localStorage).forEach(function(key){
        console.log(localStorage.getItem(key));
        prevSearchedDiv.insertAdjacentHTML('afterbegin', '<button class="prevCityDiv" class="' + key + ' ">' + key + '</button><p>');
        buttonLinks();
 });  
    
}


function buttonLinks() {

for (const prevCityButt of prevCityDiv){
    prevCityButt.addEventListener("click", function(){
    var cityValue = prevCityButt.textContent;
    console.log(cityValue);
    weatherFunction2(cityValue);
   })}}

