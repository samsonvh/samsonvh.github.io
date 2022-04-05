const section3Images = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG'
];

const section4Images = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG'
];

var countSection3 = 1;
var countSection4 = 1;

function changeCatalogType(isNext, section, type) {
    var stringPath = '/img/';
    if (section == 3) {
        var stationImage = document.getElementById('station-image');
        if (isNext) {
            countSection3++;
        } else {
            countSection3--;
        }
        if (countSection3 == section3Images.length) {
            countSection3 = 0;
        } else if (countSection3 < 0) {
            countSection3 = section3Images.length - 1;
        }
        switch (type) {
            case 'PMH':
                stringPath += 'section3/PMH/';
                break;
            case 'homie':
                stringPath += 'section3/Homie/';
                break;
        }
        stationImage.setAttribute('src', stringPath + section3Images[countSection3]);
    } else if (section == 4) {
        var tourImage = document.getElementById('tour-image');
        var workshopImage = document.getElementById('workshop-image');
        if (isNext) {
            countSection4++;
        } else {
            countSection4--;
        }
        if (countSection4 == section4Images.length) {
            countSection4 = 0;
        } else if (countSection4 < 0) {
            countSection4 = section4Images.length - 1;
        }
        switch (type) {
            case 'tour':
                stringPath += 'section4/tour/';
                tourImage.setAttribute('src', stringPath + section4Images[countSection4]);
                break;
            case 'workshop':
                stringPath += 'section4/workshop/';
                workshopImage.setAttribute('src', stringPath + section4Images[countSection4]);
                break;
        }
    }
}