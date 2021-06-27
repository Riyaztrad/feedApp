var appConfiguration = null;

export const setAppConfiguration = (config) => {
    appConfiguration = config;
};

export const getAppConfiguration = () => {
    return appConfiguration;
};
export const LOCALES = {
    endpoints: {
        fetch_feed: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-all-feeds',
        create_feed: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/create-feed',
        upload_image: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/image-upload',
        update_feedbyid: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/update-feed-by-Id/',
        get_feedbyCid: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-feed-by-Id/'
    },
    pages: {
        feed: '/feed',
        createFeed: '/create'
    }
};
