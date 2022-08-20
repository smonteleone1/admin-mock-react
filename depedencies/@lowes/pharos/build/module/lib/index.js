if (typeof window !== 'undefined') {
    const defineGlobalVars = require('./defineGlobalVariables');
    defineGlobalVars();
    module.exports = {
        configure: require('./methods/configure').default,
        trackError: require('./methods/pharosGlobalMethods').trackError,
        setUser: require('./methods/pharosGlobalMethods').setUser,
        setStore: require('./methods/pharosGlobalMethods').setStore,
        setRelease: require('./methods/pharosGlobalMethods').setRelease,
        setPageDetails: require('./methods/pharosGlobalMethods').setPageDetails,
        trackEvent: require('./methods/trackEvent').default,
        trackClick: require('./methods/customEvents').trackClick,
        trackNavigation: require('./methods/customEvents').trackNavigation
    };
}
else {
    module.exports = {
        configure() {
        },
        trackError() {
        },
        setUser() {
        },
        setStore() {
        },
        setRelease() {
        },
        setPageDetails() {
        },
        trackEvent() {
        },
        trackClick() {
        },
        trackNavigation() {
        },
    };
}
