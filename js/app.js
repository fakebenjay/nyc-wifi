$(() => {
  Hotspot.all()
  .then((hotspots) => {
    let $target = $("main")
    let $detailTarget = $("div.test")
    let detailController = new HotspotShowController($detailTarget)
    let listController = new HotspotListController($target, hotspots, detailController)
  })
})
