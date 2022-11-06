const lays = ['poi-Музеи', 'poi-Павильоны', 'poi-Туалеты' , 'poi-Достопримечательности' , 'poi-Еда' , 'poi-Магазины', 'poi-Мастерские', 'poi-Развлечения', 'poi-Спорт'
    , 'poi-КПП', 'poi-Вход']
const filterGroup = document.getElementById('filter-group');
let start
let routesmarker = []
let routeid = [""];

let link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "./css/text.css";
document.getElementsByTagName("head")[0].appendChild(link)


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/diazone/cla5hz9ub000z15qwg3kyzxqi',
    minZoom: 13,
    zoom: 13,
    center: [37.62831379968895,55.83192976406758],
    pitch: 30,
    maxPitch: 60,
    bearing: 17.6,
    maxBounds: [
        [37.60981494056801, 55.82709679954315], // [west, south]
        [37.63865819352564, 55.843205559122715]  // [east, north]
    ]
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    map.addLayer({
        id: 'points',
        source: {
            type: "geojson",
            data: points,
        },
        type: "symbol",
    });
    map.loadImage(
        'https://img.icons8.com/stickers/30/null/museum.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Музеи', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/university.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Павильоны', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/toilet.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Туалеты', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/front-gate-open.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Вход', image);
        })
    map.loadImage(
        'https://img.icons8.com/stickers/30/null/meal.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Еда', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/tollbooth.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('КПП', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/point-of-interest.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Достопримечательности', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/shopping-cart.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Магазины', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/dice.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Развлечения', image);
        })

    map.loadImage(
        'https://img.icons8.com/stickers/30/null/pottery.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Мастерские', image);
        })
    map.loadImage(
        'https://img.icons8.com/stickers/30/null/weight-1.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Спорт', image);
        })


    for (const feature of points.features) {
        const symbol = feature.properties.icon;
        const layerID = `poi-${symbol}`;

        if (!map.getLayer(layerID)) {
            map.addLayer({
                'id': layerID,
                'type': 'symbol',
                'source': 'points',
                'layout': {
                    'icon-image': `${symbol}`,
                    'icon-allow-overlap': true
                },
                'filter': ['==', 'icon', symbol]
            });
            map.setLayoutProperty(layerID, 'visibility', 'none');

            //Очистка фильтра
            document.getElementById('button-filter-reset').addEventListener('click', (event) => {
                const buttonReset = document.querySelectorAll('#filter-group>.form-check>[type="checkbox"]')
                for (let i = 0; i < buttonReset.length; i++) {
                    if (buttonReset[i].type === 'checkbox') {
                        buttonReset[i].checked = false;

                    }
                }
                map.setLayoutProperty(layerID, 'visibility', 'none');
            })


            const div = document.createElement('div');
            div.className = 'form-check form-switch';

            const input = document.createElement('input');
            input.className = 'filter-check form-check-input';
            input.id = "trigger-filter"
            input.type = 'checkbox';
            input.setAttribute('role', 'switch');
            input.checked = false;
            input.id = layerID;
            div.appendChild(input);

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            div.appendChild(label);
            filterGroup.appendChild(div);


            input.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    layerID,
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });

        }
    }
})

map.on('click', e => {
    for (const element of lays){

        let status = map.getLayoutProperty(element, 'visibility')
        if(status === 'visible'){
            const result = map.queryRenderedFeatures(e.point, {
                layers: [element]
            });

            if (result.length) {
                const popup = new mapboxgl.Popup({
                    closeButton: false
                });
                const content = result[0].properties.text;
                const checkRes = result[0].properties.check;
                const imgPict = result[0].properties.imageSrc;
                routeid[0]  = String(result[0].id);

                if (checkRes === "true") {
                    new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(`
                    <p>${content}</p> 
                    <img src="${imgPict}"> 
                    <a href="https://vdnh.ru/selections/kupit-bilet/" class="tickets_btn btn btn-primary" id="ticket-btn">Покупка билетов</a>
                    <button class="tickets_btn btn btn-primary" onclick="removeHash()" id="ticket-btn" data-bs-toggle="modal" data-bs-target="#chooseFromWay">Построить маршрут</button>

                    `).addTo(map)
                }
                else {

                    new mapboxgl.Popup().setLngLat(e.lngLat).setHTML(`
                        <p>${content}</p>
                        <img src="${imgPict}"> 
                        <button class="tickets_btn btn btn-primary" onclick="removeHash()" id="ticket-btn" data-bs-toggle="modal" data-bs-target="#chooseFromWay">Построить маршрут</button>
                    `).addTo(map)
                }
            }
        }
    };

})

