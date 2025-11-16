// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('menu-toggler');
    const menu = document.getElementById('nav-menu');
    const icon = toggler.querySelector('i');

    if (toggler && menu && icon) {
        // 1. Toggle the menu when the button is clicked
        toggler.addEventListener('click', () => {
            // Show or hide the menu
            menu.classList.toggle('active');
            
            // Change the icon from 'bars' to 'times' (X)
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // 2. Close the menu when a link is clicked (for mobile)
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});