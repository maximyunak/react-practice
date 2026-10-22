import { useContext } from "react";
import { CartContext } from "../context/CartContext.tsx";

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart нужно использовать внутри CartProvider");
  return ctx;
};