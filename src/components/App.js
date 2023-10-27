import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./Article list";
import About from "./About";
console.log(blogData);


function App() {
  const about = "Personal blog by Dan Abramv.I explain with words and codes.";
  const articles =[
    {
      id: 1,
      title: "The WET code base",
      date: "October 15, 2023",
      preview: "Come waste your Time with me",
      minutesToRead: "1 min read",
    },
    {
      id: 2,
      title: "Goodbye, cleancode",
      date: "January 11, 2020",
      preview: "Let clean code guide you. Then let it go",
      minutesToRead: "5 min Read"
    },
    {
    id: 3,
      title: "My Decade in Review",
      date: "January 1, 2020",
      preview: "A personal reflection",
      minutesToRead: "26 min Read"
    }
  ];
  return (
    <div className="App">
     
    <Header blog= "Overreacted"/>
    <About
        image="https://via.placeholder.com/215"
        aboutText={about}
      />
      <ArticleList articles={articles} />
    </div>
  );
}

  
  


export default App;
