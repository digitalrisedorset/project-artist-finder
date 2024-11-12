import React from 'react';
import {App} from './global/components/App';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from "react-redux";
import { store } from './state'
import { apolloClient } from './apolloclient'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <ApolloProvider client={apolloClient}>
                  <App />
              </ApolloProvider>
          </QueryClientProvider>
      </Provider>
  </React.StrictMode>
);
