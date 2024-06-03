/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarResponsive = document.querySelector('#navbarResponsive');

    navbarToggler.addEventListener('click', function () {
        if (navbarResponsive.classList.contains('collapsing')) return;

        if (navbarResponsive.classList.contains('show')) {
            collapse(navbarResponsive);
        } else {
            expand(navbarResponsive);
        }
    });

    function collapse(element) {
        element.style.height = element.scrollHeight + 'px';
        element.classList.add('collapsing');
        element.classList.remove('collapse', 'show');

        requestAnimationFrame(function () {
            element.style.height = '0';
        });

        element.addEventListener('transitionend', function () {
            element.classList.remove('collapsing');
            element.classList.add('collapse');
            element.style.height = '';
        }, { once: true });

        navbarToggler.setAttribute('aria-expanded', 'false');
    }

    function expand(element) {
        element.classList.remove('collapse');
        element.classList.add('collapsing');
        element.style.height = '0';

        requestAnimationFrame(function () {
            element.style.height = element.scrollHeight + 'px';
        });

        element.addEventListener('transitionend', function () {
            element.classList.remove('collapsing');
            element.classList.add('collapse', 'show');
            element.style.height = '';
        }, { once: true });

        navbarToggler.setAttribute('aria-expanded', 'true');
    }
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
