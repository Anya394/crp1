"use client"

import ProductCard from '../entities/ProductCard';
import useProducts from '../entities/ProductsStorage';

export default function Catalog() {
  const { products } = useProducts();

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Каталог космических кораблей</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}