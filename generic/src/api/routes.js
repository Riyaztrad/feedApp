import {post, get} from './requests';
import {getAppConfiguration} from '../config';
import {LOCALES} from '../config';

const getFeeds = () => {
    return get(getAppConfiguration().BASE_URL + LOCALES.endpoints.fetchFeed);
};

const createFeeds = (data) => {
    return post(getAppConfiguration().BASE_URL + LOCALES.endpoints.createFeed, data);
};

export {
    getFeeds,
    createFeeds
};
