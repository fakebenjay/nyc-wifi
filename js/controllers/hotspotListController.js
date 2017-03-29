class HotspotListController {
  constructor($target, hotspots, detailController) {
    this.$target = $target
    this.hotspots = hotspots
    this.detailController = detailController
    this.attachListeners()
    this.render()
  }

  render(){
    HotspotView.renderListItems(this.$target.find("ul#hotspots"), this.hotspots)
  }

  attachListeners() {
    this.$target.on('click', 'button.button', (e) => {
      e.preventDefault()
      this.detailController.setCurrent()
    })
  }
}
