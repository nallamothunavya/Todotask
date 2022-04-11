<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title">Welcome back!</h2>

          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="username"
                  class="input"
                  name="username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Log In
              </button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>

              <nuxt-link to="/homepage">Home</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import Notification from "~/components/Notifications";
export default {
  name: "index-view",
  components: {
    Notification,
  },
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      console.log();
      await this.$store.dispatch("login", {
        username: this.username,
        password: this.password,
      });
      
      await this.$store.dispatch("GetAllToDOs");
    },
    
  },
};
</script>

<style>
.title {
  align-items: center;
}
</style>
