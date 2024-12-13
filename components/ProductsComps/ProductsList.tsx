import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductsListProps {
  products: Product[]; 
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="mt-6 grid grid-cols-2 mx-2 gap-x-2 md:gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {products &&
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
