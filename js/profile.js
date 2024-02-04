$(function() {

  // Set phone width for responsive design adjustments
  $phoneWidth = 930;
  // Start subheading Animation
  subheadingAnimation();

  var jobs = $('.workExperienceContent');

  $('#j1').addClass("workExperienceHighlight");

  $('#workExperience > ul li').click(function(e){
    var selectedLink = '#' + this.id + "_details";

    // Loop through each jobs and show only the job that is selected, hide the rest.
    $(jobs).each(function(index){
      job = index+1;
      if (('#j' + job + "_details") == selectedLink) {
        $('#j' + job).addClass("workExperienceHighlight");
        $('#j' + job).removeClass("workExperienceNormal");
        $('#' + jobs[index].id).fadeIn(350);

      } else {
        $('#j' + job).addClass("workExperienceNormal");
        $('#j' + job).removeClass("workExperienceHighlight");
        $('#' + jobs[index].id).hide();

      }
    }); 

  });

  $('#workExperience > ul li').hover(function () {
    $(this).toggleClass("workExperienceHover");
  });

 }).scroll(function() {
  var y = $(this).scrollTop();
  
  if (y > 550 && $(window).width() > $phoneWidth) {
    //$('#workExperience').fadeIn(1000);
    $('.showme').css({ 
      opacity: 0,
      position: 'relative',
      left: -1000
    }).animate({
      opacity: 1,
      left: 0
    }, 800, 'easeOutExpo');       
  }
});


// Subheading Animation
const delay = ms => new Promise(res => setTimeout(res, ms));
const subheadingAnimation = async() => {
  
  $currentHeading = $("#subheading");
  $currentHeading.html('It\'s nice to meet you.');

  if($(window).width() > $phoneWidth) {
    var headings = ["It's nice to meet you.", "I program in .Net", "I program in Java", "I program in C#, and more.", "I love code.", "I love LAMP.", "I am a full stack developer."];
    var rewindTo = [1, 13, 13, 2, 2, 1];
  } else {
    var headings = ["It's nice to meet you.", "I program in .Net", "I program in Java", "I program in C#, and more.", "I love code.", "I love LAMP.", "I am a full stack developer."];
    var rewindTo = [1, 13, 13, 2, 2, 1];
  }
  
  if (currentHeading = headings[0]) { 
    iAmCodeJustCompleted = false;
    for (var h=0; h < headings.length-1; h++) {
      // rewind heading
      await delay(2000);
      for (var i=1; i <= headings[h].length - rewindTo[h]; i++) {
        $currentHeading.text(headings[h].substring(0 ,headings[h].length-i));
        await delay(50);
      }
      // type new heading
      await delay(800);
      nextHeading = h+1;
      if (nextHeading < headings.length) {
        
        /*
        // Decided to not use the glitch effect at this time
        // If I Am Code is the heading, adjust the color before typing
        if (headings[nextHeading] == "I AM Code" && $(window).width() > $phoneWidth) {
          $('#subheading').css({"color":" #4af753"})
        } else {
          $('#subheading').css({"color":"#d1dceb"});
        }
        */

        for(var t=rewindTo[h]; t <= headings[nextHeading].length; t++) {
          $currentHeading.html(headings[nextHeading].substring(0, t));
          await delay(75);

        }
        /*
        // Decided to not use the glitch effect at this time
        // run Glitch function if "I AM Code" is the heading
        if (headings[nextHeading] == "I AM Code" && $(window).width() > $phoneWidth) {
          iAmCodeJustCompleted = true;
          // Add glitch effect  
          await delay(1500);
          $('#profileImg').addClass('glitchEffect');

          await delay(500);
          $('#profileImg').removeClass('glitchEffect');

        } else if (iAmCodeJustCompleted) {
          // Extended delay after back to normal 
          await delay(1000)
        }
        */
      } 
    }
  }
}
