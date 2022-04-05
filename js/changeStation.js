function changeStation(name) {
    var homieStation = document.getElementById('homie-station');
    var pmhStation = document.getElementById('pmh-station');
    var leftButton = document.getElementById('left-station-button');
    var rightButton = document.getElementById('right-station-button');
    if (name == 'homie') {
        pmhStation.classList.remove('current-station');
        pmhStation.setAttribute('onclick', 'changeStation("PMH")');
        homieStation.classList.add('current-station');
        homieStation.removeAttribute('onclick');
        leftButton.setAttribute('onclick', "changeCatalogType(false,3,'homie')");
        rightButton.setAttribute('onclick', "changeCatalogType(true,3,'homie')");
        window.clearInterval(window.myInterval);
        myInterval = setInterval(() => {
            changeBanner(true)
            changeCatalog(true, 1);
            changeCatalog(true, 2);
            changeCatalogType(true, 3, 'homie');
            changeCatalogType(true, 4, 'tour');
            changeCatalogType(true, 4, 'workshop');
        }, 2000);
    } else if (name == 'PMH') {
        homieStation.classList.remove('current-station');
        homieStation.setAttribute('onclick', "changeStation('homie')");
        pmhStation.classList.add('current-station');
        pmhStation.removeAttribute('onclick');
        leftButton.setAttribute('onclick', "changeCatalogType(false,3,'PMH')");
        rightButton.setAttribute('onclick', "changeCatalogType(true,3,'PMH')");
        window.clearInterval(window.myInterval);
        myInterval = setInterval(() => {
            changeBanner(true)
            changeCatalog(true, 1);
            changeCatalog(true, 2);
            changeCatalogType(true, 3, 'PMH');
            changeCatalogType(true, 4, 'tour');
            changeCatalogType(true, 4, 'workshop');
        }, 2000);
    }
}