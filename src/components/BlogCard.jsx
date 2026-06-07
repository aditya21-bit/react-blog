function BlogCard({ title, category, description, details }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h4>{category}</h4>
      <p>{description}</p>

      <ul className="details-list">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  <div className="meta">
  <span>📖 3 min read</span>
</div>
}

export default BlogCard;