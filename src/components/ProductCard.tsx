type ProductCardProps = {
  title: string;
  description: string;
  icon?: string;
  category?: string;
};

const ProductCard = ({ title, description, icon, category }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{icon || "🤖"}</div>
          {category && (
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex justify-between items-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 !text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
            Learn More
          </button>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 opacity-0 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProductCard;
