var appConfiguration = null;

export const setAppConfiguration = (config) => {
    appConfiguration = config;
};

export const getAppConfiguration = () => {
    return appConfiguration;
};
export const LOCALES = {
    endpoints: {
        fetchFeed:'users/hacktivist123/repos',
        createFeed:'users/hacktivist123/create'
    },
    pages: {
        feed: '/feed',
        createFeed: '/create'
    }
};
