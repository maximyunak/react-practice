import { createContext, type ReactNode, useState } from "react";
import type { Product } from "../mock/products.ts";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  totalCount: number;
  subtotal: number;
  addItem: (product: Product) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextValue | null>(null)

export const CartProvider = ({children}: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) {
      setItems(
        items.map((i) =>
          i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i,
        ),
      );
    } else {
      setItems([...items, {product, quantity: 1}]);
    }
  };

  const setQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(
      items.map((i) => (i.product.id === id ? {...i, quantity} : i)),
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i.product.id !== id));
  };

  const clear = () => setItems([]);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{items, totalCount, subtotal, addItem, setQuantity, removeItem, clear}}
    >
      {children}
    </CartContext.Provider>
  );
};

