import "./NewsItems.css";
import React from "react";

const NewsItems = (props) => {
  // Destructure and assign default values to props
  let {
    title = "Title not available",
    description = "Description not available",
    imgUrl,
    newsUrl = "#",
    author = "Unknown",
    date = "Date not available",
  } = props;

  // Ensure that required data exists before rendering
  return (
    <section className="articles my-3">
      <article>
        <div className="article-wrapper">
          <figure>
            <img
              src={
                !imgUrl
                  ? "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835"
                  : imgUrl
              }
              alt={title}
            />
          </figure>
          <div className="article-body">
            <h2>{title}</h2>
            <p>
              {description}...
              <br />
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewsItems;
