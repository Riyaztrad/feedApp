import {
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import {getFeeds} from '../../api/routes';
const feedAdapter = createEntityAdapter();

const initialState = feedAdapter.getInitialState({
    status: 'idle',
    feeds: [],
    createDialog: false
});
export const fetchFeed = createAsyncThunk(
    'feed/feed',
    async () => {
        try {
            const response = await getFeeds();
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
}
    ;


export const {
    showCreateDialog,
} = feedSlice.actions;

export default feedSlice.reducer;
