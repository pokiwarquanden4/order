import './App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Loading } from './component/loading/Loading';
import { ReactNotifications } from 'react-notifications-component';
import publicRoutes from './pages';
import HeaderLayout from './layout/Headerlayout/HeaderLayout';

function App() {
  return (
    <Router>
      <div className="App h-100">
        <ReactNotifications></ReactNotifications>
        <Loading></Loading>
        <HeaderLayout>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Page></Page>
                  }
                ></Route>
              );
            })}
          </Routes>
        </HeaderLayout>
      </div>
    </Router>
  );
}

export default App;
