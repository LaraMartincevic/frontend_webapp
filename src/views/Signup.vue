<template>
  <div class="signup">
    <h1>Dobrodošli na signup stranicu</h1>
    <h2>Ovdje vrlo jednostavno se možete priključiti našoj zajednici</h2>

    <div class="container_b">
      <div class="row row-cols-2">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputName">Ime</label>
              <input
                type="ime"
                class="form-control"
                id="exampleInputName"
                placeholder="Marko"
              />
            </div>
          </form>
        </div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputPrezime">Prezime</label>
              <input
                type="prezime"
                class="form-control"
                id="exampleInputPrezime"
                placeholder="Markić"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container_a">
      <div class="row row-cols-2">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputemail"
                placeholder="marko21@example.com"
              />
            </div>
            <button type="signup" class="btn btn-primary">Signup</button>
          </form>
        </div>
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="lozinka123"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enteremail"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="signup" class="btn btn-primary">Signup</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*
.container {
  width: 1250px;
  height: 700px;
  align-self: start;
  margin: auto;
  margin-left: auto;
  margin-right: auto;
}
*/
h1 {
  margin: auto;
  width: 600px;
  height: 200px;
  font-family: "Times New Roman", Times, serif;
  font-size: 49px;
}

h2 {
  margin: auto;
  width: 600px;
  height: 200px;
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
  text-align: center;
}

.container_b {
  width: 600px;
  height: 700px;
  margin: auto;
  margin-right: auto;
  margin-left: auto;
}

.container_a {
  width: 600px;
  height: 1000px;
  margin: -550px;
  margin-right: auto;
  margin-left: auto;
}

button {
  margin: auto;
  margin-left: auto;
  margin-right: auto;
  background: #e6bdb0;
  border: black;
}
</style>
