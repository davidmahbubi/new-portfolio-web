const sidebarDarkOverlay = document.querySelector('.sidebar-dark-overlay');
const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');

if (window.innerWidth <= 1024) {
    toggleSidebar(sidebar, sidebarDarkOverlay, 'hide');
}

sidebarDarkOverlay.addEventListener('click', function() {
    toggleSidebar(sidebar, sidebarDarkOverlay, 'hide');
});

sidebarToggler.addEventListener('click', function() {
    toggleSidebar(sidebar, sidebarDarkOverlay, 'show');
});

function toggleSidebar(sidebar, overlay, state = 'hide') {
    if (state === 'hide') {
        sidebar.classList.remove('sidebar-show');
        overlay.classList.remove('sidebar-dark-overlay-show');
    } else {
        sidebar.classList.add('sidebar-show');
        overlay.classList.add('sidebar-dark-overlay-show');
    }
}