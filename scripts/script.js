let logoImg = document.getElementById('logo');
let logoStyle = window.getComputedStyle(logoImg);
let logoStyleFilter = logoStyle.filter;
console.log(logoStyleFilter);

logoImg.addEventListener('click', () => {
    if (logoStyleFilter === 'grayscale(1)') {
        logoImg.style.filter = '';

        logoImg = document.getElementById('logo');
        logoStyle = window.getComputedStyle(logoImg);
        logoStyleFilter = logoStyle.filter;
    } else {
        logoImg.style.filter = 'grayscale(100%)';

        logoImg = document.getElementById('logo');
        logoStyle = window.getComputedStyle(logoImg);
        logoStyleFilter = logoStyle.filter;
    }
});