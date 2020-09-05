function addListeners() {
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
}

function toggleMenu() {
    // get menu element
    let menu = document.querySelector('.menu');
    // if menu is visible, hide it, else show it
    if(menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}

// If we use defer:
// addListeners();

//  If we do not want to use defer:
 window.addEventListener('load', addListeners);