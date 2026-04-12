import { Clock, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const EntertainmentSection = () => {
  const entertainmentArticles = [
    {
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      title: "Netflix's Most Anticipated Series Drops to Record Viewership",
      description:
        "Streaming giant's latest original becomes cultural phenomenon overnight.",
      source: "Hollywood Reporter",
    },
    {
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      title: "Music Industry Revolution: AI Artists Top Global Charts",
      description:
        "Virtual performers gain massive following as technology reshapes creative landscape.",
      source: "Rolling Stone",
    },
    {
      image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      title: "Oscars 2026: Surprise Winners Dominate Awards Night",
      description:
        "Independent films take center stage in one of the most unpredictable ceremonies.",
      source: "Variety",
    },
    {
      image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      title: "Streaming Wars Intensify as New Platforms Enter the Market",
      description: "Competition heats up with innovative subscription models.",
      source: "Entertainment Weekly",
    },
    {
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      title: "Blockbuster Movie Breaks Opening Weekend Box Office Records",
      description: "Superhero saga sets new financial milestone globally.",
      source: "Box Office Mojo",
    },
    {
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      title: "Global Concert Tour Sells Out in Under 10 Minutes",
      description:
        "Fans flood ticketing platforms for once-in-a-lifetime live event.",
      source: "Billboard",
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Gaming Industry Hits $200 Billion Revenue Milestone",
      description:
        "E-sports and mobile gaming drive unprecedented global growth.",
      source: "IGN",
    },
    {
      image:"https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/083/standing-ovation-audience-generic_Main.png",
      title: "Broadway Revival Earns Standing Ovations Worldwide",
      description:
        "Classic production returns with modern twist and critical acclaim.",
      source: "The Stage",
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
      title: "Celebrity Documentary Series Sparks Social Media Buzz",
      description: "Behind-the-scenes revelations captivate global audiences.",
      source: "E! News",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Entertainment</h2>

        <Link to="/entertainment">
          <span className="text-green-600 font-medium hover:underline">
            View All →
          </span>
        </Link>
      </div>

      {/* 3x3 Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {entertainmentArticles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                Entertainment
              </span>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">{item.description}</p>

              <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  {item.source}
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
                  <Share2
                    size={18}
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

export default EntertainmentSection;
