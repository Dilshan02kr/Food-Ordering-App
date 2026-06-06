import { useContext } from "react";
import CartContext from "../store/CartContext";

import Button from "../components/Button";
import logoImg from "../assets/logo.jpg";

export default function Header() {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>My Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({numberOfCartItems})</Button>
      </nav>
    </header>
  );
}
