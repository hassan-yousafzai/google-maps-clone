const MAPBOX_ACCESS_TOKEN = "GET THE KEY FROM MAP BOX DASHBOARD"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: centerPosition, // starting position [lng, lat]
    zoom: 15 // starting zoom
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav, "bottom-right")

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  })

  map.addControl(directionControls, "top-left")
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}
