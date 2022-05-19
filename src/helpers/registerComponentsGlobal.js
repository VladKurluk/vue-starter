export const registerComponentsGlobal = (vm) => {
  try {
    // Require reusable component context
    const requireComponent = require.context(
      "../components/reusable/",
      true,
      /[\w-]+\.vue$/
    );

    requireComponent.keys().forEach((filePath) => {
      // Get component config
      const componentConfig = requireComponent(filePath);
      // Get filename from the filePath
      const fileName = filePath.split("/").slice(-1)[0];
      // Remove file extension
      const componentName = fileName.replace(/\.\w+$/, "");
      // Register component globally
      vm.component(componentName, componentConfig.default || componentConfig);
    });
  } catch (err) {
    console.log("Reusable component registration failed");
    console.error(err);
  }
};
