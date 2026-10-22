import { Link } from "react-router-dom";
import type { CartItem } from "../context/CartContext.tsx";
import { formatPrice } from "../utils/formatPrice.ts";

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItemRow = ({
                              item,
                              onQuantityChange,
                              onRemove,
                            }: CartItemRowProps) => {
  const { product, quantity } = item;

  return (
    <li className="cart-item">
      <Link to={`/catalog/${product.id}`} className="cart-item__image-link">
        <img className="cart-item__image" src={product.image} alt={product.title} />
      </Link>

      <div className="cart-item__info">
        <Link to={`/catalog/${product.id}`} className="cart-item__title">
          {product.title}
        </Link>
        <p className="cart-item__meta">{product.subtitle}</p>
        <p className="cart-item__unit">{formatPrice(product.price)} / шт.</p>
      </div>

      <div className="quantity" role="group" aria-label={`Количество: ${product.title}`}>
        <button
          type="button"
          className="quantity__button"
          aria-label="Уменьшить количество"
          onClick={() => onQuantityChange(product.id, quantity - 1)}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
        <span className="quantity__value" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          className="quantity__button"
          aria-label="Увеличить количество"
          onClick={() => onQuantityChange(product.id, quantity + 1)}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <span className="cart-item__price">
        {formatPrice(product.price * quantity)}
      </span>

      <button
        type="button"
        className="cart-item__remove"
        aria-label={`Удалить: ${product.title}`}
        onClick={() => onRemove(product.id)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.5 4h11M6 4V2.5h4V4M4 4l.6 9h6.8L12 4M6.5 6.5v4.5M9.5 6.5v4.5"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};