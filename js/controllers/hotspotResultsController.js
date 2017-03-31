class HotspotResultsController {
  constructor($target) {
    this.$target = $target
  }

  displayHotspotList(hotspots) {
    HotspotView.renderListItems(this.$target.find("ul#hotspots"), hotspots)
  }
}
