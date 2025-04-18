import useProducts from '@/entities/ProductsStorage';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, removePositionFromCart } from '@/entities/CartStorage';

export function CatalogToCartBridge() {
  const products = useProducts(state => state.products);
  const dispatch = useDispatch();

  // Функция для добавления товара из Zustand в Redux корзину
  const addToCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image
      }));
    }
  };

  const removeFromCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(removeFromCart(
        product.id
      ));
    }
  };

  const removePositionFromCartReduxCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      dispatch(removePositionFromCart(
        product.id
      ));
    }
  };

  return { addToCartReduxCart, removeFromCartReduxCart, removePositionFromCartReduxCart };
}