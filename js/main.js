/* main JS file */
var projectNames = ['ibm','hgem','hsa','dlp','witw', 'bD', 'sb', 'sw'];
var projects = {
      ibm: {
        status: 0,
        text: [
          "<div class='indent'><span class='property'>time</span>: <span class='string'>'June 2019 - August 2019'</span>,<br><span class='property'>responsibilities</span>: [<br><div class='indent'><span class='string'>'Learned <strong>Docker</strong> and <strong>Shell Scripting</strong> in first two weeks to create a rootless containerized build of IBM’s Financial Transaction Manager and reduced container image sizes by 1.6 GB'</span>,<br><span class='string'>'Utilized <strong>SOAP</strong> calls to create custom <strong>Java</strong> methods for an Early Warning Services emulator to programmatically test for fraudulent Zelle transactions'</span>,<br><span class='string'>'More @ <a href='https://jfgonzalez99.github.io/My-IBM-Internship/' target='_blank'>/My-IBM-Internship</a>'</span><br></div>]</div>",
          "..."
        ]
      },
      hgem: {
        status: 0,
        text: [
          "<div class='indent'><span class='property'>time</span>: <span class='string'>'February 2018 - Present'</span>,<br><span class='property'>responsibilities</span>: [<br><div class='indent'><span class='string'>'Designed the organization’s website (<a href='https://www.hgem.org' target='_blank'>hgem.org</a>) which accumulated over 4,100 unique visitors and $29,000 in e-commerce revenue'</span>,<br><span class='string'>'Designed logos and conference materials, took team headshots, and documented our Dubai Innovation Challenge'</span><br></div>]</div>",
          "..."
        ]
      },
      hsa: {
        status: 0,
        text: [
          "<div class='indent'><span class='property'>time</span>: <span class='string'>'April 2019 - Present'</span>,<br><span class='property'>responsibilities</span>: [<br><div class='indent'><span class='string'>'Wrote <strong>Python</strong> scripts that utilized <strong>REST APIs</strong> to reduce onboarding and offboarding times by 30 minutes'</span>,<br><span class='string'>'Propose any new hardware or software initiatives to make the company more efficient'</span><br></div>]</div>",
          "..."
        ]
      },
      dlp: {
        status: 0,
        text: [
          "<div class='indent'><span class='property'>time</span>: <span class='string'>'September 2018 - May 2019'</span>,<br><span class='property'>responsibilities</span>: [<br><div class='indent'><span class='string'>'Taught computer science to middle schoolers in under-served communities in Boston'</span>,<br><span class='string'>'Recruited fellow student teachers'</span><br></div>]</div>",
          "..."
        ]
      },
      witw: {
        status: 0,
        text: [
          "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'Which artists are popular globally and what is it that makes them so universally loved? For this project, my team and I used Spotify data and visualization techniques to analyze popular music around the world and find a common thread.'</span>);<br><a href='https://maxnoahb.github.io/CS171-Final-Project-Spotify/' target='_blank'><span class='function'>whatInTheWorld</span></a>();</div>",
          "..."
        ]
      },
      bD: {
        status: 0,
        text: [
          "<br><div class='indent'><span class='function'>print</span>(<span class='string'>'A python library for big data analysis. This package is a collection of functions that I have found to be useful in my coursework on big data and machine learning.'</span>);<br><a href='https://github.com/jfgonzalez99/bigDATA' target='_blank'><span class='function'>bigDATA</span></a>();</div>",
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
      }
    };


$(document).ready(function() {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 15,
        anchors: ['hello', 'about-me', 'experience', 'my-projects', 'contact-me', 'closing-tag'],
      navigationTooltips: ['hello', 'about-me', 'experience', 'my-projects', 'contact-me', 'closing-tag']
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

    $('#ibm').click(function() {
      open('ibm');
    });
    $('#hgem').click(function () {
      open('hgem');
    });
    $('#hsa').click(function () {
      open('hsa');
    });
    $('#dlp').click(function () {
      open('dlp');
    });
    $('#witw').click(function() {
      open('witw');
    });
    $('#bD').click(function () {
      open('bD');
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



// function helloWorld() {
//   var me = {
//     name: 'Justin',
//     home: 'Hendersonville, NC',
//     education: {
//       school: 'Harvard College',
//       class: 2021,
//       concentration: 'Computer Science'
//     },
//     interests: ['puzzles', 'photography', 'movies', 'Chance the Rapper']
//   }
// }

// helloWorld();
