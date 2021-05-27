$(function() {

  // Start subheading Animation
  subheadingAnimation();

  var jobs = $('.workExperienceContent');

  $('#j1').css({"border-left-color":"#fca311", "background-color":"#12274b", "font-weight":"600", "text-shadow":"2px 2px 2px #020c1b"});

  $('#workExperience > ul > li').click(function(e){
    event.preventDefault();
    var selectedLink = '#' + this.id + "_details";

    // Loop through each jobs and show only the job that is selected, hide the rest.
    $(jobs).each(function(index){
      job = index+1;
      if (('#j' + job + "_details") == selectedLink) {
        $('#j' + job).css({"border-left-color":"#fca311", "background-color":"#12274b", "font-weight":"600", "text-shadow":"2px 2px 2px #020c1b"});
        $('#' + jobs[index].id).fadeIn();

      } else {
        $('#j' + job).css({"border-left-color":"#915d0a", "background-color":"#091d3a", "font-weight":"normal", "text-shadow":"none"});
        $('#' + jobs[index].id).fadeOut();

      }
    }); 

  });

}).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 250) {
    $('#workExperience').fadeIn(1000);
  } else {
    $('#workExperience').fadeOut();
  }
});


// Subheading Animation
const delay = ms => new Promise(res => setTimeout(res, ms));
const subheadingAnimation = async() => {
  
  $currentHeading = $("#subheading");

  var headings = ["I am a developer.", "I love programming.", "I love code.", "I AM Code", "I love LAMP.", "I am a developer."];
  var rewindTo = [2, 7, 2, 2, 2, 0];

  if (currentHeading = headings[0]) { 
   
    for (var h=0; h < 5; h++) {
      // rewind heading
      await delay(2000);
      for (var i=1; i <= headings[h].length - rewindTo[0]; i++) {
        $currentHeading.text(headings[h].substring(0 ,headings[h].length-i));
        await delay(50);
      }
      // type new heading
      await delay(1000);
      nextHeading = h+1;
      if (nextHeading < 6) {
        
        // If I Am Code is the heading, adjust the color before typing
        if (nextHeading == 3) {
          $('#subheading').css({"color":" #4af753"})
        } else {
          $('#subheading').css({"color":"#d1dceb"});
        }

        for(var t=rewindTo[h]; t <= headings[nextHeading].length; t++) {
          $currentHeading.html(headings[nextHeading].substring(0, t));
          await delay(75);

        }

        // run Glitch function if "I AM Code" is the heading
        if (nextHeading == 3) {
          // Add glitch effect  
          await delay(1500);
          $('#profileImg').addClass('glitchEffect');

          await delay(500);
          $('#profileImg').removeClass('glitchEffect');

        } else if (nextHeading == 4) {
          // Extended delay after back to normal 
          await delay(1000)
        }
      } 
    }
  }
}
