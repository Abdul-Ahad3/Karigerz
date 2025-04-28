
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif mb-6">Our Story</h1>
            <p className="text-lg text-earthy-stone">
              Connecting skilled artisans from traditional communities to global audiences, preserving cultural heritage one craft at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Mission</h2>
              <p className="text-earthy-stone mb-4">
                At Karigarz, we believe that traditional craftsmanship represents more than just beautiful objects – it embodies cultural identity, ancestral knowledge, and sustainable practices that have been refined over generations.
              </p>
              <p className="text-earthy-stone mb-4">
                Our mission is to create sustainable economic opportunities for artisans from remote and underrepresented communities across Pakistan while preserving the rich cultural heritage embodied in their crafts.
              </p>
              <p className="text-earthy-stone">
                By connecting these skilled craftspeople directly with appreciative global audiences, we aim to ensure that traditional techniques and cultural knowledge continue to thrive in our modern world.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1668896165708-0d43dd2a8356" 
                alt="Artisan working on traditional craft" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-earthy-soil text-white py-16 md:py-24">
        <div className="container-padding max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-earthy-sand text-xl font-serif mb-4">Cultural Preservation</div>
              <p>
                We recognize the importance of protecting cultural heritage and ensuring traditional craft knowledge continues to be passed down through generations.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-earthy-sand text-xl font-serif mb-4">Ethical Collaboration</div>
              <p>
                We work directly with artisans, ensuring fair compensation and mutual respect while building long-term relationships based on trust.
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="text-earthy-sand text-xl font-serif mb-4">Authenticity</div>
              <p>
                We value the stories behind each creation, highlighting the artisan's journey and the cultural significance of their craft techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Static placeholder for the map */}
      <section className="py-16 md:py-24 bg-earthy-cream">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Our Artisan Communities</h2>
            <p className="text-earthy-stone">
              We work with skilled craftspeople across Pakistan, from the mountainous regions of the north to the coastal communities of the south.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-[16/9] bg-earthy-sand/30 rounded flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-lg font-medium mb-2">Interactive Map Coming Soon</h3>
                <p className="text-earthy-stone mb-4">
                  We're working on an interactive map showing our artisan locations across Pakistan.
                </p>
                <p className="text-earthy-stone text-sm">
                  Our current artisan communities include: Hunza Valley, Gilgit, Multan, Thatta, Sindh Province and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-padding max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Join Our Journey</h2>
          <p className="text-lg mb-8 text-earthy-stone">
            Explore our collection of authentic handcrafted treasures or request custom pieces tailored to your preferences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <Button className="bg-earthy-clay hover:bg-earthy-soil text-white w-full sm:w-auto">
                Browse Products <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/customize">
              <Button variant="outline" className="border-earthy-clay text-earthy-clay hover:bg-earthy-clay/10 w-full sm:w-auto">
                Request Custom Creation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
