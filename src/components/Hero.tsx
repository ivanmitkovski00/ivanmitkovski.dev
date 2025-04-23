import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText = "FULL STACK SOFTWARE ENGINEER";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    let i = 0;
    const typeNext = () => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        const delay = Math.random() * 120 + 50;
        setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
      }
    };
    typeNext();
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const dotCycle = ["", ".", "..", "..."];
      let d = 0;
      const interval = setInterval(() => {
        setDots(dotCycle[d % dotCycle.length]);
        d++;
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  const renderAnimatedText = (text: string) =>
    [...text].map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={letterVariant}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-semibold tracking-wide text-white leading-tight"
        >
          {renderAnimatedText("Ivan")}
          <br />
          {renderAnimatedText("Mitkovski")}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-white to-green-300 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </motion.h1>

        <h2 className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-thin tracking-widest px-1 flex justify-center lg:justify-start items-center font-mono text-green-400">
          {displayedText}
          <span className="w-[1ch] ml-1 animate-cursor">|</span>
          {!isTyping && <span className="ml-2 animate-dots">{dots}</span>}
        </h2>
      </div>

      <div className="mt-8 lg:mt-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 perspective-[1000px] z-10">
        <motion.div
          className="relative w-full h-full"
          drag="y"
          dragConstraints={{ top: 0, bottom: 300 }}
          whileTap={{ rotateY: 180 }}
          style={{ transformStyle: "preserve-3d" }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 1.25,
          }}
        >
          <img
            src="public/ivanAvatar.png"
            alt="Ivan Mitkovski avatar"
            className="w-full h-full object-cover rounded-full border-4 border-green-400"
          />
        </motion.div>
      </div>
    </div>
  );
}
