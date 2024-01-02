import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PGPKey from './pages/PGPKey';
function App() {
  const possibleRoutes = ["/about", "/links", "/pgp"];
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {
            //<Route path='pets' element={<ViewPets isAdmin={isAdmin} />}/>
          }
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
