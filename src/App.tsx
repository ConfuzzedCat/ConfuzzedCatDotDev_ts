import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PGPKey from './pages/PGPKey';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const possibleRoutes = ["/about", "/pgp", "/contact"];
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
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
