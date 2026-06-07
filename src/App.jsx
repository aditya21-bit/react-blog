import { useState } from "react";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import posts from "./data/posts";
import "./App.css";
import Footer from "./components/footer";

function App() {

  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="container">

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredPosts.map(post => (
          <BlogCard
            key={post.id}
            title={post.title}
            category={post.category}
            description={post.description}
            details={post.details}
          />

          
        ))}

      </div>
      <Footer />
    </>

  );
}

export default App;