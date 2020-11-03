import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HYgCqGKS1GTFkeM6EZXfueV2uA4WUtgqs58Z9ltJyfjzvLX2xK98453Y0cNiDYAbFAJVm6H6DAFfIpTEZWPcHWv00T9O3xvxX"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        //run when the user logged in or was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //run when the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
