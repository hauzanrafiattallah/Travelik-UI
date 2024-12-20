import React, { useState } from "react";
import Logo from "../../assets/logo.webp";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Destinasi Terbaik",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Layanan Kami",
    link: "/#services",
  },
  {
    name: "Lokasi",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={Logo}
                  alt="Travelik Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 mb-0 sm:mb-2"
                />
              </Link>
            </div>

            {/* Menu utama disembunyikan di layar kecil (mulai dari md ke bawah) */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active-class" : ""
                    }
                  >
                    Beranda
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active-class" : ""
                    }
                  >
                    Tentang Kami
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/best-places"
                    className={({ isActive }) =>
                      isActive ? "active-class" : ""
                    }
                  >
                    Destinasi Terbaik
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "active-class" : ""
                    }
                  >
                    Blog
                  </NavLink>
                </li>

                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Lainnya{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tombol Pesan Sekarang */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Reservasi
              </button>

              {/* Hamburger menu muncul di layar kecil (mulai dari md ke bawah) */}
              <div className="lg:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive menu untuk tampilan mobile */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
