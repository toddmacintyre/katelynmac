
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
// var $caption = $("<p></p>");

//Set CSS properties for overlay elements
$overlay.height( $(document).height() );
$image.css('max-width', '70%');
$image.css('max-height', '80vh');

//Add an image to overlay
$overlay.append($image);

//Add a caption to overlay
// $overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#photos a").click(function(event){

  //Prevet default behaviour
  event.preventDefault();

  //Get image href value
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  //Get where the image is on the screen
  var $imageOffset = ( $(this).offset().top - 50 )
  //Set margin offset for overlay image
  $image.css('margin-top', $imageOffset + 'px');
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  // var captionText = $(this).children("img").attr("alt");
  // $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});


