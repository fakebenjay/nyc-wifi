class Here {
  constructor(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }

  static whereAmI() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        return new Here(
          position.coords.latitude,
          position.coords.longitude
        )
      });
    } else {
      $("div.test").html("Geolocation is not supported by this browser.");
    }
  }
}
