      // calculate route between from and to address
        function calculateRoute(from, to) {
          // Center initialized to Naples, Italy
          var myOptions = {
            zoom: 10,
            center: new google.maps.LatLng(40.84, 14.25),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          // Draw the map
          var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);

          var directionsService = new google.maps.DirectionsService();
          var directionsRequest = {
            origin: from,
            destination: to,
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
          };
          directionsService.route(
            directionsRequest,
            function(response, status)
            {
              if (status == google.maps.DirectionsStatus.OK)
              {
                new google.maps.DirectionsRenderer({
                  map: mapObject,
                  directions: response
                });
              }
              else
                $("#error").append("Unable to retrieve your route<br />");
            }
          );
        }
      // End of calculate route between from and to address

      // initial load google map location
        var map;
          function initMap() {
            var locations = [
      ['Bondi Beach', 12.9093324, 77.6403711]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(12.9093324, 77.6403711),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }



          }


      // End of initial load google map location


      $(document).ready(function() {

        $('.talk-to-us').click(function(){
         initMap();
       });
      

        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("Your browser doesn't support the Geolocation API");
          return;
        }

        //get my position link
        $("#from-link, #to-link").click(function(event) {
          event.preventDefault();
          var addressId = this.id.substring(0, this.id.indexOf("-"));

          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error").append("Unable to retrieve your address<br />");
            });
          },
          function(positionError){
            $("#error").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          });
        });
        //End of get my position link

        //after clicking the submit button
        $("#calculate-route").submit(function(event) {
          event.preventDefault();
          //map will load after clicking the submit button
          calculateRoute($("#from").val(), $("#to").val());
        });
        //End of after clicking the submit button
                    
      // Info Window Content
      var infoWindowContent = [
          ['<div class="info_content">' +
          '<div class="row">' +
          '<div class="col-lg-6">'+
            '<div class="map-img center-align">'+
              '<img id="link" onclick="showmap()" src="../img/car-list/car1.png" alt="">'+
            '</div>'+
          '</div>'+
          '<div class="col-lg-6 map-cont-border">'+
            '<div class="map-desc">'+
              '<h1>Maruti Swift</h1>'+
              '<span class="star-rating"> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-disable fa-lg"></i> <i class="fa fa-star fa-disable fa-lg"></i> </span><span class="comments"> <i class="vsvg v-comment-icon"></i> 05 </span>'+
                '<div class="price">Rs. 2,500</div>'+
            '</div>'+
          '</div>'+
            '</div>'+
              '</div>'],
          ['<div class="info_content">' +
          '<div class="row">' +
          '<div class="col-lg-6">'+
            '<div class="map-img center-align">'+
              '<img id="link" onclick="showmap()" src="../img/car-list/car1.png" alt="">'+
            '</div>'+
          '</div>'+
          '<div class="col-lg-6 map-cont-border">'+
            '<div class="map-desc">'+
              '<h1>Maruti Swift</h1>'+
              '<span class="star-rating"> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-enable fa-lg"></i> <i class="fa fa-star fa-disable fa-lg"></i> <i class="fa fa-star fa-disable fa-lg"></i> </span><span class="comments"> <i class="vsvg v-comment-icon"></i> 05 </span>'+
                '<div class="price">Rs. 2,500</div>'+
            '</div>'+
          '</div>'+
            '</div>'+
              '</div>']
      ];
          var infoWindow = new google.maps.InfoWindow(), marker, i;
          // Allow each marker to have an info window    
          google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
              return function() {
                  infoWindow.setContent(infoWindowContent[i][0]);
                  infoWindow.open(map, marker);
              }
          })(marker, i));

      });