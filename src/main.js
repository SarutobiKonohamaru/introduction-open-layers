const callbacks = [
    {
        type: "click",
        def: (e) => {
            console.log(e)
        }
    }
]

const layers = [
    new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        title: "OSM standard"
    }),
    new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        }),
        visible: true,
        title: "OSM Humanitarian"
    }),
    new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
            attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: "Stament terrain"
    })
]

const baseLayersGroup = new ol.layer.Group({
    layers: layers
}) 


const init = () => {
    const map = new ol.Map({
        target: "map-container",
        view: new ol.View({
            center: [-435690.388484098, 5064081.826752882], //Spain
            zoom: 6,
            maxZoom: 10,
            minZoom: 4,
            //rotation: 0.5
        })
    })

    map.addLayer(baseLayersGroup)

    for (const callback of callbacks) {
        map.on(callback.type, callback.def)
    }
}

init()