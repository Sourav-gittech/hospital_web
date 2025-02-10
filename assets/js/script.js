// active navbar
let nav = document.querySelector('.navigation_wrapper');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    }
    else {
        nav.classList.remove('scroll-on');
    }
}

// add white background on navbar when toggle button clicked
let toggleIcon = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.navigation_wrapper');
toggleIcon.addEventListener('click', function () {
    if (navbar.classList.contains('bg_white')) {
        navbar.classList.remove('bg_white');
    }
    else {
        navbar.classList.add('bg_white');
    }
});

// nav hide
let navlink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');
navlink.forEach(function (a) {
    a.addEventListener('click', function () {
        navbar.classList.remove('bg_white');
        navCollapse.classList.remove('show');
    });
});

// counter design 
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter('count1', 0, 500, 3000);
    counter('count2', 0, 88, 3000);
    counter('count3', 0, 25, 3000);
    counter('count4', 0, 55, 3000);
});