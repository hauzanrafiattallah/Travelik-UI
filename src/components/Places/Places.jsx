import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/pantai-kuta.webp";
import Img2 from "../../assets/places/candi-borobudur.jpeg";
import Img3 from "../../assets/places/raja-ampat.jpeg";
import Img4 from "../../assets/places/danau-toba.jpg";
import Img5 from "../../assets/places/gunung-bromo.jpg";
import Img6 from "../../assets/places/pulau-komodo.webp";

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  }).format(number);
};

const PlacesData = [
  {
    img: Img1,
    title: "Pantai Kuta",
    location: "Bali, Indonesia",
    description:
      "Pantai Kuta terkenal dengan pasir putih dan ombak yang cocok untuk berselancar, serta menjadi tempat favorit untuk menikmati matahari terbenam.",
    price: 2000000,
    type: "Pantai & Alam",
  },
  {
    img: Img2,
    title: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
    description:
      "Candi Borobudur adalah candi Buddha terbesar di dunia dan menjadi salah satu Situs Warisan Dunia UNESCO.",
    price: 1500000,
    type: "Budaya & Sejarah",
  },
  {
    img: Img3,
    title: "Raja Ampat",
    location: "Papua Barat, Indonesia",
    description:
      "Raja Ampat terkenal dengan keindahan bawah lautnya yang memukau, surga bagi penyelam dan pencinta snorkeling.",
    price: 5000000,
    type: "Pantai & Alam",
  },
  {
    img: Img4,
    title: "Danau Toba",
    location: "Sumatera Utara, Indonesia",
    description:
      "Danau Toba adalah danau vulkanik terbesar di dunia dan menawarkan pemandangan yang indah serta budaya Batak yang unik.",
    price: 2500000,
    type: "Danau & Pegunungan",
  },
  {
    img: Img5,
    title: "Gunung Bromo",
    location: "Jawa Timur, Indonesia",
    description:
      "Gunung Bromo menawarkan pengalaman sunrise yang spektakuler dan merupakan destinasi favorit bagi wisatawan lokal dan mancanegara.",
    price: 1800000,
    type: "Gunung & Petualangan",
  },
  {
    img: Img6,
    title: "Pulau Komodo",
    location: "Nusa Tenggara Timur, Indonesia",
    description:
      "Pulau Komodo adalah rumah bagi hewan langka Komodo dan menawarkan keindahan pantai serta perairan jernih yang memukau.",
    price: 3000000,
    type: "Petualangan & Alam",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section
          data-aos="fade-up"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Tempat Wisata Terbaik di Indonesia
          </h1>

          {/* Grid yang lebih responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
                price={formatRupiah(item.price)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
