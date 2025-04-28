
import { useParams, Link } from 'react-router-dom';
import { artisans } from '../data/artisans';
import { products } from '../data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, ArrowLeft } from 'lucide-react';

const ArtisanDetail = () => {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === id);
  
  if (!artisan) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Artisan Not Found</h2>
          <p className="mb-6 text-earthy-stone">The artisan you're looking for doesn't exist or has been removed.</p>
          <Link to="/artisans">
            <Button className="bg-earthy-clay hover:bg-earthy-soil text-white">
              Back to Artisans
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Find products by this artisan
  const artisanProducts = products.filter(product => product.artisanId === artisan.id);
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container-padding max-w-7xl mx-auto py-12">
        {/* Back Button */}
        <Link to="/artisans" className="flex items-center text-earthy-soil hover:text-earthy-clay transition-colors mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back to Artisans
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Artisan Image */}
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={artisan.image} 
                alt={artisan.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="mt-8 bg-earthy-soil text-white p-8 rounded-lg">
              <h3 className="text-xl font-serif mb-4">In Their Words</h3>
              <p className="font-serif italic text-lg">"{artisan.quote}"</p>
            </div>
          </div>
          
          {/* Artisan Details */}
          <div>
            <div className="bg-earthy-sand/30 text-earthy-soil text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
              {artisan.specialty}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif mb-3">{artisan.name}</h1>
            
            <div className="flex items-center text-earthy-stone mb-6">
              <MapPin size={16} className="mr-1" />
              <span>{artisan.hometown}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-earthy-cream p-4 rounded-lg">
                <div className="text-sm text-earthy-stone mb-1">Experience</div>
                <div className="text-2xl font-medium">{artisan.yearsOfExperience} years</div>
              </div>
              <div className="bg-earthy-cream p-4 rounded-lg">
                <div className="text-sm text-earthy-stone mb-1">Specialty</div>
                <div className="text-2xl font-medium">{artisan.specialty}</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Biography</h3>
                <p className="text-earthy-stone">{artisan.bio}</p>
              </div>
              
              <Separator />
              
              <div className="pt-4">
                <Link to={`/customize?artisan=${artisan.id}`}>
                  <Button 
                    className="w-full bg-earthy-clay hover:bg-earthy-soil text-white py-6 text-lg"
                  >
                    Request Custom Creation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artisan's Products */}
        {artisanProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif mb-8">Creations by {artisan.name}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {artisanProducts.map((product) => (
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
                        <div className="font-medium text-earthy-clay">${product.price}</div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanDetail;
