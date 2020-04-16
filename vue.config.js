module.exports = {
    publicPath: '/vue-sample-app/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/app.scss";`,
            },
        },
    },
};
