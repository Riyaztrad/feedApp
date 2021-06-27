import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';

import feedReducer from './reducers/feedReducer';
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const createStoreAndPersistor = (storage) => {
    const persistConfig = {
        key: 'root',
        storage: storage,
    };
    const store = createStore(
        persistReducer(
            persistConfig,
            combineReducers({
                feedReducer,
            }),
        ),
        composedEnhancer,
    );
    const persistor = persistStore(store);
    return {store, persistor};
};
