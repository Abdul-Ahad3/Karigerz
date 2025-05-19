
import { createContext, useContext,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { artisans } from '../data/artisans';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ContactArtisanForm from '../components/ContactArtisanForm';
import { ArrowLeft } from 'lucide-react';

/*Context*/

type Product = {
  id: string
  name: string
  price: number
  images: string[]
  artisanId: string
  // Add other product fields you use
}

type CartContextType = {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (itemId: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product])
    alert(`${product.name} has been added to your cart!`)
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <p className="mb-6 text-earthy-stone">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button className="bg-earthy-clay hover:bg-earthy-soil text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const artisan = artisans.find(a => a.id === product.artisanId);
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container-padding max-w-7xl mx-auto py-12">
        {/* Back Button */}
        <Link to="/products" className="flex items-center text-earthy-soil hover:text-earthy-clay transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index} 
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded overflow-hidden ${
                      index === selectedImage ? 'border-earthy-clay' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            <div className="text-sm uppercase font-medium text-earthy-stone mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
            
            <div className="text-2xl text-earthy-clay font-medium mb-6">
              Rs. {product.price}
            </div>
            <div className="text-2xl text-earthy-clay font-medium mb-6">
              In stock: {product.stock}
            </div>
            
            <div className="space-y-6">
              {/* Materials */}
              <div>
                <h3 className="font-medium mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span key={index} className="bg-earthy-sand/30 py-1 px-3 rounded-full text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Story */}
              <div>
                <h3 className="font-medium mb-2">Story Behind the Craft</h3>
                <p className="text-earthy-stone">{product.story}</p>
              </div>
              
              <Separator />
              
              {/* Artisan */}
              {artisan && (
                <div>
                  <h3 className="font-medium mb-2">Created By</h3>
                  <Link to={`/artisans/${artisan.id}`} className="flex items-center space-x-3 hover:bg-earthy-sand/10 p-3 rounded-md transition-colors">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <div className="font-medium">{artisan.name}</div>
                      <div className="text-sm text-earthy-stone">{artisan.hometown}</div>
                    </div>
                  </Link>
                </div>
              )}
              
              <div className="flex gap-4">
                <Button 
                  className="w-full bg-earthy-clay hover:bg-earthy-soil text-white py-6 text-lg"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact Artisans
                </Button>
                <Button 
                  className="w-full bg-earthy-clay hover:bg-earthy-soil text-white py-6 text-lg"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-serif">Contact Artisan</h2>
                  <button 
                    className="text-earthy-stone hover:text-earthy-soil"
                    onClick={() => setShowContactForm(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {artisan && (
                  <ContactArtisanForm 
                    productName={product.name} 
                    artisanName={artisan.name}
                    onClose={() => setShowContactForm(false)}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
