let jumpTop = document.getElementsByClassName('jump-top')[0];

if (jumpTop) {
    jumpTop.addEventListener('click', function() {
        let scroll = window.scrollY;

        let interval = setInterval(function() {
            scroll -= 90;
            document.body.scrollTop = document.documentElement.scrollTop = scroll;

            if (window.scrollY == 0) {
                clearInterval(interval);
            }
        }, 10);
    });
}

window.addEventListener('scroll', function() {
    let target = document.getElementsByClassName('navbar')[0];
    if (window.scrollY > 150) { // navbar
        target.classList.add('navbar-scrolled');
    } else {
        target.classList.remove('navbar-scrolled');
    }

    if (jumpTop) {
        if (window.scrollY > window.innerHeight / 2) { // back to top
            jumpTop.style.visibility = 'visible';
        } else {
            jumpTop.style.visibility = 'hidden';
        }
    }
});