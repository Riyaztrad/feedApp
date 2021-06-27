
import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {
  createStoreAndPersistor,
  setAppConfiguration,
  LOCALES,
} from 'generic';
import storage from 'redux-persist/lib/storage';
import {APP_CONFIG} from './utils/config';
import {Router} from './navigation';
import './index.css'
const {persistor, store} = createStoreAndPersistor(storage);
function App() {
  useEffect(() => {
    global.locales = LOCALES;
    global.config = APP_CONFIG;
    setAppConfiguration(APP_CONFIG);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="back">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
