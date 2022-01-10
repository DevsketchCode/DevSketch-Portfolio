$(document).ready(function() {    

  $leftImage = 0;
  $centerImage = 0;
  $rightImage = 0;
  
  // Links to images that you want in the carousel, could be relative links
  $imageLinkArray = [ 
    "https://devsketchcode.github.io/DevSketch-Portfolio/images/BetaAirlines_Plan.jpg",
    "https://devsketchcode.github.io/DevSketch-Portfolio/images/BetaAirlinesMVC_07_User_BookAFlight.jpg",
    "https://devsketchcode.github.io/DevSketch-Portfolio/images/pawpering_screenshot_lg.png",
    "https://devsketchcode.github.io/DevSketch-Portfolio/images/JavaMovieApplication.jpg"
  ];
  $imageLinkDescriptionArray = [ 
    "I developed this Beta Airlines project website in ASP.NET using C#.  This particular version is using WebForms.",
    "This Beta Airlines project was developed in ASP.NET using C# taking advantage of MVC and the Entity Framework. I made it to allow general users, managers, and admins to log in with their appropriate access.",
    "For the Pawpering project, I used VB.NET to create this functional demo of a veterinary clinic CRM.",
    "My Java Web Programming final project was made using Java, utilizing JSP to add, edit, and update movies along with its information."
  ];  
  
  if($imageLinkArray.length >= 3) {
    $leftImage = $imageLinkArray.length-1;
    $centerImage = 0;
    $rightImage = 1;
  } else if($imageLinkArray.length < 3 && $imageLinkArray.length > 0) {
    $centerImage = 0;
  }
  
  // Load Carousel Images On Document Load
  $("#carousel-left-img").attr("src", $imageLinkArray[$leftImage]);
  $("#carousel-center-img").attr("src", $imageLinkArray[$centerImage]);
  $("#carousel-center-image-link").attr("href", $imageLinkArray[$centerImage]);
  $("#carousel-center-description").html($imageLinkDescriptionArray[$centerImage]);
  $("#carousel-right-img").attr("src", $imageLinkArray[$rightImage]);
  
  // Update Images On Click
  $("#carousel-left-arrow").click(function() {
    if($leftImage === 0) {
      $leftImage = $imageLinkArray.length-1;
    } else {
      $leftImage = $leftImage - 1;
    }
    if($centerImage === 0) {
      $centerImage = $imageLinkArray.length-1;
    } else {
      $centerImage = $centerImage - 1;
    }
    if($rightImage === 0) {
      $rightImage = $imageLinkArray.length-1;
    } else {
      $rightImage = $rightImage - 1;  
    }
    // update images
    $("#carousel-left-img").attr("src", $imageLinkArray[$leftImage]);
    $("#carousel-center-img").attr("src", $imageLinkArray[$centerImage]);
    $("#carousel-center-image-link").attr("href", $imageLinkArray[$centerImage]);
    $("#carousel-center-description").html($imageLinkDescriptionArray[$centerImage]);    
    $("#carousel-right-img").attr("src", $imageLinkArray[$rightImage]);
  });
  
  
  $("#carousel-right-arrow").click(function() {
    if($leftImage === $imageLinkArray.length-1) {
      $leftImage = 0;
    } else {
      $leftImage = $leftImage + 1;
    }
    if($centerImage === $imageLinkArray.length-1) {
      $centerImage = 0;
    } else {
      $centerImage = $centerImage + 1;
    }
    if($rightImage === $imageLinkArray.length-1) {
      $rightImage = 0;
    } else {
      $rightImage = $rightImage + 1;  
    }
    // update images
    $("#carousel-left-img").attr("src", $imageLinkArray[$leftImage]);
    $("#carousel-center-img").attr("src", $imageLinkArray[$centerImage]);
    $("#carousel-center-image-link").attr("href", $imageLinkArray[$centerImage]);  
    $("#carousel-center-description").html($imageLinkDescriptionArray[$centerImage]);    
    $("#carousel-right-img").attr("src", $imageLinkArray[$rightImage]);
  });

});