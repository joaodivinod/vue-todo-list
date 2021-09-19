module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
          @import "@/scss/_main.scss";
          @import "@/scss/_mixins.scss";
        `
            }
        }
    }
};