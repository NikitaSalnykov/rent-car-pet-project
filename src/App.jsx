import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import ErrorPage from 'pages/ErrorPage/ErrorPage';;

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
