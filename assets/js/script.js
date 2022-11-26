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

    typeWriter()