import { Clock, Bookmark, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const HealthSection = () => {
  const healthArticles = [
    {
      id: 1,
      image:
        "https://jgu.edu.in/blog/wp-content/uploads/2023/12/shutterstock_1456161239.jpg",
      title: "Groundbreaking Gene Therapy Shows Promise for Rare Diseases",
      description:
        "Clinical trials demonstrate remarkable efficacy in treating previously incurable genetic conditions.",
      source: "Medical News Today",
    },
    {
      id: 2,
      image:
        "https://images.indianexpress.com/2024/02/mental-health-app.jpg?w=1200",
      title:
        "Mental Health Apps: Do They Really Work? New Study Provides Answers",
      description:
        "Comprehensive research analyzes effectiveness of digital therapy platforms.",
      source: "Healthline",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      title: "Mediterranean Diet Linked to Longer Life Expectancy",
      description:
        "Researchers confirm strong connection between balanced diet and cardiovascular health.",
      source: "Health Daily",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
      title: "Breakthrough Cancer Treatment Enters Phase III Trials",
      description:
        "New targeted therapy shows improved survival rates in early-stage results.",
      source: "The Lancet",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      title: "Mindfulness and Meditation Reduce Stress by 40%, Study Finds",
      description:
        "Scientific evidence highlights the neurological benefits of daily meditation.",
      source: "Wellness Weekly",
    },
    {
      id: 6,
      image:
        "https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/2c311f8b-f4e5-4edd-9bb9-c6794678479a/Harnessing+AI.jpg",
      title: "AI-Powered Diagnostics Transform Rural Healthcare Access",
      description:
        "Artificial intelligence helps doctors detect diseases faster in remote regions.",
      source: "Global Health Review",
    },
    {
      id: 7,
      image:
        "https://bpincontrol.in/wp-content/uploads/2023/08/Heart-Disease.jpg",
      title: "Sleep Deprivation Linked to Increased Heart Disease Risk",
      description:
        "New research reveals how poor sleep patterns impact long-term health.",
      source: "Sleep Foundation",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
      title: "Fitness Trackers Improve Physical Activity Consistency",
      description:
        "Wearable technology motivates users to maintain healthy daily routines.",
      source: "Fitness Today",
    },
    {
      id: 9,
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
        {healthArticles.map((item) => (
          <Link key={item.id} to="/health">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HealthSection;
