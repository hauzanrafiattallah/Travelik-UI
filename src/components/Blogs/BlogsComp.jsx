import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/pantai-bali.webp";
import Img2 from "../../assets/places/pantai-lombok.jpg";
import Img3 from "../../assets/places/raja-ampat.jpeg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Destinasi Pantai Terbaik di Bali",
    description:
      "Bali terkenal dengan pantai-pantainya yang memukau. Pantai Kuta cocok untuk berselancar, sedangkan Pantai Nusa Dua menawarkan pengalaman liburan mewah dengan pasir putih dan air jernih. Pantai Jimbaran juga populer untuk menikmati hidangan laut dengan pemandangan matahari terbenam yang indah.",
    author: "Travelik Tour",
    date: "Oktober 22, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "Eksplorasi Keindahan Pantai di Lombok",
    description:
      "Lombok menyuguhkan pantai-pantai yang masih alami. Pantai Tanjung Aan dengan pasir merica dan Pantai Selong Belanak terkenal sebagai surga bagi peselancar. Pantai Pink yang unik dengan pasir berwarna merah muda menjadi daya tarik tersendiri bagi wisatawan.",
    author: "Travelik Tour",
    date: "Oktober 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "Pesona Bawah Laut Raja Ampat",
    description:
      "Raja Ampat di Papua Barat merupakan destinasi favorit bagi pencinta diving dan snorkeling. Terumbu karang yang mempesona dan kekayaan hayati lautnya membuat Raja Ampat menjadi salah satu tempat menyelam terbaik di dunia. Selain itu, gugusan pulau-pulau karst di atas laut menciptakan panorama yang spektakuler.",
    author: "Travelik Tour",
    date: "Oktober 22, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Blog Terbaru Kami
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
