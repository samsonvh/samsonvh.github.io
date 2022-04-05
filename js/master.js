var myInterval = setInterval(() => {
    changeBanner(true)
    changeCatalog(true, 1);
    changeCatalog(true, 2);
    changeCatalogType(true, 3, 'PMH');
    changeCatalogType(true, 4, 'tour');
    changeCatalogType(true, 4, 'workshop');
}, 2000);