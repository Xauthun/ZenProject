function setActive(element) {
    const navItems = document.querySelectorAll('.custom-nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

