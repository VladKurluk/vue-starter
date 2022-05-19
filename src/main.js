import { createApp } from "vue";
import App from "./App.vue";
// Uncomented this line, if needed support PWA
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { registerComponentsGlobal, loadPlugins } from "@/helpers";

export const app = createApp(App);

/**
 * Automatically load Vue plugins
 */
loadPlugins([]);

/**
 * Automatically import and register components globaly
 */
registerComponentsGlobal(app);

app.use(store).use(router).mount("#app");
