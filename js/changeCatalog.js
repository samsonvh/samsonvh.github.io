const section1Images = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
    '7.JPG'
];
const section2Images = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
];
var countSection1 = 0;
var countSection2 = 0;

function changeCatalog(isNext, section) {
    var section1Image = document.getElementById('individual-image');
    var section2Image = document.getElementById('catalog-image');
    if (section == 1) {
        if (isNext) {
            countSection1++;
        } else {
            countSection1--;
        }
        if (countSection1 == section1Images.length) {
            countSection1 = 0;
        } else if (countSection1 < 0) {
            countSection1 = section1Images.length;
        }
        section1Image.setAttribute('src', '/img/section1/' + section1Images[countSection1]);
    } else if (section == 2) {
        if (isNext) {
            countSection2++;
        } else {
            countSection2--;
        }
        if (countSection2 == section2Images.length) {
            countSection2 = 0;
        } else if (countSection2 < 0) {
            countSection2 = section2Images.length;
        }
        section2Image.setAttribute('src', '/img/section2/' + section2Images[countSection2]);
    }
}