document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  
  plugin.google.maps.environment.setEnv({
  'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA3eljGvK51_VnDWysAuDH9NTakJC0PCFU',
  'API_KEY_FOR_BROWSER_DEBUG': ''
  });


  // Create a Google Maps native view under the map_canvas div.
  var map = plugin.google.maps.Map.getMap(div, {
    controls: {
      compass: false,
      myLocationButton: true,
      myLocation: true,
      zoom: false
    },
    camera: {
      target: {lat: -23.528861, lng: -46.5379331},
      zoom: 12
    }
  });
  plugin.google.maps.environment.setBackgroundColor("#000000");

  // Botão de voltar
  var voltar = document.getElementById("btnvoltar");
  voltar.addEventListener("click", function() {
   window.location.replace("main.html");
  });
  
  // If you click the button, do something...
  var button = document.getElementById("button");
  button.addEventListener("click", function() {

    // Move to the position with animation
    map.animateCamera({
      target: {lat: 37.422359, lng: -122.084344},
      zoom: 17,
      tilt: 60,
      bearing: 140,
      duration: 5000
    });

    // Add a maker
    var marker = map.addMarker({
      position: {lat: 37.422359, lng: -122.084344},
      title: "teste" +
             "tes2",
      snippet: "This plugin is awesome!",
      animation: plugin.google.maps.Animation.BOUNCE
    });

    // Show the info window
    marker.showInfoWindow();

  });

}, false);