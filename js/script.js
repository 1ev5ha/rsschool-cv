"use strict"

const isMobile = { 
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android() ||
                 isMobile.BlackBerry() ||
                 isMobile.iOS() ||
                 isMobile.Opera() ||
                 isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

let menuArrows = document.querySelectorAll('.menu__arrow'); /*собираем все переменные .menu__arrow в кучку*/
if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++){
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');   
    });
}
}

} else {
    document.body.classList.add('_pc');
}
//Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}




//Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
          menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
             const menuLink = e.target;
             if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }


             window.scrollTo({
                 top: gotoBlockValue,
                 behavior: "smooth"   
             });
             e.preventDefault();            
       }
}
}


/*setInterval(function(){
    var a = document.getElementById('blink').style.opacity || 1;
    document.getElementById('blink').style.opacity = ((parseInt(a))?0:1);
},1e3);*/

const div = document.getElementById("blink");
function makeElementRed() {
  div.style.color = "red";
}

function fadeElementIn() {
  for (let i = 0; i <= 100; i += 5) {
    setTimeout(() => {
      div.style.opacity = i / 100;
    }, i * 50);
  }
}

function fadeElementOut() {
  let i = 99;
  (function loop() {
    if (i >= 0) {
      setTimeout(() => {
        div.style.opacity = (i -= 5) / 100;
        loop();
      }, 10);
    }
  })();
}

setInterval(() => {
  makeElementRed();
  fadeElementIn();
  setTimeout(() => fadeElementOut(), 2500);
}, 3000); 
