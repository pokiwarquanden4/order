import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Loading } from './component/loading/Loading';
import { ReactNotifications } from 'react-notifications-component';
import publicRoutes from './pages';
import { useEffect } from 'react';
import { useAppDispatch } from './app/hook';
import axios from 'axios';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/login/success', {
          withCredentials: true, // Include cookies for authentication
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true, // Allow sending cookies (if needed by server)
          },
        });

        if (response.status === 200) {
          console.log(response.data); // Access response data instead of resObject
        } else {
          throw new Error('authentication has been failed!');
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  return (
    <Router>
      <div className="App h-100">
        <ReactNotifications></ReactNotifications>
        <Loading></Loading>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
