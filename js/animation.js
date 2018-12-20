$(document).ready(function() {

  var joke = $(".site-heading h1");
  var response = $("span.subheading");
  var clickCount = 0;

  joke.animate({opacity: "1", fontSize: "90px"}, "fast");
  joke.animate({fontSize: "65px"}, "fast");
  joke.animate({fontSize: "90px"}, "fast");
  joke.animate({fontSize: "80px"}, "fast");

  response.delay(1000).animate({opacity: "0.5"}, 2500)

  response.mouseover(function() {
    response.animate({opacity: "1", fontSize: "32px"}, 400);
  });

  response.mouseout(function() {
    response.animate({opacity: "0.5", fontSize: "24px"}, 400);
  });

  response.on("click", function () {
    if (clickCount == 0) {
      joke.text("Justin");
      $("span.subheading p").text("Justin who?");
      clickCount++;
    }
    else if (clickCount == 1) {
      joke.text("Justin \"Case-you-still-aren't-convinced-here-are-some-reasons-why-you-might-want-to-work-with-me\" Gonzalez");
      joke.animate({fontSize: "55px"}, 0);
      $("span.subheading p").text("This better be good...");
      clickCount++;
    }
    else {
      window.location.href = "about.html";
    }
  });

});
