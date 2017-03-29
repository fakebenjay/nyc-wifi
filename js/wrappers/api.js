class NYCApi {
  static getJSON(resource){
    return $.getJSON(`https://data.cityofnewyork.us/api/${resource}`).
    then((resp) => {
      return resp.data
    })
  }
}
