let slideNumber = 1;

const renderSlide = x => {
    let slideList = document.getElementsByClassName('slides');
    if (x > slideList.length) slideNumber = 1;
    if (x < 1) slideNumber = slideList.length;
    
    for (let i = 0; i < slideList.length; i++) {
        slideList[i].style.display = 'none';
    }
    
    slideList[slideNumber - 1].style.display = 'block';
    
    
}

const thisSlide = x => {
    renderSlide(x);
}

const nextSlide = x => {
    renderSlide(slideNumber += x);
}

const autoSlideShow = (x) => {
    let i = 0;
    while(i < x) {
        for(let j = 1; j < 4; j++) {
            setTimeout(renderSlide(j), 2000);
        }
        i++;
    }    
}
renderSlide(slideNumber);
autoSlideShow(100);


