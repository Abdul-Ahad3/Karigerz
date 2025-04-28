
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { artisans } from '../data/artisans';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';

const categories = ["Textiles", "Pottery", "Jewelry", "Woodwork"];
const budgetRanges = ["Under $50", "$50-$100", "$100-$250", "$250-$500", "$500+"];

const CustomizationPage = () => {
  const [searchParams] = useSearchParams();
  const artisanIdParam = searchParams.get('artisan');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [selectedArtisan, setSelectedArtisan] = useState(artisanIdParam || '');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (artisanIdParam) {
      setSelectedArtisan(artisanIdParam);
      
      // If we have a specific artisan, select their specialty as the default category
      const artisan = artisans.find(a => a.id === artisanIdParam);
      if (artisan) {
        setCategory(artisan.specialty.toLowerCase());
      }
    }
  }, [artisanIdParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request Submitted!",
        description: "We've received your customization request and will get back to you shortly.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setName('');
      setEmail('');
      setCategory('');
      setSelectedArtisan('');
      setDescription('');
      setBudget('');
      setTimeline('');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-earthy-cream py-12 md:py-20">
        <div className="container-padding max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-serif mb-6">Request Custom Creation</h1>
            <p className="text-lg text-earthy-stone">
              Our artisans can create unique pieces tailored specifically to your preferences and needs
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-padding max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-serif mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <h2 className="text-xl font-serif mb-6">Project Details</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category</Label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.toLowerCase()} value={cat.toLowerCase()}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artisan">Preferred Artisan (Optional)</Label>
                      <Select value={selectedArtisan} onValueChange={setSelectedArtisan}>
                        <SelectTrigger id="artisan">
                          <SelectValue placeholder="Select artisan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">No preference</SelectItem>
                          {artisans.map((artisan) => (
                            <SelectItem key={artisan.id} value={artisan.id}>
                              {artisan.name} - {artisan.specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description of Your Custom Request</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please describe what you're looking for in detail. Include any specific materials, colors, dimensions, or design elements that are important to you."
                      rows={6}
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Budget and Timeline */}
              <div>
                <h2 className="text-xl font-serif mb-6">Budget & Timeline</h2>
                <div className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Budget Range</Label>
                    <RadioGroup value={budget} onValueChange={setBudget} required>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {budgetRanges.map((range) => (
                          <div key={range} className="flex items-center space-x-2">
                            <RadioGroupItem value={range} id={`budget-${range}`} />
                            <Label htmlFor={`budget-${range}`}>{range}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select value={timeline} onValueChange={setTimeline} required>
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                          <SelectItem value="3-4 weeks">3-4 weeks</SelectItem>
                          <SelectItem value="1-2 months">1-2 months</SelectItem>
                          <SelectItem value="3+ months">3+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-earthy-clay hover:bg-earthy-soil text-white py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Custom Request"}
                </Button>
              </div>
              
              <p className="text-center text-sm text-earthy-stone">
                After submitting your request, we'll connect you with the appropriate artisan and provide a detailed quote. 
                All custom projects require communication and approval before work begins.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-earthy-cream">
        <div className="container-padding max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">How does the custom creation process work?</h3>
              <p className="text-earthy-stone">
                After you submit your request, we'll review it and connect you with an appropriate artisan. 
                They'll provide a quote and timeline estimate. Once you approve, the artisan begins work, 
                sending progress updates along the way.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">How long do custom projects take?</h3>
              <p className="text-earthy-stone">
                Timelines vary greatly depending on the complexity of the project, the artisan's current workload, 
                and the specific craft techniques required. Simple projects might take 2-3 weeks, while more intricate 
                work could require several months.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Can I request a specific artisan?</h3>
              <p className="text-earthy-stone">
                Yes! If you've seen work by a specific Karigarz artisan that you admire, you can request them for your 
                custom project. Just select their name in the form above.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">What if I'm not satisfied with the final product?</h3>
              <p className="text-earthy-stone">
                We strive for your complete satisfaction. During the process, artisans will share progress updates to 
                ensure the project is meeting your expectations. If something doesn't meet your expectations, we'll work 
                with the artisan to make reasonable adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomizationPage;
