import cartImage from "../../images/cart-icon.svg";
import "./styles/cart.scss";
import { listData } from "../../content/staticContent";
import { useState, useRef, useEffect } from "react";

const Cart = ({ totalCartItems }) => {
  const [showCart, setShowCart] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const cartRef = useRef(null);

  // const totalNumberOfItems = totalCartItems
  //   .map((itemId) => {
  //     const item = listData.find((data) => data.id === itemId);
  //     return item
  //       ? { name: item.name, image: item.image, amount: item.amount }
  //       : null;
  //   })
  //   .filter(Boolean);

const itemCounts = {};

totalCartItems.forEach((itemId) => {
  if (itemCounts[itemId]) {
    itemCounts[itemId]++;
  } else {
    itemCounts[itemId] = 1;
  }
});



const totalNumberOfItems = Object.keys(itemCounts)
  .map((itemId) => {
    const item = listData.find((data) => data.id === itemId);
    return item
      ? { name: item.name, image: item.image, amount: item.amount, itemCount: itemCounts[itemId] }
      : null;
  })
  .filter(Boolean);


  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setShowCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCartClick = (event) => {
    event.stopPropagation();
  };

  const displayItems = totalNumberOfItems.map(
    ({ name, image, amount, itemCount }, index) => (
      <div key={index} className="cart-item-name">
        <div className="cart-item-left">
          <img height="33" width="33" src={image} alt={name} />
          {name} {itemCount > 1 && <small className="number-of-items-in-cart">₹{amount} x {itemCount}</small>}
        </div>
        <small>₹{amount * itemCount}</small>
      </div>
    )
  );

  useEffect(() => {
    setTotalAmount(totalNumberOfItems.reduce((sum, item) => sum + Number(item.amount * item.itemCount), 0));
  }, [totalNumberOfItems]);

  return (
    <div
      ref={cartRef}
      className={`cart ${showCart && "is-active"}`}
      onClick={handleShowCart}
    >
      <img className="cart-image" src={cartImage} alt="Cart Icon" />
      {totalCartItems.length > 0 && (
        <div className="cart-item">{totalCartItems.length}</div>
      )}
      <div className="cart-name">Cart</div>
      <div className="cart-items" onClick={handleCartClick}>
        {totalNumberOfItems.length > 0 ? (
          <div className="cart-item-list">
            {displayItems}
            <div className="cart-item-name">
              <div className="cart-item-left">Total amout:</div>
              <div className="cart-item-right">₹{totalAmount}</div>
            </div>
            <a href="/checkout" className="checkout">
              Checkout
            </a>
          </div>
        ) : (
          <div className="cart-empty">
            <strong>Your cart is empty.</strong>
            <small>Delicious food is always being prepared!</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
