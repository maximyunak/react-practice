import { Link } from "react-router-dom";
import type { Product } from "../mock/products.ts";
import { formatPrice } from "../utils/formatPrice.ts";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <article className="product-card">
      <Link to={`/catalog/${product.id}`} className="product-card__image-link">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      <Link to={`/catalog/${product.id}`} className="product-card__title">
        {product.title}
      </Link>
      <p className="product-card__meta">{product.subtitle}</p>

      <div className="product-card__bottom">
        <span className="product-card__price">{formatPrice(product.price)}</span>
        <button
          type="button"
          className="button product-card__button"
          onClick={() => onAddToCart?.(product)}
        >
          В корзину
        </button>
      </div>
    </article>
  );
};