import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 bg-[#020c1b]"
    >
      <Marquee items={items} className="text-[#C6A265] bg-black" />
      <div className="overflow-hidden font-light text-center contact-text-responsive text-[#C6A265]">
        <p>
          " Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-[#C6A265]">together</span> "
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-[#C6A265] bg-black border-y-2 border-[#C6A265]/30"
        iconClassName="stroke-[#C6A265] stroke-2 text-[#C6A265]"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
