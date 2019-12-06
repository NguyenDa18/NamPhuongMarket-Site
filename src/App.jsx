import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withRoot from './modules/withRoot';

import theme from './modules/theme'
import { ThemeProvider } from '@material-ui/styles'

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
  <ThemeProvider theme={theme}>
  <div className="App">
    <Router>
      <AppNavbar />
      <HeroImage />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/gallery" component={PhotoGallery} />
        <Route exact path="/vegetablesgallery" component={VegGallery} />
        <Route exact path="/fridgegallery" component={FridgeProductsGallery} />
      </Switch>
      <Footer />
    </Router>
  </div>
  </ThemeProvider>
);

export default App;
