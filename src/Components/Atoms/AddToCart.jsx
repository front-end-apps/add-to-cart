import "./styles/add-to-cart.scss";

function AddToCart({ itemCount, onMoreItem, onLessItem }) {
  return (
    <>
      {itemCount < 1 ? (
        <button className="add-to-cart" onClick={onMoreItem}>
          Add to Cart
        </button>
      ) : (
        <button className="add-to-cart item-added">
          <small onClick={onLessItem}>-</small>
          {itemCount}
          <small onClick={onMoreItem}>+</small>
        </button>
      )}
    </>
  );
}

export default AddToCart;
