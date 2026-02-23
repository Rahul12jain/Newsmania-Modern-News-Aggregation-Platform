import { Clock, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Business</h2>

        <Link to="/business">
          <button className="text-green-600 font-medium hover:underline">
            View All →
          </button>
        </Link>
        
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* ================= LEFT FEATURED ARTICLE ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
              alt="Electric Vehicle"
              className="w-full h-[400px] object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="p-6">
            <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
              Business
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              Electric Vehicle Sales Surge 40% in Record-Breaking Quarter
            </h3>

            <p className="text-gray-600 mt-3">
              Automotive industry transformation accelerates as EV adoption
              reaches new milestones globally.
            </p>

            <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                Reuters
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  1y ago
                </div>
              </div>

              <div className="flex gap-4">
                <Bookmark
                  size={18}
                  className="cursor-pointer hover:text-black"
                />
                <Share2 size={18} className="cursor-pointer hover:text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ARTICLES ================= */}
        <div className="space-y-8">
          {/* Article 1 */}
          <div className="flex gap-4 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Startup"
              className="w-32 h-28 rounded-xl object-cover transition duration-300 group-hover:scale-105"
            />

            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  Business
                </span>
                Forbes
              </div>

              <h4 className="font-semibold text-gray-900 leading-snug">
                Startup Unicorn Valuation Reaches $10 Billion in Latest Funding
                Round
              </h4>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  1y ago
                </div>
                4 min read
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex gap-4 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Shipping"
              className="w-32 h-28 rounded-xl object-cover transition duration-300 group-hover:scale-105"
            />

            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  Business
                </span>
                WSJ
              </div>

              <h4 className="font-semibold text-gray-900 leading-snug">
                Global Supply Chain Resilience Improves as New Routes Emerge
              </h4>

              <div className="flex items-center gap-3 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  1y ago
                </div>
                6 min read
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
