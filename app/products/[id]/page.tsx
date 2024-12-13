'use client';

import Banner from '@/components/HeaderComps/Banner';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { use, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "@/lib/slices/basketSlice";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

const ProductViewPage = ({ params }: { params: Promise <{ id: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // Local state for quantity

  const dispatch = useDispatch();
  const { id } = use(params);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data: Product = await res.json();
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching category products:", error.message);
          setError(error.message);
        } else {
          console.error("Unexpected error:", error);
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const renderStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, i) => (
          <Star key={`filled-${i}`} className="h-5 w-5 text-yellow-500" />
        ))}
        {halfStar > 0 && <Star className="h-5 w-5 text-yellow-500 opacity-50" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addItem({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity,
        })
      );
    }
  };

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="py-2 md:py-12">
      <Banner title="Product Detail" />
      <Card className="overflow-hidden shadow-none border-none">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center bg-gray-100 rounded-lg">
              <img
                src={product?.image}
                alt={product?.title}
                width={300}
                height={300}
                className="object-cover border rounded"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
                <p className="text-gray-600 mb-4">{product?.description}</p>
                <p className="text-2xl font-bold mb-2">Kes. {product?.price.toFixed(2)}</p>
                {product?.rating && (
                  <div className="flex items-center space-x-2">
                    {renderStars(product.rating.rate)}
                    <span className="text-gray-600">({product.rating.count} reviews)</span>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleDecreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleIncreaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductViewPage;
