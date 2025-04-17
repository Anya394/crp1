
    
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Корзина</h2>
    {products.filter(p => p.quantityInCart > 0).length === 0 ? (
      <p>Корзина пуста</p>
    ) : (
      <ul>
        {products.filter(p => p.quantityInCart > 0).map(product => (
          <li key={product.id} className="mb-2">
            {product.name} - {product.quantityInCart} шт. × {product.price.toLocaleString()} ₽ = 
            <span className="font-semibold"> {(product.quantityInCart * product.price).toLocaleString()} ₽</span>
          </li>
        ))}
      </ul>
    )}
    
    <div className="mt-4 font-bold text-lg">
      Итого: {products.reduce((sum, product) => sum + (product.price * product.quantityInCart), 0).toLocaleString()} ₽
    </div>
  </div>