function startPosition(){
    var chboxmainentrance, chboxend1stLihoborpopup, chboxend1stNorthpopup, chboxend2ndNorthpopup, chboxendsovhozniypopup,
    chboxendkhovanskypopup, chboxendnorthentrancearchpopup, chboxendendnorthentrancearch ;
    chboxmainentrance=document.getElementById('end-main-entrance-arch-popup');
    chboxend1stLihoborpopup=document.getElementById('end-1stLihobor-popup');
    chboxend1stNorthpopup=document.getElementById('end-1stNorth-popup');
    chboxend2ndNorthpopup=document.getElementById('end-2ndNorth-popup');
    chboxendsovhozniypopup=document.getElementById('end-sovhozniy-popup');
    chboxendkhovanskypopup=document.getElementById('end-khovansky-popup');
    chboxendnorthentrancearchpopup=document.getElementById('end-north-entrance-arch-popup');
    chboxendendnorthentrancearch=document.getElementById('end-south-entrance-arch-popup');
    if (chboxmainentrance.checked) {
        start = [37.63732414012193, 55.826472842897765];
    }
    if (chboxend1stLihoborpopup.checked) {
        start = [37.6287, 55.8401]
    }
    if (chboxend1stNorthpopup.checked) {
        start = [37.6406, 55.8271]
    }
    if (chboxend2ndNorthpopup.checked) {
        start = [37.6426,55.828]
    }
    if (chboxendsovhozniypopup.checked) {
        start = [37.6316, 55.8384]
    }
    if (chboxendkhovanskypopup.checked) {
        start = [37.6217, 55.8273]
    }
    if (chboxendnorthentrancearchpopup.checked) {
        start = [37.6374, 55.8307]
    }
    if (chboxendendnorthentrancearch.checked){
        start = [37.630722868071516, 55.82668742180129]
    }
}

async function createDefaultWay(idArray){
    let end = [];
    let content;
    let checkRes;
    let imgPict;
    let i = 0;
    idArray.forEach(element =>{
        points.features.forEach(feature=> {
            if(feature.id === idArray[i]){
                for(let j = 0; j < 2; j++){
                    end.push(feature.geometry.coordinates[j])
                }
                i++;
            }
        })
    })

    let allcoord = [...start, ...end]
    let stringcoords = '';
    for (let i = 0; i < allcoord.length; ++i){
        stringcoords = stringcoords.concat(allcoord[i])
        if (i % 2 === 0){
            stringcoords += ","
        }
        else{
            if(i + 1 <allcoord.length){
                stringcoords += ";"
            }
        }
    }

    const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${stringcoords}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;

    //Построение линии маршрута
    const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
        }
    };
    if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
    }
    else {
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: geojson
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75
            }
        });
    }

    //Построение первой точки маршрута
    const st = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: start
                }
            }
        ]
    };
    if (map.getLayer('st')) {
        map.getSource('st').setData(st);
    }
    else {
        map.addLayer({
            id: 'st',
            type: 'circle',
            source: {
                type: 'geojson',
                data: st
            },
            paint: {
                'circle-radius': 0,
                'circle-color': '#3887be'
            }
        });
    }

    for (const feature of st.features) {

        //Создаем маркер для первой точки
        var el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = '<span><b>Старт</b></span>'
        el.className = 'marker';
        routesmarker[0] = new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
    }

    //Проходимся по каждой паре координат
    for (let i = 0, j = 0; i < end.length; i+=2) {
        let point = [end[i], end[i + 1]]
        points.features.forEach(feature=> {
            if(feature.id === idArray[j]){
                //Получаем информацию о месте
                content = feature.properties.text;
                checkRes = feature.properties.check;
                imgPict = feature.properties.imageSrc;
            }
        })
        j++;

        //Создаем слои с промежуточными и конечной точками
        let geopointjson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: point
                    }
                }
            ]
        };
        if (map.getLayer(`routepoints${j}`)) {
            map.getSource(`routepoints${j}`).setData(geopointjson);
        } else {
            map.addLayer({
                id: `routepoints${j}` ,
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: geopointjson
                },
                paint: {
                    'circle-radius': 0,
                    'circle-color': '#f30'
                }
            });

        }

        //Создаем маркер для всех остальных точек
        geopointjson.features.forEach(function(marker) {

            let el = document.createElement('div');
            el.className = 'marker';
            el.innerHTML = '<span><b>' + (j) + '</b></span>'

            //Выводим кнопку покупки билетов, если в данном месте существует такая возможность
            if (checkRes === "true") {
                routesmarker[j] = new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({
                    offset: 25
                }).setHTML(`<p>${content}</p>
                   <img src="${imgPict}">
                   <a href="https://vdnh.ru/selections/kupit-bilet/" class="tickets_btn btn btn-primary" id="ticket-btn">Покупка билетов</a>`)
                ).addTo(map);
            }
            else{
                routesmarker[j] = new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({
                    offset: 25
                }).setHTML(`<p>${content}</p>
                    <img src="${imgPict}">`)
                ).addTo(map);
            }
        });
    }
}


