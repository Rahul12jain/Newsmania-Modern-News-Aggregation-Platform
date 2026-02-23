import { Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        {/* Left Side - Image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
            alt="City Skyline"
            className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          {/* Category + Time */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
              Business
            </span>
            <div className="flex items-center text-gray-500 text-sm gap-1">
              <Clock size={16} />
              1y ago
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Global Markets Rally as Tech Giants Report Strong Q4 Earnings
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Major technology companies exceed expectations with record-breaking
            quarterly results, driving stock markets to new heights amid renewed
            investor confidence in AI and digital transformation.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-900">Michael Roberts</p>
              <p className="text-sm text-gray-500">
                Financial Times • 6 min read
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-black transition flex items-center gap-2">
            Read Full Story →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
