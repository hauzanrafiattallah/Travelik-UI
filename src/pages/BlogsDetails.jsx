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
        {/* Teks diubah ke Bahasa Indonesia dan jarak antar elemen ditambahkan */}
        <p className="text-slate-600 text-sm py-3 mt-4">
          Ditulis oleh {author} pada {date}
        </p>
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>{" "}
        {/* Jarak bawah ditambahkan */}
        <p className="leading-relaxed">{description}</p>{" "}
        {/* Tambahkan jarak dan leading */}
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
