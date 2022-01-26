let map; // mapa
const utld = { lat: 25.50, lng: -103.55 }
const utld1 = {lat: 25.5055, long: -103.555}
let pos1 = {lat:null, lng:null};
const utldMarker = { lat: 25.5011835, lng: -103.551441}
const icono = "https://img.icons8.com/fluency/48/000000/google-maps-new.png";
// import {faBus} from "@fortawesome/free-solid-svg-icons";
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: utld,
        zoom: 15,
        disableDoubleClickZoom: true,
    });
    map.addListener('click', function (e){
        console.log(e.latLng.lat());
        pos1.lat = e.latLng.lat();
        pos1.lng = e.latLng.lng();
        agregapin(pos1)
    })
    /*const pin1 = new google.maps.Marker({
        position: utldMarker,
        map: map
    })*/

    function agregapin(x) {
        const pin1 = new google.maps.Marker ({
            position: x,
            map: map,
            label: {text: "Ubicación"},
            icon: icono,
           /* icon: {
                path: faBus.icon[4],
                fillColor: "#0000ff",
                fillOpacity: 1,
                anchor: new google.maps.Point(
                    faBus.icon[0] / 2,
                    faBus.icon[1]
                ),
                strokeWeight: 1,
                strokeColor: "#0000ff",
                scale: 0.075
            },
            title: "icon font awesome",*/
            })
    }
}
