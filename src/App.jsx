import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import About from './modules/views/About';
import PhotoGallery from './modules/views/PhotoGallery';
import VegGallery from './modules/views/VegGallery'
import FridgeProductsGallery from './modules/views/FridgeProductsGallery'

import Footer from './modules/components/Footer';
import Testimonials from './modules/views/Testimonials'

import AppNavbar from './modules/components/AppNavbar';
import HeroImage from './modules/components/HeroImage';

const App = () => (
      <div className="App">
        <Router>
          <AppNavbar />
          <HeroImage />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/grocery" component={PhotoGallery} />
            <Route exact path="/vegetablesgallery" component={VegGallery} />
            <Route exact path="/fridgegallery" component={FridgeProductsGallery} />
          </Switch>
          <Footer />
        </Router>
      </div>
);

export default App;
