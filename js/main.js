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

    $('#witw').mouseover(function() {
      $('#witw-info').text('Which artists are popular globally and what is it that makes them so universally loved? For this project, my team and I used Spotify data and data visualization techniques to analyze popular music around the world and find a common thread among popular music around the world.');
    });

    $('#witw').mouseout(function() {
      $('#witw-info').text('...');
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
