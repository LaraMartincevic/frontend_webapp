<template>
  <div class="login">
    <h1>Dobrodošli na login stranicu</h1>
    <h2>Unesite odgovarajuće podatke</h2>
    <div class="image"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="loginCredentials.email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="loginCredentials.password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="button"
              @click="checkCredentials"
              class="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  async mounted() {},
  methods: {
    async storeUser(user) {
      localStorage.setItem("email", user.email);
      localStorage.setItem("ime", user.ime);
    },
    removeFromStorage() {
      localStorage.removeItem("email");
      localStorage.removeItem("ime");
    },
    checkCredentials() {
      axios
        .post("http://localhost:3000/login", this.loginCredentials)
        .then((response) => {
          if (response.data) {
            this.removeFromStorage();
            this.storeUser(response.data);
            this.$router.push({
              name: "radovi",
            });
          } else {
            alert(
              "Incorrect credentials. Please try again. If you are not a user, please register."
            );
          }
        });
    },
  },
  data() {
    return {
      loginCredentials: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.container {
  width: 1250px;
  height: 700px;
  align-self: start;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  margin: 50px auto;
  width: 600px;
  height: 120px;
  font-family: "Times New Roman", Times, serif;
  font-size: 52px;
  text-align: center;
}

h2 {
  margin: auto;
  width: 600px;
  height: 0px;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
  text-align: center;
}

button {
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  background: #e6bdb0;
  border: black;
}

.image {
  height: 150px;
  background-repeat: no-repeat;
}
/*
.bg {
  background: fixed;
  background-image: url(../assets/brick.jpg);
  background-size: cover;
  min-height: 1800px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-image: url("../assets/slika2.jpg");
  background-size: cover;
}*/
</style>
