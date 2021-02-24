let airq = {
    apiKey:"d3a9afb6d7ff4731a0531f91d14e044d",
    fetchQuality : function(city) {
        fetch("https://api.weatherbit.io/v2.0/forecast/airquality?&city="
        + city +
        "&key="+ this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayAQI(data));
    },
    displayAQI: function(data) {
        const {city_name} = data;
        var { aqi, pm10, pm25} = data.data[0];
        
        

        document.querySelector(".city").innerText = "Air Quality in " + city_name;
        var aqi1 = aqi*0.8;
        aqi1=Math.round(aqi1);
        document.querySelector(".aqi").innerText = "AQI: " + aqi;
        
        
        const progressBar = document.querySelector(".progress-done");
        progressBar.style.marginLeft= aqi1 + "px";
        document.querySelector(".pm10").innerText = "PM-10: " + pm10;
        document.querySelector(".pm10").style.marginTop = "20px";
        document.querySelector(".pm25").innerText = "PM-25: " + pm25;
        document.querySelector(".airquality").classList.remove("loading");
        
        

    },
    search: function() {
    this.fetchQuality(document.querySelector(".search-bar").value);
},
};
let geocode = {
    reverseGeocode : function(latitude, longitude){

        var apikey = '4189c6a7b595424ea59329bee8433bb4';
  

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + apikey
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
     airq.fetchQuality(data.results[0].components.city); // print the location

    } else if (request.status <= 500){ 
      // We reached our target server, but it returned an error
                           
      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");        
  };

  request.send();  // make the request
    },
    getLocation: function(){
        function success(data){
            geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
        }
        if(navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(success,console.error);
        }
        else{
            airq.fetchQuality("Delhi");
        }
    }
}

document
.querySelector(".search button")
.addEventListener("click", function() {
   
    airq.search();
    document.querySelector(".search-bar").value = '';
}
);

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        
        airq.search();
        document.querySelector(".search-bar").value = '';
    }

});

geocode.getLocation();



