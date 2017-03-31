class MapController {
  constructor($target){
    this.$target = $target
  }

  displayMap(map){
    MapView.display(this.$target, map)
  }
}
