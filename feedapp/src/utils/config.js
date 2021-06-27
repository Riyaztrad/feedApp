
const BASE_URL = 'https://api.github.com/';


const _APP_CONFIG = {
    BASE_URL: BASE_URL,
    FETCH_FEED: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-all-feeds',
    CREATE_FEED: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/create-feed',
    UPLOAD_IMAGE: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/image-upload',
    UPDATE_FEED: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/update-feed-by-Id/',
    FETCH_FEEDBYID: 'https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-feed-by-Id/'
};

export const APP_CONFIG = _APP_CONFIG;
