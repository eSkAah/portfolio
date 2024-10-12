"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const page = () => {
  const [success, setSuccess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_69g63je", //YOUR_SERVICE_ID
        "template_jijn34h", //YOUR_TEMPLATE_ID
        form.current,
        "EnEZaXcPY69O3WbXT" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSuccess("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            setSuccess("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <section className=" mt-[60px] ">
        {/* contact Intro */}
        <div className="rounded-xl bg-white p-[30px] dark:bg-card">
          <div>
            <h1 className="text-[42px] leading-[52px] text-btn dark:text-white md:text-[62px] md:leading-[72px]">
              Alors, on papote <span className="text-theme">?</span>
            </h1>
            <p className="text-[14px] text-text">
              N'hésitez pas à me contacter via LinkedIn ou Facebook si vous
              préférez.
            </p>
            <div className="mb-[30px] mt-[30px]">
              <div>
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="grid w-full gap-[20px] md:flex">
                      <div className="md:w-1/2">
                        <input
                          className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white"
                          type="text"
                          placeholder="Entrez votre nom"
                          id="name"
                          name="user_name"
                          required
                        />
                      </div>
                      <div className="md:w-1/2">
                        <input
                          className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                          id="email"
                          name="user_email"
                          type="email"
                          placeholder="Entrez votre email"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-[20px]">
                      <input
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                        type="text"
                        placeholder="Votre site web : (optionnel)"
                      />
                    </div>
                    <div className="mt-[20px]">
                      <textarea
                        name="message"
                        id="massage"
                        placeholder="Entrez votre message"
                        required
                        cols="30"
                        rows="6"
                        className="block w-full rounded-lg border bg-white px-[15px] py-[10px] text-btn focus:outline-none dark:border-none dark:bg-btn dark:text-white "
                      ></textarea>
                    </div>
                    <div>
                      <div className="mb-6 mt-[20px] flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className=" h-4 w-4 rounded  bg-btn "
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="font-medium text-text"
                          >
                            Sauvegarder mon nom, email et site web dans ce
                            navigateur pour la prochaine fois que je commente.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-[30px]">
                      <button className=" rounded-full border-2 border-theme bg-theme px-[30px] py-[10px] font-medium   text-btn transition-all duration-300 dark:hover:bg-transparent dark:hover:text-theme">
                        Envoyer
                      </button>
                      <p
                        className={
                          success ? "mt-3 text-theme" : "mt-3 text-red-500"
                        }
                      >
                        {success}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed/v1/place?q=3+rue+pablo+picasso+57700+hayange&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              height={470}
              width={"100%"}
            />
          </div>
        </div>
        {/* contact info */}
        <div className="mt-[30px] rounded-xl bg-white p-[30px] dark:bg-card">
          <h2 className="text-[24px] text-btn dark:text-white">
            Demandez un devis
          </h2>
          <div className="mt-[20px] grid gap-[30px] xl:flex xl:gap-[60px]">
            <div>
              <p className="text-[14px] text-text">Mobile</p>
              <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
                +33 6 73 10 51 70
              </p>
            </div>
            <div>
              <p className="text-[14px] text-text">Adresse du bureau</p>
              <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
                3 Rue Pablo Picasso, 57700, Hayange
              </p>
            </div>
            <div>
              <p className="text-[14px] text-text">Adresse Email</p>
              <p className="mt-[6px] text-[16px] font-medium text-btn dark:text-white">
                allan.breuil@techease.dev
              </p>
              <p className="mt-[2px] text-[16px] font-medium">
                allan.breuil@techease.dev
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
