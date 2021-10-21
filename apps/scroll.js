window.addEventListener('scroll',()=>{
    let content = document.querySelector(".course");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition){
        content.classList.add('active');
    }
});

window.addEventListener('scroll',()=>{
    let cta = document.querySelector(".container");
    let ctaPosition = cta.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(ctaPosition < screenPosition){
        cta.classList.add('active2');
    }
});