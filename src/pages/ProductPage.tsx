import { Link, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { PRODUCTS } from "../mock/products.ts";
import { formatPrice } from "../utils/formatPrice.ts";
import { useCart } from "../utils/useCart.ts";

export const ProductPage = () => {
  const {id} = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  const {addItem} = useCart()

  const handleAddToCart = () => {
    if (!product) return
    addItem(product)
  };

  if (!product) {
    return (
      <div className="page container">
        <Breadcrumbs
          items={[
            {label: "Главная", to: "/"},
            {label: "Каталог", to: "/catalog"},
            {label: "Товар не найден"},
          ]}
        />
        <h1 className="page__title">Товар не найден</h1>
        <p className="catalog__empty">
          Возможно, он закончился или ссылка устарела.{" "}
          <Link to="/catalog" className="link">
            Вернуться в каталог
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="page container">
      <Breadcrumbs
        items={[
          {label: "Главная", to: "/"},
          {label: "Каталог", to: "/catalog"},
          {label: product.title},
        ]}
      />

      <section className="product">
        <img className="product__image" src={product.image} alt={product.title}/>

        <div className="product__info">
          <p className="product__meta">
            {product.category} / Артикул {product.sku}
          </p>
          <h1 className="product__title">{product.title}</h1>
          <p className="product__description">{product.description}</p>

          <div className="product__buy">
            <span className="product__price">{formatPrice(product.price)}</span>
            <span className="product__stock">
              {product.inStock ? "В наличии" : "Нет в наличии"}
            </span>
          </div>

          <button
            type="button"
            className="button button--block"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            В корзину
          </button>

          <p className="product__delivery">
            Доставка от 290 ₽ · Бесплатно при заказе от 5 000 ₽
          </p>

          <dl className="product__details">
            {product.details.map((item) => (
              <div key={item.label} className="product__row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
};