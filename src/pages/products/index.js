import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/Cart/action";
import { getProducts } from "../../reducers/Products/action";
import styles from "./styles.module.css";

function ProductsContent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  function handleAddToCart(product) {
    console.log("Handle Add To Cart");
    dispatch(addToCart(product));
  }
  const { product } = useSelector((state) => state.Products);
  return (
    <div className={styles.ProductsContainer}>
      {product?.map((product) => (
        <div className={styles.card} key={product.id}>
          <div className={styles.cardContainer}>
            <img src={product.image_link} className={styles.cardImage} />
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.cardRating}>
              {new Array(product?.rating).fill("⭐").map((star, index) => (
                <span key={index} className={styles.star}>
                  {star}
                </span>
              ))}
            </div>
            <div className={styles.productPrice}>$ {product.price}</div>
            <button
              className={styles.HandleCartButton}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsContent;
