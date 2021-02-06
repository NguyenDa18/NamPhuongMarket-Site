import React, { Suspense, lazy } from "react";
import ReactGA from "react-ga";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createBrowserHistory } from "history";
import Footer from "./modules/components/Footer";

import AppNavbar from "./modules/components/AppNavbar";
import HeroImage from "./modules/components/HeroImage";

// components
const About = lazy(() => import("./modules/views/About"));
const Contact = lazy(() => import("./modules/views/Contact"));
const GroceryGallery = lazy(() => import("./modules/views/GroceryGallery"));
const NonFoodsGallery = lazy(() => import("./modules/views/NonFoodsGallery"))
const VegGallery = lazy(() => import("./modules/views/VegGallery"));
const FridgeProductsGallery = lazy(() =>
  import("./modules/views/FridgeProductsGallery")
);
const Testimonials = lazy(() => import("./modules/views/Testimonials"));
const NotFound = lazy(() => import("./modules/views/NotFound"));

const history = createBrowserHistory();

const trackingID = "UA-158716028-2";
history.listen((location) => {
  ReactGA.initialize(trackingID, {
    titleCase: false,
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
});

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
});
const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <AppNavbar />
        <HeroImage />
        <Suspense
          fallback={
            <LinearProgress style={{ padding: "10px" }} color="secondary" />
          }
        >
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/grocery" component={GroceryGallery} />
            <Route exact path="/nonfoods" component={NonFoodsGallery} />
            <Route exact path="/vegetablesgallery" component={VegGallery} />
            <Route
              exact
              path="/fridgegallery"
              component={FridgeProductsGallery}
            />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
