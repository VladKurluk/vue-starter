<template>
  <div>
    <component :is="currentLayoutComponent" v-if="currentLayoutComponent">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const layoutComponents = {
  main: MainLayout,
  auth: AuthLayout,
};

export default {
  name: "App",
  computed: {
    currentLayoutComponent() {
      const layout = this.$router.currentRoute.value?.meta?.layout || "main";
      return layoutComponents[layout];
    },
  },
  methods: {},
};
</script>
