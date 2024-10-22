import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };

  return (
    <div
      data-aos="zoom-in"
      className="h-[400px] w-full bg-cover bg-center sm:bg-contain sm:bg-no-repeat"
      style={bgImage}
    ></div>
  );
};

export default BannerPic;
