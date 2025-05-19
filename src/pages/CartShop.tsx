import { Button } from "react-day-picker"
import { useCart } from "./ProductDetail"

const CartShop = () => {
  const { cartItems } = useCart()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif mb-6 text-center">Your Cart</h1>
        </div>
      </section>
      <br />
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="flex gap-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-4 rounded">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Rs.{item.price}</p>
              <img src={item.images[0]} alt={item.name} className="w-32 h-32 object-cover mt-2" />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartShop
