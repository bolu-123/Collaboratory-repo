// Dropdown menu for 'Services' in nav

document.addEventListener('DOMContentLoaded', function() {
    var serviceNav = document.getElementById('service_nav');
    var majorMenu = document.getElementById('major');
    if (serviceNav && majorMenu) {
        var serviceLink = serviceNav.querySelector('a');
        var isMobile = function() { return window.matchMedia('(max-width: 768px)').matches; };

        function showMenu() {
            majorMenu.style.display = 'block';
            if (serviceLink) serviceLink.setAttribute('aria-expanded', 'true');
            majorMenu.setAttribute('aria-hidden', 'false');
        }
        function hideMenu() {
            majorMenu.style.display = 'none';
            if (serviceLink) serviceLink.setAttribute('aria-expanded', 'false');
            majorMenu.setAttribute('aria-hidden', 'true');
        }

        if (isMobile()) {
            // Ensure submenu is hidden initially on mobile
            majorMenu.style.display = 'none';
            // Toggle submenu on tap/click
            if (serviceLink) {
                serviceLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (majorMenu.style.display === 'block') {
                        hideMenu();
                    } else {
                        showMenu();
                    }
                });
            }
            // Close submenu when tapping outside
            document.addEventListener('click', function(e) {
                if (!serviceNav.contains(e.target)) {
                    hideMenu();
                }
            });
        } else {
            // Desktop: keep hover behaviour
            serviceNav.addEventListener('mouseenter', showMenu);
            serviceNav.addEventListener('mouseleave', hideMenu);
            // For accessibility: keep open if hovering submenu
            majorMenu.addEventListener('mouseenter', showMenu);
            majorMenu.addEventListener('mouseleave', hideMenu);
        }
    }
});
