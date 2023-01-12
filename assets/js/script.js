var i = 0;
    var txt = 'BONJOUR';
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("baslik").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    window.transitionToPage = function (href) {
        document.querySelector('body').style.opacity = 0
        setTimeout(function () {
            window.location.href = href
        }, 500)
    }

    document.addEventListener('DOMContentLoaded', function (event) {
        document.querySelector('body').style.opacity = 1
    })
    

    typeWriter()