    setInterval(function(){
        var a = document.getElementById('blink').style.opacity || 1;
        document.getElementById('blink').style.opacity = ((parseInt(a))?0:1);
    },1e3);
