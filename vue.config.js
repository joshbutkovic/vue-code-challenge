module.exports = {
    publicPath: '/vue-example-app',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/app.scss";`,
            },
        },
    },
};
