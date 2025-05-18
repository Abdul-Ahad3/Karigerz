import React, { createContext, useContext, useState } from "react"

/*Context*/

type Product = {
  id: string
  name: string
  price: number
  image: string
  artisanId: string
  // Add other product fields you use
}

type CartContextType = {
  cartItems: Product[]
  addToCart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}

const CartShop = () => {
    return(
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif mb-6 text-center">Your Cart</h1>
        </div>
      </section>
        </div>
    );
}

export default CartShop;