import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

interface BuyFormProps {
  productName: string;
  artisanName: string;
  onClose: () => void;
}

const BuyForm = ({ productName, artisanName, onClose }: BuyFormProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedItem, setSelectedItem] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Order Placed!",
        description: `Your order for ${productName} has been sent to ${artisanName}.`,
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <Label htmlFor="address">Complete Address</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Payment Type</Label>
        <p className="text-sm text-muted-foreground">
          Currently only <span className="font-medium">Cash on Delivery</span> is available.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-earthy-clay hover:bg-earthy-soil text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </Button>
      </div>
    </form>
  );
};

export default BuyForm;
