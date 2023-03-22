import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { addToCart, removeFromCart } from "../../reducers/Cart/action";
import { Link } from "react-router-dom";

function Cart() {
  let dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.HandleCart);
  const { isAuth } = useSelector((state) => state.Auth);

  function handleAddToCart(cartItems) {
    dispatch(addToCart(cartItems));
  }
  function handleRemoveFromCart(cartItems) {
    dispatch(removeFromCart(cartItems));
  }
  return cartItems.length > 0 ? (
    <div className={styles.ProductsContainer}>
      {cartItems?.map((cartItem) => (
        <div className={styles.card} key={cartItem.id}>
          <div className={styles.cardContainer}>
            <img src={cartItem.image_link} className={styles.cardImage} />
            <div className={styles.cartItemsName}>{cartItem.name}</div>
            <div className={styles.cardRating}>
              {new Array(cartItem?.rating).fill("⭐").map((star, index) => (
                <span key={index} className={styles.star}>
                  {star}
                </span>
              ))}
            </div>
            <div className={styles.cartItemsPrice}>$ {cartItem.price}</div>
            <div className={styles.quantityContainer}>
              <button
                onClick={() => handleRemoveFromCart(cartItem)}
                className={styles.removeFromCartButton}
              >
                -
              </button>
              <div className={styles.quantityDisplay}>{cartItem.quantity}</div>
              <button
                onClick={() => handleAddToCart(cartItem)}
                className={styles.addToCartButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.emptyCart}>
      Cart empty!
      <Link to={"/products"} className={styles.addToEmptyCart}>
        Add products to cart
      </Link>
    </div>
  );
}

export default Cart;
