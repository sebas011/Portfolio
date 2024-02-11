function toggleMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var navLinks = document.getElementById('navLinks');
    
    // Toggle the active class on the menu button
    menuBtn.classList.toggle('active');

    // Check if the menu button is now active
    if (menuBtn.classList.contains('active')) {
        // If the menu button is active, display the navigation links
        navLinks.style.display = 'block';
    } else {
        // If the menu button is not active, hide the navigation links
        navLinks.style.display = 'none';
    }
}