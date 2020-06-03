/* main JS file */
var projectNames = ['ar','ibm','hsa','hgem','dlp','vg','witw', 'bD', 'sb', 'sw'];
// Import project info from content.json
var projects = (function() {
  var projects = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': "../json/content.json",
    'dataType': "json",
    'success': function(data) {
      projects = data;
    }
  });
  return projects;
})();


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

      // Ensure other projects close
      arr.forEach(p => {
        if (projects[p].status) {
          open(p)
        }
      });

      // Open/close projects
      $('#' + project + '-info').html(projects[project].text[state]);
      // Change state of project
      if (state == 0) {
        projects[project].status = 1;
      } else {
        projects[project].status = 0;
      }

    }

    projectNames.forEach(project => {
      $('#' + project).click(function() {
        open(project);
      });
    });

    $('#verse').hover(function() {
      $('#verse').text('// And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.')
    }, function() {
      $('#verse').text('// Colossians 3:17')
    });

});
