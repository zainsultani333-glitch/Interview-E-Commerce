import { useParams } from "react-router-dom";
import products from "../features/products/data/mockProducts";
import { useCart } from "../features/cart/useCart";

const ProductPage = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  const addToCart = () => dispatch({ type: "ADD_ITEM", payload: product });

  return (
    <div className="space-y-4">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={addToCart} className="px-4 py-2 bg-black text-white rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;