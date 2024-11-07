"use client";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Link from "next/link";

export default function Home() {
  const [dark, setDark] = useState("dark");

  useEffect(() => {
    setDark(localStorage.getItem("theme"));
  }, []);

  return (
    <section className=" mt-[60px] ">
      {/* About Intro */}
      <div className="rounded-xl bg-white p-4 dark:bg-card">
        <div>
          <h2 className=" text-[50px] leading-[60px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Développeur{" "}
            <span className="text-theme font-extrabold">FULL STACK</span> <br />
            Créateur de solution{" "}
            <span className="text-theme font-extrabold">
              <bold>SAAS</bold>{" "}
            </span>
          </h2>
          <p className="mt-[15px] text-gray-400">
            Développeur web full stack freelance, je crée des sites et
            applications sur mesure avec React, NEXTJS, NodeJs et AWS.
            Spécialisé dans les solutions SaaS et l’IA générative, je suis là
            pour transformer vos idées en projets concrets et performants.
            Besoin d’un partenaire technique fiable ? Parlons-en !
            {/*   Développeur web full stack freelance depuis 3 ans, je me spécialise
            dans la création de sites web et d’applications avec la stack MERN
            (MongoDB, Express.js, React, Node.js) et AWS. <br />
            Mes solutions sont conçues pour offrir performance, réactivité et
            fluidité. <br />
            En 2024, j’ai également élargi mes services pour inclure le
            développement de solutions SaaS (Software as a Service) et
            l’intégration de l’IA générative. Que vous ayez besoin d’un
            développeur web full stack pour un site sur mesure ou d’une solution
            SaaS innovante, je suis à votre écoute pour transformer vos idées en
            réalité. Mon objectif est simple : vous accompagner à chaque étape,
            de la conception à la mise en ligne, avec une approche flexible et
            orientée résultats. */}
          </p>
        </div>
      </div>

      {/* About US */}
      <div className="mt-[30px] ">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-12 md:col-span-5">
            <div className="rounded-xl bg-white p-[30px]  dark:bg-card">
              <img
                src={
                  dark === "dark"
                    ? "/assets/images/logos/techease-logo-nobg.png"
                    : "/assets/images/logos/techease-logo-nobg.png"
                }
                alt=""
                className="mt-[10px] "
              />
              <div className="mt-[40px] ">
                <p className="text-[14px] text-text dark:text-white">
                  Plus précisement
                </p>
                <Link href={"/about"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    Techease
                  </h3>
                </Link>
              </div>
            </div>
            <div>
              <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
                <div className="flex flex-wrap gap-[20px]">
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/react.png"
                      alt="React"
                      className="max-w-full max-h-full"
                    />
                  </button>
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/ts.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full"
                    />
                  </button>
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/mongo.png"
                      alt="MongoDB"
                      className="max-w-full max-h-full"
                    />
                  </button>
                </div>

                <div className="mt-2 flex flex-wrap gap-[20px]">
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/aws.png"
                      alt="AWS"
                      className="max-w-full max-h-full"
                    />
                  </button>
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/nodejs.png"
                      alt="Node.js"
                      className="max-w-full max-h-full"
                    />
                  </button>
                  <button className="boxShadow rounded-lg p-[20px] dark:bg-btn dark:shadow-none w-[80px] h-[80px] flex items-center justify-center">
                    <img
                      src="/assets/images/icon/next-js.svg"
                      alt="nextjs"
                      className="max-w-full max-h-full"
                    />
                  </button>
                </div>

                <div className="mt-[30px]">
                  <p className="text-[14px] text-text dark:text-white">
                    Spécialisations
                  </p>
                  <Link href={"/service"}>
                    <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                      Mes services{" "}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
              <div className="grid grid-cols-12 ">
                <div className="col-span-6">
                  <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <CountUp delay={0} start={0} end={3} />+
                          </>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-text dark:text-white">
                    Années <br /> d'éxperience
                  </p>
                </div>
                <div className="col-span-6">
                  <h2 className="text-[50px] font-semibold text-btn dark:text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <>
                            <CountUp delay={0} start={0} end={30} />+
                          </>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-text dark:text-white">
                    Projets <br /> réalisés
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="rounded-xl bg-white p-[30px] dark:bg-card">
              <div className="flex justify-center gap-[20px]">
                <div className="overflow-hidden rounded-lg">
                  <div>
                    <img
                      src="/assets/images/projects/kodehyve.webp"
                      alt=""
                      className="transition-all duration-300 hover:scale-[110%]"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div>
                    <img
                      src="/assets/images/projects/medinote.png"
                      alt=""
                      className="transition-all duration-300 hover:scale-[110%]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="text-[14px] text-text dark:text-white">Vitrine</p>
                <Link href={"/projects"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    Mes réalisations
                  </h3>
                </Link>
              </div>
            </div>
            <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
              <div className="col-span-6 rounded-xl bg-theme px-[30px] py-[25px]">
                <p className="text-[14px] text-btn">
                  En cours de développement...
                </p>
                {/* <Link href={""}> */}
                <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn">
                  Blog
                </h3>
                {/*                 </Link>
                 */}{" "}
              </div>
              <div className="hero-pattern col-span-6 rounded-xl bg-white px-[30px]	py-[25px] dark:bg-card">
                <p className="text-[14px] text-text dark:text-white">
                  Un projet ? Parlons en
                </p>
                <Link href={"/contact"}>
                  <h3 className="mt-[5px] inline-block text-[26px] tracking-[6px] text-btn dark:text-white">
                    Contact
                  </h3>
                </Link>
              </div>
            </div>
            <div className="mt-[30px] ">
              <div
                className="relative flex h-[185px] items-end rounded-xl bg-cover bg-local bg-center bg-no-repeat  px-[30px] py-[30px]"
                style={{
                  backgroundImage: `url(${"/assets/images/show/avis-clients.png"})`,
                }}
              >
                <div>
                  <p className="text-[14px] text-black">
                    Qu'en pense les clients ?
                  </p>
                  <Link href={"/testimonial"}>
                    <h3 className="mt-[5px] text-[26px] tracking-[6px] text-black">
                      Témoignages
                    </h3>
                  </Link>
                  <img
                    className="absolute right-[30px] top-[50px] z-10"
                    src="/assets/images/icon/shape.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
