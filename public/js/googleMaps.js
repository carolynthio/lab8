function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.885004, lng:-117.24128};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'UCSD'
  });
}
