// Mobile Navigation Menu Functionality

new Vue({
  el: '.navButton',
  data: {

  },
  methods: {
    toggleMenu: function (downUp) {
        if ( $(".main-navigation").is(":hidden") ) {
        $(".main-navigation").slideDown("slow");
      } else {
        $(".main-navigation").slideUp("fast");
      }

    }
  }
});
