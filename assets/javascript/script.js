var searchValue = $("#search").val();

// Navigation Menu Functionality
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


$(".navButton").click(function() {
  if ( $(".main-navigation").is(":hidden") ) {
  $(".main-navigation").slideDown("slow");
} else {
  $(".main-navigation").slideUp("fast");
}
});

$(".navButton").click(function() {
  if ( $(".mainNavigationScroll").is(":hidden") ) {
  $(".mainNavigationScroll").slideDown("slow");
} else {
  $(".mainNavigationScroll").slideUp("fast");
}
});

//Search Form Request
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

  //Contact Form Submit Request
  $(function() {
    // submit.preventDefault();
    var contactValue = $(".contactForm");
    var formData = $("formData");
    var formDataList = "";
    $("form").submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();
      var formDataList = $("form").serialize();
    });
    $.ajax({
      type: "POST",
      url: $("form").attr("action"),
      data: "formDataList"
    })
    .done(function() {
      //alert(formDataList.author);
    })
});



  //   var data = {
  //
  //   }
  //   $.get("https://github.com/tylerakin2348/urban-center-ministry-site/blob/master/contactInfo.json", contactSubmitButton, "Success")
  //
  // $.getJSON("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json", function( response ) {
  //   var data;
  //   data = rsesponse;
  // });






  // $(".contact").append(".contactForm");
  //
  // $("#searchButton").click(function() {
  //
  // });
  // $("form").onclick
//   $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > 100) {
//         $('.menu').addClass('fixed');
//     } else {
//         $('.menu').removeClass('fixed');
//     }
// });


  // $.getJSON("data.json", function(json) {
  //   console.log("JSON Data: " + data.json[0].name);
  // });


  // $.getJSON("data.json", function (data) {
  //   $.each(data, function (index, source) {
  //     if (source.author === ("#search").val()
  // });


// searchValue = $("#search").val();
// });
// $( "#search" ).keyup(function() {
//   console.log(searchValue)
// });
//
//
// $( "#search" ).keyup(function() {

// $("button").click(function() {
//   $(".main-navigation").toggle();
// });






// var responsiveMenu = ["About", " Contact Us"]
// $(".menu").append(responsiveMenu);






// $("#search").submit(function() {
//   if
// });


// $(".menu a").click(function(event) {
//   var href = $(this).attr("href");
//   console.log(href);
// });
