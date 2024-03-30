import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from './app/store';
import axios from 'axios';
import { handleAxiosRequest, handleAxiosResponse } from './app/axiosConfig';

//Set backend URL
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL
//Set default timeout
axios.defaults.timeout = 30000
//Inject token for authorization
axios.interceptors.request.use(
  handleAxiosRequest,
  error => Promise.reject(error)
)
//Handle Axios Response
axios.interceptors.response.use(
  handleAxiosResponse,
  error => Promise.reject(error)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="426594366144-h8bgvlujcosjkdmcvsfn8acg32jtjjaa.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>,
  </Provider>
);
