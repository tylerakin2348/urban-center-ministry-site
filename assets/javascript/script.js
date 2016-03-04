var searchValue = $("#search").val();

// Navigation Menu Functionality
$(".topHeaderScroll").hide();
$(window).scroll(function() {
  $(".top-header").hide();
  $(".topHeaderScroll").show();
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
    var found = $.grep(data.resources, function(resource) {
        return resource.author === searchValue;
    });
    if(response != ''){
      $(".search-overlay").show();
    }
  });

  //Contact Form Submit Request
  $("#contactSubmitButton").click(function( submit ) {
    submit.preventDefault();
    $.get()
  });

  $.getJSON("https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/data.json", function( response ) {
    var data;
    data = rsesponse;
  });






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
