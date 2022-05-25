import { useToast } from "vue-toastification";

const toast = useToast();

export default {
  requestErrorNotification(error) {
    if (
      error.response.data &&
      error.response.data.meta.code == 422 &&
      Object.keys(error.response.data.meta.error_description).length
    ) {
      Object.keys(error.response.data.meta.error_description).forEach((key) => {
        error.response.data.meta.error_description[key].forEach(
          (item, index) => {
            toast.error(error.response.data.meta.error_description[key][index]);
          }
        );
      });
    } else if (error.response.data.meta.error_description) {
      toast.error(error.response.data.meta.error_description);
    } else {
      toast.error(error.response.data.meta.error_message);
    }
  },
  successNotification(message) {
    toast.success(message);
  },
  errorNotification(message) {
    toast.error(message);
  },
  warningNotification(message) {
    toast.warning(message);
  },
};
