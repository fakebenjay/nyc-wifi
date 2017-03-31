class SearchController {
  constructor($target, resultsCont, mapCont){
    this.$target = $target
    this.resultsCont = resultsCont
    this.mapCont = mapCont
    this.attachListeners()
  }
 attachListeners() {
    $("div.test").on('click', 'button.button', (e) => {
      e.preventDefault()

      let hotspots = Hotspot.localized()
      let hereLocation = Here.whereAmI()

      Promise.all([hotspots, hereLocation])
      .then(([hotspots, hLocation]) => {
        let map = new GoogleMap(
          hLocation.latitude,
          hLocation.longitude,
          {lat: hLocation.latitude, lng: hLocation.longitude}

          // new google.maps.Map(document.getElementById("hotspot-map"), {
          //   zoom: 15,
          //   center: new google.maps.LatLng(hLocation.latitude, hLocation.longitude),
          //   mapTypeId: google.maps.MapTypeId.ROADMAP
          // }),
          //
          // new google.maps.Marker({
          //   position: {lat: hLocation.latitude, lng: hLocation.longitude},
          //   map: map
          // }),
          //
          // new google.maps.InfoWindow({
          //   content: "<h1>THIS IS WHERE YOU AT</h1>"
          // }),
          //
          // hotspots,
          //
          // hotspots.map((hotspot) => {
          //   new google.maps.Marker({
          //     position: {lat: hotspot.latitude, lng: hotspot.longitude},
          //     map: map
          //   })
          // }),
          //
          // hotspots.map((hotspot) => {
          //   new google.maps.InfoWindow({
          //     content: "<h3>this is a hotspot</h3>"
          //   })
          // })
        )
        this.resultsCont.displayHotspotList(hotspots)
        this.mapCont.displayMap(map)
        })
    })
  }
}
