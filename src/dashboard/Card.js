import React from "react";
import { useSpring, animated, config } from "react-spring";
import TopMentors from "./TopMentors";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const props = useSpring({
    delay: 5000,
    opacity: 1,
    from: { opacity: 0 }
  });
  return <animated.h1 style={props}>hello</animated.h1>;
}

export default Card;
