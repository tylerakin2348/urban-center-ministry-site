new Vue({
  el: '#formData',
  data: {
    contactFormInfo: [
      <li label for="contactName">Name</label>
         <input id="contactName" type="text" title="Name" required/>
      </li>
      <li>
         <label for="contactEmail">Email</label>
         <input id="contactEmail" v-if="" type="text" title="Email" required/>
      </li>
      <li>
         <label for="contactPhone">Phone</label>
         <input id="contactPhone" type="text" title="Phone" />
      </li>
      <li>
         <label for="contactMessage">Message</label>
         <textarea id="contactMessage" type="text" title="Message"></textarea>
      </li>
      <button ontype="submit" id="contactSubmitButton" action="https://raw.githubusercontent.com/tylerakin2348/urban-center-ministry-site/master/contactInfo.json"></button>
    ]
  }
},
  methods: {
    validate: function () {
      this.message = this.message.split('').reverse().join('')
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
