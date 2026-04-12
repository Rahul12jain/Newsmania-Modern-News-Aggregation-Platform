import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Health = () => {
  const healthArticles = articles.filter((item) => item.category === "health");

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Health News</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {healthArticles.map((item) => (
          <Link key={item.id} to={`/article/${item.id}`}>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4 cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl"
              />

              <h3 className="mt-4 font-semibold">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Health;
