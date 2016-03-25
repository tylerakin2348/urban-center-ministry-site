var searchValue = $("#search").val();

//Ajax Call for API
  $.ajax({
      url:'https://api.instagram.com/v1/users/196756729/media/recent/?access_token=196756729.43505f7.bc26468655ad47979220f2a18f3fc6c0',
      dataType:'jsonp',
      jsonp:'callback',
      success: function (data) {
        var sbtsimages = data.data;
          for(i = 10; i < sbtsimages.length; i +=3) {
            $('#aboutSouthernPhotos').append('<img src="' + sbtsimages[i].images.thumbnail.url + '" />');
          }
      }
  });

//Toggle Ajax-call photos and slide page down to them when clicked
$(".showPhotoButton").click(function() {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
});


// Not using code, but code worked when in use. I was working on developing a search bar, which responds to certain statements, thus the show/hide fucntionality of the result bar.
$( "#search" ).keyup(function() {
  searchValue = $("#search").val();
    var found = $.grep(data.author, function(resource) {
        return data.author === searchValue;
    });
    if(searchValue = data.author ){
      $(".search-overlay").show();
    } else  {
      $(".search-overlay").hide();
    }
  });

    $.ajax({
      type: "POST",
      url: $("form").attr("action"),
      data: "formDataList"
    });
$(document).ready(function() {
  $(".contactForm").submit(function(evt) {
    evt.preventDefault();
    var url = ("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json");
    var formData = $(".contactForm").val();
    $.post(url, formData, function(response) {
    $("#contactSubmitButton").hide();
    alert("Thank you for submitting!");
    });
  }); // end submit
});





// Desktop Navigation Menu Functionality - Figured out and written by mentor while I looked on - included because it's awesome.
var scrollStatus = false;

$(window).scroll(function() {

  var top = $(window).scrollTop(),
      logoCon = $('.logo-container'),
      logo = $('.logo');

  if(scrollStatus && top <= 10)
  {
    scrollStatus = false;
    logo.animate({
      height:120
    }, 200);
    logoCon.animate({
      height: 164,
      marginTop:3
    }, 200);
  }

  if(!scrollStatus && top > 10)
  {
    scrollStatus = true;
    logo.animate({
      height:100
    }, 200);
    logoCon.animate({
      height: 75,
      marginTop:-8
    }, 200);
  }
});
