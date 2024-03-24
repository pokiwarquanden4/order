import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Loading } from './component/loading/Loading';
import { ReactNotifications } from 'react-notifications-component';
import publicRoutes from './pages';
import HeaderLayout from './layout/Headerlayout/HeaderWithSearchLayout';

function App() {
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
