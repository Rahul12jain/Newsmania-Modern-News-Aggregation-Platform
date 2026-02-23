import { Clock, Flame, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const TrendingSection = () => {
  const trendingNews = [
    {
      image:
        "https://www.nice.com/_next/image?url=https%3A%2F%2Fresources.nice.com%2Fwp-content%2Fuploads%2F2024%2F08%2Fillustration-of-generative-ai-models-at-work.webp&w=3840&q=80",
      category: "Technology",
      title:
        "Revolutionary AI Model Achieves Human-Level Performance in Medical Diagnosis",
      description:
        "New artificial intelligence system demonstrates unprecedented accuracy in detecting early-stage diseases.",
      source: "Tech Crunch",
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/zbcAZxiLsKSH9ZQhivU7iK.jpg",
      category: "Sports",
      title: "Champions League Final: Underdog Victory Shocks Football World",
      description: "Unexpected champion crowned in dramatic penalty shootout.",
      source: "ESPN",
    },
    {
      image: "https://newsroom.ibm.com/image/HSBC_Thumbnail.png",
      category: "Technology",
      title: "Breakthrough in Quantum Computing: 1000-Qubit Processor Unveiled",
      description: "Tech giant announces revolutionary quantum processor.",
      source: "Wired",
    },

    // 🔥 NEW THREE BLOCKS

    {
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      category: "Health",
      title:
        "New Mediterranean Diet Study Shows Dramatic Heart Health Benefits",
      description:
        "Landmark 10-year research study reveals significant reduction in cardiovascular disease risk.",
      source: "Health Daily",
    },
    {
      image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      category: "Entertainment",
      title:
        "Hollywood's Biggest Night: Surprise Winners Dominate Awards Ceremony",
      description:
        "Independent films take center stage as major studios are overlooked.",
      source: "Variety",
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      category: "Business",
      title: "Central Banks Announce Coordinated Interest Rate Decision",
      description:
        "Global monetary policy shift aims to stabilize inflation while supporting economic growth.",
      source: "Bloomberg",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="bg-orange-500 text-white p-2 rounded-lg">
            <Flame size={18} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
        </div>

        <Link to="/trending">
          <button className="text-green-600 font-medium hover:underline">
            View All →
          </button>
        </Link>
        
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {trendingNews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                {item.category}
              </span>

              <h3 className="mt-3 font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>{item.source}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    1y ago
                  </div>
                </div>

                <div className="flex gap-3">
                  <Bookmark
                    size={16}
                    className="cursor-pointer hover:text-black"
                  />
                  <Share2
                    size={16}
                    className="cursor-pointer hover:text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
