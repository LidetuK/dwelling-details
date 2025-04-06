
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  
  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, products.length));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Explore our collection of premium Forever Living products for your health and wellness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {visibleCount < products.length && (
          <div className="text-center mt-12">
            <button 
              onClick={showMore} 
              className="bg-estate-primary hover:bg-estate-primary/90 text-white py-3 px-8 rounded-full transition-colors font-medium"
            >
              Show More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
