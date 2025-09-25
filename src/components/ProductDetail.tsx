import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { toolsData } from "../toolsData"; // Your mock data

type ProductApiData = typeof toolsData[0];

const ProductDetail = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [data, setData] = useState<ProductApiData | null>(null);

  useEffect(() => {
    const tool = toolsData.find((t) => t.title === title);
    setData(tool || null);
  }, [title]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.bg }}>
        <p style={{ color: theme.colors.text + '80' }} className="text-lg">No product data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6" style={{ backgroundColor: theme.colors.bg }}>
      <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-8" style={{ backgroundColor: theme.colors.card }}>
        {/* Image + Info */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={data.image}
            alt={data.title}
            className="w-64 h-64 object-contain rounded-lg border"
            style={{ borderColor: theme.colors.text + '20' }}
          />
          <div className="text-left">
            <h1 style={{ color: theme.colors.text }} className="text-4xl font-bold mb-4">{data.title}</h1>
            <p style={{ color: theme.colors.accent }} className="text-xl font-semibold mb-2">${data.price}</p>
            <p style={{ color: theme.colors.text + '60' }} className="text-sm mb-2">
              Category: <span className="capitalize">{data.category}</span>
            </p>
            {data.rating && (
              <p style={{ color: theme.colors.accent }} className="font-medium mb-4">
                ⭐ {data.rating.rate} / 5 ({data.rating.count} reviews)
              </p>
            )}
            <button
              onClick={() => navigate(`/buy/${encodeURIComponent(data.title)}`)}
              style={{ backgroundColor: theme.colors.accent, color: '#ffffff' }}
              className="px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 style={{ color: theme.colors.text }} className="text-2xl font-semibold mb-4">Description</h2>
          <p style={{ color: theme.colors.text + '80' }} className="leading-relaxed">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
