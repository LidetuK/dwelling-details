
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Property } from "@/data/properties";

interface ContactFormProps {
  property?: Property;
}

const ContactForm = ({ property }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: property ? `I'm interested in ${property.title} at ${property.address}` : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for your inquiry! We'll contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: property ? `I'm interested in ${property.title} at ${property.address}` : "",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <h3 className="text-2xl font-semibold mb-6 font-display">
        {property ? "Interested in this property?" : "Contact Us"}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-estate-text mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="form-input"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-estate-text mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-estate-text mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-estate-text mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-input resize-none"
            placeholder="Enter your message here..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-estate-primary hover:bg-estate-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
        
        <p className="text-xs text-estate-lightText text-center mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
