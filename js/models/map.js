class Map {
  static all() {
    return MapApi.getJSON("?access_token=your-access-token")
    .then(this.filterOutTimeWarner)
    .then((data) => {
      return data.map(this.newFromApi)
    })
  }
}
