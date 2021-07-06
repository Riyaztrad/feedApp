export {createStoreAndPersistor} from './src/redux/store';
export {
    fetchFeed,
    showCreateDialog,
    fetchDialogVisible,
    uploadimage,
    createFeed,
    createNewFeed,
    likeFeed
} from './src/redux/reducers/feedReducer';

export {
    getFeeds,
} from './src/api/routes';
export {setAppConfiguration, LOCALES} from './src/config';
