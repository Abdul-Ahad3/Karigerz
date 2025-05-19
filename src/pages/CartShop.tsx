import { Button } from "@/components/ui/button";
import { useCart } from "./ProductDetail";
import BuyForm from "@/components/BuyForm";
import { useState } from "react";
import { artisans } from "@/data/artisans"; 

const CartShop = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyClick = (item) => {
    setSelectedProduct(item);
    setShowBuyForm(true);
  };

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
                <Button
                  className="bg-earthy-clay hover:bg-earthy-soil text-white py-2 text-lg"
                  onClick={() => handleBuyClick(item)}
                >
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

      {/* Buying Form Modal */}
      {showBuyForm && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif">Buy Now</h2>
                <button
                  className="text-earthy-stone hover:text-earthy-soil"
                  onClick={() => {
                    setShowBuyForm(false);
                    setSelectedProduct(null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <BuyForm
                productName={selectedProduct.name}
                artisanName={
                  artisans.find(a => a.id === selectedProduct.artisanId)?.name || 'Unknown'
                }
                onClose={() => {
                  setShowBuyForm(false);
                  setSelectedProduct(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartShop;
