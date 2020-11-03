import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  //This code run when the user wants to logged out from the app
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgFQg-a06HyjCkdZIZc4CGawQocLSEhQPbAg&usqp=CAU"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* for this, if there is no user logged in, go to the login page
        But if a user is already logged in just change the sig-out to sign-in  */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__options">
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span
              className="header__optionLineTwo 
          header__basketCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