function createRoute(){
    let layers = map.getStyle().layers;
    let coords = [];
    let z = 0;
    startPosition()

    //Если в строке есть #(добавляется при постройке готовых маршрутов), то строим целый маршрут по массиву мест
    if(window.location.hash){
        coords = chooseDefaultRoute();
    }
    //Иначе будем строить маршрут по одной точке(при нажатии на определенное место)
    else{
        coords = routeid;
    }
    //Количество точек маршрута
    let j = coords.length;

    //Определяем сколько всего слоев у нас
    for (let i = 0; i < layers.length; i++) {
        if ((layers[i].id).includes(`routepoints`)) {
            z++;
        }
    }
    //Предварительно удаляем старые маркеры
    routesmarker.forEach(element => {
        element.remove();
    })
    //Включаем слои
    if (map.getLayer("st")) {
        map.setLayoutProperty('st', 'visibility', 'visible');
    }
    if (map.getLayer("route")) {
        map.setLayoutProperty('route', 'visibility', 'visible');
    }

    //Включаем точки, которые используются при постороении маршрута
    if(z >= j) {
        for (let i = 1; i <= j; i++) {
            map.setLayoutProperty(`routepoints${i}`, 'visibility', 'visible')
        }
    }

    //Остальные выключаем
    for(let i = j + 1; i <= z; i++){
        map.setLayoutProperty(`routepoints${i}`, 'visibility', 'none')
    }

    createDefaultWay(coords);
}

//Выключение(очистка) маршрута
function showRoute(){
    let z = 0;
    //Выключаем первую точку
    map.setLayoutProperty('st', 'visibility', 'none');
    //Выключаем линию маршрута
    map.setLayoutProperty('route', 'visibility', 'none');
    let layers = map.getStyle().layers;
    //Подсчитываем количество слоев с точками
    for (let i = 0; i < layers.length; i++) {
        if ((layers[i].id).includes(`routepoints`)) {
            z++;
        }
    }
    //Удаляем маркеры
    routesmarker.forEach(element => {
        element.remove();
    })
    //Проходимся по всем слоям с точками и выключаем их
    for (let i = 1; i <= z; i++){
        map.setLayoutProperty(`routepoints${i}`, 'visibility', 'none');
    }
}

//Функция отображения подробных параметров для подборки маршрута
function showOrHide(switcher, secAcc, secAdvAcc, thirdAcc, thirdAdvAcc) {
    secAcc = document.getElementById(secAcc);
    switcher = document.getElementById(switcher);
    secAdvAcc = document.getElementById(secAdvAcc);
    thirdAcc = document.getElementById(thirdAcc);
    thirdAdvAcc = document.getElementById(thirdAdvAcc);
    if (switcher.checked) {
        secAcc.style.display = "none";
        thirdAcc.style.display = "none";
        document.getElementById('museum-adv').checked = document.getElementById('fun-adv').checked =
            document.getElementById('educating').checked = document.getElementById('sports-adv').checked =
                document.getElementById('foodivents-adv').checked = document.getElementById('buisness-adv').checked =
                    false;
        secAdvAcc.style.display = "block";
        thirdAdvAcc.style.display = "block";
    }
    else{
        secAcc.style.display = "block";
        thirdAcc.style.display = "block";
        secAdvAcc.style.display = "none";
        thirdAdvAcc.style.display = "none";
        document.getElementById('museum').checked = document.getElementById('fun').checked =
            document.getElementById('educating').checked = document.getElementById('sports').checked =
                document.getElementById('foodivents').checked = document.getElementById('walk').checked =
                    document.getElementById('kidszone').checked = document.getElementById('toilet').checked =
                        document.getElementById('food').checked = false;
    }
}

//Функция отображения персональной настройки маршрута
function showOrHideAdvancedRoutes(advancedDiv, switcher, defaultDiv) {
    advancedDiv = document.getElementById('adv-routes-div');
    switcher = document.getElementById('adv-routes');
    defaultDiv = document.getElementById('default-routes');
    if (switcher.checked) {
        advancedDiv.style.display = "block";
        defaultDiv.style.display = "none";
    }
    else {
        advancedDiv.style.display = "none";
        defaultDiv.style.display = "block";
    }
}

