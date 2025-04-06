
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow">
      <div className="product-image-container h-[250px] w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{product.title}</h3>
        
        <p className="text-estate-lightText mb-4 line-clamp-3">
          {product.description.split('\n')[0]}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-semibold text-estate-primary">
            {formatCurrency(product.price)}
          </span>
          
          <Link to={`/product/${product.slug}`}>
            <Button size="sm" className="gap-1">
              View Details
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
