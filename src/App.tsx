import { useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import PGPKey from './pages/PGPKey';
import About from './pages/About';
import Contact from './pages/Contact';

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import StreamingStuff from './pages/StreamingStuff';
//import TestPlayground from './pages/TestPlaygroud';

function App() {

  useEffect(() => {
    CookieConsent.run({
      onFirstConsent: ({cookie}) => {
        // Find and execute this function: setupUpCookies();
        // Stupid fix:
        window.location.reload();
        console.log(cookie.consentTimestamp);        
      },
      categories: {
        //necessary: {},
        analytics: {
          enabled: true
        }
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'I use cookies',
              description: 'The cookies are strictly used for analytics. Nothing is sent to anyone. These are only used for my interest in seeeing usage, and what to focus in performance. In other words, you help me with my site, if you enable it.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage Individual preferences'
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              closeIconLabel: 'Close modal',
              sections: [
                /*
                {
                  title: 'Strictly Necessary cookies',
                  description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                  linkedCategory: 'necessary'
                },*/
                {
                  title: 'Performance and Analytics',
                  description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                  linkedCategory: 'analytics'
                }
              ]
            }
          }
        }
      }
    });

  }, [])


  const possibleRoutes = ["/about", "/pgp", "/contact", "/streamingstuff"];
  //<Route path="TestingGround" element={<TestPlayground/>}/>
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="streamingstuff" element={<StreamingStuff/>}/>
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
