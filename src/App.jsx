import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PGPKey from './pages/PGPKey';
import About from './pages/About';

function App() {
  const possibleRoutes = ["/about", "/pgp"];
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="pgp" element={<PGPKey/>}/>
          <Route path="*" element={<PageNotFound possibleRoutes={possibleRoutes}/>} /> 
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={routes} />
  );
}

export default App
