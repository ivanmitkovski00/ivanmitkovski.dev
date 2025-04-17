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
    <div className="py-18 px-7 flex justify-between">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-8xl font-heading font-semibold tracking-wide text-white"
        >
          {renderAnimatedText("Ivan")}
          <br />
          {renderAnimatedText("Mitkovski")}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-white to-green-300 scale-x-0 hover:scale-x-100 transition-transform duration-300 ease-in-out" />
        </motion.h1>

        <h2 className="text-green-400 text-2xl font-thin tracking-widest mt-6 px-1 flex items-center font-mono">
          {displayedText}
          <span className="w-[1ch] ml-1 animate-cursor text-green-400">|</span>
          {!isTyping && (
            <span className="ml-2 animate-dots text-green-400">{dots}</span>
          )}
        </h2>
        <div></div>
      </div>

      <div className="perspective-[1000px] z-10">
        <motion.div
          className="relative"
          drag="y"
          dragConstraints={{ left: 0, right: 300 }}
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
            className="h-96 w-96 rounded-full object-cover border-4 border-green-400"
          />
        </motion.div>
      </div>
    </div>
  );
}
