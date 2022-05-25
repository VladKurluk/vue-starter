/* https://github.com/Maronato/vue-toastification/tree/next#features */
import { app } from "@/main";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 4000,
};

app.use(Toast, options);
