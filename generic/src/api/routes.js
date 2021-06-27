import {post, get} from './requests';

const getFeeds = (url) => {
    return get(url);
};

const upload_image=(url,data) => {
    return post(url, data);
};
const createFeeds = (url,data) => {
    return post(url, data);
};

export {
    getFeeds,
    createFeeds,
    upload_image
};
