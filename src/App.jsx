import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {});

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);
      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });
  return (
    <div className="w-full bg-[#846C64]">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 1, ["--c"]: 3 }}
        >
          <img src="./img/1.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 1, ["--c"]: 7 }}
        >
          <img src="./img/2.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 2, ["--c"]: 2 }}
        >
          <img src="./img/3.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 2, ["--c"]: 6 }}
        >
          <img src="./img/4.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 3, ["--c"]: 4 }}
        >
          <img src="./img/5.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 3, ["--c"]: 8 }}
        >
          <img src="./img/6.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 4, ["--c"]: 1 }}
        >
          <img src="./img/7.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 4, ["--c"]: 4 }}
        >
          <img src="./img/8.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 5, ["--c"]: 2 }}
        >
          <img src="./img/9.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 5, ["--c"]: 6 }}
        >
          <img src="./img/10.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 6, ["--c"]: 3 }}
        >
          <img src="./img/11.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 6, ["--c"]: 7 }}
        >
          <img src="./img/12.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 7, ["--c"]: 5 }}
        >
          <img src="./img/13.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 7, ["--c"]: 8 }}
        >
          <img src="./img/14.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 8, ["--c"]: 1 }}
        >
          <img src="./img/15.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 8, ["--c"]: 4 }}
        >
          <img src="./img/16.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 9, ["--c"]: 2 }}
        >
          <img src="./img/17.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 9, ["--c"]: 6 }}
        >
          <img src="./img/18.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 10, ["--c"]: 3 }}
        >
          <img src="./img/19.jpg" alt="" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ ["--r"]: 10, ["--c"]: 7 }}
        >
          <img src="./img/20.jpg" alt="" />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
        <h2 className="text-12xl uppercase mb-4 novecento title text-black">
          Thomas Vance
          <sup className="text-sm align-super">®</sup>
        </h2>
        <h3 className="text-3xl text-black">並外れたファッション</h3>
      </div>
      <div className="w-full h-screen bg-[#d1d1d1] flex items-center justify-center mx-auto py-96 relative z-[999] text-center">
        <p className="footer text-black text-5xl w-3/4 font-regular leading-[4.2rem] text-left">
          From the dawn of civilisation onwards crowds have always undergone the
          influence of illusions. It is to the creators of illusions that they
          have raised more temples, statues, and altars than to any other
          className of men ®.
        </p>
      </div>
    </div>
  );
};

export default App;
