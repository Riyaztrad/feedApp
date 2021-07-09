import {post, get, put} from './requests';

const getFeeds = (url) => {
    return get(url);
};

const upload_image = (url, data) => {
    return post(url, data);
};
const createFeeds = (url, data) => {
    return post(url, data);
};
const updateFeedbyid = (url, data) => {
    return put(url, data);
};

export {
    getFeeds,
    createFeeds,
    upload_image,
    updateFeedbyid
};
