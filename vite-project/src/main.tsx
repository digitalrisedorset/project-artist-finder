import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './global/components/App';
import { config } from './config';
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from "react-redux";
import { store } from './state'
import Axios from "axios"
import { apolloClient } from './apolloclient'

const queryClient = new QueryClient()

Axios.defaults.baseURL = config.nodejsEndpoint;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <QueryClientProvider client={queryClient}>
              <ApolloProvider client={apolloClient}>
                  <App />
              </ApolloProvider>
          </QueryClientProvider>
      </Provider>
  </StrictMode>,
)
