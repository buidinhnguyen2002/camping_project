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