import { useParams } from "react-router-dom";
import { products } from "../pages/Home";

const ProductDetail = () => {
  const { title } = useParams<{ title: string }>();
  const product = products.find(p => p.title === decodeURIComponent(title || ""));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">{product.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-gray-500 text-sm mb-6">Category: {product.category}</p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
        <ul className="text-left max-w-md mx-auto space-y-3">
          {product.subServices.map((service, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">✔</span>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
