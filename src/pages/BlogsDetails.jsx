import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state;

  return (
    <div className="pt-20">
      <div className="h-auto max-h-[500px] overflow-hidden mt-4 sm:mt-7">
        <img
          src={image}
          alt={title}
          className="mx-auto w-full max-h-[500px] object-contain transition duration-700 hover:scale-105"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3 mt-10">
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
