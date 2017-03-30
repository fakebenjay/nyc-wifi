class Map {
  constructor(myLocation, hotspots, atlas) {
    this.myLatitude = this.myLocation.latitude
    this.myLongitude = this.myLocation.longitude
    this.myLocation = myLocation
    this.hotspots = hotspots
    this.atlas = atlas
  }

  static initMap(googleMapsApiKey) {
    return new Map(
      Here.whereAmI(),
      Hotspot.localized(),
      mapApi.get(googleMapsApiKey)
    )
    .then(
      var whereImAt = this.location;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: whereImAt
      });

      var yourPlaceDescription = "<h1>THIS IS WHERE YOU AT</h1>"

      var infowindow = new google.maps.InfoWindow({
        content: yourPlaceDescription
      });

      var marker = new google.maps.Marker({
        position: whereImAt,
        map: map
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      return map
    )
  }
}
