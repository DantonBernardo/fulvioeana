import Slider from "../Slider/SliderAna";

export default function Feedback() {
  return (
    <section id="feedbacks" className="
      h-auto 
      px-8 my-20 
      2xl:px-60
    ">
      <h1 className="
        text-center text-neutral-900 text-[2.5rem] leading-10
        md:leading-20
        py-4
        md:text-[5rem]
        xl:text-[6rem]
        font-title
      ">O que nossos clientes dizem?</h1>
      <div className="p-3 2xl:p-5">
        <Slider />
      </div>
    </section>
  );
}
