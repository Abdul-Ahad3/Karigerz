
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'pottery', name: 'Pottery' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'woodwork', name: 'Woodwork' }
  ];

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [categoryParam, activeCategory]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif mb-6 text-center">Our Handcrafted Products</h1>
          <p className="text-center max-w-2xl mx-auto text-earthy-stone text-lg mb-12">
            Explore our collection of authentic handcrafted treasures made by traditional artisans across Pakistan
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id 
                  ? "bg-earthy-clay hover:bg-earthy-soil text-white" 
                  : "text-earthy-soil hover:text-earthy-clay"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container-padding max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-xs font-medium text-earthy-stone mb-1 uppercase">{product.category}</div>
                        <h3 className="font-medium mb-2 text-lg">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-earthy-clay">${product.price}</span>
                          <div className="flex flex-wrap gap-1">
                            {product.materials.slice(0, 2).map((material, index) => (
                              <span key={index} className="text-xs bg-earthy-sand/30 py-1 px-2 rounded-full">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-earthy-stone mb-6">Try selecting a different category or check back later.</p>
              <Button 
                onClick={() => setActiveCategory('all')}
                className="bg-earthy-clay hover:bg-earthy-soil text-white"
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
