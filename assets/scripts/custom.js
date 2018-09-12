let jumpTop = document.getElementsByClassName('jump-top')[0];

if (jumpTop) {
    jumpTop.addEventListener('click', function() {
        let scroll = window.scrollY;

        let interval = setInterval(function() {
            scroll -= 90;
            document.body.scrollTop = document.documentElement.scrollTop = scroll;

            console.log(window.scrollY);
            if (window.scrollY == 0) {
                clearInterval(interval);
            }
        }, 10);
    });
}

window.addEventListener('scroll', function() {
    let target = document.getElementsByClassName('navbar')[0];
    if (window.scrollY > 150) { // navbar
        target.classList.add('navbar-scrolled', 'bg-dark');
        target.classList.remove('bg-transparent');
    } else {
        target.classList.remove('navbar-scrolled', 'bg-dark');
        target.classList.add('bg-transparent');
    }

    if (jumpTop) {
        if (window.scrollY > window.innerHeight / 2) { // back to top
            jumpTop.style.visibility = 'visible';
        } else {
            jumpTop.style.visibility = 'hidden';
        }
    }
});