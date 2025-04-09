import { ProductDemo } from "@src/services/products/interfaces";

interface ProductCarouselProps {
  products: ProductDemo[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-64 bg-white rounded-xl shadow p-4"
        >
          <img
            src={product.imageUrl}
            alt={product.displayTitle}
            className="w-full h-32 object-cover rounded-md mb-2"
          />
          <h4 className="text-sm font-semibold">{product.displayTitle}</h4>
          <p className="text-lg font-bold">$50.00</p>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            View Page
          </a>
        </div>
      ))}
    </div>
  );
}
