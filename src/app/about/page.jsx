"use client";
import { useState, useEffect } from "react";
import { Progress, Typography } from "@material-tailwind/react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const page = () => {
  const [dark, setDark] = useState("white");
  useEffect(() => {
    setDark(localStorage.getItem("theme"));
  }, []);

  return (
    <section className="home__component mt-[60px] ">
      {/* About Intro */}
      <div className="rounded-xl bg-white p-[40px] dark:bg-card">
        <div className="grid grid-cols-12 md:gap-[50px]">
          {/* <div className="col-span-12 md:col-span-4">
            <div className="flex justify-center">
              <div className="relative flex justify-center ">
                <img src="/assets/images/techease-ab-logo-light.png" alt="" />
                <img
                  src="/assets/images/show/underline.svg"
                  alt=""
                  className="absolute bottom-[-30px]"
                />
                <img
                  src={
                    dark === "dark"
                      ? "/assets/images/techease-ab-logo-light.png"
                      : "/assets/images/techease-ab-logo-light.png"
                  }
                  alt=""
                  className="absolute bottom-[-10px]"
                />
              </div>
            </div>
          </div> */}
          <div className="col-span-12 md:col-span-12">
            <div className="mt-[60px] md:mt-0">
              <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
                <span className="text-theme">SAlut !</span> moi c'est Allan,
              </h1>
              <p className="text-[14px] text-text">
                Après 7 ans en tant que professionnel libéral dans le secteur
                médical, j'ai choisi de me reconvertir pour suivre ma passion
                pour le développement web.
                <br />
                <br /> Aujourd’hui, je suis développeur web freelance,
                spécialisé dans la création d'applications web et SaaS avec la
                stack MERN, Next.js et AWS.
                <br />
                <br /> Mon parcours m’a permis d’acquérir une solide rigueur et
                un souci du détail, indispensables pour mener à bien chaque
                projet. J’accorde une attention particulière à la compréhension
                des besoins spécifiques de mes clients afin de leur proposer des
                solutions sur mesure.
                <br />
                <br /> Passionné par le monde des affaires, je suis également
                curieux d'en apprendre toujours plus sur différents secteurs.
                Cela m'a amené à collaborer avec des entreprises dans des
                domaines variés tels que l'immobilier, la construction, le
                commerce, la blockchain, et le secteur médical, enrichissant
                ainsi ma capacité à adapter mes solutions à chaque projet.
                <br /> <br /> J’ai à cœur de fournir des solutions
                personnalisées, que ce soit pour un site vitrine, un MVP,
                automatisation avec intelligence artificielle ou une application
                SaaS complexe, tout en restant aligné avec vos objectifs.
                <br />
                <br />
                Travailler avec moi, c’est choisir une approche humaine et
                entrepreneuriale, tout en bénéficiant d’un développeur fiable et
                engagé. Contactez-moi pour que nous concrétisions ensemble votre
                projet.
              </p>
              <div className="mt-[25px] gap-[30px] md:flex">
                <div className="flex items-center gap-[20px]">
                  <h2 className="text-[50px] text-theme">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <div className="w-[80px]">
                            <CountUp delay={0} start={0} end={30} />+
                          </div>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-[14px] leading-[24px] text-text">
                    Projets <br /> réalisés
                  </p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <h2 className="text-[50px] text-theme">
                    {" "}
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <div className="w-[80px]">
                            <CountUp delay={0} start={0} end={3} />+
                          </div>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="text-[14px] leading-[24px] text-text">
                    Années <br /> d'éxperience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE & EDUCATION */}
      <div className="mt-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                Mes dernières experiences professionnelles
              </h2>
              <div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">MEDINOTE</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    CTO projet SaaS Medical NEXT.JS & AWS
                  </p>
                  <p className="text-[12px] text-text">
                    Développement d'une application SaaS pour les professionnels
                    de santé (Dentistes, Infirmiers, Kinésithérapeutes...)
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">KODEHYVE</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Développeur Full Stack React & AWS
                  </p>
                  <p className="text-[12px] text-text">
                    Développement de fonctionnalités sur une web application de
                    gestion de projet pour les promoteurs immobilier
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">CHATTERIE DES ANGES</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Développeur WordPress
                  </p>
                  <p className="text-[12px] text-text">
                    Design & intégration complète d'un site web pour une
                    chatterie
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">ACCOLADE Sàrl</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Développeur Full Stack MERN
                  </p>
                  <p className="text-[12px] text-text">
                    Développement d'une web application de gestion d'entreprise
                    pour les TPE / PME
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-xl bg-white p-[30px] dark:bg-card">
            <div>
              <h2 className="text-[24px] text-btn dark:text-white">
                FORMATION
              </h2>
              <div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2020 - 2021</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Titre Professionnel Développeur Web & Mobile
                  </p>
                  <p className="text-[12px] text-text">
                    Formation GRETA de Metz
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p className="text-[14px] text-text">2021 - 2022</p>
                  <p className="mt-[5px] text-[16px] font-semibold text-btn dark:text-white">
                    Licence Professionnelle Développeur Web & Mobile{" "}
                  </p>
                  <p className="text-[12px] text-text">
                    Université de Lorraine - Metz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Advantages */}
      <div className="mt-[30px] ">
        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
          <div>
            <h2 className="text-[24px] text-btn dark:text-white">EXPERIENCE</h2>
            <div>
              <div className="mt-[30px]">
                <div>
                  <div className="w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium  text-btn dark:text-white"
                        variant="p"
                      >
                        React JS
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        90%
                      </Typography>
                    </div>
                    <Progress
                      value={90}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        Next JS
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        80%
                      </Typography>
                    </div>
                    <Progress
                      value={80}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        NodeJs
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        86%
                      </Typography>
                    </div>
                    <Progress
                      value={86}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        TypeScript
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        80%
                      </Typography>
                    </div>
                    <Progress
                      value={80}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                  <div className="mt-[20px] w-full">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <Typography
                        className="text-[16px] font-medium text-btn dark:text-white"
                        variant="p"
                      >
                        AWS
                      </Typography>
                      <Typography
                        className="text-btn dark:text-white"
                        variant="h6"
                      >
                        65%
                      </Typography>
                    </div>
                    <Progress
                      value={65}
                      size="lg"
                      className="progress border border-theme/20 bg-theme/10 p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
