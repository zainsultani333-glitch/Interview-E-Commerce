import { useCart } from "../features/cart/useCart";

const CartPage = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

  if (state.items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {state.items.map(item => (
        <div key={item.id} className="flex justify-between border p-4 rounded">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;