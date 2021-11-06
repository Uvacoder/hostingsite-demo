import { Burger, Button, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Header.module.scss";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Navigation = () => {
  const router = useRouter();
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("none");
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position >= 100) {
      setBackgroundColor("rgba(20, 21, 23, 0.9)");
    } else if (position < 100) {
      setBackgroundColor("rgba(0,0,0,0)");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);
  return (
    <nav
      className={styles.navigation}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
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
          style={{ fontSize: " 1.5rem", color: "white", cursor: "pointer" }}
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
