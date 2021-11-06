import { Burger, Button, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Header.module.scss";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
const Navigation = () => {
  const router = useRouter();
  const [burgerOpened, setBurgerOpened] = useState(false);
  return (
    <nav className={styles.navigation}>
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
