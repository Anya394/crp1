import useProducts from '@/entities/ProductsStorage';
import { useCart } from '@/hooks/useCart';

export function CatalogToCartBridge() {
  const { addToCart, removeFromCart, removePositionFromCart } = useCart();
  const products = useProducts(state => state.products);

  // Функция для добавления товара из Zustand в Redux корзину
  const addToCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image
      });
    }
  };

  const removeFromCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      removeFromCart(
        product.id
      );
    }
  };

  const removePositionFromCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      removePositionFromCart(
        product.id
      );
    }
  };

  return { addToCartReduxCart, removeFromCartReduxCart, removePositionFromCartReduxCart };
}