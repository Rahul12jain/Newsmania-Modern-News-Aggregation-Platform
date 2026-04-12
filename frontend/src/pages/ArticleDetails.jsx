// import { useParams } from "react-router-dom";

// const ArticleDetails = () => {
//   const { id } = useParams();

//   return (
//     <section className="container mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold text-gray-900 mb-6">
//         Article ID: {id}
//       </h1>

//       <img
//         src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
//         alt="Article"
//         className="w-full h-[400px] object-cover rounded-2xl mb-8"
//       />

//       <p className="text-gray-700 text-lg leading-relaxed">
//         This is where your full article content will appear. Later we will
//         dynamically fetch article data using the ID.
//       </p>
//     </section>
//   );
// };

// export default ArticleDetails;


import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

const ArticleDetails = () => {
  const { id } = useParams();

  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Article not found</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Back */}
      <Link to="/health" className="text-green-600 hover:underline">
        ← Back
      </Link>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
        {article.title}
      </h1>

      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[400px] object-cover rounded-2xl mb-8"
      />

      {/* Description */}
      <p className="text-gray-600 text-lg mb-6">{article.description}</p>

      {/* Content */}
      <p className="text-gray-800 leading-relaxed">{article.content}</p>

      {/* Source */}
      <div className="mt-8 text-sm text-gray-500">Source: {article.source}</div>
    </section>
  );
};

export default ArticleDetails;
