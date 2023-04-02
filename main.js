mapboxgl.accesstoken=''
let lattiude=22.7868542, longitiude=88.3643296
var map =new mapboxgl.Map({
    cointainer:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    centre:[longitiude,latitude],
    zoom:4
}) 
var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

map.addcontrol(new MapboxDirections({
    accesstoken:mapboxgl.accesstoken
})
);