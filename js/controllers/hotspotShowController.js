class HotspotShowController {
  constructor($target) {
    this.$target = $target
  }

  setCurrent(){
    this.$target.html("<h1>Closest Hotspot</h1>")
  }
}
