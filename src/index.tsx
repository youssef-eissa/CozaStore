import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { SearchStateReducer } from './components/Redux/SearchOpen';
import { ProductIDReducer } from './components/Redux/ProductID';
import { OpenOverviewReducer } from './components/Redux/OpenOverview';



const client = new QueryClient()

const persistConfig = {
  key: 'root',
  version: 1,
  whitelist: [''],
  storage,
};
const reducer = combineReducers({
  SearchOpen: SearchStateReducer,
  ProductID: ProductIDReducer,
  OpenOverview:OpenOverviewReducer
})
const PersistReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: PersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <QueryClientProvider client={client}>
  <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
  </BrowserRouter>
    </QueryClientProvider>
);


reportWebVitals();
