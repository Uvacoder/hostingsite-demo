import { motion } from "framer-motion";
import { Burger, Text, Title } from "@mantine/core";
import StarStyles from "./styles/Stars.module.sass";
import HeaderStyles from "./styles/Header.module.scss";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useViewportSize } from "@mantine/hooks";

const Header = () => {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  const viewportSize = useViewportSize();
  console.log(viewportSize);
  const [lottieWidth, setLottiewidth] = useState("45%");
  const [burgerOpened, setBurgerOpened] = useState(false);

  useEffect(() => {
    if (viewportSize.width <= 600) {
      setLottiewidth("100%");
    } else {
      setLottiewidth("45%");
    }
  }, [viewportSize]);
  return (
    <div className={HeaderStyles.header}>
      <div id={StarStyles.stars1}></div>
      <div id={StarStyles.stars2}></div>
      <div id={StarStyles.stars3}></div>
      <div className={HeaderStyles.container}>
        <motion.div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={HeaderStyles.container}
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, stiffness: 50 }}
        >
          <div className={HeaderStyles.titleContainers}>
            <span
              style={{
                color: "white",
                wordBreak: "keep-all",
                fontWeight: 600,
                fontSize: "2rem",
              }}
            >
              Have your website
              <span style={{ color: "#FF877F", marginLeft: "5px" }}>
                Take Off
              </span>
            </span>
            <span
              style={{
                color: "white",
                wordBreak: "keep-all",
                fontWeight: 600,
                fontSize: "2rem",
                marginBottom: "2%",
                marginTop: "0.5%",
              }}
            >
              by hosting with us!
            </span>
            <span
              style={{
                color: "white",
                marginBottom: "3%",
                fontSize: "1.25rem",
              }}
            >
              Prices starting at only $2.56/month*
            </span>
            <Button size="large" color="#FF877F" style={{ width: "30%" }}>
              Try it now for free
            </Button>
          </div>
          <lottie-player
            autoplay
            className={HeaderStyles.lottie}
            loop
            mode="normal"
            src="https://assets1.lottiefiles.com/packages/lf20_s6pjqbwg.json"
            style={{ width: lottieWidth }}
          ></lottie-player>
        </motion.div>
      </div>
      <Burger
        opened={burgerOpened}
        size="md"
        color="white"
        className={HeaderStyles.navBurger}
        onClick={() => {
          setBurgerOpened(!burgerOpened);
        }}
      ></Burger>
    </div>
  );
};

export default Header;
