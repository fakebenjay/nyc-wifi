class MapApi {
  static get(key){
    return $.get(`https://maps.googleapis.com/maps/api/js?key=${key}`)
  }
}
