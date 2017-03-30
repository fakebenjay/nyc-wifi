class Map {
  constructor(myLatitude, myLongitude, myLocation, hotspots) {
    this.myLatitude = myLatitude
    this.myLongitude = myLongitude
    this.myLocation = { lat: myLatitude, lng: myLongitude }
    this.hotspots = hotspots
  }

  static initMap() {
    var whereImAt = this.myLocation;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: whereImAt
    });
    var marker = new google.maps.Marker({
      position: whereImAt,
      map: map
    });
  }
}
