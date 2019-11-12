import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withRoot from './modules/withRoot';


// components
import Gallery from './modules/views/Gallery';
import PhotoGallery from './modules/views/PhotoGallery';

import Footer from './modules/components/Footer';

import RecipeReviewCard from './RecipeReviewCard';
import Testimonials from './modules/views/Testimonials'

// context
import About from './About';

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
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default withRoot(App);
