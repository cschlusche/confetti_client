<template>
  <div class="hello">
    <form>
      <div>
      <label for="username"
        >Username:
        <input
          type="text"
          id="username"
          v-model.trim="username"
          :text="username"
      /></label>
      </div>
      <div>
      <label for="password"
        >Password:
        <input
          type="password"
          id="password"
          v-model.trim="password"
          :text="password"
      /></label>
      </div>
      <div>
      <button type="button" @click="reqLogin">Send "Login" request</button><br />
      <button type="button" @click="reqGetProfile">
        Send "Profile 999" request
      </button>
      </div>
    </form>
  </div>
  <div id="msg">{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    /**
     * Sends a request to retrieve a profile
     * status: alpha
     */
    reqGetProfile() {
      this.axios({
        method: "get",
        url: "http://127.0.0.1:8000/profile/999",
        // read stored token
        // headers: { Authorization: "Bearer "+localStorage.getItem('token') },
        withCredentials: true,
      })
        .then(function (response) {
          console.log(response.data);
          /** 
          response:
          
          headers: {…},
          status: 200,
          statusText: "OK",
          data: {…},
          data: {status: 401, res: "invalid token"}
          config: {url: "http://127.0.0.1:8000/profile/999", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1),}
          ...
          */
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    /**
     *
     */
    reqLogin() {
      this.axios({
        method: "post",
        url: "http://127.0.0.1:8000/login",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          username: this.username,
          // TODO hash password
          password: this.password,
        },
      })
      .then(function (r) {
        // store token
        // localStorage.setItem("token", r.data.token);
        document.cookie = "username=" + encodeURIComponent(r.data.username);
        document.cookie = "token=" + encodeURIComponent(r.data.token);
        console.info(`Response: ${r.status}, ${JSON.stringify(r.data)}`);
      })
      .catch(function (e) {
        console.error(e);
      });
    },

    /**
     * @deprecated
     * @link https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
     * */
    async digestPassword(message) {
      const encoder = new TextEncoder();
      const data = encoder.encode(message);
      const hash = await crypto.subtle.digest("SHA-512", data);
      return hash;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
