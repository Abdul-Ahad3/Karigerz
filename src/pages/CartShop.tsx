import { Button } from "@/components/ui/button"
import { useCart } from "./ProductDetail"

const CartShop = () => {
  const { cartItems, removeFromCart } = useCart()

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
        <ul className="flex overflow-x-auto gap-6 px-6 py-8">
          {cartItems.map((item, index) => (
          <li
            key={index}
            className="min-w-[250px] max-w-xs flex-shrink-0 border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
          >     
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">Rs. {item.price}</p>
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <div className="flex flex-col gap-3">
              <Button className="bg-earthy-clay hover:bg-earthy-soil text-white py-2 text-lg">
                Buy
              </Button>

              <Button 
                className="bg-red-500 hover:bg-red-600 text-white py-2 text-lg"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>

          </li>
          ))}
        </ul>

      )}
    </div>
  )
}

export default CartShop
