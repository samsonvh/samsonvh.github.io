const bannerImages = [
    '1.JPG',
    '2.JPG',
    '3.JPG',
    '4.JPG',
    '5.JPG',
    '6.JPG',
];
var countBanner = 0;

function changeBanner(isNext) {

    var bannerImage = document.getElementById('banner-image');
    if (isNext == true) {
        countBanner++;
    } else {
        countBanner--;
    }
    if (countBanner === bannerImages.length) {
        countBanner = 0;
    }
    if (countBanner < 0) {
        countBanner = bannerImages.length - 1;
    }
    bannerImage.setAttribute('src', '/img/banner/' + bannerImages[countBanner]);
}