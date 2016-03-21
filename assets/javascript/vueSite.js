new Vue({
  el: '#formData',
  data: {

  }
},
  methods: {
    validate: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

new Vue({
  el: '.contactEmail',
  data: {

  }
},
  methods: {
    validate: function () {
      this.message = this.val();
      if(this.message = "");
    }
  }
})




new Vue({
  ready: function () {
    var resource = this.$resource();
    // get item
 resource.get({id: 1}).then(function (response) {
     this.$set('item', response.item)
 });

  }
})










// Vue.component("tasks", {
//   template: "#testVue",
//
//   data: function() {
//
//     return {
//         list: []
//     };
//   },
//
//   created: function() {
//     this.fetchTaskList();
//   },
//
//   methods: {
//     fetchTaskList: function() {
//       $.getJSON
//     }
//   }
// })
// new Vue({

//Search Call
//Return matching search results when input into search bar
