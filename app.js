const App = Vue.createApp({
  data() {
    return {
      title: "",
      name: "",
      age: null,
      image: "",
      gender: "",
      url: "https://randomuser.me/api/",
    };
  },

  methods: {
    fetchPerson() {
      let result;
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          result = data.results[0];
          this.title = result.name.title;
          this.gender = result.gender;
          this.name = result.name.first + " " + result.name.last;
          this.age = result.dob.age;
          this.image = result.picture.large;
        });
    },
  },
  mounted() {
    this.fetchPerson();
  },
});

App.mount("#app");
