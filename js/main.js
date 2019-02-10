/* main JS file */
var projectNames = ['witw', 'sb', 'sw'];
var projects = {
      witw: {
        status: 0,
        text: [
          "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'Which artists are popular globally and what is it that makes them so universally loved? For this project, my team and I used Spotify data and visualization techniques to analyze popular music around the world and find a common thread.'</span>);<br><a href='https://maxnoahb.github.io/CS171-Final-Project-Spotify/' target='_blank'><span class='function'>whatInTheWorld</span></a>();</div>",
          "..."
        ]
      },
      sb: {
        status: 0,
        text: [
          "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'A short video game that incapsulates the frustration of trying to find success in the American education system as a mixed ethnicity student. In my game, I force the player to take on my own perspective as they traverse the American K-12 education system and strive for what is the ultimate \"success\" of a student: admission to Harvard University.'</span>);<br><a href='https://jfgonzalez99.github.io/StraddlingBoundaries/' target='_blank'><span class='function'>straddlingBoundaries</span></a>();</div>",
          "..."
        ]
      },
      sw: {
        status: 0,
        text: [
          "<br><div class='indent'><a href='https://github.com/jfgonzalez99?tab=repositories'><span class='function'>otherProjects</span></a>();</div>",
          "..."
        ]
      },
    };


$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 15,
        anchors: ['hello', 'about-me', 'my-projects', 'contact-me', 'closing-tag'],
        navigationTooltips: ['hello', 'about-me', 'my-projects', 'contact-me', 'closing-tag']
    });

    function open(project) {
      var state = projects[project].status;
      var arr = projectNames;
      arr = arr.filter(e => e !== project);

      if (projects[arr[0]].status) {
        open(arr[0]);
      }
      if (projects[arr[1]].status) {
        open(arr[1]);
      }

      $('#' + project + '-info').html(projects[project].text[state]);
      if (state == 0) {
        projects[project].status = 1;
      } else {
        projects[project].status = 0;
      }

    }

    $('#witw').click(function() {
      open('witw');
    });
    $('#sb').click(function() {
      open('sb');
    });
    $('#sw').click(function() {
      open('sw');
    });
    $('#jer').hover(function() {
      $('#jer').text('// For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.')
    }, function() {
      $('#jer').text('// JER 29:11')
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
}

helloWorld();
