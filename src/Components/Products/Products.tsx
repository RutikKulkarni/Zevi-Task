import { useState } from "react";
import "./Products.scss";
import { Product } from "../../Data/Data";
import Rating from "../Rating/Rating";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ProductsData {
  product: Product;
}
const Products = ({ product }: ProductsData) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);
  const navigate = useNavigate();
  const handleMouseOver = () => {
    setShowViewProduct(true);
  };
  const handleMouseOut = () => {
    setShowViewProduct(false);
  };
  const handleWishlist = () => {
    setIsInWishlist((prev) => !prev);
  };

  return (
    <div className="product_item">
      <div className="img_container">
        <div className="icon">
          {isInWishlist ? (
            <AiFillHeart color="red" onClick={handleWishlist} />
          ) : (
            <AiOutlineHeart color="gray" onClick={handleWishlist} />
          )}
        </div>
        <img
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="img"
          src={product.productImg}
          alt="Product Img"
        />
        {showViewProduct && (
          <div
            className="product"
            onClick={() => navigate("/")}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            View Product
          </div>
        )}
      </div>
      <div>
        {product.productName}
      </div>
      <p>
        <span className="price">Rs. {product.productActualPrice}</span> Rs.{" "}
        {product.productDiscountPrice}
      </p>
      <div className="rating">
        {Rating(product.productRating)} ({product.productsReviews})
      </div>
    </div>
  );
};

export default Products;
