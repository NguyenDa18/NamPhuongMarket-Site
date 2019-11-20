import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withRoot from './modules/withRoot';


// components
import About from './modules/views/About';
import PhotoGallery from './modules/views/PhotoGallery';
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
        <Route exact path="/gallery" component={PhotoGallery} />
        <Route exact path="/fridgegallery" component={FridgeProductsGallery} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default App;
