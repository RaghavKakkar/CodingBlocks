while(true){
    const imgs = document.querySelectorAll('img');
    imgs[0].style.opacity = 0;
    setTimeout(() => {
        imgs[1].style.opacity=0;
    }, 2000);
}