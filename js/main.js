const travelFavorites = document.querySelectorAll('.camping-card__favorite');
travelFavorites.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.children);
        const childrenElements = Array.from(element.children);
        childrenElements.forEach(img => {
            img.classList.toggle('favorite--hidden');
        });
      });
});

function calBgPositionX(parentWidth) {
    return ((720 - parentWidth) / 720 * 100)+ 10 + "%" ;
  }

function updateBgPositionX() {
    const element = document.querySelector('.email__box');
    const bgPositionX = calBgPositionX(element.offsetWidth);
    element.style.backgroundPositionX = bgPositionX;
}
window.addEventListener('resize', updateBgPositionX);
updateBgPositionX();

const exploreIcon = document.querySelector('.explor-img');
const travelReview = document.querySelector('.travel-review');
exploreIcon.addEventListener('mouseover', function (e) {
    travelReview.classList.add("travel-review--expanded");  
    Array.from(travelReview.children).forEach(imgReview => {
        imgReview.classList.add('travel-review__img--translate');
    });
});
exploreIcon.addEventListener('mouseout', function (e) {
    travelReview.classList.remove("travel-review--expanded");
    Array.from(travelReview.children).forEach(imgReview => {
        imgReview.classList.remove('travel-review__img--translate');
    });
});

const nav = document.querySelector('.nav');
const navBox = document.querySelector('.nav-box');
navBox.addEventListener('click', function(){
    nav.classList.toggle('nav--translate');
});