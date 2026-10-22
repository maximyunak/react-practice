import { Link } from "react-router-dom";
import { CartItemRow } from "../components/CartItemRow.tsx";
import { formatPrice } from "../utils/formatPrice.ts";
import { useCart } from "../utils/useCart.ts";

const DELIVERY_PRICE = 290;
const FREE_DELIVERY_FROM = 5000;

const pluralize = (n: number, one: string, few: string, many: string) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

export const CartPage = () => {
  const { items, totalCount, subtotal, setQuantity, removeItem } = useCart();

  const isFreeDelivery = subtotal >= FREE_DELIVERY_FROM;
  const delivery = isFreeDelivery ? 0 : DELIVERY_PRICE;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    // TODO: оформление заказа
  };

  return (
    <div className="page container">
      <h1 className="page__title">Корзина</h1>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty__text">В корзине пока пусто.</p>
          <Link to="/catalog" className="button">
            Перейти в каталог
          </Link>
        </div>
      ) : (
        <>
          <p className="page__subtitle">
            {totalCount} {pluralize(totalCount, "товар", "товара", "товаров")},
            которые сделают дом уютнее
          </p>

          <div className="cart">
            <div>
              <ul className="cart__list">
                {items.map((item) => (
                  <CartItemRow
                    key={item.product.id}
                    item={item}
                    onQuantityChange={setQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </ul>

              <Link to="/catalog" className="cart__back">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M12 7H2M6 3L2 7l4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Продолжить покупки
              </Link>
            </div>

            <aside className="summary" aria-label="Итого">
              <h2 className="summary__title">Ваш заказ</h2>

              <div className="summary__row summary__row--muted">
                <span>Товары, {totalCount} шт.</span>
                <span className="summary__value">{formatPrice(subtotal)}</span>
              </div>
              <div className="summary__row summary__row--muted">
                <span>Доставка</span>
                <span className="summary__value">
                  {isFreeDelivery ? "Бесплатно" : formatPrice(delivery)}
                </span>
              </div>

              <div className="summary__total">
                <span>Итого</span>
                <span className="summary__total-price">{formatPrice(total)}</span>
              </div>

              <button
                type="button"
                className="button button--block"
                onClick={handleCheckout}
              >
                Оформить заказ
              </button>

              <p className="summary__note">
                {isFreeDelivery
                  ? `В вашем заказе уже есть бесплатная доставка — она действует от ${formatPrice(FREE_DELIVERY_FROM)}.`
                  : `Добавьте товаров на ${formatPrice(FREE_DELIVERY_FROM - subtotal)}, и доставка будет бесплатной.`}
              </p>
            </aside>
          </div>
        </>
      )}
    </div>
  );
};