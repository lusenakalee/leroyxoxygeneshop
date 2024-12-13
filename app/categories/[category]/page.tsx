"use client";

import Banner from "@/components/HeaderComps/Banner";
import ProductsList from "@/components/ProductsComps/ProductsList";
import { useEffect, useState } from "react";
import { use } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const CategoryPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { category } = use(params);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/categories/${category}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Category not found");
          }
          throw new Error("Failed to fetch products in the category");
        }

        const data: Product[] = await response.json();
        setProducts(data);
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

    fetchCategoryProducts();
  }, [category]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="  pt-18 ">
      <Banner title={category} />
      <section className="my-8">
        {products && <ProductsList products={products} />}
      </section>
    </div>
  );
};

export default CategoryPage;
