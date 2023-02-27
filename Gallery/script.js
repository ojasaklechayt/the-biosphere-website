const productContainers = [...document.querySelectorAll('#product-container')];
const nxtBtn = [...document.querySelectorAll('#next')];
const preBtn = [...document.querySelectorAll('#back')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})