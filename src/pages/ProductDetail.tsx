
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { products } from "@/data/products";
import { formatCurrency, createSlug } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  
  useEffect(() => {
    // Execute trackdesk click
    const trackScript = document.createElement('script');
    trackScript.async = true;
    trackScript.src = "//cdn.trackdesk.com/tracking.js";
    document.head.appendChild(trackScript);

    const clickScript = document.createElement('script');
    clickScript.text = `
      (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject");
      trackdesk("gda-test", "click");
    `;
    document.head.appendChild(clickScript);

    return () => {
      document.head.removeChild(trackScript);
      document.head.removeChild(clickScript);
    };
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    toast.success("Thank you for your interest! We'll contact you about purchasing this product.");
  };

  const descriptionParagraphs = product.description.split('\n\n');

  return (
    <div className="min-h-screen bg-estate-bgLight">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-estate-primary mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
              
              <div className="text-2xl font-bold text-estate-primary mb-6">
                {formatCurrency(product.price)}
              </div>
              
              <div className="prose mb-6">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="mb-4 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: paragraph.replace(/✅|✔|💛|💚|💪|🌟/g, match => `<span class="inline-block">${match}</span>`)}}
                  />
                ))}
              </div>
              
              <div className="mt-auto">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-estate-primary hover:bg-estate-primary/90 mb-4"
                  onClick={handleBuyNow}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 3).map(relatedProduct => (
              <Link to={`/product/${relatedProduct.slug}`} key={relatedProduct.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-1">{relatedProduct.title}</h3>
                    <p className="text-estate-primary font-semibold">{formatCurrency(relatedProduct.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Interested in this product?</h2>
          <p className="text-center text-estate-lightText mb-8">Fill out the form below and we'll contact you with more information</p>
          <ContactForm product={{
            title: product.title,
            address: "",
            id: product.id,
            price: product.price
          }} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
