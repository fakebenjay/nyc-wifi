class Hotspot {
  constructor(objectId, ssid, location, city, boro, locationType, latitude, longitude, name, provider) {
    this.objectId = objectId
    this.ssid = ssid
    this.location = location
    this.city = city
    this.boro = boro
    this.locationType = locationType
    this.latitude = parseFloat(latitude)
    this.longitude = parseFloat(longitude)
    this.name = name
    this.provider = provider
  }

  static all() {
    return NYCApi.getJSON("views/yjub-udmw/rows.json").
    then(this.filterOutTimeWarner).
    then((data) => {
      return data.map(this.newFromApi)
    })
  }

  static filterOutTimeWarner(hotspots) {
    return hotspots.filter((h) => h[10] !== "Limited Free")
  }

  static newFromApi(hotspot){
    return new Hotspot(
      hotspot[8],
      hotspot[21],
      hotspot[13],
      hotspot[20],
      hotspot[9],
      hotspot[18],
      hotspot[14],
      hotspot[15],
      hotspot[12],
      hotspot[11]
    )
  }
}
