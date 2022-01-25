import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";

// Pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from "./Pages/Restaurantpage";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id"
        exact
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/overview"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/menu"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={HomePage}
      />
    </>
  );
}

export default App;
