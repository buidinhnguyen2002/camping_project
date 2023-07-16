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