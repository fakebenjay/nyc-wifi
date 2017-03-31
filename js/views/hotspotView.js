class HotspotView {
  static renderListItems($target, hotspots) {
    let listItems = hotspots.map(this.listItemTemplate)
    let location = Here.whereAmI()
    console.log(location)
    console.log(listItems)
    $target.html(listItems)
    // $target.html('<div id="mapHolder"></div>')
  }

  static listItemTemplate(hotspot) {
    return `<li id="hotspot-details"><div> Object ID: ${hotspot.objectId}</div>
    <div> SSID: ${hotspot.ssid}</div>
    <div> Location/Address: ${hotspot.location}, ${hotspot.city}</div>
    <div> Location Type: ${hotspot.locationType}</div>
    <div> Name: ${hotspot.name}</div>
    <div> Provider: ${hotspot.provider}</div>
    <div>${hotspot.latitude}, ${hotspot.longitude}</div>
    </li><br>`
  }
}
