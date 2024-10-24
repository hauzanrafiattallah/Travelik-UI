import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/komeng.webp";
import img2 from "../../assets/dedy.jpg";
import img3 from "../../assets/kucing-akmal.jpg";

const dataTestimonial = [
  {
    id: 1,
    nama: "Komeng",
    teks: "Perjalanan yang sangat memuaskan! Semua tempat yang kami kunjungi menarik dan terorganisir dengan baik. Saya dan keluarga sangat menikmati liburan.",
    img: img1,
  },
  {
    id: 2,
    nama: "Dedi Kok Botak",
    teks: "Layanan yang diberikan Travelik Tour sangat luar biasa. Dari awal hingga akhir perjalanan, semuanya lancar dan memuaskan. Sangat direkomendasikan!",
    img: img2,
  },
  {
    id: 3,
    nama: "Kucing Akmal",
    teks: "Pengalaman yang tak terlupakan bersama Travelik Tour. Semua fasilitas disediakan dengan baik, dan panduan wisata sangat profesional serta ramah.",
    img: img3,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container mx-auto lg:max-w-[1200px] px-4 lg:px-8">
          {" "}
          {/* Ubah max-w agar lebih lebar */}
          {/* Header section */}
          <div className="text-center mb-7 max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold">Testimoni Pelanggan</h1>{" "}
            {/* Teks lebih besar */}
            <p className="text-sm lg:text-base text-gray-400 mt-7">
              {" "}
              {/* Ukuran teks lebih fleksibel */}
              Berikut adalah beberapa testimoni pelanggan yang telah menikmati
              layanan Travelik Tour Indonesia. Mereka telah berbagi pengalaman
              seru mereka!
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1200px] mx-auto gap-6 px-4 lg:px-0"
          >
            <Slider {...settings}>
              {dataTestimonial.map(({ id, nama, teks, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 mx-6 lg:mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      {" "}
                      {/* Padding dan margin */}
                      <img
                        src={img}
                        alt={nama}
                        className="rounded-full block mx-auto h-28 w-28"
                      />
                      <h1 className="text-xl lg:text-2xl font-bold">{nama}</h1>{" "}
                      {/* Ukuran teks lebih besar */}
                      <p className="text-gray-500 text-sm lg:text-base">
                        {teks}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
