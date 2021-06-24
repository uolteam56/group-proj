let slideNumber = 1;

const nextSlide = x => {
    renderSlide(slideNumber += x);
}

const thisSlide = x => {
    renderSlide(x);
}
const renderSlide = x => {
    let slideList = document.getElementsByClassName('slides');
    if (x > slideList.length) slideNumber = 1;
    if (x < 1) slideNumber = slideList.length;
    
    for (let i = 0; i < slideList.length; i++) {
        slideList[i].style.display = 'none';
    }
    
    slideList[slideNumber - 1].style.display = 'block';
}


renderSlide(slideNumber);



