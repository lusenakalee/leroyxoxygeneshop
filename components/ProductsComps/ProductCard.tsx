import Link from "next/link";
import React from "react";
import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/slices/basketSlice";

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1, 
      })
    );
  };

  return (
    <div
      key={product.id}
      className="block rounded-lg p-4 shadow-md shadow-indigo-200"
    >
      <img
        alt={product.title}
        src={product.image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Product title</dt>
            <dd className="font-medium">{product.title}</dd>
          </div>
          <div className="flex justify-between">
            <dd className="text-sm text-gray-500">{product.category}</dd>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-gray-500">Kes. {product.price}</dd>
          </div>

          <div className="flex justify-between pt-4">
            <dd className="text-sm text-gray-500">
              <Link
                href={`/products/${product.id}`}
                className="underline hover:text-blue-600"
              >
                View Details
              </Link>
            </dd>

            <dt className="sr-only">Add to cart</dt>
            <dd className="text-sm text-gray-500">
              <button
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
