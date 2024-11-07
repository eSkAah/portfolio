"use client";
import Link from "next/link";
const page = () => {
  return (
    <section className=" mt-[60px] ">
      {/* Project Intro */}
      <div className="rounded-xl bg-white px-[20px] py-[40px] dark:bg-card md:p-[40px]">
        <div>
          <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
            Quelques projets<span className="text-theme">!</span>
          </h1>
          <p className="text-[14px] text-text">
            Retrouvez ici quelques projets que j'ai réalisé. C'est grâce a ces
            projets que j'ai pu développer mes compétences et mon expérience.
            Ils ont été réalisé soit en tant que freelance, soit lors d'un
            stage, soit a titre personnel.
          </p>
          <div className="mt-[60px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/kodehyve.webp"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Web Application </p>
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      Application de gestion de projet immobiliers
                    </h2>
                    <p className="text-text">
                      {" "}
                      React, Bootstrap, TypeScript, AWS CDK, Lambda, APIGateway,
                      DynamoDB, Cloudfront, Cloudformation, S3, Route53,
                      Bitbucket, Jira, TDD Cypress
                    </p>
                    <br />
                    <p className="text-text">
                      Développement de fonctionnalité sur une web application
                      visant aux promotteurs immobiliers de gérer tous leurs
                      projets de A à Z.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/medinote.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">
                      SaaS (Software as a Service){" "}
                    </p>
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      SaaS de gestion documentaire pour la chirurgie dentaire
                    </h2>
                    <p className="text-text">
                      {" "}
                      NextJS, TailwindCSS, PostgreSQL, Supabase, NodeJs, AWS,
                      ShadcnUI, TypeScript, NextAuth
                    </p>
                    <br />
                    <p className="text-text">
                      Développement d’une plateforme SaaS dédiée aux
                      professionnels dentaires pour générer, envoyer et faire
                      signer électroniquement des documents explicatifs et
                      consentements pour les interventions chirurgicales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/garage-feltiere.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">
                      Site web full stack{" "}
                    </p>
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      Site web gestion de garage automobile
                    </h2>
                    <p className="text-text italic">
                      Outils: React, TypeScript, MongoDB, NodeJS, Express,
                      Github, MUI Material
                    </p>
                    <p className="text-text">
                      Site à destionation d'un garage automobile permettant
                      plusieurs fonctionnalités : <br />
                      - Gestion des ventes de véhicules
                      <br />
                      - Mise en avant des véhicules du moment
                      <br />
                      - Gestion de compte clients
                      <br />
                      - Exporations de données en excel
                      <br />
                      - Rappels de rendez-vous Clients
                      <br />- Marketing par email
                    </p>
                    {/*                     </Link>
                     */}{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/accolade.jpeg"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%] object-cover"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Application Web </p>
                    {/*                     <Link href="/projects-details">
                     */}{" "}
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      ERP pour TPE/PME secteur construction
                    </h2>
                    <p className="text-text italic">
                      React, MongoDB, NodeJS, Express, TypeScript, Websocket,
                      PDFmake, Git, GitLab, TDD Jest, Render{" "}
                    </p>
                    <p className="text-text">
                      Application de gestion pour les entreprises TPE/PME
                      permettant une gestion complète du personnel, des
                      commandes, des factures, du stock, etc.
                    </p>
                    {/*                     </Link>
                     */}{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/procost.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Application Web </p>
                    {/*                     <Link href="/projects-details">
                     */}{" "}
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      Application de gestion d'agence web
                    </h2>
                    <p className="text-text italic">Symfony, Twig, Doctrine</p>
                    {/*                     </Link>
                     */}{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/quizz-multi.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Jeu en ligne </p>
                    {/*                     <Link href="/projects-details">
                     */}{" "}
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      Jeu en ligne de quizz multi-joueurs
                    </h2>
                    <p className="text-text italic">
                      ReactJS, Mongo, NodeJs, Express, Scss, Websocket
                    </p>
                    {/*                     </Link>
                     */}{" "}
                  </div>
                </div>
              </div>
              <div className="col-span-12 mb-[40px] md:col-span-6 md:mb-0">
                <div className="boxShadow group rounded-xl bg-white p-[20px] dark:bg-btn dark:shadow-none">
                  <div className="overflow-hidden rounded-lg w-full h-full lg:h-[233px] d-flex item-center">
                    <img
                      src="/assets/images/projects/angular-lol.png"
                      alt=""
                      className="transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div className="mb-[10px] mt-[20px]">
                    <p className="text-[16px] text-text">Site web</p>
                    {/*                     <Link href="/projects-details">
                     */}{" "}
                    <h2 className="mt-[14px] inline-block text-[30px] leading-[40px] text-btn transition-all duration-300 hover:text-theme dark:text-white dark:hover:text-theme">
                      Site web informatif sur les personnage de League of
                      Legends
                    </h2>
                    <p className="text-text italic">
                      {" "}
                      Angular 14, Firebase, Bootstrap
                    </p>
                    {/*                     </Link>
                     */}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="pagination mt-6 flex justify-center md:mt-16">
            {/*  <nav aria-label="Page navigation">
              <ul className="inline-flex space-x-2">
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>

                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full  border-[#17b978] bg-theme text-btn transition-colors duration-150">
                    1
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    2
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline h-10 w-10 rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    3
                  </button>
                </li>
                <li>
                  <button className="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
