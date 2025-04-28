
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { artisans } from '../data/artisans';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.filter(product => product.featured);
  const sliderIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle automatic slider
  const startSlider = () => {
    sliderIntervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  // Set up and clean up the slider interval
  useEffect(() => {
    startSlider();
    return () => {
      if (sliderIntervalRef.current) {
        clearInterval(sliderIntervalRef.current);
      }
    };
  }, []);

  // Reset interval when slide changes manually
  const goToSlide = (index: number) => {
    if (sliderIntervalRef.current) {
      clearInterval(sliderIntervalRef.current);
    }
    setCurrentSlide(index);
    startSlider();
  };

  const heroProducts = [
    { 
      category: "Textiles", 
      image: "https://images.unsplash.com/photo-1561578428-5d58d0d965ec",
      description: "Handwoven fabrics and embroidery with cultural significance."
    },
    { 
      category: "Pottery", 
      image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9",
      description: "Clay artistry shaped by traditions centuries old."
    },
    { 
      category: "Jewelry", 
      image: "https://images.unsplash.com/photo-1523252012848-c22188792c27",
      description: "Intricate metalwork showcasing ancient techniques."
    },
    { 
      category: "Woodwork", 
      image: "https://plus.unsplash.com/premium_photo-1675623430998-09ba22e11fab",
      description: "Carved treasures from sustainable local woods."
    }
  ];

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-screen">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${product.images[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                  From Skilled Hands to Your Home
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  Discover authentic handcrafted treasures made by traditional artisans
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/products">
                    <Button className="text-lg bg-earthy-clay hover:bg-earthy-soil text-white border-0 px-8 py-6">
                      Explore Products
                    </Button>
                  </Link>
                  <Link to="/artisans">
                    <Button variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/20 px-8 py-6">
                      Meet Our Artisans
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-earthy-cream py-16 md:py-24">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-earthy-soil mb-6">Our Mission</h2>
              <p className="text-lg mb-4 text-earthy-soil/90">
                Karigarz connects traditional artisans from remote areas of Pakistan with a global audience, preserving cultural heritage and supporting sustainable livelihoods.
              </p>
              <p className="text-lg mb-6 text-earthy-soil/90">
                Every product tells a unique story of craftsmanship passed down through generations, keeping ancient techniques alive in our modern world.
              </p>
              <Link to="/about" className="inline-flex items-center font-medium text-earthy-clay hover:text-earthy-soil transition-colors group">
                Learn more about our story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617691763432-a78ef6db7272" 
                alt="Artisan at work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded shadow-lg hidden md:block">
                <p className="text-earthy-soil font-serif italic">
                  "Each thread I weave carries the stories of my ancestors."
                </p>
                <p className="text-right text-sm mt-2 text-earthy-soil/70">- Noor Bibi, Master Weaver</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Discover Our Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroProducts.map((item, index) => (
              <Link to={`/products?category=${item.category.toLowerCase()}`} key={index}>
                <Card className="overflow-hidden h-[420px] group">
                  <div className="relative h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-serif mb-2">{item.category}</h3>
                      <p className="text-white/80 mb-4">{item.description}</p>
                      <span className="inline-flex items-center text-earthy-sand">
                        Explore collection <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-earthy-sand/20 py-16 md:py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Featured Creations</h2>
            <Link to="/products" className="text-earthy-clay hover:text-earthy-soil transition-colors inline-flex items-center">
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow group">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-medium text-earthy-stone mb-1 uppercase">{product.category}</div>
                      <h3 className="font-medium mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-earthy-clay">${product.price}</span>
                        <span className="text-sm text-earthy-stone">by {
                          artisans.find(a => a.id === product.artisanId)?.name
                        }</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621112904887-419379ce6824" 
            alt="Background texture" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container-padding max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Meet Our Artisans</h2>
            <p className="max-w-2xl mx-auto text-earthy-stone">
              Behind every handcrafted piece is a person with unique skills and stories. Discover the talented individuals who create our treasures.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/artisans">
              <Button className="bg-earthy-clay hover:bg-earthy-soil text-white">
                View All Artisans <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-earthy-soil text-white py-16 md:py-24">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Impact</h2>
          
          <blockquote className="text-xl md:text-2xl italic font-serif mb-6">
            "Working with Karigarz has allowed me to reach customers I never thought possible. Now my family's craft tradition will continue for another generation."
          </blockquote>
          
          <cite className="block text-earthy-sand not-italic">
            — Mohammad Khalil, Potter from Multan
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-earthy-cream">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Looking for Something Special?</h2>
          <p className="text-lg mb-8">
            Our artisans can create custom pieces tailored to your specific preferences and needs.
          </p>
          <Link to="/customize">
            <Button className="bg-earthy-clay hover:bg-earthy-soil text-white text-lg px-8 py-6">
              Request Custom Creation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
