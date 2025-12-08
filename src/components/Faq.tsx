import { useState } from "react";
import { faq } from "../constants";
import { FaArrowRight } from "react-icons/fa";

export default function FAQ({ index = 0 }) {
  const bgColor = index === 0 ? "#F2F5F7" : "#1a1a1a";
  const textColor = index === 0 ? "black" : "white";
  const bgColorAwnser = index === 0 ? "#1a1a1a" : "#F2F5F7";
  const textColorAwnser = index === 0 ? "white" : "black";

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      style={{ backgroundColor: bgColor, color: textColor }}
      className="
        w-full px-6 py-10
        2xl:px-40
        -mt-px
      "
    >
      <h1
        className="
          text-center text-[1.8rem] mb-2 font-title
          sm:text-[3rem]
          md:text-[3.5rem]
          lg:text-[4rem]
          xl:text-[4.2rem]
          2xl:text-[5rem]
        "
      >
        Perguntas Frequentes
      </h1>

      <div className="grid gap-2">
        {faq.map((faq, i) => (
          <div
            key={i}
            className="
              rounded-xl border-none
              bg-(--green)
              shadow-sm
              transition-all duration-300
            "
          >
            {/* PERGUNTA */}
            <button
              onClick={() => toggleAnswer(i)}
              style={{ color: textColor}}
              className="
                w-full flex justify-between items-center
                text-left
                text-[.8rem] font-semibold
                focus:outline-none
                py-2 px-3
                cursor-pointer
                sm:text-[1.2rem]
                md:text-[1.3rem]
                lg:text-[1.5rem]
                xl:p-4
              "
            >
              {faq.question}
              <span
                className={`
                  transition-transform duration-300
                  ml-4
                  ${openIndex === i ? "rotate-90" : ""}
                `}
              >
                <FaArrowRight
                  style={{ 
                    color: textColorAwnser
                  }}
                  className="
                    text-[16px]
                    sm:text-[24px]
                    2xl:text-[32px]
                  "
                />
              </span>
            </button>

            {/* RESPOSTA */}
            <div
              style={{ backgroundColor: bgColorAwnser, color: textColorAwnser}}
              className={`
                overflow-hidden transition-all duration-300
                rounded-md
                ${openIndex === i ? "max-h-40 mt-2 py-2 px-4" : "max-h-0"}
              `}
            >
              <p 
                className="
                  text-[.6rem]
                  sm:text-[.8rem]
                  md:text-[1rem]
                  lg:text-[1.2rem]
                  xl:text[1.4]
                "
              >
                {faq.awnser}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
