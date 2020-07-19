import React, { useEffect } from 'react';
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

// components
import About from './modules/views/About';
import Contact from './modules/views/Contact';
import PhotoGallery from './modules/views/PhotoGallery';
import VegGallery from './modules/views/VegGallery'
import FridgeProductsGallery from './modules/views/FridgeProductsGallery';
import Footer from './modules/components/Footer';
import Testimonials from './modules/views/Testimonials'

import AppNavbar from './modules/components/AppNavbar';
import HeroImage from './modules/components/HeroImage';

const trackingID = "UA-158716028-2"

const history = createBrowserHistory()

const App = () => {
  useEffect(() => {
    ReactGA.initialize(trackingID)
    ReactGA.pageview(`${window.location.pathname}${window.location.search}`); // Record a pageview for the given page
  }, [])

  return  (
    <div className="App">
      <Router history={history}>
        <AppNavbar />
        <HeroImage />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/grocery" component={PhotoGallery} />
          <Route exact path="/vegetablesgallery" component={VegGallery} />
          <Route exact path="/fridgegallery" component={FridgeProductsGallery} />
        </Switch>
        <Footer />
      </Router>
    </div>
)
}

export default App;
