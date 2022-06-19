import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../Stateprovider";
import { auth } from "../firebaseS";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleauthen = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="/images/amazone.png"></img>
      </Link>

      <div className="header-search">
        <input className="header-searchinput" type="text"></input>
        <SearchIcon className="header-searchicon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleauthen} className="header-option">
            <span className="header-optionone">{user?.email}</span>
            <span className="header-optiontwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionone">Return</span>
          <span className="header-optiontwo">& Order</span>
        </div>
        <div className="header-option">
          <span className="header-optionone">Your</span>
          <span className="header-optiontwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-backeticon">
            <ShoppingCartIcon />
            <span className="header-optiontwo header-basketcount">
              {" "}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
