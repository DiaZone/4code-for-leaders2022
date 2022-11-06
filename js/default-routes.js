//Получение тега готового маршрута из адресной строки
function chooseDefaultRoute(){
    const url = new URL(
        window.location
    )
    let myRoute = url.hash.replace('#', '')
    return defaultRoutes[myRoute]
}

//Функция очистки адресной строки
function removeHash () {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}

//Функция получения координат через id мест
function routesCoords(){
    let idArray = chooseDefaultRoute();
    let routeCoord = [];
    let i = 0;
    idArray.forEach(element =>{
        points.features.forEach(feature=> {
            if(feature.id === idArray[i]){
                for(let j = 0; j < 2; j++){
                    routeCoord.push(feature.geometry.coordinates[j])
                }
                i++;
            }
        })
    })
    console.log(routeCoord);
    return routeCoord;
}

