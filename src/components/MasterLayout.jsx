"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@material-tailwind/react";
import InitLoader from "./InitLoader";
export default function MasterLayout({ children }) {
  const [dark, setDark] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setDark(localStorage.getItem("theme"));
  }, []);
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDark(storedTheme);
    } else {
      localStorage.setItem("theme", "dark");
      setDark("dark");
    }
  }, []);

  const darkControl = () => {
    const newTheme = dark === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setDark(newTheme);
  };

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    setSidebar(false);
    window.scrollTo(0, 0);

    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, [pathname]);
  console.log("DARK", dark);
  return (
    <ThemeProvider>
      <div className={loader ? "" : "hidden"}>
        <InitLoader />
      </div>

      <div className={dark === "dark" ? "dark" : "bg-bodyWhite"}>
        {/* Header Section */}
        <header>
          <div className=" container mx-auto pt-[30px] ">
            <div className=" flex justify-between rounded-[10px] bg-white py-[30px] dark:bg-card ">
              <div className="flex items-center px-[30px] ">
                <Link href={"/"}>
                  <img
                    src={
                      dark === "dark"
                        ? "/assets/images/logos/logo-ab-nobg.png"
                        : "/assets/images/logos/logo-ab-black.png"
                    }
                    alt=""
                    className="w-13 h-8"
                  />
                </Link>
              </div>
              <menu className="hidden items-center md:flex">
                <ul className="flex  gap-4">
                  <li>
                    <Link
                      className={
                        pathname === "/"
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      href={"/"}
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname === "/about"
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      href={"/about"}
                    >
                      Présentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        pathname === "/testimonial"
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      href={"/testimonial"}
                    >
                      Témoignages
                    </Link>
                  </li>
                  <li className="w-[100px]">
                    <Link
                      className={
                        pathname === "/contact"
                          ? "font-semibold text-theme"
                          : "font-semibold text-text"
                      }
                      href={"/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </menu>
              <div>
                <div className="flex items-center gap-4	 px-[30px]">
                  <button
                    className="hidden items-center gap-3 md:flex "
                    onClick={darkControl}
                  >
                    <p>
                      <span className="text-btn dark:text-theme ">Sombre</span>
                      <span className="text-btn dark:text-white"> / </span>
                      <span className="text-theme dark:text-white">Clair</span>
                    </p>
                    <div>
                      <img src="/assets/images/icon/sun.svg" alt="" />
                    </div>
                  </button>
                  <button
                    onClick={sidebarControl}
                    className="rounded-full border border-[#919295] p-[10px] text-[25px] "
                  >
                    <BiMenuAltRight className="text-text dark:text-text" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sidebar intro */}
        <div
          className={
            sidebar
              ? "sidebar fixed left-0 top-0 z-[999] h-full w-full bg-btn/60 transition-all duration-500"
              : "sidebar fixed left-[100%] top-0 z-[999] h-full w-full bg-btn/60 transition-all duration-500"
          }
        >
          <div className="ml-auto h-full min-h-[750px] w-[300px] bg-white px-[30px] pt-[60px] dark:bg-card md:min-h-[700px]">
            <div className="relative flex justify-center">
              <button
                onClick={sidebarControl}
                className="group absolute left-[-78px] rounded-lg bg-white px-[15px]  py-[10px] text-[26px] dark:bg-card"
              >
                <FaXmark className="text-btn transition-all duration-500 group-hover:rotate-90  dark:text-white dark:group-hover:text-theme" />
              </button>
              <div>
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/logo-ab-nobg.png"
                      : "/assets/images/logo-ab-nobg.png"
                  }
                  alt=""
                  className="w-18 h-10"
                />
              </div>
            </div>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <nav className="mt-[30px]">
              <ul>
                <li className="text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/"}
                  >
                    Accueil
                  </Link>
                </li>
                <li className="text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/about"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/about"}
                  >
                    Présentation
                  </Link>
                </li>
                <li className=" text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/projects"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/projects"}
                  >
                    Réalisations
                  </Link>
                </li>
                <li className=" text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/testimonial"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/testimonial"}
                  >
                    Témoignages
                  </Link>
                </li>
                <li className=" text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/service"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/service"}
                  >
                    Services
                  </Link>
                </li>
                <li className=" text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/testimonial"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/testimonial"}
                  >
                    Témoignages
                  </Link>
                </li>
                <li className=" text-[18px] font-semibold">
                  <Link
                    className={
                      pathname === "/contact"
                        ? "inline-block py-[8px] text-theme dark:text-theme"
                        : "inline-block py-[8px] text-btn transition-all duration-300 dark:text-white dark:hover:text-theme"
                    }
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="my-[30px] border-t border-[#ddd] dark:border-btn"></div>
            <button
              onClick={darkControl}
              className="inline-block cursor-pointer"
            >
              <div className="flex  items-center gap-4 md:hidden">
                <div>
                  <p>
                    <span className="text-btn dark:text-theme ">Dark</span>
                    <span className="text-btn dark:text-white"> / </span>
                    <span className="text-theme dark:text-white">Light</span>
                  </p>
                </div>
                <div>
                  <img src="/assets/images/icon/sun.svg" alt="" />
                </div>
              </div>
            </button>
            <div className="contact mt-[40px] pb-[20px] md:mt-[0px]">
              <div>
                <p className="text-[20px] font-semibold text-btn dark:text-white">
                  Me suivre:
                </p>

                <div className="mt-[20px] flex gap-3">
                  <Link href={"https://www.facebook.com/allan.breuil"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaFacebookF />
                    </button>
                  </Link>
                  {/*  <Link href={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaTwitter />
                    </button>
                  </Link> */}
                  <Link
                    href={
                      "https://www.linkedin.com/in/allan-breuil-a10077194/?originalSubdomain=fr"
                    }
                  >
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaLinkedinIn />
                    </button>
                  </Link>
                  {/* <Link href={"/"}>
                    <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                      <FaInstagram />
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Info Card Section */}
        <section>
          <div className="container mx-auto">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12 lg:col-span-3 ">
                <div className="info-card mt-[60px]">
                  <div className="rounded-[20px] bg-white px-[45px] py-[40px] dark:bg-card">
                    <div className="relative flex justify-center ">
                      <img
                        src="/assets/images/show/me.png"
                        alt=""
                        className="w-[200px]"
                      />
                      <img
                        src="/assets/images/show/underline.svg"
                        alt=""
                        className="absolute bottom-0"
                      />
                    </div>
                    <div>
                      <div className="mt-[25px]">
                        <div className=" text-center">
                          <h3 className="text-[24px] text-btn dark:text-white">
                            Salut! moi c'est
                            <span className="text-theme"> Allan Breuil</span>
                          </h3>
                          <p className="text-btn dark:text-white">
                            Développeur Web Freelance
                          </p>
                          <p className="mt-[25px] text-[14px] text-btn dark:text-white">
                            allan.breuil@techease.dev
                          </p>
                          <p className="mt-1 text-[14px] text-btn dark:text-white">
                            +33 6 73 10 51 70
                          </p>
                          <div className="mt-[30px] flex justify-center gap-3">
                            <Link
                              href={"https://www.facebook.com/allan.breuil"}
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaFacebookF />
                              </button>
                            </Link>
                            {/* <Link href={"/"}>
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaTwitter />
                              </button>
                            </Link> */}
                            <Link
                              href={
                                "https://www.linkedin.com/in/allan-breuil-a10077194/?originalSubdomain=fr"
                              }
                            >
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaLinkedinIn />
                              </button>
                            </Link>
                            {/*   <Link href={"/"}>
                              <button className="boxShadow rounded-lg bg-white p-[10px] text-[18px] text-text transition duration-300 hover:text-btn dark:bg-btn dark:shadow-none dark:hover:text-theme ">
                                <FaInstagram />
                              </button>
                            </Link> */}
                          </div>
                          <div className="mt-[30px]">
                            <Link
                              href="/contact"
                              className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium  text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme"
                            >
                              Contactez moi!
                            </Link>
                          </div>
                          <div className="mt-[20px]">
                            <a
                              download
                              href="assets/pdf/allan_breuil_resume.pdf"
                              className="block rounded-full border-2 border-btn bg-btn py-[10px] font-medium text-white transition-all duration-300  dark:hover:bg-transparent"
                            >
                              Télécharger CV
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-9 lg:ml-[30px]">
                <div className="main__body">{children}</div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer>
          <div className="container mx-auto mt-[60px] flex justify-center pb-[40px]">
            {/* <div>
              <p className="text-center text-text">
                Copyright <span className="text-theme">pucu</span> ©2023. All
                rights reserved
              </p>
               <div className="mt-[20px] flex justify-center text-center">
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/logo.svg"
                        : "/assets/images/logo-dark.svg"
                  }
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
