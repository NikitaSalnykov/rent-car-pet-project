import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
