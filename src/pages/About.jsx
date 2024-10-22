import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Tentang Kami
          </h1>
          <p>
            Travelik Tour hadir untuk memberikan kemudahan bagi Anda yang ingin 
            menjelajahi indahnya destinasi wisata di seluruh Indonesia. Kami 
            berkomitmen untuk menghadirkan pengalaman liburan yang nyaman, aman, 
            dan menyenangkan bagi setiap pelanggan. Dengan berbagai pilihan 
            paket wisata menarik dan layanan yang berkualitas, kami siap membantu 
            Anda mewujudkan impian liburan yang tak terlupakan.
          </p>
          <br />
          <p>
            Di Travelik Tour, kami percaya bahwa setiap perjalanan adalah momen 
            berharga untuk dieksplorasi dan dinikmati. Dari keindahan alam 
            pegunungan, pantai yang menakjubkan, hingga keragaman budaya dan 
            kuliner lokal, kami berusaha memastikan setiap pengalaman Anda penuh 
            dengan kenangan yang berkesan. Kami hadir sebagai mitra perjalanan 
            terpercaya yang siap memberikan solusi dan layanan terbaik untuk 
            kebutuhan liburan Anda.
          </p>
          <br />
          <p>
            Ayo, bersama Travelik Tour, mari kita ciptakan petualangan seru dan 
            temukan pesona tersembunyi di setiap sudut Indonesia!
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
