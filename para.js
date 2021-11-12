let etoiles = document.getElementById('etoiles');
let montagneback = document.getElementById('montagneback');
let montagnefront = document.getElementById('montagnefront');
let lune = document.getElementById('lune');
let subtitle = document.getElementById('subtitle');
let pouet = document.getElementById('pouet');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let scroll = window.scrollY;
    etoiles.style.left = scroll + 'px';
    lune.style.top = (scroll)  + 'px';
    montagneback.style.top = scroll * 0.31 + 'px';
    montagnefront.style.top = scroll * 0 + 'px';
    subtitle.style.marginRight = scroll *3.5 +'px';
    subtitle.style.marginTop = (scroll-120) *1.4 +'px';
    btn.style.marginTop = scroll * 1.5 + 'px';
    header.style.top = scroll + 'px';
    if (scroll >= 302 ){
        subtitle.style.zIndex = '7';
    }else{
        subtitle.style.zIndex = '5'
    }
})