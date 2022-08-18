<template>
  <div>
    Login Page
    <form @submit.prevent="loginMethods">
      <input type="text" v-model="email" />
      <input type="text" v-model="password" />
      <button type="submit">LogIn</button>
    </form>
  </div>
</template>

<script>
import {} from "@/components";
import { mapActions } from "vuex";
import * as authTypes from "@/store/modules/auth/authTypes.js";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      login: `auth/${authTypes.AUTH_LOGIN}`,
    }),
    loginMethods() {
      const formData = {
        email: this.email,
        password: this.password,
      };

      this.login(formData);
    },
  },
};
</script>
