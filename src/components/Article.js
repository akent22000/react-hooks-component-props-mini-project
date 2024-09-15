import React from "react";

// function ProjectItem({ name, about, technologies }) {
function Article({ title, date, preview, minutes }) {

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{minutes}</p>
      <p>{preview}</p>

    </article>
  );
}

export default Article;