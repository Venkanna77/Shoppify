import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle"> Shoppify </h2>
      </div>
      <div className="header_search">
        <input type="search" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <div className="nav_itemBasket">
          <ShoppingBasketIcon />
          <span className="nav_itemLineTwo nav_basketCount">0</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
