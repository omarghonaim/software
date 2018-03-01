/*global $*/
$(function () {
    "use strict";
    $("#by_name").click(function(){
        var city = $('#weather').val();
            if(city != ""){
                $.getJSON({
                    url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=3672c1380dfd974ab82d320b4c2613b8",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
    $("#by_id").click(function(){
        var id = $('#weather').val();
            if(id != ""){
                $.getJSON({
                    url:'http://api.openweathermap.org/data/2.5/weather?id=' + id + 
                    "&units=metric&APPID=3672c1380dfd974ab82d320b4c2613b8",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
   $("#By_zip").click(function(){
        var zip = $('#weather').val();
            if(zip != ""){
                $.getJSON({
                    url:'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + "&APPID=3672c1380dfd974ab82d320b4c2613b8",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
   $("#By_geo").click(function(){
        var lat = $('#weather').val();
        var lon = $('#lon').val();
            if(lat != "" && lon != ""){
                $.getJSON({
                    url:'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon+"&APPID=3672c1380dfd974ab82d320b4c2613b8",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
       $("#several").click(function(){
        var several = $('#weather').val();
            if(several != ""){
                $.getJSON({
                    url:'http://api.openweathermap.org/data/2.5/group?id=' + several +"&APPID=3672c1380dfd974ab82d320b4c2613b8",
                    type :"GET",
                    dataType :"jsonp",
                    success :function(data){
                        var weat = show_weather(data);
                            $("#show").html(weat);
                    }
                });
            }    
});
    
    });

function show_weather(data){
    return "<h1>Weather description is :" + data.weather[0].description + "</h1>" +
        "<h1>icon is :" + data.weather[0].icon + "</h1>" +
        "<h1>Temp is :" + data.main.temp + " Fahrenheit</h1>" +
        "<h1>pressure is :" + data.main.pressure + " hPa</h1>" +
        "<h1>humidity is :" + data.main.humidity + " %</h1>" +
        "<h1> temp_min is :" + data.main.temp_min + " Fahrenheit</h1>" +
        "<h1> temp_max is :" + data.main.temp_max + " Fahrenheit</h1>" +
        "<h1> windspeed is :" + data.wind.speed + "  meter/sec,</h1>" +
        "<h1> clouds are :" + data.clouds.all + "%</h1>" ;
    
}