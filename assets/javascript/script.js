var searchValue = $("#search").val();
// var ajaxCall = function(ajaxCall) {
  $.ajax({
      url:'https://api.instagram.com/v1/users/196756729/media/recent/?access_token=196756729.43505f7.bc26468655ad47979220f2a18f3fc6c0',
      dataType:'jsonp',
      jsonp:'callback',
      success: function (data) {
        var sbtsimages = data.data;
          for(i = 0; i < sbtsimages.length; i +=1) {
            $('#aboutSouthern').append('<img src="' + Object[i].object.images.thumbnail.url + '" />');
            console.log(data);
          }
      }
  });


// Desktop Navigation Menu Functionality
var scrollStatus = false;

$(window).scroll(function() {

  var top = $(window).scrollTop(),
      logoCon = $('.logo-container'),
      logo = $('.logo');

  if(scrollStatus && top == 0)
  {
    scrollStatus = false;
    logo.animate({
      height:120
    }, 200);
    logoCon.animate({
      height: 164,
      marginTop:0
    }, 200);
  }

  if(!scrollStatus && top > 0)
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

// Mobile Navigation Menu Functionality
$(".navButton").click(function() {
  if ( $(".main-navigation").is(":hidden") ) {
  $(".main-navigation").slideDown("slow");
} else {
  $(".main-navigation").slideUp("fast");
}
});

// Search Form AJAX Request
$( "#search" ).keyup(function() {
  searchValue = $("#search").val();
    if(searchValue === data.resources[0].author){
      alert(data.resources[0].author);
    } else {
      if(searchValue === data.resources[0].category){
        alert(data.resources[0].category);
      }
    }
  });

  // Contact Form Submit Request
  $(document).ready(function() {
    $(".contactForm").submit(function(evt) {
      evt.preventDefault();
      var url = ("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json");
      var formData = $(".contactForm").val();
      $.post(url, formData, function(response) {
      $("#contactSubmitButton").hide();
      });
    }); // end submit
  });

  $(document).ready(function() {
    $("#AjaxButton").show();
    $("#AjaxButton").click(function(evt) {
      evt.preventDefault();
      var url = ("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json");
      var formData = $("url");
      $.getJSON(url, formData, function(data) {
        // $.each(formData, function(success, data) {
        //
        // });
        console.log(data);
      });
    }); // end submit
  });

//Search Interactivity
  $(document).ready(function() {
    var url = ("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json");
    var searchData = $("url");

    $( "#search" ).keyup(function() {

      $.getJSON(url, searchData, function(searchResult) {
        // $.each(formData, function(success, data) {
        //
        // });
        console.log(searchResult);
        });
      });
    }); // end submit

  //Contact Form Submit Request
    // // submit.preventDefault();
    // var contactValue = $(".contactForm");
    // var formData = $("formData");
    // var formDataList = "";
    // $("form").submit(function(event) {
    //   // Stop the browser from submitting the form.
    //   event.preventDefault();
    //   var formDataList = $("form").serialize();
    // });
    // $.ajax({
    //   type: "POST",
    //   url: $("form").attr("action"),
    //   data: "formDataList"
    // })
    // .done(function() {
    //   //alert(formDataList.author);
// });
