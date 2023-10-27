import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    
  return (
<main>
    
        {posts && 
      posts.map((post,index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
          
        />
      ))}
    
    </main>
  );
}

export default ArticleList;