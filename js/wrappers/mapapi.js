class MapApi {
  static getJSON(resource){
    return $.getJSON(`https://api.mapbox.com/${resource}`)
    .then((resp) => {
      return resp.data
    })
  }
}
