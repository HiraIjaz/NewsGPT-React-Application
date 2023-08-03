import React, { useState, useEffect } from "react";

const AnimatedText = ({ text }) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let currentWordIndex = 0;
    let currentText = "";
    let interval = 3000;
    const words = text.split(" ");
    const typingInterval = setInterval(() => {
      if (currentWordIndex >= words.length) {
        clearInterval(typingInterval);
      } else {
        currentText += words[currentWordIndex] + " ";
        setAnimatedText(currentText);
        currentWordIndex++;
      }
    }, interval / words.length);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <span>{animatedText}</span>;
};

export default AnimatedText;
