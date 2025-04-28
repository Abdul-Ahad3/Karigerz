
import { Link } from 'react-router-dom';
import { artisans } from '../data/artisans';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const ArtisansPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif mb-6 text-center">Meet Our Artisans</h1>
          <p className="text-center max-w-2xl mx-auto text-earthy-stone text-lg mb-12">
            Discover the talented individuals behind our beautiful creations, each with their own unique skills and stories
          </p>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-12 md:py-16">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <Link to={`/artisans/${artisan.id}`} key={artisan.id}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif mb-1">{artisan.name}</h3>
                      <div className="flex items-center text-earthy-stone text-sm mb-3">
                        <MapPin size={14} className="mr-1" />
                        <span>{artisan.hometown}</span>
                      </div>
                      <div className="bg-earthy-sand/30 text-earthy-soil text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                        {artisan.specialty}
                      </div>
                      <p className="text-earthy-stone line-clamp-3">{artisan.bio.substring(0, 120)}...</p>
                    </div>
                    <div className="bg-earthy-soil text-white p-4">
                      <p className="font-serif italic text-sm">"{artisan.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtisansPage;
