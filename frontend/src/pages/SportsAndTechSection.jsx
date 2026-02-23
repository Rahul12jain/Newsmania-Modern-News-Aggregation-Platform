import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SectionColumn = ({ title, color, articles, link }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

        <Link to={`/${link}`}>
          <button className="text-green-600 font-medium hover:underline">
            View All →
          </button>
        </Link>

      </div>

      {/* Articles */}
      <div className="space-y-6">
        {articles.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-36 h-28 rounded-xl object-cover transition duration-300 group-hover:scale-105"
            />

            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}
                >
                  {title}
                </span>
                {item.source}
              </div>

              <h4 className="font-semibold text-gray-900 leading-snug">
                {item.title}
              </h4>

              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  1y ago
                </div>
                {item.readTime}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SportsAndTechSection = () => {
  const sportsArticles = [
    {
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      title:
        "Olympic Records Shattered in Stunning Track and Field Performances",
      source: "BBC Sport",
      readTime: "5 min read",
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/new-york-september-4-2023-260nw-2498405043.jpg",
      title: "Tennis Grand Slam: Young Champion Crowned in Historic Final",
      source: "Sky Sports",
      readTime: "4 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "NBA Trade Deadline: Blockbuster Deals Reshape Championship Race",
      source: "ESPN",
      readTime: "6 min read",
    },
  ];

  const techArticles = [
    {
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      title: "SpaceX Successfully Launches First Commercial Moon Mission",
      source: "Space.com",
      readTime: "7 min read",
    },
    {
      image:
        "https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_large.jpg",
      title: "Apple Vision Pro 2: Next-Generation Spatial Computing Unveiled",
      source: "The Verge",
      readTime: "6 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      title:
        "Cybersecurity Threats Evolve: AI-Powered Defense Systems Deployed",
      source: "Ars Technica",
      readTime: "5 min read",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        <SectionColumn
          title="Sports"
          color="bg-orange-100 text-orange-600"
          articles={sportsArticles}
          link="sports"
        />

        <SectionColumn
          title="Technology"
          color="bg-purple-100 text-purple-600"
          articles={techArticles}
          link="technology"
        />
      </div>
    </section>
  );
};

export default SportsAndTechSection;
