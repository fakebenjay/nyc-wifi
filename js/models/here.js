class Here {
  constructor(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }

  static whereAmI() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() =. {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
      });
    }
    else {
      $("div.test").html("Geolocation is not supported by this browser.");
    }
  }
}
