import { Button, Text, Input } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import styles from "./styles/DomainSearch.module.scss";
const DomainSearch = () => {
  const phoneSize = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={styles.searchContainers}
      style={{
        gap: "5%",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: phoneSize ? "1.2rem" : "2rem",
          fontWeight: 700,
          color: "#2C2E33",
          textAlign: "center",
          marginBottom: phoneSize ? "5%" : "0%",
        }}
      >
        Search For A Domain
      </Text>
      <Input
        styles={{
          root: { width: phoneSize ? "100%" : "50%" },
        }}
        size="md"
        radius="xl"
      ></Input>
      <Button size="md" radius="lg">
        Search
      </Button>
    </div>
  );
};
export default DomainSearch;
