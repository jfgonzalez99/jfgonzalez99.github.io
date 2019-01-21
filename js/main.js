/* main JS file */

$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 15,
        anchors: ['hello', 'about-me', 'my-projects', 'contact-me'],
        navigationTooltips: ['Hello', 'About Me', 'My Projects', 'Contact Me']
    });

});

function helloWorld() {
  var me = {
    name: 'Justin',
    home: 'Hendersonville, NC',
    education: {
      school: 'Harvard College',
      class: 2021,
      concentration: 'Applied Mathematics: Data Science'
    },
    interests: ['puzzles', 'photography', 'movies', 'Chance the Rapper']
  }

  console.log(me.education.school);
}

helloWorld();
