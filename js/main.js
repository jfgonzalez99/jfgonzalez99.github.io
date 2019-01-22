/* main JS file */
var clickCount = 0;

var witwText = [
  "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'Which artists are popular globally and what is it that makes them so universally loved? For this project, my team and I used Spotify data and visualization techniques to analyze popular music around the world and find a common thread.'</span>);<br><a href='https://maxnoahb.github.io/CS171-Final-Project-Spotify/' target='_blank'><span class='function'>whatInTheWorld</span></a>();</div>",
  "..."
];

var sbText = [
  "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'A short video game that incapsulates the frustration of trying to find success in the American education system as a mixed ethnicity student. In my game, I force the player to take on my own perspective as they traverse the American K-12 education system and strive for what is the ultimate \"success\" of a student: admission to Harvard University.'</span>);<br><a href='https://jfgonzalez99.github.io/StraddlingBoundaries/' target='_blank'><span class='function'>straddlingBoundaries</span></a>();</div>",
  "..."
];

var baText = [
  "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'Which artists are popular globally and what is it that makes them so universally loved? For this project, my team and I used Spotify data and visualization techniques to analyze popular music around the world and find a common thread.'</span>);<br><a href='https://maxnoahb.github.io/CS171-Final-Project-Spotify/' target='_blank'><span class='function'>whatInTheWorld</span></a>();</div>",
  "..."
];


$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 15,
        anchors: ['hello', 'about-me', 'my-projects', 'contact-me'],
        navigationTooltips: ['hello', 'about-me', 'my-projects', 'contact-me']
    });



    $('#witw').click(function() {
      $('#witw-info').html(witwText[clickCount % 2]);
      clickCount += 1;
      console.log(clickCount);
    });

    $('#sb').mouseover(function() {
      $('#sb-info').text('A short video game that incapsulates the frustration of trying to find success in the American education system as a mixed ethnicity student. In my game, I force the player to take on my own perspective as they traverse the American K-12 education system and strive for what is the ultimate "success" of a student: admission to Harvard University.');
    });

    $('#sb').mouseout(function() {
      $('#sb-info').text('...');
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
