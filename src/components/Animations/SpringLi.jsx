import posed from "react-pose";

const SpringDiv = posed.li({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.08,

    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  },
  press: {
    scale: 1.01
  }
});

export default SpringDiv;
