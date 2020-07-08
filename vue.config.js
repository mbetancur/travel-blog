module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/common/styles/main.scss";`,
        }
      }
    }
  };