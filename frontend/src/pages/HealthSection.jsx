import { Clock, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const HealthSection = () => {
  const healthArticles = [
    {
      image:
        "https://jgu.edu.in/blog/wp-content/uploads/2023/12/shutterstock_1456161239.jpg",
      title: "Groundbreaking Gene Therapy Shows Promise for Rare Diseases",
      description:
        "Clinical trials demonstrate remarkable efficacy in treating previously incurable genetic conditions.",
      source: "Medical News Today",
    },
    {
      image:
        "https://www.techmagic.co/blog/content/images/2025/04/cover-Mental-Health-App--1-.png",
      title:
        "Mental Health Apps: Do They Really Work? New Study Provides Answers",
      description:
        "Comprehensive research analyzes effectiveness of digital therapy platforms.",
      source: "Healthline",
    },
    {
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      title: "Mediterranean Diet Linked to Longer Life Expectancy",
      description:
        "Researchers confirm strong connection between balanced diet and cardiovascular health.",
      source: "Health Daily",
    },
    {
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
      title: "Breakthrough Cancer Treatment Enters Phase III Trials",
      description:
        "New targeted therapy shows improved survival rates in early-stage results.",
      source: "The Lancet",
    },
    {
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      title: "Mindfulness and Meditation Reduce Stress by 40%, Study Finds",
      description:
        "Scientific evidence highlights the neurological benefits of daily meditation.",
      source: "Wellness Weekly",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/2c311f8b-f4e5-4edd-9bb9-c6794678479a/Harnessing+AI.jpg",
      title: "AI-Powered Diagnostics Transform Rural Healthcare Access",
      description:
        "Artificial intelligence helps doctors detect diseases faster in remote regions.",
      source: "Global Health Review",
    },
    {
      image:
        "https://bpincontrol.in/wp-content/uploads/2023/08/Heart-Disease.jpg",
      title: "Sleep Deprivation Linked to Increased Heart Disease Risk",
      description:
        "New research reveals how poor sleep patterns impact long-term health.",
      source: "Sleep Foundation",
    },
    {
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      title: "Fitness Trackers Improve Physical Activity Consistency",
      description:
        "Wearable technology motivates users to maintain healthy daily routines.",
      source: "Fitness Today",
    },
    {
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      title: "New Vaccine Platform Accelerates Pandemic Response",
      description:
        "Scientists develop adaptable vaccine systems for faster outbreak control.",
      source: "WHO Bulletin",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Health & Wellness</h2>

        <Link to="/health">
          <span className="text-green-600 font-medium hover:underline">
            View All →
          </span>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthArticles.map((item, index) => (
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
              <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                Health
              </span>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">{item.description}</p>

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

export default HealthSection;
