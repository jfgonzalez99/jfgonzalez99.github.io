/* main JS file */

$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 50,
        anchors: ['hello', 'about-me', 'my-projects', 'contact-me'],
        navigationTooltips: ['Hello', 'About Me', 'My Projects', 'Contact Me']
    });

});
