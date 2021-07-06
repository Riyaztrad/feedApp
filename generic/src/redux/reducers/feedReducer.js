import {
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import {getFeeds,upload_image,createFeeds,updateFeedbyid} from '../../api/routes';
import {LOCALES} from '../../config'
const feedAdapter = createEntityAdapter();

const initialState = feedAdapter.getInitialState({
    status: 'idle',
    feeds: [],
    createDialog: false,
    imageUrl:'',
    isCreated:false,
    isLike:false
});
export const fetchFeed = createAsyncThunk(
    'feed/feed',
    async () => {
        try {
            const response = await getFeeds(LOCALES.endpoints.fetch_feed);
            return response;
        } catch (err) {
            return Promise.reject('NETWORK_ERROR');
        }
    },
);

export const uploadimage = createAsyncThunk(
    'feed/uploadImage',
    async (data) => {
        try {
            const response = await upload_image(LOCALES.endpoints.upload_image,data);
            return response;
        } catch (err) {
            return Promise.reject('NETWORK_ERROR');
        }
    },
);
export const createFeed = createAsyncThunk(
    'feed/createFeed',
    async (data) => {
        try {
            const response = await createFeeds(LOCALES.endpoints.create_feed,data);
            return response;
        } catch (err) {
            return Promise.reject('NETWORK_ERROR');
        }
    },
);


export const likeFeed = createAsyncThunk(
    'feed/likeFeed',
    async (data) => {
        try {
            const response = await updateFeedbyid(LOCALES.endpoints.update_feedbyid+data.feedId,data);
            return response;
        } catch (err) {
            return Promise.reject('NETWORK_ERROR');
        }
    },
);

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        showCreateDialog(state, action) {
            state.createDialog = action.payload.isVisible;
        }
    },
    extraReducers: {
        [fetchFeed.fulfilled]: (state, action) => {
            state.feeds = action.payload;
        },
        [uploadimage.fulfilled]: (state, action) => {
            state.imageUrl = action.payload;
        },
        [createFeed.fulfilled]: (state, action) => {
            state.isCreated = action.payload;
        },
        [likeFeed.fulfilled]: (state, action) => {
            state.isLike = action.payload;
        },
    }
});
export const {
    selectAll: selectAllFeed,
    selectById: selectFeedById,
} = feedAdapter.getSelectors((state) => {
    return state.feedReducer;
});
export const fetchDialogVisible = (state) => {
    return state.feedReducer.createDialog
} ;
export const createNewFeed = (state) => {
    return state.feedReducer.isCreated
} ;


export const {
    showCreateDialog,
} = feedSlice.actions;

export default feedSlice.reducer;
