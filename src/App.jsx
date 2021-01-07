import React, { Suspense, lazy } from 'react'
import { toast } from 'react-toastify'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import { createBrowserHistory } from 'history'
import Footer from './modules/components/Footer'

import AppNavbar from './modules/components/AppNavbar'
import HeroImage from './modules/components/HeroImage'

// components
const About = lazy(() => import('./modules/views/About'))
const Contact = lazy(() => import('./modules/views/Contact'))
const PrecautionsGallery = lazy(() => import('./modules/views/PrecautionsGallery'))
const PhotoGallery = lazy(() => import('./modules/views/PhotoGallery'))
const VegGallery = lazy(() => import('./modules/views/VegGallery'))
const FridgeProductsGallery = lazy(() => import('./modules/views/FridgeProductsGallery'))
const Testimonials = lazy(() => import('./modules/views/Testimonials'))

const history = createBrowserHistory()

toast.configure({
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true
})
const App = () => {
  return (
    <div className='App'>
      <Router history={history}>
        <AppNavbar />
        <HeroImage />
        <Suspense fallback={<LinearProgress style={{ padding: '10px' }} color="secondary" />}>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/precautions' component={PrecautionsGallery} />
            <Route exact path='/grocery' component={PhotoGallery} />
            <Route exact path='/vegetablesgallery' component={VegGallery} />
            <Route exact path='/fridgegallery' component={FridgeProductsGallery} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App
