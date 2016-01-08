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
            var myLatLng = {lat: 12.9093324, lng: 77.6403711};

            map = new google.maps.Map(document.getElementById('map'), {
              zoom: 10,
              center: myLatLng
            });

            var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
          });


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

      });