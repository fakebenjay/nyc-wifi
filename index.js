var x = document.getElementById("demo");
var myLatitude
var myLongitude

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + myLatitude +
  "<br>Longitude: " + myLongitude;

  myLatitude = position.coords.latitude
  myLongitude = position.coords.longitude

  console.log(myLatitude)
  console.log(myLongitude)
}

function calculate(myLongitude, myLatitude, long1, lat1) {
  earthRadius = 6371;

  myLongitude = myLongitude * (Math.PI / 180);
  myLatitude = myLatitude * (Math.PI / 180);
  long1 = long1 * (Math.PI / 180);
  lat1 = lat1 * (Math.PI / 180);

  x0 = myLongitude * earthRadius * Math.cos(myLatitude);
  y0 = myLatitude * earthRadius;

  x1 = long1 * earthRadius * Math.cos(lat1);
  y1 = lat1 * earthRadius;

  dx = x0 - x1;
  dy = y0 - y1;

  d = Math.sqrt((dx * dx) + (dy * dy));

  if (d < 1) {
    return Math.round(d * 1000) +" m";
  } else {
    return Math.round(d * 10) / 10 +" km";
  }
};

function isFree(networks) {
  return networks[10] !== "Limited Free"
}

class Hotspot {
  constructor(objectId, ssid, location, city, boro, location_type, latitude, longitude, name, provider) {
    this.objectId = objectId
    this.ssid = ssid
    this.location = location
    this.city = city
    this.boro = boro
    this.location_type = location_type
    this.latitude = latitude
    this.longitude = longitude
    this.name = name
    this.provider = provider
  }
}

function showHotspots(event, data) {
  var hotspots = JSON.parse(this.responseText)
  var freeHotspots = hotspots.data.filter(isFree)
  console.log(freeHotspots)
  const hotspotList = `<ul>${freeHotspots.map(h => '<li>' + `${h[9]}, ${h[10]}, ${h[11]}, ${h[12]}, ${h[13]}` + '</li>').join('')}</ul>`
  document.getElementById("hotspots").innerHTML = hotspotList
}

function getHotspots() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showHotspots);
  req.open("GET", 'https://data.cityofnewyork.us/api/views/yjub-udmw/rows.json')
  req.send()
}
