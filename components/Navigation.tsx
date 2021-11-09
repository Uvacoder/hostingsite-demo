import { Burger, Button, Drawer, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Header.module.scss";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
const Navigation = () => {
  const router = useRouter();
  const [scroll, scrollTo] = useWindowScroll();
  const { height, width } = useViewportSize();
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("none");
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position < 100 || burgerOpened) {
      setBackgroundColor("rgba(0,0,0,0)");
    } else if (position >= 100) {
      setBackgroundColor("rgba(20, 21, 23, 0.9)");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={styles.navigation}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Drawer
        opened={burgerOpened}
        onClose={() => setBurgerOpened(false)}
        position="left"
        size="sm"
        styles={{
          drawer: {
            backgroundColor: "#101214",
            paddingTop: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "5%",
          },
        }}
        hideCloseButton
        padding="xl"
        zIndex={102}
      >
        <Button
          variant="outline"
          fullWidth
          size="xl"
          className={styles.navButton}
          onClick={() => {
            scrollTo({ y: height });
          }}
        >
          What we do
        </Button>
        <Button
          variant="outline"
          fullWidth
          size="xl"
          className={styles.navButton}
          onClick={() => {
            scrollTo({ y: height * 2.4 });
          }}
        >
          Pricing
        </Button>
        <Button
          variant="outline"
          size="xl"
          className={styles.navButton}
          onClick={() => {
            scrollTo({ y: height * 4 });
          }}
        >
          Domain search
        </Button>
      </Drawer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: "10%",
        }}
      >
        <Burger
          opened={burgerOpened}
          size="md"
          color="white"
          className={styles.navBurger}
          onClick={() => {
            setBurgerOpened(!burgerOpened);
          }}
        ></Burger>
        <Text
          style={{
            fontSize: " 1.5rem",
            color: "white",
            cursor: "pointer",
            display: burgerOpened ? "none" : "initial",
          }}
          className={styles.logoTitle}
        >
          RocketBase
        </Text>
        <FontAwesomeIcon
          icon={faRocket}
          onClick={() => {
            router.push("/");
          }}
          className={styles.logoRocket}
          style={{ display: burgerOpened ? "none" : "initial" }}
        />
      </div>
      <Link href="/">
        <Text className={styles.navText} variant="link" size="lg">
          Hosting Service
        </Text>
      </Link>
      <Text className={styles.navText} variant="link" size="lg">
        Pricing
      </Text>
      <Text
        className={styles.navText}
        variant="link"
        size="lg"
        style={{ marginRight: "10%" }}
      >
        Support
      </Text>
    </nav>
  );
};
export default Navigation;
